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
        "Mostly React, TypeScript, Next.js and Astro, with the TanStack libraries close at hand. Smaller projects go to Vue, Nuxt and Vite.",
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
        "I’m familiar with gRPC, GraphQL, NATS and RabbitMQ. I also designed Zeabur’s service specification.",
    },
    {
      label: "Security",
      tags: ["OIDC", "Passkey", "Zero trust"],
      detail:
        "I know OAuth 2.0, OIDC and passkeys well. I’m building Zeabur Identity, and I redesigned the Zeabur API around scoped tokens. When Zeabur came under attack, I joined the blue team’s defense. I also brought in AWS Secrets Manager, and Tailscale with ACLs for zero-trust access.",
    },
    {
      label: "Infrastructure",
      tags: ["Kubernetes", "Flux", "BuildKit"],
      detail:
        "I can set up CIS-compliant K3s and RKE2 clusters, deploy to them with Helm and Flux CD, and I have packaged the whole process into an installer, Zeatend. I used Argo CD for deploys before moving to Flux, and CI/CD runs on GitHub Actions. I’m also familiar with designing Kubernetes operators and CRDs.",
    },
    {
      label: "Observability",
      tags: ["OpenTelemetry", "Grafana"],
      detail:
        "OpenTelemetry for distributed tracing, Grafana for dashboards and alerts, and the VictoriaMetrics, VictoriaLogs and VictoriaTraces behind them, which I run.",
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
        "A member of l10n-tw, I translate Git, GNOME and KDE and help SLAT maintain its Weblate.",
    },
  ],
  projects: {
    Zeatend: {
      text: "Turn one Linux server into a Kubernetes cluster with K3s, RKE2 or KubeSolo.",
      detail: [
        "One command, zeatend apply, turns a Linux server into a Kubernetes cluster. The approach follows k3sup, with a terminal UI alongside.",
        "Before it touches anything, it examines the host: memory, disk, clock sync, swap and whatever earlier installs left behind. That is why I run it first on every new server, before Zeabur.",
      ],
    },
    Zeabur: {
      text: "Deploy apps on your own server from Git, Docker Compose or an app template.",
      detail: [
        "Zeabur, brought to your own servers. Projects, services, domains, variables, logs and rollbacks work just as they do on Zeabur. It is built on Kubernetes and keeps its state in standard Kubernetes objects, with no database to run.",
        "Before anything is applied, it lays out every change field by field. The servers and the plan are yours to choose.",
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
        "Push to GitHub, and Builder turns the code into an image. The Dockerfile is left to zbplan’s AI agent, which reads the project and picks a fitting one, and when a build fails, reads the log and tries again. Railpack recognizes Node.js, Python, Go, PHP, Ruby, Java, Rust and more, and an existing Dockerfile is used as is.",
        "Every branch update starts a new build, and Keel rolls out the new image. Build secrets are mounted only during the build, so they never end up in the image. If you already have a deploy tool, Builder can run on its own as a Kubernetes operator and hand it the image digests.",
      ],
    },
    "YOLO-RS": {
      scene: ["per photo", "With CoreML", "CPU only"],
      text: "Ultralytics YOLO object detection in Rust: YOLOv8, YOLO11, YOLO12 and YOLO26.",
      detail: [
        "YOLO in Rust. Inference runs on ONNX Runtime, on CPU, CoreML or CUDA. With CoreML on an M3 Max, YOLO11x needs about 45 ms per image.",
        "In CI, every model looks at the same test image and must find exactly the same people and objects.",
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
    "Since 2018 I have translated Git, GNOME and KDE under the l10n-tw name, and I help SLAT maintain its Weblate. In the Telegram localization community I serve as both group admin and translator.",
    "At COSCUP 2026, I spoke on the governance of the Git zh-TW translation workflow.",
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
