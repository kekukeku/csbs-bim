import React from 'react';
import { Presentation, ArrowRight, ShieldCheck, Waves, Cpu, BarChart3, Anchor, Building2, CheckCircle2 } from 'lucide-react';
import { PROPOSAL_META } from '../../data/proposalData';

interface HeroSectionProps {
  onOpenPresentation: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenPresentation }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-[#060B18] via-[#0A0F1D] to-[#0A0F1D]">
      {/* Subtle Ocean Ambient Radial Highlights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-ocean-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[250px] bg-sage-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          {/* Top Meta Badges */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-xl bg-marine-900/80 border border-white/10 backdrop-blur-md">
            <span className="px-2.5 py-0.5 rounded-lg text-xs font-mono font-medium bg-ocean-950/80 text-ocean-300 border border-ocean-800/60">
              服務建議書
            </span>
            <span className="text-xs text-marine-300 font-medium">
              台船營建工程低碳精進暨施工風險治理
            </span>
            <span className="hidden sm:inline-block text-xs font-mono text-marine-500">|</span>
            <span className="hidden sm:inline-block text-xs font-mono text-sage-400 font-medium">
              2026 年 9 月
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
            以 <span className="gradient-text-ocean">BIM 數位雙生</span> 與{' '}
            <span className="gradient-text-esg">ESG 永續治理</span>
            <br />
            賦能台船港灣工程升級
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-marine-300 max-w-2xl mx-auto leading-relaxed">
            落實承諾分層 ｜ 四道決策 Gate ｜ 科學劣化機理解析 ｜ 空窗期分段施工
          </p>

          {/* Proposer and Target Grid */}
          <div className="pt-2 pb-4 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto text-left text-xs">
            <div className="p-3.5 rounded-xl bg-marine-900/60 border border-white/5 space-y-1">
              <span className="text-marine-400 font-mono block text-[11px]">提案聯合團隊</span>
              <p className="font-semibold text-slate-200">中華民國環境管理會計協會 × 中國科技大學建築設計院</p>
            </div>
            <div className="p-3.5 rounded-xl bg-marine-900/60 border border-white/5 space-y-1">
              <span className="text-marine-400 font-mono block text-[11px]">提報對象夥伴</span>
              <p className="font-semibold text-slate-200">台船防蝕科技（台蝕） / 台船營造（台營）</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={onOpenPresentation}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-sm bg-ocean-600 hover:bg-ocean-500 text-white shadow-ocean-soft transition-all duration-200 flex items-center justify-center gap-2"
            >
              <Presentation className="w-4 h-4" />
              <span>開啟 20 頁全景簡報</span>
            </button>

            <a
              href="#risk-governance"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-medium text-sm bg-marine-800 hover:bg-marine-700 text-slate-200 border border-white/10 transition-all duration-200 flex items-center justify-center gap-2"
            >
              <span>檢視四道決策 Gate</span>
              <ArrowRight className="w-4 h-4 text-marine-400" />
            </a>
          </div>
        </div>

        {/* 4 Clean Engineering Highlight Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16 pt-8 border-t border-white/5">
          <div className="p-5 rounded-2xl bg-marine-900/40 border border-white/5 space-y-1 text-center sm:text-left">
            <span className="text-2xl font-bold font-mono text-ocean-400">950m</span>
            <h4 className="text-xs font-semibold text-white">大船塢水位變動帶防蝕</h4>
            <p className="text-[11px] text-marine-400">快拆分段施工，不搶修船檔期</p>
          </div>

          <div className="p-5 rounded-2xl bg-marine-900/40 border border-white/5 space-y-1 text-center sm:text-left">
            <span className="text-2xl font-bold font-mono text-sage-400">1,158 坪</span>
            <h4 className="text-xs font-semibold text-white">海軍新增庫房與改建廠房</h4>
            <p className="text-[11px] text-marine-400">四大關鍵淨空與機電衝突檢核</p>
          </div>

          <div className="p-5 rounded-2xl bg-marine-900/40 border border-white/5 space-y-1 text-center sm:text-left">
            <span className="text-2xl font-bold font-mono text-ocean-300">4 道 Gate</span>
            <h4 className="text-xs font-semibold text-white">主軸 A 施工風險治理</h4>
            <p className="text-[11px] text-marine-400">未簽認不施工，階段獨立計價</p>
          </div>

          <div className="p-5 rounded-2xl bg-marine-900/40 border border-white/5 space-y-1 text-center sm:text-left">
            <span className="text-2xl font-bold font-mono text-sand-300">IFRS S1/S2</span>
            <h4 className="text-xs font-semibold text-white">永續會計與碳帳本底稿</h4>
            <p className="text-[11px] text-marine-400">氣候實體風險量化，爭取 CAPEX</p>
          </div>
        </div>
      </div>
    </section>
  );
};
