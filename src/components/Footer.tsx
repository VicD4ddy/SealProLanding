import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Play } from 'lucide-react';
import { ActiveTab } from '../types';
import { useLanguage } from '../context/LanguageContext';
import logoImg from '../assets/logo.png';

interface FooterProps {
  setActiveTab: (tab: ActiveTab) => void;
  onOpenContact: () => void;
  onReplayIntro?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, onOpenContact, onReplayIntro }) => {
  const { t } = useLanguage();
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
    <footer className="bg-[#2f3131] border-t-4 border-[#df0a1a] text-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-12 py-10 sm:py-12 max-w-[1280px] mx-auto">
        {/* Col 1: Brand & statement */}
        <div className="space-y-4">
          <img
            alt="Seal Pro"
            className="h-10 md:h-12 w-auto object-contain inline-block"
            src={logoImg}
          />
          <p className="font-body text-sm text-neutral-300 leading-relaxed">
            {t.footer.description}
          </p>
          <div className="pt-2 text-xs text-neutral-400">
            <span className="inline-flex items-center gap-1.5 bg-neutral-800/80 px-2.5 py-1 border border-neutral-700">
              <span className="w-2 h-2 rounded-full bg-[#df0a1a]"></span>
              {t.footer.isoCert}
            </span>
          </div>
        </div>

        {/* Col 2: Quick Links */}
        <div>
          <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-neutral-700 pb-2 inline-block">
            {t.footer.quickLinks}
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
                {t.footer.catalogLink}
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
                {t.footer.specsLink}
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
                {t.footer.qualityLink}
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
                {t.footer.aboutLink}
              </button>
            </li>
            <li>
              <button
                onClick={onOpenContact}
                className="font-body text-sm text-neutral-300 hover:text-white hover:underline decoration-[#df0a1a] decoration-2 transition-all duration-200 cursor-pointer text-left"
              >
                {t.footer.advisoryLink}
              </button>
            </li>
            {onReplayIntro && (
              <li>
                <button
                  onClick={onReplayIntro}
                  className="font-body text-sm text-neutral-300 hover:text-white hover:underline decoration-[#df0a1a] decoration-2 transition-all duration-200 cursor-pointer text-left inline-flex items-center gap-1.5 pt-1"
                >
                  <Play className="w-3.5 h-3.5 text-[#df0a1a]" />
                  {t.intro.replay}
                </button>
              </li>
            )}
          </ul>
        </div>

        {/* Col 3: Contact */}
        <div>
          <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-neutral-700 pb-2 inline-block">
            {t.footer.contactTitle}
          </h4>
          <div className="space-y-3 font-body text-sm text-neutral-300">
            <p className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#df0a1a] flex-shrink-0" />
              <span>info@sealpro.com</span>
            </p>
            <p className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#df0a1a] flex-shrink-0" />
              <a
                href="https://wa.me/584144416287"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white hover:underline transition-colors"
                title="Escribir por WhatsApp"
              >
                +58 (414) 441-6287
              </a>
            </p>
            <p className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[#df0a1a] flex-shrink-0 mt-0.5" />
              <span>{t.footer.address}</span>
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenContact}
                className="text-xs uppercase font-heading font-bold text-[#df0a1a] hover:text-white underline cursor-pointer"
              >
                {t.footer.talkToAdvisor}
              </button>
            </div>
          </div>
        </div>

        {/* Col 4: Newsletter */}
        <div>
          <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-neutral-700 pb-2 inline-block">
            {t.footer.newsletterTitle}
          </h4>
          <p className="text-xs text-neutral-300 mb-3">
            {t.footer.newsletterDesc}
          </p>
          <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
            <div className="flex">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.footer.emailPlaceholder}
                className="bg-[#1a1c1c] border-b-2 border-neutral-500 text-white font-body text-sm w-full px-3 py-2 focus:border-[#df0a1a] focus:ring-0 focus:outline-none placeholder-neutral-500"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="bg-[#df0a1a] text-white px-3 py-2 hover:bg-[#b20010] transition-colors cursor-pointer flex items-center justify-center"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            {subscribed && (
              <p className="text-xs text-emerald-400 flex items-center gap-1 mt-1 font-semibold animate-in fade-in">
                <CheckCircle2 className="w-3.5 h-3.5" />
                {t.footer.subscribed}
              </p>
            )}
          </form>
        </div>
      </div>

      <div className="border-t border-neutral-700 text-center py-4 bg-[#232424]">
        <div className="max-w-[1280px] mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-xs text-neutral-400 gap-2">
          <p className="font-heading uppercase tracking-wider">
            {t.footer.rights}
          </p>
          <div className="flex flex-wrap items-center gap-3 md:gap-4">
            <span className="hover:text-white cursor-pointer">{t.footer.terms}</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer">{t.footer.warrantyPolicy}</span>
            {onReplayIntro && (
              <>
                <span>•</span>
                <button
                  onClick={onReplayIntro}
                  className="hover:text-[#ff4d5a] text-neutral-400 hover:underline cursor-pointer transition-colors inline-flex items-center gap-1"
                  title="Ver video de bienvenida"
                >
                  <Play className="w-3 h-3 text-[#df0a1a]" />
                  {t.intro.replay}
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};
