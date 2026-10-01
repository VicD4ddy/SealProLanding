import React, { useEffect } from 'react';
import { X, ShieldCheck, FileText, CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export type LegalDocType = 'privacy' | 'terms' | 'warranty' | null;

interface LegalModalProps {
  type: LegalDocType;
  onClose: () => void;
  onSwitchType: (type: LegalDocType) => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose, onSwitchType }) => {
  const { t } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (type) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [type, onClose]);

  if (!type) return null;

  const getDocData = () => {
    switch (type) {
      case 'privacy':
        return {
          title: t.legal.privacyTitle,
          icon: <ShieldCheck className="w-5 h-5 text-[#df0a1a]" />,
          sections: t.legal.privacySections,
        };
      case 'terms':
        return {
          title: t.legal.termsTitle,
          icon: <FileText className="w-5 h-5 text-[#df0a1a]" />,
          sections: t.legal.termsSections,
        };
      case 'warranty':
      default:
        return {
          title: t.legal.warrantyTitle,
          icon: <CheckCircle className="w-5 h-5 text-[#df0a1a]" />,
          sections: t.legal.warrantySections,
        };
    }
  };

  const docData = getDocData();

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-[#1a1c1c] text-white border border-neutral-700 w-full max-w-3xl max-h-[90vh] flex flex-col shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800 bg-[#141515]">
          <div className="flex items-center gap-2.5">
            {docData.icon}
            <h2 id="legal-modal-title" className="font-heading text-lg md:text-xl font-bold tracking-tight text-white uppercase">
              {docData.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Cerrar modal"
            className="text-neutral-400 hover:text-white p-1 rounded-sm transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Nav Tabs */}
        <div className="flex border-b border-neutral-800 bg-[#232424] px-6 text-xs font-heading font-semibold uppercase tracking-wider overflow-x-auto">
          <button
            onClick={() => onSwitchType('privacy')}
            className={`py-2.5 px-3 border-b-2 transition-colors cursor-pointer whitespace-nowrap ${
              type === 'privacy'
                ? 'border-[#df0a1a] text-white font-bold'
                : 'border-transparent text-neutral-400 hover:text-neutral-200'
            }`}
          >
            {t.footer.privacyPolicy}
          </button>
          <button
            onClick={() => onSwitchType('terms')}
            className={`py-2.5 px-3 border-b-2 transition-colors cursor-pointer whitespace-nowrap ${
              type === 'terms'
                ? 'border-[#df0a1a] text-white font-bold'
                : 'border-transparent text-neutral-400 hover:text-neutral-200'
            }`}
          >
            {t.footer.terms}
          </button>
          <button
            onClick={() => onSwitchType('warranty')}
            className={`py-2.5 px-3 border-b-2 transition-colors cursor-pointer whitespace-nowrap ${
              type === 'warranty'
                ? 'border-[#df0a1a] text-white font-bold'
                : 'border-transparent text-neutral-400 hover:text-neutral-200'
            }`}
          >
            {t.footer.warrantyPolicy}
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-neutral-300 font-body leading-relaxed flex-1">
          <div className="inline-block bg-neutral-800/80 px-2.5 py-1 text-[11px] font-heading font-semibold uppercase text-neutral-300 border border-neutral-700">
            {t.legal.lastUpdated}
          </div>

          <div className="space-y-5">
            {docData.sections.map((section, idx) => (
              <div key={idx} className="border-b border-neutral-800/80 pb-4 last:border-b-0">
                <h3 className="font-heading text-base font-bold text-white uppercase mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#df0a1a]" />
                  {section.title}
                </h3>
                <p className="text-neutral-300 text-xs sm:text-sm pl-3.5 leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-3.5 border-t border-neutral-800 bg-[#141515] flex justify-between items-center text-xs">
          <span className="text-neutral-500 font-heading uppercase tracking-wider text-[11px]">
            Seal Pro Industrial Solutions
          </span>
          <button
            onClick={onClose}
            className="bg-[#df0a1a] hover:bg-[#b20010] text-white font-heading font-bold text-xs uppercase px-4 py-2 transition-colors cursor-pointer"
          >
            {t.legal.closeBtn}
          </button>
        </div>
      </div>
    </div>
  );
};
