import React, { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { CARBON_LIFECYCLE_STAGES } from '../../data/proposalData';
import { Leaf, Calculator, ArrowRight, Layers, FileCheck, CheckCircle2 } from 'lucide-react';

export const CarbonLedgerCalculator: React.FC = () => {
  const [activeStageIdx, setActiveStageIdx] = useState(0);

  return (
    <section className="py-20 relative bg-[#0A0F1D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="全生命週期碳足跡"
          slideTag="ISO 14064 / 14067"
          title="全生命週期碳帳本："
          gradientText="設計、施工至運維的真實可追溯數據"
          subtitle="工程團隊隨標單產出真實可追溯之材料 EPD 與施工耗能清冊，供台船永續部與會計師查驗，邊界清楚不越俎代庖！"
        />

        {/* 3 Stages Horizontal Selector */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-4xl mx-auto mb-8">
          {CARBON_LIFECYCLE_STAGES.map((stage, idx) => (
            <button
              key={idx}
              onClick={() => setActiveStageIdx(idx)}
              className={`p-4 rounded-xl border text-left transition-all duration-200 ${
                activeStageIdx === idx
                  ? 'bg-marine-900 border-sage-500/50 shadow-card-clean'
                  : 'bg-marine-950/60 border-white/5 hover:border-white/10'
              }`}
            >
              <span className="text-[11px] font-mono text-ocean-400 block mb-1">
                {stage.stage} ｜ {stage.isoStandard}
              </span>
              <h4 className="text-sm font-bold text-white leading-tight">
                {stage.title}
              </h4>
            </button>
          ))}
        </div>

        {/* Active Stage Detail Panel */}
        {(() => {
          const currentStage = CARBON_LIFECYCLE_STAGES[activeStageIdx];
          return (
            <div className="rounded-2xl p-6 sm:p-8 bg-marine-900/80 border border-white/10 max-w-4xl mx-auto space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/5">
                <div>
                  <span className="text-xs font-mono text-sage-400 font-medium uppercase tracking-wider block">
                    {currentStage.stage} 碳足跡計算架構
                  </span>
                  <h3 className="text-xl font-bold text-white mt-0.5">{currentStage.title}</h3>
                </div>
                <span className="px-3 py-1 rounded-md text-xs font-mono font-medium bg-marine-950 text-ocean-300 border border-white/5 self-start sm:self-auto">
                  {currentStage.isoStandard}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                {/* Data Inputs */}
                <div className="p-4 rounded-xl bg-marine-950/60 border border-white/5 space-y-2">
                  <span className="text-[11px] font-mono text-sand-300 font-semibold block uppercase">
                    📥 工程輸入數據 (Data Inputs)
                  </span>
                  <ul className="space-y-1.5 text-marine-300">
                    {currentStage.dataInputs.map((input, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-ocean-400 font-bold">•</span>
                        <span>{input}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Outputs */}
                <div className="p-4 rounded-xl bg-marine-950/60 border border-white/5 space-y-2">
                  <span className="text-[11px] font-mono text-sage-300 font-semibold block uppercase">
                    📤 碳帳本產出 (Carbon Outputs)
                  </span>
                  <ul className="space-y-1.5 text-marine-300">
                    {currentStage.carbonOutputs.map((output, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-sage-400 font-bold">•</span>
                        <span>{output}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Boundary Clarification Note */}
              <div className="p-3.5 rounded-xl bg-marine-950/80 border border-white/5 text-xs text-marine-300">
                <strong className="text-white block font-mono text-[11px] mb-0.5">📌 責任邊界澄清：</strong>
                {currentStage.boundaryClarification}
              </div>
            </div>
          );
        })()}
      </div>
    </section>
  );
};
