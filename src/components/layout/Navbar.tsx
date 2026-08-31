import React, { useState, useEffect } from 'react';
import { Anchor, Presentation, Menu, X, ChevronRight, FileText } from 'lucide-react';
import { PROPOSAL_META } from '../../data/proposalData';

interface NavbarProps {
  onOpenPresentation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenPresentation }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#overview', label: '核心架構' },
    { href: '#commitment-tiers', label: '責任分層' },
    { href: '#risk-governance', label: '決策 Gate' },
    { href: '#engineering', label: '4大工程標的' },
    { href: '#microgrid', label: '綠能(選項)' },
    { href: '#esg-carbon', label: 'IFRS 碳帳本' },
    { href: '#roi-impact', label: '效益與KPI' },
    { href: '#stakeholders', label: '分層話術' },
    { href: '#preconditions', label: '5大前提' },
    { href: '#roadmap', label: '推動期程' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-[#0A0F1D]/95 backdrop-blur-md border-b border-white/10 py-3'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl bg-marine-800 border border-white/10 flex items-center justify-center text-ocean-400 group-hover:border-ocean-500/40 transition-colors">
            <Anchor className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-white text-base tracking-tight">
                CSBS 台船港灣雙生
              </span>
              <span className="text-[10px] font-mono font-medium bg-ocean-950 text-ocean-300 border border-ocean-800/60 px-1.5 py-0.5 rounded hidden sm:inline-block">
                v3.0 治理版
              </span>
            </div>
            <span className="text-[11px] text-marine-400 block -mt-0.5">
              台蝕 × 中科大 × 環會協會 聯合提案
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden xl:flex items-center gap-1 bg-marine-900/80 px-3 py-1.5 rounded-full border border-white/10">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="px-2.5 py-1 text-xs font-medium text-marine-300 hover:text-white hover:bg-white/5 rounded-full transition-all"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-2.5">
          <button
            onClick={onOpenPresentation}
            className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-xl bg-marine-800 hover:bg-marine-700 text-slate-200 border border-white/10 transition-all"
          >
            <Presentation className="w-3.5 h-3.5 text-ocean-400" />
            <span>精選簡報</span>
          </button>

          <a
            href="#action-steps"
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold rounded-xl bg-ocean-600 hover:bg-ocean-500 text-white shadow-card-clean transition-all"
          >
            <span>推進行動</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden p-2 rounded-xl bg-marine-900 border border-white/10 text-marine-300 hover:text-white"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0A0F1D]/98 border-b border-white/10 px-6 py-6 backdrop-blur-xl">
          <div className="flex flex-col gap-2.5">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-2 text-sm text-marine-300 hover:text-white border-b border-white/5 font-medium"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-marine-500" />
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPresentation();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-marine-800 text-slate-200 border border-white/10 text-xs font-bold"
              >
                <Presentation className="w-4 h-4 text-ocean-400" />
                開啟 20 頁全景簡報
              </button>
              <a
                href="#action-steps"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-ocean-600 text-white font-bold text-xs"
              >
                立即推進三大行動
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
