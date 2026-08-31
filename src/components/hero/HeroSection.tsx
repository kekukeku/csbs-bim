import React from 'react';
import { Anchor, ShieldCheck, Sparkles, Activity, ArrowRight, Presentation, CheckCircle2, ChevronDown, Layers, FileSpreadsheet } from 'lucide-react';
import { PROPOSAL_META } from '../../data/proposalData';

interface HeroSectionProps {
  onOpenPresentation: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenPresentation }) => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 overflow-hidden">
      {/* Background Gradient Mesh & Neon Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] sm:w-[1100px] h-[500px] bg-gradient-to-tr from-ocean-500/20 via-digital-500/20 to-esg-500/20 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-ocean-500/15 rounded-full blur-[90px] pointer-events-none -z-10" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-esg-500/15 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Futuristic Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Top Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-ocean-500/20 via-digital-500/20 to-esg-500/20 border border-ocean-500/40 backdrop-blur-xl shadow-glow-ocean mb-8 animate-float">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-esg-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-esg-500"></span>
          </span>
          <span className="text-xs sm:text-sm font-extrabold font-mono tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-ocean-300 via-white to-esg-300">
            台船港灣工程重大升級 ｜ BIM 數位雙生 × ESG 永續治理
          </span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-[1.1] max-w-5xl mx-auto">
          以 <span className="gradient-text-ocean">BIM 數位雙生</span> 與{' '}
          <span className="gradient-text-esg">ESG 永續治理</span>
          <br />
          <span className="gradient-text-rainbow">賦能台船港灣工程升級</span>
        </h1>

        {/* Subtitle / Value Hook */}
        <p className="mt-6 text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
          從傳統填縫防蝕等削價競爭，翻轉為<strong className="text-white font-semibold">「董事會層級重大資本支出（CAPEX）專款投資」</strong>。
          結合 3D 輕量化 Web 預警、非紅綠能戰備微電網與 IFRS S1/S2 會計師確信底稿，鎖定高毛利長約運維！
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-5">
          <button
            onClick={onOpenPresentation}
            className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl bg-gradient-to-r from-esg-500 via-ocean-500 to-digital-500 text-slate-950 font-black text-sm sm:text-base hover:brightness-110 shadow-glow-ocean hover:scale-105 transition-all flex items-center gap-2.5"
          >
            <Presentation className="w-5 h-5" />
            <span>開啟 20 頁全景簡報</span>
          </button>

          <a
            href="#engineering"
            className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl bg-slate-900/80 hover:bg-slate-800 text-white border border-white/15 hover:border-ocean-400 text-sm sm:text-base font-bold backdrop-blur-xl transition-all flex items-center gap-2"
          >
            <span>探索 4 大標的與 3D 模擬</span>
            <ArrowRight className="w-4 h-4 text-ocean-400" />
          </a>
        </div>

        {/* Joint Partners & Proposers Ribbon */}
        <div className="mt-16 pt-8 border-t border-white/10 max-w-4xl mx-auto">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400 block mb-4">
            產學研金四位一體 ｜ 黃金三角聯合陣容
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-ocean-500/40 transition-all">
              <span className="text-[10px] font-mono text-ocean-400 uppercase font-bold block">現場工程承攬主體</span>
              <h4 className="text-sm font-bold text-white mt-1">台船防蝕 ＋ 台船營造</h4>
              <p className="text-xs text-slate-400 mt-1">甲級營造、水下重防蝕、陽極板施工實績</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-purple-500/40 transition-all">
              <span className="text-[10px] font-mono text-purple-400 uppercase font-bold block">數位模型與土木防災</span>
              <h4 className="text-sm font-bold text-white mt-1">中國科技大學 建築設計院</h4>
              <p className="text-xs text-slate-400 mt-1">3D BIM 輕量化平台、Sensor 預警演算法</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-esg-500/40 transition-all">
              <span className="text-[10px] font-mono text-esg-400 uppercase font-bold block">國際永續會計與治理</span>
              <h4 className="text-sm font-bold text-white mt-1">中華民國環境管理會計協會</h4>
              <p className="text-xs text-slate-400 mt-1">金管會 IFRS S1/S2 底稿、重大 CAPEX 精算</p>
            </div>
          </div>
        </div>

        {/* Highlight Stats Strip */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto text-left">
          <div className="p-4 rounded-2xl bg-[#090F22]/80 border border-ocean-500/30 backdrop-blur-xl">
            <span className="text-2xl sm:text-3xl font-black text-ocean-300 font-mono">950m</span>
            <p className="text-xs text-slate-400 font-medium mt-0.5">亞洲指標大塢數位雙生</p>
          </div>
          <div className="p-4 rounded-2xl bg-[#090F22]/80 border border-esg-500/30 backdrop-blur-xl">
            <span className="text-2xl sm:text-3xl font-black text-esg-300 font-mono">30~50%</span>
            <p className="text-xs text-slate-400 font-medium mt-0.5">預期停工損失大幅降低</p>
          </div>
          <div className="p-4 rounded-2xl bg-[#090F22]/80 border border-digital-500/30 backdrop-blur-xl">
            <span className="text-2xl sm:text-3xl font-black text-digital-300 font-mono">72 小時</span>
            <p className="text-xs text-slate-400 font-medium mt-0.5">微電網戰時孤島連續供電</p>
          </div>
          <div className="p-4 rounded-2xl bg-[#090F22]/80 border border-sun-500/30 backdrop-blur-xl">
            <span className="text-2xl sm:text-3xl font-black text-sun-300 font-mono">100%</span>
            <p className="text-xs text-slate-400 font-medium mt-0.5">金管會 IFRS S1/S2 合規</p>
          </div>
        </div>
      </div>
    </section>
  );
};
