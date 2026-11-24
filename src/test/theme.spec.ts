import { type Page } from "@playwright/test"
import { expect, test } from "./helpers"

const colorScheme = (page: Page) =>
  page.evaluate(() => getComputedStyle(document.documentElement).colorScheme)
const pill = (page: Page) =>
  page.locator(".theme").evaluate((el) => getComputedStyle(el, "::before").translate)
const stored = (page: Page) => page.evaluate(() => localStorage.getItem("theme"))
const choose = (page: Page, theme: string) => page.locator(`label:has(#theme-${theme})`).click()

test.use({ colorScheme: "dark" })

test("starts on system and follows the system scheme", async ({ page }) => {
  await page.goto("/")
  await expect(page.locator("#theme-system")).toBeChecked()
  expect(await colorScheme(page)).toBe("light dark")
  expect(await stored(page)).toBeNull()
})

test("the pill slides to the chosen option", async ({ page }) => {
  await page.goto("/")
  await choose(page, "light")
  await expect.poll(() => pill(page)).toBe("30px")
  await choose(page, "dark")
  await expect.poll(() => pill(page)).toBe("60px")
  await choose(page, "system")
  await expect.poll(() => pill(page)).toMatch(/^(none|0px)$/)
})

test("a chosen theme sets the color scheme and stays after a reload", async ({ page }) => {
  await page.goto("/")
  await choose(page, "light")
  expect(await colorScheme(page)).toBe("light")
  expect(await stored(page)).toBe("light")

  await page.reload()
  await expect(page.locator("#theme-light")).toBeChecked()
  expect(await colorScheme(page)).toBe("light")

  await page.goto("/zh/")
  await expect(page.locator("#theme-light")).toBeChecked()

  await choose(page, "dark")
  expect(await colorScheme(page)).toBe("dark")
  expect(await stored(page)).toBe("dark")
})

test("system removes the stored choice", async ({ page }) => {
  await page.goto("/")
  await choose(page, "dark")
  await choose(page, "system")
  expect(await stored(page)).toBeNull()
  await page.reload()
  await expect(page.locator("#theme-system")).toBeChecked()
})

// Keyframes resolve light-dark() by the system scheme, not by the chosen one.
test("the pipeline fill uses the chosen light theme on a dark system", async ({ context }) => {
  const fillAtPeak = async (scheme: "light" | "dark", theme?: string) => {
    const page = await context.newPage()
    await page.emulateMedia({ colorScheme: scheme })
    await page.goto("/")
    if (theme) await choose(page, theme)
    const color = await page
      .locator("#bt-builder .viz__step")
      .first()
      .evaluate((step) => {
        for (const a of step.getAnimations({ subtree: true })) {
          a.pause()
          a.currentTime = 1200
        }
        return getComputedStyle(step, "::after").backgroundColor
      })
    await page.close()
    return color
  }
  expect(await fillAtPeak("dark", "light")).toBe(await fillAtPeak("light"))
})
