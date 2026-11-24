import { avatarCells, expect, expectOpen, plus, test } from "./helpers"

test("hover spreads the avatars into a row", async ({ page }) => {
  await page.goto("/")
  expect(await avatarCells(page)).toMatchObject({ columns: 1, rows: 1 })
  await page.locator(".avatars__stack").hover()
  const cells = await avatarCells(page)
  expect(cells).toMatchObject({ columns: cells.count, rows: 1 })
})

test("with room in the intro tile, the avatars sit in a 2×2 grid", async ({ page }) => {
  await page.goto("/")
  await plus(page, "bt-talks").click()
  await expectOpen(page, "bt-talks")
  expect(await avatarCells(page)).toMatchObject({ columns: 2, rows: 2 })
})

test("the 2×2 grid wins over avatars spread by a tap", async ({ page }) => {
  await page.goto("/")
  // A click on the avatars outside an open tile closes it, so spread them first.
  await page.locator(".avatars__stack").click()
  await expect(page.locator(".avatars__toggle")).toBeChecked()
  await plus(page, "bt-talks").click()
  await expectOpen(page, "bt-talks")
  await page.mouse.move(0, 0)
  expect(await avatarCells(page)).toMatchObject({ columns: 2, rows: 2 })
})
