import { describe, expect, test } from "bun:test"
import { count, sumStars } from "./sync-stats"

describe("GitHub stats sync", () => {
  test("adds stars of own repositories and leaves out forks", () => {
    expect(
      sumStars([
        { fork: false, stargazers_count: 95 },
        { fork: true, stargazers_count: 4 },
        { fork: false, stargazers_count: 6 },
      ]),
    ).toBe(101)
  })

  test("rejects missing or invalid counts instead of writing them", () => {
    for (const value of [undefined, null, "695", -1, 1.5]) {
      expect(() => count(value, "follower count")).toThrow("follower count")
    }
    expect(count(0, "follower count")).toBe(0)
  })
})
