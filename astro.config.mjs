// @ts-check
import { defineConfig } from "astro/config"
import sitemap from "@astrojs/sitemap"
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
  output: "static",
  site: "https://pan93.com",
  trailingSlash: "always",
  redirects: {
    "/index.zh-TW.html": "/zh/",
  },
  vite: { plugins: [tailwindcss()] },
  image: {
    remotePatterns: [
      { protocol: "https", hostname: "assets.blog.pan93.com", pathname: "/friends/**" },
    ],
  },
  integrations: [
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
