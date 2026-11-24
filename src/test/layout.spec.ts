import { type Page } from "@playwright/test"
import { expect, expectFriendsHeaderAligned, expectOpen, plus, stableBox, test } from "./helpers"

const tiles = (page: Page) => page.locator("main > .tile")
const contact = (page: Page) => page.locator("main > .tile--sage")

/** Fails when two tiles overlap. */
const expectNoOverlap = async (page: Page) => {
  const boxes = await tiles(page).evaluateAll((all) =>
    all.map((t) => ({ id: t.id || t.className, ...t.getBoundingClientRect().toJSON() })),
  )
  for (const [i, a] of boxes.entries())
    for (const b of boxes.slice(i + 1)) {
      const overlap =
        Math.min(a.right, b.right) - Math.max(a.left, b.left) > 1 &&
        Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top) > 1
      expect(overlap, `${a.id} overlaps ${b.id}`).toBe(false)
    }
}

const open = async (page: Page, id: string) => {
  await plus(page, id).click()
  await expectOpen(page, id)
  await stableBox(page.locator(`#${id}`))
}

for (const width of [1300, 1000]) {
  test.describe(`four columns at ${width}px`, () => {
    test.use({ viewport: { width, height: 900 } })

    test.beforeEach(async ({ page }) => {
      await page.goto("/")
    })

    test("YOLO-RS opens on the right half, and the path takes the full row", async ({ page }) => {
      await open(page, "bt-yolors")
      const bento = await stableBox(page.locator("main"))
      const yolo = await stableBox(page.locator("#bt-yolors"))
      const skills = await stableBox(page.locator("#bt-skills"))
      const builder = await stableBox(page.locator("#bt-builder"))
      const sage = await stableBox(contact(page))
      const path = await stableBox(page.locator("#bt-path"))

      expect(yolo.x).toBeGreaterThan(bento.x + bento.width / 2 - 20)
      expect(yolo.right).toBeCloseTo(bento.right, 0)
      // Builder and Contact fill the left half beside it, under Skills.
      for (const b of [builder, sage]) {
        expect(b.right).toBeLessThan(yolo.x)
        expect(b.y).toBeGreaterThanOrEqual(skills.bottom)
      }
      expect(path.width).toBeCloseTo(bento.width, 0)
      await expectNoOverlap(page)
    })

    test("the open YOLO-RS chart stays inside its tile", async ({ page }) => {
      await open(page, "bt-yolors")
      const yolo = await stableBox(page.locator("#bt-yolors"))
      const chart = await stableBox(page.locator("#bt-yolors .viz__detect"))
      expect(chart.x).toBeGreaterThanOrEqual(yolo.x)
      expect(chart.right).toBeLessThanOrEqual(yolo.right)
    })

    test("the closed YOLO-RS chart sits above the tags", async ({ page }) => {
      const chart = await stableBox(page.locator("#bt-yolors .viz__detect"))
      const tags = await stableBox(page.locator("#bt-yolors .project__tags"))
      expect(chart.bottom).toBeLessThanOrEqual(tags.y)
    })

    for (const id of ["bt-now", "bt-talks", "bt-zeatend", "bt-builder"]) {
      test(`the path takes the full row while ${id} is open`, async ({ page }) => {
        await open(page, id)
        const bento = await stableBox(page.locator("main"))
        const path = await stableBox(page.locator("#bt-path"))
        expect(path.width).toBeCloseTo(bento.width, 0)
        await expectNoOverlap(page)
      })
    }

    test("Contact stays beside the path while Skills is open", async ({ page }) => {
      await open(page, "bt-skills")
      const bento = await stableBox(page.locator("main"))
      const path = await stableBox(page.locator("#bt-path"))
      const sage = await stableBox(contact(page))
      expect(path.width).toBeLessThan(bento.width - 100)
      expect(sage.y).toBeLessThan(path.bottom)
      expect(sage.bottom).toBeGreaterThan(path.y)
      await expectNoOverlap(page)
    })

    test("no tiles overlap with every tile closed", async ({ page }) => {
      await stableBox(page.locator("main"))
      await expectNoOverlap(page)
    })
  })
}

for (const path of ["/", "/zh/"]) {
  test(`the friends heading and its link line up on ${path}`, async ({ page }) => {
    await page.goto(path)
    await expectFriendsHeaderAligned(page)
  })
}

test.describe("two columns at 700px", () => {
  test.use({ viewport: { width: 700, height: 900 } })

  const states = [
    null,
    "bt-now",
    "bt-talks",
    "bt-l10n",
    "bt-skills",
    "bt-zeatend",
    "bt-yolors",
    "bt-path",
  ]
  for (const id of states) {
    test(`Contact leaves no empty half row ${id ? `while ${id} is open` : "with every tile closed"}`, async ({
      page,
    }) => {
      await page.goto("/")
      if (id) await open(page, id)
      const bento = await stableBox(page.locator("main"))
      const sage = await stableBox(contact(page))
      const mates = await tiles(page).evaluateAll(
        (all, c) =>
          all.filter((t) => {
            const r = t.getBoundingClientRect()
            return (
              !t.classList.contains("tile--sage") &&
              r.top + scrollY < c.bottom - 1 &&
              r.bottom + scrollY > c.y + 1
            )
          }).length,
        sage,
      )
      if (mates === 0) expect(sage.width).toBeCloseTo(bento.width, 0)
      else expect(sage.width).toBeLessThan(bento.width / 2 + 1)
      await expectNoOverlap(page)
    })
  }
})
