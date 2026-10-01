import React, { useState, useEffect } from 'react';
import { ShieldCheck, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface CookieBannerProps {
  onOpenPrivacy: () => void;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({ onOpenPrivacy }) => {
  const { t } = useLanguage();
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem('sealpro_cookie_consent');
      if (!consent) {
        // Small delay so it smoothly appears after initial page load
        const timer = setTimeout(() => setVisible(true), 1200);
        return () => clearTimeout(timer);
      }
    } catch {
      // ignore
    }
  }, []);

  const handleConsent = (level: 'all' | 'necessary') => {
    try {
      localStorage.setItem('sealpro_cookie_consent', level);
    } catch {
      // ignore
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <aside
      role="region"
      aria-label="Consentimiento de cookies"
      className="fixed bottom-0 inset-x-0 z-40 p-3 sm:p-4 bg-[#141515]/95 backdrop-blur-md border-t-2 border-[#df0a1a] shadow-2xl animate-in slide-in-from-bottom duration-300"
    >
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-start sm:items-center gap-3 w-full md:w-auto">
          <div className="p-2 bg-neutral-800 border border-neutral-700 text-[#df0a1a] shrink-0 hidden sm:block">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-white mb-0.5">
              {t.cookieBanner.title}
            </h4>
            <p className="font-body text-xs text-neutral-300 max-w-2xl leading-relaxed">
              {t.cookieBanner.message}{' '}
              <button
                type="button"
                onClick={onOpenPrivacy}
                className="text-[#ff4d5a] hover:underline font-semibold cursor-pointer inline-flex items-center gap-0.5"
              >
                {t.cookieBanner.viewPolicy}
              </button>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2.5 w-full md:w-auto justify-end shrink-0">
          <button
            type="button"
            onClick={() => handleConsent('necessary')}
            className="px-3.5 py-2 border border-neutral-700 bg-neutral-800/80 hover:bg-neutral-700 text-neutral-300 hover:text-white font-heading text-xs font-bold uppercase transition-colors cursor-pointer"
          >
            {t.cookieBanner.decline}
          </button>
          <button
            type="button"
            onClick={() => handleConsent('all')}
            className="px-4 py-2 bg-[#df0a1a] hover:bg-[#b20010] text-white font-heading text-xs font-bold uppercase transition-colors shadow-md cursor-pointer"
          >
            {t.cookieBanner.accept}
          </button>
          <button
            type="button"
            onClick={() => handleConsent('necessary')}
            className="p-1.5 text-neutral-400 hover:text-white transition-colors cursor-pointer ml-1"
            title="Cerrar"
            aria-label="Cerrar aviso de cookies"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  );
};
