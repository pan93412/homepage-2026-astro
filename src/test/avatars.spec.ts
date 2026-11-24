import { type Page } from "@playwright/test"
import { avatarCells, expect, test } from "./helpers"

test("hover spreads the avatars into a row", async ({ page }) => {
  await page.goto("/")
  expect(await avatarCells(page)).toMatchObject({ columns: 1, rows: 1 })
  await page.locator(".avatars__stack").hover()
  const cells = await avatarCells(page)
  expect(cells).toMatchObject({ columns: cells.count, rows: 1 })
})

// The intro tile's height depends on the fonts, which differ between machines, so the room is set here.
const giveRoom = (page: Page) =>
  page.addStyleTag({ content: ".avatars { height: 240px !important; flex: none !important }" })

test("with room in the intro tile, the avatars sit in a 2×2 grid", async ({ page }) => {
  await page.goto("/")
  expect(await avatarCells(page)).toMatchObject({ columns: 1, rows: 1 })
  await giveRoom(page)
  expect(await avatarCells(page)).toMatchObject({ columns: 2, rows: 2 })
})

test("the 2×2 grid wins over avatars spread by a tap", async ({ page }) => {
  await page.goto("/")
  await page.locator(".avatars__stack").click()
  await expect(page.locator(".avatars__toggle")).toBeChecked()
  await page.mouse.move(0, 0)
  await giveRoom(page)
  expect(await avatarCells(page)).toMatchObject({ columns: 2, rows: 2 })
})
