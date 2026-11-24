import { details, expect, expectOpen, plus, summary, test, tile } from "./helpers"

test.beforeEach(async ({ page }) => {
  await page.goto("/")
})

test("a click anywhere on a closed tile opens it", async ({ page }) => {
  await tile(page, "bt-skills").click({ position: { x: 40, y: 40 } })
  await expectOpen(page, "bt-skills")
  await expect(page).toHaveURL(/#bt-skills$/)
})

test("the + button closes the open tile", async ({ page }) => {
  await plus(page, "bt-now").click()
  await expectOpen(page, "bt-now")
  await plus(page, "bt-now").click()
  await expectOpen(page, null)
  await expect(page).toHaveURL(/\/$/)
})

test("only one tile is open at a time", async ({ page }) => {
  await plus(page, "bt-now").click()
  await expectOpen(page, "bt-now")
  await plus(page, "bt-talks").click()
  await expectOpen(page, "bt-talks")
})

test("a click outside the open tile closes it, a click inside does not", async ({ page }) => {
  await plus(page, "bt-skills").click()
  await expectOpen(page, "bt-skills")
  await page.locator("#bt-skills .heading").click()
  await expectOpen(page, "bt-skills")
  await page.locator(".intro__name").click()
  await expectOpen(page, null)
})

test("selecting text outside the open tile keeps it open", async ({ page }) => {
  await plus(page, "bt-skills").click()
  await expectOpen(page, "bt-skills")
  const lead = page.locator(".intro__lead")
  const b = (await lead.boundingBox())!
  await page.mouse.move(b.x + 2, b.y + 4)
  await page.mouse.down()
  await page.mouse.move(b.x + b.width - 2, b.y + b.height - 4, { steps: 5 })
  await page.mouse.up()
  expect(await page.evaluate(() => getSelection()!.toString().length)).toBeGreaterThan(0)
  await expectOpen(page, "bt-skills")
})

test("Escape closes the open tile and focuses its + button", async ({ page }) => {
  await plus(page, "bt-talks").click()
  await expectOpen(page, "bt-talks")
  await page.keyboard.press("Escape")
  await expectOpen(page, null)
  await expect(summary(page, "bt-talks")).toBeFocused()
})

test.describe("history", () => {
  test("Back closes the tile and Forward opens it again", async ({ page }) => {
    const before = await page.evaluate(() => history.length)
    await plus(page, "bt-now").click()
    await expectOpen(page, "bt-now")
    await page.goBack()
    await expectOpen(page, null)
    await expect(page).toHaveURL(/\/$/)
    await page.goForward()
    await expectOpen(page, "bt-now")
    await expect(page).toHaveURL(/#bt-now$/)
    expect(await page.evaluate(() => history.length)).toBe(before + 1)
  })

  test("switching tiles replaces the entry, so one Back closes", async ({ page }) => {
    const before = await page.evaluate(() => history.length)
    await plus(page, "bt-now").click()
    await expectOpen(page, "bt-now")
    await plus(page, "bt-talks").click()
    await expectOpen(page, "bt-talks")
    await expect(page).toHaveURL(/#bt-talks$/)
    expect(await page.evaluate(() => history.length)).toBe(before + 1)
    await page.goBack()
    await expectOpen(page, null)
  })

  test("closing does not add entries", async ({ page }) => {
    const before = await page.evaluate(() => history.length)
    for (let i = 0; i < 3; i++) {
      await plus(page, "bt-skills").click()
      await expectOpen(page, "bt-skills")
      await page.keyboard.press("Escape")
      await expectOpen(page, null)
    }
    expect(await page.evaluate(() => history.length)).toBe(before + 1)
  })
})

test.describe("links to a tile", () => {
  test("a page load with the hash opens that tile", async ({ page }) => {
    await page.goto("/zh/#bt-zeatend")
    await expectOpen(page, "bt-zeatend")
    await expect(tile(page, "bt-zeatend")).toBeInViewport()
  })

  test("switching from a linked tile and closing leaves no tile open", async ({ page }) => {
    await page.goto("/?from=link#bt-now")
    await expectOpen(page, "bt-now")
    await plus(page, "bt-talks").click()
    await expectOpen(page, "bt-talks")
    await page.locator(".intro__name").click()
    await expectOpen(page, null)
    await expect(page).toHaveURL(/\?from=link$/)
  })

  test("Back from a linked tile closes it and stays on the page", async ({ page }) => {
    await page.goto("/?from=link#bt-now")
    await expectOpen(page, "bt-now")
    await page.goBack()
    await expectOpen(page, null)
    await expect(page).toHaveURL(/\?from=link$/)
  })

  test("an in-page link to the hash opens the tile, and closing goes back", async ({ page }) => {
    await page.evaluate(() => (location.hash = "bt-skills"))
    await expectOpen(page, "bt-skills")
    await plus(page, "bt-path").click()
    await expectOpen(page, "bt-path")
    await page.keyboard.press("Escape")
    await expectOpen(page, null)
    await expect(page).toHaveURL(/\/$/)
  })
})

test("a closed tile hides its details", async ({ page }) => {
  await expect(details(page, "bt-now").locator(".tile__more")).toBeHidden()
})
