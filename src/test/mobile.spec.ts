import { avatarCells, expect, expectFriendsHeaderAligned, expectOpen, plus, test } from "./helpers"

test.beforeEach(async ({ page }) => {
  await page.goto("/")
})

test("the avatar shows", async ({ page }) => {
  const avatar = page.locator(".avatars__image:not(.avatars__image--extra)")
  await expect(avatar).toBeVisible()
  expect((await avatar.boundingBox())!.width).toBeGreaterThan(80)
})

test("a tap spreads the avatars into a row, and a second tap stacks them", async ({ page }) => {
  const stack = page.locator(".avatars__stack")
  await stack.tap()
  await expect(page.locator(".avatars__toggle")).toBeChecked()
  const cells = await avatarCells(page)
  expect(cells).toMatchObject({ columns: cells.count, rows: 1 })

  await stack.tap()
  await expect(page.locator(".avatars__toggle")).not.toBeChecked()
  expect(await avatarCells(page)).toMatchObject({ columns: 1, rows: 1 })
})

test("a tap opens a tile, and a tap outside closes it", async ({ page }) => {
  await plus(page, "bt-skills").tap()
  await expectOpen(page, "bt-skills")
  await page.locator(".intro__name").tap()
  await expectOpen(page, null)
})

test("no tile is wider than the screen", async ({ page }) => {
  const width = page.viewportSize()!.width
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth)
  expect(overflow).toBeLessThanOrEqual(width)
})

for (const path of ["/", "/zh/"]) {
  test(`the friends heading and its link line up on ${path}`, async ({ page }) => {
    await page.goto(path)
    await expectFriendsHeaderAligned(page)
  })
}
