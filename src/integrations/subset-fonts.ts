import type { AstroIntegration } from "astro"
import { execFileSync } from "node:child_process"
import { createReadStream } from "node:fs"
import { mkdir, readdir, readFile, rm, writeFile } from "node:fs/promises"
import { join } from "node:path"
import { fileURLToPath } from "node:url"

/** The full LINE Seed TW faces, about 3.5 MB each. Only the build output ships, cut down. */
const faces = {
  "/fonts/line-seed-tw-400.woff2": "LINESeedTW-Regular.woff2",
  "/fonts/line-seed-tw-700.woff2": "LINESeedTW-Bold.woff2",
}

/** The redirect from /index.zh-TW.html builds a directory with that name, so skip directories. */
const files = async (dir: string): Promise<string[]> =>
  (await readdir(dir, { recursive: true, withFileTypes: true }))
    .filter((e) => e.isFile())
    .map((e) => join(e.parentPath, e.name))

/**
 * Serves the full faces in development, and after a build keeps only the non-ASCII characters
 * the built pages and stylesheets contain. Geist covers ASCII.
 */
export default function subsetFonts(): AstroIntegration {
  let root: URL
  return {
    name: "subset-fonts",
    hooks: {
      "astro:config:setup": ({ config }) => {
        root = new URL("fonts/", config.root)
      },
      "astro:server:setup": ({ server }) => {
        server.middlewares.use((req, res, next) => {
          const face = faces[req.url as keyof typeof faces]
          if (!face) return next()
          res.setHeader("Content-Type", "font/woff2")
          createReadStream(new URL(face, root)).pipe(res)
        })
      },
      "astro:build:done": async ({ dir, logger }) => {
        const out = fileURLToPath(dir)
        const chars = new Set<string>()
        for (const file of await files(out)) {
          if (!/\.(html|css)$/.test(file)) continue
          for (const c of await readFile(file, "utf8")) if (c.codePointAt(0)! > 0x7f) chars.add(c)
        }
        const text = join(out, "fonts", "chars.txt")
        await mkdir(join(out, "fonts"), { recursive: true })
        await writeFile(text, [...chars].sort().join(""))
        for (const [path, face] of Object.entries(faces)) {
          execFileSync("pyftsubset", [
            fileURLToPath(new URL(face, root)),
            `--text-file=${text}`,
            "--flavor=woff2",
            "--layout-features=*",
            `--output-file=${join(out, path)}`,
          ])
        }
        await rm(text)
        logger.info(`cut LINE Seed TW to ${chars.size} characters`)
      },
    },
  }
}
