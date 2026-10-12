import re
import json

html_path = "/Users/kevinkuo/Library/CloudStorage/GoogleDrive-kevink0826@gmail.com/.shortcut-targets-by-id/1p2jL3jwcz4HA6W3KcjVaK2lcDLptkBY4/環會檔案/台船防蝕營建檔案/台船防蝕及台船營造工程精進及提昇方案_簡報_視覺優化版_20261014.html"
with open(html_path, "r", encoding="utf-8") as f:
    raw = f.read()

# Extract original CSS
style_m = re.search(r"<style>(.*?)</style>", raw, re.DOTALL)
orig_css = style_m.group(1) if style_m else ""

# Extract slides
starts = [m.start() for m in re.finditer(r"""<div class=["'"']slide(?:\s+[^"'"']*)?["'"']""", raw)]
end_body = raw.rfind("</div>\n</body>")
if end_body == -1: end_body = raw.rfind("</div>\r\n</body>")
if end_body == -1: end_body = raw.rfind("</body>")

slides = []
for i in range(len(starts)):
    s_idx = starts[i]
    e_idx = starts[i+1] if i + 1 < len(starts) else end_body
    slide_html = raw[s_idx:e_idx].strip()
    slides.append(slide_html)

slide_info = []
for i, s in enumerate(slides):
    pill_m = re.search(r"class=\"category-pill\">(.*?)</div>", s, re.DOTALL)
    pill = re.sub(r"<[^>]+>", "", pill_m.group(1)).strip() if pill_m else ""
    
    t_m = re.search(r"class=\"slide-title\">(.*?)</div>", s, re.DOTALL)
    if not t_m: t_m = re.search(r"class=\"cover-title\">(.*?)</div>", s, re.DOTALL)
    if not t_m: t_m = re.search(r"class=\"end-title\">(.*?)</div>", s, re.DOTALL)
    if not t_m: t_m = re.search(r"<h1[^>]*>(.*?)</h1>", s, re.DOTALL)
    title = re.sub(r"<[^>]+>", "", t_m.group(1)).strip() if t_m else f"第 {i+1} 頁"
    
    sub_m = re.search(r"class=\"slide-subtitle\">(.*?)</div>", s, re.DOTALL)
    if not sub_m: sub_m = re.search(r"class=\"cover-subtitle\">(.*?)</div>", s, re.DOTALL)
    sub = re.sub(r"<[^>]+>", "", sub_m.group(1)).strip() if sub_m else ""
    
    slide_info.append({"index": i+1, "pill": pill, "title": title, "sub": sub})

print(f"Loaded {len(slides)} slides.")

# Generate option elements
options_html = []
for info in slide_info:
    pill_prefix = f"[{info['pill']}] " if info['pill'] else ""
    opt = f"""<option value="{info['index']}">{info['index']:02d}. {pill_prefix}{info['title']}</option>"""
    options_html.append(opt)

options_str = "\n".join(options_html)

# Generate grid cards
cards_html = []
for info in slide_info:
    pill_tag = f"""<span class="card-pill">{info['pill']}</span>""" if info['pill'] else ""
    sub_tag = f"""<div class="card-sub">{info['sub']}</div>""" if info['sub'] else ""
    card = f"""
    <div class="overview-card" data-index="{info['index']}" onclick="jumpToSlide({info['index']})">
        <div class="card-header-line">
            <span class="card-num">#{info['index']:02d}</span>
            {pill_tag}
        </div>
        <div class="card-name">{info['title']}</div>
        {sub_tag}
    </div>
    """
    cards_html.append(card)

cards_str = "\n".join(cards_html)

# Construct final index.html
final_html = f"""<!DOCTYPE html>
<html lang="zh-TW">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>台船營造工程低碳韌性及場域風險精進方案 ｜ 簡報線上瀏覽系統 (2026.10.14)</title>
    <meta name="description" content="台船營造工程低碳韌性及場域風險精進方案：以第一期小船塢為發動機，推動智慧工安、結構監測、BIM三維平台與低碳合約精進。">
    <link rel="icon" type="image/svg+xml" href="favicon.svg">
    
    <!-- Base slide original styles -->
    <style>
{orig_css}
    </style>

    <!-- Web App & Presentation Interactive Styles -->
    <style>
    :root {{
        --slide-w: 1536px;
        --slide-h: 864px;
        --primary: #0A4D2E;
        --primary-hover: #083D24;
        --accent: #10B981;
        --dark-bg: #090D16;
        --card-dark: #131B2E;
        --nav-h: 56px;
    }}
    * {{
        box-sizing: border-box;
    }}
    html, body {{
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        background-color: var(--dark-bg);
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang TC", "Hiragino Sans GB", "Microsoft JhengHei", "Noto Sans TC", sans-serif;
        color: #0F172A;
        overflow: hidden;
        -webkit-font-smoothing: antialiased;
    }}

    /* Top Navigation Bar */
    #topNavbar {{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: var(--nav-h);
        background: rgba(15, 23, 42, 0.96);
        backdrop-filter: blur(14px);
        -webkit-backdrop-filter: blur(14px);
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 16px;
        z-index: 100;
        color: #F8FAFC;
    }}
    #progressBar {{
        position: absolute;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(90deg, #10B981, #0A4D2E, #38BDF8);
        width: 3.7%;
        transition: width 0.25s ease;
        z-index: 101;
    }}

    .nav-left {{
        display: flex;
        align-items: center;
        gap: 14px;
        min-width: 260px;
    }}
    .nav-brand {{
        display: flex;
        align-items: center;
        gap: 10px;
        text-decoration: none;
        color: #FFFFFF;
        font-weight: 700;
        font-size: 15px;
        letter-spacing: -0.01em;
    }}
    .nav-badge {{
        background: rgba(16, 185, 129, 0.18);
        border: 1px solid rgba(16, 185, 129, 0.4);
        color: #34D399;
        font-size: 12px;
        padding: 2px 8px;
        border-radius: 999px;
        font-weight: 600;
        letter-spacing: 0.02em;
    }}

    .nav-center {{
        display: flex;
        align-items: center;
        gap: 10px;
        flex: 1;
        justify-content: center;
        max-width: 600px;
    }}
    .nav-btn {{
        background: rgba(255, 255, 255, 0.08);
        border: 1px solid rgba(255, 255, 255, 0.15);
        color: #F1F5F9;
        padding: 6px 14px;
        border-radius: 8px;
        font-size: 13px;
        font-weight: 600;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        gap: 6px;
        transition: all 0.15s ease;
        white-space: nowrap;
        user-select: none;
    }}
    .nav-btn:hover {{
        background: rgba(255, 255, 255, 0.16);
        border-color: rgba(255, 255, 255, 0.3);
        color: #FFFFFF;
        transform: translateY(-1px);
    }}
    .nav-btn:active {{
        transform: translateY(0);
    }}
    .nav-btn.primary {{
        background: var(--primary);
        border-color: rgba(16, 185, 129, 0.4);
        color: #FFFFFF;
    }}
    .nav-btn.primary:hover {{
        background: var(--primary-hover);
        box-shadow: 0 4px 12px rgba(10, 77, 46, 0.4);
    }}

    .slide-select {{
        background: rgba(255, 255, 255, 0.08);
        border: 1px solid rgba(255, 255, 255, 0.18);
        color: #F8FAFC;
        padding: 6px 12px;
        border-radius: 8px;
        font-size: 13px;
        font-weight: 500;
        outline: none;
        max-width: 380px;
        cursor: pointer;
        transition: border-color 0.15s;
    }}
    .slide-select:focus {{
        border-color: var(--accent);
    }}
    .slide-select option {{
        background: #1E293B;
        color: #F8FAFC;
    }}

    .nav-right {{
        display: flex;
        align-items: center;
        gap: 10px;
        min-width: 260px;
        justify-content: flex-end;
    }}

    /* Presentation Viewport */
    #stageContainer {{
        position: absolute;
        top: var(--nav-h);
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        background: var(--dark-bg);
        user-select: none;
    }}
    #stage {{
        width: 1536px;
        height: 864px;
        position: relative;
        transform-origin: center center;
        box-shadow: 0 25px 60px -15px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(255,255,255,0.08);
        border-radius: 10px;
        background: #F8FAFC;
        flex-shrink: 0;
        overflow: hidden;
        transition: transform 0.12s ease-out;
    }}

    /* Deck Mode Slides */
    .deck-mode .slide {{
        position: absolute !important;
        top: 0 !important;
        left: 0 !important;
        width: 1536px !important;
        height: 864px !important;
        display: none !important;
        opacity: 0 !important;
        margin: 0 !important;
        border-radius: 10px;
        transition: opacity 0.2s ease;
    }}
    .deck-mode .slide.active {{
        display: flex !important;
        opacity: 1 !important;
        z-index: 5 !important;
    }}

    /* Floating Chevrons */
    .nav-chevron {{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 48px;
        height: 48px;
        border-radius: 50%;
        background: rgba(15, 23, 42, 0.65);
        border: 1px solid rgba(255, 255, 255, 0.18);
        color: #FFFFFF;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        z-index: 30;
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        transition: all 0.2s ease;
        opacity: 0.35;
    }}
    #stageContainer:hover .nav-chevron {{
        opacity: 0.85;
    }}
    .nav-chevron:hover {{
        opacity: 1 !important;
        background: rgba(10, 77, 46, 0.95);
        border-color: #34D399;
        transform: translateY(-50%) scale(1.1);
        box-shadow: 0 8px 20px rgba(0,0,0,0.4);
    }}
    .nav-chevron.prev {{ left: 20px; }}
    .nav-chevron.next {{ right: 20px; }}

    /* Bottom Floating Status Bar */
    #floatingBar {{
        position: fixed;
        bottom: 18px;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(15, 23, 42, 0.88);
        backdrop-filter: blur(14px);
        -webkit-backdrop-filter: blur(14px);
        border: 1px solid rgba(255, 255, 255, 0.16);
        border-radius: 999px;
        padding: 6px 18px;
        display: flex;
        align-items: center;
        gap: 14px;
        z-index: 50;
        color: #F8FAFC;
        font-size: 13px;
        font-weight: 500;
        box-shadow: 0 12px 28px -6px rgba(0,0,0,0.45);
        transition: opacity 0.25s ease, transform 0.25s ease;
        pointer-events: auto;
    }}
    .page-indicator {{
        font-weight: 700;
        color: #34D399;
    }}
    .slide-current-title {{
        color: #CBD5E1;
        max-width: 420px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }}

    /* Scroll Mode Layout */
    body.scroll-mode {{
        overflow-y: auto !important;
        overflow-x: hidden !important;
    }}
    .scroll-mode #stageContainer {{
        position: static !important;
        margin-top: var(--nav-h) !important;
        display: block !important;
        padding: 40px 16px 100px 16px !important;
        background: var(--dark-bg) !important;
        min-height: calc(100vh - var(--nav-h)) !important;
        overflow: visible !important;
    }}
    .scroll-mode #stage {{
        width: 100% !important;
        max-width: 1536px !important;
        height: auto !important;
        transform: none !important;
        box-shadow: none !important;
        background: transparent !important;
        margin: 0 auto !important;
        display: flex !important;
        flex-direction: column !important;
        gap: 36px !important;
        align-items: center !important;
    }}
    .scroll-mode .slide-wrapper {{
        width: 100%;
        max-width: 1320px;
        aspect-ratio: 16 / 9;
        position: relative;
        box-shadow: 0 20px 35px -8px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.08);
        border-radius: 12px;
        overflow: hidden;
        background: #F8FAFC;
    }}
    .scroll-mode .slide {{
        position: absolute !important;
        top: 0 !important;
        left: 0 !important;
        width: 1536px !important;
        height: 864px !important;
        display: flex !important;
        opacity: 1 !important;
        margin: 0 !important;
        transform-origin: top left;
    }}
    .scroll-mode .nav-chevron,
    .scroll-mode #floatingBar {{
        display: none !important;
    }}

    /* Overview Modal */
    #overviewModal {{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(9, 13, 22, 0.94);
        backdrop-filter: blur(18px);
        -webkit-backdrop-filter: blur(18px);
        z-index: 200;
        display: none;
        flex-direction: column;
        padding: 24px 32px;
    }}
    #overviewModal.show {{
        display: flex;
    }}
    .overview-top {{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 20px;
        flex-shrink: 0;
    }}
    .overview-heading {{
        font-size: 20px;
        font-weight: 700;
        color: #F8FAFC;
        display: flex;
        align-items: center;
        gap: 12px;
    }}
    .overview-search {{
        background: rgba(255, 255, 255, 0.08);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 10px;
        padding: 10px 18px;
        color: #FFFFFF;
        font-size: 14px;
        width: 380px;
        outline: none;
        transition: all 0.2s;
    }}
    .overview-search:focus {{
        border-color: #34D399;
        background: rgba(255, 255, 255, 0.12);
        box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.2);
    }}
    .overview-grid {{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
        gap: 18px;
        overflow-y: auto;
        padding: 10px 4px 40px 4px;
        flex: 1;
    }}
    .overview-card {{
        background: var(--card-dark);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 14px;
        padding: 18px;
        cursor: pointer;
        transition: all 0.2s ease;
        display: flex;
        flex-direction: column;
        gap: 10px;
        color: #F8FAFC;
        position: relative;
    }}
    .overview-card:hover {{
        transform: translateY(-4px);
        border-color: #34D399;
        background: #1C2640;
        box-shadow: 0 12px 24px -6px rgba(0, 0, 0, 0.5);
    }}
    .overview-card.active-slide {{
        border-color: #34D399;
        background: rgba(10, 77, 46, 0.45);
        box-shadow: 0 0 0 2px #34D399;
    }}
    .card-header-line {{
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
    }}
    .card-num {{
        font-size: 13px;
        font-weight: 800;
        color: #34D399;
        background: rgba(16, 185, 129, 0.15);
        padding: 2px 8px;
        border-radius: 6px;
    }}
    .card-pill {{
        font-size: 11px;
        font-weight: 700;
        color: #94A3B8;
        background: rgba(255, 255, 255, 0.06);
        padding: 2px 8px;
        border-radius: 999px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }}
    .card-name {{
        font-size: 16px;
        font-weight: 700;
        color: #FFFFFF;
        line-height: 1.35;
    }}
    .card-sub {{
        font-size: 13px;
        color: #94A3B8;
        line-height: 1.45;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }}

    /* Help Modal */
    #helpModal {{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.7);
        backdrop-filter: blur(10px);
        z-index: 210;
        display: none;
        align-items: center;
        justify-content: center;
    }}
    #helpModal.show {{
        display: flex;
    }}
    .help-dialog {{
        background: #1E293B;
        border: 1px solid rgba(255, 255, 255, 0.15);
        border-radius: 16px;
        padding: 28px;
        width: 480px;
        max-width: 90vw;
        color: #F8FAFC;
        box-shadow: 0 20px 40px rgba(0,0,0,0.5);
    }}
    .help-title {{
        font-size: 18px;
        font-weight: 700;
        margin-bottom: 16px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }}
    .shortcut-row {{
        display: flex;
        justify-content: space-between;
        padding: 8px 0;
        border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        font-size: 14px;
    }}
    .kbd {{
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.2);
        padding: 2px 8px;
        border-radius: 6px;
        font-family: monospace;
        font-size: 12px;
        color: #38BDF8;
    }}

    /* Fullscreen tweaks */
    :fullscreen #topNavbar {{
        opacity: 0;
        transition: opacity 0.3s ease;
    }}
    :fullscreen #topNavbar:hover {{
        opacity: 1;
    }}
    :fullscreen #stageContainer {{
        top: 0;
        height: 100vh;
    }}

    /* Print Styles */
    @media print {{
        html, body {{
            width: 16in !important;
            height: auto !important;
            overflow: visible !important;
            background-color: #FFFFFF !important;
        }}
        #topNavbar, #floatingBar, .nav-chevron, #overviewModal, #helpModal, #progressBar {{
            display: none !important;
        }}
        #stageContainer, #stage {{
            position: static !important;
            width: 16in !important;
            height: auto !important;
            transform: none !important;
            background: transparent !important;
            box-shadow: none !important;
            padding: 0 !important;
            margin: 0 !important;
            display: block !important;
        }}
        .slide-wrapper {{
            aspect-ratio: auto !important;
            box-shadow: none !important;
            border-radius: 0 !important;
            margin: 0 !important;
        }}
        .slide {{
            width: 16in !important;
            height: 9in !important;
            display: flex !important;
            opacity: 1 !important;
            page-break-after: always !important;
            break-after: page !important;
            position: relative !important;
            transform: none !important;
            box-shadow: none !important;
            border-radius: 0 !important;
        }}
    }}
    </style>
</head>
<body class="deck-mode">

    <!-- Top Navigation Bar -->
    <header id="topNavbar">
        <div id="progressBar"></div>
        <div class="nav-left">
            <a href="#" class="nav-brand" onclick="jumpToSlide(1); return false;">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                    <line x1="8" y1="21" x2="16" y2="21"/>
                    <line x1="12" y1="17" x2="12" y2="21"/>
                </svg>
                <span>台船營造工程低碳韌性及場域風險精進方案</span>
            </a>
            <span class="nav-badge">2026.10.14</span>
        </div>

        <div class="nav-center">
            <button class="nav-btn" onclick="prevSlide()" title="上一頁 (Left Arrow)">◀</button>
            <select id="slideSelect" class="slide-select" onchange="jumpToSlide(parseInt(this.value))">
                {options_str}
            </select>
            <button class="nav-btn" onclick="nextSlide()" title="下一頁 (Right Arrow / Space)">▶</button>
        </div>

        <div class="nav-right">
            <button class="nav-btn" onclick="toggleOverview()" title="總覽所有投影片 (G)">⊞ 總覽</button>
            <button class="nav-btn" id="modeBtn" onclick="toggleMode()" title="切換閱讀模式 (M)">📜 連續捲動</button>
            <a href="assets/1014簡報.pdf" download="1014簡報.pdf" class="nav-btn primary" title="下載完整簡報 PDF (11.7MB)">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                <span>下載 PDF</span>
            </a>
            <button class="nav-btn" onclick="toggleFullscreen()" title="全螢幕模式 (F)">⛶</button>
            <button class="nav-btn" onclick="toggleHelp()" title="快捷鍵說明 (?)">?</button>
        </div>
    </header>

    <!-- Presentation Stage Viewport -->
    <main id="stageContainer">
        <!-- Floating Navigation Chevrons -->
        <button class="nav-chevron prev" onclick="prevSlide()" aria-label="上一頁">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="15 18 9 12 15 6"/>
            </svg>
        </button>
        <button class="nav-chevron next" onclick="nextSlide()" aria-label="下一頁">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="9 18 15 12 9 6"/>
            </svg>
        </button>

        <div id="stage">
            <!-- All 27 verified presentation slides -->
            {"".join(slides)}
        </div>
    </main>

    <!-- Floating Status Bar -->
    <div id="floatingBar">
        <span class="page-indicator">第 <span id="currentNum">01</span> / 27 頁</span>
        <span style="color: rgba(255,255,255,0.2);">|</span>
        <span class="slide-current-title" id="currentTitle">台船營造工程低碳韌性及場域風險精進方案</span>
    </div>

    <!-- Overview Modal Drawer -->
    <div id="overviewModal">
        <div class="overview-top">
            <div class="overview-heading">
                <span>⊞ 投影片總覽導覽大廳 (共 27 頁)</span>
                <span class="nav-badge">點選任意頁面直接跳轉</span>
            </div>
            <div style="display: flex; gap: 12px; align-items: center;">
                <input type="text" id="overviewFilter" class="overview-search" placeholder="搜尋投影片關鍵字 (BIM, 局限空間, IFRS, 船塢, 3D)..." oninput="filterOverview(this.value)">
                <button class="nav-btn" onclick="toggleOverview()">✕ 關閉</button>
            </div>
        </div>
        <div class="overview-grid" id="overviewGrid">
            {cards_str}
        </div>
    </div>

    <!-- Keyboard Shortcuts Help Modal -->
    <div id="helpModal" onclick="if(event.target===this) toggleHelp()">
        <div class="help-dialog">
            <div class="help-title">
                <span>⌨ 快捷鍵操作指南</span>
                <button class="nav-btn" onclick="toggleHelp()">✕</button>
            </div>
            <div class="shortcut-row">
                <span>下一頁</span>
                <div><span class="kbd">→</span> <span class="kbd">↓</span> <span class="kbd">Space</span> <span class="kbd">Enter</span></div>
            </div>
            <div class="shortcut-row">
                <span>上一頁</span>
                <div><span class="kbd">←</span> <span class="kbd">↑</span> <span class="kbd">Backspace</span></div>
            </div>
            <div class="shortcut-row">
                <span>首頁 / 末頁</span>
                <div><span class="kbd">Home</span> / <span class="kbd">End</span></div>
            </div>
            <div class="shortcut-row">
                <span>總覽九宮格</span>
                <span class="kbd">G</span>
            </div>
            <div class="shortcut-row">
                <span>簡報 / 連續捲動切換</span>
                <span class="kbd">M</span>
            </div>
            <div class="shortcut-row">
                <span>全螢幕切換</span>
                <span class="kbd">F</span>
            </div>
            <div class="shortcut-row">
                <span>關閉對話框</span>
                <span class="kbd">Esc</span>
            </div>
        </div>
    </div>

    <!-- Application Controller Logic -->
    <script>
    const TOTAL_SLIDES = 27;
    let currentSlide = 1;
    let mode = 'deck'; // 'deck' or 'scroll'
    const slideData = {json.dumps(slide_info, ensure_ascii=False)};

    const stageContainer = document.getElementById('stageContainer');
    const stage = document.getElementById('stage');
    const slideSelect = document.getElementById('slideSelect');
    const progressBar = document.getElementById('progressBar');
    const currentNumEl = document.getElementById('currentNum');
    const currentTitleEl = document.getElementById('currentTitle');
    const modeBtn = document.getElementById('modeBtn');
    const overviewModal = document.getElementById('overviewModal');
    const helpModal = document.getElementById('helpModal');
    const allSlides = Array.from(document.querySelectorAll('#stage .slide'));

    // Resize calculation for 16:9 stage
    function resizeStage() {{
        if (mode === 'scroll') return;
        const availW = stageContainer.clientWidth - 24;
        const availH = stageContainer.clientHeight - 24;
        const scale = Math.min(availW / 1536, availH / 864);
        stage.style.transform = `scale(${{scale}})`;
    }}

    function updateScrollSlideScaling() {{
        if (mode !== 'scroll') return;
        const wrappers = document.querySelectorAll('.slide-wrapper');
        wrappers.forEach(w => {{
            const wWidth = w.clientWidth;
            const scale = wWidth / 1536;
            const innerSlide = w.querySelector('.slide');
            if (innerSlide) {{
                innerSlide.style.transform = `scale(${{scale}})`;
            }}
        }});
    }}

    window.addEventListener('resize', () => {{
        if (mode === 'deck') resizeStage();
        else updateScrollSlideScaling();
    }});

    // Set slide
    function setSlide(idx, updateHistory = true) {{
        if (idx < 1) idx = 1;
        if (idx > TOTAL_SLIDES) idx = TOTAL_SLIDES;
        currentSlide = idx;

        // Update slides visibility
        if (mode === 'deck') {{
            allSlides.forEach((s, i) => {{
                if (i + 1 === currentSlide) {{
                    s.classList.add('active');
                }} else {{
                    s.classList.remove('active');
                }}
            }});
        }} else {{
            // Scroll mode: scroll into view
            const target = document.getElementById(`scroll-slide-${{currentSlide}}`);
            if (target) {{
                target.scrollIntoView({{ behavior: 'smooth', block: 'center' }});
            }}
        }}

        // Update controls
        slideSelect.value = currentSlide;
        progressBar.style.width = `${{(currentSlide / TOTAL_SLIDES) * 100}}%`;
        currentNumEl.textContent = String(currentSlide).padStart(2, '0');
        const info = slideData[currentSlide - 1];
        if (info) {{
            currentTitleEl.textContent = `${{info['pill'] ? info['pill'] + ' · ' : ''}}${{info['title']}}`;
        }}

        // Highlight in overview grid
        document.querySelectorAll('.overview-card').forEach(c => {{
            const cardIdx = parseInt(c.dataset.index);
            if (cardIdx === currentSlide) c.classList.add('active-slide');
            else c.classList.remove('active-slide');
        }});

        if (updateHistory) {{
            window.location.hash = `#${{currentSlide}}`;
        }}
    }}

    function nextSlide() {{
        if (currentSlide < TOTAL_SLIDES) setSlide(currentSlide + 1);
    }}

    function prevSlide() {{
        if (currentSlide > 1) setSlide(currentSlide - 1);
    }}

    function jumpToSlide(idx) {{
        if (overviewModal.classList.contains('show')) {{
            toggleOverview();
        }}
        setSlide(idx);
    }}

    // Mode Toggle
    function toggleMode() {{
        if (mode === 'deck') {{
            mode = 'scroll';
            document.body.classList.remove('deck-mode');
            document.body.classList.add('scroll-mode');
            modeBtn.innerHTML = '📽️ 投影片播放';
            modeBtn.classList.add('primary');

            // Wrap slides in scroll-slide-wrappers if not wrapped
            if (!stage.querySelector('.slide-wrapper')) {{
                const originalSlides = Array.from(stage.children);
                stage.innerHTML = '';
                originalSlides.forEach((s, i) => {{
                    const wrapper = document.createElement('div');
                    wrapper.className = 'slide-wrapper';
                    wrapper.id = `scroll-slide-${{i + 1}}`;
                    wrapper.appendChild(s);
                    stage.appendChild(wrapper);
                }});
            }}
            updateScrollSlideScaling();
            setSlide(currentSlide, false);
        }} else {{
            mode = 'deck';
            document.body.classList.remove('scroll-mode');
            document.body.classList.add('deck-mode');
            modeBtn.innerHTML = '📜 連續捲動';
            modeBtn.classList.remove('primary');

            // Unwrap slides
            const wrappers = Array.from(stage.querySelectorAll('.slide-wrapper'));
            if (wrappers.length > 0) {{
                wrappers.forEach(w => {{
                    const s = w.querySelector('.slide');
                    if (s) {{
                        s.style.transform = '';
                        stage.appendChild(s);
                    }}
                    w.remove();
                }});
            }}
            resizeStage();
            setSlide(currentSlide, false);
        }}
    }}

    // Overview modal
    function toggleOverview() {{
        overviewModal.classList.toggle('show');
        if (overviewModal.classList.contains('show')) {{
            document.getElementById('overviewFilter').value = '';
            filterOverview('');
            setTimeout(() => document.getElementById('overviewFilter').focus(), 100);
            const activeCard = overviewModal.querySelector('.overview-card.active-slide');
            if (activeCard) activeCard.scrollIntoView({{ block: 'nearest' }});
        }}
    }}

    function filterOverview(query) {{
        const q = query.trim().toLowerCase();
        document.querySelectorAll('.overview-card').forEach(c => {{
            const text = c.textContent.toLowerCase();
            if (!q || text.includes(q)) {{
                c.style.display = 'flex';
            }} else {{
                c.style.display = 'none';
            }}
        }});
    }}

    // Help modal
    function toggleHelp() {{
        helpModal.classList.toggle('show');
    }}

    // Fullscreen
    function toggleFullscreen() {{
        if (!document.fullscreenElement) {{
            document.documentElement.requestFullscreen().catch(() => {{}});
        }} else {{
            if (document.exitFullscreen) document.exitFullscreen();
        }}
    }}

    // Keyboard navigation
    window.addEventListener('keydown', (e) => {{
        if (overviewModal.classList.contains('show')) {{
            if (e.key === 'Escape') toggleOverview();
            return;
        }}
        if (helpModal.classList.contains('show')) {{
            if (e.key === 'Escape') toggleHelp();
            return;
        }}

        if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT' || e.target.tagName === 'TEXTAREA') return;

        switch (e.key) {{
            case 'ArrowRight':
            case 'ArrowDown':
            case 'PageDown':
            case ' ':
            case 'Enter':
            case 'n':
            case 'N':
                e.preventDefault();
                nextSlide();
                break;
            case 'ArrowLeft':
            case 'ArrowUp':
            case 'PageUp':
            case 'Backspace':
            case 'p':
            case 'P':
                e.preventDefault();
                prevSlide();
                break;
            case 'Home':
                e.preventDefault();
                setSlide(1);
                break;
            case 'End':
                e.preventDefault();
                setSlide(TOTAL_SLIDES);
                break;
            case 'f':
            case 'F':
                e.preventDefault();
                toggleFullscreen();
                break;
            case 'g':
            case 'G':
                e.preventDefault();
                toggleOverview();
                break;
            case 'm':
            case 'M':
                e.preventDefault();
                toggleMode();
                break;
            case '?':
                e.preventDefault();
                toggleHelp();
                break;
            case 'Escape':
                if (document.fullscreenElement) document.exitFullscreen();
                break;
        }}
    }});

    // Touch swipe support
    let touchStartX = 0;
    let touchStartY = 0;
    stageContainer.addEventListener('touchstart', (e) => {{
        if (mode === 'scroll') return;
        touchStartX = e.changedTouches[0].screenX;
        touchStartY = e.changedTouches[0].screenY;
    }}, {{ passive: true }});

    stageContainer.addEventListener('touchend', (e) => {{
        if (mode === 'scroll') return;
        const diffX = e.changedTouches[0].screenX - touchStartX;
        const diffY = e.changedTouches[0].screenY - touchStartY;
        if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 40) {{
            if (diffX < 0) nextSlide();
            else prevSlide();
        }}
    }}, {{ passive: true }});

    // Hash routing
    function handleHash() {{
        const hash = window.location.hash.replace('#', '');
        const num = parseInt(hash);
        if (!isNaN(num) && num >= 1 && num <= TOTAL_SLIDES) {{
            setSlide(num, false);
        }} else {{
            setSlide(1, false);
        }}
    }}
    window.addEventListener('hashchange', handleHash);

    // Initial setup
    document.addEventListener('DOMContentLoaded', () => {{
        resizeStage();
        handleHash();
    }});
    // Trigger resize now
    resizeStage();
    handleHash();
    </script>
</body>
</html>
"""

with open("/tmp/csbs-bim/index.html", "w", encoding="utf-8") as f:
    f.write(final_html)

print("Generated /tmp/csbs-bim/index.html successfully.")
