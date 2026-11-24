import { readFile, writeFile } from "node:fs/promises"
import { execFileSync } from "node:child_process"

export interface GitHubStats {
  stars: number
  followers: number
  mergedPullRequests: number
  contributionsLastYear: number
}

interface Repo {
  fork: boolean
  stargazers_count: number
}

const login = "pan93412"
const api = "https://api.github.com"

/** Stars on the account's own public repositories. Forks are left out. */
export function sumStars(repos: Repo[]): number {
  return repos.filter((repo) => !repo.fork).reduce((sum, repo) => sum + repo.stargazers_count, 0)
}

/** Rejects a response that is not a whole, non-negative count. */
export function count(value: unknown, name: string): number {
  if (typeof value !== "number" || !Number.isSafeInteger(value) || value < 0) {
    throw new Error(`GitHub returned no valid ${name}.`)
  }
  return value
}

async function request(path: string, token: string, init: RequestInit = {}): Promise<unknown> {
  const response = await fetch(`${api}${path}`, {
    ...init,
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${token}`,
      "X-GitHub-Api-Version": "2022-11-28",
      "User-Agent": "homepage-sync-stats",
    },
    signal: AbortSignal.timeout(30_000),
  })
  if (!response.ok) throw new Error(`GitHub ${path} failed: HTTP ${response.status}`)
  return response.json()
}

async function fetchStats(token: string): Promise<GitHubStats> {
  const repos: Repo[] = []
  for (let page = 1; ; page++) {
    const batch = (await request(
      `/users/${login}/repos?type=owner&per_page=100&page=${page}`,
      token,
    )) as Repo[]
    if (!Array.isArray(batch)) throw new Error("GitHub returned no repository list.")
    repos.push(...batch)
    if (batch.length < 100) break
  }
  const user = (await request(`/users/${login}`, token)) as { followers?: unknown }
  const search = (await request(
    `/search/issues?q=${encodeURIComponent(`author:${login} type:pr is:merged is:public`)}&per_page=1`,
    token,
  )) as { total_count?: unknown; incomplete_results?: unknown }
  if (search.incomplete_results) throw new Error("GitHub search returned incomplete results.")
  const graph = (await request("/graphql", token, {
    method: "POST",
    body: JSON.stringify({
      query: `query($login: String!) { user(login: $login) { contributionsCollection {
        contributionCalendar { totalContributions } } } }`,
      variables: { login },
    }),
  })) as {
    data?: {
      user?: {
        contributionsCollection?: { contributionCalendar?: { totalContributions?: unknown } }
      }
    }
  }
  return {
    stars: sumStars(repos),
    followers: count(user.followers, "follower count"),
    mergedPullRequests: count(search.total_count, "merged pull request count"),
    contributionsLastYear: count(
      graph.data?.user?.contributionsCollection?.contributionCalendar?.totalContributions,
      "contribution count",
    ),
  }
}

if (import.meta.main) {
  const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN
  if (!token) throw new Error("Set GITHUB_TOKEN or GH_TOKEN. The contribution count needs a token.")
  const stats = await fetchStats(token)
  const destination = new URL("../src/data/github-stats.json", import.meta.url)
  const next = execFileSync(
    "bun",
    ["x", "--no-install", "oxfmt", "--stdin-filepath=src/data/github-stats.json"],
    { input: JSON.stringify(stats), encoding: "utf8" },
  )
  let previous = ""
  try {
    previous = await readFile(destination, "utf8")
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code !== "ENOENT") throw error
  }
  if (previous !== next) await writeFile(destination, next)
  console.log(
    `GitHub stats: ${JSON.stringify(stats)}; ${previous === next ? "unchanged" : "updated JSON"}.`,
  )
}
