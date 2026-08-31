import os
import subprocess
import base64
import fitz

def get_base64_image(image_path):
    with open(image_path, "rb") as image_file:
        encoded = base64.b64encode(image_file.read()).decode('utf-8')
        ext = os.path.splitext(image_path)[1].replace('.', '')
        if ext == 'jpg': ext = 'jpeg'
        return f"data:image/{ext};base64,{encoded}"

def build_vis_html(version_type="A"):
    emblem_b64 = get_base64_image("vis/assets/emblem.png")
    emblem_white_b64 = get_base64_image("vis/assets/emblem_white.png")

    if version_type == "A":
        # Version A: 權威典雅 ‧ 永續會計旗艦版 (Classic Authority & Corporate ESG Guidelines)
        theme_title = "台灣環境管理會計協會"
        theme_en = "Taiwan Environmental Management Accounting Association"
        theme_abbr = "EMAN-TW / CEMA"
        style_desc = "以經典永續會計綠與沉穩治理藍為基底，結合環境會計（EMA）、IFRS S1/S2、碳帳本與實質減碳治理，建立兼具公信力、法定確信與前瞻性的國家級永續品牌形象。"
        font_family = "'Noto Serif TC', 'Songti TC', 'PingFang TC', -apple-system, sans-serif"
        heading_font = "'Noto Serif TC', 'Songti TC', serif"
        primary_color = "#018B3D"
        primary_dark = "#003A1D"
        navy_color = "#0A2540"
        accent_color = "#059669"
        gold_color = "#C5A880"
        bg_card = "#FFFFFF"
        body_bg = "#F8FAFC"
        pill_bg = "#F1F5F9"
        border_color = "#E2E8F0"
        subtitle_tag = "經典權威 ‧ 永續會計旗艦版"
    else:
        # Version B: 現代簡約 ‧ 綠色雙軸創新版 (Modern Minimalist & Circular Innovation Guidelines)
        theme_title = "台灣環境管理會計協會"
        theme_en = "Taiwan Environmental Management Accounting Association"
        theme_abbr = "EMAN-TW / CEMA"
        style_desc = "以明亮科技綠與深邃黑藍建構雙軸轉型視覺語彙，融合數位雙生、碳帳本大數據與 IFRS 永續治理，傳遞敏捷、透明、開放且具國際前瞻視野的創新品牌識別。"
        font_family = "'Inter', 'PingFang TC', 'Noto Sans TC', -apple-system, sans-serif"
        heading_font = "'Inter', 'PingFang TC', 'Noto Sans TC', sans-serif"
        primary_color = "#00A859"
        primary_dark = "#064E3B"
        navy_color = "#081325"
        accent_color = "#10B981"
        gold_color = "#38BDF8"
        bg_card = "#FFFFFF"
        body_bg = "#F4F6F8"
        pill_bg = "#EDF2F7"
        border_color = "#E5E7EB"
        subtitle_tag = "現代極簡 ‧ 綠色雙軸創新版"

    html = f"""<!DOCTYPE html>
<html lang="zh-TW">
<head>
<meta charset="UTF-8">
<title>{theme_title} VIS 規範手冊</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Noto+Sans+TC:wght@300;400;500;700;900&family=Noto+Serif+TC:wght@400;600;700;900&display=swap');

  @page {{
    size: A4 portrait;
    margin: 0;
  }}

  * {{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }}

  body {{
    font-family: {font_family};
    background-color: #CBD5E1;
    color: #1E293B;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }}

  .page {{
    width: 210mm;
    height: 297mm;
    page-break-after: always;
    background-color: {body_bg};
    position: relative;
    padding: 16mm 16mm 14mm 16mm;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
  }}

  .page-footer {{
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 8pt;
    color: #94A3B8;
    border-top: 1px solid #E2E8F0;
    padding-top: 3mm;
    margin-top: 3mm;
    font-family: 'Inter', sans-serif;
  }}

  .card {{
    background-color: {bg_card};
    border-radius: 12px;
    border: 1px solid {border_color};
    padding: 14px 18px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.03);
  }}

  .grid-2 {{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }}

  .grid-3 {{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;
  }}

  .grid-4 {{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 10px;
  }}

  .tag {{
    display: inline-block;
    padding: 4px 12px;
    border-radius: 999px;
    background-color: {pill_bg};
    color: #475569;
    font-size: 8pt;
    font-weight: 500;
    text-align: center;
    font-family: 'Inter', 'PingFang TC', sans-serif;
  }}

  /* Page 1 Hero Layout */
  .hero-container {{
    background: linear-gradient(135deg, {navy_color} 0%, #03180D 100%);
    border-radius: 16px;
    padding: 24px;
    color: white;
    position: relative;
    overflow: hidden;
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }}

  .hero-circle-bg {{
    position: absolute;
    right: -40px;
    top: -40px;
    width: 260px;
    height: 260px;
    border-radius: 50%;
    border: 1px solid rgba(255,255,255,0.08);
    pointer-events: none;
  }}

  .hero-circle-bg-2 {{
    position: absolute;
    right: 30px;
    bottom: -60px;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 1px solid rgba(255,255,255,0.05);
    pointer-events: none;
  }}

  .hero-content {{
    max-width: 58%;
    position: relative;
    z-index: 2;
  }}

  .hero-vis-tag {{
    font-size: 8pt;
    letter-spacing: 2px;
    font-weight: 600;
    color: #94A3B8;
    text-transform: uppercase;
    margin-bottom: 6px;
    font-family: 'Inter', sans-serif;
  }}

  .hero-title {{
    font-family: {heading_font};
    font-size: 20pt;
    font-weight: 800;
    line-height: 1.2;
    color: #FFFFFF;
    margin-bottom: 3px;
  }}

  .hero-title-en {{
    font-size: 9pt;
    font-weight: 400;
    color: #94A3B8;
    margin-bottom: 12px;
    font-family: 'Inter', sans-serif;
  }}

  .hero-desc {{
    font-size: 8.5pt;
    line-height: 1.5;
    color: #CBD5E1;
  }}

  .hero-logo-box {{
    background-color: white;
    border-radius: 14px;
    padding: 16px 20px;
    display: flex;
    align-items: center;
    gap: 14px;
    box-shadow: 0 10px 25px rgba(0,0,0,0.25);
    position: relative;
    z-index: 2;
  }}

  .hero-logo-box img {{
    width: 60px;
    height: 60px;
    object-fit: contain;
  }}

  .hero-logo-text {{
    color: #0F172A;
  }}

  .hero-logo-text .abbr {{
    font-family: 'Inter', sans-serif;
    font-size: 14pt;
    font-weight: 800;
    letter-spacing: 1px;
    color: {primary_color};
    line-height: 1.1;
  }}

  .hero-logo-text .cname {{
    font-size: 8.5pt;
    font-weight: 700;
    color: #1E293B;
    margin-top: 2px;
  }}

  .section-title {{
    font-size: 12pt;
    font-weight: 700;
    color: #0F172A;
    margin-bottom: 4px;
    font-family: {heading_font};
  }}

  .section-desc {{
    font-size: 8pt;
    color: #64748B;
    margin-bottom: 12px;
    line-height: 1.4;
  }}

  .sub-title {{
    font-size: 10pt;
    font-weight: 700;
    color: #0F172A;
    margin-bottom: 4px;
  }}

  .sub-desc {{
    font-size: 7.5pt;
    color: #64748B;
    line-height: 1.35;
  }}

  .banner-preview {{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    padding: 18px;
    background-color: #FFFFFF;
    border-radius: 10px;
    border: 1px solid #E2E8F0;
    margin-top: 8px;
  }}

  .banner-preview img {{
    width: 44px;
    height: 44px;
    object-fit: contain;
  }}

  /* Page 2 Logo Matrix */
  .logo-card {{
    background-color: #FFFFFF;
    border-radius: 12px;
    border: 1px solid #E2E8F0;
    padding: 14px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 150px;
  }}

  .logo-card-head {{
    margin-bottom: 8px;
  }}

  .logo-card-title {{
    font-size: 9pt;
    font-weight: 700;
    color: #0F172A;
  }}

  .logo-card-sub {{
    font-size: 7pt;
    color: #94A3B8;
    margin-top: 1px;
  }}

  .logo-card-body {{
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    background-color: #F8FAFC;
    border-radius: 8px;
  }}

  .safe-space-box {{
    border: 1px dashed #94A3B8;
    background-color: #F8FAFC;
    padding: 24px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    position: relative;
  }}

  .safe-space-marker {{
    position: absolute;
    font-size: 7pt;
    font-family: 'Inter', monospace;
    color: #64748B;
  }}

  /* Page 3 Color & Typography */
  .color-card {{
    border-radius: 10px;
    overflow: hidden;
    border: 1px solid #E2E8F0;
    background-color: white;
  }}

  .color-swatch {{
    height: 60px;
    width: 100%;
  }}

  .color-info {{
    padding: 10px 12px;
  }}

  .color-name {{
    font-size: 8.5pt;
    font-weight: 700;
    color: #0F172A;
  }}

  .color-hex {{
    font-size: 8pt;
    font-family: 'Inter', monospace;
    font-weight: 600;
    color: {primary_color};
    margin: 2px 0 4px 0;
  }}

  .color-usage {{
    font-size: 7pt;
    color: #64748B;
    line-height: 1.3;
  }}

  .type-sample-zh {{
    font-size: 16pt;
    font-weight: 700;
    color: #0F172A;
    margin: 6px 0 4px 0;
    font-family: {heading_font};
  }}

  .type-sample-en {{
    font-size: 14pt;
    font-weight: 700;
    color: #0F172A;
    margin: 6px 0 4px 0;
    font-family: 'Inter', sans-serif;
  }}

  /* Page 4 Applications & Don'ts */
  .app-card {{
    background-color: #FFFFFF;
    border-radius: 10px;
    border: 1px solid #E2E8F0;
    padding: 12px;
    min-height: 115px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }}

  .app-preview-dark {{
    background-color: {navy_color};
    border-radius: 6px;
    padding: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 8pt;
    gap: 8px;
  }}

  .dont-card {{
    background-color: #FFFFFF;
    border-radius: 10px;
    border: 1px solid #F1F5F9;
    padding: 12px;
    text-align: center;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    min-height: 140px;
  }}

  .dont-preview {{
    height: 75px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #F8FAFC;
    border-radius: 6px;
    position: relative;
    overflow: hidden;
  }}

  .dont-cross {{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 48px;
    height: 48px;
    pointer-events: none;
  }}

  .dont-label {{
    font-size: 7.5pt;
    font-weight: 600;
    color: #DC2626;
    margin-top: 8px;
  }}
</style>
</head>
<body>

<!-- ================= PAGE 1: Brand Overview & Core Identity ================= -->
<div class="page">
  <div>
    <!-- Top Hero -->
    <div class="hero-container">
      <div class="hero-circle-bg"></div>
      <div class="hero-circle-bg-2"></div>
      <div class="hero-content">
        <div class="hero-vis-tag">VISUAL IDENTITY SYSTEM ｜ {subtitle_tag}</div>
        <div class="hero-title">{theme_title}</div>
        <div class="hero-title-en">{theme_en}</div>
        <p class="hero-desc">{style_desc}</p>
      </div>

      <div class="hero-logo-box">
        <img src="{emblem_b64}" alt="EMAM Logo">
        <div class="hero-logo-text">
          <div class="abbr">EMAN-TW</div>
          <div class="cname">台灣環境管理會計協會</div>
        </div>
      </div>
    </div>

    <!-- Middle 2 Columns: Brand Positioning & Keywords -->
    <div class="grid-2" style="margin-bottom: 12px;">
      <div class="card">
        <div class="sub-title">品牌定位 (Brand Positioning)</div>
        <p class="sub-desc" style="margin-top: 4px;">
          專注於永續管理會計（EMA）、IFRS S1/S2 氣候實體與轉型風險量化模型、ISO 14064 碳盤查與 14067 碳足跡制度輔導。視覺語氣保持嚴謹、權威、理性與高度公信力，展現專業學術法人地位。
        </p>
      </div>

      <div class="card">
        <div class="sub-title">視覺關鍵字 (Visual Keywords)</div>
        <div style="display: flex; flex-wrap: wrap; gap: 6px; margin-top: 8px;">
          <span class="tag">Sustainable Accounting</span>
          <span class="tag">Evidence-Based</span>
          <span class="tag">IFRS S1/S2 Governance</span>
          <span class="tag">Carbon Ledger</span>
          <span class="tag">Professional Assurance</span>
          <span class="tag">Circular Economics</span>
        </div>
      </div>
    </div>

    <!-- Bottom: Core Identity Assets -->
    <div class="card">
      <div class="sub-title">核心識別資產 (Core Identity Assets)</div>
      <p class="sub-desc">
        以「官方認證綠色徽章圖標 ＋ EMAN-TW 英文簡稱 ＋ 台灣環境管理會計協會 中文標準字」為核心主要識別系統；橫向空間充足時優先採用標準 Banner 組合。
      </p>

      <div class="banner-preview">
        <img src="{emblem_b64}" alt="Logo Emblem">
        <div style="display: flex; align-items: baseline; gap: 10px;">
          <span style="font-family: 'Inter', sans-serif; font-weight: 800; font-size: 16pt; color: {primary_color}; letter-spacing: 0.5px;">EMAN-TW</span>
          <span style="font-size: 14pt; font-weight: 700; color: #0F172A; font-family: {heading_font};">台灣環境管理會計協會</span>
        </div>
      </div>
    </div>
  </div>

  <div class="page-footer">
    <span>台灣環境管理會計協會 視覺識別規範手冊 ｜ {subtitle_tag}</span>
    <span>PAGE 01</span>
  </div>
</div>

<!-- ================= PAGE 2: Logo System ================= -->
<div class="page">
  <div>
    <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 12px; border-bottom: 2px solid {primary_color}; padding-bottom: 6px;">
      <div>
        <div class="section-title">Logo System 標誌系統規範</div>
        <div class="section-desc" style="margin-bottom: 0;">
          Logo 使用核心原則為「完整、留白、比例不變」。在空間充裕時優先使用完整主標誌；橫向版面使用橫式組合；頭像或小尺寸使用獨立圖標。
        </div>
      </div>
      <div style="font-size: 8pt; font-family: 'Inter', sans-serif; color: #94A3B8;">02</div>
    </div>

    <!-- 4 Logo Formats Grid -->
    <div class="grid-2" style="margin-bottom: 12px;">
      <!-- Card 1: 主標誌 (Vertical Lockup) -->
      <div class="logo-card">
        <div class="logo-card-head">
          <div class="logo-card-title">主標誌 (Primary Stacked)</div>
          <div class="logo-card-sub">完整呈現品牌名與圖標，適合封面、封底、認證文件首頁。</div>
        </div>
        <div class="logo-card-body" style="flex-direction: column; text-align: center; gap: 6px;">
          <img src="{emblem_b64}" style="width: 48px; height: 48px; object-fit: contain;">
          <div>
            <div style="font-family: 'Inter', sans-serif; font-weight: 800; font-size: 10pt; color: {primary_color};">EMAN-TW</div>
            <div style="font-size: 8pt; font-weight: 700; color: #0F172A; font-family: {heading_font};">台灣環境管理會計協會</div>
          </div>
        </div>
      </div>

      <!-- Card 2: 橫式組合 (Horizontal Lockup) -->
      <div class="logo-card">
        <div class="logo-card-head">
          <div class="logo-card-title">橫式組合 (Horizontal Lockup)</div>
          <div class="logo-card-sub">適合簡報頁首、網站導覽列、公文信頭、名片或 Email 簽名檔。</div>
        </div>
        <div class="logo-card-body" style="gap: 12px;">
          <img src="{emblem_b64}" style="width: 44px; height: 44px; object-fit: contain;">
          <div>
            <div style="font-family: 'Inter', sans-serif; font-weight: 800; font-size: 11pt; color: {primary_color}; line-height: 1;">EMAN-TW</div>
            <div style="font-size: 8.5pt; font-weight: 700; color: #0F172A; font-family: {heading_font}; margin-top: 3px;">台灣環境管理會計協會</div>
          </div>
        </div>
      </div>

      <!-- Card 3: 圖標 (Emblem / Mark) -->
      <div class="logo-card">
        <div class="logo-card-head">
          <div class="logo-card-title">圖標 (Mark / Emblem)</div>
          <div class="logo-card-sub">適合社群頭像、Favicon、APP 圖標、產品認證浮水印。</div>
        </div>
        <div class="logo-card-body">
          <img src="{emblem_b64}" style="width: 52px; height: 52px; object-fit: contain;">
        </div>
      </div>

      <!-- Card 4: 橫幅標誌 (Banner Lockup) -->
      <div class="logo-card">
        <div class="logo-card-head">
          <div class="logo-card-title">橫幅標誌 (Full-Width Banner)</div>
          <div class="logo-card-sub">適合活動看板、官網頁尾、大型背板與寬幅橫額。</div>
        </div>
        <div class="logo-card-body" style="gap: 10px;">
          <img src="{emblem_b64}" style="width: 32px; height: 32px; object-fit: contain;">
          <span style="font-family: 'Inter', sans-serif; font-weight: 800; font-size: 10pt; color: {primary_color};">EMAN-TW</span>
          <span style="font-size: 9pt; font-weight: 700; color: #0F172A; font-family: {heading_font};">台灣環境管理會計協會</span>
        </div>
      </div>
    </div>

    <!-- Bottom: Clear Space & Safe Area -->
    <div class="card">
      <div class="sub-title">安全留白 (Clear Space & Safe Area)</div>
      <p class="sub-desc" style="margin-bottom: 8px;">
        建議四周至少保留 <strong>x</strong> 的安全空間（x 取圖標內部半徑或 logo 高度的 1/8）。在版面允許的情形下，周遭留白越多越能維持學術權威與專業質感。
      </p>

      <div class="safe-space-box">
        <span class="safe-space-marker" style="top: 6px; left: 50%; transform: translateX(-50%);">x (頂部安全區)</span>
        <span class="safe-space-marker" style="bottom: 6px; left: 50%; transform: translateX(-50%);">x (底部安全區)</span>
        <span class="safe-space-marker" style="left: 8px; top: 50%; transform: translateY(-50%);">x</span>
        <span class="safe-space-marker" style="right: 8px; top: 50%; transform: translateY(-50%);">x</span>

        <img src="{emblem_b64}" style="width: 50px; height: 50px; object-fit: contain;">
        <div>
          <div style="font-family: 'Inter', sans-serif; font-weight: 800; font-size: 14pt; color: {primary_color};">EMAN-TW</div>
          <div style="font-size: 11pt; font-weight: 700; color: #0F172A; font-family: {heading_font};">台灣環境管理會計協會</div>
        </div>
      </div>
    </div>
  </div>

  <div class="page-footer">
    <span>台灣環境管理會計協會 視覺識別規範手冊 ｜ {subtitle_tag}</span>
    <span>PAGE 02</span>
  </div>
</div>

<!-- ================= PAGE 3: Color & Typography ================= -->
<div class="page">
  <div>
    <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 12px; border-bottom: 2px solid {primary_color}; padding-bottom: 6px;">
      <div>
        <div class="section-title">Color / Typography 色彩計畫與字體規範</div>
        <div class="section-desc" style="margin-bottom: 0;">
          色彩以永續會計綠為主，深海治理藍與白底為基本使用情境。輔助色可用於數據、重點提示與圖表，但不可取代主徽標的綠色權威基調。
        </div>
      </div>
      <div style="font-size: 8pt; font-family: 'Inter', sans-serif; color: #94A3B8;">03</div>
    </div>

    <!-- 6 Palette Swatches -->
    <div class="grid-3" style="margin-bottom: 12px;">
      <!-- Swatch 1: Primary Green -->
      <div class="color-card">
        <div class="color-swatch" style="background-color: {primary_color};"></div>
        <div class="color-info">
          <div class="color-name">永續會計綠 (Primary Green)</div>
          <div class="color-hex">{primary_color}</div>
          <div class="color-usage">主色 ｜ 標誌圖標、主標題、核心關鍵字</div>
        </div>
      </div>

      <!-- Swatch 2: Governance Navy -->
      <div class="color-card">
        <div class="color-swatch" style="background-color: {navy_color};"></div>
        <div class="color-info">
          <div class="color-name">深海治理藍 (Navy Deep)</div>
          <div class="color-hex">{navy_color}</div>
          <div class="color-usage">主色 ｜ 深色封面背景、權威卡片襯底</div>
        </div>
      </div>

      <!-- Swatch 3: Carbon Slate -->
      <div class="color-card">
        <div class="color-swatch" style="background-color: #1E293B;"></div>
        <div class="color-info">
          <div class="color-name">炭墨灰 (Carbon Slate)</div>
          <div class="color-hex">#1E293B</div>
          <div class="color-usage">正文 ｜ 專業報表文字、圖表軸線標籤</div>
        </div>
      </div>

      <!-- Swatch 4: Emerald Teal -->
      <div class="color-card">
        <div class="color-swatch" style="background-color: {accent_color};"></div>
        <div class="color-info">
          <div class="color-name">翡翠青綠 (Emerald Teal)</div>
          <div class="color-hex">{accent_color}</div>
          <div class="color-usage">輔助 ｜ 減碳數據、趨勢圖、正向指標</div>
        </div>
      </div>

      <!-- Swatch 5: Prestige Accent -->
      <div class="color-card">
        <div class="color-swatch" style="background-color: {gold_color};"></div>
        <div class="color-info">
          <div class="color-name">{"權威亮金 (Prestige Gold)" if version_type=="A" else "數位青藍 (Digital Cyan)"}</div>
          <div class="color-hex">{gold_color}</div>
          <div class="color-usage">亮點 ｜ 認證章、審查放行、重要提醒</div>
        </div>
      </div>

      <!-- Swatch 6: Pure White -->
      <div class="color-card">
        <div class="color-swatch" style="background-color: #FFFFFF; border-bottom: 1px solid #E2E8F0;"></div>
        <div class="color-info">
          <div class="color-name">純淨底白 (Pure White)</div>
          <div class="color-hex">#FFFFFF</div>
          <div class="color-usage">底色 ｜ 官方公文白底、留白空間</div>
        </div>
      </div>
    </div>

    <!-- Typography Card -->
    <div class="card" style="margin-bottom: 12px;">
      <div class="sub-title">字體建議 (Typography Recommendations)</div>
      <div class="grid-2" style="margin-top: 6px;">
        <div style="padding: 10px; background-color: #F8FAFC; border-radius: 8px;">
          <span style="font-size: 7.5pt; color: #64748B; font-family: 'Inter', sans-serif;">中文標題 ｜ CHINESE HEADINGS</span>
          <div class="type-sample-zh">台灣環境管理會計協會</div>
          <p style="font-size: 7pt; color: #94A3B8; line-height: 1.3;">
            {"建議使用 Noto Serif TC（思源宋體）或 Songti TC，展現正式法規、學術與官方權威氣質。" if version_type=="A" else "建議使用 Noto Sans TC（思源黑體）或 PingFang TC，展現現代俐落與數位治理專業。"}
          </p>
        </div>

        <div style="padding: 10px; background-color: #F8FAFC; border-radius: 8px;">
          <span style="font-size: 7.5pt; color: #64748B; font-family: 'Inter', sans-serif;">英文與正文 ｜ ENGLISH & BODY</span>
          <div class="type-sample-en">EMAN-TW Governance 2026</div>
          <p style="font-size: 7pt; color: #94A3B8; line-height: 1.3;">
            建議使用 Inter / SF Pro / PingFang TC。內文字級建議 9~10.5pt，行高 1.5~1.6，確保清晰易讀。
          </p>
        </div>
      </div>
    </div>

    <!-- Layout Voice -->
    <div class="card">
      <div class="sub-title">版面語氣 (Layout Voice & Tone)</div>
      <div class="grid-3" style="margin-top: 6px;">
        <div style="padding: 8px; background-color: #F8FAFC; border-radius: 6px;">
          <strong style="font-size: 8pt; color: #0F172A; display: block; margin-bottom: 2px;">清爽留白</strong>
          <span style="font-size: 7pt; color: #64748B;">公文與簡報避免堆疊過度裝飾，讓數據與主標誌呼吸。</span>
        </div>
        <div style="padding: 8px; background-color: #F8FAFC; border-radius: 6px;">
          <strong style="font-size: 8pt; color: #0F172A; display: block; margin-bottom: 2px;">理性分層</strong>
          <span style="font-size: 7pt; color: #64748B;">以深藍襯底、深墨黑字、青綠重點建立嚴謹層次。</span>
        </div>
        <div style="padding: 8px; background-color: #F8FAFC; border-radius: 6px;">
          <strong style="font-size: 8pt; color: #0F172A; display: block; margin-bottom: 2px;">精準務實</strong>
          <span style="font-size: 7pt; color: #64748B;">以事實與可追溯數據為準繩，避免空洞口號宣傳。</span>
        </div>
      </div>
    </div>
  </div>

  <div class="page-footer">
    <span>台灣環境管理會計協會 視覺識別規範手冊 ｜ {subtitle_tag}</span>
    <span>PAGE 03</span>
  </div>
</div>

<!-- ================= PAGE 4: Applications & Do Not ================= -->
<div class="page">
  <div>
    <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 12px; border-bottom: 2px solid {primary_color}; padding-bottom: 6px;">
      <div>
        <div class="section-title">Applications / Do Not 應用範例與禁用禁忌</div>
        <div class="section-desc" style="margin-bottom: 0;">
          以下為依據協會官方標誌整理之標準應用與嚴格禁用規則。正式印刷與對外發布請優先使用向量檔。
        </div>
      </div>
      <div style="font-size: 8pt; font-family: 'Inter', sans-serif; color: #94A3B8;">04</div>
    </div>

    <!-- 4 Recommended Application Cards -->
    <div class="grid-2" style="margin-bottom: 12px;">
      <!-- App 1: Dark Deck Header -->
      <div class="app-card">
        <div>
          <div style="font-size: 8.5pt; font-weight: 700; color: #0F172A;">永續專案簡報 (Presentation Template)</div>
          <div style="font-size: 7pt; color: #94A3B8; margin-top: 1px;">首頁可使用深藍底搭配反白標誌；內頁標題維持會計綠。</div>
        </div>
        <div class="app-preview-dark" style="margin-top: 8px;">
          <img src="{emblem_white_b64}" style="width: 24px; height: 24px; object-fit: contain;">
          <span style="font-weight: 700; font-family: 'Inter', sans-serif;">EMAN-TW ｜ 永續專案提報</span>
        </div>
      </div>

      <!-- App 2: Activity Banner -->
      <div class="app-card">
        <div>
          <div style="font-size: 8.5pt; font-weight: 700; color: #0F172A;">論壇與活動橫幅 (Forum Banner)</div>
          <div style="font-size: 7pt; color: #94A3B8; margin-top: 1px;">橫式組合適合研討會背板、邀請函、官方表單頁首。</div>
        </div>
        <div style="background-color: #F8FAFC; border-radius: 6px; padding: 10px; display: flex; align-items: center; justify-content: center; gap: 8px; border: 1px solid #E2E8F0; margin-top: 8px;">
          <img src="{emblem_b64}" style="width: 22px; height: 22px; object-fit: contain;">
          <span style="font-size: 8pt; font-weight: 700; color: #0F172A;">2026 全國減碳成本會計高峰論壇</span>
        </div>
      </div>

      <!-- App 3: Extension Seal / Sub-brand -->
      <div class="app-card">
        <div>
          <div style="font-size: 8.5pt; font-weight: 700; color: #0F172A;">輔助與延伸資產 (Certified Seal)</div>
          <div style="font-size: 7pt; color: #94A3B8; margin-top: 1px;">「台灣環境管理會計協會 輔導」可作為專案延伸印章標章。</div>
        </div>
        <div style="background-color: #F0FDF4; border-radius: 6px; padding: 8px; display: flex; align-items: center; justify-content: center; gap: 6px; border: 1px solid #BBF7D0; margin-top: 8px;">
          <img src="{emblem_b64}" style="width: 20px; height: 20px; object-fit: contain;">
          <span style="font-size: 7.5pt; font-weight: 700; color: #166534;">✦ EMAN 永續會計認證輔導專案</span>
        </div>
      </div>

      <!-- App 4: Minimum Size Guidelines -->
      <div class="app-card">
        <div>
          <div style="font-size: 8.5pt; font-weight: 700; color: #0F172A;">最小尺寸建議 (Minimum Size)</div>
          <div style="font-size: 7pt; color: #94A3B8; margin-top: 1px;">避免在縮小後細部線條模糊失真。</div>
        </div>
        <div style="background-color: #F8FAFC; border-radius: 6px; padding: 6px 10px; font-size: 7pt; color: #475569; line-height: 1.4; border: 1px solid #E2E8F0; margin-top: 8px;">
          • <strong>數位螢幕</strong>：圖標不低於 36 px；橫式組合不低於 140 px 寬。<br>
          • <strong>印刷輸出</strong>：圖標不低於 12 mm；橫式組合不低於 38 mm 寬。
        </div>
      </div>
    </div>

    <!-- Bottom: 4 Do Not Cards with Red Crosses -->
    <div class="card">
      <div class="sub-title">嚴格禁止使用規範 (Incorrect Usage / Do Not)</div>
      <p class="sub-desc" style="margin-bottom: 8px;">
        為維護協會識別一致性與法定公信力，嚴禁下列不當使用方式：
      </p>

      <div class="grid-4">
        <!-- Don't 1: 勿壓縮變形 -->
        <div class="dont-card">
          <div class="dont-preview">
            <img src="{emblem_b64}" style="width: 70px; height: 35px; object-fit: fill; opacity: 0.7;">
            <svg class="dont-cross" viewBox="0 0 24 24" fill="none" stroke="#DC2626" stroke-width="2.5">
              <circle cx="12" cy="12" r="10" stroke="#DC2626" fill="rgba(254,226,226,0.5)"/>
              <line x1="15" y1="9" x2="9" y2="15"/>
              <line x1="9" y1="9" x2="15" y2="15"/>
            </svg>
          </div>
          <div class="dont-label">勿壓縮變形</div>
        </div>

        <!-- Don't 2: 勿任意改色 -->
        <div class="dont-card">
          <div class="dont-preview">
            <img src="{emblem_b64}" style="width: 44px; height: 44px; filter: hue-rotate(180deg) saturate(3); opacity: 0.7;">
            <svg class="dont-cross" viewBox="0 0 24 24" fill="none" stroke="#DC2626" stroke-width="2.5">
              <circle cx="12" cy="12" r="10" stroke="#DC2626" fill="rgba(254,226,226,0.5)"/>
              <line x1="15" y1="9" x2="9" y2="15"/>
              <line x1="9" y1="9" x2="15" y2="15"/>
            </svg>
          </div>
          <div class="dont-label">勿任意改色</div>
        </div>

        <!-- Don't 3: 勿低對比背景 -->
        <div class="dont-card">
          <div class="dont-preview" style="background-color: {primary_color};">
            <img src="{emblem_b64}" style="width: 44px; height: 44px; opacity: 0.7;">
            <svg class="dont-cross" viewBox="0 0 24 24" fill="none" stroke="#DC2626" stroke-width="2.5">
              <circle cx="12" cy="12" r="10" stroke="#DC2626" fill="rgba(254,226,226,0.5)"/>
              <line x1="15" y1="9" x2="9" y2="15"/>
              <line x1="9" y1="9" x2="15" y2="15"/>
            </svg>
          </div>
          <div class="dont-label">勿低對比背景</div>
        </div>

        <!-- Don't 4: 勿裁切文字或圖形 -->
        <div class="dont-card">
          <div class="dont-preview">
            <img src="{emblem_b64}" style="width: 55px; height: 55px; margin-right: -30px; opacity: 0.7;">
            <svg class="dont-cross" viewBox="0 0 24 24" fill="none" stroke="#DC2626" stroke-width="2.5">
              <circle cx="12" cy="12" r="10" stroke="#DC2626" fill="rgba(254,226,226,0.5)"/>
              <line x1="15" y1="9" x2="9" y2="15"/>
              <line x1="9" y1="9" x2="15" y2="15"/>
            </svg>
          </div>
          <div class="dont-label">勿裁切圖形</div>
        </div>
      </div>
    </div>
  </div>

  <div class="page-footer">
    <span>台灣環境管理會計協會 視覺識別規範手冊 ｜ {subtitle_tag}</span>
    <span>PAGE 04</span>
  </div>
</div>

</body>
</html>
"""
    return html

def main():
    os.makedirs("vis/dist", exist_ok=True)
    
    # 1. Generate HTML for Version A
    html_a = build_vis_html("A")
    with open("vis/dist/version_a_classic.html", "w", encoding="utf-8") as f:
        f.write(html_a)
    print("Saved vis/dist/version_a_classic.html")

    # 2. Generate HTML for Version B
    html_b = build_vis_html("B")
    with open("vis/dist/version_b_modern.html", "w", encoding="utf-8") as f:
        f.write(html_b)
    print("Saved vis/dist/version_b_modern.html")

    # 3. Print to PDF via headless Chrome
    chrome_path = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
    
    pdf_a_path = os.path.abspath("vis/台灣環境管理會計協會_VIS手冊_VersionA_權威典雅版.pdf")
    pdf_b_path = os.path.abspath("vis/台灣環境管理會計協會_VIS手冊_VersionB_現代簡約版.pdf")
    
    html_a_abs = os.path.abspath("vis/dist/version_a_classic.html")
    html_b_abs = os.path.abspath("vis/dist/version_b_modern.html")

    print("Generating PDF A...")
    cmd_a = [
        chrome_path,
        "--headless",
        "--disable-gpu",
        "--no-pdf-header-footer",
        f"--print-to-pdf={pdf_a_path}",
        f"file://{html_a_abs}"
    ]
    subprocess.run(cmd_a, check=True)
    print("Successfully generated:", pdf_a_path)

    print("Generating PDF B...")
    cmd_b = [
        chrome_path,
        "--headless",
        "--disable-gpu",
        "--no-pdf-header-footer",
        f"--print-to-pdf={pdf_b_path}",
        f"file://{html_b_abs}"
    ]
    subprocess.run(cmd_b, check=True)
    print("Successfully generated:", pdf_b_path)

    # 4. Render preview PNGs for inspection
    os.makedirs("vis/preview", exist_ok=True)
    
    doc_a = fitz.open(pdf_a_path)
    print(f"Version A total pages: {len(doc_a)}")
    for i, page in enumerate(doc_a):
        pix = page.get_pixmap(dpi=150)
        pix.save(f"vis/preview/version_a_page_{i+1}.png")
    
    doc_b = fitz.open(pdf_b_path)
    print(f"Version B total pages: {len(doc_b)}")
    for i, page in enumerate(doc_b):
        pix = page.get_pixmap(dpi=150)
        pix.save(f"vis/preview/version_b_page_{i+1}.png")

    print("All previews saved to vis/preview/")

if __name__ == "__main__":
    main()
