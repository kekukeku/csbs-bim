import React, { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { GlowCard } from '../ui/GlowCard';
import { QUANTIFIED_ROI } from '../../data/proposalData';
import { TrendingUp, Calculator, ShieldCheck, DollarSign, Sparkles, Sliders, CheckCircle2 } from 'lucide-react';

export const RoiMetricCards: React.FC = () => {
  // Interactive ROI Calculator State
  const [projectBudget, setProjectBudget] = useState<number>(5000); // in NT$ 10,000 (i.e. 5,000萬)
  const [downtimeLossEstimate, setDowntimeLossEstimate] = useState<number>(3000); // 3,000萬
  const [reworkRiskPercent, setReworkRiskPercent] = useState<number>(20); // 20%

  // Calculated ROI values
  const savedDowntime = Math.round(downtimeLossEstimate * 0.4); // 40% reduction
  const savedRework = Math.round(projectBudget * (reworkRiskPercent / 100) * 0.2); // 20% cut of rework
  const totalBenefit = savedDowntime + savedRework;
  const roiMultiplier = ((totalBenefit / (projectBudget * 0.15)) || 3.2).toFixed(1);

  return (
    <section id="roi-impact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="投資報酬與價值量化"
          slideTag="Slide 15 / 20"
          title="重大效益量化："
          gradientText="為台船創造的真實價值"
          subtitle="我們協助台蝕向台船決策層展示「投入 1 元，收穫多重實質利益」的頂級投報藍圖，將工程支出轉化為高額風險防護與商譽溢價！"
        />

        {/* 4 Big Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {QUANTIFIED_ROI.map((roi, idx) => (
            <div
              key={idx}
              className={`p-6 sm:p-8 rounded-3xl bg-[#091129]/90 border border-white/10 backdrop-blur-2xl text-center space-y-4 hover:border-ocean-400/50 hover:scale-105 transition-all duration-300 ${roi.glow}`}
            >
              <span className={`text-4xl sm:text-5xl font-black font-mono tracking-tight bg-gradient-to-r ${roi.color} bg-clip-text text-transparent block`}>
                {roi.metric}
              </span>
              <h3 className="text-lg font-bold text-white leading-tight">
                {roi.label}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {roi.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Interactive CAPEX ROI Simulator */}
        <div className="rounded-3xl p-6 sm:p-10 bg-gradient-to-b from-[#0C1736] to-[#070D1E] border border-esg-500/30 shadow-glow-esg backdrop-blur-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-8">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-esg-500/20 text-esg-300">
                <Calculator className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-esg-400 block">
                  互動式試算器 (Interactive ROI Simulator)
                </span>
                <h4 className="text-xl sm:text-2xl font-black text-white">
                  港灣資產升級投報效益試算
                </h4>
              </div>
            </div>
            <div className="text-xs font-mono text-slate-400 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
              公式模型：IFRS S2 未修復預期損失折算法
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Sliders Control (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Slider 1: Project Budget */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs sm:text-sm font-mono">
                  <span className="text-slate-300">標的工程總預算（CAPEX）：</span>
                  <span className="text-ocean-300 font-bold">NT$ {projectBudget.toLocaleString()} 萬元</span>
                </div>
                <input
                  type="range"
                  min="1000"
                  max="20000"
                  step="500"
                  value={projectBudget}
                  onChange={e => setProjectBudget(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-ocean-400"
                />
                <div className="flex justify-between text-[10px] font-mono text-slate-500">
                  <span>NT$ 1,000 萬</span>
                  <span>NT$ 20,000 萬 (2億)</span>
                </div>
              </div>

              {/* Slider 2: Annual Downtime Loss Risk */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs sm:text-sm font-mono">
                  <span className="text-slate-300">未預警事故潛在停工損失估算：</span>
                  <span className="text-sun-300 font-bold">NT$ {downtimeLossEstimate.toLocaleString()} 萬元 / 次</span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="10000"
                  step="250"
                  value={downtimeLossEstimate}
                  onChange={e => setDowntimeLossEstimate(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sun-400"
                />
                <div className="flex justify-between text-[10px] font-mono text-slate-500">
                  <span>NT$ 500 萬</span>
                  <span>NT$ 10,000 萬 (1億)</span>
                </div>
              </div>

              {/* Slider 3: Design Conflict & Rework Factor */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs sm:text-sm font-mono">
                  <span className="text-slate-300">傳統管線衝突二次重工風險率：</span>
                  <span className="text-purple-300 font-bold">{reworkRiskPercent} %</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="40"
                  step="1"
                  value={reworkRiskPercent}
                  onChange={e => setReworkRiskPercent(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-purple-400"
                />
                <div className="flex justify-between text-[10px] font-mono text-slate-500">
                  <span>5% (低衝突)</span>
                  <span>40% (高機電複雜度)</span>
                </div>
              </div>
            </div>

            {/* Calculated Output Box (5 cols) */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-black/50 border border-esg-500/40 text-center space-y-4">
              <span className="text-xs font-mono text-esg-400 uppercase font-bold tracking-wider block">
                預估綜合避險與節省效益總額
              </span>

              <div className="p-4 rounded-xl bg-esg-950/40 border border-esg-500/30">
                <span className="text-4xl sm:text-5xl font-black font-mono text-esg-300 tracking-tight block">
                  NT$ {totalBenefit.toLocaleString()} 萬
                </span>
                <span className="text-xs text-slate-300 font-mono mt-1 block">
                  預估投報乘數：<strong className="text-ocean-300 font-bold">{roiMultiplier} 倍</strong>
                </span>
              </div>

              <div className="space-y-2 text-left text-xs font-mono text-slate-300">
                <div className="flex justify-between p-2 rounded bg-white/5">
                  <span>📉 提早預警避免停工損失：</span>
                  <span className="text-esg-300 font-bold">約 +{savedDowntime.toLocaleString()} 萬元</span>
                </div>
                <div className="flex justify-between p-2 rounded bg-white/5">
                  <span>🔧 BIM 碰撞消除重工成本：</span>
                  <span className="text-ocean-300 font-bold">約 +{savedRework.toLocaleString()} 萬元</span>
                </div>
                <div className="flex justify-between p-2 rounded bg-white/5">
                  <span>🌱 IFRS S1/S2 審計確信評等：</span>
                  <span className="text-purple-300 font-bold">100% 審計合規</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
