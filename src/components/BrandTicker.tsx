import React from 'react';
import { ShieldCheck, Award, Flame, Cpu, Gauge, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const BrandTicker: React.FC = () => {
  const { language } = useLanguage();

  const brandItems = [
    { name: 'FORD', tag: 'Powerstroke / Triton / Duratec' },
    { name: 'CHEVROLET', tag: 'Vortec / Ecotec / LS Series' },
    { name: 'TOYOTA', tag: '1GR-FE / 2TR-FE / 1NZ-FE' },
    { name: 'JEEP', tag: 'PowerTech 4.0 / Pentastar 3.6' },
    { name: 'DODGE / RAM', tag: 'HEMI 5.7 / Cummins 6.7' },
    { name: 'MITSUBISHI', tag: '4G63 / 6G72 / 4D56' },
    { name: 'NISSAN', tag: 'VQ40 / QR25 / YD25' },
    { name: 'ISUZU', tag: '4JJ1 / 4HK1 D-Max Series' },
    { name: 'CHERY', tag: 'Acteco 1.6 / 2.0 16V' },
    { name: 'HYUNDAI', tag: 'Theta II / Gamma / D4CB' },
  ];

  const badges = [
    { icon: ShieldCheck, text: 'ISO/TS 16949 QUALITY' },
    { icon: Flame, text: '+280°C THERMAL RESIST' },
    { icon: Gauge, text: '2,200+ PSI COMBUSTION' },
    { icon: Cpu, text: 'MLS LASER CALIBRATED' },
    { icon: Award, text: 'OEM INTERCHANGE SPEC' },
    { icon: CheckCircle2, text: '100% VITON® SEALING' },
  ];

  // Repeat for continuous seamless loop
  const duplicatedBrands = [...brandItems, ...brandItems];
  const duplicatedBadges = [...badges, ...badges];

  return (
    <div className="w-full bg-[#111213] border-y border-neutral-800 text-neutral-300 py-3 overflow-hidden relative select-none">
      {/* Edge Gradient Mask for seamless fade in and out */}
      <div className="absolute top-0 left-0 w-16 sm:w-28 h-full bg-gradient-to-r from-[#111213] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-16 sm:w-28 h-full bg-gradient-to-l from-[#111213] to-transparent z-10 pointer-events-none" />

      {/* Top Track: Vehicle Brands Marquee */}
      <div className="flex items-center gap-8 animate-marquee whitespace-nowrap will-change-transform py-1 group hover:[animation-play-state:paused]">
        {duplicatedBrands.map((item, idx) => (
          <div
            key={`brand-${idx}`}
            className="inline-flex items-center gap-2.5 px-3 py-1 rounded bg-[#1a1c1c] border border-neutral-800/80 hover:border-[#df0a1a] transition-colors"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#df0a1a]" />
            <span className="font-heading font-extrabold text-xs sm:text-sm tracking-wider text-white">
              {item.name}
            </span>
            <span className="text-[10px] sm:text-[11px] font-body text-neutral-400 border-l border-neutral-700 pl-2">
              {item.tag}
            </span>
          </div>
        ))}
      </div>

      {/* Bottom Track: Engineering Certifications Marquee (Reverse direction) */}
      <div className="flex items-center gap-6 animate-marquee-reverse whitespace-nowrap will-change-transform mt-2 py-1 group hover:[animation-play-state:paused]">
        {duplicatedBadges.map((badge, idx) => {
          const Icon = badge.icon;
          return (
            <div
              key={`badge-${idx}`}
              className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-heading font-semibold uppercase tracking-wider text-neutral-400 hover:text-white transition-colors"
            >
              <Icon className="w-3.5 h-3.5 text-[#df0a1a]" />
              <span>{badge.text}</span>
              <span className="text-neutral-700 mx-1">•</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
