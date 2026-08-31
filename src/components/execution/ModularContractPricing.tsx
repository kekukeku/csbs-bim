import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { GlowCard } from '../ui/GlowCard';
import { CONTRACT_PRICING_MODULES } from '../../data/proposalData';
import { Layers, FileText, CheckCircle2, DollarSign, ArrowRight, ShieldCheck, Cpu } from 'lucide-react';

export const ModularContractPricing: React.FC = () => {
  return (
    <section id="roadmap" className="py-20 relative bg-gradient-to-b from-transparent via-[#091128]/70 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="商務與合約設計"
          slideTag="Slide 17 / 20"
          title="合約架構與"
          gradientText="彈性模組化報價模式"
          subtitle="建議採取「分拆計價、模組採購、合約包容」之務實策略，讓台蝕與台營合法合規承攬，中科大與環會協會靈活分工！"
        />

        {/* 3 Pricing Modules Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {CONTRACT_PRICING_MODULES.map((mod, idx) => (
            <GlowCard
              key={idx}
              glowColor={idx === 0 ? 'cyan' : idx === 1 ? 'purple' : 'emerald'}
              className="space-y-4 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-ocean-400">
                    模組 0{idx + 1}
                  </span>
                  <span className="text-xs font-mono text-slate-400">{mod.unit}</span>
                </div>

                <h3 className="text-lg font-black text-white mt-3 leading-snug">
                  {mod.module}
                </h3>

                <div className="my-4 p-3.5 rounded-2xl bg-black/40 border border-white/5">
                  <span className="text-xs text-slate-400 font-mono block">參考費用行情</span>
                  <span className="text-xl font-black font-mono text-esg-300 mt-0.5 block">
                    {mod.price}
                  </span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {mod.scope}
                </p>
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-xs text-ocean-300 font-medium">
                🎯 實質效益：{mod.benefit}
              </div>
            </GlowCard>
          ))}
        </div>

        {/* Flexible Subcontracting Structure Ribbon */}
        <div className="rounded-3xl p-6 sm:p-8 bg-[#0C1530]/90 border border-white/10 backdrop-blur-2xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-ocean-400 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" />
              彈性承攬架構設計（Flexible Procurement）
            </span>
            <h4 className="text-2xl font-black text-white leading-snug">
              台蝕/台營承攬主標 ＋ 產學分包輕量化
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              由台蝕（防蝕主體）或台營（甲級營造主體）出面承攬台船主標合約；中國科大承接數位模型平臺研發，環會協會承接永續會計與 IFRS 諮詢。資金核銷靈活合法，大幅降低台蝕技術研發人力之負擔！
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
            <div className="p-4 rounded-2xl bg-black/40 border border-ocean-500/30 space-y-2">
              <span className="text-ocean-300 font-bold block">🏢 台蝕 ＋ 台營主約</span>
              <p className="text-slate-300">總體承攬、施工安全、防蝕塗裝、水下陽極板與結構補強</p>
            </div>
            <div className="p-4 rounded-2xl bg-black/40 border border-purple-500/30 space-y-2">
              <span className="text-purple-300 font-bold block">🎓 中科大 ＋ 環會協會技術分包</span>
              <p className="text-slate-300">3D BIM 建模、三色演算法開發、IFRS S1/S2 審計確信底稿</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
