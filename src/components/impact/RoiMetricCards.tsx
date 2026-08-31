import React, { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { QUANTIFIED_ROI } from '../../data/proposalData';
import { TrendingUp, Calculator, ShieldCheck, CheckCircle2, DollarSign } from 'lucide-react';

export const RoiMetricCards: React.FC = () => {
  // Interactive ROI Calculator State
  const [projectBudget, setProjectBudget] = useState<number>(5000); // 單位：萬元
  const [annualDowntimeRisk, setAnnualDowntimeRisk] = useState<number>(3000); // 預期停工損失：萬元

  // Calculations
  const savedDowntime = Math.round(annualDowntimeRisk * 0.4); // 降低 40% 停工損失
  const savedRework = Math.round(projectBudget * 0.04); // 節省約 4% 敲除重工
  const totalAnnualBenefit = savedDowntime + savedRework;
  const estimatedDigitalCost = Math.round(projectBudget * 0.08); // 數位建置費約 8%
  const netBenefit = totalAnnualBenefit - estimatedDigitalCost;
  const roiMultiple = ((totalAnnualBenefit / estimatedDigitalCost)).toFixed(1);

  return (
    <section id="roi-impact" className="py-20 relative bg-[#070D1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="量化成效"
          slideTag="財務回報與管理指標"
          title="重大效益量化與"
          gradientText="互動式投資回報 (ROI) 試算"
          subtitle="導入 BIM 數位雙生與施工風險治理，不僅消除現場重工與工程糾紛，更能大幅降低非預期停工損失。"
        />

        {/* 4 Quantified Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {QUANTIFIED_ROI.map((roi, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-marine-900/70 border border-white/10 text-center space-y-2 flex flex-col justify-between"
            >
              <div>
                <span className="text-3xl sm:text-4xl font-extrabold font-mono text-ocean-400 block tracking-tight">
                  {roi.metric}
                </span>
                <h4 className="text-sm font-bold text-white mt-1">{roi.label}</h4>
              </div>
              <p className="text-xs text-marine-300 leading-relaxed pt-2 border-t border-white/5">
                {roi.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Interactive ROI Calculator Card */}
        <div className="rounded-2xl p-6 sm:p-8 bg-marine-900/80 border border-white/10 max-w-4xl mx-auto space-y-6">
          <div className="flex items-center gap-3 pb-4 border-b border-white/5">
            <div className="p-2.5 rounded-xl bg-marine-950 text-ocean-400 border border-white/5">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">專案 CAPEX 投資回報率 (ROI) 即時試算器</h3>
              <p className="text-xs text-marine-400">拖動滑桿調整工程總預算與年度停工風險估計</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Sliders */}
            <div className="space-y-5">
              <div>
                <div className="flex justify-between text-xs font-mono mb-1.5">
                  <span className="text-marine-300 font-medium">預計工程總預算 (CAPEX)：</span>
                  <span className="text-ocean-400 font-bold">TWD$ {projectBudget} 萬元</span>
                </div>
                <input
                  type="range"
                  min="1000"
                  max="20000"
                  step="500"
                  value={projectBudget}
                  onChange={(e) => setProjectBudget(Number(e.target.value))}
                  className="w-full h-1.5 bg-marine-950 rounded-lg appearance-none cursor-pointer accent-ocean-500"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono mb-1.5">
                  <span className="text-marine-300 font-medium">船塢/碼頭年度潛在停工損失：</span>
                  <span className="text-sand-300 font-bold">TWD$ {annualDowntimeRisk} 萬元</span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="10000"
                  step="500"
                  value={annualDowntimeRisk}
                  onChange={(e) => setAnnualDowntimeRisk(Number(e.target.value))}
                  className="w-full h-1.5 bg-marine-950 rounded-lg appearance-none cursor-pointer accent-sand-400"
                />
              </div>

              <div className="p-3 rounded-lg bg-marine-950/60 text-xs text-marine-400 leading-relaxed font-mono">
                💡 試算依據：以預警降低 40% 停工損失、BIM 淨空檢核減少 4% 重工拆改費、數位治理專案服務費約佔工程款 8% 計算。
              </div>
            </div>

            {/* Right Calculated Results */}
            <div className="rounded-xl p-5 bg-marine-950/80 border border-white/5 flex flex-col justify-between space-y-4">
              <div className="space-y-2 text-xs">
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-marine-400">停工損失避免效益：</span>
                  <span className="text-white font-mono font-bold">+ TWD$ {savedDowntime} 萬元 / 年</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-marine-400">施工重工減少效益：</span>
                  <span className="text-white font-mono font-bold">+ TWD$ {savedRework} 萬元</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-marine-400">預估數位治理投資費：</span>
                  <span className="text-sand-300 font-mono">- TWD$ {estimatedDigitalCost} 萬元</span>
                </div>
              </div>

              <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-mono text-marine-400 block uppercase">首年淨效益</span>
                  <span className="text-2xl font-bold font-mono text-sage-300">
                    + TWD$ {netBenefit} 萬元
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[11px] font-mono text-marine-400 block uppercase">預期投資回報</span>
                  <span className="text-2xl font-bold font-mono text-ocean-400">
                    {roiMultiple} 倍
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
