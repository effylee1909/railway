const modules = {
  learning: {
    title: "學習地圖 / Learning Map",
    term: "學習順序",
  },
  layout: {
    title: "系統地圖 / System Map",
    term: "設備位置",
  },
  scenario: {
    title: "案例模式 / Point Detection Failure",
    term: "道岔不到位",
  },
  blocks: {
    title: "閉塞區間 / Block Sections",
    term: "閉塞區間",
  },
  interlocking: {
    title: "聯鎖 / Interlocking",
    term: "聯鎖",
  },
  point: {
    title: "道岔與轉轍器 / Point Machine",
    term: "轉轍器",
  },
  detection: {
    title: "列車偵測 / Train Detection",
    term: "列車偵測",
  },
  protection: {
    title: "列車防護 / ATP & ATS",
    term: "列車自動防護",
  },
  ctc: {
    title: "調度控制 / CTC",
    term: "中央行車控制",
  },
  alarm: {
    title: "告警與維護 / Alarm & Maintenance",
    term: "告警維護",
  },
  commissioning: {
    title: "測試與驗收 / Testing & Commissioning",
    term: "測試驗收",
  },
  crossing: {
    title: "平交道保護 / Level Crossing Protection",
    term: "平交道保護",
  },
  etcs: {
    title: "ETCS / ERTMS 入門",
    term: "行車許可",
  },
};

const knowledgeNotes = {
  learning: {
    title: "學習地圖 / Learning Map",
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
    title: "閉塞 / Block Sections",
    cards: [
      {
        zh: "閉塞區間",
        en: "Block Section",
        points: [
          "把路線切成一段一段的安全單元。",
          "同一區間被佔用時，後方列車不能再進入。",
          "號誌顏色通常反映前方一段或多段區間的狀態。",
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
    title: "聯鎖 / Interlocking",
    cards: [
      {
        zh: "進路",
        en: "Route",
        points: [
          "進路是列車從起點到終點的一段受控路徑。",
          "建立進路前，系統要確認軌道區段可用。",
          "進路建立後，相關道岔與號誌會被鎖定。",
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
          "兩條進路如果會交叉、對向或共用同一區段，就不能同時開放。",
          "聯鎖的核心價值是先拒絕不安全命令。",
          "這也是號誌系統最重要的 fail-safe 思維之一。",
        ],
      },
    ],
  },
  detection: {
    title: "列車偵測 / Train Detection",
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
    title: "道岔與轉轍器 / Point Machine",
    cards: [
      {
        zh: "轉轍器",
        en: "Point Machine",
        points: [
          "負責實際扳動道岔尖軌到指定位置。",
          "會回報 Normal 或 Reverse 等位置狀態。",
          "若未到位，聯鎖不得開放相關進路。",
        ],
      },
      {
        zh: "位置偵測",
        en: "Point Detection",
        points: [
          "系統要確認道岔實際位置符合命令。",
          "命令位置與偵測回報不一致時，必須視為不安全。",
          "這類狀態常會在測試與維護時被特別檢查。",
        ],
      },
      {
        zh: "鎖定",
        en: "Point Locking",
        points: [
          "列車通過前，道岔需要被鎖在正確位置。",
          "鎖定可避免列車壓過道岔時位置改變。",
          "聯鎖通常同時檢查位置、鎖定與進路衝突。",
        ],
      },
    ],
  },
  protection: {
    title: "列車防護 / ATP & ATS",
    cards: [
      {
        zh: "ATP",
        en: "Automatic Train Protection",
        points: [
          "監控列車速度是否超過允許值。",
          "駕駛未及時反應時，系統可介入煞車。",
          "它關心的是安全限制是否被突破。",
        ],
      },
      {
        zh: "ATS",
        en: "Automatic Train Supervision",
        points: [
          "偏向營運監督與列車運行管理。",
          "可協助掌握班距、延誤、告警與運行狀態。",
          "它不像 ATP 那樣直接以煞車介入為核心。",
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
    ],
  },
  ctc: {
    title: "調度控制 / CTC",
    cards: [
      {
        zh: "中央行車控制",
        en: "Centralized Traffic Control",
        points: [
          "讓控制中心集中掌握多個車站與區間。",
          "調度員可以看到列車位置、進路與設備狀態。",
          "它把局部號誌狀態提升成全線營運視角。",
        ],
      },
      {
        zh: "營運調整",
        en: "Traffic Regulation",
        points: [
          "列車延誤時，需要調整會車、待避或發車順序。",
          "CTC 提供狀態資訊，幫助調度員做決策。",
          "重點不是單一設備，而是整體運行流暢度。",
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
    title: "告警與維護 / Alarm & Maintenance",
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
    title: "測試與驗收 / Testing & Commissioning",
    cards: [
      {
        zh: "I/O 測試",
        en: "Input / Output Test",
        points: [
          "確認現場設備訊號與系統點位一一對應。",
          "常見對象包含號誌、道岔、軌道區段與告警接點。",
          "這是後續聯鎖邏輯測試前的基礎。",
        ],
      },
      {
        zh: "聯鎖邏輯測試",
        en: "Interlocking Logic Test",
        points: [
          "驗證進路、道岔、號誌與佔用條件是否符合設計。",
          "不只測正常案例，也要測拒絕進路與衝突情境。",
          "測試結果需要可追溯到測試案例與簽核紀錄。",
        ],
      },
      {
        zh: "試運轉與交付",
        en: "Trial Run / Handover",
        points: [
          "在接近實際營運的條件下確認系統穩定性。",
          "缺失需完成修正與復測，才適合進入交付。",
          "驗收不只是功能可用，也包含紀錄、文件與維護準備。",
        ],
      },
    ],
  },
  crossing: {
    title: "平交道保護 / Level Crossing",
    cards: [
      {
        zh: "接近偵測",
        en: "Approach Detection",
        points: [
          "列車到達平交道前，系統要先偵測接近。",
          "接近距離需保留警示與柵欄動作時間。",
          "速度越高，需要越早啟動保護序列。",
        ],
      },
      {
        zh: "警示設備",
        en: "Warning Devices",
        points: [
          "常見設備包含閃光燈、警鈴與柵欄。",
          "目標是阻止道路車輛進入列車路徑。",
          "號誌系統要同時處理鐵路與道路的衝突風險。",
        ],
      },
      {
        zh: "解除條件",
        en: "Release Condition",
        points: [
          "列車完全通過後，平交道才可恢復開放。",
          "解除通常依賴偵測點或區間清空邏輯。",
          "不確定時應維持保護狀態，而非過早開放。",
        ],
      },
    ],
  },
  etcs: {
    title: "ETCS / ERTMS",
    cards: [
      {
        zh: "ETCS",
        en: "European Train Control System",
        points: [
          "把行車許可與速度監控帶到車上設備。",
          "不同 Level 使用不同的資訊傳輸方式。",
          "核心仍是確保列車不超越允許範圍。",
        ],
      },
      {
        zh: "行車許可",
        en: "Movement Authority",
        points: [
          "定義列車可以前進到哪裡。",
          "會依路線狀態、前車位置、進路條件更新。",
          "車上設備用它來監控列車是否安全運行。",
        ],
      },
      {
        zh: "RBC",
        en: "Radio Block Center",
        points: [
          "在 ETCS Level 2 中負責計算並傳送行車許可。",
          "透過無線與列車交換位置與授權資訊。",
          "它屬於控制中心/後端層，不是軌旁小設備。",
        ],
      },
    ],
  },
  layout: {
    title: "系統地圖 / System Map",
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
          "進路能不能開放，主要由這一層做安全檢查。",
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
    title: "案例模式 / Point Detection Failure",
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
          "聯鎖負責判斷是否允許行車。",
          "維護與驗收流程負責處置、追蹤與交付判斷。",
        ],
      },
    ],
  },
};

const blockNames = ["A", "B", "C", "D", "E"];
let trainPosition = 2;
let selectedRoute = "A";
let activeEtcsLevel = "1";
let detectionType = "track-circuit";
let ctcMode = "normal";
let activeModule = "learning";
let pointPosition = "normal";
let alarmScenario = "point";
let commissioningStage = 2;
let scenarioStep = 0;

const moduleTitle = document.querySelector("#module-title");
const selectedTerm = document.querySelector("#selected-term");
const systemStatus = document.querySelector("#system-status");
const statusDot = document.querySelector("#route-status-dot");
const knowledgeTitle = document.querySelector("#knowledge-title");
const knowledgeGrid = document.querySelector("#knowledge-grid");
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
const protectionExplanation = document.querySelector("#protection-explanation");
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

function centerBoxLabel(titleElement, subtitleElement, title, subtitle, box) {
  const centerX = box.x + box.width / 2;
  const centerY = box.y + box.height / 2;
  const maxWidth = box.width - 28;
  centerSvgText(titleElement, title, centerX, centerY - 12, maxWidth);
  centerSvgText(subtitleElement, subtitle, centerX, centerY + 14, maxWidth);
}

function setStatus(text, tone = "green") {
  systemStatus.textContent = text;
  statusDot.className = `status-dot ${tone}`;
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

function renderLearningMap() {
  const mapGroup = document.querySelector("#learning-map");
  mapGroup.replaceChildren();
  mapGroup.setAttribute("transform", "translate(0 -170)");

  const steps = [
    {
      number: "01",
      title: "鐵道專案總覽",
      subtitle: "Railway Project",
      x: 82,
      y: 46,
      width: 182,
      type: "foundation",
    },
    {
      number: "02",
      title: "系統總覽",
      subtitle: "System Map",
      x: 300,
      y: 46,
      width: 166,
      type: "system",
      target: "layout",
    },
    {
      number: "03",
      title: "號誌核心",
      subtitle: "Signalling Core",
      x: 510,
      y: 46,
      width: 186,
      type: "signaling",
      target: "detection",
    },
    {
      number: "04",
      title: "行車控制",
      subtitle: "Train Control",
      x: 740,
      y: 46,
      width: 174,
      type: "control",
      target: "protection",
    },
    {
      number: "05",
      title: "測試驗收",
      subtitle: "Commissioning",
      x: 390,
      y: 314,
      width: 188,
      type: "delivery",
      target: "commissioning",
    },
  ];

  mapGroup.append(
    svgEl("path", { class: "learning-route", d: "M 264 80 L 300 80" }),
    svgEl("path", { class: "learning-route", d: "M 466 80 L 510 80" }),
    svgEl("path", { class: "learning-route", d: "M 696 80 L 740 80" }),
    svgEl("path", { class: "learning-route", d: "M 828 112 C 784 212, 654 312, 578 341" }),
    svgEl("path", { class: "learning-route muted", d: "M 390 341 C 276 306, 190 218, 164 118" }),
    svgEl("text", { class: "learning-caption", x: 84, y: 410 }),
    svgEl("text", { class: "learning-caption", x: 84, y: 432 })
  );
  mapGroup.children[5].textContent = "Recommended path: project context -> signalling core -> train control -> testing and handover";
  mapGroup.children[6].textContent = "Use this map as the opening story, then jump into each simulator for details.";

  steps.forEach((step) => {
    const group = svgEl("g", { class: `learning-node ${step.type}` });
    group.append(
      svgEl("rect", { x: step.x, y: step.y, width: step.width, height: 82, rx: 8 }),
      svgEl("circle", { cx: step.x + 24, cy: step.y + 24, r: 15 }),
      svgEl("text", { class: "learning-number" }),
      svgEl("text", { class: "learning-title" }),
      svgEl("text", { class: "learning-subtitle" })
    );
    centerSvgText(group.children[2], step.number, step.x + 24, step.y + 24, 16);
    centerSvgText(group.children[3], step.title, step.x + 50 + (step.width - 62) / 2, step.y + 33, step.width - 62);
    centerSvgText(group.children[4], step.subtitle, step.x + 50 + (step.width - 62) / 2, step.y + 61, step.width - 62);
    mapGroup.append(group);
  });

  const coreItems = [
    ["列車偵測", "Train Detection", 196, 190],
    ["轉轍器", "Point Machine", 352, 216],
    ["聯鎖", "Interlocking", 508, 190],
    ["閉塞", "Block Sections", 664, 216],
  ];
  coreItems.forEach(([title, subtitle, x, y]) => {
    const group = svgEl("g", { class: "learning-chip" });
    group.append(
      svgEl("rect", { x, y, width: 148, height: 66, rx: 8 }),
      svgEl("text", { class: "layout-text" }),
      svgEl("text", { class: "layout-subtext" })
    );
    centerBoxLabel(group.children[1], group.children[2], title, subtitle, { x, y, width: 148, height: 66 });
    mapGroup.append(group);
  });

  setStatus("學習路徑", "green");
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
      `${redSignal} 顯示紅燈，因為列車正在佔用 Block A；後方沒有前一架號誌需要顯示黃燈。`;
  } else {
    blockExplanation.textContent =
      `${redSignal} 顯示紅燈，代表該閉塞區間已被佔用；${yellowSignal} 顯示黃燈，提醒駕駛下一個區間受限，必須準備停車。`;
  }

  if (trainPosition === 1) setStatus("後方保護中", "yellow");
  else if (trainPosition === 5) setStatus("終端區間佔用", "red");
  else setStatus("允許行車", "green");
}

function renderLayout() {
  const layoutGroup = document.querySelector("#layout-equipment");
  layoutGroup.replaceChildren();

  layoutGroup.append(
    svgEl("rect", { class: "block-zone", x: 105, y: 188, width: 175, height: 120, rx: 8 }),
    svgEl("rect", { class: "block-zone", x: 280, y: 188, width: 180, height: 120, rx: 8 }),
    svgEl("rect", { class: "block-zone", x: 460, y: 188, width: 175, height: 120, rx: 8 }),
    svgEl("text", { class: "block-text" }),
    svgEl("text", { class: "block-text" }),
    svgEl("text", { class: "block-text" })
  );
  centerSvgText(layoutGroup.children[3], "Block A", 192.5, 326, 120);
  centerSvgText(layoutGroup.children[4], "Block B", 370, 326, 124);
  centerSvgText(layoutGroup.children[5], "Block C", 547.5, 326, 120);

  layoutGroup.append(
    svgEl("path", { class: "layout-link", d: "M 192 188 L 192 122 L 212 122" }),
    svgEl("path", { class: "layout-link", d: "M 410 188 L 410 122 L 430 122" }),
    svgEl("path", { class: "layout-link", d: "M 348 235 L 348 386 L 380 386" }),
    svgEl("path", { class: "layout-link", d: "M 620 235 L 620 386 L 646 386" }),
    svgEl("path", { class: "layout-link", d: "M 724 188 L 724 154 L 804 154" }),
    svgEl("path", { class: "layout-link", d: "M 596 278 L 596 324 L 564 324" }),
    svgEl("path", { class: "layout-control-link", d: "M 548 96 C 594 64, 634 64, 674 84" }),
    svgEl("path", { class: "layout-control-link", d: "M 790 82 C 820 58, 852 58, 884 82" }),
    svgEl("path", { class: "layout-control-link", d: "M 690 138 C 638 164, 574 168, 516 148" })
  );

  drawSignal(layoutGroup, 116, 142, "green", "S1");
  drawSignal(layoutGroup, 298, 142, "yellow", "S2");
  drawSignal(layoutGroup, 478, 142, "red", "S3");

  drawLayoutDevice(layoutGroup, 204, 86, 166, 66, "trackside", "軌道電路", "Track Circuit");
  drawLayoutDevice(layoutGroup, 422, 86, 164, 66, "trackside", "計軸器", "Axle Counter");
  drawLayoutDevice(layoutGroup, 430, 18, 148, 62, "station", "聯鎖", "Interlocking");
  drawLayoutDevice(layoutGroup, 376, 356, 166, 66, "trackside", "轉轍器", "Point Machine");
  drawLayoutDevice(layoutGroup, 672, 48, 158, 66, "control", "CTC", "Control Center");
  drawLayoutDevice(layoutGroup, 640, 124, 170, 66, "control", "告警維護", "Alarm / Maint.");
  drawLayoutDevice(layoutGroup, 104, 356, 178, 66, "control", "測試驗收", "Commissioning");
  drawLayoutDevice(layoutGroup, 872, 48, 118, 66, "control", "RBC", "Radio Block");
  drawLayoutDevice(layoutGroup, 820, 124, 168, 66, "trackside", "平交道", "Level Crossing");
  drawLayoutDevice(layoutGroup, 642, 356, 166, 66, "onboard", "車上 ATP", "Onboard ATP");
  drawBalise(layoutGroup, 540, 282);
  drawTrain(layoutGroup, 665, 244, "Train");

  layoutGroup.append(
    svgEl("line", { class: "barrier closed", x1: 672, y1: 220, x2: 750, y2: 220 }),
    svgEl("line", { class: "barrier closed", x1: 698, y1: 286, x2: 776, y2: 286 }),
    svgEl("circle", { class: "sensor-dot", cx: 438, cy: 235, r: 10 }),
    svgEl("circle", { class: "sensor-dot", cx: 568, cy: 235, r: 10 })
  );
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
  let text = "進路已鎖定";
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
    text = "月台佔用，拒絕進路";
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
      ? "道岔位置 / Switch Position：維持直向，通往月台 A"
      : "道岔位置 / Switch Position：轉向，通往月台 B"
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
  const statusText = routeOkay ? "道岔可用" : "禁止開放進路";

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
      : "鎖定狀態 / Locking：未鎖定，列車通過前不可開放進路"
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
      actions: ["確認道岔位置偵測是否一致。", "暫停相關進路開放。", "通知現場檢查轉轍器與鎖定機構。"],
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
      actions: ["確認是否有列車或工程車佔用。", "限制相關區間進路與號誌開放。", "檢查軌道電路、計軸器或現場回報。"],
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
  centerBoxLabel(alarmGroup.children[12], alarmGroup.children[13], "Owner", "Signaling Maint.", {
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
      zh: "設計確認",
      en: "Design Review",
      shortEn: "Design",
      actions: ["確認設計圖、點位表與測試案例一致。", "釐清號誌、道岔、偵測與控制中心介面。", "未釐清項目需先列入追蹤。"],
    },
    {
      zh: "現場檢查",
      en: "Site Inspection",
      shortEn: "Site",
      actions: ["確認設備安裝位置、標籤與線路。", "檢查供電、接地、通訊與現場可接近性。", "現場狀態需符合測試前置條件。"],
    },
    {
      zh: "I/O 測試",
      en: "I/O Test",
      shortEn: "I/O",
      actions: ["確認每個輸入與輸出點位對應正確。", "記錄測試結果、缺失與復測狀態。", "通過後才能進入聯鎖邏輯測試。"],
    },
    {
      zh: "聯鎖測試",
      en: "Logic Test",
      shortEn: "Logic",
      actions: ["測正常進路、衝突進路與拒絕條件。", "確認道岔、號誌、軌道佔用條件互相一致。", "測試結果要能追溯到測試案例。"],
    },
    {
      zh: "故障情境",
      en: "Failure Test",
      shortEn: "Failure",
      actions: ["模擬通訊中斷、道岔不到位與異常佔用。", "確認系統進入保守或降級狀態。", "告警、紀錄與現場處置流程都要被驗證。"],
    },
    {
      zh: "試運轉",
      en: "Trial Run",
      shortEn: "Trial",
      actions: ["在接近營運條件下觀察系統穩定性。", "確認操作員、維護人員與現場流程銜接。", "持續追蹤殘留問題與改善項目。"],
    },
    {
      zh: "交付驗收",
      en: "Handover",
      shortEn: "Handover",
      actions: ["彙整測試紀錄、缺失清單與復測證據。", "確認操作維護文件與教育訓練準備完成。", "完成簽核後才進入正式交付。"],
    },
  ];

  const issueFound = commissioningIssue.checked;
  const active = stages[commissioningStage];
  commissioningStageValue.textContent = active.zh;

  board.append(
    svgEl("rect", { class: "layout-device control", x: 72, y: 62, width: 856, height: 296, rx: 10 }),
    svgEl("text", { class: "diagram-label" }),
    svgEl("line", { class: issueFound ? "occupied-cable" : "clear-cable", x1: 150, y1: 215, x2: 850, y2: 215 })
  );
  centerSvgText(board.children[1], "Testing Flow / 測試與驗收流程", 500, 104, 720);

  stages.forEach((stage, index) => {
    const x = 92 + index * 122;
    const isActive = index === commissioningStage;
    const isDone = index < commissioningStage && !issueFound;
    const isBlocked = issueFound && index >= commissioningStage;
    const stateClass = isActive ? (issueFound ? "red" : "yellow") : isDone ? "green" : isBlocked ? "red" : "";
    board.append(
      svgEl("rect", { class: `test-step ${stateClass}`, x, y: 148, width: 106, height: 98, rx: 8 }),
      svgEl("text", { class: "layout-text" }),
      svgEl("text", { class: "layout-subtext" })
    );
    centerBoxLabel(
      board.children[board.children.length - 2],
      board.children[board.children.length - 1],
      stage.zh,
      stage.shortEn,
      { x, y: 148, width: 106, height: 98 }
    );
  });

  board.append(
    svgEl("rect", { class: `alarm-row ${issueFound ? "red" : "yellow"}`, x: 270, y: 276, width: 460, height: 54, rx: 8 }),
    svgEl("text", { class: "layout-text" })
  );
  centerSvgText(
    board.lastChild,
    issueFound ? `缺失阻塞 / Issue blocks ${active.en}` : `目前階段 / Current stage: ${active.en}`,
    500,
    303,
    420
  );

  commissioningActions.replaceChildren();
  active.actions.forEach((action) => {
    const item = document.createElement("li");
    item.textContent = action;
    commissioningActions.append(item);
  });

  setStatus(issueFound ? "缺失待復測" : "測試進行中", issueFound ? "red" : "yellow");
}

function renderScenario() {
  const board = document.querySelector("#scenario-board");
  board.replaceChildren();

  const steps = [
    {
      title: "轉轍器命令",
      status: "等待回報",
      tone: "yellow",
      actions: ["聯鎖命令轉轍器轉到 Reverse。", "等待現場設備回報位置偵測。", "此時尚未允許開放進路。"],
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
  centerBoxLabel(board.children[2], board.children[3], "轉轍器", scenarioStep >= 1 ? "No Detection" : "Command Reverse", {
    x: 238,
    y: 88,
    width: 168,
    height: 72,
  });
  centerBoxLabel(board.children[5], board.children[6], "聯鎖", scenarioStep >= 2 ? "Route Denied" : "Checking", {
    x: 452,
    y: 88,
    width: 140,
    height: 72,
  });
  centerBoxLabel(board.children[8], board.children[9], "告警維護", scenarioStep >= 3 ? "Critical Alarm" : "Monitoring", {
    x: 634,
    y: 88,
    width: 166,
    height: 72,
  });
  centerBoxLabel(board.children[11], board.children[12], "測試驗收", scenarioStep >= 4 ? "Retest Required" : "Evidence", {
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
  centerSvgText(equipmentGroup.lastChild, "Balise / 應答器", 455, 340, 150);

  if (activeEtcsLevel === "1") {
    radioWave.classList.add("hidden");
    equipmentGroup.append(
      svgEl("text", { class: "diagram-label" }),
      svgEl("text", { class: "diagram-label" })
    );
    centerSvgText(equipmentGroup.children[equipmentGroup.children.length - 2], "Level 1：路旁設備 + 應答器傳遞資訊", 300, 135, 360);
    centerSvgText(equipmentGroup.children[equipmentGroup.children.length - 1], "Movement Authority 由地面資訊更新", 720, 135, 320);
    etcsFlow.innerHTML =
      "<li>路旁號誌與聯鎖決定可通行範圍</li><li>Balise / 應答器在固定位置傳送資料</li><li>車上設備依資料監控速度與行車許可</li>";
    setStatus("Level 1 模式", "yellow");
  } else {
    radioWave.classList.remove("hidden");
    equipmentGroup.append(
      svgEl("rect", { class: "rbc-box", x: 445, y: 56, width: 125, height: 62, rx: 8 }),
      svgEl("text", { class: "block-text" }),
      svgEl("text", { class: "diagram-label" })
    );
    centerSvgText(equipmentGroup.children[equipmentGroup.children.length - 2], "RBC", 507.5, 88, 92);
    centerSvgText(equipmentGroup.children[equipmentGroup.children.length - 1], "Level 2：透過無線通訊更新行車許可", 338, 135, 420);
    etcsFlow.innerHTML =
      "<li>列車位置回報給 RBC / 無線閉塞中心</li><li>RBC 持續計算 Movement Authority / 行車許可</li><li>車上設備以無線更新資訊，不只依賴固定點傳輸</li>";
    setStatus("Level 2 模式", "green");
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

function renderProtection() {
  const equipmentGroup = document.querySelector("#protection-equipment");
  const trainGroup = document.querySelector("#protection-train");
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
  protectionExplanation.textContent =
    speed > limit
      ? `列車速度 ${speed} km/h 已超過允許速度 ${limit} km/h，ATP 會觸發警告並介入煞車。`
      : speed > 75
        ? `列車速度 ${speed} km/h 接近允許速度 ${limit} km/h，ATP 會提高監控並提示駕駛注意。`
        : `列車速度 ${speed} km/h 低於允許速度 ${limit} km/h，ATP 持續監控但不介入。`;
  setStatus(statusText, statusTone);
}

function renderCtc() {
  const networkGroup = document.querySelector("#ctc-network");
  networkGroup.replaceChildren();
  const stations = [
    { name: "Station A", x: 130, y: 230 },
    { name: "Station B", x: 390, y: 230 },
    { name: "Station C", x: 650, y: 230 },
    { name: "Yard", x: 840, y: 310 },
  ];
  const blocked = ctcMode === "maintenance";
  const delayed = ctcMode === "delay";

  networkGroup.append(
    svgEl("rect", { class: "rbc-box", x: 400, y: 55, width: 205, height: 70, rx: 8 }),
    svgEl("text", { class: "block-text" }),
    svgEl("path", { class: "data-link", d: "M 500 126 L 500 190" }),
    svgEl("line", { class: blocked ? "occupied-cable" : "clear-cable", x1: 130, y1: 230, x2: 840, y2: 310 })
  );
  centerSvgText(networkGroup.children[1], "Control Center / 控制中心", 502.5, 90, 166);

  stations.forEach((station, index) => {
    const stationBlocked = blocked && index === 2;
    const fillClass = stationBlocked ? "block-zone occupied" : "ctc-node";
    networkGroup.append(
      svgEl("rect", { class: fillClass, x: station.x - 62, y: station.y - 34, width: 124, height: 68, rx: 8 }),
      svgEl("text", { class: "block-text" })
    );
    centerSvgText(networkGroup.lastChild, station.name, station.x, station.y, 96);
  });

  if (delayed) drawTrain(networkGroup, 505, 230, "Late");
  else drawTrain(networkGroup, blocked ? 265 : 720, blocked ? 230 : 280, "T");

  if (ctcMode === "normal") {
    ctcExplanation.textContent = "中心可看到各站進路與區間佔用，並維持列車依序運轉。";
    setStatus("全線監控中", "green");
  } else if (ctcMode === "delay") {
    ctcExplanation.textContent = "列車延誤時，CTC 協助調度員觀察前後車間隔，必要時調整待避或發車順序。";
    setStatus("延誤調度", "yellow");
  } else {
    ctcExplanation.textContent = "維修封鎖時，CTC 會標示不可用區間，避免進路被建立到封鎖範圍內。";
    setStatus("維修封鎖", "red");
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
  centerSvgText(equipmentGroup.lastChild, approaching ? "Warning active / 警示啟動" : "Road open / 道路開放", 500, 360, 280);

  if (approaching) drawTrain(trainGroup, 250, 235, "Approach");
  crossingExplanation.textContent = approaching
    ? "列車進入接近區段後，平交道先啟動閃光與警鈴，再放下柵欄，保護道路車輛不進入軌道。"
    : "目前沒有列車接近，平交道維持開放，道路車輛可通行。";
  setStatus(approaching ? "警示啟動" : "道路開放", approaching ? "red" : "green");
}

function renderCurrentConcept() {
  if (activeModule === "learning") renderLearningMap();
  if (activeModule === "layout") renderLayout();
  if (activeModule === "scenario") renderScenario();
  if (activeModule === "blocks") renderBlocks();
  if (activeModule === "interlocking") renderInterlocking();
  if (activeModule === "point") renderPoint();
  if (activeModule === "detection") renderDetection();
  if (activeModule === "protection") renderProtection();
  if (activeModule === "ctc") renderCtc();
  if (activeModule === "alarm") renderAlarm();
  if (activeModule === "commissioning") renderCommissioning();
  if (activeModule === "crossing") renderCrossing();
  if (activeModule === "etcs") renderEtcs();
}

function switchModule(moduleName) {
  activeModule = moduleName;
  document.querySelectorAll(".nav-item").forEach((button) => {
    button.classList.toggle("active", button.dataset.module === moduleName);
  });
  document.querySelectorAll(".diagram-layer").forEach((layer) => layer.classList.add("hidden"));
  document.querySelectorAll(".module-panel").forEach((panel) => panel.classList.remove("active"));
  const viewClass = activeModule === "blocks" ? "blocks" : activeModule;
  document.querySelector(`.${viewClass}-view`).classList.remove("hidden");
  document.querySelector(`#panel-${activeModule}`).classList.add("active");
  moduleTitle.textContent = modules[activeModule].title;
  selectedTerm.textContent = modules[activeModule].term;
  renderKnowledge(activeModule);
  renderCurrentConcept();
}

document.querySelectorAll(".nav-item").forEach((button) => {
  button.addEventListener("click", () => switchModule(button.dataset.module));
});

document.querySelectorAll("[data-jump-module]").forEach((button) => {
  button.addEventListener("click", () => switchModule(button.dataset.jumpModule));
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
speedSlider.addEventListener("input", renderProtection);

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

renderKnowledge(activeModule);
renderLearningMap();
