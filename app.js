const modules = {
  "railway-systems": {
    title: "Railway Systems｜鐵道系統",
    term: "Systems Overview｜系統總覽",
  },
  turnout: {
    title: "Turnout / Points｜道岔",
    term: "Infrastructure｜基礎設施",
  },
  learning: {
    title: "Learning Map｜學習地圖",
    term: "Recommended Path｜建議學習路徑",
  },
  layout: {
    title: "System Map｜系統地圖",
    term: "Equipment Layout｜設備配置",
  },
  scenario: {
    title: "Scenario Mode｜案例模式",
    term: "Point Detection Failure｜道岔不到位",
  },
  blocks: {
    title: "Block System｜閉塞系統",
    term: "Fixed Block Model｜固定閉塞示意",
  },
  interlocking: {
    title: "Interlocking｜聯鎖系統",
    term: "Route Setting｜進路建立",
  },
  point: {
    title: "Point Machine｜轉轍器",
    term: "Point Position｜道岔位置",
  },
  detection: {
    title: "Train Detection｜列車偵測",
    term: "Occupancy State｜佔用狀態",
  },
  atp: {
    title: "Automatic Train Protection (ATP)｜列車自動防護",
    term: "Speed Supervision｜速度監督",
  },
  ats: {
    title: "Automatic Train Supervision (ATS)｜列車自動監督",
    term: "Train Supervision｜列車監督",
  },
  ctc: {
    title: "Centralized Traffic Control (CTC)｜中央行車控制",
    term: "Dispatch Control｜調度控制",
  },
  alarm: {
    title: "Alarm & Maintenance｜告警與維護",
    term: "Maintenance Focus｜維護重點",
  },
  commissioning: {
    title: "Testing and Commissioning｜測試與試運轉",
    term: "Delivery Flow｜交付流程",
  },
  crossing: {
    title: "Level Crossing Protection｜平交道保護",
    term: "Protection Sequence｜保護序列",
  },
  etcs: {
    title: "ETCS / ERTMS｜列車控制",
    term: "Movement Authority｜行車授權",
  },
};

const knowledgeNotes = {
  "railway-systems": {
    title: "Railway Systems｜鐵道系統",
    cards: [
      {
        zh: "主要入口",
        en: "Main Entry",
        points: [
          "這一層先把 handbook 中的六大系統放在同一個入口下。",
          "目標是先建立系統邊界，再決定後續每一支要不要做成獨立模組。",
          "目前先以總覽卡片呈現，後續再逐步補詳細內容頁。 ",
        ],
      },
      {
        zh: "六大系統",
        en: "Six Domains",
        points: [
          "Infrastructure 對應軌道、車站、土建與機廠等現場空間。",
          "Rolling Stock、Power Supply、Communication、Signalling、Operations Control 構成主要工程分工。",
          "這些卡片是後續擴充 handbook 內容的基礎骨架。",
        ],
      },
      {
        zh: "擴充方式",
        en: "Expansion Path",
        points: [
          "每張卡先保留 Coming Soon，避免現在就把細節塞太滿。",
          "未來可以依 handbook 章節，逐張補名詞、設備、文件與案例。",
          "Signalling 和 Operations Control 已有既有模組，可作為優先延伸對象。",
        ],
      },
    ],
  },
  turnout: {
    title: "Turnout / Points｜道岔",
    cards: [
      {
        zh: "分歧結構",
        en: "Branching Structure",
        points: [
          "道岔是軌道系統中的分歧結構，使列車能夠從一條軌道轉入另一條軌道。",
          "它屬於基礎設施的一部分。",
          "本頁只先建立結構定位，驅動與鎖定設備另外放在 Point Machine。",
        ],
      },
      {
        zh: "基礎設施",
        en: "Infrastructure",
        points: [
          "它是軌道本體的一部分，與路線配置、股道分配與車站布置直接相關。",
          "列車走直向或分歧股道，先取決於道岔幾何與鋪設位置。",
          "這層概念和號誌控制設備要分開理解。",
        ],
      },
      {
        zh: "與號誌分工",
        en: "Boundary with Signalling",
        points: [
          "Turnout / Points 指的是軌道本體與分歧構造。",
          "Point Machine 指的是驅動、鎖定與位置偵測設備。",
          "拆開後更容易理解 Infrastructure 與 Signalling 的責任邊界。",
        ],
      },
    ],
  },
  learning: {
    title: "Learning Map｜學習地圖",
    cards: [
      {
        zh: "作品敘事",
        en: "Portfolio Story",
        points: [
          "用 handbook 的架構建立學習順序，而不是把名詞零散堆在頁面上。",
          "先從鐵道專案總覽進入，再聚焦到號誌系統與測試驗收。",
          "面試展示時可說明你如何把工作現場看過的內容轉成可學習模型。",
        ],
      },
      {
        zh: "核心路線",
        en: "Core Path",
        points: [
          "系統總覽：先知道設備在軌旁、車站、控制中心或車上。",
          "號誌核心：列車偵測、轉轍器、聯鎖、閉塞構成安全邏輯。",
          "專案交付：告警維護、測試驗收與案例模式把知識接回實務。",
        ],
      },
      {
        zh: "下一層擴充",
        en: "Next Layer",
        points: [
          "Document Map 可承接 SRS、ICD、FD、Test Procedure。",
          "Testing Flow 可細分 FAT、SAT、SIT、Trial Run、Handover。",
          "Glossary 可把 handbook 中英文名詞變成可搜尋工具。",
        ],
      },
    ],
  },
  blocks: {
    title: "Block System｜閉塞系統",
    cards: [
      {
        zh: "閉塞區間",
        en: "Block Section",
        points: [
          "閉塞系統將鐵路劃分為多個可管理的區段，並利用列車偵測、號誌與行車規則維持安全列車間隔。",
          "本頁採用簡化的固定閉塞（Fixed Block）示意模型，用於說明閉塞系統的基本概念。",
          "實際鐵路系統會依不同號誌制式、行車規則及控制系統而有所差異。",
        ],
      },
      {
        zh: "三顯示號誌",
        en: "Three-aspect Signal",
        points: [
          "綠燈表示前方條件允許。",
          "黃燈表示下一區間受限，要準備停車或降速。",
          "紅燈表示不可進入受控區間。",
        ],
      },
      {
        zh: "安全距離",
        en: "Separation",
        points: [
          "列車煞車距離長，不能只靠駕駛目視判斷。",
          "閉塞讓系統在列車之間保留安全間隔。",
          "容量、速度與安全都會受到閉塞設計影響。",
        ],
      },
    ],
  },
  interlocking: {
    title: "Interlocking｜聯鎖系統",
    cards: [
      {
        zh: "進路",
        en: "Route",
        points: [
          "進路是列車從起點到終點的一段受控路徑。",
          "建立進路前，系統要確認軌道區段可用。",
          "進路建立後，聯鎖會完成進路鎖定，並控制相關號誌顯示。",
        ],
      },
      {
        zh: "道岔鎖定",
        en: "Point Locking",
        points: [
          "道岔決定列車走直線或轉向。",
          "列車通過前，道岔不能被任意扳動。",
          "聯鎖會確保道岔位置與進路方向一致。",
        ],
      },
      {
        zh: "衝突防護",
        en: "Conflict Protection",
        points: [
          "兩條進路如果會交叉、對向或共用同一區段，就不能同時建立。",
          "聯鎖的核心價值是先拒絕不安全命令。",
          "這也是號誌系統最重要的 fail-safe 思維之一。",
        ],
      },
    ],
  },
  detection: {
    title: "Train Detection｜列車偵測",
    cards: [
      {
        zh: "軌道電路",
        en: "Track Circuit",
        points: [
          "用鋼軌形成電氣回路。",
          "列車輪軸進入時會造成分路，系統判斷佔用。",
          "常用來直接表示某段軌道是否有列車。",
        ],
      },
      {
        zh: "計軸器",
        en: "Axle Counter",
        points: [
          "在區間入口與出口計算輪軸數。",
          "進入數量與離開數量相同，才判斷區間清空。",
          "設備位置通常在區間邊界，而不是整段軌道內。",
        ],
      },
      {
        zh: "佔用狀態",
        en: "Occupancy",
        points: [
          "佔用狀態會影響號誌、進路與平交道控制。",
          "偵測失準會直接影響安全，因此系統設計要偏保守。",
          "不確定時通常要視為佔用，而不是空閒。",
        ],
      },
    ],
  },
  point: {
    title: "Point Machine｜轉轍器",
    cards: [
      {
        zh: "轉轍器",
        en: "Point Machine",
        points: [
          "負責驅動道岔尖軌到指定位置。",
          "會回報 Normal 或 Reverse 等位置狀態。",
          "若未到位，聯鎖不得允許建立相關進路。",
        ],
      },
      {
        zh: "位置偵測",
        en: "Point Detection",
        points: [
          "系統要確認道岔位置符合命令。",
          "命令位置與偵測回報不一致時，必須視為不安全。",
          "這類狀態常會在測試與維護時被特別檢查。",
        ],
      },
      {
        zh: "鎖定",
        en: "Point Locking",
        points: [
          "列車通過前，Point Machine 需要證實道岔已被鎖在正確位置。",
          "鎖定可避免列車壓過道岔時位置改變。",
          "聯鎖通常同時檢查位置、鎖定與進路衝突。",
        ],
      },
    ],
  },
  atp: {
    title: "Automatic Train Protection (ATP)｜列車自動防護",
    cards: [
      {
        zh: "速度監督",
        en: "Speed Supervision",
        points: [
          "ATP 持續監督列車的實際速度、允許速度、煞車曲線與可行駛距離。",
          "當列車可能超過安全限制，且駕駛未及時採取動作時，系統會發出警告或介入煞車。",
          "它關心的是列車是否即將突破安全邊界，而不是營運排點本身。",
        ],
      },
      {
        zh: "允許速度",
        en: "Permitted Speed",
        points: [
          "允許速度會受到號誌、進路、曲線、臨時限制影響。",
          "ATP 會比較實際速度與允許速度。",
          "超過限制時，警告與煞車介入會依系統邏輯發生。",
        ],
      },
      {
        zh: "煞車曲線",
        en: "Brake Curve",
        points: [
          "系統不只看當下速度，也會估算列車是否來得及安全減速。",
          "煞車曲線與可行駛距離會影響何時發出警告或介入。",
          "這也是 ATP 與 ATS 在功能定位上的明確分界之一。",
        ],
      },
    ],
  },
  ats: {
    title: "Automatic Train Supervision (ATS)｜列車自動監督",
    cards: [
      {
        zh: "列車監督",
        en: "Train Supervision",
        points: [
          "ATS 用於監督列車位置與運行狀態，並支援時刻表管理、列車追蹤、告警顯示與行車調度。",
          "ATS 著重營運監督，不等同於 ATP 的安全防護功能。",
          "它幫助調度與營運人員理解全線列車的狀態與節奏。",
        ],
      },
      {
        zh: "營運管理",
        en: "Operations Management",
        points: [
          "常見功能包含時刻表管理、列車追蹤與延誤監看。",
          "它可將多站、多列車的運行資訊整理成可操作的監督畫面。",
          "目前頁面先建立分類與定位，後續再補更完整的情境互動。",
        ],
      },
      {
        zh: "後續擴充",
        en: "Coming Soon",
        points: [
          "後續可加入班距監看、時刻表、列車追蹤與告警佇列。",
          "也可再連接 CTC、OCC 或案例模式，形成完整的行車監督鏈。",
          "本頁先完成 ATP / ATS 的分類拆分與功能界線。",
        ],
      },
    ],
  },
  ctc: {
    title: "Centralized Traffic Control (CTC)｜中央行車控制",
    cards: [
      {
        zh: "中央行車控制",
        en: "Centralized Traffic Control",
        points: [
          "CTC（Centralized Traffic Control）提供集中式列車監控與行車調度功能。",
          "調度員可透過 CTC 監看列車位置、設備狀態與進路資訊，並依系統配置遠端下達控制命令。",
          "它把局部號誌狀態提升成全線營運視角，但不是安全聯鎖本身。",
        ],
      },
      {
        zh: "與聯鎖分工",
        en: "Role with Interlocking",
        points: [
          "所有涉及行車安全的控制命令仍需經由 Interlocking（聯鎖系統）進行安全條件檢查。",
          "CTC 負責監控與調度，不直接取代聯鎖的安全功能。",
          "這也是 Dispatcher、CTC、Interlocking 與現場設備之間的基本分工。",
        ],
      },
      {
        zh: "維修封鎖",
        en: "Possession / Blockage",
        points: [
          "維修區段需要從營運路線中隔離。",
          "封鎖狀態應清楚顯示，避免進路設定到不可用區段。",
          "這連結到安全、工務與行控之間的協作。",
        ],
      },
    ],
  },
  alarm: {
    title: "Alarm & Maintenance｜告警與維護",
    cards: [
      {
        zh: "告警",
        en: "Alarm",
        points: [
          "告警把設備異常轉成可被調度或維護人員理解的事件。",
          "重要資訊包含設備名稱、位置、嚴重度與發生時間。",
          "好的告警設計要幫人快速判斷影響範圍。",
        ],
      },
      {
        zh: "降級模式",
        en: "Degraded Mode",
        points: [
          "設備異常時，系統可能進入限制或人工確認模式。",
          "安全優先，所以不確定狀態通常會限制進路或速度。",
          "營運仍可持續，但容量與效率會下降。",
        ],
      },
      {
        zh: "維護處置",
        en: "Maintenance Response",
        points: [
          "先確認告警是否影響行車安全。",
          "再檢查通訊、供電、現場設備與偵測回報。",
          "最後需要復歸、測試與紀錄處置結果。",
        ],
      },
    ],
  },
  commissioning: {
    title: "Testing and Commissioning｜測試與試運轉",
    cards: [
      {
        zh: "測試",
        en: "Testing",
        points: [
          "依照測試程序驗證設備、功能與系統是否符合設計需求。",
          "FAT、SAT、SIT 都屬於 Testing 範圍。",
          "重點是把設備測試、功能測試與系統整合測試做完整記錄。",
        ],
      },
      {
        zh: "試運轉／啟用",
        en: "Commissioning",
        points: [
          "完成設備安裝與整合後，透過試運轉確認系統已具備投入營運的能力。",
          "這一階段更接近實際營運條件，而不只是單點測試。",
          "它連接 Testing 的結果與後續驗收判斷。",
        ],
      },
      {
        zh: "驗收",
        en: "Acceptance",
        points: [
          "由業主依照合約及驗收標準確認工程成果是否符合要求。",
          "驗收關注的不只是功能，也包含證據、標準與契約符合性。",
          "若仍有缺失，通常需回到修正與復測流程。",
        ],
      },
      {
        zh: "交付",
        en: "Handover",
        points: [
          "完成文件、設備、教育訓練及維護資料移交，正式交付業主。",
          "這代表系統從工程實施階段轉入正式管理與維護。",
          "交付完成後，文件與維護責任邊界也要清楚。",
        ],
      },
    ],
  },
  crossing: {
    title: "Level Crossing Protection｜平交道保護",
    cards: [
      {
        zh: "接近偵測",
        en: "Approach Detection",
        points: [
          "平交道保護系統通常利用列車接近資訊或列車偵測設備，依序啟動警鈴、閃光號誌及遮斷桿。",
          "目的在於降低道路使用者與列車衝突的風險。",
          "本頁內容為典型自動平交道概念示意，不代表所有系統皆相同。",
        ],
      },
      {
        zh: "與聯鎖整合",
        en: "Integration with Interlocking",
        points: [
          "部分平交道會與聯鎖系統整合。",
          "只有當平交道已達到安全保護狀態時，相關進路或號誌才允許建立。",
          "這代表道路保護狀態可能直接影響鐵路側的行車條件。",
        ],
      },
      {
        zh: "典型流程",
        en: "Typical Sequence",
        points: [
          "列車接近 -> 啟動警示設備 -> 遮斷桿下降 -> 列車通過 -> 解除警示 -> 遮斷桿升起。",
          "不同國家、不同路線及不同平交道型式，其控制方式可能不同。",
          "實際解除條件也可能依偵測點、區間清空或聯鎖條件而異。",
        ],
      },
    ],
  },
  etcs: {
    title: "ETCS / ERTMS｜列車控制",
    cards: [
      {
        zh: "ETCS",
        en: "European Train Control System",
        points: [
          "ETCS（European Train Control System）是 ERTMS 的核心列車控制系統，用於提供列車保護與行車授權。",
          "Level 1 與 Level 2 的差別，核心在於資訊傳遞方式不同。",
          "兩者都服務於車上保護與行車授權，但地面與車上的分工不同。",
        ],
      },
      {
        zh: "ETCS Level 1",
        en: "ETCS Level 1",
        points: [
          "ETCS Level 1 主要利用 Eurobalise 將地面資訊傳送給列車。",
          "列車通常在通過 Balise 時更新 Movement Authority 與相關行車資訊。",
          "地面仍保留傳統號誌系統，Balise 負責傳遞資訊。",
        ],
      },
      {
        zh: "ETCS Level 2",
        en: "ETCS Level 2",
        points: [
          "ETCS Level 2 由 Radio Block Centre（RBC）透過無線通訊持續向列車傳送 Movement Authority。",
          "Eurobalise 主要提供位置校正與參考點，不再是主要資訊傳輸方式。",
          "這讓資訊更新從固定點傳輸，轉為持續性的無線授權更新。",
        ],
      },
    ],
  },
  layout: {
    title: "System Map｜系統地圖",
    cards: [
      {
        zh: "軌旁設備",
        en: "Trackside",
        points: [
          "號誌機、Balise、計軸器、轉轍器與平交道設備通常靠近軌道。",
          "它們負責偵測、顯示、傳送或隔離現場風險。",
          "看配置圖時，先找出設備控制的是哪一段軌道。",
        ],
      },
      {
        zh: "車站與聯鎖",
        en: "Station / Interlocking",
        points: [
          "聯鎖通常可視為車站設備室或控制邏輯核心。",
          "它連到道岔、號誌與軌道偵測設備。",
          "能否建立進路、完成進路鎖定並控制號誌顯示，主要由這一層做安全檢查。",
        ],
      },
      {
        zh: "控制與車上",
        en: "Control & Onboard",
        points: [
          "CTC/RBC 屬於控制中心或後端系統視角。",
          "告警與維護面板會把現場異常轉成可處置事件。",
          "ATP 車上設備位在列車上，負責監控速度與授權。",
        ],
      },
    ],
  },
  scenario: {
    title: "Scenario Mode｜案例模式",
    cards: [
      {
        zh: "事件鏈",
        en: "Event Chain",
        points: [
          "道岔不到位不是單一設備問題，會連動聯鎖、告警與驗收。",
          "案例模式把現場異常轉成可追蹤的因果流程。",
          "面試展示時可用它說明你理解系統關聯，而不是只背名詞。",
        ],
      },
      {
        zh: "安全反應",
        en: "Safe Response",
        points: [
          "位置未證實時，聯鎖要拒絕進路。",
          "告警面板要指出影響範圍與嚴重度。",
          "測試驗收需記錄缺失、修正與復測證據。",
        ],
      },
      {
        zh: "跨模組理解",
        en: "Cross-module Learning",
        points: [
          "轉轍器負責現場動作與回報。",
          "聯鎖負責判斷是否允許建立進路、完成進路鎖定並控制號誌顯示。",
          "維護與驗收流程負責處置、追蹤與交付判斷。",
        ],
      },
    ],
  },
};

const railwaySystemsCards = [
  {
    key: "INF",
    en: "Infrastructure",
    zh: "基礎設施",
    description: "Track, station, turnout, depot and civil structures.",
    tone: "trackside",
  },
  {
    key: "RS",
    en: "Rolling Stock",
    zh: "車輛系統",
    description: "Train formation, bogie, braking and onboard equipment.",
    tone: "station",
  },
  {
    key: "PS",
    en: "Power Supply",
    zh: "供電系統",
    description: "Electrification, OCS, substations, UPS and grounding.",
    tone: "control",
  },
  {
    key: "COM",
    en: "Communication",
    zh: "通訊系統",
    description: "Fiber, IP network, radio, CCTV and passenger systems.",
    tone: "control",
  },
  {
    key: "SIG",
    en: "Signalling",
    zh: "號誌系統",
    description: "Signals, train detection, interlocking and routes.",
    tone: "trackside",
  },
  {
    key: "OCC",
    en: "Operations Control",
    zh: "行車控制",
    description: "Dispatcher, CTC, ATS, ATP and control center logic.",
    tone: "onboard",
  },
];

const handbookItems = [
  {
    number: "01",
    zh: "鐵道基礎",
    en: "Railway Fundamentals",
    status: "後續",
    summary: "建立鐵道種類、基本名詞、標準與專案概論，作為非工程背景進入鐵道知識的入口。",
    topics: ["Railway Terminology", "System Overview", "Project Overview"],
  },
  {
    number: "02",
    zh: "基礎設施",
    en: "Infrastructure",
    status: "下一步",
    summary: "整理軌道、道岔、車站、月台、橋梁、隧道與機廠，幫助把號誌設備放回現場環境。",
    topics: ["Track", "Turnout", "Station", "Depot"],
  },
  {
    number: "03",
    zh: "車輛系統",
    en: "Rolling Stock",
    status: "後續",
    summary: "補上列車編組、轉向架、煞車、牽引與車載設備，連接 ATP、ATO、OBU 等車上視角。",
    topics: ["Bogie", "Braking", "On-board Unit"],
  },
  {
    number: "04",
    zh: "供電系統",
    en: "Power Supply",
    status: "後續",
    summary: "建立牽引供電、OCS、第三軌、變電站、UPS、接地與防雷的基礎分類。",
    topics: ["OCS", "Substation", "UPS", "Grounding"],
  },
  {
    number: "05",
    zh: "通訊系統",
    en: "Communication",
    status: "下一步",
    summary: "整理光纖、IP 網路、GSM-R、LTE-R、FRMCS、CCTV、PIS、PA 與時鐘系統。",
    topics: ["IP Network", "GSM-R", "LTE-R", "PIS"],
  },
  {
    number: "06",
    zh: "號誌系統",
    en: "Signalling",
    status: "已承接",
    summary: "網站核心內容，包含號誌機、列車偵測、轉轍器、進路、聯鎖、平交道與沿線設備。",
    topics: ["Signal", "Train Detection", "Point Machine", "Interlocking"],
    target: "layout",
  },
  {
    number: "07",
    zh: "列車控制",
    en: "Train Control",
    status: "已承接",
    summary: "連接行車控制、OCC、CTC、ATS、ATP、ATO、ETCS、CBTC 與 RBC/Balise 概念。",
    topics: ["CTC", "ATS", "ATP", "ETCS", "CBTC"],
    target: "atp",
  },
  {
    number: "08",
    zh: "系統工程",
    en: "Systems Engineering",
    status: "下一步",
    summary: "把需求、架構、介面、組態、變更與追溯性整理成專案理解框架。",
    topics: ["Requirements", "Interface", "Configuration", "Traceability"],
  },
  {
    number: "09",
    zh: "專案管理",
    en: "Project Management",
    status: "後續",
    summary: "補上生命週期、利害關係人、時程、成本、風險、採購與合約等非技術但重要的專案視角。",
    topics: ["Lifecycle", "Stakeholders", "Risk", "Contract"],
  },
  {
    number: "10",
    zh: "工程文件",
    en: "Documents",
    status: "下一步",
    summary: "建立 SRS、ICD、FD、測試程序、測試報告、竣工文件與 O&M Manual 的文件地圖。",
    topics: ["SRS", "ICD", "FD", "Test Procedure"],
  },
  {
    number: "11",
    zh: "測試與上線",
    en: "Testing & Commissioning",
    status: "已承接",
    summary: "延伸 FAT、SAT、SIT、Commissioning、Trial Run、Handover 與驗證確認流程。",
    topics: ["FAT", "SAT", "SIT", "Handover"],
    target: "commissioning",
  },
  {
    number: "12",
    zh: "安全",
    en: "Safety",
    status: "後續",
    summary: "整理 RAMS、SIL、EN 50126/50128/50129、Hazard Analysis、FMEA、FTA 與 Safety Case。",
    topics: ["RAMS", "SIL", "FMEA", "Safety Case"],
  },
  {
    number: "13",
    zh: "鐵道應用",
    en: "Railway Applications",
    status: "後續",
    summary: "把 Taiwan Railway、THSR、Taipei Metro、DB、JR、SNCF、Network Rail 等案例整理成比較視角。",
    topics: ["Taiwan Railway", "THSR", "Metro", "DB", "JR"],
  },
];

const blockNames = ["A", "B", "C", "D", "E"];
let trainPosition = 2;
let selectedRoute = "A";
let activeEtcsLevel = "1";
let detectionType = "track-circuit";
let ctcMode = "normal";
let activeModule = "learning";
let pointPosition = "normal";
let alarmScenario = "point";
let commissioningStage = 1;
let scenarioStep = 0;

const moduleTitle = document.querySelector("#module-title");
const selectedTerm = document.querySelector("#selected-term");
const systemStatus = document.querySelector("#system-status");
const statusDot = document.querySelector("#route-status-dot");
const sidebar = document.querySelector(".sidebar");
const workspace = document.querySelector(".workspace");
const heroLab = document.querySelector(".hero-lab");
const trackBoard = document.querySelector("#track-board");
const diagramScroll = document.querySelector("#diagram-scroll");
const systemsCardBoard = document.querySelector("#systems-card-board");
const diagramCaption = document.querySelector("#diagram-caption");
const learningMapPanel = document.querySelector("#learning-map-panel");
const systemMapPanel = document.querySelector("#system-map-panel");
const knowledgeTitle = document.querySelector("#knowledge-title");
const knowledgeGrid = document.querySelector("#knowledge-grid");
const handbookGrid = document.querySelector("#handbook-grid");
const trainSlider = document.querySelector("#train-position");
const trainPositionValue = document.querySelector("#train-position-value");
const occupiedBlock = document.querySelector("#occupied-block");
const blockExplanation = document.querySelector("#block-explanation");
const occupyPlatform = document.querySelector("#occupy-platform");
const checkSwitch = document.querySelector("#check-switch");
const checkOccupied = document.querySelector("#check-occupied");
const checkConflict = document.querySelector("#check-conflict");
const pointLocked = document.querySelector("#point-locked");
const pointDetected = document.querySelector("#point-detected");
const pointPositionCheck = document.querySelector("#point-position-check");
const pointLockCheck = document.querySelector("#point-lock-check");
const pointDetectionCheck = document.querySelector("#point-detection-check");
const detectionOccupied = document.querySelector("#detection-occupied");
const detectionExplanation = document.querySelector("#detection-explanation");
const speedSlider = document.querySelector("#speed-slider");
const speedValue = document.querySelector("#speed-value");
const atpExplanation = document.querySelector("#atp-explanation");
const ctcExplanation = document.querySelector("#ctc-explanation");
const crossingApproach = document.querySelector("#crossing-approach");
const crossingExplanation = document.querySelector("#crossing-explanation");
const alarmActions = document.querySelector("#alarm-actions");
const commissioningStageSlider = document.querySelector("#commissioning-stage");
const commissioningStageValue = document.querySelector("#commissioning-stage-value");
const commissioningIssue = document.querySelector("#commissioning-issue");
const commissioningActions = document.querySelector("#commissioning-actions");
const scenarioStepSlider = document.querySelector("#scenario-step");
const scenarioStepValue = document.querySelector("#scenario-step-value");
const scenarioActions = document.querySelector("#scenario-actions");
const etcsFlow = document.querySelector("#etcs-flow");

function svgEl(tag, attrs = {}) {
  const element = document.createElementNS("http://www.w3.org/2000/svg", tag);
  Object.entries(attrs).forEach(([key, value]) => element.setAttribute(key, value));
  return element;
}

function fitSvgText(element, text, maxWidth, options = {}) {
  element.textContent = text;
  element.removeAttribute("textLength");
  element.removeAttribute("lengthAdjust");
  if (maxWidth) element.setAttribute("data-max-width", maxWidth);
  if (options.x !== undefined) element.setAttribute("x", options.x);
  if (options.y !== undefined) element.setAttribute("y", options.y);
  if (options.center) {
    element.setAttribute("text-anchor", "middle");
    element.setAttribute("dominant-baseline", "middle");
  }
}

function centerSvgText(element, text, x, y, maxWidth) {
  fitSvgText(element, text, maxWidth, { x, y, center: true });
}

function wrapSvgText(text, maxCharsPerLine = 16) {
  const normalized = String(text ?? "").trim().replace(/\s+/g, " ");
  if (!normalized) return [""];

  const lines = [];
  let current = "";
  normalized.split(" ").forEach((word) => {
    if (!current) {
      current = word;
      return;
    }
    if (`${current} ${word}`.length <= maxCharsPerLine) {
      current = `${current} ${word}`;
      return;
    }
    lines.push(current);
    current = word;
  });
  if (current) lines.push(current);
  return lines;
}

function setSvgLines(element, lines, x, startY, lineHeight, anchor = "middle") {
  element.replaceChildren();
  element.setAttribute("x", x);
  element.setAttribute("text-anchor", anchor);
  element.removeAttribute("dominant-baseline");

  lines.forEach((line, index) => {
    const tspan = svgEl("tspan", { x, y: startY + index * lineHeight });
    tspan.textContent = line;
    element.append(tspan);
  });
}

function centerBoxLabel(titleElement, subtitleElement, title, subtitle, box, options = {}) {
  const centerX = box.x + box.width / 2;
  const titleLines = wrapSvgText(title, options.titleMaxChars ?? 14);
  const subtitleLines = wrapSvgText(subtitle, options.subtitleMaxChars ?? 16);
  const titleLineHeight = options.titleLineHeight ?? 20;
  const subtitleLineHeight = options.subtitleLineHeight ?? 17;
  const gap = options.gap ?? 7;
  const totalHeight =
    titleLines.length * titleLineHeight + subtitleLines.length * subtitleLineHeight + gap;
  const startY = box.y + (box.height - totalHeight) / 2 + 2;

  setSvgLines(titleElement, titleLines, centerX, startY, titleLineHeight);
  setSvgLines(
    subtitleElement,
    subtitleLines,
    centerX,
    startY + titleLines.length * titleLineHeight + gap,
    subtitleLineHeight
  );
}

function setStatus(text, tone = "green") {
  systemStatus.textContent = text;
  statusDot.className = `status-dot ${tone}`;
}

function setDiagramCaption(title = "", lines = []) {
  if (!diagramCaption) return;
  diagramCaption.replaceChildren();
  if (!title && lines.length === 0) {
    diagramCaption.classList.add("hidden");
    return;
  }

  const heading = document.createElement("p");
  heading.className = "diagram-caption__title";
  heading.textContent = title;
  diagramCaption.append(heading);

  lines.forEach((line) => {
    const paragraph = document.createElement("p");
    paragraph.className = "diagram-caption__text";
    paragraph.textContent = line;
    diagramCaption.append(paragraph);
  });

  diagramCaption.classList.remove("hidden");
}

function setCheck(row, state, text) {
  row.className = `check-row ${state}`;
  row.querySelector("p").textContent = text;
}

function drawTrain(parent, x, y, label = "TRA") {
  parent.append(
    svgEl("rect", { class: "train-body", x: x - 54, y: y - 31, width: 108, height: 46, rx: 7 }),
    svgEl("rect", { class: "train-window", x: x - 34, y: y - 22, width: 20, height: 13, rx: 3 }),
    svgEl("rect", { class: "train-window", x: x - 6, y: y - 22, width: 20, height: 13, rx: 3 }),
    svgEl("rect", { class: "train-window", x: x + 22, y: y - 22, width: 20, height: 13, rx: 3 }),
    svgEl("text", { class: "block-text" })
  );
  centerSvgText(parent.lastChild, label, x, y + 1, 78);
}

function drawSignal(parent, x, y, color, label) {
  parent.append(
    svgEl("line", { class: "signal-post", x1: x, y1: y, x2: x, y2: y + 58 }),
    svgEl("rect", { class: "signal-head", x: x - 18, y: y - 42, width: 36, height: 58, rx: 8 }),
    svgEl("circle", { class: `lamp ${color}`, cx: x, cy: y - 22, r: 10 }),
    svgEl("text", { class: "block-text" })
  );
  centerSvgText(parent.lastChild, label, x, y + 82, 68);
}

function drawLayoutDevice(parent, x, y, width, height, type, title, subtitle) {
  parent.append(
    svgEl("rect", { class: `layout-device ${type}`, x, y, width, height, rx: 8 }),
    svgEl("text", { class: "layout-text" }),
    svgEl("text", { class: "layout-subtext" })
  );
  centerBoxLabel(
    parent.children[parent.children.length - 2],
    parent.children[parent.children.length - 1],
    title,
    subtitle,
    { x, y, width, height }
  );
}

function drawBalise(parent, x, y) {
  parent.append(
    svgEl("polygon", { class: "balise", points: `${x},${y} ${x + 44},${y} ${x + 30},${y + 28} ${x - 14},${y + 28}` }),
    svgEl("text", { class: "layout-text" }),
    svgEl("text", { class: "layout-subtext" })
  );
  centerSvgText(parent.children[parent.children.length - 2], "應答器", x + 96, y + 14, 78);
  centerSvgText(parent.children[parent.children.length - 1], "Balise", x + 96, y + 40, 78);
}

function renderKnowledge(moduleName) {
  const notes = knowledgeNotes[moduleName];
  knowledgeTitle.textContent = notes.title;
  knowledgeGrid.replaceChildren();
  notes.cards.forEach((card) => {
    const article = document.createElement("article");
    article.className = "term-card";

    const zh = document.createElement("span");
    zh.textContent = card.zh;
    const en = document.createElement("strong");
    en.textContent = card.en;
    const list = document.createElement("ul");
    card.points.forEach((point) => {
      const item = document.createElement("li");
      item.textContent = point;
      list.append(item);
    });

    article.append(zh, en, list);
    knowledgeGrid.append(article);
  });
}

function renderHandbookItems() {
  handbookGrid.replaceChildren();
  handbookItems.forEach((item) => {
    const article = document.createElement("article");
    article.className = "handbook-card";

    const header = document.createElement("div");
    header.className = "handbook-card-header";

    const number = document.createElement("span");
    number.className = "handbook-number";
    number.textContent = item.number;

    const title = document.createElement("div");
    const zh = document.createElement("strong");
    zh.textContent = item.zh;
    const en = document.createElement("small");
    en.textContent = item.en;
    title.append(zh, en);

    const status = document.createElement("span");
    status.className = `handbook-status ${item.status === "已承接" ? "done" : item.status === "下一步" ? "next" : ""}`;
    status.textContent = item.status;

    header.append(number, title, status);

    const summary = document.createElement("p");
    summary.textContent = item.summary;

    const topics = document.createElement("div");
    topics.className = "handbook-topics";
    item.topics.forEach((topic) => {
      const chip = document.createElement("span");
      chip.textContent = topic;
      topics.append(chip);
    });

    article.append(header, summary, topics);

    if (item.target) {
      const button = document.createElement("button");
      button.className = "handbook-link";
      button.type = "button";
      button.dataset.jumpModule = item.target;
      button.textContent = "查看目前模組";
      article.append(button);
    }

    handbookGrid.append(article);
  });
}

function renderRailwaySystems() {
  const systemsGroup = document.querySelector("#systems-overview");
  systemsGroup.replaceChildren();
  if (!systemsCardBoard) return;
  systemsCardBoard.replaceChildren();

  railwaySystemsCards.forEach((card) => {
    const article = document.createElement("article");
    article.className = `systems-card ${card.tone}`;

    const header = document.createElement("div");
    header.className = "systems-card__header";

    const icon = document.createElement("div");
    icon.className = "systems-card__icon";
    icon.textContent = card.key;

    const status = document.createElement("div");
    status.className = "systems-card__status";
    status.textContent = "Coming Soon｜即將推出";

    header.append(icon, status);

    const body = document.createElement("div");
    body.className = "systems-card__body";

    const en = document.createElement("div");
    en.className = "systems-card__title";
    en.textContent = card.en;

    const zh = document.createElement("div");
    zh.className = "systems-card__subtitle";
    zh.textContent = card.zh;

    const description = document.createElement("p");
    description.className = "systems-card__description";
    description.textContent = card.description;

    body.append(en, zh, description);
    article.append(header, body);
    systemsCardBoard.append(article);
  });

  systemsCardBoard.classList.remove("hidden");
  setDiagramCaption("Railway Systems｜鐵道系統", [
    "Railway Systems groups the handbook into six engineering domains for future expansion.",
    "Each card is a placeholder entry point. Detailed pages will be added later.",
  ]);
  setStatus("Coming Soon｜即將推出", "yellow");
}

function wrapLearningMapLines(text, maxCharsPerLine = 18) {
  const normalized = String(text ?? "").trim().replace(/\s+/g, " ");
  if (!normalized) return [""];

  const words = normalized.split(" ");
  const lines = [];
  let current = "";

  words.forEach((word) => {
    const candidate = current ? `${current} ${word}` : word;
    if (candidate.length <= maxCharsPerLine || !current) {
      if (candidate.length <= maxCharsPerLine) {
        current = candidate;
        return;
      }
    }

    if (current) lines.push(current);

    if (word.length <= maxCharsPerLine) {
      current = word;
      return;
    }

    let chunk = "";
    Array.from(word).forEach((char) => {
      const candidateChunk = `${chunk}${char}`;
      if (candidateChunk.length <= maxCharsPerLine || !chunk) {
        chunk = candidateChunk;
      } else {
        lines.push(chunk);
        chunk = char;
      }
    });
    current = chunk;
  });

  if (current) lines.push(current);
  return lines;
}

function setLearningMapText(element, lines, x, startY, lineHeight) {
  element.replaceChildren();
  element.setAttribute("x", x);
  element.setAttribute("text-anchor", "middle");
  element.removeAttribute("dominant-baseline");

  lines.forEach((line, index) => {
    const tspan = svgEl("tspan", {
      x,
      y: startY + index * lineHeight,
    });
    tspan.textContent = line;
    element.append(tspan);
  });
}

function drawLearningMapNode(group, step) {
  const titleClass = "learning-title learning-map-node__title";
  const subtitleClass = "learning-subtitle learning-map-node__subtitle";
  const lineWidth = step.width - 62;
  const textCenterX = step.x + 50 + lineWidth / 2;
  const titleLines = [step.title];
  const subtitleLines = wrapLearningMapLines(step.subtitle, step.subtitleMaxChars ?? 15);
  const titleLineHeight = 22;
  const subtitleLineHeight = 18;
  const titleHeight = titleLines.length * titleLineHeight;
  const subtitleHeight = subtitleLines.length * subtitleLineHeight;
  const gap = 8;
  const nodeHeight = step.height ?? 82;
  const totalHeight = titleHeight + gap + subtitleHeight;
  const startY = step.y + (nodeHeight - totalHeight) / 2 + 4;

  group.append(
    svgEl("rect", {
      x: step.x,
      y: step.y,
      width: step.width,
      height: nodeHeight,
      rx: 8,
      class: "learning-map-node__box",
    }),
    svgEl("circle", { cx: step.x + 24, cy: step.y + 24, r: 15 }),
    svgEl("text", { class: "learning-number" }),
    svgEl("text", { class: titleClass }),
    svgEl("text", { class: subtitleClass })
  );

  centerSvgText(group.children[2], step.number, step.x + 24, step.y + 24, 16);
  setLearningMapText(group.children[3], titleLines, textCenterX, startY, titleLineHeight);
  setLearningMapText(
    group.children[4],
    subtitleLines,
    textCenterX,
    startY + titleHeight + gap,
    subtitleLineHeight
  );
}

function drawLearningMapChip(group, chip) {
  const titleClass = "layout-text learning-map-chip__title";
  const subtitleClass = "layout-subtext learning-map-chip__subtitle";
  const boxHeight = chip.height ?? 78;
  const centerX = chip.x + chip.width / 2;
  const titleLines = [chip.title];
  const subtitleLines = wrapLearningMapLines(chip.subtitle, chip.subtitleMaxChars ?? 15);
  const titleLineHeight = 20;
  const subtitleLineHeight = 17;
  const titleHeight = titleLines.length * titleLineHeight;
  const subtitleHeight = subtitleLines.length * subtitleLineHeight;
  const gap = 7;
  const totalHeight = titleHeight + gap + subtitleHeight;
  const startY = chip.y + (boxHeight - totalHeight) / 2 + 3;

  group.append(
    svgEl("rect", { x: chip.x, y: chip.y, width: chip.width, height: boxHeight, rx: 8 }),
    svgEl("text", { class: titleClass }),
    svgEl("text", { class: subtitleClass })
  );

  setLearningMapText(group.children[1], titleLines, centerX, startY, titleLineHeight);
  setLearningMapText(group.children[2], subtitleLines, centerX, startY + titleHeight + gap, subtitleLineHeight);
}

function drawLearningMapCaption(element, text, x, y, maxCharsPerLine = 56) {
  const lines = wrapLearningMapLines(text, maxCharsPerLine);
  element.setAttribute("class", "learning-caption learning-map-caption");
  element.replaceChildren();
  element.setAttribute("x", x);
  element.removeAttribute("text-anchor");
  element.removeAttribute("dominant-baseline");

  lines.forEach((line, index) => {
    const tspan = svgEl("tspan", {
      x,
      y: y + index * 22,
    });
    tspan.textContent = line;
    element.append(tspan);
  });
}

function renderLearningMap() {
  const mapGroup = document.querySelector("#learning-map");
  mapGroup.replaceChildren();
  if (!learningMapPanel) return;

  const steps = [
    {
      number: "01",
      zh: "鐵道專案總覽",
      en: ["Railway Project Overview"],
      tone: "foundation",
    },
    {
      number: "02",
      zh: "鐵道系統總覽",
      en: ["Railway Systems Overview"],
      tone: "system",
    },
    {
      number: "03",
      zh: "號誌核心",
      en: ["Signalling Core"],
      tone: "signalling",
    },
    {
      number: "04",
      zh: "列車自動防護",
      en: ["Automatic Train Protection", "(ATP)"],
      tone: "control",
      wide: true,
    },
    {
      number: "05",
      zh: "列車自動監督",
      en: ["Automatic Train Supervision", "(ATS)"],
      tone: "control",
      wide: true,
    },
    {
      number: "06",
      zh: "測試與試運轉",
      en: ["Testing and Commissioning"],
      tone: "delivery",
      final: true,
    },
  ];

  const topics = [
    { zh: "列車偵測", en: "Train Detection" },
    { zh: "轉轍器", en: "Point Machine" },
    { zh: "聯鎖系統", en: "Interlocking" },
    { zh: "閉塞系統", en: "Block System" },
  ];

  const pathItems = [
    { number: "01", label: "專案總覽", tone: "foundation" },
    { number: "02", label: "系統總覽", tone: "system" },
    { number: "03", label: "號誌核心", tone: "signalling" },
    { number: "04", label: "ATP", tone: "control" },
    { number: "05", label: "ATS", tone: "control" },
    { number: "06", label: "測試與試運轉", tone: "delivery" },
  ];

  learningMapPanel.replaceChildren();
  learningMapPanel.className = "learning-map";

  const header = document.createElement("div");
  header.className = "learning-map__header";

  const intro = document.createElement("div");
  intro.className = "learning-map__intro";

  const eyebrow = document.createElement("p");
  eyebrow.className = "learning-map__eyebrow";
  eyebrow.textContent = "TAIWAN RAILWAY SIGNALLING UPGRADE STUDY";

  const title = document.createElement("h2");
  title.className = "learning-map__title";
  title.textContent = "Learning Map｜學習地圖";

  const description = document.createElement("p");
  description.className = "learning-map__description";
  description.textContent =
    "本地圖提供鐵道號誌學習順序，使用者可再進入各主題查看詳細內容與互動示意。";

  intro.append(eyebrow, title, description);

  const statusCard = document.createElement("div");
  statusCard.className = "learning-map__status-card";

  const statusTitle = document.createElement("strong");
  statusTitle.className = "learning-map__status-title";
  statusTitle.textContent = "Learning Path｜學習路徑";

  const statusSub = document.createElement("span");
  statusSub.className = "learning-map__status-subtitle";
  statusSub.textContent = "System State｜系統狀態";

  const statusDotEl = document.createElement("span");
  statusDotEl.className = "learning-map__status-dot";
  statusCard.append(statusDotEl, statusTitle, statusSub);

  header.append(intro, statusCard);

  const diagram = document.createElement("section");
  diagram.className = "learning-map__diagram";

  const stepsRow = document.createElement("div");
  stepsRow.className = "learning-map__steps-row";

  steps.slice(0, 5).forEach((step) => {
    const card = document.createElement("article");
    card.className = `learning-map__step learning-map__step--${step.tone}${step.wide ? " learning-map__step--wide" : ""}`;

    const badge = document.createElement("div");
    badge.className = "learning-map__badge";
    badge.textContent = step.number;

    const textWrap = document.createElement("div");
    textWrap.className = "learning-map__step-body";

    const zh = document.createElement("h3");
    zh.className = "learning-map__step-title";
    zh.textContent = step.zh;

    const enWrap = document.createElement("div");
    enWrap.className = "learning-map__step-subtitle";
    step.en.forEach((line) => {
      const span = document.createElement("span");
      span.textContent = line;
      enWrap.append(span);
    });

    textWrap.append(zh, enWrap);
    card.append(badge, textWrap);
    stepsRow.append(card);
  });

  const topicsRow = document.createElement("div");
  topicsRow.className = "learning-map__topics-row";
  topics.forEach((topic) => {
    const card = document.createElement("article");
    card.className = "learning-map__topic";

    const zh = document.createElement("h4");
    zh.className = "learning-map__topic-title";
    zh.textContent = topic.zh;

    const en = document.createElement("p");
    en.className = "learning-map__topic-subtitle";
    en.textContent = topic.en;

    card.append(zh, en);
    topicsRow.append(card);
  });

  const finalRow = document.createElement("div");
  finalRow.className = "learning-map__final-row";

  const finalStep = document.createElement("article");
  finalStep.className = "learning-map__step learning-map__step--delivery learning-map__step--final";

  const finalBadge = document.createElement("div");
  finalBadge.className = "learning-map__badge";
  finalBadge.textContent = "06";

  const finalBody = document.createElement("div");
  finalBody.className = "learning-map__step-body";

  const finalZh = document.createElement("h3");
  finalZh.className = "learning-map__step-title";
  finalZh.textContent = "測試與試運轉";

  const finalEn = document.createElement("div");
  finalEn.className = "learning-map__step-subtitle";
  const finalEnLine = document.createElement("span");
  finalEnLine.textContent = "Testing and Commissioning";
  finalEn.append(finalEnLine);

  finalBody.append(finalZh, finalEn);
  finalStep.append(finalBadge, finalBody);
  finalRow.append(finalStep);

  const connectors = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  connectors.setAttribute("class", "learning-map__connectors");
  connectors.setAttribute("viewBox", "0 0 1200 520");
  connectors.setAttribute("aria-hidden", "true");
  connectors.innerHTML = `
    <path class="learning-map__line learning-map__line--system" d="M 214 136 L 246 136" />
    <path class="learning-map__line learning-map__line--system" d="M 470 136 L 502 136" />
    <path class="learning-map__line learning-map__line--signalling" d="M 738 136 L 770 136" />
    <path class="learning-map__line learning-map__line--control" d="M 1018 136 L 1050 136" />
    <path class="learning-map__line learning-map__line--topic" d="M 320 254 L 918 254" />
    <path class="learning-map__line learning-map__line--topic learning-map__line--topic-dash" d="M 320 254 L 320 286" />
    <path class="learning-map__line learning-map__line--topic learning-map__line--topic-dash" d="M 524 254 L 524 286" />
    <path class="learning-map__line learning-map__line--topic learning-map__line--topic-dash" d="M 726 254 L 726 286" />
    <path class="learning-map__line learning-map__line--topic learning-map__line--topic-dash" d="M 918 254 L 918 286" />
    <path class="learning-map__line learning-map__line--foundation learning-map__line--curve" d="M 108 188 C 104 364, 302 428, 508 432" />
    <path class="learning-map__line learning-map__line--control learning-map__line--curve" d="M 1090 188 C 1098 364, 930 428, 694 432" />
  `;

  diagram.append(header, stepsRow, topicsRow, finalRow, connectors);

  const pathSection = document.createElement("section");
  pathSection.className = "learning-map__path";

  const pathTitle = document.createElement("h3");
  pathTitle.className = "learning-map__section-title";
  pathTitle.textContent = "Recommended Path｜建議學習路徑";

  const pathList = document.createElement("div");
  pathList.className = "learning-map__path-list";

  pathItems.forEach((item, index) => {
    const node = document.createElement("div");
    node.className = "learning-map__path-item";

    const circle = document.createElement("div");
    circle.className = `learning-map__path-badge learning-map__path-badge--${item.tone}`;
    circle.textContent = item.number;

    const label = document.createElement("div");
    label.className = "learning-map__path-label";
    label.textContent = item.label;

    node.append(circle, label);
    pathList.append(node);

    if (index < pathItems.length - 1) {
      const arrow = document.createElement("div");
      arrow.className = "learning-map__path-arrow";
      arrow.textContent = "→";
      pathList.append(arrow);
    }
  });

  pathSection.append(pathTitle, pathList);

  const infoGrid = document.createElement("div");
  infoGrid.className = "learning-map__info-grid";

  const notes = document.createElement("section");
  notes.className = "learning-map__info-card learning-map__notes";
  const notesTitle = document.createElement("h3");
  notesTitle.className = "learning-map__section-title";
  notesTitle.textContent = "Learning Notes｜學習筆記";
  const notesList = document.createElement("ul");
  notesList.className = "learning-map__list";
  [
    "建議依照以上順序循序學習。",
    "可從下方「下一層擴充」進入各主題細項。",
    "名詞中英對照可於主題頁面參考。",
  ].forEach((text) => {
    const item = document.createElement("li");
    item.textContent = text;
    notesList.append(item);
  });
  notes.append(notesTitle, notesList);

  const nextLayer = document.createElement("section");
  nextLayer.className = "learning-map__info-card learning-map__next-layer";
  const nextLayerTitle = document.createElement("h3");
  nextLayerTitle.className = "learning-map__section-title";
  nextLayerTitle.textContent = "Next Layer｜下一層擴充";
  const nextLayerList = document.createElement("ul");
  nextLayerList.className = "learning-map__list";
  [
    "Document Map 可承接 SRS、ICD、FD、Test Procedure。",
    "Testing Flow 可細分 FAT、SAT、SIT、Trial Run、Handover。",
    "Glossary 可將 Handbook 中英文名詞轉為可搜尋工具。",
  ].forEach((text) => {
    const item = document.createElement("li");
    item.textContent = text;
    nextLayerList.append(item);
  });
  nextLayer.append(nextLayerTitle, nextLayerList);

  infoGrid.append(notes, nextLayer);

  learningMapPanel.append(diagram, pathSection, infoGrid);

  selectedTerm.textContent = "Learning Path｜學習路徑";
  setStatus("Learning Path｜學習路徑", "green");
}

function renderBlocks() {
  const blockGroup = document.querySelector("#block-sections");
  const signalGroup = document.querySelector("#signals");
  const trainGroup = document.querySelector("#train");
  blockGroup.replaceChildren();
  signalGroup.replaceChildren();
  trainGroup.replaceChildren();

  blockNames.forEach((name, index) => {
    const x = 90 + index * 172;
    const occupied = index + 1 === trainPosition;
    blockGroup.append(
      svgEl("rect", {
        class: `block-zone ${occupied ? "occupied" : ""}`,
        x,
        y: 145,
        width: 150,
        height: 146,
        rx: 8,
      }),
      svgEl("text", { class: "block-text" })
    );
    centerSvgText(blockGroup.lastChild, `Block ${name}`, x + 75, 330, 106);

    const color = index + 1 === trainPosition ? "red" : index + 2 === trainPosition ? "yellow" : "green";
    drawSignal(signalGroup, x + 12, 132, color, `S${index + 1}`);
  });

  drawTrain(trainGroup, 165 + (trainPosition - 1) * 172, 226, "Train");
  trainPositionValue.textContent = trainPosition;
  trainSlider.value = trainPosition;
  occupiedBlock.textContent = `Block ${blockNames[trainPosition - 1]}`;

  const redSignal = `S${trainPosition}`;
  const yellowSignal = trainPosition > 1 ? `S${trainPosition - 1}` : "無";
  if (trainPosition === 1) {
    blockExplanation.textContent =
      `在本示意模型中，當 Block A 被列車佔用時，保護該區段的 ${redSignal} 顯示停止（紅燈）；因為後方沒有前一架號誌，所以不另外顯示警戒號誌。`;
  } else {
    blockExplanation.textContent =
      `在本示意模型中，當 Block ${blockNames[trainPosition - 1]} 被列車佔用時，保護該區段的 ${redSignal} 顯示停止（紅燈）；前一架號誌 ${yellowSignal} 顯示警戒（黃燈），提醒駕駛下一架號誌為停止顯示。`;
  }

  if (trainPosition === 1) setStatus("後方保護中", "yellow");
  else if (trainPosition === 5) setStatus("終端區間佔用", "red");
  else setStatus("允許行車", "green");
}

function renderLayout() {
  const layoutGroup = document.querySelector("#layout-equipment");
  layoutGroup.replaceChildren();
  if (!systemMapPanel) return;

  const layerBadges = [
    { id: "01", en: "Control and Supervision", zh: "控制與監督", tone: "control" },
    { id: "02", en: "Safety Logic", zh: "安全邏輯", tone: "safety" },
    { id: "03", en: "Wayside Equipment", zh: "軌旁設備", tone: "wayside" },
    { id: "04", en: "Track Overview", zh: "軌道示意", tone: "infrastructure" },
  ];

  const legendItems = [
    { label: "Command / Control｜指令／控制", tone: "control" },
    { label: "Information｜資訊傳遞", tone: "information" },
    { label: "Physical Interface｜實體介面", tone: "physical" },
  ];

  const controlNodes = [
    { en: "Centralized Traffic Control (CTC)", zh: "中央行車控制", tag: "Control", icon: "CTC" },
    { en: "Automatic Train Supervision (ATS)", zh: "列車自動監督", tag: "Control", icon: "ATS" },
    { en: "Radio Block Centre (RBC)", zh: "無線閉塞中心", tag: "Control", icon: "RBC" },
  ];

  const safetyNodes = [
    { en: "Interlocking", zh: "聯鎖系統", tag: "Safety", icon: "INT" },
    { en: "Automatic Train Protection (ATP)", zh: "列車自動防護", tag: "Safety", icon: "ATP" },
  ];

  const waysideNodes = [
    { en: "Signal", zh: "號誌機", tag: "Wayside", icon: "SIG" },
    { en: "Track Circuit", zh: "軌道電路", tag: "Wayside", icon: "TC" },
    { en: "Axle Counter", zh: "計軸器", tag: "Wayside", icon: "AC" },
    { en: "Turnout / Points", zh: "道岔", tag: "Wayside", icon: "TO" },
    { en: "Point Machine", zh: "轉轍器", tag: "Wayside", icon: "PM" },
    { en: "Eurobalise", zh: "歐洲應答器", tag: "Wayside", icon: "EB" },
    { en: "Level Crossing Protection", zh: "平交道保護", tag: "Wayside", icon: "LC" },
  ];

  const relationships = [
    { en: "CTC", zh: "中央行車控制", tone: "control" },
    { en: "Interlocking", zh: "聯鎖系統", tone: "safety" },
    { en: "Signal / Wayside Equipment", zh: "號誌與軌旁設備", tone: "wayside" },
    { en: "Train / On-board ATP", zh: "列車與車載 ATP", tone: "train" },
    { en: "ATS", zh: "列車自動監督", tone: "control" },
  ];

  function createNodeCard(node, toneClass = "") {
    const card = document.createElement("article");
    card.className = `system-map__node system-map__node--${node.tag.toLowerCase().replace(/[^a-z]+/g, "-")} ${toneClass}`.trim();

    const icon = document.createElement("span");
    icon.className = "system-map__node-icon";
    icon.textContent = node.icon;

    const body = document.createElement("div");
    body.className = "system-map__node-body";

    const en = document.createElement("h4");
    en.className = "system-map__node-title";
    en.textContent = node.en;

    const zh = document.createElement("p");
    zh.className = "system-map__node-subtitle";
    zh.textContent = node.zh;

    const tag = document.createElement("span");
    tag.className = "system-map__node-tag";
    tag.textContent = node.tag;

    body.append(en, zh, tag);
    card.append(icon, body);
    return card;
  }

  function createLayerLabel(layer) {
    const label = document.createElement("aside");
    label.className = `system-map__layer-label system-map__layer-label--${layer.tone}`;

    const eyebrow = document.createElement("span");
    eyebrow.className = "system-map__layer-label-id";
    eyebrow.textContent = `Layer ${layer.id}`;

    const en = document.createElement("strong");
    en.className = "system-map__layer-label-en";
    en.textContent = layer.en;

    const zh = document.createElement("span");
    zh.className = "system-map__layer-label-zh";
    zh.textContent = layer.zh;

    label.append(eyebrow, en, zh);
    return label;
  }

  systemMapPanel.replaceChildren();
  systemMapPanel.className = "system-map";

  const header = document.createElement("div");
  header.className = "system-map__header";

  const intro = document.createElement("div");
  intro.className = "system-map__intro";

  const eyebrow = document.createElement("p");
  eyebrow.className = "system-map__eyebrow";
  eyebrow.textContent = "TAIWAN RAILWAY SIGNALLING UPGRADE STUDY";

  const title = document.createElement("h2");
  title.className = "system-map__title";
  title.textContent = "System Map｜系統地圖";

  const zhDescription = document.createElement("p");
  zhDescription.className = "system-map__description";
  zhDescription.textContent =
    "本圖以分層方式呈現鐵道控制系統、聯鎖安全邏輯、軌旁設備與列車之間的主要關係。實際專案架構會依路線、系統與供應商設計而有所不同。";

  const enDescription = document.createElement("p");
  enDescription.className = "system-map__description system-map__description--secondary";
  enDescription.textContent =
    "This map presents the main relationships among traffic control, interlocking safety logic, wayside equipment and trains. Actual project architectures may vary by railway, system and supplier.";

  intro.append(eyebrow, title, zhDescription, enDescription);

  const legend = document.createElement("aside");
  legend.className = "system-map__legend";
  const legendTitle = document.createElement("h3");
  legendTitle.className = "system-map__legend-title";
  legendTitle.textContent = "Legend｜圖例";
  const legendList = document.createElement("div");
  legendList.className = "system-map__legend-list";
  legendItems.forEach((item) => {
    const row = document.createElement("div");
    row.className = "system-map__legend-item";
    const line = document.createElement("span");
    line.className = `system-map__legend-line system-map__legend-line--${item.tone}`;
    const label = document.createElement("span");
    label.className = "system-map__legend-text";
    label.textContent = item.label;
    row.append(line, label);
    legendList.append(row);
  });
  legend.append(legendTitle, legendList);

  header.append(intro, legend);

  const architecture = document.createElement("section");
  architecture.className = "system-map__architecture";

  const boardScroll = document.createElement("div");
  boardScroll.className = "system-map__board-scroll";
  const board = document.createElement("div");
  board.className = "system-map__board";
  board.innerHTML = `
    <svg class="system-map__board-lines" viewBox="0 0 1280 900" role="presentation" aria-hidden="true">
      <path class="system-map__board-line system-map__board-line--control" d="M 420 138 L 730 138"></path>
      <path class="system-map__board-line system-map__board-line--control" d="M 730 138 L 1032 138"></path>
      <path class="system-map__board-line system-map__board-line--control" d="M 340 180 L 340 258"></path>
      <path class="system-map__board-line system-map__board-line--control" d="M 655 180 L 655 248 L 560 248"></path>
      <path class="system-map__board-line system-map__board-line--control" d="M 655 180 L 655 248 L 846 248"></path>
      <path class="system-map__board-line system-map__board-line--control" d="M 1032 180 L 1032 248 L 860 248"></path>

      <path class="system-map__board-line system-map__board-line--information" d="M 560 316 L 846 316"></path>
      <path class="system-map__board-line system-map__board-line--information" d="M 420 348 L 420 446"></path>
      <path class="system-map__board-line system-map__board-line--information" d="M 560 348 L 560 446"></path>
      <path class="system-map__board-line system-map__board-line--information" d="M 718 348 L 718 446"></path>
      <path class="system-map__board-line system-map__board-line--information" d="M 846 348 L 846 446"></path>
      <path class="system-map__board-line system-map__board-line--information" d="M 996 348 L 996 446"></path>
      <path class="system-map__board-line system-map__board-line--information" d="M 1118 348 L 1118 446"></path>

      <path class="system-map__board-line system-map__board-line--physical" d="M 264 560 L 264 610"></path>
      <path class="system-map__board-line system-map__board-line--physical" d="M 412 560 L 412 610"></path>
      <path class="system-map__board-line system-map__board-line--physical" d="M 556 560 L 556 610"></path>
      <path class="system-map__board-line system-map__board-line--physical" d="M 700 560 L 700 640 L 636 640"></path>
      <path class="system-map__board-line system-map__board-line--physical" d="M 844 560 L 844 610"></path>
      <path class="system-map__board-line system-map__board-line--physical" d="M 992 560 L 992 610"></path>
      <path class="system-map__board-line system-map__board-line--physical" d="M 1138 560 L 1138 610"></path>
      <path class="system-map__board-line system-map__board-line--physical" d="M 930 780 L 930 824"></path>
    </svg>
  `;

  const controlRow = document.createElement("section");
  controlRow.className = "system-map__layer";
  const controlCards = document.createElement("div");
  controlCards.className = "system-map__layer-content system-map__layer-content--control";
  controlNodes.forEach((node) => controlCards.append(createNodeCard(node)));
  controlRow.append(createLayerLabel(layerBadges[0]), controlCards);

  const safetyRow = document.createElement("section");
  safetyRow.className = "system-map__layer";
  const safetyCards = document.createElement("div");
  safetyCards.className = "system-map__layer-content system-map__layer-content--safety";
  safetyNodes.forEach((node) => safetyCards.append(createNodeCard(node)));
  safetyRow.append(createLayerLabel(layerBadges[1]), safetyCards);

  const waysideRow = document.createElement("section");
  waysideRow.className = "system-map__layer";
  const waysideCards = document.createElement("div");
  waysideCards.className = "system-map__layer-content system-map__layer-content--wayside";
  waysideNodes.forEach((node) => waysideCards.append(createNodeCard(node, "system-map__node--wayside-card")));
  waysideRow.append(createLayerLabel(layerBadges[2]), waysideCards);

  const trackRow = document.createElement("section");
  trackRow.className = "system-map__layer";
  const trackPanel = document.createElement("div");
  trackPanel.className = "system-map__track";
  trackPanel.innerHTML = `
    <div class="track-overview">
      <h3 class="system-map__track-title">Track Overview｜軌道示意</h3>
      <div class="track-overview__scroll">
        <div class="track-overview__canvas">
          <div class="track-overview__label track-overview__label--signal">
            <strong>Signal</strong><span>號誌機</span>
          </div>
          <div class="track-overview__label track-overview__label--track-circuit">
            <strong>Track Circuit</strong><span>軌道電路</span>
          </div>
          <div class="track-overview__label track-overview__label--axle-counter">
            <strong>Axle Counter</strong><span>計軸器</span>
          </div>
          <div class="track-overview__label track-overview__label--turnout">
            <strong>Turnout / Points</strong><span>道岔</span>
          </div>
          <div class="track-overview__label track-overview__label--eurobalise">
            <strong>Eurobalise</strong><span>歐洲應答器</span>
          </div>
          <div class="track-overview__label track-overview__label--train">
            <strong>Train</strong><span>列車</span>
          </div>
          <div class="track-overview__label track-overview__label--crossing">
            <strong>Level Crossing Protection</strong><span>平交道保護</span>
          </div>
          <div class="track-overview__label track-overview__label--point-machine">
            <strong>Point Machine</strong><span>轉轍器</span>
          </div>
          <div class="track-overview__label track-overview__label--onboard-atp">
            <strong>On-board ATP</strong><span>車載 ATP</span>
          </div>

          <svg class="track-overview__svg" viewBox="0 0 1120 430" role="img" aria-label="Track overview diagram">
            <defs>
              <linearGradient id="trackCircuitGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="rgba(92, 136, 255, 0.18)"></stop>
                <stop offset="100%" stop-color="rgba(92, 136, 255, 0.36)"></stop>
              </linearGradient>
            </defs>

            <path class="track-overview__label-guide" d="M 88 142 L 88 198"></path>
            <path class="track-overview__label-guide" d="M 236 142 L 236 224"></path>
            <path class="track-overview__label-guide" d="M 406 142 L 406 222"></path>
            <path class="track-overview__label-guide" d="M 590 142 L 590 192"></path>
            <path class="track-overview__label-guide" d="M 748 142 L 748 224"></path>
            <path class="track-overview__label-guide" d="M 930 142 L 930 168"></path>
            <path class="track-overview__label-guide" d="M 1050 142 L 1050 204"></path>
            <path class="track-overview__label-guide" d="M 628 332 L 628 286"></path>
            <path class="track-overview__label-guide track-overview__label-guide--purple" d="M 924 332 L 924 278"></path>

            <line class="track-overview__rail" x1="34" y1="222" x2="1086" y2="222"></line>
            <line class="track-overview__rail track-overview__rail--secondary" x1="34" y1="248" x2="1086" y2="248"></line>
            <line class="track-overview__rail track-overview__rail--branch" x1="516" y1="222" x2="690" y2="164"></line>
            <line class="track-overview__rail track-overview__rail--branch-secondary" x1="516" y1="248" x2="690" y2="190"></line>
            <line class="track-overview__rail" x1="690" y1="164" x2="814" y2="164"></line>
            <line class="track-overview__rail track-overview__rail--secondary" x1="690" y1="190" x2="814" y2="190"></line>

            <rect class="track-overview__track-circuit" x="156" y="208" width="164" height="54" rx="14"></rect>

            <g class="track-overview__signal">
              <rect x="72" y="160" width="30" height="62" rx="8"></rect>
              <line x1="87" y1="222" x2="87" y2="272"></line>
              <circle cx="87" cy="176" r="7"></circle>
              <circle cx="87" cy="192" r="7" class="track-overview__signal-light track-overview__signal-light--amber"></circle>
              <circle cx="87" cy="208" r="7" class="track-overview__signal-light track-overview__signal-light--red"></circle>
            </g>

            <g class="track-overview__axle-counter">
              <circle cx="406" cy="232" r="9"></circle>
              <circle cx="492" cy="232" r="9"></circle>
              <line x1="406" y1="214" x2="406" y2="252"></line>
              <line x1="492" y1="214" x2="492" y2="252"></line>
            </g>

            <g class="track-overview__point-machine-link">
              <path d="M 616 246 L 630 246 L 630 266"></path>
            </g>

            <g class="track-overview__point-machine">
              <rect x="612" y="266" width="36" height="40" rx="8"></rect>
              <rect x="620" y="244" width="20" height="24" rx="6"></rect>
            </g>

            <polygon class="track-overview__balise" points="732,226 764,226 758,248 726,248"></polygon>

            <g class="track-overview__train">
              <path d="M 840 172 C 860 152, 884 146, 918 146 H 1036 C 1058 146, 1070 156, 1076 174 L 1076 242 C 1070 258, 1058 268, 1038 268 H 890 C 868 268, 850 262, 838 246 L 816 224 C 812 218, 812 210, 818 204 Z"></path>
              <rect x="880" y="170" width="38" height="24" rx="6"></rect>
              <rect x="924" y="170" width="38" height="24" rx="6"></rect>
              <rect x="968" y="170" width="38" height="24" rx="6"></rect>
              <rect x="1012" y="170" width="38" height="24" rx="6"></rect>
              <circle cx="900" cy="270" r="12"></circle>
              <circle cx="1028" cy="270" r="12"></circle>
            </g>

            <g class="track-overview__onboard">
              <rect x="886" y="290" width="76" height="26" rx="10"></rect>
              <line x1="924" y1="290" x2="924" y2="252"></line>
            </g>

            <g class="track-overview__crossing">
              <line x1="1038" y1="176" x2="1070" y2="208"></line>
              <line x1="1070" y1="176" x2="1038" y2="208"></line>
              <line x1="1042" y1="222" x2="1042" y2="314"></line>
              <line x1="1072" y1="222" x2="1072" y2="314"></line>
              <line x1="1042" y1="260" x2="1064" y2="238"></line>
              <line x1="1072" y1="260" x2="1094" y2="238"></line>
            </g>
          </svg>
        </div>
      </div>
    </div>
  `;
  trackRow.append(createLayerLabel(layerBadges[3]), trackPanel);

  board.append(controlRow, safetyRow, waysideRow, trackRow);
  boardScroll.append(board);
  architecture.append(boardScroll);

  const relationshipsSection = document.createElement("section");
  relationshipsSection.className = "system-map__relationships";
  const relationshipsTitle = document.createElement("h3");
  relationshipsTitle.className = "system-map__section-title";
  relationshipsTitle.textContent = "Main Relationships｜主要關係";
  const relationshipsFlow = document.createElement("div");
  relationshipsFlow.className = "system-map__relationships-flow";
  relationships.forEach((item, index) => {
    const node = document.createElement("article");
    node.className = `system-map__relationship-node system-map__relationship-node--${item.tone}`;
    const en = document.createElement("strong");
    en.textContent = item.en;
    const zh = document.createElement("span");
    zh.textContent = item.zh;
    node.append(en, zh);
    relationshipsFlow.append(node);
    if (index < relationships.length - 1) {
      const arrow = document.createElement("span");
      arrow.className = "system-map__relationship-arrow";
      arrow.textContent = "→";
      relationshipsFlow.append(arrow);
    }
  });
  relationshipsSection.append(relationshipsTitle, relationshipsFlow);

  systemMapPanel.append(header, architecture, relationshipsSection);

  selectedTerm.textContent = "Architecture View｜架構視圖";
  setStatus("System Map｜系統地圖", "green");
}

function renderInterlocking() {
  const routeGroup = document.querySelector("#interlocking-route");
  const signalGroup = document.querySelector("#interlocking-signals");
  const trainGroup = document.querySelector("#interlocking-trains");
  routeGroup.replaceChildren();
  signalGroup.replaceChildren();
  trainGroup.replaceChildren();

  const occupied = occupyPlatform.checked;
  let blocked = false;
  let routePath = "M 110 170 L 870 170";
  let signalColor = "green";
  let text = "進路鎖定完成";
  let tone = "green";

  if (selectedRoute === "B") routePath = "M 110 170 L 355 170 L 520 275 L 870 275";
  if (selectedRoute === "conflict") {
    blocked = true;
    routePath = "M 110 170 L 355 170 L 520 275 L 870 275";
    signalColor = "red";
    text = "進路衝突";
    tone = "red";
  }
  if (selectedRoute === "B" && occupied) {
    blocked = true;
    signalColor = "red";
    text = "月台佔用，拒絕建立進路";
    tone = "red";
  }

  routeGroup.append(svgEl("path", { class: `route-line ${blocked ? "blocked" : ""}`, d: routePath }));
  drawSignal(signalGroup, 105, 82, signalColor, "Home");
  drawSignal(signalGroup, 880, selectedRoute === "A" ? 82 : 187, blocked ? "red" : "green", "Exit");
  drawTrain(trainGroup, 230, 169, "T1");
  if (occupied) drawTrain(trainGroup, 720, 274, "T2");

  setCheck(
    checkSwitch,
    "pass",
    selectedRoute === "A"
      ? "道岔位置 / Point Position：維持直向，通往月台 A"
      : "道岔位置 / Point Position：轉向，通往月台 B"
  );
  setCheck(
    checkOccupied,
    selectedRoute === "B" && occupied ? "fail" : "pass",
    selectedRoute === "B" && occupied
      ? "區間佔用 / Track Occupancy：月台 B 已有列車，不能建立進路"
      : "區間佔用 / Track Occupancy：目標區段可用"
  );
  setCheck(
    checkConflict,
    selectedRoute === "conflict" ? "fail" : "pass",
    selectedRoute === "conflict"
      ? "衝突進路 / Conflicting Route：與既有進路互相干涉"
      : "衝突進路 / Conflicting Route：未偵測到衝突"
  );
  setStatus(text, tone);
}

function renderTurnout() {
  const turnoutGroup = document.querySelector("#turnout-board");
  turnoutGroup.replaceChildren();

  turnoutGroup.append(
    svgEl("rect", { class: "layout-device trackside", x: 172, y: 78, width: 196, height: 72, rx: 8 }),
    svgEl("text", { class: "layout-text" }),
    svgEl("text", { class: "layout-subtext" }),
    svgEl("rect", { class: "layout-device station", x: 622, y: 88, width: 196, height: 72, rx: 8 }),
    svgEl("text", { class: "layout-text" }),
    svgEl("text", { class: "layout-subtext" }),
    svgEl("text", { class: "diagram-label" }),
    svgEl("text", { class: "diagram-label" })
  );

  centerBoxLabel(turnoutGroup.children[1], turnoutGroup.children[2], "道岔", "Turnout / Points", {
    x: 172,
    y: 78,
    width: 196,
    height: 72,
  });
  centerBoxLabel(turnoutGroup.children[4], turnoutGroup.children[5], "分歧股道", "Branch Route", {
    x: 622,
    y: 88,
    width: 196,
    height: 72,
  });
  centerSvgText(turnoutGroup.children[6], "Infrastructure / 基礎設施", 270, 180, 220);
  centerSvgText(turnoutGroup.children[7], "列車可由直向轉入分歧股道", 720, 188, 260);
  setStatus("Infrastructure 視角", "green");
}

function renderPoint() {
  const equipmentGroup = document.querySelector("#point-equipment");
  const trainGroup = document.querySelector("#point-train");
  equipmentGroup.replaceChildren();
  trainGroup.replaceChildren();

  const locked = pointLocked.checked;
  const detected = pointDetected.checked;
  const reverse = pointPosition === "reverse";
  const routePath = reverse ? "M 115 205 L 380 205 L 585 305 L 870 305" : "M 115 205 L 890 205";
  const routeOkay = locked && detected;
  const statusTone = routeOkay ? "green" : "red";
  const statusText = routeOkay ? "轉轍器回報正常" : "禁止建立進路";

  equipmentGroup.append(
    svgEl("path", { class: `route-line ${routeOkay ? "" : "blocked"}`, d: routePath }),
    svgEl("rect", { class: "layout-device trackside", x: 304, y: 88, width: 176, height: 72, rx: 8 }),
    svgEl("text", { class: "layout-text" }),
    svgEl("text", { class: "layout-subtext" }),
    svgEl("path", { class: "layout-link", d: "M 392 160 L 392 198" }),
    svgEl("rect", { class: "layout-device station", x: 560, y: 88, width: 140, height: 72, rx: 8 }),
    svgEl("text", { class: "layout-text" }),
    svgEl("text", { class: "layout-subtext" }),
    svgEl("path", { class: "layout-control-link", d: "M 480 123 L 560 123" })
  );
  centerBoxLabel(
    equipmentGroup.children[2],
    equipmentGroup.children[3],
    reverse ? "Reverse / 反位" : "Normal / 定位",
    "Point Machine",
    { x: 304, y: 88, width: 176, height: 72 }
  );
  centerBoxLabel(
    equipmentGroup.children[6],
    equipmentGroup.children[7],
    "聯鎖",
    "Interlocking",
    { x: 560, y: 88, width: 140, height: 72 }
  );

  drawSignal(equipmentGroup, 105, 120, routeOkay ? "green" : "red", "P");
  drawTrain(trainGroup, reverse ? 710 : 740, reverse ? 305 : 205, "Route");

  setCheck(
    pointPositionCheck,
    "pass",
    reverse
      ? "道岔位置 / Point Position：Reverse，列車導向分歧股道"
      : "道岔位置 / Point Position：Normal，列車維持直向"
  );
  setCheck(
    pointLockCheck,
    locked ? "pass" : "fail",
    locked
      ? "鎖定狀態 / Locking：道岔已鎖定，可納入進路條件"
      : "鎖定狀態 / Locking：未鎖定，列車通過前不可建立進路"
  );
  setCheck(
    pointDetectionCheck,
    detected ? "pass" : "fail",
    detected
      ? "偵測回報 / Detection：命令位置與現場回報一致"
      : "偵測回報 / Detection：位置未證實，聯鎖需拒絕進路"
  );

  setStatus(statusText, statusTone);
}

function renderAlarm() {
  const alarmGroup = document.querySelector("#alarm-board");
  alarmGroup.replaceChildren();

  const scenarios = {
    point: {
      title: "Point Detection Failure",
      status: "道岔不到位",
      tone: "red",
      affected: "Route 12 / Platform B",
      actions: ["確認道岔位置偵測是否一致。", "暫停相關進路建立與號誌顯示。", "通知現場檢查轉轍器與鎖定機構。"],
    },
    comm: {
      title: "Communication Loss",
      status: "通訊中斷",
      tone: "yellow",
      affected: "Station B - CTC Link",
      actions: ["確認控制中心與車站設備通訊狀態。", "切換備援鏈路或降級操作程序。", "比對現場狀態回報與最後有效資料。"],
    },
    track: {
      title: "Unexpected Track Occupancy",
      status: "異常佔用",
      tone: "red",
      affected: "Track Circuit T3",
      actions: ["確認是否有列車或工程車佔用。", "限制相關區間進路建立與號誌顯示。", "檢查軌道電路、計軸器或現場回報。"],
    },
  };
  const scenario = scenarios[alarmScenario];

  alarmGroup.append(
    svgEl("rect", { class: "layout-device control", x: 115, y: 65, width: 770, height: 285, rx: 10 }),
    svgEl("text", { class: "diagram-label" }),
    svgEl("rect", { class: `alarm-row ${scenario.tone}`, x: 145, y: 135, width: 710, height: 64, rx: 8 }),
    svgEl("text", { class: "layout-text" }),
    svgEl("text", { class: "layout-subtext" }),
    svgEl("rect", { class: "alarm-row", x: 145, y: 218, width: 220, height: 76, rx: 8 }),
    svgEl("text", { class: "layout-text" }),
    svgEl("text", { class: "layout-subtext" }),
    svgEl("rect", { class: "alarm-row", x: 390, y: 218, width: 220, height: 76, rx: 8 }),
    svgEl("text", { class: "layout-text" }),
    svgEl("text", { class: "layout-subtext" }),
    svgEl("rect", { class: "alarm-row", x: 635, y: 218, width: 220, height: 76, rx: 8 }),
    svgEl("text", { class: "layout-text" }),
    svgEl("text", { class: "layout-subtext" })
  );

  centerSvgText(alarmGroup.children[1], "Maintenance Console / 維護告警面板", 500, 104, 690);
  centerBoxLabel(alarmGroup.children[3], alarmGroup.children[4], scenario.title, `Affected: ${scenario.affected}`, {
    x: 145,
    y: 135,
    width: 710,
    height: 64,
  });
  centerBoxLabel(
    alarmGroup.children[6],
    alarmGroup.children[7],
    "Severity",
    scenario.tone === "red" ? "Critical / 重大" : "Warning / 警戒",
    { x: 145, y: 218, width: 220, height: 76 }
  );
  centerBoxLabel(
    alarmGroup.children[9],
    alarmGroup.children[10],
    "Safe Action",
    scenario.tone === "red" ? "Block Route" : "Degraded Mode",
    { x: 390, y: 218, width: 220, height: 76 }
  );
  centerBoxLabel(alarmGroup.children[12], alarmGroup.children[13], "Owner", "Signalling Maint.", {
    x: 635,
    y: 218,
    width: 220,
    height: 76,
  });

  alarmActions.replaceChildren();
  scenario.actions.forEach((action) => {
    const item = document.createElement("li");
    item.textContent = action;
    alarmActions.append(item);
  });
  setStatus(scenario.status, scenario.tone);
}

function renderCommissioning() {
  const board = document.querySelector("#commissioning-board");
  board.replaceChildren();

  const stages = [
    {
      zh: "安裝完成",
      en: "Installation",
      shortEn: "Installation",
      actions: ["完成設備安裝、接線、標示與現場配置。", "確認供電、通訊、接地與基本條件已就緒。", "Installation 完成後，流程才進入 Testing。"],
    },
    {
      zh: "Testing",
      en: "Testing",
      shortEn: "Testing",
      actions: ["依照測試程序驗證設備、功能與系統是否符合設計需求。", "FAT、SAT、SIT 都屬於 Testing 範圍。", "缺失需記錄、修正與復測後，才能進入 Commissioning。"],
    },
    {
      zh: "Commissioning",
      en: "Commissioning",
      shortEn: "Commissioning",
      actions: ["完成設備安裝與整合後，透過試運轉確認系統已具備投入營運的能力。", "此階段在接近實際營運的條件下觀察系統整體穩定性。", "若試運轉發現問題，需回到 Testing 或修正流程。"],
    },
    {
      zh: "Acceptance",
      en: "Acceptance",
      shortEn: "Acceptance",
      actions: ["由業主依照合約及驗收標準確認工程成果是否符合要求。", "Acceptance 重點是契約、標準、紀錄與成果是否完整。", "不符合的項目需列管並完成補正。"],
    },
    {
      zh: "Handover",
      en: "Handover",
      shortEn: "Handover",
      actions: ["完成文件、設備、教育訓練及維護資料移交，正式交付業主。", "Handover 代表責任、文件與維護資訊已完成正式移交。", "正式交付後，系統進入業主接管與後續維護階段。"],
    },
  ];

  const issueFound = commissioningIssue.checked;
  const active = stages[commissioningStage];
  commissioningStageValue.textContent = active.zh;
  commissioningStageSlider.value = commissioningStage;

  board.append(
    svgEl("rect", { class: "layout-device control", x: 86, y: 62, width: 828, height: 296, rx: 10 }),
    svgEl("text", { class: "diagram-label" }),
    svgEl("line", { class: issueFound ? "occupied-cable" : "clear-cable", x1: 160, y1: 215, x2: 840, y2: 215 })
  );
  centerSvgText(board.children[1], "Installation -> Testing -> Commissioning -> Acceptance -> Handover", 500, 104, 760);

  stages.forEach((stage, index) => {
    const x = 92 + index * 156;
    const isActive = index === commissioningStage;
    const isDone = index < commissioningStage && !issueFound;
    const isBlocked = issueFound && index >= commissioningStage;
    const stateClass = isActive ? (issueFound ? "red" : "yellow") : isDone ? "green" : isBlocked ? "red" : "";
    board.append(
      svgEl("rect", { class: `test-step ${stateClass}`, x, y: 144, width: 138, height: 110, rx: 8 }),
      svgEl("text", { class: "layout-text" }),
      svgEl("text", { class: "layout-subtext" })
    );
    centerBoxLabel(
      board.children[board.children.length - 2],
      board.children[board.children.length - 1],
      stage.en,
      stage.zh,
      { x, y: 144, width: 138, height: 110 },
      { titleMaxChars: 13, subtitleMaxChars: 10, titleLineHeight: 18, subtitleLineHeight: 17 }
    );
  });

  board.append(
    svgEl("rect", { class: `alarm-row ${issueFound ? "red" : "yellow"}`, x: 238, y: 276, width: 524, height: 54, rx: 8 }),
    svgEl("text", { class: "layout-text" })
  );
  centerSvgText(
    board.lastChild,
    issueFound ? `缺失阻塞 / Issue blocks ${active.en}` : `目前階段 / Current stage: ${active.en}`,
    500,
    303,
    500
  );

  commissioningActions.replaceChildren();
  active.actions.forEach((action) => {
    const item = document.createElement("li");
    item.textContent = action;
    commissioningActions.append(item);
  });

  setStatus(issueFound ? "缺失待復測" : active.en, issueFound ? "red" : commissioningStage === stages.length - 1 ? "green" : "yellow");
}

function renderScenario() {
  const board = document.querySelector("#scenario-board");
  board.replaceChildren();

  const steps = [
    {
      title: "轉轍器命令",
      status: "等待回報",
      tone: "yellow",
      actions: ["聯鎖命令轉轍器轉到 Reverse。", "等待現場設備回報位置偵測。", "進路尚未完成建立，因此相關號誌維持停止顯示。"],
    },
    {
      title: "位置未證實",
      status: "偵測失敗",
      tone: "red",
      actions: ["轉轍器未回報 Reverse 到位。", "Point Detection 不成立。", "系統必須把道岔視為不安全狀態。"],
    },
    {
      title: "聯鎖拒絕進路",
      status: "進路拒絕",
      tone: "red",
      actions: ["聯鎖檢查到道岔位置未證實。", "進路無法鎖定，號誌維持紅燈。", "列車不得進入該受控路徑。"],
    },
    {
      title: "告警維護介入",
      status: "重大告警",
      tone: "red",
      actions: ["告警面板顯示 Point Detection Failure。", "維護人員確認影響範圍與設備位置。", "相關進路維持封鎖或降級操作。"],
    },
    {
      title: "缺失復測",
      status: "待復測",
      tone: "yellow",
      actions: ["修正轉轍器或偵測回路後進行復測。", "重新執行 I/O 與聯鎖邏輯測試。", "復測通過後才可進入試運轉或交付。"],
    },
  ];
  const step = steps[scenarioStep];
  scenarioStepValue.textContent = step.title;
  scenarioStepSlider.value = scenarioStep;

  board.append(
    svgEl("path", { class: "route-line blocked", d: "M 115 235 L 342 235 L 545 320 L 875 320" }),
    svgEl("rect", { class: "layout-device trackside", x: 238, y: 88, width: 168, height: 72, rx: 8 }),
    svgEl("text", { class: "layout-text" }),
    svgEl("text", { class: "layout-subtext" }),
    svgEl("rect", { class: "layout-device station", x: 452, y: 88, width: 140, height: 72, rx: 8 }),
    svgEl("text", { class: "layout-text" }),
    svgEl("text", { class: "layout-subtext" }),
    svgEl("rect", { class: "layout-device control", x: 634, y: 88, width: 166, height: 72, rx: 8 }),
    svgEl("text", { class: "layout-text" }),
    svgEl("text", { class: "layout-subtext" }),
    svgEl("rect", { class: "layout-device control", x: 394, y: 298, width: 204, height: 66, rx: 8 }),
    svgEl("text", { class: "layout-text" }),
    svgEl("text", { class: "layout-subtext" }),
    svgEl("path", { class: scenarioStep >= 1 ? "occupied-cable" : "layout-link", d: "M 395 122 L 455 122" }),
    svgEl("path", { class: scenarioStep >= 3 ? "occupied-cable" : "layout-control-link", d: "M 575 122 L 640 122" }),
    svgEl("path", { class: scenarioStep >= 4 ? "layout-control-link" : "layout-link", d: "M 710 152 C 670 220, 590 252, 500 302" }),
    svgEl("rect", { class: `alarm-row ${step.tone}`, x: 250, y: 380, width: 530, height: 42, rx: 8 }),
    svgEl("text", { class: "layout-text" })
  );
  centerBoxLabel(board.children[2], board.children[3], "Route Request", "Point Command", {
    x: 238,
    y: 88,
    width: 168,
    height: 72,
  });
  centerBoxLabel(board.children[5], board.children[6], "Safety Check", scenarioStep >= 2 ? "Route Setting" : "Checking", {
    x: 452,
    y: 88,
    width: 140,
    height: 72,
  });
  centerBoxLabel(board.children[8], board.children[9], "Route Locking", scenarioStep >= 3 ? "Lock Failed" : "Locked", {
    x: 634,
    y: 88,
    width: 166,
    height: 72,
  });
  centerBoxLabel(board.children[11], board.children[12], "Signal Clears", scenarioStep >= 2 ? "Proceed Aspect Blocked" : "Proceed Aspect", {
    x: 394,
    y: 298,
    width: 204,
    height: 66,
  });
  centerSvgText(board.lastChild, `${step.title} / ${step.status}`, 515, 401, 490);

  drawSignal(board, 112, 150, scenarioStep >= 2 ? "red" : "yellow", "Home");
  drawTrain(board, 760, 320, "Blocked");

  scenarioActions.replaceChildren();
  step.actions.forEach((action) => {
    const item = document.createElement("li");
    item.textContent = action;
    scenarioActions.append(item);
  });
  setStatus(step.status, step.tone);
}

function renderEtcs() {
  const equipmentGroup = document.querySelector("#etcs-equipment");
  const trainGroup = document.querySelector("#etcs-train");
  const radioWave = document.querySelector("#radio-wave");
  equipmentGroup.replaceChildren();
  trainGroup.replaceChildren();

  drawTrain(trainGroup, 315, 246, "ETCS");

  equipmentGroup.append(
    svgEl("polygon", { class: "balise", points: "440,285 485,285 470,315 425,315" }),
    svgEl("text", { class: "block-text" })
  );
  centerSvgText(equipmentGroup.lastChild, "Balise｜應答器", 455, 340, 138);

  if (activeEtcsLevel === "1") {
    radioWave.classList.add("hidden");
    etcsFlow.innerHTML =
      "<li>ETCS Level 1 主要利用 Eurobalise 將地面資訊傳送給列車</li><li>列車通常在通過 Balise 時更新 Movement Authority 與相關行車資訊</li><li>地面仍保留傳統號誌系統，Balise 負責傳遞資訊</li>";
    setDiagramCaption("ETCS Level 1｜地面資訊更新", [
      "ETCS Level 1 主要利用 Eurobalise 將地面資訊傳送給列車。",
      "列車通常在通過 Balise 時更新 Movement Authority 與相關行車資訊。",
      "地面仍保留傳統號誌系統，Balise 負責傳遞資訊。",
    ]);
    setStatus("Level 1｜間歇更新", "yellow");
  } else {
    radioWave.classList.remove("hidden");
    equipmentGroup.append(
      svgEl("rect", { class: "rbc-box", x: 445, y: 56, width: 125, height: 62, rx: 8 }),
      svgEl("text", { class: "block-text" })
    );
    centerSvgText(equipmentGroup.children[equipmentGroup.children.length - 1], "RBC", 507.5, 88, 92);
    etcsFlow.innerHTML =
      "<li>ETCS Level 2 由 Radio Block Centre（RBC）透過無線通訊持續向列車傳送 Movement Authority</li><li>Eurobalise 主要提供位置校正與參考點</li><li>Level 2 不再以 Balise 作為主要資訊傳輸方式</li>";
    setDiagramCaption("ETCS Level 2｜無線授權更新", [
      "ETCS Level 2 由 RBC 透過無線通訊持續向列車傳送 Movement Authority。",
      "Eurobalise 主要提供位置校正與參考點，不再是主要資訊傳輸方式。",
      "圖內只保留 RBC、Balise 與列車位置關係，避免說明文字壓在線條上。",
    ]);
    setStatus("Level 2｜持續更新", "green");
  }
}

function renderDetection() {
  const equipmentGroup = document.querySelector("#detection-equipment");
  const trainGroup = document.querySelector("#detection-train");
  equipmentGroup.replaceChildren();
  trainGroup.replaceChildren();

  const occupied = detectionOccupied.checked;
  equipmentGroup.append(
    svgEl("line", {
      class: occupied ? "occupied-cable" : "clear-cable",
      x1: 215,
      y1: 286,
      x2: 785,
      y2: 286,
    }),
    svgEl("rect", { class: `block-zone ${occupied ? "occupied" : ""}`, x: 235, y: 150, width: 530, height: 148, rx: 8 }),
    svgEl("text", { class: "block-text" })
  );
  centerSvgText(equipmentGroup.lastChild, occupied ? "Occupied / 佔用" : "Clear / 空閒", 500, 330, 180);

  if (detectionType === "track-circuit") {
    equipmentGroup.append(
      svgEl("circle", { class: "sensor-dot", cx: 200, cy: 286, r: 13 }),
      svgEl("circle", { class: "sensor-dot", cx: 800, cy: 286, r: 13 }),
      svgEl("text", { class: "diagram-label" })
    );
    centerSvgText(equipmentGroup.lastChild, "Track Circuit / 軌道電路", 500, 120, 320);
    detectionExplanation.textContent = occupied
      ? "軌道電路偵測到輪軸造成電氣分路，因此回報該區間已被佔用。"
      : "軌道電路沒有偵測到分路，系統判斷此區間可供建立進路。";
  } else {
    equipmentGroup.append(
      svgEl("rect", { class: "axle-counter-box", x: 182, y: 125, width: 70, height: 54, rx: 8 }),
      svgEl("rect", { class: "axle-counter-box", x: 748, y: 125, width: 70, height: 54, rx: 8 }),
      svgEl("text", { class: "block-text" }),
      svgEl("text", { class: "block-text" }),
      svgEl("text", { class: "diagram-label" })
    );
    centerSvgText(equipmentGroup.children[equipmentGroup.children.length - 3], "IN", 217, 152, 42);
    centerSvgText(equipmentGroup.children[equipmentGroup.children.length - 2], "OUT", 783, 152, 42);
    centerSvgText(equipmentGroup.children[equipmentGroup.children.length - 1], "Axle Counter / 計軸器", 500, 120, 320);
    detectionExplanation.textContent = occupied
      ? "計軸器比較進入與離開的輪軸數量；數量不平衡時，區間維持佔用狀態。"
      : "計軸器判斷進入與離開輪軸數一致，因此回報該區間已清空。";
  }

  if (occupied) drawTrain(trainGroup, 500, 222, "DET");
  setStatus(occupied ? "區間佔用" : "區間空閒", occupied ? "red" : "green");
}

function renderAtp() {
  const equipmentGroup = document.querySelector("#atp-equipment");
  const trainGroup = document.querySelector("#atp-train");
  equipmentGroup.replaceChildren();
  trainGroup.replaceChildren();

  const speed = Number(speedSlider.value);
  const limit = 90;
  const tone = speed > limit ? "danger" : speed > 75 ? "warn" : "";
  const statusTone = speed > limit ? "red" : speed > 75 ? "yellow" : "green";
  const statusText = speed > limit ? "ATP 介入煞車" : speed > 75 ? "接近速限" : "持續監控";

  drawTrain(trainGroup, 270 + speed * 4.5, 260, "ATP");
  equipmentGroup.append(
    svgEl("path", { class: "gauge-base", d: "M 360 155 A 140 140 0 0 1 640 155" }),
    svgEl("path", { class: `speed-arc ${tone}`, d: "M 360 155 A 140 140 0 0 1 640 155" }),
    svgEl("rect", { class: "speed-board", x: 454, y: 120, width: 96, height: 60, rx: 8 }),
    svgEl("text", { class: "block-text" }),
    svgEl("text", { class: "diagram-label" })
  );
  centerSvgText(equipmentGroup.children[equipmentGroup.children.length - 2], `${limit}`, 502, 150, 60);
  centerSvgText(equipmentGroup.children[equipmentGroup.children.length - 1], "Permitted Speed / 允許速度", 500, 205, 280);
  speedValue.textContent = speed;
  atpExplanation.textContent =
    speed > limit
      ? `列車速度 ${speed} km/h 已超過允許速度 ${limit} km/h，ATP 會觸發警告並介入煞車。`
      : speed > 75
        ? `列車速度 ${speed} km/h 接近允許速度 ${limit} km/h，ATP 會提高監控並提示駕駛注意。`
        : `列車速度 ${speed} km/h 低於允許速度 ${limit} km/h，ATP 持續監控但不介入。`;
  setStatus(statusText, statusTone);
}

function renderAts() {
  const networkGroup = document.querySelector("#ats-network");
  networkGroup.replaceChildren();

  networkGroup.append(
    svgEl("rect", { class: "rbc-box", x: 378, y: 48, width: 244, height: 76, rx: 8 }),
    svgEl("text", { class: "block-text" }),
    svgEl("path", { class: "data-link", d: "M 500 124 L 500 178" }),
    svgEl("line", { class: "clear-cable", x1: 210, y1: 214, x2: 790, y2: 214 }),
    svgEl("line", { class: "data-link", x1: 300, y1: 214, x2: 300, y2: 296 }),
    svgEl("line", { class: "data-link", x1: 500, y1: 214, x2: 500, y2: 296 }),
    svgEl("line", { class: "data-link", x1: 700, y1: 214, x2: 700, y2: 296 })
  );
  centerSvgText(networkGroup.children[1], "ATS｜列車自動監督", 500, 86, 190);

  const atsNodes = [
    { zh: "Train Tracking", en: "列車追蹤", x: 202, y: 182, width: 188 },
    { zh: "Timetable", en: "時刻表管理", x: 406, y: 182, width: 188 },
    { zh: "Alarm Display", en: "告警顯示", x: 610, y: 182, width: 188 },
    { zh: "Dispatch Support", en: "行車調度", x: 406, y: 296, width: 188 },
  ];

  atsNodes.forEach((node) => {
    drawLayoutDevice(networkGroup, node.x, node.y, node.width, 70, "control", node.zh, node.en);
  });

  setDiagramCaption("Automatic Train Supervision (ATS)｜列車自動監督", [
    "ATS 著重營運監督，不直接執行安全煞車。",
    "圖內只保留監督功能節點，詳細說明放在右側內容區與下方學習筆記。",
  ]);
  setStatus("ATS Supervision｜列車監督", "yellow");
}

function renderCtc() {
  const networkGroup = document.querySelector("#ctc-network");
  networkGroup.replaceChildren();
  const blocked = ctcMode === "maintenance";
  const delayed = ctcMode === "delay";

  networkGroup.append(
    svgEl("rect", { class: "layout-device control", x: 98, y: 55, width: 162, height: 74, rx: 8 }),
    svgEl("text", { class: "block-text" }),
    svgEl("rect", { class: "rbc-box", x: 318, y: 55, width: 194, height: 74, rx: 8 }),
    svgEl("text", { class: "block-text" }),
    svgEl("rect", { class: "layout-device station", x: 568, y: 55, width: 190, height: 74, rx: 8 }),
    svgEl("text", { class: "block-text" }),
    svgEl("rect", { class: "layout-device trackside", x: 784, y: 268, width: 170, height: 76, rx: 8 }),
    svgEl("text", { class: "block-text" }),
    svgEl("text", { class: "block-text" }),
    svgEl("path", { class: "data-link", d: "M 260 92 L 318 92" }),
    svgEl("path", { class: "data-link", d: "M 512 92 L 568 92" }),
    svgEl("path", { class: blocked ? "occupied-cable" : "clear-cable", d: "M 758 92 C 796 114, 826 168, 846 268" }),
    svgEl("line", { class: blocked ? "occupied-cable" : "clear-cable", x1: 186, y1: 216, x2: 846, y2: 216 })
  );
  centerSvgText(networkGroup.children[1], "Dispatcher｜調度員", 179, 92, 130);
  centerSvgText(networkGroup.children[3], "CTC｜中央行車控制", 415, 92, 154);
  centerSvgText(networkGroup.children[5], "Interlocking｜聯鎖系統", 663, 92, 154);
  centerSvgText(networkGroup.children[7], "Field Equipment｜現場設備", 869, 306, 146);
  centerSvgText(networkGroup.children[8], "Dispatcher -> CTC -> Interlocking -> Field Equipment", 515, 186, 520);

  if (delayed) drawTrain(networkGroup, 505, 230, "Late");
  else drawTrain(networkGroup, blocked ? 265 : 720, blocked ? 230 : 280, "T");

  if (ctcMode === "normal") {
    ctcExplanation.textContent = "調度員透過 CTC 集中監看列車與設備狀態；涉及行車安全的控制命令，仍需由聯鎖系統完成安全條件檢查後才會作用到現場設備。";
    setDiagramCaption("CTC Flow｜調度命令流程", [
      "CTC 提供集中監控與調度視角，但安全條件仍由 Interlocking 檢查。",
    ]);
    setStatus("Network Supervision｜全線監控", "green");
  } else if (ctcMode === "delay") {
    ctcExplanation.textContent = "列車延誤時，CTC 協助調度員觀察前後車間隔並提出調整命令；是否能安全執行，仍需由聯鎖系統確認。";
    setDiagramCaption("CTC Flow｜調度命令流程", [
      "延誤調整屬於營運調度決策，實際控制命令仍需經過聯鎖安全檢查。",
    ]);
    setStatus("Delay Management｜延誤調度", "yellow");
  } else {
    ctcExplanation.textContent = "維修封鎖時，CTC 會標示不可用區間並限制調度命令；真正涉及設備與進路的安全控制，仍由聯鎖系統把關。";
    setDiagramCaption("CTC Flow｜調度命令流程", [
      "維修封鎖時，CTC 會顯示限制狀態；設備與進路是否可用仍由聯鎖系統把關。",
    ]);
    setStatus("Possession Mode｜維修封鎖", "red");
  }
}

function renderCrossing() {
  const equipmentGroup = document.querySelector("#crossing-equipment");
  const trainGroup = document.querySelector("#crossing-train");
  equipmentGroup.replaceChildren();
  trainGroup.replaceChildren();

  const approaching = crossingApproach.checked;
  drawSignal(equipmentGroup, 440, 112, approaching ? "red" : "green", "LX");
  drawSignal(equipmentGroup, 610, 112, approaching ? "red" : "green", "LX");
  equipmentGroup.append(
    svgEl("line", { class: `barrier ${approaching ? "closed" : ""}`, x1: 398, y1: approaching ? 218 : 155, x2: 480, y2: approaching ? 218 : 185 }),
    svgEl("line", { class: `barrier ${approaching ? "closed" : ""}`, x1: 575, y1: approaching ? 272 : 330, x2: 657, y2: approaching ? 272 : 300 }),
    svgEl("text", { class: "diagram-label" })
  );
  centerSvgText(equipmentGroup.lastChild, approaching ? "Warning Active｜警示啟動" : "Road Open｜道路開放", 500, 360, 240);

  if (approaching) drawTrain(trainGroup, 250, 235, "Approach");
  crossingExplanation.textContent = approaching
    ? "典型流程為：列車接近 -> 啟動警示設備 -> 遮斷桿下降；列車通過後，再解除警示並升起遮斷桿。"
    : "目前沒有列車接近；在本概念示意中，平交道維持開放，道路車輛可通行。";
  setDiagramCaption("Level Crossing Protection｜平交道保護", [
    approaching
      ? "列車接近時，警示設備先啟動，再進入遮斷桿下降與列車通過流程。"
      : "目前畫面為概念示意中的待命狀態，平交道維持道路開放。",
  ]);
  setStatus(approaching ? "Warning Active｜警示啟動" : "Road Open｜道路開放", approaching ? "red" : "green");
}

function renderCurrentConcept() {
  if (activeModule === "railway-systems") renderRailwaySystems();
  if (activeModule === "turnout") renderTurnout();
  if (activeModule === "learning") renderLearningMap();
  if (activeModule === "layout") renderLayout();
  if (activeModule === "scenario") renderScenario();
  if (activeModule === "blocks") renderBlocks();
  if (activeModule === "interlocking") renderInterlocking();
  if (activeModule === "point") renderPoint();
  if (activeModule === "detection") renderDetection();
  if (activeModule === "atp") renderAtp();
  if (activeModule === "ats") renderAts();
  if (activeModule === "ctc") renderCtc();
  if (activeModule === "alarm") renderAlarm();
  if (activeModule === "commissioning") renderCommissioning();
  if (activeModule === "crossing") renderCrossing();
  if (activeModule === "etcs") renderEtcs();
}

function updateNavigationState(moduleName) {
  document.querySelectorAll(".nav-item").forEach((button) => {
    button.classList.toggle("active", button.dataset.module === moduleName);
  });
  document.querySelectorAll(".nav-branch").forEach((branch) => {
    const hasActiveItem = Boolean(branch.querySelector(`.nav-item[data-module="${moduleName}"]`));
    branch.classList.toggle("active-branch", hasActiveItem);
    if (hasActiveItem) branch.open = true;
  });
}

function resetWorkspaceScroll() {
  if (!workspace) return;
  const header = workspace.querySelector(".workspace-header");
  requestAnimationFrame(() => {
    workspace.scrollTop = 0;
    if (header) {
      header.scrollIntoView({ block: "start", inline: "nearest" });
      workspace.scrollTop = 0;
    }
  });
}

function restoreSidebarScroll(scrollTop) {
  if (!sidebar) return;
  requestAnimationFrame(() => {
    sidebar.scrollTop = scrollTop;
  });
}

function prepareDiagramSurface(moduleName) {
  if (!trackBoard) return;
  const showLearningMap = moduleName === "learning";
  const showSystemMap = moduleName === "layout";
  const showSystems = moduleName === "railway-systems";
  workspace?.classList.toggle("learning-map-page", showLearningMap);
  workspace?.classList.toggle("system-map-page", showSystemMap);
  heroLab?.classList.toggle("learning-map-page", showLearningMap);
  heroLab?.classList.toggle("system-map-page", showSystemMap);
  trackBoard.classList.toggle("show-systems", showSystems);
  trackBoard.classList.toggle("show-learning-map", showLearningMap);
  trackBoard.classList.toggle("show-system-map", showSystemMap);
  if (learningMapPanel) {
    learningMapPanel.classList.toggle("hidden", !showLearningMap);
    if (!showLearningMap) learningMapPanel.replaceChildren();
  }
  if (systemMapPanel) {
    systemMapPanel.classList.toggle("hidden", !showSystemMap);
    if (!showSystemMap) systemMapPanel.replaceChildren();
  }
  if (systemsCardBoard) {
    systemsCardBoard.classList.toggle("hidden", !showSystems);
    if (!showSystems) systemsCardBoard.replaceChildren();
  }
  if (diagramScroll) {
    diagramScroll.classList.toggle("hidden", showLearningMap || showSystemMap || showSystems);
    if (!showLearningMap && !showSystemMap && !showSystems) diagramScroll.classList.remove("hidden");
  }
  if (moduleName !== "learning" && moduleName !== "etcs" && moduleName !== "railway-systems") {
    setDiagramCaption();
  }
  if (showLearningMap && diagramCaption) diagramCaption.classList.add("hidden");
  if (showSystemMap && diagramCaption) diagramCaption.classList.add("hidden");
}

function switchModule(moduleName) {
  const sidebarScrollTop = sidebar ? sidebar.scrollTop : 0;
  activeModule = moduleName;
  prepareDiagramSurface(moduleName);
  updateNavigationState(moduleName);
  document.querySelectorAll(".diagram-layer").forEach((layer) => layer.classList.add("hidden"));
  document.querySelectorAll(".module-panel").forEach((panel) => panel.classList.remove("active"));
  const viewClass =
    activeModule === "blocks" ? "blocks" : activeModule === "railway-systems" ? "systems" : activeModule;
  document.querySelector(`.${viewClass}-view`).classList.remove("hidden");
  document.querySelector(`#panel-${activeModule}`).classList.add("active");
  moduleTitle.textContent = modules[activeModule].title;
  selectedTerm.textContent = modules[activeModule].term;
  renderKnowledge(activeModule);
  renderCurrentConcept();
  if (sidebar) sidebar.scrollTop = sidebarScrollTop;
  restoreSidebarScroll(sidebarScrollTop);
  resetWorkspaceScroll();
}

document.querySelectorAll(".nav-item").forEach((button) => {
  button.addEventListener("pointerdown", (event) => {
    event.preventDefault();
  });
  button.addEventListener("click", () => switchModule(button.dataset.module));
});

trainSlider.addEventListener("input", (event) => {
  trainPosition = Number(event.target.value);
  renderBlocks();
});

document.querySelector("#move-prev").addEventListener("click", () => {
  trainPosition = Math.max(1, trainPosition - 1);
  renderBlocks();
});

document.querySelector("#move-next").addEventListener("click", () => {
  trainPosition = Math.min(5, trainPosition + 1);
  renderBlocks();
});

document.querySelectorAll("[data-route]").forEach((button) => {
  button.addEventListener("click", () => {
    selectedRoute = button.dataset.route;
    document.querySelectorAll("[data-route]").forEach((item) => item.classList.toggle("active", item === button));
    renderInterlocking();
  });
});

occupyPlatform.addEventListener("change", renderInterlocking);
document.querySelector("#request-route").addEventListener("click", renderInterlocking);

document.querySelectorAll("[data-point-position]").forEach((button) => {
  button.addEventListener("click", () => {
    pointPosition = button.dataset.pointPosition;
    document.querySelectorAll("[data-point-position]").forEach((item) => item.classList.toggle("active", item === button));
    renderPoint();
  });
});

pointLocked.addEventListener("change", renderPoint);
pointDetected.addEventListener("change", renderPoint);

document.querySelectorAll("[data-detection]").forEach((button) => {
  button.addEventListener("click", () => {
    detectionType = button.dataset.detection;
    document.querySelectorAll("[data-detection]").forEach((item) => item.classList.toggle("active", item === button));
    renderDetection();
  });
});

detectionOccupied.addEventListener("change", renderDetection);
speedSlider.addEventListener("input", renderAtp);

document.querySelectorAll("[data-ctc]").forEach((button) => {
  button.addEventListener("click", () => {
    ctcMode = button.dataset.ctc;
    document.querySelectorAll("[data-ctc]").forEach((item) => item.classList.toggle("active", item === button));
    renderCtc();
  });
});

crossingApproach.addEventListener("change", renderCrossing);

document.querySelectorAll("[data-alarm]").forEach((button) => {
  button.addEventListener("click", () => {
    alarmScenario = button.dataset.alarm;
    document.querySelectorAll("[data-alarm]").forEach((item) => item.classList.toggle("active", item === button));
    renderAlarm();
  });
});

commissioningStageSlider.addEventListener("input", (event) => {
  commissioningStage = Number(event.target.value);
  renderCommissioning();
});

commissioningIssue.addEventListener("change", renderCommissioning);

scenarioStepSlider.addEventListener("input", (event) => {
  scenarioStep = Number(event.target.value);
  renderScenario();
});

document.querySelector("#scenario-prev").addEventListener("click", () => {
  scenarioStep = Math.max(0, scenarioStep - 1);
  renderScenario();
});

document.querySelector("#scenario-next").addEventListener("click", () => {
  scenarioStep = Math.min(4, scenarioStep + 1);
  renderScenario();
});

document.querySelectorAll("[data-level]").forEach((button) => {
  button.addEventListener("click", () => {
    activeEtcsLevel = button.dataset.level;
    document.querySelectorAll("[data-level]").forEach((item) => item.classList.toggle("active", item === button));
    renderEtcs();
  });
});

updateNavigationState(activeModule);
renderKnowledge(activeModule);
renderHandbookItems();
document.querySelectorAll("[data-jump-module]").forEach((button) => {
  button.addEventListener("click", () => switchModule(button.dataset.jumpModule));
});
prepareDiagramSurface(activeModule);
renderCurrentConcept();
