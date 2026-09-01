import React from 'react';
import { ShieldCheck, Wrench, Globe, Building2 } from 'lucide-react';
import { ActiveTab } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { RevealOnScroll } from './RevealOnScroll';

interface AboutViewProps {
  setActiveTab: (tab: ActiveTab) => void;
  onOpenContact: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onOpenContact }) => {
  const { t } = useLanguage();

  return (
    <div className="w-full bg-[#f9f9f9] min-h-screen py-8 sm:py-12 px-4 sm:px-6 lg:px-12 text-[#1a1c1c]">
      <div className="max-w-[1280px] mx-auto space-y-8 sm:space-y-12">
        {/* Header */}
        <RevealOnScroll direction="up" duration={600}>
          <div className="border-b-2 border-[#dadada] pb-5 sm:pb-6">
            <div className="flex items-center gap-2 text-xs font-heading font-bold uppercase text-[#df0a1a] tracking-widest mb-1">
              <span>{t.about.tag}</span>
            </div>
            <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-[#1a1c1c]">
              {t.about.title}
            </h1>
            <p className="font-body text-xs sm:text-sm text-[#5e3f3b] mt-1 max-w-3xl">
              {t.about.subtitle}
            </p>
          </div>
        </RevealOnScroll>

        {/* Brand Narrative Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <h2 className="font-heading text-2xl font-bold uppercase text-[#1a1c1c]">
              {t.about.storyTitle}
            </h2>
            <p className="font-body text-sm text-neutral-700 leading-relaxed">
              {t.about.storyP1}
            </p>
            <p className="font-body text-sm text-neutral-700 leading-relaxed">
              {t.about.storyP2}
            </p>
            <div className="pt-2 border-l-4 border-[#df0a1a] pl-4 italic text-xs font-body text-neutral-800">
              {t.about.storyQuote}
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-[#1a1c1c] text-white p-6 md:p-8 border-2 border-[#1a1c1c] shadow-industrial-black">
              <h3 className="font-heading text-lg font-bold uppercase text-[#df0a1a] mb-4">
                {t.about.pillarsTitle}
              </h3>
              <div className="space-y-4 text-xs font-body">
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-[#df0a1a] text-white flex items-center justify-center font-bold flex-shrink-0 clip-slant-right">
                    1
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-white uppercase text-sm mb-0.5">{t.about.p1Title}</h4>
                    <p className="text-neutral-300">{t.about.p1Desc}</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-[#df0a1a] text-white flex items-center justify-center font-bold flex-shrink-0 clip-slant-right">
                    2
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-white uppercase text-sm mb-0.5">{t.about.p2Title}</h4>
                    <p className="text-neutral-300">{t.about.p2Desc}</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-[#df0a1a] text-white flex items-center justify-center font-bold flex-shrink-0 clip-slant-right">
                    3
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-white uppercase text-sm mb-0.5">{t.about.p3Title}</h4>
                    <p className="text-neutral-300">{t.about.p3Desc}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Global Distribution & Workshop Network */}
        <div className="bg-white border border-[#dadada] p-8 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-neutral-200">
            <div className="p-4">
              <Building2 className="w-8 h-8 text-[#df0a1a] mx-auto mb-2" />
              <div className="font-heading text-2xl font-extrabold text-[#1a1c1c]">+500</div>
              <div className="text-xs font-heading font-semibold text-neutral-500 uppercase">{t.about.stats.workshops}</div>
            </div>

            <div className="p-4">
              <Wrench className="w-8 h-8 text-[#df0a1a] mx-auto mb-2" />
              <div className="font-heading text-2xl font-extrabold text-[#1a1c1c]">+1,200</div>
              <div className="text-xs font-heading font-semibold text-neutral-500 uppercase">{t.about.stats.skus}</div>
            </div>

            <div className="p-4">
              <Globe className="w-8 h-8 text-[#df0a1a] mx-auto mb-2" />
              <div className="font-heading text-2xl font-extrabold text-[#1a1c1c]">14</div>
              <div className="text-xs font-heading font-semibold text-neutral-500 uppercase">{t.about.stats.countries}</div>
            </div>

            <div className="p-4">
              <ShieldCheck className="w-8 h-8 text-[#df0a1a] mx-auto mb-2" />
              <div className="font-heading text-2xl font-extrabold text-[#1a1c1c]">100%</div>
              <div className="text-xs font-heading font-semibold text-neutral-500 uppercase">{t.about.stats.leakControl}</div>
            </div>
          </div>
        </div>

        {/* CTA to join as distributor */}
        <div className="bg-[#2f3131] text-white p-8 border-t-4 border-[#df0a1a] flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="font-heading text-xl font-bold uppercase text-white mb-1">
              {t.about.distributorCtaTitle}
            </h3>
            <p className="font-body text-xs md:text-sm text-neutral-300">
              {t.about.distributorCtaDesc}
            </p>
          </div>
          <button
            onClick={onOpenContact}
            className="bg-[#df0a1a] hover:bg-[#b20010] text-white font-heading text-xs font-bold uppercase px-6 py-3 clip-slant-right whitespace-nowrap cursor-pointer transition-colors"
          >
            {t.about.distributorCtaBtn}
          </button>
        </div>
      </div>
    </div>
  );
};
