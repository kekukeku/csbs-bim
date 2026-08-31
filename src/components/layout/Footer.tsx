import React from 'react';
import { Anchor, ArrowUp, Building2, BookOpenCheck, ShieldCheck } from 'lucide-react';
import { PROPOSAL_META } from '../../data/proposalData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050811] border-t border-white/5 py-12 text-marine-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-white/5 text-xs">
          {/* Col 1: Initiative Info */}
          <div className="space-y-3 md:col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-marine-900 border border-white/10 flex items-center justify-center text-ocean-400">
                <Anchor className="w-4 h-4" />
              </div>
              <span className="font-bold text-white text-sm">
                台船營建工程低碳精進暨施工風險治理
              </span>
            </div>
            <p className="text-marine-400 leading-relaxed max-w-md">
              以 BIM 數位雙生與 IFRS S1/S2 永續治理賦能台船港灣工程升級。落實四道決策 Gate 與承諾分層原則，打造智慧海洋工程新標竿。
            </p>
          </div>

          {/* Col 2: Joint Partners */}
          <div className="space-y-2">
            <span className="text-[11px] font-mono text-ocean-400 uppercase font-semibold block">
              提案聯合團隊
            </span>
            <ul className="space-y-1.5 text-marine-300">
              <li>台灣環境管理會計協會</li>
              <li>中國科技大學建築設計院</li>
            </ul>
          </div>

          {/* Col 3: Target Partners */}
          <div className="space-y-2">
            <span className="text-[11px] font-mono text-sage-400 uppercase font-semibold block">
              提報夥伴單位
            </span>
            <ul className="space-y-1.5 text-marine-300">
              <li>台船防蝕科技股份有限公司</li>
              <li>台船營造（台營）</li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright & scroll to top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-marine-500">
          <div>
            © 2026 CSBS BIM & ESG Joint Initiative. All rights reserved. 網址：<span className="text-ocean-400 font-mono">csbs.kkuo.cc.cd</span>
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-marine-900/60 hover:bg-marine-800 text-marine-300 transition-colors"
          >
            <span>返回頂部</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
