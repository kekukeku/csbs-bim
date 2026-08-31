import React, { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { GlowCard } from '../ui/GlowCard';
import { MICROGRID_DATA } from '../../data/proposalData';
import { Zap, ShieldCheck, Sun, BatteryCharging, AlertTriangle, ArrowRight, CheckCircle2, Lock, Radio } from 'lucide-react';

export const MicrogridSection: React.FC = () => {
  const [gridMode, setGridMode] = useState<'normal' | 'wartime'>('normal');

  return (
    <section id="microgrid" className="py-20 relative bg-gradient-to-b from-transparent via-[#091128]/70 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="國防綠能微電網"
          slideTag="Slide 11 / 20"
          title="綠能微電網解方："
          gradientText="平戰轉換與儲能安全破局"
          subtitle="解決陳經理反饋之「大陸寧德時代涉密無法採用、台灣在地儲能成本高」痛點，打造 100% 國防合規非紅色供應鏈與 72 小時連續孤島韌性電網！"
        />

        {/* Client Dilemma Notice */}
        <div className="mb-12 p-6 rounded-3xl bg-amber-950/20 border border-amber-500/30 backdrop-blur-xl max-w-4xl mx-auto flex items-start gap-4">
          <div className="p-3 rounded-2xl bg-amber-500/20 text-amber-300 shrink-0 mt-1">
            <AlertTriangle className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 block mb-1">
              陳經理會議關鍵提問與限制條件：
            </span>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic">
              "{MICROGRID_DATA.clientDilemma}"
            </p>
          </div>
        </div>

        {/* Interactive Mode Switcher */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-900/90 border border-white/10 backdrop-blur-xl">
            <button
              onClick={() => setGridMode('normal')}
              className={`px-6 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                gridMode === 'normal'
                  ? 'bg-gradient-to-r from-esg-500 to-ocean-500 text-slate-950 shadow-glow-esg'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Sun className="w-4 h-4" />
              平時模式（節能減碳・削峰填谷）
            </button>
            <button
              onClick={() => setGridMode('wartime')}
              className={`px-6 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                gridMode === 'wartime'
                  ? 'bg-gradient-to-r from-fire-500 to-amber-500 text-white shadow-glow-fire animate-pulse'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
              戰時模式（72h 緊急孤島運轉）
            </button>
          </div>
        </div>

        {/* Dynamic Mode Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Non-Red Supply Chain Shield (5 cols) */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            <GlowCard glowColor="cyan" className="space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                <div className="p-2.5 rounded-xl bg-ocean-500/20 text-ocean-300">
                  <Lock className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-ocean-400 uppercase font-bold">國防資安最高標準</span>
                  <h4 className="text-lg font-bold text-white">非紅色供應鏈（100% 國安合規）</h4>
                </div>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 space-y-1">
                  <strong className="text-white block">🔋 UL9540A 國際防爆認證：</strong>
                  採用通過最嚴苛燃燒測試之非中資磷酸鐵鋰（LFP）電芯，或台泥儲能（NHOA）/長園科等在地製造高安全性電池組。
                </div>

                <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 space-y-1">
                  <strong className="text-white block">🛡️ BMS 與逆變器資安防護：</strong>
                  全面採用臺灣、美日系通訊協定，嚴禁任何遠端雲端回傳大陸伺服器疑慮，符合海軍機敏廠區資安審查。
                </div>
              </div>

              <div className="p-3 rounded-xl bg-esg-500/10 border border-esg-500/30 text-xs text-esg-300 font-medium">
                ✔ 通過海軍國艦國造涉密廠區資安稽核
              </div>
            </GlowCard>
          </div>

          {/* Right Column: Grid Simulation & Flow (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div
              className={`rounded-3xl p-6 sm:p-8 border backdrop-blur-2xl transition-all duration-300 h-full flex flex-col justify-between ${
                gridMode === 'normal'
                  ? 'bg-[#0A1633]/90 border-esg-500/30 shadow-glow-esg'
                  : 'bg-[#1A0B1A]/90 border-fire-500/40 shadow-glow-fire'
              }`}
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-mono font-bold uppercase ${
                        gridMode === 'normal'
                          ? 'bg-esg-500/20 text-esg-300'
                          : 'bg-fire-500/20 text-fire-300'
                      }`}
                    >
                      {gridMode === 'normal' ? 'MODE: PEACETIME (NORMAL)' : 'MODE: ISLAND OPERATION (WAR)'}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-slate-400">
                    {gridMode === 'normal' ? '外部電網正常' : '外部電網中斷'}
                  </span>
                </div>

                {gridMode === 'normal' ? (
                  <div className="mt-6 space-y-4 animate-fadeIn">
                    <h3 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
                      <Sun className="w-6 h-6 text-sun-400" />
                      屋頂光電自發自用 ＋ 削峰填谷省電費
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      庫房與廠房屋頂太陽能板全量自發自用。於夜間離峰低費率充電、日間尖峰高電價放電，大幅降低台船高昂契約容量罰款。
                    </p>

                    {/* Flow Diagram */}
                    <div className="grid grid-cols-3 gap-2.5 my-6 text-center text-xs font-mono">
                      <div className="p-3 rounded-xl bg-black/40 border border-sun-500/30">
                        <span className="text-sun-400 block mb-1">☀️ 太陽光電</span>
                        <span className="text-white font-bold">100% 自發自用</span>
                      </div>
                      <div className="p-3 rounded-xl bg-black/40 border border-ocean-500/30">
                        <span className="text-ocean-400 block mb-1">🔋 儲能電池</span>
                        <span className="text-white font-bold">離峰充 / 尖峰放</span>
                      </div>
                      <div className="p-3 rounded-xl bg-black/40 border border-esg-500/30">
                        <span className="text-esg-400 block mb-1">📉 契約容量</span>
                        <span className="text-white font-bold">年省數百萬</span>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-esg-950/40 border border-esg-500/30 text-xs text-esg-200">
                      <strong>ESG 成果：</strong>直接產出符合 ISO 14064 範疇二之用電減碳確信數據，納入台船年度永續報告書。
                    </div>
                  </div>
                ) : (
                  <div className="mt-6 space-y-4 animate-fadeIn">
                    <h3 className="text-xl sm:text-2xl font-black text-fire-300 flex items-center gap-2">
                      <ShieldCheck className="w-6 h-6 text-fire-400" />
                      20ms 瞬間切換孤島運轉 ｜ 72 小時連續戰備
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                      外部電網中斷時，微電網在 20 毫秒內瞬間接管，優先保證潛艦機敏庫房與船塢排水系統連續 72 小時不斷電運作！
                    </p>

                    {/* Island Mode Key Priorities */}
                    <div className="grid grid-cols-3 gap-2.5 my-6 text-center text-xs font-mono">
                      <div className="p-3 rounded-xl bg-fire-950/50 border border-fire-500/30">
                        <span className="text-fire-400 block mb-1">💨 潛艦防爆排風</span>
                        <span className="text-white font-bold">24/7 不中斷</span>
                      </div>
                      <div className="p-3 rounded-xl bg-fire-950/50 border border-fire-500/30">
                        <span className="text-fire-400 block mb-1">💧 船塢排水泵</span>
                        <span className="text-white font-bold">持續抽排防淹</span>
                      </div>
                      <div className="p-3 rounded-xl bg-fire-950/50 border border-fire-500/30">
                        <span className="text-fire-400 block mb-1">🛡️ 機敏通訊資安</span>
                        <span className="text-white font-bold">獨立封閉運行</span>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-fire-950/40 border border-fire-500/40 text-xs text-fire-200">
                      <strong>國安戰略價值：</strong>向國防部海軍展現台船基地具備頂級戰備韌性，為爭取後續軍艦維保大單奠定基礎。
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
