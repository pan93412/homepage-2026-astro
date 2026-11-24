import { defineConfig, devices } from "@playwright/test"

// https://docs.astro.build/en/guides/testing/#playwright
// Run `bun run build` first: the tests run against the built site.
export default defineConfig({
  testDir: "src/test",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? [["github"], ["list"]] : "list",
  webServer: {
    // --ignore-lock keeps the server in the foreground when Astro detects an agent.
    command: "bun run preview --ignore-lock",
    url: "http://localhost:4321/",
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
  },
  use: {
    baseURL: "http://localhost:4321/",
    trace: "retain-on-failure",
  },
  projects: [
    {
      name: "desktop",
      testIgnore: /mobile\.spec\.ts$/,
      use: { ...devices["Desktop Chrome"], viewport: { width: 1300, height: 900 } },
    },
    {
      name: "mobile",
      testMatch: /mobile\.spec\.ts$/,
      use: { ...devices["Pixel 7"] },
    },
  ],
})
