import React from 'react';
import { Anchor, ShieldCheck, Award, FileText, ArrowUp, ExternalLink } from 'lucide-react';
import { PROPOSAL_META } from '../../data/proposalData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#040711] border-t border-white/10 text-slate-400 py-16 relative overflow-hidden">
      {/* Glow ambient circle */}
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-ocean-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Joint Team Intro */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-ocean-500 to-esg-400 p-0.5 flex items-center justify-center">
                <div className="w-full h-full bg-[#070C1B] rounded-[10px] flex items-center justify-center">
                  <Anchor className="w-5 h-5 text-ocean-300" />
                </div>
              </div>
              <div>
                <h4 className="text-white font-extrabold text-lg">{PROPOSAL_META.title}</h4>
                <p className="text-xs text-slate-400">{PROPOSAL_META.date} ｜ {PROPOSAL_META.version}</p>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
              結合中華民國環境管理會計協會之金管會 IFRS S1/S2 治理標準、中國科技大學建築設計院之 3D BIM 數位雙生與土木防災平臺，全力賦能台船防蝕（台蝕）與台船營造（台營），打造台灣第一座兼具「重防蝕技術、港灣數位雙生、上市 ESG 合規」之智慧海洋工程示範標竿。
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="text-xs bg-white/5 border border-white/10 px-3 py-1 rounded-full text-slate-300">
                IFRS S1/S2 審計確信
              </span>
              <span className="text-xs bg-white/5 border border-white/10 px-3 py-1 rounded-full text-slate-300">
                3D BIM 輕量化 Web 端
              </span>
              <span className="text-xs bg-white/5 border border-white/10 px-3 py-1 rounded-full text-slate-300">
                非紅戰備綠能微電網
              </span>
            </div>
          </div>

          {/* Col 2: Joint Team Info */}
          <div className="space-y-3">
            <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-ocean-400">
              提案聯合團隊
            </h5>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li className="text-slate-200 font-medium">中華民國環境管理會計協會</li>
              <li className="text-slate-400 text-xs pl-2">沈華榮 理事長 ｜ 郭開文 秘書長 ｜ 朱哲廷 顧問</li>
              <li className="text-slate-200 font-medium pt-2">中國科技大學 建築設計院</li>
              <li className="text-slate-400 text-xs pl-2">BIM 數位模型研發中心 ｜ 結構防災實驗室</li>
            </ul>
          </div>

          {/* Col 3: Target Partners */}
          <div className="space-y-3">
            <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-esg-400">
              對象夥伴與客戶
            </h5>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li className="text-slate-200 font-medium">台船防蝕科技（台蝕 CSBS）</li>
              <li className="text-slate-400 text-xs pl-2">陳經理 專案推動小組</li>
              <li className="text-slate-200 font-medium pt-2">台船營造（台營）</li>
              <li className="text-slate-200 font-medium pt-2">台灣國際造船（台船 CSBC）</li>
              <li className="text-slate-400 text-xs pl-2">蔡董事長 ｜ 蕭課長 ｜ 現場班長</li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright & scroll to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 CSBS BIM & ESG Joint Initiative. All rights reserved. 網址：<span className="text-ocean-400 font-mono">csbs.kkuo.cc.cd</span>
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all"
          >
            <span>返回頂部</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
