import type { Content } from "./types"

export default {
  lang: "zh-TW",
  ogLocale: "zh_TW",
  description: "Yi-Jyun Pan：Zeabur 平台工程師，也做開源與翻譯。",
  ui: {
    skip: "跳至主要內容",
    language: "English",
    theme: "主題",
    avatars: "看看我的其他頭貼",
    themes: { system: "跟隨系統", light: "淺色", dark: "深色" },
    now: "現在",
    ossHeading: "Zeabur Open Source 的開源專案",
    zeaburHeading: (count) => `在 Zeabur 做過的 ${count} 件事`,
    talks: "場演講",
    quote: (title) => `《${title}》`,
    latest: "最近：",
    talkLinks: { slide: "投影片", page: "議程", article: "文章" },
    l10nYears: "年開源翻譯",
    l10nNote: "Debian 上 100 多個套件的最後譯者，維護 SLAT 的 Weblate",
    l10n: "開源翻譯與社群",
    skills: "擅長",
    projects: "專案",
    projectLink: "GitHub 專案",
    path: "足跡",
    contact: "來跟我交朋友！",
    friends: "朋友們",
    friendsJoin: "來交換友情連結吧！填寫這個表單 ↗",
    expand: (name) => `展開「${name}」`,
  },
  role: "平台工程師，也做開源與翻譯",
  lead: "我在 Zeabur 當平台工程師，做建置工具和雲端基礎設施，現在也在高科大念碩士班。課餘翻譯開源軟體、在研討會當志工，也做設計。",
  avatarAlts: { sitcon: "在 SITCON 2026 演講", ferris: "手繪的 Ferris 螃蟹" },
  statLabels: {
    pullRequests: "合併的 PR",
    contributions: "近一年貢獻",
    followers: "GitHub 追蹤者",
    stars: "個人帳號累積星數",
  },
  now: [
    {
      title: "Zeabur Open Source",
      role: "開發 Lead",
      since: "現任",
      text: "用 Rust 寫一套能裝在自己 Kubernetes 上的 PaaS，搭配 Passkey 登入與 BuildKit 建置。",
    },
    {
      title: "Zeabur",
      role: "平台工程師",
      since: "2023 年起",
      text: "從實習生做到平台工程師，負責建置流程、OCI Registry、可觀測性、GitOps 和多雲叢集。",
    },
    {
      title: "國立高雄科技大學",
      role: "智慧商務系碩士班",
      since: "2026 年入學",
      text: "課堂專題多半也開源。",
    },
  ],
  nowDetail: {
    oss: [
      {
        repo: "zeabur",
        title: "自架 PaaS",
        text: "在自己的叢集上部署服務。",
      },
      {
        repo: "identity",
        title: "Zeabur Identity",
        text: "叢集的帳號與登入。",
      },
      {
        repo: "builder",
        title: "Zeabur Builder",
        text: "在叢集內把程式碼建置成映像檔。",
      },
      {
        repo: "catalog",
        title: "Zeabur Catalog",
        text: "測試過才發布的應用範本。",
      },
      {
        repo: "zeatend",
        title: "Zeatend",
        text: "把 Linux 主機裝成叢集。",
      },
      {
        repo: "website",
        title: "Website",
        text: "官網與文件，我負責設計和撰文。",
      },
    ],
    zeabur: [
      "封裝系統 zbpack",
      "服務規格設計",
      "自建 OCI Registry",
      "檔案管理 API",
      "OpenTelemetry 追蹤",
      "用 Agent 建置",
      "MCP 部署工具",
      "TCP 網路與 ingress",
      "磁碟區遷移與備份",
      "告警與服務復原",
      "GitOps 部署",
      "多雲基礎設施",
      "邊緣流量與防護",
      "專用主機與叢集",
      "對外 CI/CD",
      "AI 工具與用量控制",
      "API 授權",
      "SOC 2 稽核準備",
      "訂閱與計費",
      "技術支援",
    ],
  },
  skills: [
    {
      label: "前端",
      tags: ["React", "Astro", "TanStack"],
      detail:
        "我主要用 React、TypeScript、Next.js、Astro 和 TanStack 系列，小專案則用 Vue、Nuxt、Vite。",
    },
    {
      label: "後端",
      tags: ["Go", "Rust", "PHP"],
      detail: "後端我寫 Go、Rust、PHP 和 Node.js。",
    },
    {
      label: "微服務",
      tags: ["gRPC", "NATS", "GraphQL"],
      detail:
        "我用 gRPC、GraphQL 串接服務，用 NATS、RabbitMQ 傳遞訊息，也設計過 Zeabur 的服務規格。",
    },
    {
      label: "身分與資安",
      tags: ["OIDC", "Passkey", "零信任"],
      detail:
        "我熟悉 OAuth 2.0、OpenID Connect 和 Passkey（WebAuthn），現在在開發 Zeabur Identity，也用 OAuth scope 重新設計了 Zeabur 的 API 授權。Zeabur 被攻擊時我在藍隊。我還導入了 AWS Secrets Manager 管機密，架了 Tailscale、設好 ACL，建立零信任存取。",
    },
    {
      label: "基礎設施",
      tags: ["Kubernetes", "Flux", "BuildKit"],
      detail:
        "我自架 K3s 叢集，用 Helm 和 Flux CD 部署（之前用 Argo CD），CI/CD 跑在 GitHub Actions。",
    },
    {
      label: "可觀測性",
      tags: ["OpenTelemetry", "Grafana"],
      detail:
        "我用 OpenTelemetry 做分散式追蹤，用 Grafana 做儀表板和告警，也維運 VictoriaMetrics、VictoriaLogs、VictoriaTraces。",
    },
    {
      label: "Nix",
      tags: ["Flakes", "可重現環境"],
      detail: "我用 Nix flake 管開發環境和自己的機器設定，也拿來打包軟體。",
    },
    {
      label: "LLM",
      tags: ["Agent", "Vibe Coding"],
      detail: "Builder 裡有個 AI Agent 會讀專案、修建置。我日常寫程式也大量用 Agent。",
    },
    {
      label: "資料",
      tags: ["pandas", "Polars"],
      detail: "我用 pandas、Polars 分析資料，用 Matplotlib、Seaborn、Plotly 畫圖。",
    },
    {
      label: "Apple",
      tags: ["SwiftUI", "公證", "Xcode Cloud"],
      detail:
        "我用 Swift 寫 macOS 和 iOS App，例如 String Catalog 合併工具。我熟悉 Xcode Cloud，也在 GitHub Actions 上做 App 公證（notarization）。",
    },
    {
      label: "設計",
      tags: ["Figma", "Adobe"],
      detail: "我用 Figma 畫 UI mockup 和 wireframe，也會用 Photoshop、Illustrator、Premiere Pro。",
    },
    {
      label: "在地化",
      tags: ["Git", "GNOME", "KDE"],
      detail: "我是 l10n-tw 成員，翻譯 Git、GNOME、KDE，也維護 SLAT 的 Weblate。",
    },
  ],
  projects: {
    Zeatend: {
      text: "透過 SSH 把一台 Linux 主機裝成 Kubernetes 叢集，支援 K3s、RKE2 與 KubeSolo。",
      detail: [
        "一個 zeatend apply 指令就能裝好整個叢集，做法跟 k3sup 差不多，也有終端機介面。動手安裝前，它會先檢查主機的記憶體、磁碟、時鐘同步和 swap，也會找出舊安裝留下的檔案。",
        "我在新主機上裝 Zeabur OSS 之前，都會先跑它。",
      ],
    },
    Zeabur: {
      text: "在自己的主機上，從 Git、Docker Compose 或範本部署服務。",
      detail: [
        "用過 Zeabur 的人會覺得很熟悉，專案、服務、網域、環境變數、日誌和回滾，用起來都一樣。它跑在 Kubernetes 上，狀態就存在標準的 Kubernetes 物件裡，不用另外架資料庫。",
        "我最喜歡的是，套用前會先列出每個欄位改了什麼。主機和方案都由你自己選。",
      ],
    },
    Builder: {
      scene: ["讀專案", "寫出 Dockerfile", "建置失敗，讀日誌", "再建置，成功"],
      text: "程式碼推上 GitHub，Builder 就建出可以直接部署的映像檔。",
      detail: [
        "zbplan 的 AI Agent 會讀專案、挑 Dockerfile。建置失敗時，它會像我一樣先讀日誌，再試一次。Railpack 認得 Node.js、Python、Go、PHP、Ruby、Java、Rust 等語言，專案裡已經有 Dockerfile 的話就直接用。",
        "分支一更新就會重新建置，Keel 再把服務換成新映像檔。建置用的金鑰以 secret 傳入，不會留在映像檔裡。如果你已經有自己的部署工具，也可以把 Builder 單獨當 Kubernetes operator 用，讓它把映像檔 digest 交給那個工具。",
      ],
    },
    "YOLO-RS": {
      scene: ["一張照片", "用 CoreML", "只用 CPU"],
      text: "用 Rust 跑 Ultralytics YOLO 物件偵測，支援 YOLOv8、YOLO11、YOLO12 與 YOLO26。",
      detail: [
        "推論交給 ONNX Runtime，可以用 CPU、CoreML 或 CUDA。在 M3 Max 上用 CoreML，YOLO11x 一張圖大約 45 ms。",
        "CI 會讓每個模型跑同一張測試圖，確認它們找到的人和物件都一樣。",
      ],
    },
  },
  timeline: [
    { year: "2018", text: "加入 l10n-tw，翻譯 Git、GNOME、KDE" },
    { year: "2019", text: "SMHS 開源組織，做疫情點名系統" },
    { year: "2020", text: "UNM，寫了 Rust 版" },
    { year: "2022", text: "GDSC 核心成員、MOPCON 議程組" },
    { year: "2023", text: "加入 Zeabur" },
    { year: "2025", text: "COSCUP 資訊組" },
    { year: "現在", text: "Zeabur OSS 開發 Lead" },
  ],
  l10nDetail: [
    "我從 2018 年開始以 l10n-tw 名義翻譯 Git、GNOME、KDE，也維護 SLAT 的 Weblate 翻譯平台，並在 Telegram 在地化社群當版主和譯者。",
    "在 COSCUP 2026，我分享了 Git 正體中文翻譯的流程治理。",
  ],
  experiences: [
    { when: "現在", title: "Zeabur Open Source", role: "開發 Lead" },
    { when: "2023 起", title: "Zeabur", role: "實習生 → 平台工程師" },
    { when: "2026", title: "SITCON", role: "售票系統協作" },
    { when: "2025–2026", title: "COSCUP", role: "資訊組成員" },
    { when: "2022", title: "MOPCON", role: "議程組志工" },
    { when: "2022–2024", title: "NKUST GDSC", role: "核心成員" },
    { when: "2022–2023", title: "WMJTYD", role: "志工，libstock（Rust FFI）" },
    { when: "2020 起", title: "UnblockNeteaseMusic", role: "志工，JS 與 Rust 版" },
    { when: "2020–2024", title: "CISC", role: "資訊組志工" },
    { when: "2019–2022", title: "SMHS 開源組織", role: "志工，CSCheckin 前端" },
    { when: "2018 起", title: "臺灣自由軟體在地化社群", role: "譯者、Weblate 維護" },
  ],
  blog: "部落格",
} satisfies Content
