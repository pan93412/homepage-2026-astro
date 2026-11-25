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
        "I mostly write React, TypeScript, Next.js and Astro, and I use the TanStack libraries a lot. For small projects I reach for Vue, Nuxt and Vite.",
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
        "My services talk over gRPC and GraphQL, and pass messages through NATS or RabbitMQ. I also designed Zeabur’s service specification.",
    },
    {
      label: "Security",
      tags: ["OIDC", "Passkey", "Zero trust"],
      detail:
        "I know OAuth 2.0, OIDC and passkeys well. I’m building Zeabur Identity, and I moved the Zeabur API to scoped tokens. When Zeabur was attacked, I was on the blue team. I also set up AWS Secrets Manager, and Tailscale with ACLs for zero-trust access.",
    },
    {
      label: "Infrastructure",
      tags: ["Kubernetes", "Flux", "BuildKit"],
      detail:
        "I run my own K3s clusters and deploy with Helm and Flux CD. I used Argo CD before and moved to Flux. CI/CD runs on GitHub Actions.",
    },
    {
      label: "Observability",
      tags: ["OpenTelemetry", "Grafana"],
      detail:
        "I trace with OpenTelemetry and keep dashboards and alerts in Grafana. I also run the VictoriaMetrics, VictoriaLogs and VictoriaTraces behind them.",
    },
    {
      label: "Nix",
      tags: ["Flakes", "Reproducible"],
      detail:
        "My dev environments and my own machines are all Nix flakes, and I package software with it too.",
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
        "I analyze data with pandas and Polars and draw charts with Matplotlib, Seaborn and Plotly. I know basic statistics, like t-tests, ANOVA and chi-square tests, but I’m not an expert.",
    },
    {
      label: "Apple",
      tags: ["SwiftUI", "Xcode Cloud", "Notarization"],
      detail:
        "In my spare time I write Swift apps for macOS and iOS, like a small tool that merges String Catalogs. I know Xcode Cloud well and set up notarization on GitHub Actions.",
    },
    {
      label: "Design",
      tags: ["Figma", "Adobe"],
      detail:
        "I make UI mockups and wireframes in Figma. When I need to present my work, I also use Photoshop, Illustrator and Premiere Pro.",
    },
    {
      label: "Localization",
      tags: ["Git", "GNOME", "KDE"],
      detail:
        "I’m part of l10n-tw, translating Git, GNOME and KDE, and I help SLAT maintain its Weblate.",
    },
  ],
  projects: {
    Zeatend: {
      text: "Turn one Linux server into a Kubernetes cluster with K3s, RKE2 or KubeSolo.",
      detail: [
        "To turn a Linux server into a Kubernetes cluster, you run one command, zeatend apply. The idea is close to k3sup, and there is a terminal UI if you prefer it.",
        "Before it touches anything, it checks the host: memory, disk, clock sync, swap and files left over from earlier installs. That’s why I run it first on every new server, before I install Zeabur.",
      ],
    },
    Zeabur: {
      text: "Deploy apps on your own server from Git, Docker Compose or an app template.",
      detail: [
        "Put simply, it’s Zeabur on your own servers. Projects, services, domains, variables, logs and rollbacks work the same way. It runs on Kubernetes and keeps its state in standard Kubernetes objects, so there is no database to run.",
        "What I like most is that it shows you every change field by field before it applies anything. The servers and the plan are yours to choose.",
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
        "Push your code to GitHub and Builder makes the image. zbplan’s AI agent reads the project and picks a Dockerfile. When a build fails, it does what I would do: read the log and try again. Railpack detects Node.js, Python, Go, PHP, Ruby, Java, Rust and more, and an existing Dockerfile is used as is.",
        "Every branch update triggers a new build, and Keel rolls out the new image. Build secrets are mounted only during the build, so they never end up in the image. If you already have a deploy tool, you can run Builder on its own as a Kubernetes operator that hands it the image digests.",
      ],
    },
    "YOLO-RS": {
      scene: ["per photo", "With CoreML", "CPU only"],
      text: "Ultralytics YOLO object detection in Rust: YOLOv8, YOLO11, YOLO12 and YOLO26.",
      detail: [
        "YOLO in Rust. Inference runs on ONNX Runtime, with CPU, CoreML or CUDA. With CoreML on an M3 Max, YOLO11x takes about 45 ms per image.",
        "In CI, every model runs on the same test image and must find the same people and objects, so I can swap models without worrying.",
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
    "Since 2018 I have translated Git, GNOME, KDE and more with l10n-tw, and I help SLAT maintain its Weblate. I’m also a moderator and translator in the Telegram localization community, so that’s an easy place to find me.",
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
