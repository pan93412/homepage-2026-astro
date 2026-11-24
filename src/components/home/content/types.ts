export interface Content {
  lang: string
  ogLocale: string
  description: string
  ui: {
    skip: string
    language: string
    theme: string
    now: string
    ossHeading: string
    zeaburHeading: (count: number) => string
    talks: string
    quote: (title: string) => string
    latest: string
    talkLinks: { slide: string; page: string; article: string }
    /** Unit after the years count. */
    /** Label under the years count. */
    l10nYears: string
    l10nNote: string
    l10n: string
    skills: string
    projectLink: string
    path: string
    contact: string
    friends: string
    friendsJoin: string
    expand: (name: string) => string
    pipeline: string
    l10nRing: string
  }
  role: string
  lead: string
  avatarAlts: { sitcon: string; ferris: string }
  statLabels: { pullRequests: string; contributions: string; followers: string; stars: string }
  now: { icon: string; title: string; role: string; since: string; text: string }[]
  /** `repo` is the repository name under github.com/zeabur-oss. */
  nowDetail: { oss: { repo: string; title: string; text: string }[]; zeabur: string[] }
  skills: { icon: string; label: string; tags: string[]; detail: string }[]
  projects: Record<ProjectKey, { text: string; detail: string[] }>
  timeline: { year: string; text: string }[]
  l10nDetail: string[]
  experiences: { when: string; title: string; role: string }[]
  blog: string
}

export type ProjectKey = "Zeatend" | "Zeabur" | "Builder" | "YOLO-RS"
