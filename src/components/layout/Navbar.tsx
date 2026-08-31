import React, { useState, useEffect } from 'react';
import { Anchor, Presentation, Sparkles, Menu, X, ShieldCheck, Download, ChevronRight } from 'lucide-react';
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
    { href: '#dilemmas', label: '痛點與轉型' },
    { href: '#engineering', label: '4大工程標的' },
    { href: '#microgrid', label: '微電網平戰轉換' },
    { href: '#bim-platform', label: 'BIM 數位雙生' },
    { href: '#esg-carbon', label: 'IFRS & 碳帳本' },
    { href: '#roi-impact', label: '效益量化' },
    { href: '#stakeholders', label: '分層話術' },
    { href: '#roadmap', label: '時程與合約' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#060A17]/90 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand & Joint Team Tag */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-ocean-500 via-digital-500 to-esg-400 p-0.5 shadow-glow-ocean flex items-center justify-center transition-transform group-hover:scale-105">
            <div className="w-full h-full bg-[#070C1B] rounded-[10px] flex items-center justify-center">
              <Anchor className="w-5 h-5 text-ocean-300" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-white text-base sm:text-lg tracking-tight group-hover:text-ocean-300 transition-colors">
                CSBS 台船港灣雙生
              </span>
              <span className="text-[10px] font-mono font-bold bg-esg-500/20 text-esg-300 border border-esg-500/30 px-2 py-0.5 rounded-full hidden sm:inline-block">
                IFRS S1/S2 合規
              </span>
            </div>
            <span className="text-[11px] text-slate-400 block -mt-0.5">
              台蝕 × 中科大 × 環會協會 聯合提案
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden xl:flex items-center gap-1.5 bg-slate-900/60 p-1.5 rounded-full border border-white/10 backdrop-blur-md">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition-all"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Slide Deck Modal Trigger */}
          <button
            onClick={onOpenPresentation}
            className="flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-xl bg-gradient-to-r from-ocean-500/20 to-digital-500/20 hover:from-ocean-500/30 hover:to-digital-500/30 text-ocean-300 border border-ocean-500/40 hover:border-ocean-400 shadow-glow-ocean transition-all duration-200"
          >
            <Presentation className="w-4 h-4" />
            <span>20頁簡報模式</span>
          </button>

          {/* Quick Contact CTA */}
          <a
            href="#action-steps"
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold rounded-xl bg-gradient-to-r from-esg-500 to-ocean-500 text-slate-950 hover:brightness-110 shadow-glow-esg transition-all"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>立即推進行動</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#070C1B]/95 border-b border-white/10 px-6 py-6 backdrop-blur-2xl transition-all">
          <div className="flex flex-col gap-3">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-2 text-sm text-slate-300 hover:text-ocean-300 border-b border-white/5 font-medium"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPresentation();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-ocean-500/20 to-digital-500/20 text-ocean-300 border border-ocean-500/40 text-sm font-bold"
              >
                <Presentation className="w-4 h-4" />
                開啟 20 頁簡報模式
              </button>
              <a
                href="#action-steps"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-esg-500 to-ocean-500 text-slate-950 font-bold text-sm"
              >
                <Sparkles className="w-4 h-4" />
                立即推進三大行動
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
