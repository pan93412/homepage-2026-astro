import { expect, test } from "./helpers"

for (const path of ["/zh/", "/404.html"]) {
  test(`${path} sets Chinese in the cut LINE Seed TW`, async ({ page }) => {
    const sizes = new Map<string, number>()
    page.on("response", async (r) => {
      if (r.url().includes("/fonts/line-seed-tw-")) sizes.set(r.url(), (await r.body()).length)
    })
    await page.goto(path)
    const loaded = await page.evaluate(async () => {
      await document.fonts.ready
      return [...document.fonts]
        .filter((f) => f.family.includes("LINE Seed TW") && f.status === "loaded")
        .map((f) => f.weight)
        .sort()
    })
    expect(loaded).toEqual(["400", "700"])
    await expect.poll(() => sizes.size).toBe(2)
    // The full faces are about 3.5 MB each; a cut face for this site is under 300 KB.
    for (const [url, size] of sizes) expect(size, url).toBeLessThan(300_000)
  })
}
