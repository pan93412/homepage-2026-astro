import { type Page } from "@playwright/test"
import { expect, test } from "./helpers"

test.use({ colorScheme: "dark" })

const print = async (page: Page, path = "/") => {
  await page.goto(path)
  await page.emulateMedia({ media: "print" })
}

test("every tile prints its details while closed", async ({ page }) => {
  await page.goto("/")
  await expect(page.locator(".tile__more").first()).toBeHidden()

  await page.emulateMedia({ media: "print" })
  for (const more of await page.locator(".tile__more").all()) await expect(more).toBeVisible()
  await expect(page.locator(".tile__details[open]")).toHaveCount(0)
})

test("controls, charts and the friends list do not print", async ({ page }) => {
  await print(page)
  for (const selector of [
    ".tile__toggle",
    ".intro__nav",
    ".friends",
    ".viz",
    ".hide-when-open",
    ".avatars__image--extra",
  ])
    for (const element of await page.locator(selector).all()) await expect(element).toBeHidden()
})

test("prints in the light scheme with a dark system or a chosen dark theme", async ({ page }) => {
  await print(page)
  const scheme = () => page.evaluate(() => getComputedStyle(document.documentElement).colorScheme)
  expect(await scheme()).toBe("light")

  await page.emulateMedia({ media: "screen" })
  await page.locator("label:has(#theme-dark)").click()
  await page.emulateMedia({ media: "print" })
  expect(await scheme()).toBe("light")
})

for (const path of ["/", "/zh/"])
  test(`links on ${path} print a short URL without the scheme or the query`, async ({ page }) => {
    await print(page, path)
    const links = await page.locator("[data-print-url]").evaluateAll((all) =>
      all.map((a) => ({
        href: (a as HTMLAnchorElement).href,
        printed: getComputedStyle(a, "::after").content,
      })),
    )
    expect(links.length).toBeGreaterThan(20)
    for (const { href, printed } of links) {
      const url = new URL(href)
      expect(printed, href).not.toMatch(/https?:|utm_/)
      expect(printed, href).toContain(url.hostname.replace(/^www\./, ""))
      for (const [key, value] of url.searchParams)
        if (!key.startsWith("utm_")) expect(printed, href).toContain(`${key}=${value}`)
    }
  })

test("printed tiles leave out the room kept for their charts, even an open one", async ({
  page,
}) => {
  await page.goto("/#bt-talks")
  await expect(page.locator("#bt-talks > .tile__details")).toHaveAttribute("open")
  await page.emulateMedia({ media: "print" })
  for (const tile of await page.locator(".intro, .stat, .project").all()) {
    const { paddingTop, minHeight } = await tile.evaluate((el) => getComputedStyle(el))
    expect(paddingTop, (await tile.getAttribute("id")) ?? "intro").toBe("0px")
    expect(minHeight).toBe("0px")
  }
})

test("the projects get a heading only in print", async ({ page }) => {
  await page.goto("/zh/")
  const heading = page.locator(".projects-heading")
  await expect(heading).toBeHidden()
  await page.emulateMedia({ media: "print" })
  await expect(heading).toBeVisible()
  await expect(heading).toHaveText("專案")
})
