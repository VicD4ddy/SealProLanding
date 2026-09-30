import React from 'react';
import { ShieldCheck, Award, Wrench, Gauge } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { AnimatedCounter } from './AnimatedCounter';
import { RevealOnScroll } from './RevealOnScroll';

export const StatsSection: React.FC = () => {
  const { language } = useLanguage();

  const stats = [
    {
      icon: Award,
      value: 15,
      prefix: '+',
      suffix: '',
      decimals: 0,
      titleEs: 'AÑOS DE EXPERIENCIA',
      titleEn: 'YEARS OF HERITAGE',
      subtitleEs: 'Ingeniería y formulación de sellado automotriz',
      subtitleEn: 'Engineering and automotive sealing formulation',
    },
    {
      icon: ShieldCheck,
      value: 100,
      prefix: '',
      suffix: '%',
      decimals: 0,
      titleEs: 'HERMETICIDAD ENSAYADA',
      titleEn: 'TESTED HERMETICITY',
      subtitleEs: 'Cero fugas de compresión en banco de pruebas',
      subtitleEn: 'Zero compression loss on validation test benches',
    },
    {
      icon: Wrench,
      value: 10000,
      prefix: '+',
      suffix: '',
      decimals: 0,
      titleEs: 'KITS INSTALADOS',
      titleEn: 'KITS INSTALLED',
      subtitleEs: 'En talleres mecánicos y flotas comerciales',
      subtitleEn: 'Across professional repair shops and commercial fleets',
    },
    {
      icon: Gauge,
      value: 0.05,
      prefix: '< ',
      suffix: ' mm',
      decimals: 2,
      titleEs: 'TOLERANCIA DE PLANITUD',
      titleEn: 'FLATNESS TOLERANCE',
      subtitleEs: 'Corte y estampado láser de máxima precisión',
      subtitleEn: 'High-precision laser cut and stamping accuracy',
    },
  ];

  return (
    <section className="bg-[#1a1c1c] text-white py-10 sm:py-14 px-4 sm:px-6 lg:px-12 border-b-2 border-neutral-800 relative overflow-hidden">
      {/* Decorative Red Light Accent */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#df0a1a]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <RevealOnScroll key={idx} direction="up" delay={idx * 100} duration={600}>
                <div className="p-5 sm:p-6 bg-[#232525] border border-neutral-700/80 hover:border-[#df0a1a] transition-all duration-300 group hover-lift shadow-md h-full flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 bg-[#111213] border border-neutral-700 flex items-center justify-center group-hover:border-[#df0a1a] transition-colors">
                      <Icon className="w-5 h-5 text-[#df0a1a] group-hover:scale-110 transition-transform" />
                    </div>
                    <span className="text-[10px] font-heading font-bold text-neutral-500 tracking-widest uppercase">
                      BENCHMARK
                    </span>
                  </div>

                  <div>
                    <div className="font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-1 group-hover:text-[#df0a1a] transition-colors">
                      <AnimatedCounter
                        end={stat.value}
                        prefix={stat.prefix}
                        suffix={stat.suffix}
                        decimals={stat.decimals}
                        duration={2000}
                      />
                    </div>
                    <h3 className="font-heading text-xs font-bold uppercase tracking-wider text-neutral-200 mb-1.5">
                      {language === 'es' ? stat.titleEs : stat.titleEn}
                    </h3>
                    <p className="font-body text-xs text-neutral-400 leading-relaxed">
                      {language === 'es' ? stat.subtitleEs : stat.subtitleEn}
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
};
