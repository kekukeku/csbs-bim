import React, { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { GlowCard } from '../ui/GlowCard';
import { DOUBLE_DILEMMAS, CSBS_BOTTLENECKS } from '../../data/proposalData';
import { AlertOctagon, TrendingDown, ArrowRight, ShieldCheck, CheckCircle2, Lock, FileClock, Cpu, GitCompare } from 'lucide-react';

export const DoubleDilemmaSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'dilemmas' | 'bottlenecks'>('dilemmas');

  const bottleneckIcons = [FileClock, Lock, Cpu, GitCompare];

  return (
    <section id="dilemmas" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="現況痛點與瓶頸"
          slideTag="Slide 03 & 04 / 20"
          title="台船的雙重困境與"
          gradientText="台蝕傳統分包瓶頸"
          subtitle="台船正面臨「實體港灣設施嚴重老化」與「資本市場 ESG / IFRS 合規監管」之雙重夾擊；若僅以傳統修繕發包，極易陷入削價競爭與沉沒維護成本泥淖。"
        />

        {/* Tab Switcher */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-900/90 border border-white/10 backdrop-blur-xl">
            <button
              onClick={() => setActiveTab('dilemmas')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'dilemmas'
                  ? 'bg-gradient-to-r from-rose-500 to-amber-500 text-white shadow-glow-fire'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              台船雙重困境（實體資產 × ESG監管）
            </button>
            <button
              onClick={() => setActiveTab('bottlenecks')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'bottlenecks'
                  ? 'bg-gradient-to-r from-ocean-500 to-digital-500 text-white shadow-glow-ocean'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              台蝕四大承攬瓶頸與解套
            </button>
          </div>
        </div>

        {/* Content View 1: Double Dilemmas */}
        {activeTab === 'dilemmas' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-fadeIn">
            {DOUBLE_DILEMMAS.map((dilemma, idx) => (
              <div
                key={idx}
                className={`rounded-3xl p-6 sm:p-8 bg-gradient-to-b ${dilemma.bgGradient} border ${dilemma.borderColor} backdrop-blur-2xl`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-xl bg-white/5 border border-white/10 ${dilemma.color}`}>
                    <AlertOctagon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                      重大風險領域 #{idx + 1}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-white">
                      {dilemma.category}
                    </h3>
                  </div>
                </div>

                <div className="space-y-4">
                  {dilemma.items.map((item, i) => (
                    <div
                      key={i}
                      className="p-5 rounded-2xl bg-black/40 border border-white/10 hover:border-white/20 transition-all space-y-2"
                    >
                      <h4 className="text-base font-bold text-slate-100 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-rose-400" />
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-4">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Content View 2: CSBS Bottlenecks & Breakthroughs */}
        {activeTab === 'bottlenecks' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
            {CSBS_BOTTLENECKS.map((b, idx) => {
              const Icon = bottleneckIcons[idx];
              return (
                <GlowCard
                  key={idx}
                  glowColor="purple"
                  className="space-y-4 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-white/10">
                      <div className="flex items-center gap-2.5">
                        <div className="p-2 rounded-lg bg-white/5 text-purple-400">
                          <Icon className="w-5 h-5" />
                        </div>
                        <h4 className="text-lg font-bold text-white">{b.title}</h4>
                      </div>
                      <span className="text-xs font-mono font-bold text-rose-400 bg-rose-500/10 px-2.5 py-1 rounded-full border border-rose-500/20">
                        瓶頸 #{idx + 1}
                      </span>
                    </div>

                    <div className="mt-4 space-y-3">
                      <div className="p-3.5 rounded-xl bg-black/40 border border-white/5">
                        <span className="text-[11px] font-mono text-slate-400 uppercase font-bold block mb-1">
                          台蝕目前現況：
                        </span>
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                          {b.status}
                        </p>
                      </div>

                      <div className="p-3.5 rounded-xl bg-rose-950/30 border border-rose-500/20">
                        <span className="text-[11px] font-mono text-rose-400 uppercase font-bold block mb-1">
                          對承攬專案之負面衝擊：
                        </span>
                        <p className="text-xs sm:text-sm text-rose-200 leading-relaxed">
                          {b.impact}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Breakthrough solution */}
                  <div className="p-4 rounded-xl bg-esg-950/40 border border-esg-500/30">
                    <span className="text-[11px] font-mono text-esg-400 uppercase font-bold flex items-center gap-1.5 mb-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      聯合團隊突破解法：
                    </span>
                    <p className="text-xs sm:text-sm text-esg-200 font-medium leading-relaxed">
                      {b.solution}
                    </p>
                  </div>
                </GlowCard>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
