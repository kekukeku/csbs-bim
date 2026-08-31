import React, { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { GlowCard } from '../ui/GlowCard';
import { BIM_PLATFORM_FEATURES } from '../../data/proposalData';
import { Boxes, BellRing, ClipboardCheck, Smartphone, CheckCircle2, ArrowRight, Shield, Sparkles } from 'lucide-react';

export const BimWebPlatform: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const icons = [Boxes, BellRing, ClipboardCheck];

  return (
    <section id="bim-platform" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="中科大專利技術"
          slideTag="Slide 12 / 20"
          title="中國科大 BIM 系統平臺："
          gradientText="3D 輕量化 Web 端與三色即時預警"
          subtitle="中科大建築設計院所研發之 BIM 資訊平臺已落地多座智慧社會住宅與大型結構，具備免裝 App 即開即用之強大即戰力！"
        />

        {/* 3 Main Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {BIM_PLATFORM_FEATURES.map((feat, idx) => {
            const Icon = icons[idx];
            return (
              <GlowCard
                key={idx}
                glowColor={idx === 0 ? 'cyan' : idx === 1 ? 'amber' : 'emerald'}
                interactive
                onClick={() => setActiveFeature(idx)}
                className={`space-y-4 flex flex-col justify-between cursor-pointer ${
                  activeFeature === idx ? 'ring-2 ring-ocean-400 bg-[#0F1E42]/90' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-ocean-400">
                      {feat.badge}
                    </span>
                    <div className="p-2 rounded-xl bg-white/5 text-slate-300">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mt-3">{feat.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-2 whitespace-pre-line">
                    {feat.desc}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 text-xs text-esg-300 font-semibold">
                  ⭐ {feat.benefit}
                </div>
              </GlowCard>
            );
          })}
        </div>

        {/* Visualized Workflow Demo Banner */}
        <div className="rounded-3xl p-6 sm:p-8 bg-[#091024]/90 border border-ocean-500/30 backdrop-blur-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-ocean-400 flex items-center gap-2">
              <Smartphone className="w-4 h-4" />
              現場班長與高層平板操作流程
            </span>
            <h4 className="text-2xl font-black text-white leading-snug">
              巡檢拍照 ➔ 3D 模型自動定位 ➔ 派工修繕 ➔ 建立永久資產履歷
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              現場巡檢人員使用手機或平板拍照上傳裂縫，BIM 演算法自動比對坐標並標註於 3D 船塢模型上。台蝕工班修補後登錄防蝕塗料批號與施工日期，累積台船港灣設施無可替代的資產數據！
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="text-xs font-mono bg-white/5 border border-white/10 px-3 py-1 rounded-lg text-slate-200">
                ✔ 免裝 AutoCAD / Revit
              </span>
              <span className="text-xs font-mono bg-white/5 border border-white/10 px-3 py-1 rounded-lg text-slate-200">
                ✔ LINE / Email 即時告警
              </span>
              <span className="text-xs font-mono bg-white/5 border border-white/10 px-3 py-1 rounded-lg text-slate-200">
                ✔ 跨部門 100% 溝通無礙
              </span>
            </div>
          </div>

          {/* Workflow Steps Box */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-3 text-center text-xs font-mono">
            <div className="p-4 rounded-2xl bg-black/40 border border-esg-500/30 space-y-2">
              <span className="w-8 h-8 rounded-full bg-esg-500/20 text-esg-400 font-bold flex items-center justify-center mx-auto text-sm">
                1
              </span>
              <h5 className="font-bold text-white">🟢 正常巡檢</h5>
              <p className="text-[11px] text-slate-400">感測器 24/7 背景量測，數據自動匯入碳帳本</p>
            </div>
            <div className="p-4 rounded-2xl bg-black/40 border border-sun-500/30 space-y-2">
              <span className="w-8 h-8 rounded-full bg-sun-500/20 text-sun-400 font-bold flex items-center justify-center mx-auto text-sm">
                2
              </span>
              <h5 className="font-bold text-white">🟡 初級預警</h5>
              <p className="text-[11px] text-slate-400">數值微幅超標，自動推播通知班長現場複查</p>
            </div>
            <div className="p-4 rounded-2xl bg-black/40 border border-fire-500/30 space-y-2">
              <span className="w-8 h-8 rounded-full bg-fire-500/20 text-fire-400 font-bold flex items-center justify-center mx-auto text-sm">
                3
              </span>
              <h5 className="font-bold text-white">🔴 緊急告警</h5>
              <p className="text-[11px] text-slate-400">觸發重大超標，即時連線工安處並建立維修工單</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
