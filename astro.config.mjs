// @ts-check
import { defineConfig } from "astro/config"
import sitemap from "@astrojs/sitemap"
import icon from "astro-icon"

export default defineConfig({
  output: "static",
  site: "https://pan93.com",
  trailingSlash: "always",
  redirects: {
    "/index.zh-TW.html": "/zh/",
  },
  // Lets a component style the root of a child component it passes a class to.
  scopedStyleStrategy: "class",
  image: {
    remotePatterns: [
      { protocol: "https", hostname: "assets.blog.pan93.com", pathname: "/friends/**" },
    ],
  },
  integrations: [
    icon(),
    sitemap({
      i18n: { defaultLocale: "en", locales: { en: "en", zh: "zh-TW" } },
    }),
  ],
  i18n: {
    defaultLocale: "en",
    locales: ["en", { path: "zh", codes: ["zh-TW", "zh"] }],
    routing: {
      prefixDefaultLocale: false,
    },
  },
})
