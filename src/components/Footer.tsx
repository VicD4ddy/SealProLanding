import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { ActiveTab } from '../types';

interface FooterProps {
  setActiveTab: (tab: ActiveTab) => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, onOpenContact }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 4000);
    }
  };

  return (
    <footer className="bg-[#2f3131] dark:bg-[#2f3131] border-t-4 border-[#df0a1a] text-white">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-4 md:px-16 py-12 max-w-[1280px] mx-auto">
        {/* Col 1: Brand & statement */}
        <div className="space-y-4">
          <img
            alt="Seal Pro"
            className="h-8 bg-white px-2 py-1 rounded inline-block"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeWIP3P54iaYNsLXmvnaEQa6QysUgjLq1jTnh3PIgTtIgR6znGjROSqEfUwX4nbfjJm1PsIxL_ECxpxIbQ2S-hV4Ggn8rQcIA_zDDmlpwFOR9B_xbgo5YCQ3mPVtRLkJvpKh3yDmDYxoNMg4Pi0o66GXs35tJ7gE37CPOM25UUhQb4JNmQvB1sbJSTwCGOg3QdbDKF8HEEA1MAGRnIWaA0Q_ekPfxibom5cEieY7-SL0ji91H3E4xJA0Pi7T85qsYjS8Q"
          />
          <p className="font-body text-sm text-neutral-300 leading-relaxed">
            Fabricación y distribución de juegos de empacaduras y sellos automotrices de nivel industrial. Alta ingeniería en estanqueidad para motores de alta exigencia.
          </p>
          <div className="pt-2 text-xs text-neutral-400">
            <span className="inline-flex items-center gap-1.5 bg-neutral-800/80 px-2.5 py-1 border border-neutral-700">
              <span className="w-2 h-2 rounded-full bg-[#df0a1a]"></span>
              Certificación ISO/TS 16949
            </span>
          </div>
        </div>

        {/* Col 2: Quick Links */}
        <div>
          <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-neutral-700 pb-2 inline-block">
            ENLACES RÁPIDOS
          </h4>
          <ul className="flex flex-col gap-2.5">
            <li>
              <button
                onClick={() => {
                  setActiveTab('products');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="font-body text-sm text-neutral-300 hover:text-white hover:underline decoration-[#df0a1a] decoration-2 transition-all duration-200 cursor-pointer text-left"
              >
                Catálogo Completo de Empacaduras
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setActiveTab('tech-specs');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="font-body text-sm text-neutral-300 hover:text-white hover:underline decoration-[#df0a1a] decoration-2 transition-all duration-200 cursor-pointer text-left"
              >
                Fichas Técnicas y Torques de Apriete
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setActiveTab('quality');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="font-body text-sm text-neutral-300 hover:text-white hover:underline decoration-[#df0a1a] decoration-2 transition-all duration-200 cursor-pointer text-left"
              >
                Garantía y Control de Calidad
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setActiveTab('about');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="font-body text-sm text-neutral-300 hover:text-white hover:underline decoration-[#df0a1a] decoration-2 transition-all duration-200 cursor-pointer text-left"
              >
                Red de Distribuidores Autorizados
              </button>
            </li>
            <li>
              <button
                onClick={onOpenContact}
                className="font-body text-sm text-neutral-300 hover:text-white hover:underline decoration-[#df0a1a] decoration-2 transition-all duration-200 cursor-pointer text-left"
              >
                Soporte Técnico Especializado
              </button>
            </li>
          </ul>
        </div>

        {/* Col 3: Contact */}
        <div>
          <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-neutral-700 pb-2 inline-block">
            CONTACTO
          </h4>
          <div className="space-y-3 font-body text-sm text-neutral-300">
            <p className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#df0a1a] flex-shrink-0" />
              <span>info@sealpro.com</span>
            </p>
            <p className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#df0a1a] flex-shrink-0" />
              <span>+1 (555) 123-4567</span>
            </p>
            <p className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[#df0a1a] flex-shrink-0 mt-0.5" />
              <span>Parque Industrial Automotriz, Sector Mecánico Central</span>
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenContact}
                className="text-xs uppercase font-heading font-bold text-[#df0a1a] hover:text-white underline"
              >
                Escribir a Asesor de Planta &rarr;
              </button>
            </div>
          </div>
        </div>

        {/* Col 4: Newsletter */}
        <div>
          <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-neutral-700 pb-2 inline-block">
            BOLETÍN TÉCNICO
          </h4>
          <p className="text-xs text-neutral-300 mb-3">
            Reciba boletines mensuales de torques de motores nuevos, manuales de instalación y lanzamientos de SKUs.
          </p>
          <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
            <div className="flex">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="SU CORREO"
                className="bg-[#1a1c1c] border-b-2 border-neutral-500 text-white font-body text-sm w-full px-3 py-2 focus:border-[#df0a1a] focus:ring-0 focus:outline-none placeholder-neutral-500"
              />
              <button
                type="submit"
                aria-label="Suscribirse al boletín técnico"
                className="bg-[#df0a1a] text-white px-3 py-2 hover:bg-[#b20010] transition-colors cursor-pointer flex items-center justify-center"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            {subscribed && (
              <p className="text-xs text-emerald-400 flex items-center gap-1 mt-1 font-semibold animate-in fade-in">
                <CheckCircle2 className="w-3.5 h-3.5" />
                ¡Suscrito al boletín de ingeniería!
              </p>
            )}
          </form>
        </div>
      </div>

      <div className="border-t border-neutral-700 text-center py-4 bg-[#232424]">
        <div className="max-w-[1280px] mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-xs text-neutral-400 gap-2">
          <p className="font-heading uppercase tracking-wider">
            © 2024 SEAL PRO INDUSTRIAL SOLUTIONS. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-4">
            <span className="hover:text-white cursor-pointer">Términos y Condiciones</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer">Políticas de Garantía</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
