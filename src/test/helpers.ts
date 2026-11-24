import { test as base, expect, type Locator, type Page } from "@playwright/test"

export { expect }

/** Requests leave only for the site under test, so the tests send no analytics and need no network. */
export const test = base.extend({
  context: async ({ context, baseURL }, use) => {
    const origin = new URL(baseURL!).origin
    await context.route(
      (url) => url.origin !== origin,
      (route) => route.abort(),
    )
    await use(context)
  },
})

export const tile = (page: Page, id: string) => page.locator(`#${id}`)
export const details = (page: Page, id: string) => page.locator(`#${id} > .tile__details`)
export const summary = (page: Page, id: string) => page.locator(`#${id} .tile__summary`)
/** The + button; the summary itself has no height. */
export const plus = (page: Page, id: string) => page.locator(`#${id} .tile__toggle`)

export const openTiles = (page: Page) =>
  page.locator(".tile__details[open]").evaluateAll((all) => all.map((d) => d.parentElement!.id))

/** Waits until exactly this tile is open, or none when `id` is null. */
export const expectOpen = async (page: Page, id: string | null) =>
  expect.poll(() => openTiles(page)).toEqual(id ? [id] : [])

/** The box in page coordinates, so a scroll between two reads does not move it. */
export const box = (locator: Locator) =>
  locator.evaluate((el) => {
    const r = el.getBoundingClientRect()
    const x = r.x + scrollX
    const y = r.y + scrollY
    return { x, y, width: r.width, height: r.height, right: x + r.width, bottom: y + r.height }
  })

/** The box once it stops moving, after a view transition or a slide. */
export const stableBox = async (locator: Locator) => {
  let last = ""
  let current = await box(locator)
  await expect
    .poll(async () => {
      current = await box(locator)
      const key = JSON.stringify(current)
      const same = key === last
      last = key
      return same
    })
    .toBe(true)
  return current
}

/** The distinct rows and columns the avatars sit in, once they stop moving. */
export const avatarCells = async (page: Page) => {
  const images = page.locator(".avatars__image")
  const boxes = []
  for (let i = 0; i < (await images.count()); i++) boxes.push(await stableBox(images.nth(i)))
  const distinct = (values: number[]) => new Set(values.map((v) => Math.round(v / 20))).size
  return {
    count: boxes.length,
    columns: distinct(boxes.map((b) => b.x + b.width / 2)),
    rows: distinct(boxes.map((b) => b.y + b.height / 2)),
  }
}
