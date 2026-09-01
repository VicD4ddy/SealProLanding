import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Globe } from 'lucide-react';

interface LanguageSwitcherProps {
  variant?: 'header' | 'topbar' | 'mobile';
  className?: string;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ variant = 'header', className = '' }) => {
  const { language, toggleLanguage } = useLanguage();

  if (variant === 'topbar') {
    return (
      <button
        onClick={toggleLanguage}
        type="button"
        className={`flex items-center gap-1.5 text-[11px] font-heading font-bold bg-[#1a1c1c] hover:bg-neutral-800 border border-neutral-700 px-2 py-0.5 rounded transition-all cursor-pointer ${className}`}
        title={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
      >
        <Globe className="w-3 h-3 text-[#df0a1a]" />
        <span className={language === 'es' ? 'text-white font-extrabold' : 'text-neutral-500'}>ES</span>
        <span className="text-neutral-600">/</span>
        <span className={language === 'en' ? 'text-white font-extrabold' : 'text-neutral-500'}>EN</span>
      </button>
    );
  }

  if (variant === 'mobile') {
    return (
      <button
        onClick={toggleLanguage}
        type="button"
        className={`w-full flex items-center justify-between bg-[#1a1c1c] hover:bg-neutral-800 p-3 border border-neutral-800 rounded cursor-pointer transition-colors ${className}`}
        title={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
      >
        <div className="flex items-center gap-2 text-xs font-heading font-bold text-white uppercase">
          <Globe className="w-4 h-4 text-[#df0a1a]" />
          <span>{language === 'es' ? 'Idioma actual: Español' : 'Current language: English'}</span>
        </div>
        <div className="inline-flex rounded-sm bg-neutral-900 p-0.5 border border-neutral-700 pointer-events-none">
          <span
            className={`px-3 py-1 text-xs font-heading font-extrabold uppercase transition-all ${
              language === 'es'
                ? 'bg-[#df0a1a] text-white shadow-sm'
                : 'text-neutral-400'
            }`}
          >
            ES
          </span>
          <span
            className={`px-3 py-1 text-xs font-heading font-extrabold uppercase transition-all ${
              language === 'en'
                ? 'bg-[#df0a1a] text-white shadow-sm'
                : 'text-neutral-400'
            }`}
          >
            EN
          </span>
        </div>
      </button>
    );
  }

  // Default 'header' variant: Entire button is clickable and toggles language anywhere you click
  return (
    <button
      onClick={toggleLanguage}
      type="button"
      className={`group inline-flex items-center gap-1.5 bg-[#111213] border-2 border-neutral-700 hover:border-[#df0a1a] p-1 rounded transition-all duration-200 cursor-pointer shadow-sm select-none outline-none focus:outline-none ${className}`}
      title={language === 'es' ? 'Click para cambiar a Inglés' : 'Click to switch to Spanish'}
      aria-label="Toggle language between Spanish and English"
    >
      <Globe className="w-3.5 h-3.5 text-[#df0a1a] group-hover:rotate-45 transition-transform duration-300 ml-1 flex-shrink-0" />
      <div className="flex items-center text-[11px] font-heading font-extrabold tracking-wider pointer-events-none">
        <span
          className={`px-2.5 py-0.5 rounded-xs transition-all duration-200 ${
            language === 'es'
              ? 'bg-[#df0a1a] text-white shadow-xs'
              : 'text-neutral-400 group-hover:text-neutral-200'
          }`}
        >
          ES
        </span>
        <span
          className={`px-2.5 py-0.5 rounded-xs transition-all duration-200 ${
            language === 'en'
              ? 'bg-[#df0a1a] text-white shadow-xs'
              : 'text-neutral-400 group-hover:text-neutral-200'
          }`}
        >
          EN
        </span>
      </div>
    </button>
  );
};
