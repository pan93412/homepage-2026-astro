import type en from "./en"

export default {
  "table-of-contents": "目錄",
  header: {
    title: "Yi-Jyun Pan",
    description1: "我在 {company} 擔任平台工程師，負責建置工具與雲端基礎設施。",
    description2: "目前就讀碩士班，也參與軟體開發、設計、翻譯與開源專案。",
  },
  about: {
    title: "關於我",
    description: "我是一名全端開發者，熟悉各式各樣的技術。",
    frontend: {
      title: "前端",
      description: "主要使用React.js、TypeScript與Next.js。小型專案會使用Vue.js、Nuxt.js與Vite。",
    },
    backend: {
      title: "後端",
      description: "主要使用Go、Rust、PHP與Node.js。",
    },
    cloud: {
      title: "雲端",
      description:
        "在PaaS解決方案方面，我在Zeabur與Vercel上有相當豐富的經驗，能確保應用程式在這些平台上順暢運行。我也熟悉像S3的物件儲存，以及Cloudflare與Bunny CDN的CDN設定。",
    },
    infra: {
      title: "基礎設施",
      description:
        "我在Zeabur的工作內容包含大量Kubernetes、Docker與Git的實作。舉例來說，我可以用K3s建立一個簡易的Kubernetes叢集並進行管理，並透過Helm或一般的YAML manifests部署應用程式。我也能使用GitHub Actions建立CI/CD pipeline。",
    },
    llm: {
      title: "大型語言模型",
      description:
        "我熟悉多種模型，包括GPT、Claude、Gemini、DeepSeek、Perplexity等。我了解它們各自最適合的使用場景以及API串接方式。我可以使用LangChain與Vercel AI SDK開發LLM Agent；也能用LangChain搭配Voyage AI的模型建立RAG pipeline，並為agent的通用工具打造MCP server。",
    },
    "data-analysis": {
      title: "資料分析",
      description:
        "我能使用Python進行資料分析，包含Pandas / Polars，並能用Matplotlib / Seaborn / Plotly進行視覺化。我也對統計分析有基礎理解，例如t-test、ANOVA、卡方檢定與p-value，但並非非常熟練。",
    },
    "machine-learning": {
      title: "機器學習",
      description:
        "我能使用Python、Scikit-learn與TensorFlow Keras訓練機器學習模型。我有開發機器學習模型的經驗，例如分類、回歸、分群與降維，不過不是很擅長。",
    },
    "apple-ecosystem": {
      title: "Apple生態系",
      description:
        "我業餘時會使用Swift為Apple生態系設計App，也會用React Native。我有開發macOS與iOS App的經驗，例如 {string-catalog-merger}，以及協助改善一些Swift專案的並行實作。",
      "string-catalog-merger": "用於合併string catalog的輔助工具",
    },
    engineering: {
      title: "工程實務",
      description:
        "我熟悉既有的貢獻流程與commit規範，例如 {conventional-commits}。我尊重並遵循linter、formatter與型別檢查工具。",
      "conventional-commits": "Conventional Commits",
    },
    designing: {
      title: "設計",
      description:
        "我能使用Figma製作UI mockup與wireframe，也有使用Photoshop、Illustrator、Premiere Pro等Adobe套件軟體呈現作品的經驗。",
    },
    "cloud-portfolio":
      "我偏好cloud-native與可擴展的解決方案。我曾在多個專案中導入微服務架構與相關技術，你可以在「專案」區段找到。",
    "solutions-engineering-portfolio":
      "我持續探索軟體工程的最佳實踐與可擴展的方案，並在Threads、X與我的部落格分享我的發現。歡迎和我交流想法！",
    "oss-contributions":
      "我積極參與Symfony、Git、Keka與多種GNU軟體等開源專案的貢獻。此外，我也活躍於Telegram與Discord的多個開發者社群，或許很容易見到面。",
  },
  projects: {
    title: "專案",
    description:
      "我大部分有趣的專案都開源在 {my-github}，以及我所建立的組織底下。我也置頂了一些能展現能力的專案；此外我也維護 {blog}，用來分享想法與技術洞見。",
    "my-github": "我的GitHub（pan93412）",
    blog: "部落格（blog.pan93.com）",
    stratus: {
      title: "Stratus（Go）",
      description:
        "以 Go 撰寫、S3 為儲存後端的唯讀 OCI 映像檔倉庫，透過 blob 重新導向與 manifest 串流，為 Docker 和 containerd 提供映像檔。另有獨立的 Go 函式庫，將 BuildKit 產生的 OCI 映像檔直接上傳至 S3，支援平行上傳 blob 與原子合併映像檔索引。倉庫的 HTTP API 刻意不實作 push、delete 與 catalog 端點。",
    },
    zbplan: {
      title: "zbplan（Go）",
      description:
        "由 AI agent 驅動的 Dockerfile 產生工具，會檢視專案、搜尋內建 Dockerfile 範本，並向容器映像檔倉庫查詢基底映像檔與標籤。工具使用 BuildKit 實際建置，失敗時將建置日誌交給 agent 修正。整個流程受設定的建置嘗試次數、agent 步數與時間上限約束。",
    },
    "nkust-iot-2024-06": {
      title: "2024/06 - NKUST IC IoT專題（Go）",
      description:
        "物聯網課程的期末專題：基於Raspberry Pi 3硬體，能快速偵測入侵者並發出警報。使用Go撰寫，採用微服務架構，整合RabbitMQ、GraphQL、gRPC、OpenTelemetry、mTLS、PostgreSQL等。",
    },
    "database-playground-2024-07": {
      title: "2024/07 - Database Playground（PHP）",
      description:
        "為課程打造的SQL練習平台，同時也是國科會大專生研究計畫（'24）的一部分（「使用提醒及參照回饋機制輔以GPT模型產生個人化內容提升學生學習意願：以資料庫學習遊戲化平台為例」）。平台以Symfony建置，並使用Go開發需要效能的服務，例如SQL runner。",
    },
    "nkust-iot-2024-12": {
      title: "2024/12 - NKUST IC IoT專題（Rust）",
      description:
        "物聯網課程的延伸專題：使用搭配GStreamer的webcam來快速偵測入侵者並發出警報。使用Rust撰寫並採用微服務架構，整合Cloudflare R2、GraphQL、NATS、PostgreSQL、GStreamer、YOLO等。整體以非同步操作與worker pattern設計。",
    },
    "yolo-rs-2024-12": {
      title: "2024/12 - YOLO-RS",
      description:
        "YOLO（You Only Look Once）即時物件偵測演算法的Rust實作，在最大YOLO模型（YOLO11x）下可達到17 FPS。",
    },
    "crawler-2025-04": {
      title: "2025/04 - NKUST爬蟲專題",
      description:
        "NKUST IC資料分析課程的爬蟲專題，使用Go撰寫。工具組可從Yahoo News、Dcard、PTT、Mobile01等網站爬取並擷取資料，完成資料清理後使用Streamlit進行視覺化。",
    },
    "coscup-2025-07": {
      title: "2025/07 - COSCUP 2025 - 議程頁面",
      description:
        "為COSCUP 2025全面重寫的議程頁面，使用VitePress建置，具備桌機與行動裝置皆適用的響應式設計。此版本解決了許多平台限制，例如預先渲染所有議程頁面、最小化bundle size，以及繞過Pretalx API的限制。",
    },
    "database-playground-2025-08": {
      title: "2025/08 - Database Playground（Go）",
      description:
        "這是先前基於Symfony的SQL練習平台重寫版本，同時也參與了國科會大專生研究計畫（'25）。此版本聚焦在AI agents與高度可擴充性。平台後端與SQL runner使用Go直接實作（不使用框架），前端與管理介面使用Next.js。整合Vercel AI SDK做LLM串接，並使用PostHog進行產品分析、LLM observability與行為追蹤。此專案面臨的挑戰包含安全性（如OAuth與權限管理）以及可擴展性（如資料庫複寫與微服務）。所有元件與技術選型都以文件形式開源在GitHub。",
    },
    "virtual-doctor-2025-12": {
      title: "2025/12 - 虛擬醫生（Python，尚未開源）",
      description:
        "NKUST IC畢業專題的「虛擬醫生」計畫，使用Python撰寫。此專案透過RAG從內部資料庫檢索醫療知識，為長者提供虛擬醫生服務。系統會以MCP評估使用者健康狀況，並將評估結果整合到大型語言模型（LLM）中，提供日常生活建議。此外，專案也提供基於LiveTalking的數位醫生，模擬醫生的聲音與唇形動作，讓長者感覺更舒適且有陪伴感，彷彿在與真正的醫生對話。",
    },
  },
  experiences: {
    title: "經歷",
    contributions: "貢獻：",
    "more-information": "更多資訊 →",
    "zeabur-oss": {
      title: "Zeabur Open Source（開發 Lead）",
      "company-description":
        "擔任 zeabur-oss 的開發 Lead，打造以 Apache-2.0 授權的開源工具，讓使用者在自己的 Kubernetes 上部署與維運服務。",
      contributions: {
        zeabur: {
          title: "自架 PaaS",
          description:
            "以 Rust 開發，將 Kubernetes 呈現為專案與服務，說明運作問題，並在套用變更前預覽欄位差異。請求沿用使用者本身的憑證與 Kubernetes 權限，狀態保存在標準 Kubernetes 物件中，不需額外資料庫或自訂資源。",
        },
        identity: {
          title: "Zeabur Identity",
          description:
            "以 Passkey 登入 kubectl 與 OIDC 應用程式，用短效權杖取代長期共用的管理員憑證。由 Kubernetes 直接驗證權杖，身分服務部署於叢集內，不需資料庫。",
        },
        builder: {
          title: "Zeabur Builder",
          description:
            "以 Kubernetes operator 搭配 BuildKit，從 Git 與 Dockerfile 或 Railpack 建置容器映像檔。各 namespace 使用獨立的建置器與持久快取，輸出映像標籤與 digest 供部署工具使用，閒置時將建置器縮減至零。",
        },
        catalog: {
          title: "Zeabur Catalog",
          description:
            "整理叢集元件與應用程式範本，固定 chart 版本與 values，並記錄選型理由。CI 逐項安裝測試、量測閒置資源用量，再發布簽署過的套件，供 Helm、Flux 或 Argo CD 流程使用。",
        },
      },
    },
    "zeabur-2023-04": {
      title: "Zeabur：2023-04 ~（實習生 → 平台工程師）",
      "company-description":
        "Zeabur是一家雲端平台（PaaS）公司，致力於簡化開發者的部署流程。其目標是讓開發者專注於撰寫程式碼，而不必被繁瑣的伺服器設定、環境建置與部署流程所困擾。",
      contributions: {
        zbpack: {
          title: "封裝系統（zbpack）的開發",
          description:
            "實作並改進Rust、Node.js、Python、Go與PHP的封裝流程；新增跨monorepo workflow的支援、Corepack版本釘選，以及Rye與uv等新工具；並重新設計封裝系統架構，改用 AST 解析組裝 Dockerfile。專案已開源，並持續支援新專案。",
        },
        sspec: {
          title: "服務規格的設計",
          description:
            "從零設計服務規格，並實作底層轉換器、gRPC、GraphQL、JSON schema定義與其實作。此規格成為Zeabur templates的標準，以及Zeabur內部服務的核心結構。",
        },
        "oci-registry": {
          title: "自建OCI Registry的設計與實作",
          description:
            "實作OCI v2 pull protocol與針對S3最佳化的push機制；最佳化garbage collection以降低stop-the-world的影響；並建立具備快取與CDN支援的多zone registry。",
        },
        "file-management-v2": {
          title: "改進檔案管理API",
          description:
            "透過將RESTful API部署到每個共享叢集，並設計更直覺的內容串流流程，來提升檔案管理API的效能與可擴展性。認證與payload簽章方面使用TLS與Ed25519，參考AWS SigV4的設計，以防止未授權存取容器檔案系統，並將存取流程整合至平台閘道。",
        },
        observability: {
          title: "導入OpenTelemetry全鏈路追蹤",
          description:
            "導入 OpenTelemetry 追蹤，為跨服務呼叫加入觀測機制，串接日誌與追蹤資訊，並改善健康檢查。另維運 VictoriaMetrics、VictoriaLogs 與 VictoriaTraces，收集指標、日誌、追蹤與 Kubernetes 事件。",
        },
        zbplan: {
          title: "Agent 驅動的建置（zbplan）",
          description:
            "重新設計建置系統，由 agent 分析專案、搜尋 Dockerfile 範本與 registry 映像檔，再產生 Dockerfile。BuildKit 實際執行建置，失敗時把日誌交給 agent 修正，以實際建置取代逐一撰寫框架判斷規則。工具已開源，也已成為平台的建置選項。",
        },
        mcp: {
          title: "MCP 部署工具",
          description:
            "實作 Zeabur 的 MCP 整合，讓 AI 開發工具能上傳專案與環境變數檔、查找並部署模板、追蹤部署狀態，以及讀取建置與執行期日誌。",
        },
        networking: {
          title: "TCP 網路與 ingress",
          description:
            "實作並上線 Kubernetes 服務使用的 TCP Proxy v2，支援連接埠轉發與規則異動更新。也為 ingress controller 開發 HTTP/2 支援、以 CertMagic 管理 TLS 憑證，並加入 PROXY protocol 支援。",
        },
        "backup-migration": {
          title: "資料卷遷移與備份",
          description:
            "實作專案複製所需的跨區域資料卷複製，將資料卷備份與還原整合至平台後端，並開發 MariaDB 線上備份、備份取消與控制台備份事件查詢功能。",
        },
        incident: {
          title: "告警與生產服務復原",
          description:
            "以 Grafana Cloud 建立分級告警與 on-call 流程，涵蓋節點不可用與異常用量等規則。也負責從備份復原生產服務，並改善備份自動化。",
        },
        gitops: {
          title: "GitOps 部署",
          description:
            "先以 Argo CD 管理 Kubernetes 部署設定，再遷移至 Flux CD，整合映像檔自動更新與多環境同步。CI 發布帶有版本的映像檔，由 Flux 將標籤更新寫回 Git，保留發布與回滾記錄。",
        },
        regions: {
          title: "多雲基礎設施",
          description:
            "在 AWS、Linode 與中國雲端供應商維運 Kubernetes 叢集，上架新區域與 GPU 工作負載、升級控制平面與節點池，並在供應商之間遷移平台基礎設施。",
        },
        edge: {
          title: "邊緣流量與應用防護",
          description:
            "將官網與 API 遷移至 Bunny CDN，改善區域連線品質。開發 Zeabur Gateway 應用程式防火牆，提供設定介面、自訂錯誤頁面與一鍵部署模板。",
        },
        "dedicated-cluster": {
          title: "專用主機與叢集",
          description:
            "開發專用主機的電源管理、重灌與續租功能，並延伸至叢集生命週期管理，涵蓋自帶叢集、operator 狀態調和、動態節點池、EKS 復原、EFS 與資料卷擴容。",
        },
        cicd: {
          title: "對外 CI/CD 服務",
          description:
            "將建置流程發展為對外 CI/CD 服務，支援任意 Git 來源、帳密與 SSH 金鑰驗證、私有儲存庫、建置歷史、來源佐證與公開 GraphQL API，並串接 Stripe meter events 回報建置用量。",
        },
        "ai-products": {
          title: "AI 工具與用量控制",
          description:
            "以 Vercel AI SDK 重整 Zeabur Agent，整合 Langfuse 追蹤，加入輸入壓縮與輸出上限以控制模型用量。另參與 AI Hub 基礎設施與區域連線改善。",
        },
        security: {
          title: "API 授權",
          description:
            "以具權限範圍的個人存取權杖重整 API 授權，在 GraphQL 層檢查權限範圍，並完成舊版 API 金鑰的遷移與淘汰。",
        },
        compliance: {
          title: "稽核準備",
          description:
            "準備 SOC 2 稽核所需的控制與佐證，包含漏洞掃描、災害復原演練、事故報告與根因分析，以及監控、日誌與防火牆記錄。",
        },
        billing: {
          title: "訂閱與計費",
          description:
            "重整訂閱與方案變更，統一升降級、試用與 Stripe webhook 流程，並處理專用主機的計費、退款與續約。",
        },
        support: {
          title: "技術支援",
          description:
            "在平台開發之外承接技術支援，處理建置、執行期、網域、憑證、資料庫、內網與備份問題，並把常見問題整理成團隊操作流程與產品改進。",
        },
      },
    },
    "sitcon-2026": {
      title: "SITCON：2026（售票系統協作）",
      "company-description": "學生自主籌辦的資訊技術研討會。",
      contributions: {
        tickets: "協助改進 SITCON 2026 售票系統。",
      },
    },
    "coscup-2025-2026": {
      title: "COSCUP：2025、2026（資訊組成員）",
      "company-description": "由開源程式開發者、使用者與推廣者共同參與的研討會。",
      contributions: {
        website: "擔任 COSCUP 2025 與 2026 資訊組成員，協助議程表與網站開發。",
      },
    },
    "mopcon-2022": {
      title: "MOPCON：2022（議程組志工）",
      "company-description":
        "MOPCON透過整合產業實務、工程研發、專案管理與創業活動，深入探索行動通訊，並致力於培育更多人才與行動科技領域的實作應用。活動連續舉辦十一年，是南台灣最大的IT社群年度盛會。",
    },
    "nkust-gdsc-2022-10": {
      title: "NKUST GDSC：2022-10 ~ 2024/06（核心成員）",
      "company-description":
        "GDSC是Google Developer Student Clubs，由Google Developers支援的學生社群計畫，鼓勵學生學習、分享並應用Google開發技術。社群由學生主導，舉辦技術課程、工作坊、hackathon與業界講師分享等活動，協助學生掌握Android、Cloud、Web等領域的開發技能。",
      contributions: {
        "figma-course":
          "舉辦Figma使用課程與Flutter技術介紹活動，單次活動至少獲得20位成員同時響應。",
      },
    },
    "wmjtyd-2022-07": {
      title: "WMJTYD：2022 ~ 2023（志工）",
      "company-description":
        "一個專注於打造高效率且可持續軟體的團隊，其中成員會分享知識並合作進行軟體開發。",
      contributions: {
        libstock: {
          title: "libstock",
          description:
            "使用Rust與C的外部函式介面（FFI），開發高效能的股票資料序列化與反序列化函式庫。",
        },
      },
    },
    "unm-2021": {
      title: "UnblockNeteaseMusic：2020 ~（志工）",
      "company-description":
        "一個代理服務，會自動將網易雲音樂中不可用的歌曲替換為其他平台可用的版本。",
      contributions: {
        "js-version": {
          title: "JavaScript版本",
          description:
            "與UnblockNeteaseMusic fork作者（Tianling Shen）合作改進JavaScript版本，讓使用者能以其他平台的可用歌曲替換不可用的歌曲。",
        },
        "rust-version": {
          title: "Rust版本",
          description:
            "開發UnblockNeteaseMusic的Rust版本，重新實作了歌曲取回的邏輯。此版本作為函式庫，供YesPlayMusic等依賴UnblockNeteaseMusic的專案使用。",
        },
      },
    },
    "cisc-2020": {
      title: "CISC：2020–2024（志工）",
      "company-description": "一個面向高中生的IT社群。我以資訊組志工身分參與該社群。",
      contributions: {
        ciscc: {
          title: "CISC Complain",
          description:
            "在CISC匿名分享你的意見。此專案以TypeScript為Discord平台開發。因缺乏維護而停止運作。",
        },
      },
    },
    "smhs-os-project-2019": {
      title: "SMHS Open Source Organization：2019 ~ 2022（志工）",
      "company-description": "一個學生志工組織，致力於為高雄市立三民高級中學（SMHS）開發開源軟體。",
      contributions: {
        cscheckin: {
          title: "CSCheckin前端",
          description:
            "CSCheckin是一個免費的Web應用程式，用於因應COVID-19疫情期間的線上課程需求。其整合Google Classroom，讓老師能發起點名，學生則可線上報到。我的主要工作是使用Next.js與Tailwind CSS開發前端。",
        },
        "schweb-crawler": {
          title: "SMHS公告爬蟲",
          description:
            "針對SMHS校網公告的網路爬蟲，當SMHS網站故障時，學生仍能取得公告。以TypeScript撰寫並使用Cheerio解析HTML。",
        },
        "smhs-epf-faq": {
          title: "SMHS學習歷程解疑網",
          description:
            "「SMHS學習歷程解疑網」由我們建立，為2019課綱的第一屆學生打造，是一個常見問題網站，說明如何建立學習歷程、如何壓縮PDF以供上傳，以及如何使用系統。此網站為多頁應用（MPA），使用自訂Webpack設定與Pug建置。",
        },
      },
    },
    "l10n-tw-2018": {
      title: "臺灣自由暨開源軟體在地化社群：2018 ~（志工）",
      "company-description": "台灣的志工社群，專注於為開源軟體產出高品質的在地化翻譯。",
      contributions: {
        translation: "以l10n-tw名義參與多個程式的翻譯，包含Git、GNOME、KDE等。",
        weblate: "維護隸屬於 {slat} 的Weblate翻譯平台。",
        telegram: "以版主與翻譯者身分參與 {telegram} 社群。",
      },
      slat: "SLAT",
      telegram: "Telegram",
    },
  },
  slides: {
    title: "演講紀錄",
    slide: "投影片",
    article: "文章",
  },
  "friend-links": {
    title: "好友連結",
    description: "這些是我的朋友們的網站，歡迎來逛逛！想要加入好友連結？可以提交到{form-link}。",
    "form-link": "這個Google表單",
    error: "無法載入好友連結，請稍後再試。",
  },
  "social-media": {
    title: "社群媒體",
    description: "你可以透過Threads、X或其他社群媒體平台聯絡我。我主要活躍於Telegram、X與Threads。",
    email: "電子郵件",
  },
  "description-list": {
    colon: "：",
  },
  "inline-links": {
    parenthesis: "（",
    "parenthesis-end": "）",
    separator: "、",
  },
} satisfies typeof en
