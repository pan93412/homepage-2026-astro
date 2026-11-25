import type { Content } from "./types"

export default {
  lang: "en",
  ogLocale: "en_US",
  description:
    "Yi-Jyun Pan is a platform engineer at Zeabur, working on build tooling and cloud infrastructure.",
  ui: {
    skip: "Skip to content",
    language: "中文",
    theme: "Theme",
    avatars: "Show my other avatars",
    themes: { system: "System", light: "Light", dark: "Dark" },
    now: "Now",
    ossHeading: "Zeabur Open Source projects",
    zeaburHeading: () => "What I’ve worked on at Zeabur",
    talks: "talks",
    quote: (title) => `“${title}”`,
    latest: "Latest: ",
    talkLinks: { slide: "Slides", page: "Session", article: "Article" },
    l10nYears: "years of open-source translation",
    l10nNote: "Last translator of 100+ Debian packages. I also run SLAT’s Weblate",
    l10n: "translating open-source software",
    skills: "Skills",
    projects: "Projects",
    projectLink: "View on GitHub",
    path: "Timeline",
    contact: "Say hi!",
    friends: "Friends",
    friendsJoin: "Let’s swap links! Fill out this form ↗",
    expand: (name) => `Show more: ${name}`,
  },
  role: "Platform engineer and open-source translator",
  lead: "I’m a platform engineer at Zeabur, working on build tooling and cloud infrastructure. I’m also a master’s student at NKUST. Outside work I translate open-source software and volunteer at tech conferences. I also do some design.",
  avatarAlts: { sitcon: "Speaking at SITCON 2026", ferris: "A hand-drawn Ferris the crab" },
  statLabels: {
    pullRequests: "merged PRs",
    contributions: "contributions this year",
    followers: "followers",
    stars: "stars on my repos",
  },
  now: [
    {
      title: "Zeabur Open Source",
      role: "Development Lead",
      since: "now",
      text: "A self-hosted PaaS in Rust for your own Kubernetes.",
    },
    {
      title: "Zeabur",
      role: "Platform Engineer",
      since: "since 2023",
      text: "Build tooling and cloud infrastructure.",
    },
    {
      title: "NKUST",
      role: "M.S. in Intelligent Commerce",
      since: "since 2026",
      text: "Most of my course projects are open source.",
    },
  ],
  nowDetail: {
    oss: [
      {
        repo: "zeabur",
        title: "Zeabur",
        text: "Deploy apps on your own cluster.",
      },
      {
        repo: "identity",
        title: "Zeabur Identity",
        text: "Accounts and sign-in for your cluster.",
      },
      {
        repo: "builder",
        title: "Zeabur Builder",
        text: "Builds images inside your cluster.",
      },
      {
        repo: "catalog",
        title: "Zeabur Catalog",
        text: "App templates, tested before release.",
      },
      {
        repo: "zeatend",
        title: "Zeatend",
        text: "Turns a Linux server into a cluster.",
      },
      {
        repo: "website",
        title: "Website",
        text: "Site and docs. I design and write them.",
      },
    ],
    zeabur: [
      "zbpack packaging system",
      "Service specification",
      "In-house OCI registry",
      "File management API",
      "OpenTelemetry tracing",
      "Agent-driven builds",
      "MCP deployment tooling",
      "TCP networking and ingress",
      "Volume migration and backup",
      "Alerting and recovery",
      "GitOps deployments",
      "Multi-cloud infrastructure",
      "Edge traffic and protection",
      "Dedicated servers and clusters",
      "Customer-facing CI/CD",
      "AI tooling and usage controls",
      "API authorization",
      "SOC 2 audit readiness",
      "Subscriptions and billing",
      "Technical support",
    ],
  },
  skills: [
    {
      label: "Frontend",
      tags: ["React", "Astro", "TanStack"],
      detail:
        "I mainly use React, TypeScript, Next.js, Astro and TanStack. For small projects I reach for Vue, Nuxt and Vite.",
    },
    {
      label: "Backend",
      tags: ["Go", "Rust", "PHP"],
      detail: "On the backend I write Go, Rust, PHP and Node.js.",
    },
    {
      label: "Microservices",
      tags: ["gRPC", "NATS", "GraphQL"],
      detail:
        "I connect services with gRPC and GraphQL and pass messages with NATS and RabbitMQ. I also designed Zeabur’s service specification.",
    },
    {
      label: "Security",
      tags: ["OIDC", "Passkey", "Zero trust"],
      detail:
        "I work with OAuth 2.0, OIDC and passkeys. I build Zeabur Identity, and I moved the Zeabur API to scoped tokens. When Zeabur was attacked, I was on the blue team. I also set up AWS Secrets Manager, and Tailscale with ACLs for zero-trust access.",
    },
    {
      label: "Infrastructure",
      tags: ["Kubernetes", "Flux", "BuildKit"],
      detail:
        "I run self-hosted K3s clusters and deploy with Helm and Flux CD, which I moved to from Argo CD. CI/CD runs on GitHub Actions.",
    },
    {
      label: "Observability",
      tags: ["OpenTelemetry", "Grafana"],
      detail:
        "I trace with OpenTelemetry and build dashboards and alerts in Grafana. In production I also run VictoriaMetrics, VictoriaLogs and VictoriaTraces.",
    },
    {
      label: "Nix",
      tags: ["Flakes", "Reproducible"],
      detail: "I use flakes for my dev environments, my own machines and packaging.",
    },
    {
      label: "LLM",
      tags: ["Agent", "Vibe Coding"],
      detail:
        "Builder has an AI agent that reads projects and fixes failed builds. I write most of my own code with agents too.",
    },
    {
      label: "Data",
      tags: ["pandas", "Polars"],
      detail:
        "I analyze data with pandas and Polars, and draw charts with Matplotlib, Seaborn and Plotly.",
    },
    {
      label: "Apple",
      tags: ["SwiftUI", "Xcode Cloud", "Notarization"],
      detail:
        "I write Swift apps for macOS and iOS, like a String Catalog merger. I know Xcode Cloud well and set up notarization on GitHub Actions.",
    },
    {
      label: "Design",
      tags: ["Figma", "Adobe"],
      detail:
        "I make UI mockups and wireframes in Figma, and I also use Photoshop, Illustrator and Premiere Pro.",
    },
    {
      label: "Localization",
      tags: ["Git", "GNOME", "KDE"],
      detail: "I translate Git, GNOME and KDE with l10n-tw, and I maintain SLAT’s Weblate.",
    },
  ],
  projects: {
    Zeatend: {
      text: "Turn one Linux server into a Kubernetes cluster with K3s, RKE2 or KubeSolo.",
      detail: [
        "One command, zeatend apply, sets up the whole cluster, much like k3sup, and there is a terminal UI too. Before it installs anything, it checks the host’s memory, disk, clock sync and swap, and looks for leftovers from earlier installs.",
        "On a new server, I run it before I install Zeabur.",
      ],
    },
    Zeabur: {
      text: "Deploy apps on your own server from Git, Docker Compose or an app template.",
      detail: [
        "If you have used Zeabur, this will feel familiar. Projects, services, domains, variables, logs and rollbacks work the same way. It runs on Kubernetes and keeps its state in standard Kubernetes objects, so there is no database to run.",
        "What I like most is that you see every change field by field before anything is applied. The servers and the plan are yours to choose.",
      ],
    },
    Builder: {
      scene: [
        "Reads the repository",
        "Writes a Dockerfile",
        "Build fails, reads the log",
        "Builds again",
      ],
      text: "Push to GitHub and Builder turns your code into an image ready to deploy.",
      detail: [
        "zbplan’s AI agent reads the project and picks a Dockerfile. When a build fails, it does what I would do: it reads the log and tries again. Railpack detects Node.js, Python, Go, PHP, Ruby, Java, Rust and more, and an existing Dockerfile is used as is.",
        "Builder rebuilds whenever a branch is updated, and Keel rolls out the new image. Build secrets are mounted only during the build, so they never end up in the image. If you already have a deploy tool, you can run Builder on its own as a Kubernetes operator that passes it the image digests.",
      ],
    },
    "YOLO-RS": {
      scene: ["per photo", "With CoreML", "CPU only"],
      text: "Ultralytics YOLO object detection in Rust: YOLOv8, YOLO11, YOLO12 and YOLO26.",
      detail: [
        "It runs on ONNX Runtime with CPU, CoreML or CUDA. With CoreML on an M3 Max, YOLO11x takes about 45 ms per image.",
        "In CI, every model runs on the same image, and the test checks that they all find the same objects.",
      ],
    },
  },
  timeline: [
    { year: "2018", text: "Joined l10n-tw" },
    { year: "2019", text: "SMHS Open Source Organization" },
    { year: "2020", text: "Wrote UNM in Rust" },
    { year: "2022", text: "NKUST GDSC, MOPCON" },
    { year: "2023", text: "Joined Zeabur" },
    { year: "2025", text: "COSCUP IT team" },
    { year: "Now", text: "Leading Zeabur Open Source" },
  ],
  l10nDetail: [
    "I have translated Git, GNOME, KDE and more with l10n-tw since 2018. I also maintain SLAT’s Weblate, and I moderate and translate in the Telegram localization community.",
    "At COSCUP 2026, I talked about the workflow behind the Git zh-TW translation.",
  ],
  experiences: [
    { when: "Now", title: "Zeabur Open Source", role: "Development Lead" },
    { when: "2023–", title: "Zeabur", role: "Intern → Platform Engineer" },
    { when: "2026", title: "SITCON", role: "Ticketing system contributor" },
    { when: "2025–2026", title: "COSCUP", role: "IT team member" },
    { when: "2022", title: "MOPCON", role: "Agenda Group volunteer" },
    { when: "2022–2024", title: "NKUST GDSC", role: "Core Member" },
    { when: "2022–2023", title: "WMJTYD", role: "Volunteer, libstock (Rust FFI)" },
    { when: "2020–", title: "UnblockNeteaseMusic", role: "Volunteer, JS and Rust versions" },
    { when: "2020–2024", title: "CISC", role: "Volunteer, information group" },
    {
      when: "2019–2022",
      title: "SMHS Open Source Organization",
      role: "Volunteer, CSCheckin frontend",
    },
    {
      when: "2018–",
      title: "Taiwan F.O.S.S. Localization Community",
      role: "Volunteer translator",
    },
  ],
  blog: "Blog",
} satisfies Content
