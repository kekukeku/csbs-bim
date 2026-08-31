import { 
  PartnerInfo, 
  EngineeringTarget, 
  StakeholderPersona, 
  CarbonStage, 
  RoadmapPhase, 
  QAItem, 
  ActionStep,
  CommitmentTier,
  DecisionGate,
  ChangeGovernanceType,
  ObjectiveKPI,
  PreconditionItem
} from '../types';

export const PROPOSAL_META = {
  title: "以 BIM 數位雙生與 ESG 永續治理 賦能台船港灣工程升級",
  shortTitle: "台船營建工程低碳精進暨施工風險治理服務建議書",
  subtitle: "四道決策 Gate ｜ 承諾分層 ｜ IFRS S1/S2 財務對接 ｜ 全生命週期碳帳本",
  date: "2026 年 9 月",
  version: "v3.3 精簡精進版",
  proposers: [
    { name: "台灣環境管理會計協會", role: "永續會計與 IFRS S1/S2 治理" },
    { name: "中國科技大學建築設計院", role: "BIM 數位模型與點雲研發（產學團隊）" }
  ],
  targetPartners: [
    { name: "台船防蝕科技股份有限公司（台蝕 CSBS）", role: "主承攬與防蝕塗裝、水下陽極" },
    { name: "台船營造（台營）", role: "甲級營造主體與結構施工" }
  ],
  client: "台灣國際造船股份有限公司（台船 CSBC）",
  harborAuthority: "臺灣港務股份有限公司高雄港務分公司"
};

export const CORE_CHAPTERS = [
  {
    num: "01",
    title: "現況挑戰與科學基線",
    theme: "大塢水位變動帶腐蝕、1,158 坪庫房淨空檢核、35~55 年碼頭租約延壽。",
    strategy: "以科學數據建立現況基線，取代傳統被動修補。",
    color: "from-cyan-500 to-blue-600",
    borderGlow: "rgba(6, 182, 212, 0.4)"
  },
  {
    num: "02",
    title: "主軸 A 施工風險治理",
    theme: "四道決策 Gate（G01~G04）＋ 四類變更客觀證據核定機制。",
    strategy: "未簽認不盲目施工，0 件未核定變更，階段獨立計價。",
    color: "from-violet-500 to-purple-600",
    borderGlow: "rgba(139, 92, 246, 0.4)"
  },
  {
    num: "03",
    title: "主軸 B 港灣數位雙生",
    theme: "三維點雲掃描、四大關鍵淨空檢核、水下陽極連續電位監測。",
    strategy: "空窗期快拆分段施工，不搶修造船營收檔期。",
    color: "from-emerald-500 to-teal-600",
    borderGlow: "rgba(16, 185, 129, 0.4)"
  },
  {
    num: "04",
    title: "IFRS S1/S2 與全生命週期碳帳本",
    theme: "對接 S2 氣候實體風險財務量化、S1 職安內控底稿、ISO 14064/14067 碳帳本。",
    strategy: "將修繕費用轉化為董事會重大資本支出（CAPEX）專款。",
    color: "from-amber-500 to-orange-600",
    borderGlow: "rgba(245, 158, 11, 0.4)"
  }
];

export const COMMITMENT_TIERS: CommitmentTier[] = [
  {
    tier: "第一層級",
    name: "核心承諾（納入履約義務與計價）",
    definition: "具備成熟執行能量，不受第三方核准影響之成熟服務。",
    legalEffect: "正式列為契約履約義務，納入專案標單履約計價範圍。",
    badgeColor: "bg-sage-950/60 text-sage-300 border-sage-800/60",
    items: [
      { title: "現況基線建立 (G01)", owner: "數位治理協力廠商", status: "協力", desc: "三維點雲掃描盤查，建立異點清單與基線定版報告。" },
      { title: "四大淨空衝突檢核 (G03)", owner: "數位治理協力廠商", status: "協力", desc: "天車大梁、電梯井道、堆高機轉彎半徑與 15m 特規門深度檢核。" },
      { title: "四類變更與標單治理", owner: "數位治理廠商 ＋ 主承攬", status: "協力", desc: "標單缺項、現況異點、需求變更、效益工程四軌客觀證據核定。" },
      { title: "港灣防蝕與水下陽極施作", owner: "防蝕部門（台蝕）", status: "自辦", desc: "台蝕本業核心強項，水位變動帶防蝕與水下陽極電位量測。" },
      { title: "工項碳數據隨標單建置", owner: "台灣環境管理會計協會 ＋ 主承攬", status: "自辦", desc: "隨標單產出真實可追溯之 EPD 與能資源消耗憑證，供會計師查驗。" }
    ]
  },
  {
    tier: "第二層級",
    name: "選項服務（未核准前不具履約義務）",
    definition: "須經業主或軍方核准，或外購專業單位之項目。",
    legalEffect: "經業主正式核准並編列預算後另案報價，未核准前不構成義務。",
    badgeColor: "bg-ocean-950/60 text-ocean-300 border-ocean-800/60",
    items: [
      { title: "戰備儲能與微電網", owner: "外購儲能統包商", status: "待覓", desc: "涉及海軍資安審查、防火避難檢討與國防部核准，另案報價。" },
      { title: "結構補強設計與法定簽證", owner: "外聘執業結構技師事務所（配合中科大）", status: "外購", desc: "依法由具執照之結構技師事務所負責計算與簽證。" },
      { title: "第三方碳查證與確信", owner: "具服務能量登錄之查證機構", status: "外購", desc: "由環會協會輔導產出可追溯底稿，由獨立第三方機構出具確信證書。" }
    ]
  },
  {
    tier: "第三層級",
    name: "待確認事項（業主優先釐清前提）",
    definition: "前提條件尚未釐清，影響服務範圍與可行性之關鍵事項。",
    legalEffect: "不列入本次承諾範圍，提請業主於招標前優先協調確定。",
    badgeColor: "bg-amber-950/60 text-amber-300 border-amber-800/60",
    items: [
      { title: "發包方式（最低標 vs 最有利標）", owner: "台船採購工務部", status: "待覓", desc: "決定數位治理服務之評選比重與計價編列方式。" },
      { title: "潛艦廠區資安與設備攜入管制", owner: "海軍監造單位 / 保防部", status: "待覓", desc: "掃描儀、平板攜入許可及雲端 vs 地端部署規範。" },
      { title: "碼頭承租年限與產權主管機關", owner: "臺灣港務公司高雄港務分公司", status: "待覓", desc: "釐清剩餘承租年限，決定延壽投資之財務攤提年限。" }
    ]
  }
];

export const DECISION_GATES: DecisionGate[] = [
  {
    gateId: "G01",
    name: "現況基線定版 (Baseline)",
    timeline: "116 年 上半年",
    triggerCondition: "廠房與庫房完成三維掃描、建立異點清單，業主簽認基線版本。",
    keyDeliverables: [
      "既有結構與管線點雲數據庫",
      "《現況差異與標單不符檢核表》",
      "現況幾何基線定版報告 (Baseline v1.0)"
    ],
    billingMilestone: "現況基線簽認款（後續工程唯一比對依據，未簽認不推進）",
    color: "from-cyan-500 to-blue-600"
  },
  {
    gateId: "G02",
    name: "大系統核定 (Big Systems)",
    timeline: "116 年 下半年",
    triggerCondition: "機電管道空間配置核定，重大問題單 48 小時內 100% 結案。",
    keyDeliverables: [
      "天車軌道梁與 15m 特規門空間配置圖",
      "主機電管道垂直/水平路由圖",
      "A 級重大問題單 48h 結案清冊"
    ],
    billingMilestone: "系統方案核定款（確定空間邊界，未簽認不採購管材）",
    color: "from-purple-500 to-indigo-600"
  },
  {
    gateId: "G03",
    name: "可施工版本 (Constructible)",
    timeline: "117 年 全年度",
    triggerCondition: "四大淨空檢核合格，四類變更回寫標單，衝突結案率達 90% 以上。",
    keyDeliverables: [
      "無碰撞可施工版本圖說 (Shop Drawings)",
      "電梯、天車、堆高機淨空檢核合格書",
      "低碳混凝土試拌與供應商 EPD 憑證"
    ],
    billingMilestone: "施工許可簽認款（現場單一版本施工，杜絕現場先斬後奏）",
    color: "from-emerald-500 to-teal-600"
  },
  {
    gateId: "G04",
    name: "竣工與數位移交 (As-Built)",
    timeline: "118 年 全年度",
    triggerCondition: "現場施工與模型 100% 一致，數位雙生維運模型與碳清冊移交。",
    keyDeliverables: [
      "高精度竣工 BIM 模型與數位資產履歷",
      "水下陽極腐蝕電位連續量測分析報告",
      "ISO 14064 範疇一/二碳數據移交總清冊"
    ],
    billingMilestone: "竣工移交尾款與年度 O&M 數位維運長約啟動",
    color: "from-amber-500 to-orange-600"
  }
];

export const CHANGE_GOVERNANCE_TYPES: ChangeGovernanceType[] = [
  {
    type: "Type 1",
    name: "標單缺項 (Omission)",
    definition: "原始招標漏列之必要工項，比對 G01 基線確認後補列追加。",
    evidenceRequired: "招標清單與 G01 點雲基線圖說對照。",
    approvalProcess: "監造與採購單位審核核定追加預算。",
    impactControl: "於 G02 前全數辨識，杜絕現場停工待料。"
  },
  {
    type: "Type 2",
    name: "現況異點 (Anomaly)",
    definition: "現場實際結構尺寸與歷史圖說偏差超過公差標準（> 20mm）。",
    evidenceRequired: "三維點雲數據與偏差量測報告。",
    approvalProcess: "BIM 團隊建立差異模型，提交結構技師確認。",
    impactControl: "G01 定版前排除，避免特規門或天車無法安裝。"
  },
  {
    type: "Type 3",
    name: "需求變更 (Change Request)",
    definition: "業主或軍方任務調整提出之規格變更。",
    evidenceRequired: "正式書面通知函 ＋ 工期成本衝擊評估表。",
    approvalProcess: "主承攬提送變更報價，業主書面簽認後始得施工。",
    impactControl: "落實「先核定再施工」，杜絕請款爭議。"
  },
  {
    type: "Type 4",
    name: "效益工程 (Value Engineering)",
    definition: "團隊主動提出之低碳替代材料或工序最佳化建議。",
    evidenceRequired: "EPD 碳足跡減量試算 ＋ 成本效益分析。",
    approvalProcess: "提報台船永續部與工務部核定納入加值計價。",
    impactControl: "創造實質 ESG 減碳量與耐久效益。"
  }
];

export const OBJECTIVE_KPIS: ObjectiveKPI[] = [
  {
    indicator: "現況盤查結案率",
    target: "第 1 個月達 100%",
    significance: "確保庫房、廠房與船塢關鍵區域全數掃描建檔留證。",
    verificationMethod: "G01 點雲覆蓋率報告與異點清冊簽認紀錄。"
  },
  {
    indicator: "重大問題單 (A級) 回應",
    target: "48 小時以內",
    significance: "消除重大工法衝突阻礙現場施工排程。",
    verificationMethod: "協同平台 Issue Tracker 時間戳記。"
  },
  {
    indicator: "重大衝突結案率",
    target: "各 Gate 簽認前 ≥ 90%",
    significance: "進入施工版本前解決機電結構衝突，消除重工。",
    verificationMethod: "BIM 衝突矩陣檢核表與協調會議紀錄。"
  },
  {
    indicator: "圖模版本一致率",
    target: "核定施工版達 100%",
    significance: "現場工班與模型手持單一版本圖說，杜絕混亂。",
    verificationMethod: "施工圖 QR-Code 版本雜湊值比對。"
  },
  {
    indicator: "未核定變更施工件數",
    target: "嚴格目標 0 件",
    significance: "消滅現場先斬後奏，所有變更先核定再施工。",
    verificationMethod: "變更治理簽證單與工地日誌每日勾稽。"
  }
];

export const FIVE_PRECONDITIONS: PreconditionItem[] = [
  {
    id: "pre-01",
    title: "一、發包方式與計價架構",
    keyQuestions: ["本案採最低標或最有利標？", "設計監造與施工是否統包？"],
    impactOnScope: "若採最低標，數位治理服務應大幅精簡以避免墊高成本；建議爭取最有利標評選。",
    actionRequired: "招標前向業主工務部確認評選辦法。"
  },
  {
    id: "pre-02",
    title: "二、保密與資通安全規範",
    keyQuestions: ["潛艦管制區可攜入之設備範圍？", "雲端平台 vs 地端部署限制？"],
    impactOnScope: "決定三維掃描、空拍與平台部署方式；若受限則改採封閉地端方案。",
    actionRequired: "優先提送資通安全計畫書申請白名單。"
  },
  {
    id: "pre-03",
    title: "三、碼頭產權與租約條件",
    keyQuestions: ["高雄港務分公司租約剩餘年期？", "永久設施改裝同意權？"],
    impactOnScope: "決定延壽投資之財務攤提年限，避免投入無法回收之重資產。",
    actionRequired: "調閱正式租約，確認租期與設施改裝條款。"
  },
  {
    id: "pre-04",
    title: "四、防火避難檢討責任歸屬",
    keyQuestions: ["新增庫房防火區劃由誰負責？", "浪板防火時效認定權限？"],
    impactOnScope: "直接決定二三樓空間分區配置，避免 BIM 建模重工。",
    actionRequired: "召開防火避難邊界協調會定案。"
  },
  {
    id: "pre-05",
    title: "五、協力廠商同意書與產學資格",
    keyQuestions: ["投標是否強制附協力協議？", "產學合作契約簽約主體性？"],
    impactOnScope: "影響投標資格與團隊組建合法性。",
    actionRequired: "投標前完成產學備忘錄簽署。"
  }
];

export const PARTNERS: PartnerInfo[] = [
  {
    name: "台船防蝕（台蝕） ＋ 台船營造（台營）",
    shortName: "台蝕 / 台營",
    role: "現場工程主承攬主體與施工管理",
    gradient: "from-cyan-500 to-blue-600",
    iconColor: "text-cyan-400",
    strengths: [
      "甲級營造資質 ＋ 數十年水下重防蝕與塗裝專業實績",
      "完全熟悉廠區動線、機敏管制與施工工法",
      "水下陽極板安裝與重型結構防護專業工班"
    ],
    responsibilities: [
      "統籌主標承攬、現場工安第一線雇主責任與完工保固",
      "防蝕塗裝、抗鹽浪板更換、水下陽極板安裝與防滲施工",
      "施工期能資源與機具耗能清冊記錄"
    ],
    legalBoundary: "承擔工地安全衛生雇主責任、完工保固責任與主標履約總責任。"
  },
  {
    name: "數位治理協力廠商 ＋ 中國科大建築設計院",
    shortName: "中科大 / 數位協力",
    role: "BIM 數位模型、點雲建置、結構技師簽證與教育訓練",
    gradient: "from-purple-500 to-indigo-600",
    iconColor: "text-purple-400",
    strengths: [
      "五萬平方公尺級既有結構現況盤查經驗",
      "建築機電整合實務與淨空衝突檢核權威",
      "外聘具執業執照之結構技師事務所進行法定計算與簽證",
      "免裝 App 輕量化 3D Web 協同管理平台"
    ],
    responsibilities: [
      "三維點雲掃描、現況基線盤查與幾何建模",
      "天車大梁、電梯井道與特規門四大淨空衝突檢核",
      "外聘執業結構技師負責天車補強與耐震計算簽證（外購配合）",
      "維運協同平台與 A 級重大問題單 48h 追蹤"
    ],
    legalBoundary: "提供技術分析、圖模整合與教育訓練；結構簽證依法委由外聘執業結構技師事務所獨立簽章負責。"
  },
  {
    name: "台灣環境管理會計協會 ＋ 第三方查驗機構",
    shortName: "環會協會 / 永續顧問",
    role: "金管會 IFRS 治理諮詢、碳帳本建置與第三方碳查證",
    gradient: "from-emerald-500 to-teal-600",
    iconColor: "text-emerald-400",
    strengths: [
      "金管會 IFRS S1/S2 指南制定與諮詢專家",
      "ISO 14064 碳盤查 / ISO 14067 碳足跡主導查驗實務",
      "全生命週期碳帳本與 EPD 憑證鏈路建置",
      "對接第三方具登錄能量之碳查驗機構"
    ],
    responsibilities: [
      "材料隱含碳試算與可追溯碳帳本架構輔導",
      "提供 IFRS S2 氣候實體風險（未修復停工損失精算）財務分析底稿",
      "提供 IFRS S1 職安內控底稿，爭取台船重大資本支出（CAPEX）專款",
      "對接台船永續年報編製與四大會計師查核確信"
    ],
    legalBoundary: "協會專注提供會計與永續治理諮詢底稿；碳確信證書依法由獨立第三方查驗機構出具。"
  }
];

export const ENGINEERING_TARGETS: EngineeringTarget[] = [
  {
    id: "large-dock",
    title: "工程標的一：大船塢水位變動帶防蝕與快拆分段施工",
    subtitle: "長 950m × 寬 92m × 深 12m / 使用逾 40 餘年（待基線查證）",
    accentColor: "from-cyan-500 to-blue-600",
    glowColor: "rgba(6, 182, 212, 0.4)",
    specs: [
      { label: "規格尺寸", value: "長 950m × 寬 92m × 深 12m" },
      { label: "結構狀態", value: "混凝土無固定壽命，以現況檢測評估為準" },
      { label: "防滲進度", value: "0~400m 已完成，401~950m 待快拆分段施作" }
    ],
    scientificMechanism: "劣化最顯著區段為氧氣充足之「水位變動帶與飛沫帶」，乾濕交替引發鋼筋電化學腐蝕；非長期浸沒滿水腐蝕。",
    painPoints: ["停塢即停營收商業矛盾，傳統大面積施工排擠修造船檔期。"],
    commercialReality: "商業解法：採用「輕量快拆平台 ＋ 工序標準化分段施作」，利用修造船空窗期（3~7天）分段施作 401~950m 防滲，各段獨立驗收不搶檔期。",
    solutions: [
      {
        title: "輕量快拆施工平台 ＋ 空窗期分段推進",
        description: "高強度鋁合金模組快拆平台，半天內完成搭拆；工序標準化分段施作 401~950m 塢壁防滲。",
        benefit: "消除停塢損失，各分段獨立驗收計價。"
      },
      {
        title: "水位變動帶高滲透阻銹抗鹽塗層",
        description: "高滲透阻銹劑鈍化鋼筋，外層塗覆耐鹽耐磨面漆，阻絕乾濕交替區氯離子侵蝕。",
        benefit: "水位變動帶延壽 10 年以上。"
      }
    ],
    clearanceChecks: [
      "大塢龍門吊車軌道梁下陷與幾何共平檢核",
      "塢壁防撞靠泊防舷材錨定螺栓剪力檢查"
    ],
    sensorTypes: [
      { name: "水位變動帶腐蝕電位計", location: "塢壁水位變動帶", purpose: "連續監測乾濕交替鋼筋鈍化膜活性", alertThreshold: "電位 < -350 mV" },
      { name: "微米級位移計", location: "401-950m 塢壁施工層縫", purpose: "量測進出塢水壓交替下層縫張合", alertThreshold: "張開量 > 0.30 mm" }
    ],
    csbsRole: "台蝕主導物料與防蝕施作；中科大負責點雲基線建置。"
  },
  {
    id: "small-dock",
    title: "工程標的二：小船塢空窗期監測與分段維護",
    subtitle: "長 275m × 寬 45m 修船主力塢 / 使用逾 30 餘年",
    accentColor: "from-amber-500 to-rose-600",
    glowColor: "rgba(245, 158, 11, 0.4)",
    specs: [
      { label: "規格尺寸", value: "長 275m × 寬 45m" },
      { label: "維護策略", value: "先建立監測與現況基線，再決定分段補強範圍" }
    ],
    scientificMechanism: "修船靠泊重複動態衝擊剪應力引發內部微裂縫，加速鹽分滲透。",
    painPoints: ["進出塢空窗期極短，盲目敲除易造成修了又撞、壞了再拆。"],
    commercialReality: "商業解法：先監測建基線、抓出趨勢，精準鎖定局部破損點，避免盲目工程投入。",
    solutions: [
      {
        title: "微震動與靠泊動態應變監測",
        description: "在防舷材後壁加裝動態應變片，捕捉進塢碰撞衝擊力道，建立疲勞衰減模型。",
        benefit: "量化靠泊疲勞損耗，精準預判局部補強時機。"
      }
    ],
    clearanceChecks: ["修船進塢底支墩受力面平整度檢核"],
    sensorTypes: [
      { name: "動態應變片", location: "防舷材後壁關鍵衝擊區", purpose: "捕捉船舶進塢碰撞瞬間衝擊波", alertThreshold: "應變值 > 350 με" }
    ],
    csbsRole: "台蝕負責水下防蝕材料，中科大負責動態監測分析。"
  },
  {
    id: "navy-warehouse",
    title: "工程標的三：海軍新增庫房與改建廠房風險治理",
    subtitle: "單層 386 坪 / 三層共 1,158 坪新增庫房 ＋ 潛船/潛機改建廠房",
    accentColor: "from-emerald-500 to-teal-600",
    glowColor: "rgba(16, 185, 129, 0.4)",
    specs: [
      { label: "新增庫房面積", value: "單層約 386 坪，三層合計約 1,158 坪 (58m × 22m)" },
      { label: "潛船廠房改建", value: "主體延伸 23m ＋ 15t 天車 ＋ 15m×8m 特規門" }
    ],
    scientificMechanism: "既有結構條件不明與資訊分散，設備動線一旦定型，越晚發現衝突代價越高。",
    painPoints: ["電梯井道、天車淨空與 15m 特規門若有衝突，現場必發生嚴重敲除重工。"],
    commercialReality: "商業解法：導入 G03 四大關鍵淨空深度檢核，在虛擬模型解決衝突後再施工。",
    solutions: [
      {
        title: "四大關鍵淨空深度檢核 (Clearance Check)",
        description: "鎖定載貨電梯井道 (4m×3.5m×4m)、15t 天車大梁淨空、堆高機轉彎半徑與 15m 特規門三維檢核。",
        benefit: "虛擬解決 90% 以上空間衝突，節省 15~25% 敲除重工成本。"
      }
    ],
    clearanceChecks: [
      "載貨電梯井道垂直度與機坑淨尺寸 (4m × 3.5m × 4m)",
      "15 噸龍門天車大梁軌道水平度與行車淨空高度",
      "二三樓高載重樓版堆高機轉彎半徑與通道淨寬",
      "15m × 8m 前門特規防水大門開闔迴轉空間"
    ],
    sensorTypes: [
      { name: "天車軌道撓度計", location: "15t 天車大梁跨中", purpose: "量測滿載吊運時動態彈性撓度", alertThreshold: "撓度 > L/800" }
    ],
    csbsRole: "台營主導營造主體，台蝕負責防蝕塗裝，中科大負責 BIM 淨空檢核。"
  },
  {
    id: "wharf-cathodic",
    title: "工程標的四：一至四號碼頭水下防蝕與延壽評估",
    subtitle: "1~4 號碼頭（使用達 35 至 55 年）/ 高雄港務分公司承租設施",
    accentColor: "from-purple-500 to-indigo-600",
    glowColor: "rgba(139, 92, 246, 0.4)",
    specs: [
      { label: "使用年數", value: "民國 60~80 年代建置，使用已達 35 至 55 年" },
      { label: "產權所屬", value: "臺灣港務股份有限公司高雄港務分公司（承租）" }
    ],
    scientificMechanism: "鋼板樁承受潮差侵蝕與吊車重載，水下鋁合金陽極塊隨時間消耗需連續監測鈍化效率。",
    painPoints: ["產權非台船所有，延壽投資攤提必須受港務公司租約年限限制。"],
    commercialReality: "商業解法：以「現況數位化、防蝕維護及連續電位監測」為核心，結構補強另案議定。",
    solutions: [
      {
        title: "延續 113 年陽極成果：連續電位監測",
        description: "部署水下參比電極連續監測陰極保護電位，比對 106 年水下評估報告數據。",
        benefit: "精確掌握陽極剩餘壽命與保護效率。"
      }
    ],
    clearanceChecks: ["重型吊車鋼軌平直度與軌距公差檢核"],
    sensorTypes: [
      { name: "水下參比電極", location: "水下鋼板樁表面", purpose: "連續量測陰極保護電位", alertThreshold: "電位未達 -800 mV" }
    ],
    csbsRole: "台蝕主導水下防蝕陽極與電位監測。"
  }
];

export const MICROGRID_DATA = {
  title: "綠能微電網解方：平戰轉換與儲能安全（選項服務）",
  subtitle: "列為【選項服務】 ｜ 揭露海軍國防部核准、防火避難綜合檢討與資安審查三大前提",
  boundaryNotice: "【履約責任邊界澄清】：戰備儲能與微電網屬於【選項服務】。涉及海軍國防部審查、管制區資安規範、防火避難綜合檢討及外購專業儲能系統商，須俟業主正式核准並編列預算後另案報價，未經核准前不具履約義務。",
  solutions: [
    {
      title: "國防國安非紅色供應鏈（選項服務）",
      desc: "若經軍方核准，採用 UL9540A 認證之非中資 LFP 電芯或在地製造高安全性電池組，BMS 採用美日系通訊協定，嚴禁遠端回傳大陸疑慮。"
    },
    {
      title: "平時模式（削峰填谷）",
      desc: "庫房屋頂太陽能自發自用，離峰充電、尖峰放電，降低契約容量超約罰款；隨標單產出憑證列入 ESG 範疇二減碳實績。"
    },
    {
      title: "戰時模式（72h 孤島運轉）",
      desc: "外部電網中斷時 20ms 瞬間切換，優先供應潛艦庫房防爆通風與船塢排水系統連續 72 小時不斷電運作。"
    }
  ]
};

export const ESG_IFRS_DATA = [
  {
    title: "對接 IFRS S2 氣候實體風險（Physical Risks）",
    standard: "IFRS S2 / TCFD 氣候實體風險揭露",
    requirements: "國際準則強制要求揭露：極端暴潮、海平面上升對港灣固定資產的財務衝擊（資產減損量化）。",
    cemaOutput: "協會將船塢水位變動帶腐蝕監測與碼頭耐蝕年限，轉化為標準情境分析（Scenario Analysis），量化精算為「未修復預期停工損失」，為台船爭取提列資本支出（CAPEX）正當性。",
    valueProp: "將工程修繕費用轉化為避免數億元停工損失的 ESG 風險防護投資。"
  },
  {
    title: "對接 IFRS S1 營運韌性與工安管理",
    standard: "IFRS S1 / SASB 運輸設備與重工業標準（RT-IG / RT-AE）",
    requirements: "船塢高鹽霧深水作業環境屬於重大工安風險項目，金管會要求揭露職安韌性與內控措施。",
    cemaOutput: "協會將 BIM 3D 安全淨空模擬、管線碰撞消除與現場輕量快拆安全工法，編製為合規之「職業安全衛生內部控制底稿」，直接送交台船董事會永續發展委員會。",
    valueProp: "直接提升台船公司治理評鑑排名，滿足國際綠色造船評級。"
  }
];

export const CARBON_LIFECYCLE_STAGES: CarbonStage[] = [
  {
    stage: "階段一",
    title: "設計與選材端（材料隱含碳試算）",
    color: "text-emerald-400",
    dataInputs: [
      "BIM 3D 模型自動帶入材料量體表（BOQ）",
      "低碳高爐抗鹽水泥 vs. 傳統波特蘭水泥比選",
      "循環鋁合金浪板 vs. 一般鐵皮耐蝕性與碳足跡比對"
    ],
    carbonOutputs: [
      "材料隱含碳試算表（Embodied Carbon Breakdown）",
      "材料更換減碳百分比報告（預計減碳 18~35%）",
      "材料供應商提供之第三方環境產品聲明（EPD）"
    ],
    isoStandard: "ISO 14067 / PAS 2050",
    reductionTech: ["低碳高爐抗鹽水下混凝土", "高反照率隔熱防蝕塗層", "可回收結構鋼材"],
    boundaryClarification: "工程團隊負責材料選型與試算，EPD 由上游材料供應商正式出具，不承擔材料製造端認證責任。"
  },
  {
    stage: "階段二",
    title: "施工建造端（溫室氣體盤查清冊）",
    color: "text-cyan-400",
    dataInputs: [
      "現場柴油重機械與吊車作業工時記錄",
      "預拌混凝土車與物料運輸車輛里程追蹤",
      "施工用電度數與臨時抽水設備耗能記錄"
    ],
    carbonOutputs: [
      "符合 ISO 14064 範疇一（直接排放）盤查清冊",
      "符合 ISO 14064 範疇二（能源間接排放）清冊",
      "隨標單累積之施工期動態碳排即時紀錄表"
    ],
    isoStandard: "ISO 14064-1:2018",
    reductionTech: ["電動化施工機具", "運輸動線最佳化", "BIM 施工排程消除怠速"],
    boundaryClarification: "工程團隊負責現場真實能資源數據蒐集與整理，第三方確信證書由獨立查證機構負責出具。"
  },
  {
    stage: "階段三",
    title: "營運維護端（連續減碳與永續年報）",
    color: "text-purple-400",
    dataInputs: [
      "分區智慧電表即時功率與用電度數",
      "屋頂太陽光電發電量與儲能充放電數據（選項服務）",
      "通風球與節能門禁系統實時節電量"
    ],
    carbonOutputs: [
      "每年產出節電效益與範疇二減碳數據憑據",
      "台船年度永續報告書（ESG Report）港灣工程專章基礎數據",
      "水下陽極消耗與延壽趨勢分析總清冊"
    ],
    isoStandard: "GRI 302 / GRI 305 / IFRS S2",
    reductionTech: ["智慧分區溫濕度聯動", "預防性維護避免大修耗能", "自然進氣與熱對流優化"],
    boundaryClarification: "工程團隊移交數位資產與監測數據，由台船永續委員會負責年度報告編撰與金管會申報。"
  }
];

export const QUANTIFIED_ROI = [
  {
    metric: "30 ~ 50%",
    label: "非預期停工損失降低",
    desc: "水位變動帶防蝕與點雲基線提早預警，避免修造船進塢時發生船舶碰撞或重大崩塌停塢損失。",
    color: "from-cyan-400 to-blue-500",
    glow: "shadow-glow-ocean"
  },
  {
    metric: "15 ~ 25%",
    label: "新建工程重工拆改浪費減少",
    desc: "海軍庫房/廠房經 G03 BIM 深度淨空檢核，在虛擬空間消除電梯/天車/特規門衝突，杜絕現場二次敲除。",
    color: "from-emerald-400 to-teal-500",
    glow: "shadow-glow-esg"
  },
  {
    metric: "0 件",
    label: "未核定變更施工件數",
    desc: "落實主軸 A 四類變更治理與四道決策 Gate，嚴格執行「先核定預算與證據再施工」，杜絕工程糾紛。",
    color: "from-purple-400 to-pink-500",
    glow: "shadow-glow-digital"
  },
  {
    metric: "100%",
    label: "圖模版本一致率與合規",
    desc: "全線統一核定施工版，工程數據隨標單真實可追溯，滿足四大會計師事務所 IFRS S1/S2 審計確信。",
    color: "from-amber-400 to-rose-500",
    glow: "shadow-glow-sun"
  }
];

export const STAKEHOLDER_PERSONAS: StakeholderPersona[] = [
  {
    id: "board-and-esg",
    title: "董事會與永續部門",
    roleDescription: "關注上市公司品牌聲譽、ESG 治理評鑑、金管會 IFRS S1/S2 接軌、重大資本支出（CAPEX）合規立案理由、四道 Gate 階段計價與工期責任控制",
    avatarIcon: "Crown",
    color: "from-ocean-500 to-blue-600",
    coreConcerns: [
      "上市公司形象、ESG 評鑑排名與金管會強制接軌 IFRS S1/S2 期限",
      "重大投資風險控制與預算合理性，避免修繕被質疑為純費用浪費",
      "四道決策 Gate 階段獨立計價與核銷，杜絕未核定變更爭議",
      "國際綠色航運與離岸風電客戶的永續信用與履約責任釐清"
    ],
    pitchHook: "「引進本方案能將老舊船塢修繕轉化為具代表性的 IFRS S1/S2 示範案例；透過主軸 A 四道 Gate 階段計價與淨空檢核，變更先簽認再施工，兼顧董事會 CAPEX 合規與工務履約掌控。」",
    persuasiveDetails: [
      "不是花錢修補，而是建立可列入固定資產的數位雙生韌性資產。",
      "將未修復停工損失精算為具體財務數字，向董事會提交合規立案依據。",
      "四道決策 Gate 作為階段獨立計價依據，每一 Gate 簽認才付款，採購與工管完全掌控進度。",
      "責任邊界極為清楚：主承攬負責工安與專案管理，結構補強由執業技師簽證，BIM 廠商無變更權。",
      "落實承諾分層，非紅戰備綠能儲能列為選項服務，避免未審先承諾造成履約違約風險。"
    ],
    counterFears: "免除董事會與主管對「修繕耐久度存疑與變更失控」之顧慮，以四道 Gate 簽認、客觀量測數據與第三方法人確信背書。"
  },
  {
    id: "foreman",
    title: "船塢 / 碼頭現場施工班長與工安人員",
    roleDescription: "關注前線人身安全、修船排程會不會被卡死、系統會不會增加日常繁瑣文書負擔",
    avatarIcon: "HardHat",
    color: "from-emerald-500 to-teal-600",
    coreConcerns: [
      "現場弟兄進塢施工會不會有混凝土崩塌危險",
      "大塢修船排程緊湊，施工架搭拆會不會耽誤出塢時間被罵",
      "出事時會不會被上面怪罪扛責任（揹黑鍋）",
      "感測器耐不耐用，會不會動不動就壞掉誤報"
    ],
    pitchHook: "「大塢採用輕量快拆平台分段施作，不搶修船檔期；感測器全自動回傳，不用班長天天人工抄表，保護現場弟兄安全。」",
    persuasiveDetails: [
      "大塢採用高強度鋁合金輕量快拆平台，半天內完成搭拆，各段獨立驗收不卡修造船排程。",
      "感測器全自動無線回傳，黃燈通知預警巡檢，紅燈直接連線工安處，用科學數據證明結構狀態，不用班長扛責。",
      "採用 IP68 / NEMA 4X 航海級耐蝕外殼與自我診斷線路，惡劣鹽霧環境下穩定運作 3 年以上。"
    ],
    counterFears: "讓班長感到數位系統是「保護自己免於揹鍋與搶工期的神器」，化被動排斥為主動支持。"
  }
];

export const CONTRACT_PRICING_MODULES = [
  {
    module: "G01~G03 施工風險治理與 BIM 淨空檢核服務",
    unit: "依總樓地板面積與 Gate 階段計價",
    price: "核心承諾 ｜ 約 TWD$ 300 / m²",
    scope: "現況點雲基線建立、四類變更治理、四大淨空檢核、輕量化 Web 協同平台維運。",
    benefit: "消除現場施工二次敲除浪費，平均節省 15~25% 重工成本。"
  },
  {
    module: "全生命週期碳帳本與 IFRS S1/S2 合規諮詢",
    unit: "依專案顧問範疇定額提撥",
    price: "核心承諾 ｜ 專案技術服務費",
    scope: "隨標單建立真實可追溯之 EPD 材料隱含碳與施工耗能清冊、IFRS S1/S2 氣候實體風險情境精算底稿。",
    benefit: "為台船重大資本支出（CAPEX）取得會計師確信與董事會通過支持。"
  },
  {
    module: "港灣水下重防蝕與空窗期分段施工",
    unit: "依標單實際施作工項計價",
    price: "核心承諾 ｜ 按工程單價履約計價",
    scope: "401~950m 塢壁層縫防滲、水位變動帶阻銹塗層、潛船潛機外牆抗鹽浪板更換。",
    benefit: "台蝕本業核心施作，快拆平台不搶修造船檔期。"
  },
  {
    module: "戰備儲能微電網 / 結構技師簽證 / 防火性能檢討",
    unit: "經業主核准後另案提送規劃書與報價",
    price: "選項服務 ｜ 經核准後另案編列",
    scope: "非中資 UL9540A 儲能統包、外聘執業結構技師簽證、防火避難性能檢討、第三方碳查證。",
    benefit: "未經核准前不具履約義務，避免台蝕承擔超額履約風險。"
  }
];

export const ROADMAP_PHASES: RoadmapPhase[] = [
  {
    phase: "前置準備（115 年 Q4）",
    duration: "前提釐清與團隊組建",
    title: "釐清發包方式、資安條件、碼頭租約，取得協力協議並調閱水下評估報告。",
    badgeColor: "bg-slate-800 text-slate-300 border-slate-700",
    keyActions: ["確認發包方式（最有利標）", "提送資安設備攜入計畫", "確認高雄港務分公司租約年限"],
    deliverables: ["《前提條件釐清備忘錄》", "產學合作協議定稿"]
  },
  {
    phase: "G01 現況基線（116 年 H1）",
    duration: "點雲盤查與基線定版",
    title: "廠房及庫房點雲掃描、建立異點清單與基線定版；船塢碼頭首次數位化掃描。",
    badgeColor: "bg-cyan-500/20 text-cyan-400 border-cyan-500/40",
    keyActions: ["海軍庫房全區三維掃描", "建立異點檢核清單", "業主簽認 G01 基線報告"],
    deliverables: ["G01 現況基線定版報告", "階段簽認證明與計價款"]
  },
  {
    phase: "G02 大系統核定（116 年 H2）",
    duration: "系統容量與主線核定",
    title: "大系統容量與主線核定、管道空間配置、A級問題單48h結案、低碳材料試拌。",
    badgeColor: "bg-purple-500/20 text-purple-400 border-purple-500/40",
    keyActions: ["天車梁與特規門空間配置核定", "機電管道空間檢討", "A 級問題單 48h 結案簽認"],
    deliverables: ["G02 空間配置核定報告", "A 級問題單結案清冊"]
  },
  {
    phase: "G03 可施工版本（117 年）",
    duration: "細部整合與分段施作",
    title: "四大淨空檢核、四類變更回寫標單、大塢快拆分段防滲施工、庫房鋼構補強。",
    badgeColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
    keyActions: ["四大淨空檢核簽認", "四類變更回寫標單", "大塢利用空檔分段施作防滲"],
    deliverables: ["G03 可施工圖說", "淨空檢核合格簽認書"]
  },
  {
    phase: "G04 竣工移交（118 年）",
    duration: "數位資產移交與長約啟動",
    title: "竣工模型與數位資產移交、水下陽極電位趨勢報告、全生命週期碳數據總清冊。",
    badgeColor: "bg-amber-500/20 text-amber-400 border-amber-500/40",
    keyActions: ["現場圖模 100% 一致性驗收", "交付竣工 BIM 模型", "簽署年度 O&M 數位維運長約"],
    deliverables: ["G04 竣工移交證明", "台船 ESG 報告書港灣專章底稿", "年度長期維運合約"]
  }
];

export const RISK_QNA: QAItem[] = [
  {
    question: "海軍庫房招標已確定，採購真的願意追加預算嗎？",
    category: "招標與預算",
    answer: "海軍專案對機敏設備安全與防潮極為敏感。追加「智慧分區溫控」與「四大淨空檢核」從「國防戰備韌性」出發，可透過 Type 4 效益工程提案在合規程序下動支預備金或追加預算。",
    highlight: "從「國防戰備韌性」與「Type 4 效益工程」切入，合法動支預算。"
  },
  {
    question: "感測器裝在嚴苛的鹽霧水下環境，會不會很快故障失效？",
    category: "技術耐久性",
    answer: "所有 Sensor 採 IP68 航海級耐蝕外殼與台蝕防蝕包覆，設有自我診斷線路排除誤報；水位變動帶採用高滲透阻銹劑滲入混凝土保護鈍化膜，穩定運作 3 年以上。",
    highlight: "IP68 航海級規格 ＋ 水位變動帶高滲透阻銹 ＋ 自我診斷線路。"
  },
  {
    question: "台船若依然堅持傳統比價打折，該如何應對？",
    category: "商務議價",
    answer: "採取「分拆計價、模組採購、合約包容」之務實策略，合法合規承攬，中科大與環會協會靈活調整。核心工程配合常規議價，施工風險治理與 ESG 顧問費獨立編列，保證專案整體高毛利回報。",
    highlight: "核心工程配合常規議價，施工風險治理與 ESG 顧問費獨立編列。"
  }
];

export const ACTION_STEPS: ActionStep[] = [
  {
    step: 1,
    timeframe: "1 週內",
    title: "啟動五大前提條件釐清會議",
    owner: "台蝕 陳經理 × 台船工務/採購部",
    description: "確認發包方式（爭取最有利標）、資安設備攜入規範、碼頭租約年限與防火責任歸屬。",
    deliverable: "《五大前提條件確認表》"
  },
  {
    step: 2,
    timeframe: "2 週內",
    title: "召開台蝕高層閉門戰略演練",
    owner: "環會協會 × 中科大團隊 × 台蝕/台營高層",
    description: "實機演示 3D BIM 平台、四道 Gate 決策矩陣與四類變更治理流程，推演提報簡報。",
    deliverable: "正式提報簡報 Final 定稿"
  },
  {
    step: 3,
    timeframe: "1 個月內",
    title: "向台船董事會與永續工務部門提報",
    owner: "台蝕 / 台營 / 中科大 / 環會協會 聯合出席",
    description: "以「港灣資產延壽暨施工風險治理服務」為名正式提報，敲定首批示範案。",
    deliverable: "簽署首批示範案合約，啟動 G01 現況基線"
  }
];
