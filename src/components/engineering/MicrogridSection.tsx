import React, { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { MICROGRID_DATA } from '../../data/proposalData';
import { Zap, ShieldCheck, Sun, Lock, Info } from 'lucide-react';

export const MicrogridSection: React.FC = () => {
  const [gridMode, setGridMode] = useState<'normal' | 'wartime'>('normal');

  return (
    <section id="microgrid" className="py-20 relative bg-[#070D1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="選項服務"
          slideTag="能源管理與平戰轉換"
          title="務實調整綠能儲能邊界："
          gradientText="平戰轉換與儲能安全（選項服務）"
          subtitle="誠實揭露戰備儲能與微電網受限於海軍國防部核准、防火避難綜合檢討與涉密資安審查等前提，列為【選項服務】，未經業主核准前不具履約義務，避免未審先承諾。"
        />

        {/* Boundary Notice Banner */}
        <div className="mb-8 p-5 rounded-2xl bg-marine-900/80 border border-white/10 max-w-4xl mx-auto flex items-start gap-3.5">
          <div className="p-2 rounded-lg bg-marine-950 text-sand-400 border border-sand-800/40 shrink-0 mt-0.5">
            <Info className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-mono font-semibold text-sand-300 block mb-0.5">
              【履約責任邊界澄清】
            </span>
            <p className="text-xs text-marine-300 leading-relaxed">
              {MICROGRID_DATA.boundaryNotice}
            </p>
          </div>
        </div>

        {/* Interactive Mode Switcher */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 rounded-xl bg-marine-900/90 border border-white/10">
            <button
              onClick={() => setGridMode('normal')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                gridMode === 'normal'
                  ? 'bg-sage-600 text-white shadow-card-clean'
                  : 'text-marine-400 hover:text-white'
              }`}
            >
              <Sun className="w-3.5 h-3.5" />
              平時模式（節能減碳・削峰填谷）
            </button>
            <button
              onClick={() => setGridMode('wartime')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                gridMode === 'wartime'
                  ? 'bg-ocean-600 text-white shadow-card-clean'
                  : 'text-marine-400 hover:text-white'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              戰時模式（72h 緊急孤島運轉）
            </button>
          </div>
        </div>

        {/* Dynamic Mode Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Column: Non-Red Supply Chain Shield (5 cols) */}
          <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
            <div className="p-6 rounded-2xl bg-marine-900/70 border border-white/10 space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-white/5">
                <div className="p-2 rounded-lg bg-marine-950 text-ocean-400 border border-white/5">
                  <Lock className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono text-marine-400 uppercase font-medium">國防資安審查</span>
                    <span className="text-[10px] font-mono bg-marine-800 text-sand-300 px-1.5 py-0.5 rounded">選項服務</span>
                  </div>
                  <h4 className="text-base font-bold text-white mt-0.5">非紅色供應鏈（國安合規）</h4>
                </div>
              </div>

              <div className="space-y-2.5 text-xs text-marine-300 leading-relaxed">
                <div className="p-3 rounded-lg bg-marine-950/80 border border-white/5 space-y-1.5">
                  <strong className="text-slate-200 block font-semibold">🔋 台灣在地製造（國產自主高安全 LFP 電池組）：</strong>
                  <ul className="space-y-1 text-[11px] text-marine-300">
                    <li>• <strong className="text-ocean-300">台塑新智能（Formosa Smart Energy）</strong>：彰濱 2.1GWh 磷酸鋰鐵電芯廠（全台最大）</li>
                    <li>• <strong className="text-ocean-300">鴻海科技集團（Foxconn）</strong>：高雄和發電池中心國產 LFP 電芯與儲能包</li>
                    <li>• <strong className="text-ocean-300">長園科技（C-LiFe） / 昇陽電池（SYE）</strong>：在地高安全防爆工規電芯</li>
                    <li>• <strong className="text-ocean-300">順達科技（Dynapack） / 新普科技（AES-KY）</strong>：國產自主安全 BMS 與模組封裝</li>
                  </ul>
                </div>

                <div className="p-3 rounded-lg bg-marine-950/80 border border-white/5 space-y-1.5">
                  <strong className="text-slate-200 block font-semibold">🌐 美歐日韓非中資國際一線品牌（軍規/工規 UL9540A 認證）：</strong>
                  <ul className="space-y-1 text-[11px] text-marine-300">
                    <li>• <strong className="text-sage-300">美國 American Battery Factory (ABF) / Our Next Energy (ONE) / KORE Power</strong>：美國本土製造 LFP 電芯</li>
                    <li>• <strong className="text-sage-300">韓國 LG Energy Solution (LGES) / Samsung SDI</strong>：美韓工規 ESS 專用高安全儲能系統</li>
                    <li>• <strong className="text-sage-300">挪威 Morrow Batteries / 德國 Liacon GmbH</strong>：歐洲自主工規與海事級 LFP 電芯</li>
                    <li>• <strong className="text-sage-300">法國 Saft（TotalEnergies 旗下）</strong>：國際軍規防衛與港灣重工業級不斷電系統</li>
                  </ul>
                </div>

                <div className="p-2.5 rounded-lg bg-marine-950/80 border border-white/5 text-[11px] text-sand-300">
                  🛡️ <strong>資安與通訊防護：</strong>全面採用臺灣、美日系工控通訊協定，嚴禁任何遠端雲端回傳大陸伺服器疑慮。
                </div>
              </div>

              <div className="p-2.5 rounded-lg bg-sage-950/40 border border-sage-800/40 text-xs text-sage-300 font-medium">
                ✔ 需經國防部與海軍專案正式核定後由外購專業統包商施作
              </div>
            </div>
          </div>

          {/* Right Column: Grid Simulation & Flow (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="rounded-2xl p-6 border bg-marine-900/70 border-white/10 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-white/5">
                  <span className="px-2.5 py-0.5 rounded text-xs font-mono font-medium bg-marine-950 text-ocean-300 border border-white/5">
                    {gridMode === 'normal' ? 'MODE: PEACETIME (NORMAL)' : 'MODE: ISLAND OPERATION (WAR)'}
                  </span>
                  <span className="text-xs font-mono text-marine-400">
                    {gridMode === 'normal' ? '外部電網正常' : '外部電網中斷'}
                  </span>
                </div>

                {gridMode === 'normal' ? (
                  <div className="mt-5 space-y-4 animate-fadeIn">
                    <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                      <Sun className="w-5 h-5 text-sand-400" />
                      屋頂光電自發自用 ＋ 削峰填谷省電費
                    </h3>
                    <p className="text-xs sm:text-sm text-marine-300 leading-relaxed">
                      庫房與廠房屋頂太陽能板全量自發自用。夜間離峰充電、日間尖峰放電，降低台船契約容量罰款。
                    </p>

                    {/* Clean Flow Grid */}
                    <div className="grid grid-cols-3 gap-2.5 my-4 text-center text-xs font-mono">
                      <div className="p-2.5 rounded-lg bg-marine-950/80 border border-white/5">
                        <span className="text-sand-400 block text-[11px] mb-0.5">☀️ 太陽光電</span>
                        <span className="text-white font-semibold">自發自用</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-marine-950/80 border border-white/5">
                        <span className="text-ocean-400 block text-[11px] mb-0.5">🔋 儲能電池</span>
                        <span className="text-white font-semibold">離峰充/尖峰放</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-marine-950/80 border border-white/5">
                        <span className="text-sage-400 block text-[11px] mb-0.5">📉 契約容量</span>
                        <span className="text-white font-semibold">降低超約費用</span>
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-sage-950/40 border border-sage-800/40 text-xs text-sage-300">
                      <strong>ESG 成果：</strong>隨標單產出真實發電與節電憑據，供台船永續部列入 ESG 範疇二減碳實績。
                    </div>
                  </div>
                ) : (
                  <div className="mt-5 space-y-4 animate-fadeIn">
                    <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                      <ShieldCheck className="w-5 h-5 text-ocean-400" />
                      20ms 瞬間切換孤島運轉 ｜ 72 小時連續戰備
                    </h3>
                    <p className="text-xs sm:text-sm text-marine-300 leading-relaxed">
                      外部電網中斷時，微電網在 20 毫秒內瞬間接管，優先保證潛艦機敏庫房與船塢排水系統連續 72 小時不斷電運作。
                    </p>

                    {/* Island Mode Key Priorities */}
                    <div className="grid grid-cols-3 gap-2.5 my-4 text-center text-xs font-mono">
                      <div className="p-2.5 rounded-lg bg-marine-950/80 border border-white/5">
                        <span className="text-ocean-400 block text-[11px] mb-0.5">💨 潛艦防爆排風</span>
                        <span className="text-white font-semibold">24/7 不中斷</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-marine-950/80 border border-white/5">
                        <span className="text-ocean-400 block text-[11px] mb-0.5">💧 船塢排水泵</span>
                        <span className="text-white font-semibold">持續抽排防淹</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-marine-950/80 border border-white/5">
                        <span className="text-ocean-400 block text-[11px] mb-0.5">🛡️ 機敏通訊資安</span>
                        <span className="text-white font-semibold">獨立封閉運行</span>
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-ocean-950/40 border border-ocean-800/40 text-xs text-ocean-300">
                      <strong>國安戰略價值：</strong>經海軍核准建置後，展現國安級戰備防護能力，為爭取後續軍艦維保奠定基礎。
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
