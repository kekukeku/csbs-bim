import React, { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { GlowCard } from '../ui/GlowCard';
import { DECISION_GATES, CHANGE_GOVERNANCE_TYPES, OBJECTIVE_KPIS } from '../../data/proposalData';
import { ShieldCheck, GitBranch, Target, Layers, ArrowRight, CheckCircle2, AlertTriangle, FileText, Clock, FileSpreadsheet } from 'lucide-react';

export const DecisionGatesAndChanges: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'gates' | 'changes' | 'kpis'>('gates');

  return (
    <section id="risk-governance" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="六大升級亮點 03 & 06"
          slideTag="主軸 A 施工風險治理"
          title="導入四大管控制度："
          gradientText="四道決策 Gate ＋ 四類變更治理 ＋ 客觀 KPI"
          subtitle="新建庫房與改建廠房之最大成本風險來自既有條件不明與資訊分散。本主軸以四道決策 Gate 控制推進節奏，每一 Gate 未簽認絕不盲目採購施工，並作為階段獨立計價依據！"
        />

        {/* Tab Buttons */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-900/90 border border-white/10 backdrop-blur-xl">
            <button
              onClick={() => setActiveTab('gates')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                activeTab === 'gates'
                  ? 'bg-gradient-to-r from-ocean-500 to-digital-500 text-white shadow-glow-ocean'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <GitBranch className="w-4 h-4" />
              四道決策 Gate (G01~G04)
            </button>
            <button
              onClick={() => setActiveTab('changes')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                activeTab === 'changes'
                  ? 'bg-gradient-to-r from-purple-500 to-rose-500 text-white shadow-glow-digital'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <FileText className="w-4 h-4" />
              四類變更治理機制
            </button>
            <button
              onClick={() => setActiveTab('kpis')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                activeTab === 'kpis'
                  ? 'bg-gradient-to-r from-esg-500 to-ocean-500 text-slate-950 shadow-glow-esg'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Target className="w-4 h-4" />
              五大客觀管理指標 (KPI)
            </button>
          </div>
        </div>

        {/* Tab 1: Four Decision Gates */}
        {activeTab === 'gates' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fadeIn">
            {DECISION_GATES.map((gate, idx) => (
              <div
                key={gate.gateId}
                className="p-6 rounded-3xl bg-[#091129]/90 border border-white/15 backdrop-blur-2xl flex flex-col justify-between space-y-6 hover:border-ocean-400/50 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                    <span className="text-xl font-black font-mono text-ocean-400">
                      {gate.gateId}
                    </span>
                    <span className="text-xs font-mono text-slate-400">{gate.timeline}</span>
                  </div>

                  <h4 className="text-base font-bold text-white leading-snug mb-3">
                    {gate.name}
                  </h4>

                  <div className="p-3 rounded-xl bg-black/40 border border-white/5 text-xs text-slate-300 mb-4">
                    <strong className="text-ocean-300 block font-mono mb-0.5">簽認放行條件：</strong>
                    {gate.triggerCondition}
                  </div>

                  <div className="space-y-2">
                    <span className="text-[11px] font-mono text-slate-400 uppercase font-bold block">
                      核心交付成果：
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {gate.keyDeliverables.map((del, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-ocean-400 font-bold">•</span>
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-esg-950/40 border border-esg-500/30 text-xs text-esg-300 space-y-1">
                  <span className="text-[10px] font-mono text-esg-400 uppercase font-bold block">
                    💰 計價里程碑：
                  </span>
                  <p className="font-medium text-slate-100">{gate.billingMilestone}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Four Change Governance Types */}
        {activeTab === 'changes' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
            {CHANGE_GOVERNANCE_TYPES.map((cg, idx) => (
              <GlowCard
                key={idx}
                glowColor={idx === 0 ? 'amber' : idx === 1 ? 'cyan' : idx === 2 ? 'purple' : 'emerald'}
                className="space-y-4 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <span className="text-xs font-mono font-bold uppercase text-ocean-400">
                      {cg.type}
                    </span>
                    <span className="text-xs font-mono text-slate-400">客觀證據核定</span>
                  </div>

                  <h4 className="text-lg font-black text-white mt-3">{cg.name}</h4>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                    {cg.definition}
                  </p>

                  <div className="mt-4 space-y-3">
                    <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 text-xs text-slate-300">
                      <strong className="text-amber-300 block font-mono mb-1">📋 客觀證據要求：</strong>
                      {cg.evidenceRequired}
                    </div>

                    <div className="p-3.5 rounded-xl bg-purple-950/30 border border-purple-500/20 text-xs text-purple-200">
                      <strong className="text-purple-300 block font-mono mb-1">✍️ 核定審查流程：</strong>
                      {cg.approvalProcess}
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-esg-950/40 border border-esg-500/30 text-xs text-esg-300 font-medium">
                  🛡️ 風險控管效益：{cg.impactControl}
                </div>
              </GlowCard>
            ))}
          </div>
        )}

        {/* Tab 3: Five Objective KPIs */}
        {activeTab === 'kpis' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {OBJECTIVE_KPIS.map((kpi, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-3xl bg-[#091129]/90 border border-white/15 backdrop-blur-2xl text-center flex flex-col justify-between space-y-4 hover:border-esg-400/50 transition-all"
                >
                  <div>
                    <span className="text-xs font-mono font-bold text-ocean-400 block mb-2">
                      KPI 0{idx + 1}
                    </span>
                    <span className="text-2xl sm:text-3xl font-black font-mono text-esg-300 tracking-tight block">
                      {kpi.target}
                    </span>
                    <h5 className="text-sm font-bold text-white mt-2 leading-tight">
                      {kpi.indicator}
                    </h5>
                  </div>

                  <div className="p-2.5 rounded-xl bg-white/5 text-[11px] text-slate-300 leading-relaxed text-left">
                    {kpi.significance}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-2xl bg-gradient-to-r from-ocean-950/40 via-purple-950/40 to-esg-950/40 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-300">
              <span className="flex items-center gap-2 text-esg-300 font-bold">
                <CheckCircle2 className="w-4 h-4" />
                所有指標納入專案每週協調會議與月報，未達標立即啟動矯正措施
              </span>
              <span className="text-slate-400">
                作為四道 Gate 階段放行之客觀驗收依據
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
