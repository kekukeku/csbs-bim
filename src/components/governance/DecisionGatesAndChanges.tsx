import React, { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { DECISION_GATES, CHANGE_GOVERNANCE_TYPES, OBJECTIVE_KPIS } from '../../data/proposalData';
import { GitBranch, Target, FileText, CheckCircle2, ShieldCheck } from 'lucide-react';

export const DecisionGatesAndChanges: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'gates' | 'changes' | 'kpis'>('gates');

  return (
    <section id="risk-governance" className="py-20 relative bg-[#0A0F1D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="主軸 A 施工風險治理"
          slideTag="四大管控制度"
          title="施工風險治理架構："
          gradientText="四道決策 Gate ＋ 四類變更治理 ＋ 客觀 KPI"
          subtitle="以四道決策 Gate 控制推進節奏，每一 Gate 未簽認絕不盲目採購施工，並作為階段獨立計價依據！"
        />

        {/* Tab Buttons */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 rounded-xl bg-marine-900/90 border border-white/10">
            <button
              onClick={() => setActiveTab('gates')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                activeTab === 'gates'
                  ? 'bg-ocean-600 text-white shadow-card-clean'
                  : 'text-marine-400 hover:text-white'
              }`}
            >
              <GitBranch className="w-3.5 h-3.5" />
              四道決策 Gate (G01~G04)
            </button>
            <button
              onClick={() => setActiveTab('changes')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                activeTab === 'changes'
                  ? 'bg-ocean-600 text-white shadow-card-clean'
                  : 'text-marine-400 hover:text-white'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              四類變更治理機制
            </button>
            <button
              onClick={() => setActiveTab('kpis')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                activeTab === 'kpis'
                  ? 'bg-sage-600 text-white shadow-card-clean'
                  : 'text-marine-400 hover:text-white'
              }`}
            >
              <Target className="w-3.5 h-3.5" />
              五大客觀管理指標 (KPI)
            </button>
          </div>
        </div>

        {/* Tab 1: Four Decision Gates */}
        {activeTab === 'gates' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 animate-fadeIn">
            {DECISION_GATES.map((gate) => (
              <div
                key={gate.gateId}
                className="p-5 rounded-2xl bg-marine-900/70 border border-white/10 flex flex-col justify-between space-y-4 hover:border-ocean-500/40 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between pb-2.5 border-b border-white/5 mb-3">
                    <span className="text-lg font-bold font-mono text-ocean-400">
                      {gate.gateId}
                    </span>
                    <span className="text-xs font-mono text-marine-400">{gate.timeline}</span>
                  </div>

                  <h4 className="text-sm font-bold text-white leading-snug mb-2">
                    {gate.name}
                  </h4>

                  <div className="p-3 rounded-lg bg-marine-950/80 border border-white/5 text-xs text-marine-300 mb-3">
                    <strong className="text-ocean-300 block font-mono mb-0.5">簽認放行條件：</strong>
                    {gate.triggerCondition}
                  </div>

                  <div className="space-y-1.5">
                    <span className="text-[10px] font-mono text-marine-400 uppercase font-medium block">
                      核心交付成果：
                    </span>
                    <ul className="space-y-1 text-xs text-slate-300">
                      {gate.keyDeliverables.map((del, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-ocean-400 font-bold">•</span>
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-sage-950/50 border border-sage-800/50 text-xs text-sage-300 space-y-0.5">
                  <span className="text-[10px] font-mono text-sage-400 uppercase font-medium block">
                    💰 計價里程碑：
                  </span>
                  <p className="font-medium text-slate-200">{gate.billingMilestone}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Four Change Governance Types */}
        {activeTab === 'changes' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fadeIn">
            {CHANGE_GOVERNANCE_TYPES.map((cg, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-marine-900/70 border border-white/10 space-y-4 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-2.5 border-b border-white/5">
                    <span className="text-xs font-mono font-medium text-ocean-400">
                      {cg.type}
                    </span>
                    <span className="text-xs font-mono text-marine-400">客觀證據核定</span>
                  </div>

                  <h4 className="text-base font-bold text-white mt-2">{cg.name}</h4>
                  <p className="text-xs text-marine-300 mt-1 leading-relaxed">
                    {cg.definition}
                  </p>

                  <div className="mt-3 space-y-2.5">
                    <div className="p-3 rounded-lg bg-marine-950/80 border border-white/5 text-xs text-marine-300">
                      <strong className="text-sand-300 block font-mono mb-0.5">📋 客觀證據要求：</strong>
                      {cg.evidenceRequired}
                    </div>

                    <div className="p-3 rounded-lg bg-marine-950/80 border border-white/5 text-xs text-marine-300">
                      <strong className="text-ocean-300 block font-mono mb-0.5">✍️ 核定審查流程：</strong>
                      {cg.approvalProcess}
                    </div>
                  </div>
                </div>

                <div className="p-2.5 rounded-lg bg-sage-950/40 border border-sage-800/40 text-xs text-sage-300 font-medium">
                  🛡️ 風險控管效益：{cg.impactControl}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Five Objective KPIs */}
        {activeTab === 'kpis' && (
          <div className="space-y-4 animate-fadeIn">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {OBJECTIVE_KPIS.map((kpi, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-marine-900/70 border border-white/10 text-center flex flex-col justify-between space-y-3"
                >
                  <div>
                    <span className="text-xs font-mono text-ocean-400 block mb-1">
                      KPI 0{idx + 1}
                    </span>
                    <span className="text-2xl font-bold font-mono text-sage-300 block">
                      {kpi.target}
                    </span>
                    <h5 className="text-xs font-bold text-white mt-1 leading-tight">
                      {kpi.indicator}
                    </h5>
                  </div>

                  <div className="p-2 rounded bg-marine-950/80 text-[11px] text-marine-300 leading-snug text-left">
                    {kpi.significance}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-marine-900/50 border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-marine-300">
              <span className="flex items-center gap-2 text-sage-300 font-medium">
                <CheckCircle2 className="w-4 h-4" />
                所有指標納入專案每週協調會議與月報，未達標立即啟動矯正措施
              </span>
              <span className="text-marine-400">
                作為四道 Gate 階段放行之客觀驗收依據
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
