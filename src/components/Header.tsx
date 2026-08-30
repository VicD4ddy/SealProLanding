import React, { useState } from 'react';
import { ActiveTab, QuoteItem } from '../types';
import { Menu, X, ShoppingCart, Wrench, ShieldCheck, FileText, PhoneCall, HelpCircle } from 'lucide-react';

interface HeaderProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  quoteItems: QuoteItem[];
  onOpenQuote: () => void;
  onOpenContact: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  quoteItems,
  onOpenQuote,
  onOpenContact,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const totalItemsInQuote = quoteItems.reduce((acc, item) => acc + item.quantity, 0);

  const navLinks: { key: ActiveTab; label: string; icon: React.ReactNode }[] = [
    { key: 'products', label: 'PRODUCTOS', icon: <Wrench className="w-4 h-4" /> },
    { key: 'quality', label: 'CALIDAD', icon: <ShieldCheck className="w-4 h-4" /> },
    { key: 'about', label: 'NOSOTROS', icon: <HelpCircle className="w-4 h-4" /> },
    { key: 'tech-specs', label: 'FICHAS TÉCNICAS', icon: <FileText className="w-4 h-4" /> },
  ];

  const handleNav = (tab: ActiveTab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="bg-[#1a1c1c] w-full top-0 sticky z-50 border-b-2 border-[#df0a1a] shadow-md">
      {/* Top Banner Alert for Workshops */}
      <div className="bg-[#111213] border-b border-neutral-800 text-xs text-neutral-400 py-1 px-4 text-center hidden lg:block">
        <div className="max-w-[1280px] mx-auto flex justify-between items-center">
          <span className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 bg-[#df0a1a] rounded-full animate-pulse"></span>
            Línea directa para talleres y rectificadoras automotrices | Envíos a nivel nacional e internacional
          </span>
          <span className="text-neutral-300 font-semibold tracking-wider">
            SOPORTE TÉCNICO: +1 (555) 123-4567 | info@sealpro.com
          </span>
        </div>
      </div>

      <div className="flex justify-between items-center w-full px-4 md:px-12 py-3.5 max-w-[1280px] mx-auto">
        {/* Logo */}
        <button
          onClick={() => handleNav('home')}
          className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#df0a1a]"
          title="Ir al inicio"
        >
          <img
            alt="Seal Pro"
            className="h-8 md:h-9 bg-white px-2.5 py-1 rounded object-contain transition-transform hover:scale-105"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAULETRwXbXz9yZp9-cAsWkQZw21ArQ1HTPzQiUHjw1s9ZzL_IK-6CjZN9WERJeeFTyoDU1cj5pYs6P9UyXrT1iudPF2SfB0TejGfVGCygHjm-NGAWRIHECYM51CJ2sJ87p9_gV9o81BC_S1Qhkkd2oRIW0jmlN58B2_fLz-9f8NBzOku8cDukoXHXsVxOwriUfuXjnwa4hAF4Ls4NYPEyPTrK45d-z5exZuCl9UTsMCX5JCpSnzy6W7MlrsVSefAa6cKs"
          />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => {
            const isActive = activeTab === link.key;
            return (
              <button
                key={link.key}
                onClick={() => handleNav(link.key)}
                className={`font-heading text-[13px] font-bold uppercase tracking-wider transition-colors pb-1 cursor-pointer flex items-center gap-1.5 ${
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

        {/* Desktop CTA Action Buttons */}
        <div className="hidden md:flex items-center gap-4">
          {/* Quote Cart Badge */}
          <button
            onClick={onOpenQuote}
            className="relative font-heading text-xs font-bold uppercase border-2 border-neutral-700 bg-[#111213] text-white px-3 py-2 hover:border-[#df0a1a] hover:text-[#df0a1a] transition-all flex items-center gap-2 cursor-pointer"
            title="Ver Cotización"
          >
            <ShoppingCart className="w-4 h-4 text-[#df0a1a]" />
            <span>COTIZACIÓN</span>
            {totalItemsInQuote > 0 && (
              <span className="bg-[#df0a1a] text-white text-[10px] font-extrabold px-1.5 py-0.5 rounded-full">
                {totalItemsInQuote}
              </span>
            )}
          </button>

          <button
            onClick={onOpenContact}
            className="font-heading text-xs font-bold uppercase border-2 border-neutral-500 bg-transparent text-white px-5 py-2 hover:bg-[#df0a1a] hover:border-[#df0a1a] transition-all duration-300 cursor-pointer"
          >
            CONTACTO
          </button>

          <button
            onClick={onOpenQuote}
            className="font-heading text-xs font-bold uppercase bg-[#df0a1a] text-white px-6 py-2.5 clip-slant-right hover:bg-[#b20010] transition-all duration-300 shadow-md cursor-pointer tracking-wider"
          >
            GET A QUOTE
          </button>
        </div>

        {/* Mobile Nav Button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={onOpenQuote}
            className="relative p-2 text-white bg-neutral-800 border border-neutral-700"
            title="Cotización"
          >
            <ShoppingCart className="w-5 h-5 text-[#df0a1a]" />
            {totalItemsInQuote > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#df0a1a] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {totalItemsInQuote}
              </span>
            )}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white p-1 focus:outline-none"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#111213] border-b-2 border-[#df0a1a] px-5 py-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-3">
            <button
              onClick={() => handleNav('home')}
              className={`text-left font-heading text-sm font-bold uppercase py-2 border-b border-neutral-800 ${
                activeTab === 'home' ? 'text-[#df0a1a]' : 'text-white'
              }`}
            >
              INICIO
            </button>
            {navLinks.map((link) => (
              <button
                key={link.key}
                onClick={() => handleNav(link.key)}
                className={`text-left font-heading text-sm font-bold uppercase py-2 border-b border-neutral-800 flex items-center justify-between ${
                  activeTab === link.key ? 'text-[#df0a1a]' : 'text-white'
                }`}
              >
                <span>{link.label}</span>
                {link.icon}
              </button>
            ))}
          </nav>

          <div className="pt-2 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full font-heading text-xs font-bold uppercase border-2 border-neutral-600 bg-transparent text-white py-2.5 text-center"
            >
              CONTACTO / ASESORÍA
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full font-heading text-xs font-bold uppercase bg-[#df0a1a] text-white py-2.5 clip-slant-right text-center"
            >
              SOLICITAR COTIZACIÓN RÁPIDA ({totalItemsInQuote})
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
