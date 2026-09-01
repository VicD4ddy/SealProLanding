import React, { useState } from 'react';
import { ActiveTab, QuoteItem } from '../types';
import { Menu, X, ShoppingCart, Wrench, ShieldCheck, FileText, HelpCircle, Play } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';
import logoImg from '../assets/logo.png';

interface HeaderProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  quoteItems: QuoteItem[];
  onOpenQuote: () => void;
  onOpenContact: () => void;
  onReplayIntro?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  quoteItems,
  onOpenQuote,
  onOpenContact,
  onReplayIntro,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();
  const totalItemsInQuote = quoteItems.reduce((acc, item) => acc + item.quantity, 0);

  const navLinks: { key: ActiveTab; label: string; icon: React.ReactNode }[] = [
    { key: 'products', label: t.nav.products, icon: <Wrench className="w-4 h-4" /> },
    { key: 'quality', label: t.nav.quality, icon: <ShieldCheck className="w-4 h-4" /> },
    { key: 'about', label: t.nav.about, icon: <HelpCircle className="w-4 h-4" /> },
    { key: 'tech-specs', label: t.nav.techSpecs, icon: <FileText className="w-4 h-4" /> },
  ];

  const handleNav = (tab: ActiveTab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="bg-[#1a1c1c] w-full top-0 sticky z-50 border-b-2 border-[#df0a1a] shadow-md">
      {/* Top Banner Alert for Workshops with Topbar Language Switcher & Watch Animation Button */}
      <div className="bg-[#111213] border-b border-neutral-800 text-xs text-neutral-400 py-1.5 px-4 sm:px-6 lg:px-12 hidden lg:block">
        <div className="max-w-[1280px] mx-auto flex justify-between items-center">
          <span className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 bg-[#df0a1a] rounded-full animate-pulse"></span>
            {t.nav.topBannerText}
          </span>
          <div className="flex items-center gap-3">
            {onReplayIntro && (
              <button
                onClick={onReplayIntro}
                className="inline-flex items-center gap-1.5 text-[11px] font-heading font-bold text-neutral-300 hover:text-white bg-[#1a1c1c] hover:bg-[#df0a1a] border border-neutral-700 hover:border-[#df0a1a] px-2.5 py-0.5 rounded transition-all duration-200 cursor-pointer shadow-xs active:scale-95 group"
                title={t.intro.replay}
              >
                <Play className="w-3 h-3 text-[#df0a1a] group-hover:text-white transition-colors fill-current" />
                <span>{t.nav.watchAnimation}</span>
              </button>
            )}
            <a
              href="https://wa.me/584144416287"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-300 hover:text-white font-semibold tracking-wider text-[11px] transition-colors"
              title="Contactar por WhatsApp"
            >
              {t.nav.topBannerPhone}
            </a>
            <LanguageSwitcher variant="topbar" />
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center w-full px-4 sm:px-6 lg:px-12 py-2 max-w-[1280px] mx-auto min-h-[60px] sm:min-h-[64px] md:min-h-[72px]">
        {/* Logo */}
        <button
          onClick={() => handleNav('home')}
          className="cursor-pointer outline-none focus:outline-none flex items-center h-full py-0.5 select-none"
          title="Seal Pro"
        >
          <img
            alt="Seal Pro"
            className="h-9 sm:h-11 md:h-12 lg:h-14 w-auto object-contain transition-transform duration-200 hover:scale-105"
            src={logoImg}
          />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-5 lg:gap-8 items-center">
          {navLinks.map((link) => {
            const isActive = activeTab === link.key;
            return (
              <button
                key={link.key}
                onClick={() => handleNav(link.key)}
                className={`font-heading text-xs lg:text-[13px] font-bold uppercase tracking-wider transition-colors pb-1 cursor-pointer flex items-center gap-1.5 ${
                  isActive
                    ? 'text-[#df0a1a] border-b-2 border-[#df0a1a]'
                    : 'text-white hover:text-[#df0a1a]'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Desktop CTA Action Buttons + Language Switcher in Top Right */}
        <div className="hidden md:flex items-center gap-2.5 lg:gap-3">
          {/* Quote Cart Badge */}
          <button
            onClick={onOpenQuote}
            className="relative font-heading text-xs font-bold uppercase border-2 border-neutral-700 bg-[#111213] text-white px-3 py-2 hover:border-[#df0a1a] hover:text-[#df0a1a] transition-all flex items-center gap-2 cursor-pointer"
            title={t.nav.quote}
          >
            <ShoppingCart className="w-4 h-4 text-[#df0a1a]" />
            <span>{t.nav.quote}</span>
            {totalItemsInQuote > 0 && (
              <span className="bg-[#df0a1a] text-white text-[10px] font-extrabold px-1.5 py-0.5 rounded-full animate-pulse">
                {totalItemsInQuote}
              </span>
            )}
          </button>

          <button
            onClick={onOpenContact}
            className="font-heading text-xs font-bold uppercase border-2 border-neutral-500 bg-transparent text-white px-3.5 lg:px-4 py-2 hover:bg-[#df0a1a] hover:border-[#df0a1a] transition-all duration-200 cursor-pointer"
          >
            {t.nav.contact}
          </button>

          <button
            onClick={onOpenQuote}
            className="font-heading text-xs font-bold uppercase bg-[#df0a1a] text-white px-4 lg:px-5 py-2.5 clip-slant-right hover:bg-[#b20010] transition-all duration-200 shadow-md cursor-pointer tracking-wider whitespace-nowrap"
          >
            {t.nav.getQuote}
          </button>

          {/* Prominent Language Switcher at the Top-Right */}
          <LanguageSwitcher variant="header" />
        </div>

        {/* Mobile Nav Button & Quick Language / Cart */}
        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher variant="header" className="scale-90" />

          <button
            onClick={onOpenQuote}
            className="relative p-2 text-white bg-neutral-800 border border-neutral-700 rounded-sm active:scale-95 transition-transform"
            title={t.nav.quote}
            aria-label="Ver cotización"
          >
            <ShoppingCart className="w-4 h-4 text-[#df0a1a]" />
            {totalItemsInQuote > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-[#df0a1a] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {totalItemsInQuote}
              </span>
            )}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white p-1.5 bg-neutral-800 border border-neutral-700 rounded-sm focus:outline-none active:scale-95 transition-transform"
            aria-label="Abrir menú de navegación"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#df0a1a]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer Overlay with Smooth Animation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#111213] border-b-2 border-[#df0a1a] px-5 py-6 space-y-5 animate-in fade-in slide-in-from-top-4 duration-200 shadow-2xl">
          {/* Mobile Language Switcher */}
          <LanguageSwitcher variant="mobile" />

          <nav className="flex flex-col space-y-1 divide-y divide-neutral-800">
            <button
              onClick={() => handleNav('home')}
              className={`text-left font-heading text-sm font-bold uppercase py-3 flex items-center justify-between ${
                activeTab === 'home' ? 'text-[#df0a1a]' : 'text-white'
              }`}
            >
              <span>{t.nav.home}</span>
              <span className="text-xs text-[#df0a1a]">●</span>
            </button>
            {navLinks.map((link) => (
              <button
                key={link.key}
                onClick={() => handleNav(link.key)}
                className={`text-left font-heading text-sm font-bold uppercase py-3 flex items-center justify-between transition-colors ${
                  activeTab === link.key ? 'text-[#df0a1a]' : 'text-neutral-200 hover:text-white'
                }`}
              >
                <span>{link.label}</span>
                <span className="text-neutral-500">{link.icon}</span>
              </button>
            ))}
          </nav>

          <div className="pt-2 flex flex-col gap-3">
            {onReplayIntro && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onReplayIntro();
                }}
                className="w-full font-heading text-xs font-bold uppercase border border-neutral-700 bg-[#1a1c1c] text-neutral-300 hover:text-white py-2.5 text-center flex items-center justify-center gap-2 active:bg-neutral-800 transition-colors"
              >
                <Play className="w-3.5 h-3.5 text-[#df0a1a] fill-current" />
                <span>{t.nav.watchAnimation}</span>
              </button>
            )}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full font-heading text-xs font-bold uppercase border-2 border-neutral-600 bg-transparent text-white py-3 text-center active:bg-neutral-800"
            >
              {t.nav.contact}
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full font-heading text-xs font-bold uppercase bg-[#df0a1a] hover:bg-[#b20010] text-white py-3 clip-slant-right text-center shadow-lg active:scale-98 transition-all"
            >
              {t.nav.requestQuoteFull} ({totalItemsInQuote})
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
