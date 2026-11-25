import github from "../../../data/github-stats.json"
import en from "./en"
import type { Content, ProjectKey } from "./types"
import zh from "./zh"

export type { Content, ProjectKey } from "./types"
export type Locale = "en" | "zh"
export const content: Record<Locale, Content> = { en, zh }

export const name = "Yi-Jyun Pan"

// Shown behind the main avatar and fanned out on hover.
export const avatars = [
  { src: "/avatars/sitcon-2026.avif", alt: "sitcon" },
  { src: "/avatars/ferris.avif", alt: "ferris" },
] as const

/** 2425 -> "2,400+"; numbers under 1,000 stay exact. */
const approx = (n: number) =>
  n < 1000 ? String(n) : `${(Math.floor(n / 100) * 100).toLocaleString("en-US")}+`

// Refreshed by bun run sync:stats before each production build (.github/workflows/deploy.yml).
export const stats = [
  {
    key: "pullRequests",
    value: approx(github.mergedPullRequests),
    url: "https://github.com/pulls?q=author%3Apan93412+is%3Amerged+is%3Apublic",
  },
  {
    key: "contributions",
    value: approx(github.contributionsLastYear),
    url: "https://github.com/pan93412",
  },
  {
    key: "followers",
    value: approx(github.followers),
    url: "https://github.com/pan93412?tab=followers",
  },
  {
    key: "stars",
    value: approx(github.stars),
    url: "https://github.com/pan93412?tab=repositories&sort=stargazers",
  },
] as const

export const projects: {
  key: ProjectKey
  tags: string[]
  url: string
  /** The scene in the tile: a screen from the project, or one worded by `scene` in each locale. */
  scene: "shot" | "agent" | "speed"
  /** Screens from the project's repository, cut as BentoViz's `shot` says. */
  shot?: { src: Record<"en" | "zh", string>; position: string }
}[] = [
  {
    key: "Zeatend",
    tags: ["Rust"],
    url: "https://github.com/zeabur-oss/zeatend",
    scene: "shot",
    // zeabur-oss/zeatend main (cc5a4aa), docs/screens/80x24: the install screen once the cluster is ready.
    shot: {
      src: { en: "/shots/zeatend-done-en.svg", zh: "/shots/zeatend-done-zh.svg" },
      position: "left top",
    },
  },
  {
    key: "Zeabur",
    tags: ["Rust", "700+ stars"],
    url: "https://github.com/zeabur-oss/zeabur",
    scene: "shot",
    // zeabur-oss/zeabur main (ebd47c2f7), docs/images/readme-diagnosis-light.avif: a crashing service, explained.
    shot: {
      src: { en: "/shots/zeabur-diagnosis.avif", zh: "/shots/zeabur-diagnosis.avif" },
      // The screenshot has a wide margin of its own on the left.
      position: "28% top",
    },
  },
  {
    key: "Builder",
    tags: ["AI Agent", "Kubernetes operator"],
    url: "https://github.com/zeabur-oss/builder",
    scene: "agent",
  },
  {
    key: "YOLO-RS",
    tags: ["Rust", "ONNX"],
    url: "https://github.com/pan93412/yolo-rs",
    scene: "speed",
  },
]

export const contacts = [
  { icon: "github-logo", name: "GitHub", url: "https://github.com/pan93412" },
  { icon: "article", name: "blog", url: "https://blog.pan93.com" },
  { icon: "threads-logo", name: "Threads", url: "https://www.threads.net/@pan93412" },
  { icon: "x-logo", name: "X", url: "https://x.com/byStarTW" },
  { icon: "telegram-logo", name: "Telegram", url: "https://t.me/bystartw_chan" },
  { icon: "linkedin-logo", name: "LinkedIn", url: "https://www.linkedin.com/in/pan93412/" },
] as const

type TalkLink = { kind: "slide" | "page" | "article"; url: string }
// Talk titles stay as given at the event, in Traditional Chinese, on both locales.
export const talks: { event: string; year: number; title: string; links: TalkLink[] }[] = [
  {
    event: "COSCUP 2026",
    year: 2026,
    title: "Git 繁體中文翻譯流程治理實戰",
    links: [
      {
        kind: "slide",
        url: "https://static.pan93.com/presentations/git-localization-workflow.pdf",
      },
      { kind: "page", url: "https://coscup.org/2026/session/NSFLQL" },
    ],
  },
  {
    event: "CNTUG Meetup #72",
    year: 2026,
    title: "Zeabur 與共享叢集的奮鬥史",
    links: [{ kind: "page", url: "https://ocgroups.dev/cncf/group/q7hxb6g/event/9d4k6sz" }],
  },
  {
    event: "SITCON 2026",
    year: 2026,
    title: "從頭製作酷炫的 Grafana 儀表板",
    links: [
      { kind: "slide", url: "https://www.figma.com/deck/O8BwdzmRUfedbq0s8w7gm8" },
      { kind: "page", url: "https://sitcon.org/2026/agenda/077a7f/" },
    ],
  },
  {
    event: "MOPCON 2025",
    year: 2025,
    title: "帳號驗證機制怎麼噴掉 5 萬元",
    links: [{ kind: "slide", url: "https://link.pan93.com/mopcon-2025-lightning-talk" }],
  },
  {
    event: "Cursor Meetup Taipei",
    year: 2025,
    title: "Vibe in the efficient way",
    links: [{ kind: "slide", url: "https://link.pan93.com/cursor-meetup-202506-slide" }],
  },
  {
    event: "SITCON 2025",
    year: 2025,
    title: "選課卡成狗？微服務架構帶你翻轉校園系統",
    links: [
      { kind: "slide", url: "https://link.pan93.com/sitcon2025-ppt" },
      { kind: "page", url: "https://sitcon.org/2025/agenda/a03517/" },
      { kind: "article", url: "https://blog.pan93.com/tags/sitcon-2025/" },
    ],
  },
  {
    event: "MOPCON 2024",
    year: 2024,
    title: "導入可監控性：OpenTelemetry 實踐和 Request ID 實作",
    links: [
      { kind: "slide", url: "https://link.pan93.com/opentelemetry-ppt" },
      { kind: "page", url: "https://mopcon.org/2024/speaker/?id=2024010" },
    ],
  },
  {
    event: "PyCon 2024",
    year: 2024,
    title: "如何將 Python 程式碼的環境遷移到其他地方？",
    links: [
      {
        kind: "slide",
        url: "https://www.figma.com/community/file/1457614794408994979/pycon-presentation-how-to-make-a-python-environment-recreatable",
      },
      { kind: "page", url: "https://tw.pycon.org/2024/zh-hant/conference/talk/319" },
      { kind: "article", url: "https://blog.pan93.com/posts/move-venv-to-other-machines/" },
    ],
  },
  {
    event: "DevFest 2022",
    year: 2022,
    title: "透過重構實戰，探索 Web App DX 和 UX 的最佳做法",
    links: [
      { kind: "slide", url: "https://1drv.ms/b/s!AiC-9Gl0ltrahdo4tp-3GQz7FFiYxw?e=xM4dXd" },
      {
        kind: "page",
        url: "https://gdg.community.dev/events/details/google-gdg-kaohsiung-presents-devfest-kaohsiung-tainan-2022/",
      },
    ],
  },
  {
    event: "MOPCON 2021",
    year: 2021,
    title: "應到未到，一看就知道！",
    links: [
      { kind: "slide", url: "https://imych.one/mopcon2021p" },
      { kind: "page", url: "https://mopcon.org/2021/schedule/2021039" },
    ],
  },
]

// Projects I translate into Traditional Chinese now: Git 2.54 (git/git, April 2026), Weblate (WeblateOrg/weblate,
// May 2026), Ghostty (ghostty-org/ghostty, February 2026) and Keka.
export const translating = ["Git", "Weblate", "Ghostty", "Keka"]
// Earlier work, shown muted: the GNOME zh_TW team, KDE l10n-kf5 zh_TW, and GNU nano, tar and bash on the Translation Project.
export const translated = ["GNOME", "KDE Plasma", "nano", "tar", "bash"]
