import { expect, test } from "./helpers"

/** Each outbound link, by class, and the utm_content and utm_medium it carries. */
const expected: Record<string, [content: string, medium: string]> = {
  stats__link: ["stats", "referral"],
  repos__link: ["now", "referral"],
  talks__link: ["talks", "referral"],
  project__link: ["project", "referral"],
  contact__link: ["contact", "referral"],
  friends__join: ["friends", "referral"],
  friends__link: ["friends", "friend_link"],
}

for (const path of ["/", "/zh/"]) {
  test(`every outbound link on ${path} carries UTM parameters`, async ({ page, baseURL }) => {
    await page.goto(path)
    const links = await page
      .locator("a[href]")
      .evaluateAll((all) => all.map((a) => ({ href: a.getAttribute("href")!, cls: a.className })))

    const seen = new Set<string>()
    for (const { href, cls } of links) {
      const url = new URL(href, baseURL)
      if (url.origin === new URL(baseURL!).origin) {
        expect(url.search, `internal link ${href}`).not.toContain("utm_")
        continue
      }
      expect(url.searchParams.get("utm_source"), href).toBe("pan93.com")
      const kind = Object.keys(expected).find((k) => cls.split(/\s+/).includes(k))
      expect(kind, `link ${href} with class "${cls}" has no expected UTM`).toBeDefined()
      const [content, medium] = expected[kind!]
      expect(url.searchParams.get("utm_content"), href).toBe(content)
      expect(url.searchParams.get("utm_medium"), href).toBe(medium)
      seen.add(kind!)
    }
    expect([...seen].sort()).toEqual(Object.keys(expected).sort())
  })
}

test("UTM parameters keep the link's own query", async ({ page }) => {
  await page.goto("/")
  const href = await page.locator(".stats__link").first().getAttribute("href")
  const url = new URL(href!)
  expect(url.searchParams.get("q")).toContain("author:pan93412")
})
