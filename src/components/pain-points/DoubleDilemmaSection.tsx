import React, { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { DOUBLE_DILEMMAS, CSBS_BOTTLENECKS } from '../../data/proposalData';
import { AlertTriangle, ShieldAlert, CheckCircle2, ArrowRight } from 'lucide-react';

export const DoubleDilemmaSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'dilemmas' | 'bottlenecks'>('dilemmas');

  return (
    <section id="pain-points" className="py-20 relative bg-[#070D1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="現況洞察"
          slideTag="科學事實與承攬瓶頸"
          title="台船雙重困境與"
          gradientText="台蝕四大承攬瓶頸"
          subtitle="基於科學事實解析實體港灣設施乾濕交替帶老化，與資本市場 ESG / IFRS 監管要求，直擊傳統工程模式痛點。"
        />

        {/* Tab Switcher */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 rounded-xl bg-marine-900/90 border border-white/10">
            <button
              onClick={() => setActiveTab('dilemmas')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                activeTab === 'dilemmas'
                  ? 'bg-ocean-600 text-white shadow-card-clean'
                  : 'text-marine-400 hover:text-white'
              }`}
            >
              <AlertTriangle className="w-3.5 h-3.5" />
              台船面臨的雙重困境
            </button>
            <button
              onClick={() => setActiveTab('bottlenecks')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                activeTab === 'bottlenecks'
                  ? 'bg-ocean-600 text-white shadow-card-clean'
                  : 'text-marine-400 hover:text-white'
              }`}
            >
              <ShieldAlert className="w-3.5 h-3.5" />
              台蝕四大承攬瓶頸與解套
            </button>
          </div>
        </div>

        {/* Tab 1: Double Dilemmas */}
        {activeTab === 'dilemmas' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
            {DOUBLE_DILEMMAS.map((dilemma, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-marine-900/70 border border-white/10 space-y-4"
              >
                <div className="flex items-center gap-3 pb-3 border-b border-white/5">
                  <div className={`p-2 rounded-lg ${idx === 0 ? 'bg-amber-950/60 text-amber-400' : 'bg-ocean-950/60 text-ocean-400'}`}>
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white">
                    {dilemma.category}
                  </h3>
                </div>

                <div className="space-y-3">
                  {dilemma.items.map((item, i) => (
                    <div key={i} className="p-4 rounded-xl bg-marine-950/60 border border-white/5 space-y-1">
                      <h4 className="text-xs sm:text-sm font-semibold text-slate-200">{item.title}</h4>
                      <p className="text-xs text-marine-300 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: CSBS Bottlenecks */}
        {activeTab === 'bottlenecks' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fadeIn">
            {CSBS_BOTTLENECKS.map((b, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-marine-900/70 border border-white/10 space-y-3 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-2.5 border-b border-white/5">
                    <h4 className="text-sm font-bold text-white">{b.title}</h4>
                    <span className="text-[11px] font-mono text-marine-400">瓶頸 0{idx + 1}</span>
                  </div>

                  <div className="mt-3 space-y-2 text-xs">
                    <div className="p-3 rounded-lg bg-marine-950/80 border border-white/5 text-marine-300">
                      <strong className="text-sand-300 block font-mono mb-0.5">現況困境：</strong>
                      {b.status}
                    </div>

                    <div className="p-3 rounded-lg bg-sage-950/40 border border-sage-800/40 text-sage-300">
                      <strong className="text-sage-400 block font-mono mb-0.5">突破解法：</strong>
                      {b.solution}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
