import { PartnerInfo, EngineeringTarget, StakeholderPersona, CarbonStage, RoadmapPhase, QAItem, ActionStep } from '../types';

export const PROPOSAL_META = {
  title: "以 BIM 數位雙生與 ESG 永續治理 賦能台船港灣工程升級",
  shortTitle: "台船港灣 BIM 數位雙生與 ESG 升級方案",
  date: "2026 年 9 月",
  version: "v2.8 正式提案版",
  proposers: [
    { name: "中華民國環境管理會計協會", role: "永續會計與 IFRS S1/S2 治理" },
    { name: "中國科技大學建築設計院", role: "BIM 數位雙生與結構防災研發" }
  ],
  targetPartners: [
    { name: "台船防蝕科技股份有限公司（台蝕 CSBS）", role: "防蝕工程與主標施作" },
    { name: "台船營造（台營）", role: "甲級營造與結構施工" }
  ],
  client: "台灣國際造船股份有限公司（台船 CSBC）"
};

export const CORE_CHAPTERS = [
  {
    num: "01",
    title: "第一部：現況挑戰與契機",
    theme: "標的現況（船塢老化、地陷、海軍新庫房需求）與招標困境",
    strategy: "掌握母公司決策痛點，鎖定追加預算著力點",
    color: "from-cyan-500 to-blue-600",
    borderGlow: "rgba(6, 182, 212, 0.4)"
  },
  {
    num: "02",
    title: "第二部：戰略定位與價值加值",
    theme: "純工程比價？如何以 ESG 與 BIM 創造定價權",
    strategy: "翻轉傳統修繕思維，避免削價競爭，拉高專案毛利空間",
    color: "from-emerald-500 to-teal-600",
    borderGlow: "rgba(16, 185, 129, 0.4)"
  },
  {
    num: "03",
    title: "第三部：標的工程數位實施方案",
    theme: "大/小船塢結構防災監測、新舊庫房廠房智慧化與微電網",
    strategy: "獲取可立即落地的實體軟硬體工程規格與非紅微電網",
    color: "from-violet-500 to-purple-600",
    borderGlow: "rgba(139, 92, 246, 0.4)"
  },
  {
    num: "04",
    title: "第四部：上市公司合規對接",
    theme: "金管會要求接軌 IFRS S1/S2 與重大資本支出（CAPEX）關聯",
    strategy: "提供母公司董事會無法拒絕之合規審計理由與碳帳本",
    color: "from-amber-500 to-orange-600",
    borderGlow: "rgba(245, 158, 11, 0.4)"
  },
  {
    num: "05",
    title: "第五部：商業模式與推進計畫",
    theme: "合約拆解、模組化報價、三方產學分工與時程推進",
    strategy: "低風險啟動，彈性分階段承攬獲利，鎖定長期維運合約",
    color: "from-rose-500 to-pink-600",
    borderGlow: "rgba(244, 63, 94, 0.4)"
  }
];

export const DOUBLE_DILEMMAS = [
  {
    category: "實體營運資產重大風險",
    icon: "AlertTriangle",
    color: "text-amber-400",
    bgGradient: "from-amber-500/10 via-amber-500/5 to-transparent",
    borderColor: "border-amber-500/30",
    items: [
      {
        title: "大塢使用逾50年（950m×92m）",
        desc: "混泥土已過設計年限，船塢長度無法滿足大型新船與新造艦艇，塢壁嚴重滲漏、鋼筋鏽蝕膨脹脫落，碼頭段路面更有局部下陷掏空隱憂。"
      },
      {
        title: "小塢結構沉疴（275m×45m）",
        desc: "過去施工品質不佳，海水長年入滲使結構脆化，修船作業頻繁導致「修了又撞、壞了再拆」之惡性循環。"
      },
      {
        title: "海軍專案期程緊迫",
        desc: "潛艦與鋰電池庫房防爆、恆溫恆濕標準極嚴，但招標預算僵化，欠缺智慧化與綠色升級空間。"
      }
    ]
  },
  {
    category: "永續治理與資本市場監管",
    icon: "ShieldAlert",
    color: "text-rose-400",
    bgGradient: "from-rose-500/10 via-rose-500/5 to-transparent",
    borderColor: "border-rose-500/30",
    items: [
      {
        title: "金管會強制接軌 IFRS S1/S2",
        desc: "上市公司分階段接軌 IFRS 永續準則。台船身為造船龍頭，港灣設施是其最大固定資產，若未揭露實體氣候風險與耐受度，將面臨重大資產減損。"
      },
      {
        title: "外資與信用評等衝擊",
        desc: "缺乏氣候財務量化底稿，難以通過四大會計師事務所之永續審計確信，影響國際綠色航運與離岸風電合約信譽。"
      },
      {
        title: "傳統維修被視為沉沒費用",
        desc: "若僅以傳統修繕發包，在董事會層級會被視為純成本消耗，極難爭取大型 CAPEX 資本預算支持。"
      }
    ]
  }
];

export const CSBS_BOTTLENECKS = [
  {
    title: "保固期過期與責任切割",
    status: "過去完工之工程保固期皆已屆滿，母公司對修繕耐久度存疑。",
    impact: "難以取得後續大規模船塢重建之獨家議價權。",
    solution: "導入 3D BIM 數位履歷與連續感測器數據，用科學證據證明工程耐久度。",
    icon: "FileClock",
    color: "text-rose-400"
  },
  {
    title: "採購規格僵化",
    status: "既有海軍庫房與廠房標案規格已被鎖定，未列入低碳與數位項目。",
    impact: "只能在既有低利潤預算內投標，面臨外部甲級營造低價削價競爭。",
    solution: "採取「主標合規＋外掛 Option-in 追加低碳智慧預算」破局。",
    icon: "Lock",
    color: "text-amber-400"
  },
  {
    title: "缺乏數位維運資產",
    status: "傳統施工交差後即結束，無常態化數據連結，無法產生續約價值。",
    impact: "無法延伸到維運期（O&M）之長約監測與高毛利技術服務。",
    solution: "打造 3D 輕量化 Web 平台與三色警報，簽署年度長約維運監測合約。",
    icon: "Cpu",
    color: "text-cyan-400"
  },
  {
    title: "母公司內部角力",
    status: "台船總廠採購部門對預算防守嚴密，習慣貨比三家大幅砍價。",
    impact: "若無董事會層級之 ESG 合規戰略支持，提報之預算極易被刪減。",
    solution: "直攻董事長「IFRS S1/S2 資本支出與未修復停工損失防範」戰略高度。",
    icon: "GitCompare",
    color: "text-purple-400"
  }
];

export const PARTNERS: PartnerInfo[] = [
  {
    name: "台船防蝕（台蝕） ＋ 台船營造（台營）",
    shortName: "台蝕 / 台營",
    role: "現場施作主體與工程總包",
    gradient: "from-cyan-500 to-blue-600",
    iconColor: "text-cyan-400",
    strengths: [
      "現場工程承攬主體與甲級營造資格",
      "數十年港灣水下重防蝕與塗裝專業實績",
      "完全熟悉台船廠區動線、機敏管制與施工工法",
      "水下陽極板安裝與重型結構防護專業工班"
    ],
    responsibilities: [
      "主標承攬與現場施工管理總協調",
      "拆搭鷹架、防蝕防爆特規塗裝施作",
      "水下陽極板安裝與實體結構補強工程",
      "感測器耐鹽霧航海級包覆與實體鋪設"
    ]
  },
  {
    name: "中國科技大學 建築設計院",
    shortName: "中科大",
    role: "BIM 數位模型與結構防災平臺",
    gradient: "from-purple-500 to-indigo-600",
    iconColor: "text-purple-400",
    strengths: [
      "BIM 數位模型建置與管線檢討權威",
      "台中多座智慧社會住宅維運監測實績",
      "土木與港灣結構防災演算法研發力",
      "免裝 App 輕量化 3D Web 平臺專利"
    ],
    responsibilities: [
      "船塢/庫房/廠房 3D BIM 高精度數位建模",
      "結構監測 Sensor 點位最優化部署配置",
      "即時自動化三色預警平台與閾值演算法",
      "巡檢工單連動與行動端 3D 可視化系統"
    ]
  },
  {
    name: "中華民國環境管理會計協會",
    shortName: "環會協會",
    role: "金管會 IFRS S1/S2 與永續財務治理",
    gradient: "from-emerald-500 to-teal-600",
    iconColor: "text-emerald-400",
    strengths: [
      "金管會 IFRS S1/S2 指南制定與諮詢專家",
      "ISO 14064 碳盤查 / ISO 14067 碳足跡主導查驗實務",
      "重大資本支出（CAPEX）財務模型精算",
      "氣候實體與轉型風險損失情境精算專家"
    ],
    responsibilities: [
      "全生命週期隱含碳試算與碳帳本架構",
      "氣候實體風險（暴潮/海水位）財務量化底稿",
      "對接台船永續年報與四大會計師審計確信",
      "董事會層級提案戰略包裝與合規立案"
    ]
  }
];

export const ENGINEERING_TARGETS: EngineeringTarget[] = [
  {
    id: "large-dock",
    title: "工程標的一：大船塢數位雙生與沉陷預警系統",
    subtitle: "長 950m × 寬 92m 亞洲指標型船塢 / 使用已逾 50 年",
    accentColor: "from-cyan-500 to-blue-600",
    glowColor: "rgba(6, 182, 212, 0.4)",
    specs: [
      { label: "規格尺寸", value: "長 950m × 寬 92m" },
      { label: "使用年限", value: "已逾 50 年（設計年限超期）" },
      { label: "未處理段", value: "401 ~ 950m 塢壁未防滲" },
      { label: "主要危機", value: "碼頭段路面局部下陷、碰撞掏空風險" }
    ],
    painPoints: [
      "造船與修船排程極度緊湊，無法預判何時會發生結構崩落",
      "不知道何時該停塢搶修，一次意外停塢將造成數千萬鉅額延誤賠償",
      "新造超大型貨輪長度達極限，進塢碰撞與剪力風險激增"
    ],
    solutions: [
      {
        title: "BIM 3D 結構分段建模",
        description: "將 950m 巨型船塢分段建立數位雙生模型，精確標註歷年裂縫、滲漏點與修補履歷。",
        benefit: "跨部門直觀可視化管理，精準掌握排程安全餘裕。"
      },
      {
        title: "沉陷與裂縫連續自動監測",
        description: "於碼頭下陷側配置光纖傾斜儀與高精度沉陷計，塢壁加裝微米級動態位移計。",
        benefit: "提早 3 ~ 6 個月預警地基掏空與剪力破壞風險。"
      },
      {
        title: "台蝕智能工程整合包裝",
        description: "將「感測器安裝 ＋ 導線耐鹽蝕包覆 ＋ 結構補強施工」打包為高價值工程標案。",
        benefit: "台蝕取得高毛利獨家智能施作合約，擺脫純工班地位。"
      }
    ],
    sensorTypes: [
      { name: "光纖傾斜儀 (Fiber Tiltmeter)", location: "碼頭下陷側頂板", purpose: "連續量測碼頭微小傾斜與地基沉降", alertThreshold: "傾斜角 > 0.05°" },
      { name: "微米級位移計 (Displacement Sensor)", location: "401-950m 塢壁歷史裂縫", purpose: "即時追蹤裂縫張開寬度與剪力變化", alertThreshold: "張開量 > 0.3 mm" },
      { name: "地下水位計 (Piezometer)", location: "船塢側壁洩水孔周邊", purpose: "監測回填土層地下水背壓與滲透壓", alertThreshold: "水壓急劇上升 > 15%" }
    ],
    csbsRole: "台蝕負責耐鹽防護包覆施工與感測器鋪設，台營執行結構灌漿與地基固化。"
  },
  {
    id: "small-dock",
    title: "工程標的二：小船塢抗海水腐蝕與碰撞劣化監控",
    subtitle: "長 275m × 寬 45m 修船主力塢 / 使用逾 30 年",
    accentColor: "from-amber-500 to-rose-600",
    glowColor: "rgba(245, 158, 11, 0.4)",
    specs: [
      { label: "規格尺寸", value: "長 275m × 寬 45m" },
      { label: "使用年限", value: "逾 30 年" },
      { label: "關鍵死穴", value: "8米以下深水塢壁/地面長年浸泡未處理" },
      { label: "惡性循環", value: "修船頻繁靠泊「修了又撞、壞了再拆」" }
    ],
    painPoints: [
      "過去施工瑕疵致地下水與海水常年入滲，混泥土結構脆化",
      "8 米以下深水區鋼筋長期鏽蝕膨脹，保護層反覆剝落崩塌",
      "進出塢週期短暫高壓，現場班長欠缺科學數據證明結構安全，出事面臨扛責風險"
    ],
    solutions: [
      {
        title: "微震動與應變監測（Strain & Vibration）",
        description: "在船舶頻繁靠泊關鍵塢壁區段加裝動態應變片，偵測靠泊衝擊力道，建立「衝擊應力-疲勞衰減模型」。",
        benefit: "量化每次靠泊衝擊對混凝土之累計疲勞損耗。"
      },
      {
        title: "鹽害腐蝕電位即時偵測",
        description: "配合水下防蝕技術，在 8 米以下常時浸水處預埋鋼筋腐蝕電位 Sensor，掌握混凝土內部鋼筋活性。",
        benefit: "在鋼筋鏽蝕膨脹前提早 1~2 年預警，免於大面積敲除。"
      },
      {
        title: "班長科學免責話術支持",
        description: "將數據化儀表板交由現場班長，以客觀量測數據向上爭取精準預防性維修預算。",
        benefit: "解除班長心理負擔，建立現場對數位系統的強大依賴。"
      }
    ],
    sensorTypes: [
      { name: "動態應變片 (Dynamic Strain Gauge)", location: "小塢靠泊防舷材後方塢壁", purpose: "瞬間捕捉船舶進塢碰撞衝擊波與剪應力", alertThreshold: "應變值 > 350 με" },
      { name: "鋼筋腐蝕電位計 (Half-cell Sensor)", location: "8 米以下常時浸水處預埋", purpose: "量測氯離子滲透後鋼筋表面鈍化膜電位", alertThreshold: "電位 < -350 mV (CSE)" },
      { name: "氯離子擴散感測器", location: "深水區混凝土保護層", purpose: "追蹤海水鹽分在混凝土中的擴散深度", alertThreshold: "滲透深度達保護層 70%" }
    ],
    csbsRole: "台蝕發揮水下重防蝕特長，施工預埋電位感測器與塗裝耐蝕防護層。"
  },
  {
    id: "navy-warehouse",
    title: "工程標的三：海軍新增庫房與改建廠房的低碳追加策略",
    subtitle: "RC 三層 1,158 坪新增庫房 ＋ 潛船/潛機改建廠房",
    accentColor: "from-emerald-500 to-teal-600",
    glowColor: "rgba(16, 185, 129, 0.4)",
    specs: [
      { label: "新增庫房", value: "RC 3層樓 / 約 1,158 坪（載貨電梯+天車）" },
      { label: "潛船廠房", value: "鐵皮包覆延伸 23 米（15噸天車+防水大門）" },
      { label: "潛機廠房", value: "既有結構補強改建（特規防汛雙開門+LED）" },
      { label: "提案策略", value: "「主標合規、外掛加值、追加低碳預算」" }
    ],
    painPoints: [
      "海軍專案招標規格已鎖定，無法推翻重來，傳統投標利潤極薄",
      "國艦國造對機敏防爆、恆溫恆濕與防潮標準極為嚴苛",
      "既有圖面缺乏管線檢討，易在施工現場引發二次敲除重工浪費"
    ],
    solutions: [
      {
        title: "新增庫房：屋頂智慧能管＋太陽能載重預留",
        description: "導入 BIM 檢討管線碰撞消除重工，規劃溫濕度分區智慧調控，符合海軍機敏防潮節能標準。",
        benefit: "爭取海軍戰備預備金或節能追加款，提升專案利潤率。"
      },
      {
        title: "潛船改建：抗鹽低碳浪板＋高反照率隔熱塗料",
        description: "台蝕專利隔熱耐鹽塗裝，結合自然進氣與氣流流場模擬（CFD），大幅降低夏季空調降溫能耗。",
        benefit: "台蝕核心塗料產品直接切入追加項目，毛利提高 30% 以上。"
      },
      {
        title: "潛機改建：BIM 施工路徑模擬＋智慧迴路鉤表",
        description: "BIM 結構補強施工路徑最佳化模擬，配置智慧分區電表，即時串接碳排數據到碳帳本。",
        benefit: "直接產出符合 ISO 14064 之施工碳盤查數據。"
      }
    ],
    sensorTypes: [
      { name: "多溫濕度分區 Sensor", location: "海軍機敏設備庫房各分區", purpose: "即時回饋並連動除濕降溫空調", alertThreshold: "濕度 > 60% RH 或 溫度 > 26°C" },
      { name: "分區智慧迴路鉤表", location: "各配電箱進線與分路", purpose: "連續紀錄空調、天車、動力耗電量", alertThreshold: "瞬時超載 > 90% 額定容量" },
      { name: "氣流風速感測器", location: "廠房頂部通風球與進氣百葉", purpose: "驗證自然通風與熱對流效率", alertThreshold: "換氣次數不足 < 5 ACH" }
    ],
    csbsRole: "台蝕承攬低碳防蝕浪板與隔熱塗料，台營負責 RC 主體與鋼結構補強。"
  },
  {
    id: "wharf-cathodic",
    title: "工程標的四：台船碼頭水下板樁防蝕與安全延壽",
    subtitle: "1 ~ 4 號碼頭（使用 24 ~ 44 年）/ 承載 30~80 噸重型吊車與潛艦靠泊",
    accentColor: "from-digital-500 to-indigo-600",
    glowColor: "rgba(139, 92, 246, 0.4)",
    specs: [
      { label: "碼頭腹地", value: "1 ~ 4 號碼頭（民國 60~80 年代建置）" },
      { label: "承載負重", value: "30 ~ 80 噸重型門式/懸臂吊車移動作業" },
      { label: "歷史進度", value: "113 年已完成 2~4 號鋁合金陽極安裝" },
      { label: "待完工程", value: "1 號碼頭（鄰近小塢）與 3 號碼頭（鄰近大塢）防護" }
    ],
    painPoints: [
      "鋼板樁長期處於海水潮位交替區與全浸區，腐蝕穿孔隱患嚴重",
      "重型吊車頻繁移動，若基底板樁發生剪力破壞或沉陷，將導致吊車翻覆重大災難",
      "傳統人工潛水電位量測間隔過長（半年一次），無法捕捉極端暴潮期間的腐蝕急遽劣化"
    ],
    solutions: [
      {
        title: "水下陽極電位連續自動監測",
        description: "將傳統半年一次之潛水量測，升級為水下連續自動電位節點，數據即時連線回傳 BIM 港灣模型。",
        benefit: "24 小時監控陰極保護效率，提早預判陽極消耗速度。"
      },
      {
        title: "碼頭結構重工防護與沉陷排查",
        description: "針對 1 號碼頭（鄰近小塢）與 3 號碼頭（鄰近大塢）進行結構沉陷排查，避免重型吊車引發剪力破壞。",
        benefit: "保障 80 噸巨型吊車作業安全，符合港灣特種安全檢查標準。"
      },
      {
        title: "台蝕＋台營黃金承攬組合",
        description: "台蝕承攬水下陽極材料、水下防蝕塗裝與感測節點；台營承攬路面補強與吊車軌道基礎修復。",
        benefit: "三方通吃，將原本零散之小型修繕整合成千萬級長約包案。"
      }
    ],
    sensorTypes: [
      { name: "水下參比電極 (Ag/AgCl Reference Electrode)", location: "1~4號碼頭水下鋼板樁表面", purpose: "連續量測鋼結構水下陰極保護電位", alertThreshold: "保護電位未達 -800 mV (Ag/AgCl)" },
      { name: "光纖沉陷量測儀", location: "80噸吊車鋼軌基礎下方", purpose: "監測重載吊車行駛時之瞬時彈性沉陷與殘餘下陷", alertThreshold: "單次殘餘下陷 > 1.5 mm" },
      { name: "超音波水下鋼板厚度計", location: "潮位交替區板樁", purpose: "非破壞性量測鋼板腐蝕殘餘厚度", alertThreshold: "壁厚減少 > 20%" }
    ],
    csbsRole: "台蝕發揮水下防蝕陽極板核心專業，台營負責軌道地基結構工程。"
  }
];

export const MICROGRID_DATA = {
  title: "綠能微電網解方：平戰轉換與儲能安全破局",
  subtitle: "非紅色供應鏈 ＋ UL9540A 認證 ＋ 72 小時連續戰時孤島運作",
  clientDilemma: "陳經理會議反饋：大陸寧德時代儲能性價比雖高，但台船受國防涉密限制絕對無法採用；臺灣在地儲能整合成本高，該如何解決庫房與船塢的太陽能儲能配套？",
  solutions: [
    {
      title: "國防國安非紅色供應鏈（100% 合規）",
      desc: "採用通過 UL9540A 國際最嚴防火認證之非中資磷酸鐵鋰（LFP）電芯，或台泥儲能（NHOA）/長園科等臺灣在地製造高安全性電池組，符合海軍涉密廠區資安防護規範。",
      security: "BMS 電池管理系統與逆變器全面採用臺灣與美日系通訊協定，嚴禁任何遠端雲端回傳大陸伺服器疑慮。"
    },
    {
      title: "平時模式（節能減碳＆削峰填谷）",
      desc: "庫房與廠房屋頂太陽光電（PV）自發自用，利用離峰電價充電、尖峰用電時段放電，大幅降低台船高昂契約容量超約罰款與夏季尖峰電費。",
      roi: "每年可為台船節省百萬級電力成本，直接列入 ESG 範疇二減碳實績。"
    },
    {
      title: "戰時模式（72小時緊急孤島運轉 Island Mode）",
      desc: "當外部電網遭破壞或中斷時，微電網系統在 20 毫秒內瞬間切換為孤島運轉模式，優先供應潛艦基地關鍵排風、防爆通風系統及船塢大型排水泵浦。",
      capacity: "確保國艦國造機敏基地連續 72 小時以上不間斷運作，展現國安級戰備韌性。"
    }
  ]
};

export const BIM_PLATFORM_FEATURES = [
  {
    title: "3D 輕量化 Web 端平臺",
    badge: "免裝專業 App / 手機平板即開",
    desc: "免安裝昂貴且笨重之專業 CAD 軟體，台船高層、工務蕭課長與現場班長，只需使用平板或手機瀏覽器即可 360 度旋轉檢視 950m 船塢、管線及結構狀況。",
    benefit: "徹底打破部門數位鴻溝，溝通效率提升 80% 以上。",
    icon: "Boxes",
    color: "from-cyan-500 to-blue-500"
  },
  {
    title: "自動化三色即時警報演算法",
    badge: "化被動巡檢為主動防災",
    desc: "整合現場位移、傾斜、震動、腐蝕電位 Sensor 數據：\n● 綠燈（正常值）：系統平穩\n● 黃燈（初級預警）：通知班長巡檢複查\n● 紅燈（超標警報）：LINE / Email 瞬時連動工安處與決策層。",
    benefit: "大幅降低重大工安崩塌事故機率，提供事前預警防護。",
    icon: "BellRing",
    color: "from-amber-500 to-rose-500"
  },
  {
    title: "數位維運工單與保固履歷",
    badge: "台蝕修繕有憑有據 / 長約保障",
    desc: "巡檢人員現場拍照回傳裂縫位置，系統自動在 3D BIM 模型精準建立修繕點位與歷史保固履歷，材料型號、塗料批號、施工日期一目了然。",
    benefit: "累積台船完整港灣固定資產數位資產，奠定台蝕每年續約維運基礎。",
    icon: "ClipboardCheck",
    color: "from-emerald-500 to-teal-500"
  }
];

export const ESG_IFRS_DATA = [
  {
    title: "對接 IFRS S2 氣候實體風險（Physical Risks）",
    standard: "IFRS S2 / TCFD 氣候相關財務揭露",
    requirements: "國際準則強制要求揭露：極端暴潮、海平面上升對廠區港灣資產的潛在財務衝擊（資產減損量化）。",
    cemaOutput: "協會將船塢感測器的「沉陷率」與「耐蝕年限」，轉化為標準情境分析（Scenario Analysis），量化精算為「未修復預期停工損失」，為台船爭取提列資本支出（CAPEX）正當性。",
    valueProp: "將工程修繕費用轉化為避免數億元停工損失的 ESG 風險防護投資。"
  },
  {
    title: "對接 IFRS S1 營運韌性與工安管理",
    standard: "IFRS S1 / SASB 運輸設備與重工業標準（RT-IG / RT-AE）",
    requirements: "船塢深水作業環境屬於重大工安風險項目，金管會要求揭露職安韌性與內控措施。",
    cemaOutput: "協會將 BIM 3D 安全淨空模擬、管線碰撞消除與現場三色預警機制，編製為合規之「職業安全衛生內部控制底稿」，直接送交台船董事會永續發展委員會。",
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
      "低碳抗鹽水泥 vs. 傳統波特蘭水泥比選",
      "循環鋁合金浪板 vs. 一般鐵皮耐蝕性與碳足跡比對"
    ],
    carbonOutputs: [
      "材料隱含碳試算表（Embodied Carbon Breakdown）",
      "材料更換減碳百分比報告（預計減碳 18~35%）",
      "符合 ISO 14067 產品碳足跡先期宣告資料"
    ],
    isoStandard: "ISO 14067 / PAS 2050",
    reductionTech: ["低碳高爐抗鹽水下混凝土", "高反照率隔熱防蝕塗層", "可回收結構鋼材"]
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
      "施工期動態碳排即時監控儀表板"
    ],
    isoStandard: "ISO 14064-1:2018",
    reductionTech: ["電動化施工機具", "運輸動線最佳化", "BIM 施工排程消除怠速"]
  },
  {
    stage: "階段三",
    title: "營運維護端（連續減碳與永續年報）",
    color: "text-purple-400",
    dataInputs: [
      "分區智慧電表即時功率與用電度數",
      "屋頂太陽光電微電網發電量與儲能充放電數據",
      "通風球與節能門禁系統實時節電量"
    ],
    carbonOutputs: [
      "每年自動產出節電效益與範疇二減碳確信憑據",
      "台船年度永續報告書（ESG Report）港灣工程專章",
      "長約維運數據碳權抵換潛力分析"
    ],
    isoStandard: "GRI 302 / GRI 305 / IFRS S2",
    reductionTech: ["微電網削峰填谷", "智慧分區溫濕度聯動", "預防性維護避免大修耗能"]
  }
];

export const QUANTIFIED_ROI = [
  {
    metric: "30 ~ 50%",
    label: "非預期停工損失降低",
    desc: "沉陷與壁裂提早 3~6 個月預警，避免修造船進塢時發生船舶擱淺或重大崩塌停工損失。",
    color: "from-cyan-400 to-blue-500",
    glow: "shadow-glow-ocean"
  },
  {
    metric: "15 ~ 25%",
    label: "新建工程重工拆改浪費減少",
    desc: "海軍庫房/廠房先經 BIM 3D 管線碰撞檢討，在虛擬空間消除設計衝突，杜絕現場二次施工敲除。",
    color: "from-emerald-400 to-teal-500",
    glow: "shadow-glow-esg"
  },
  {
    metric: "100%",
    label: "金管會 IFRS S1/S2 審計合規",
    desc: "資本支出與氣候風險量化直接對接四大會計師確信標準，大幅提升台船國際航運與綠能融資信用評等。",
    color: "from-purple-400 to-pink-500",
    glow: "shadow-glow-digital"
  },
  {
    metric: "無形資產",
    label: "國安級軍工數位防護商譽",
    desc: "向國防部海軍展現台船不僅能「造艦」，更能建造具備「國安級數位安全防護」的頂尖戰備基地。",
    color: "from-amber-400 to-rose-500",
    glow: "shadow-glow-sun"
  }
];

export const STAKEHOLDER_PERSONAS: StakeholderPersona[] = [
  {
    id: "tsai",
    title: "蔡董事長 / 董事會與永續委員會",
    roleDescription: "關注上市公司品牌聲譽、ESG 治理評鑑、重大資本支出回報與金管會法規接軌",
    avatarIcon: "Crown",
    color: "from-amber-500 to-orange-600",
    coreConcerns: [
      "上市公司形象與 ESG 評鑑排名",
      "金管會強制接軌 IFRS S1/S2 期限與會計師確信",
      "重大投資風險控制，避免龐大修繕費被股東質疑為浪費",
      "國際綠色航運與離岸風電客戶的永續信用"
    ],
    pitchHook: "「引進這套方案，能將老舊船塢修繕轉化為具代表性的 IFRS S1/S2 示範案例，為台船爭取國際綠色航運與離岸風電更大投標信任。」",
    persuasiveDetails: [
      "不是花錢修補，而是建立可列入固定資產的數位雙生韌性資產。",
      "將未修復停工損失精算為具體財務數字，向董事會提交合規立案依據。",
      "打造國艦國造非紅綠能戰備微電網，提升國防部與外資評級信心。"
    ],
    counterFears: "免除董事會對「修繕耐久度存疑」之顧慮，以連續數據與第三方法人確信背書。"
  },
  {
    id: "hsiao",
    title: "蕭課長 / 採購與工務工管部門",
    roleDescription: "關注工程合約規範、預算合理性、施工期程是否延宕、驗收與責任介面釐清",
    avatarIcon: "Briefcase",
    color: "from-cyan-500 to-blue-600",
    coreConcerns: [
      "預算是否超支、能否拆分模組編列",
      "BIM 檢討是否會耽誤既有工期",
      "施工責任介面是否清楚，驗收時是否有標準依據",
      "採購比價流程是否合法合規"
    ],
    pitchHook: "「透過 BIM 先期檢討，減少現場變更設計；模組化報價可拆分至各期工程編列，不增加採購核銷困擾。」",
    persuasiveDetails: [
      "BIM 虛擬碰撞在施工前解決 90% 管線衝突，避免現場工期延誤。",
      "模組化計價（建模 NT$ 300/m²、Sensor NT$ 600/點），費用透明可查。",
      "軟硬體分拆合約包容，滿足採購單位比價與核銷程序。"
    ],
    counterFears: "消除工務部門對「新型數位工程難以驗收」的恐懼，提供明確檢驗規格表。"
  },
  {
    id: "foreman",
    title: "船塢 / 碼頭現場施工班長與工安人員",
    roleDescription: "關注前線人身安全、修船排程會不會被卡死、系統會不會增加日常繁瑣文書負擔",
    avatarIcon: "HardHat",
    color: "from-emerald-500 to-teal-600",
    coreConcerns: [
      "現場弟兄進塢施工會不會有混凝土崩塌危險",
      "系統會不會要求班長每天手動填表抄數據（增加工作負擔）",
      "出事時會不會被上面怪罪扛責任（揹黑鍋）",
      "感測器耐不耐用，會不會動不動就壞掉誤報"
    ],
    pitchHook: "「感測器全自動回傳，不用班長天天人工巡檢抄表；紅黃燈提早預警，保護現場弟兄不會遭遇崩落危險。」",
    persuasiveDetails: [
      "全自動無線回傳，手機平板即時可看，免去每日紙本抄表繁瑣手續。",
      "黃燈通知預警巡檢，紅燈直接連線工安處，用科學數據證明結構狀態，不用班長扛責！",
      "採用 IP68 / NEMA 4X 航海級耐蝕外殼與自我診斷線路，惡劣鹽霧環境下穩定運作 3 年以上。"
    ],
    counterFears: "讓班長感到數位系統是「保護自己免於揹鍋與工安意外的神器」，化被動排斥為主動支持。"
  }
];

export const CONTRACT_PRICING_MODULES = [
  {
    module: "BIM 數位建模與碰撞檢討服務",
    unit: "依總樓地板面積計價",
    price: "約 NT$ 300 / m²",
    scope: "3D BIM 幾何模型建立、機電與結構管線衝突碰撞檢討、輕量化 Web 轉碼與 3D 視角配置。",
    benefit: "消除現場施工二次敲除浪費，平均節省 15~25% 重工成本。"
  },
  {
    module: "建築自動化與防災監測節點（Sensor 點位）",
    unit: "依監控點位計價",
    price: "約 NT$ 600 / 點（含硬體/通訊）",
    scope: "光纖傾斜儀、動態應變片、腐蝕電位感測器鋪設、航海級防蝕保護外殼、通訊節點配置與三色警報演算法對接。",
    benefit: "提早 3~6 個月捕捉掏空與剪力破壞，避免千萬級停工事故。"
  },
  {
    module: "ESG 碳盤查與 IFRS 合規底稿顧問",
    unit: "依專案顧問範疇定額提撥",
    price: "專案客製化顧問費",
    scope: "材料隱含碳試算、ISO 14064 範疇一/二盤查清冊、IFRS S1/S2 氣候實體與轉型風險損失情境精算、永續報告書專章輸出。",
    benefit: "為台船重大資本支出（CAPEX）取得會計師確信與董事會通過支持。"
  }
];

export const ROADMAP_PHASES: RoadmapPhase[] = [
  {
    phase: "第一階段（1 ~ 2 個月）",
    duration: "需求確立與現場踏勘",
    title: "陳經理拜訪各單位，收集船塢歷史圖資、現場踏勘裂縫與下陷點、建立關鍵利害關係人小組",
    badgeColor: "bg-cyan-500/20 text-cyan-400 border-cyan-500/40",
    keyActions: [
      "陳經理拜訪蔡董事長、蕭課長與現場班長，彙整第一線真實需求",
      "收集 950m 大塢、小塢與 1~4 號碼頭歷年圖資與修補紀錄",
      "中科大與協會專家現場踏勘，標定第一批下陷掏空與海水滲漏關鍵點位"
    ],
    deliverables: [
      "《台船船塢與庫房需求分析綜合報告》確認",
      "標的工程 BIM 建模先期規格書",
      "三方產學合作意向書與分工權責架構"
    ]
  },
  {
    phase: "第二階段（3 ~ 6 個月）",
    duration: "BIM 建模與先導試點",
    title: "完成庫房 BIM 碰撞檢討；在小塢 8 米以下破損處先導安裝第一批應變與位移監測節點",
    badgeColor: "bg-purple-500/20 text-purple-400 border-purple-500/40",
    keyActions: [
      "完成海軍新增庫房 3D BIM 建模與管線虛擬碰撞消除",
      "於小塢 8 米以下常時浸水區先導安裝應變片與腐蝕電位 Sensor",
      "中科大輕量化 3D Web 監控平臺測試上線，實測紅黃燈警報機制"
    ],
    deliverables: [
      "輕量化 Web 監控平臺實機上線",
      "首波紅黃燈警報與現場班長實測回饋報告",
      "海軍庫房 Option-in 低碳加值追加預算計畫書"
    ]
  },
  {
    phase: "第三階段（7 ~ 12 個月）",
    duration: "全面施作與電網對接",
    title: "大塢及碼頭下陷側 Sensor 全面布設；台蝕執行結構防蝕與補強；庫房太陽能微電網架構建立",
    badgeColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
    keyActions: [
      "950m 大塢及碼頭下陷側光纖傾斜儀、沉陷計與位移計全面布設",
      "台蝕與台營執行結構高抗鹽注漿補強與水下陽極板安裝",
      "建立海軍庫房屋頂太陽光電與非中資 LFP 儲能微電網平戰切換系統"
    ],
    deliverables: [
      "台蝕取得重大修繕完工款與追加工程款",
      "全廠區 BIM 港灣數位雙生監測系統正式商轉",
      "72 小時微電網戰時孤島切換演練驗收合格"
    ]
  },
  {
    phase: "第四階段（持續維運）",
    duration: "ESG 報告與長期維護",
    title: "數據定期彙整為碳帳本與設施韌性報告，送交台船董事會及年度 ESG 報告專章",
    badgeColor: "bg-amber-500/20 text-amber-400 border-amber-500/40",
    keyActions: [
      "連續監控數據自動產出 ISO 14064 碳盤查與 IFRS S2 韌性報告",
      "協助台船永續發展委員會完成年度 ESG 報告書港灣專章編製",
      "提供定期系統維護、Sensor 校正與結構安全年度體檢"
    ],
    deliverables: [
      "台蝕鎖定年度長期數位維運監測服務合約（O&M 長約）",
      "台船取得四大會計師事務所 IFRS S1/S2 審計確信",
      "成為台灣第一座智慧綠色港灣示範標竿"
    ]
  }
];

export const RISK_QNA: QAItem[] = [
  {
    question: "海軍庫房招標已確定，採購真的願意追加預算嗎？",
    category: "招標與預算",
    answer: "海軍專案對機敏設備安全與防潮極為敏感。追加「智慧分區溫控」與「綠能戰備微電網」可從「國防戰備韌性」與「防潮防爆保全」出發，而非單純改裝潢，極易獲得軍方單位同意動支預備金或追加國防特別預算。",
    highlight: "從「國防戰備韌性」切入，合法動支預備金，擺脫傳統裝潢追加比價限制。"
  },
  {
    question: "感測器裝在嚴苛的鹽霧水下環境，會不會很快故障失效？",
    category: "技術與耐久性",
    answer: "所有 Sensor 皆採用 IP68 / NEMA 4X 航海級耐蝕防護外殼，搭配台蝕專利之水下重防蝕包覆工法，並設有自體診斷（Health Check）線路，能即時排除誤報，確保在嚴苛海洋鹽霧環境下連續穩定運作 3 年以上。",
    highlight: "IP68 / NEMA 4X 航海級規格 ＋ 台蝕專利水下包覆 ＋ 自我診斷線路。"
  },
  {
    question: "台船若依然堅持傳統比價打折，該如何應對？",
    category: "商務與議價",
    answer: "具備彈性應變方案：可採取「實體硬體工程按市場行情配合打折，但軟體監控平台、BIM 數位模型與 ESG 碳帳本報告以專案技術服務費包裹」之策略，既滿足採購部門打折績效，又能保證台蝕專案整體高毛利回報。",
    highlight: "硬體打折滿足採購績效，軟體與 ESG 諮詢包裹守住高毛利空間。"
  }
];

export const ACTION_STEPS: ActionStep[] = [
  {
    step: 1,
    timeframe: "1 週內",
    title: "完成陳經理需求報告整合",
    owner: "台蝕 陳經理 × 聯合團隊",
    description: "請陳經理依拜訪蔡董事長、蕭課長與現場班長後之第一線資訊，提供重點需求清單，將本簡報內容進行精準客製化對齊。",
    deliverable: "《台船客製化需求對齊備忘錄》"
  },
  {
    step: 2,
    timeframe: "2 週內",
    title: "召開台蝕高層閉門戰略演練會議",
    owner: "環會協會（沈華榮、郭開文、朱哲廷） × 中科大團隊 × 台蝕高層",
    description: "由環會協會及中國科技大學團隊親赴台蝕，實機演示 3D BIM 平台並進行面對台船高層的提案簡報推演。",
    deliverable: "實機 3D 模擬演示與正式提報簡報 Final 定稿"
  },
  {
    step: 3,
    timeframe: "1 個月內",
    title: "向台船董事長與工務單位正式提報",
    owner: "台蝕 / 台營 / 中科大 / 環會協會 聯合出席",
    description: "以「台船港灣資產延壽與 IFRS S1/S2 韌性升級方案」為名正式提報，共同敲定首批示範案（小塢先導監測＋新庫房智慧加值）。",
    deliverable: "簽署首批示範案合約，啟動實體工程與數位建模"
  }
];
