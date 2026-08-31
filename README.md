# 以 BIM 數位雙生與 ESG 永續治理 賦能台船港灣工程升級

> **中華民國環境管理會計協會 × 中國科技大學建築設計院 × 台船防蝕（台蝕） / 台船營造（台營） 聯合提案平台**
> 
> 線上網址：[https://csbs.kuo.cc.cd](https://csbs.kuo.cc.cd)

---

## 專案亮點

- **五大戰略單元全景呈現**：完整納入 20 頁提案之核心架構、痛點分析、工程方案、合規對接與商業推進。
- **繽紛多彩現代視覺（Vibrant Colorful & Glassmorphism）**：Neon 霓虹光暈、深海海洋藍、翡翠永續綠、多層次毛玻璃卡片與流光動畫。
- **即時 3D 港灣雙生模擬器（Live Digital Twin Sandbox）**：以 Isometric 3D 視角模擬 950m 大塢、275m 小塢、海軍新庫房與 1~4 號碼頭之感測器，支援「綠/黃/紅」三色預警演算法即時切換與波形監控。
- **平戰轉換綠能微電網**：非中資 UL9540A 認證 LFP 儲能系統，平時削峰填谷省電費 vs 戰時 72 小時連續孤島供電。
- **全生命週期碳帳本**：設計選材、施工建造、營運維護三階段 ISO 14064 / 14067 碳盤查與 IFRS S1/S2 會計師確信底稿。
- **互動式 ROI 效益計算機**：自訂工程 CAPEX 預算，即時試算停工損失降低、BIM 重工消除與投資報酬乘數。
- **高層分層溝通指南**：針對蔡董事長、蕭課長與現場班長之核心關注重點與一擊必殺話術。
- **內建 20 頁全景簡報模式**：支援鍵盤左右鍵切換、全螢幕簡報投影與演講備忘錄。

---

## 技術棧

- **Core**: React 18 + TypeScript + Vite 6
- **Styling**: Tailwind CSS + Custom Neon Design Tokens + Glassmorphism
- **Icons & Effects**: Lucide React + Canvas Confetti + Custom Canvas 3D Engine
- **Hosting & Domain**: Cloudflare Pages + GitHub Pages (`csbs.kuo.cc.cd`)

---

## 本機開發與建置

```bash
# 安裝依賴
npm install

# 啟動開發伺服器
npm run dev

# 型別檢查與正式打包（輸出至 dist/）
npm run build

# 預覽打包產物
npm run preview
```

---

## 專案目錄結構

```text
├── .github/workflows/deploy.yml   # Cloudflare Pages & GitHub Pages CI/CD
├── public/
│   ├── CNAME                      # csbs.kuo.cc.cd
│   ├── _headers                   # Cloudflare 效能與資安標頭
│   └── favicon.svg                # 向量高科技港灣雙生圖標
├── src/
│   ├── components/
│   │   ├── engineering/           # 4大工程標的與 3D 模擬器
│   │   ├── esg-compliance/        # IFRS S1/S2 與全生命週期碳帳本
│   │   ├── execution/             # 溝通術、模組化報價、Roadmap、Q&A、行動步驟
│   │   ├── hero/                  # 繽紛沉浸式 Hero 區
│   │   ├── impact/                # 重大效益與互動式 ROI 計算機
│   │   ├── layout/                # Navbar, Footer, 20頁簡報彈窗
│   │   ├── overview/              # 五大戰略單元全景卡片
│   │   ├── pain-points/           # 雙重困境與四大承攬瓶頸
│   │   ├── strategy/              # 戰略翻轉對比與黃金三角陣容
│   │   ├── tech-platform/         # 中科大 BIM Web 平台與三色警報
│   │   └── ui/                    # Badge, GlowCard, SectionHeading 通用元件
│   ├── data/
│   │   └── proposalData.ts        # 20 頁提案完整結構化資料庫
│   ├── styles/
│   │   └── index.css              # Neon 霓虹、漸層與毛玻璃自訂樣式
│   ├── types/
│   │   └── index.ts               # TypeScript 型別宣告
│   ├── App.tsx                    # 應用主入口
│   └── main.tsx                   # React DOM 掛載點
├── tailwind.config.js             # 繽紛多彩色彩系統與光暈配置
└── vite.config.ts                 # Vite 建置配置
```

---

## 網域與 Cloudflare Pages 綁定說明

1. 網域已設定 `CNAME` 為 `csbs.kuo.cc.cd`。
2. 在 Cloudflare DNS 面板將 `csbs.kuo.cc.cd` 指向 Cloudflare Pages 專案或自訂網域。
3. 任何推送至 `main` 分支的變更皆會透過 GitHub Actions 自動打包並發佈。

---

## 授權與宣告

本平台內容為中華民國環境管理會計協會與中國科技大學建築設計院針對台船防蝕及台船營造之專屬提案。
