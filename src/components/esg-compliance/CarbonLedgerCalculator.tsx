import React, { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { GlowCard } from '../ui/GlowCard';
import { CARBON_LIFECYCLE_STAGES } from '../../data/proposalData';
import { Leaf, Layers, Truck, Factory, CheckCircle2, ArrowRight, FileSpreadsheet, Sparkles } from 'lucide-react';

export const CarbonLedgerCalculator: React.FC = () => {
  const [selectedStage, setSelectedStage] = useState(0);

  const stageIcons = [Layers, Truck, Factory];

  return (
    <section className="py-20 relative bg-gradient-to-b from-transparent via-[#081229]/60 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="全生命週期碳帳本"
          slideTag="Slide 14 / 20"
          title="從施工到運維的"
          gradientText="碳帳本與碳足跡計算"
          subtitle="協助台蝕擺脫「只會流汗做工」的刻板印象，具備產出國際 ISO 14064 / 14067 高階「工程隱含碳與減碳確信報告」的全新科技能力！"
        />

        {/* 3 Stages Horizontal Stepper */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {CARBON_LIFECYCLE_STAGES.map((st, idx) => {
            const Icon = stageIcons[idx];
            return (
              <div
                key={idx}
                onClick={() => setSelectedStage(idx)}
                className={`p-6 rounded-3xl border backdrop-blur-2xl cursor-pointer transition-all duration-300 flex flex-col justify-between ${
                  selectedStage === idx
                    ? 'bg-[#0E1E42] border-esg-400 shadow-glow-esg scale-[1.02]'
                    : 'bg-[#080E21]/80 border-white/10 hover:border-white/20'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                    <span className="text-xs font-mono font-bold uppercase text-esg-400">
                      {st.stage} ｜ {st.isoStandard}
                    </span>
                    <div className="p-2 rounded-xl bg-white/5 text-slate-300">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">{st.title}</h3>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-mono">點擊查看採集與會計產出</span>
                  <ArrowRight className="w-4 h-4 text-esg-400" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Stage Detail Showcase */}
        {(() => {
          const stage = CARBON_LIFECYCLE_STAGES[selectedStage];
          return (
            <div className="rounded-3xl p-6 sm:p-10 bg-[#091129]/90 border border-esg-500/30 backdrop-blur-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-fadeIn">
              {/* Left: Data Collection & BIM inputs (6 cols) */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-ocean-400 block mb-1">
                    BIM 數位模型與現場數據採集
                  </span>
                  <h4 className="text-2xl font-black text-white">{stage.title}</h4>
                </div>

                <div className="space-y-3">
                  <span className="text-xs font-mono text-slate-400 uppercase font-bold block">
                    現場連續採樣數據源：
                  </span>
                  {stage.dataInputs.map((input, i) => (
                    <div key={i} className="flex items-start gap-3 p-3.5 rounded-2xl bg-black/40 border border-white/5 text-xs sm:text-sm text-slate-300">
                      <span className="w-2 h-2 rounded-full bg-ocean-400 shrink-0 mt-1.5" />
                      <span>{input}</span>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                  <span className="text-xs font-mono text-esg-400 uppercase font-bold block">
                    應用之低碳工法與材料技術：
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {stage.reductionTech.map((tech, i) => (
                      <span key={i} className="text-xs px-3 py-1 rounded-full bg-esg-500/20 text-esg-300 border border-esg-500/30 font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: Accounting & ESG Deliverables (6 cols) */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-esg-400 block mb-1">
                    會計師確信與永續年報成果
                  </span>
                  <h4 className="text-2xl font-black text-white">直通台船 ESG 報告與金管會審計</h4>
                </div>

                <div className="space-y-3">
                  <span className="text-xs font-mono text-slate-400 uppercase font-bold block">
                    具體輸出之碳帳本文件（會計底稿）：
                  </span>
                  {stage.carbonOutputs.map((out, i) => (
                    <div key={i} className="flex items-start gap-3 p-3.5 rounded-2xl bg-esg-950/40 border border-esg-500/30 text-xs sm:text-sm text-esg-200 font-medium">
                      <FileSpreadsheet className="w-4 h-4 text-esg-400 shrink-0 mt-0.5" />
                      <span>{out}</span>
                    </div>
                  ))}
                </div>

                <div className="p-5 rounded-2xl bg-gradient-to-r from-ocean-950/40 via-purple-950/40 to-esg-950/40 border border-white/10 text-xs text-slate-200 leading-relaxed">
                  <strong className="text-white font-bold block mb-1">🌱 品牌溢價效應：</strong>
                  台船對外發布永續報告書時，港灣工程專章將直接引用台蝕施作數據，建立台蝕作為綠色海洋工程先驅之不可替代地位！
                </div>
              </div>
            </div>
          );
        })()}
      </div>
    </section>
  );
};
