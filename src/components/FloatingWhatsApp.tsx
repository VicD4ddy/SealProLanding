import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const FloatingWhatsApp: React.FC = () => {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const phone = '584144416287';
  const defaultMessage =
    language === 'es'
      ? 'Hola Seal Pro, requiero cotización y asesoría técnica sobre empacaduras de motor.'
      : 'Hello Seal Pro, I need a quotation and technical advice regarding engine gasket kits.';

  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Tooltip Popup Bubble */}
      {isOpen && (
        <div className="mb-3 bg-white border-2 border-[#1a1c1c] shadow-industrial-black p-4 w-72 text-[#1a1c1c] animate-in slide-in-from-bottom-3 duration-200">
          <div className="flex justify-between items-start mb-2">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse" />
              <span className="font-heading text-xs font-bold uppercase text-[#df0a1a]">
                {language === 'es' ? 'SOPORTE TÉCNICO DE PLANTA' : 'DIRECT PLANT SUPPORT'}
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-neutral-400 hover:text-neutral-900 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="font-body text-xs text-neutral-700 mb-3 leading-relaxed">
            {language === 'es'
              ? '¿Dudas con la aplicación de tu motor o medidas de torque? Habla directamente con un especialista ahora.'
              : 'Need help with engine fitment or factory torque specifications? Chat directly with an engineer now.'}
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-center font-heading text-xs font-bold uppercase py-2 px-3 transition-colors shadow-sm"
          >
            {language === 'es' ? 'INICIAR CHAT DE WHATSAPP' : 'START WHATSAPP CHAT'}
          </a>
        </div>
      )}

      {/* Floating Action Trigger Button */}
      <div className="flex items-center gap-2">
        {!isOpen && (
          <div
            onClick={() => setIsOpen(true)}
            className="hidden sm:flex items-center bg-[#1a1c1c] text-white text-[11px] font-heading font-bold uppercase px-3 py-1.5 shadow-md border border-neutral-700 cursor-pointer hover:border-[#df0a1a] transition-all"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 mr-2 animate-ping" />
            {language === 'es' ? '¿CONSULTA TÉCNICA?' : 'NEED ADVICE?'}
          </div>
        )}

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] hover:bg-[#20bd5a] text-white p-3.5 rounded-full shadow-industrial-black hover:scale-110 active:scale-95 transition-all flex items-center justify-center cursor-pointer group"
          title="WhatsApp Seal Pro"
          aria-label="WhatsApp Support"
        >
          <MessageCircle className="w-6 h-6 fill-current" />
        </a>
      </div>
    </div>
  );
};
