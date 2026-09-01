import React, { useState } from 'react';
import { Product, ActiveTab } from '../types';
import { Sparkles, Search, ArrowRight, ShieldCheck, Flame, Gauge, Check, Layers, Zap, Maximize2, Clock, Truck, PhoneCall } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getLocalizedProduct } from '../utils/localize';
import { TiltCard } from './TiltCard';
import { RevealOnScroll } from './RevealOnScroll';

interface HomeViewProps {
  products: Product[];
  setActiveTab: (tab: ActiveTab) => void;
  onSelectProduct: (product: Product) => void;
  onOpenContact: () => void;
  onOpenQuote: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  products,
  setActiveTab,
  onSelectProduct,
  onOpenContact,
  onOpenQuote: _onOpenQuote,
}) => {
  const [searchMake, setSearchMake] = useState('Ford');
  const [searchEngine, setSearchEngine] = useState('');
  const { t, language } = useLanguage();

  // Mouse Parallax 3D State for Hero Section
  const [heroMouse, setHeroMouse] = useState({ x: 0, y: 0 });

  const handleHeroMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2; // -1 to 1
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2; // -1 to 1
    setHeroMouse({
      x: Math.max(-1, Math.min(1, x)),
      y: Math.max(-1, Math.min(1, y)),
    });
  };

  const handleHeroMouseLeave = () => {
    setHeroMouse({ x: 0, y: 0 });
  };

  const featuredProducts = products
    .filter((p) => p.isFeatured)
    .slice(0, 3)
    .map((p) => getLocalizedProduct(p, language));

  const handleQuickSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setActiveTab('products');
  };

  return (
    <div className="w-full bg-[#f9f9f9] text-[#1a1c1c] overflow-hidden">
      {/* 1. Hero Section with Interactive 3D Mouse Parallax & Entrance Stagger */}
      <section
        onMouseMove={handleHeroMouseMove}
        onMouseLeave={handleHeroMouseLeave}
        className="relative bg-white pt-8 sm:pt-14 md:pt-20 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 lg:px-12 overflow-hidden border-b border-[#dadada]"
      >
        {/* Subtle Ambient Grid in Background that shifts inversely with mouse */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.03] pointer-events-none transition-transform duration-500 ease-out bg-[radial-gradient(#1a1c1c_1px,transparent_1px)] [background-size:24px_24px]"
          style={{
            transform: `translate(${heroMouse.x * -15}px, ${heroMouse.y * -15}px)`,
          }}
        />

        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center relative z-10">
          <RevealOnScroll direction="up" duration={700}>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#eeeeee] border border-neutral-300 text-xs font-heading font-bold uppercase text-[#b20010] mb-3 sm:mb-4 hover:border-[#df0a1a] transition-colors cursor-default">
                <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                {t.home.badge}
              </div>

              <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1a1c1c] uppercase mb-3 sm:mb-4 leading-[1.12] tracking-tight">
                <span>{t.home.heroTitle1} </span>
                <span className="text-[#df0a1a] block sm:inline">{t.home.heroTitle2}</span>
              </h1>

              <p className="font-body text-sm sm:text-base md:text-lg text-[#5e3f3b] mb-6 sm:mb-8 max-w-lg leading-relaxed">
                {t.home.heroSubtitle}
              </p>

              {/* High-Converting CTA Button Group with Shimmer & Spring Lift */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6">
                <button
                  onClick={() => {
                    setActiveTab('products');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto font-heading text-xs sm:text-sm font-extrabold uppercase bg-[#df0a1a] hover:bg-[#b20010] text-white px-7 sm:px-8 py-3.5 sm:py-4 clip-slant-right btn-shimmer hover-lift shadow-lg hover:shadow-xl cursor-pointer tracking-wider text-center group flex items-center justify-center gap-2.5 active:scale-[0.97]"
                >
                  <span>{t.home.exploreCatalog}</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1.5" />
                </button>
                <button
                  onClick={onOpenContact}
                  className="w-full sm:w-auto font-heading text-xs sm:text-sm font-bold uppercase border-2 border-[#1a1c1c] bg-transparent hover:bg-[#1a1c1c] text-[#1a1c1c] hover:text-white px-6 sm:px-7 py-3.5 sm:py-4 hover-lift transition-all duration-200 cursor-pointer text-center flex items-center justify-center gap-2 active:scale-[0.97] group"
                >
                  <PhoneCall className="w-4 h-4 text-[#df0a1a] group-hover:rotate-12 transition-transform duration-200" />
                  <span>{t.home.requestAdvisory}</span>
                </button>
              </div>

              {/* Above-the-Fold Trust Triggers */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 pt-4 sm:pt-5 border-t border-neutral-200 text-xs text-neutral-700 font-semibold">
                <div className="flex items-center gap-2 group cursor-default">
                  <ShieldCheck className="w-4 h-4 text-[#df0a1a] flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="leading-tight">{t.home.trustBadge1}</span>
                </div>
                <div className="flex items-center gap-2 group cursor-default">
                  <Clock className="w-4 h-4 text-[#df0a1a] flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="leading-tight">{t.home.trustBadge2}</span>
                </div>
                <div className="flex items-center gap-2 group cursor-default">
                  <Truck className="w-4 h-4 text-[#df0a1a] flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="leading-tight">{t.home.trustBadge3}</span>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* 3D Holographic Parallax Container with Smooth Reveal */}
          <RevealOnScroll direction="fade" delay={200} duration={800} className="relative [perspective:1200px] mt-4 md:mt-0">
            {/* Red skewed decorative backdrop accent with inverse parallax */}
            <div
              className="absolute inset-0 bg-[#df0a1a] opacity-10 transform skew-x-[-15deg] scale-105 z-0 transition-transform duration-300 ease-out rounded hidden sm:block"
              style={{
                transform: `skewX(-15deg) scale(1.05) translate(${heroMouse.x * -20}px, ${heroMouse.y * -20}px)`,
              }}
            />

            {/* Main Interactive 3D Card */}
            <div
              className="relative z-10 border border-[#dadada] shadow-industrial-black bg-white transition-transform duration-200 ease-out will-change-transform [transform-style:preserve-3d] hover:shadow-2xl"
              style={{
                transform: `rotateY(${heroMouse.x * 8}deg) rotateX(${-heroMouse.y * 8}deg) translateZ(10px)`,
              }}
            >
              <img
                className="w-full h-auto object-cover block"
                alt="Seal Pro Brandbook and Product Presentation"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbWQyI6tIxFBOn5ij6Q89rxJvWXu3Sen12d3FI1eRyfc7DnFzcTUeJHVh8-ucfARa56Oz49-7Um5yU7qGLj2RzPCEYwlqoZIAVtK_cNkKE3bfkaM289t_aHJx8tq4mThE4a6Weowy0692aMOndS3yG8wsqseRUSV9SaheS30l3v7PI8AXtxASvG-BvB3BIOUcrLRHhALv7rWGwnYoofZWW-TDGEUzDEcrFUUmuolvSYlpEunC9cL0PIqYr2zprlTkcxTs"
              />

              {/* Floating 3D Badge Overlay */}
              <div
                className="absolute top-3 right-3 bg-[#1a1c1c]/90 backdrop-blur-xs border-l-4 border-[#df0a1a] text-white px-2.5 sm:px-3 py-1 sm:py-1.5 shadow-md flex items-center gap-1.5 sm:gap-2 transition-transform duration-150 ease-out [transform:translateZ(40px)]"
                style={{
                  transform: `translate(${heroMouse.x * 10}px, ${heroMouse.y * 10}px) translateZ(35px)`,
                }}
              >
                <Zap className="w-3.5 h-3.5 text-[#df0a1a]" />
                <span className="text-[10px] sm:text-[11px] font-heading font-extrabold uppercase tracking-wider">
                  {language === 'es' ? 'Precisión Milimétrica' : 'Millimeter Precision'}
                </span>
              </div>

              <div className="bg-[#111213] text-white px-3 sm:px-4 py-2 sm:py-2.5 text-xs flex justify-between items-center border-t border-neutral-800 [transform:translateZ(20px)]">
                <span className="font-heading uppercase font-semibold text-neutral-300 flex items-center gap-2 text-[11px] sm:text-xs">
                  <span className="w-2 h-2 rounded-full bg-[#df0a1a] animate-ping" />
                  {t.home.oemGradeBadge}
                </span>
                <span className="text-[#df0a1a] font-bold tracking-wider text-[11px] sm:text-xs">{t.home.guaranteedBadge}</span>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* 2. Interactive Workshop Fast Compatibility Finder Bar with Slide-Up */}
      <RevealOnScroll direction="up" delay={100} duration={600}>
        <section className="bg-[#1a1c1c] border-b-2 border-[#df0a1a] py-6 sm:py-7 px-4 sm:px-6 lg:px-12 shadow-md">
          <div className="max-w-[1280px] mx-auto">
            <form
              onSubmit={handleQuickSearch}
              className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4"
            >
              <div className="flex items-center gap-3">
                <div className="bg-[#df0a1a] text-white p-2.5 flex-shrink-0">
                  <Search className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-heading text-sm sm:text-base font-bold text-white uppercase tracking-wider">
                    {t.home.finderTitle}
                  </h2>
                  <p className="text-xs text-neutral-400">
                    {t.home.finderSubtitle}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 flex-1 max-w-2xl">
                <select
                  value={searchMake}
                  onChange={(e) => setSearchMake(e.target.value)}
                  className="bg-[#2f3131] text-white text-xs font-heading font-semibold px-3 py-2.5 sm:py-3 border border-neutral-700 focus:border-[#df0a1a] focus:outline-none cursor-pointer transition-colors"
                >
                  <option value="Ford">Ford</option>
                  <option value="Chevrolet">Chevrolet</option>
                  <option value="Jeep">Jeep</option>
                  <option value="Toyota">Toyota</option>
                </select>

                <input
                  type="text"
                  value={searchEngine}
                  onChange={(e) => setSearchEngine(e.target.value)}
                  placeholder={t.home.engineCodePlaceholder}
                  className="bg-[#2f3131] text-white text-xs font-body px-3 py-2.5 sm:py-3 border border-neutral-700 focus:border-[#df0a1a] focus:outline-none placeholder-neutral-500 transition-colors"
                />

                <button
                  type="submit"
                  className="bg-[#df0a1a] hover:bg-[#b20010] text-white font-heading text-xs font-bold uppercase py-2.5 sm:py-3 px-4 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer clip-slant-right whitespace-nowrap active:scale-95 btn-shimmer hover-lift-sm"
                >
                  <span>{t.home.searchButton}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </form>
          </div>
        </section>
      </RevealOnScroll>

      {/* 3. About Company Brief / History Statement with Staggered Cards */}
      <section className="bg-[#2f3131] text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-12 relative bg-pattern">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <RevealOnScroll direction="left" duration={700} className="lg:col-span-4">
            <div>
              <div className="border-t-4 border-[#df0a1a] pt-3 sm:pt-4 mb-4 sm:mb-6 inline-block">
                <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-tight text-white">
                  {t.about.storyTitle}
                </h2>
              </div>
              <p className="font-body text-xs sm:text-sm md:text-base text-[#e2e2e2] mb-3 sm:mb-4 leading-relaxed">
                {t.about.storyP1}
              </p>
              <p className="font-body text-xs sm:text-sm md:text-base text-[#e2e2e2] leading-relaxed mb-4 sm:mb-6">
                {t.about.storyP2}
              </p>
              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-2 text-xs text-neutral-300 font-semibold group cursor-default">
                  <Check className="w-4 h-4 text-[#df0a1a] flex-shrink-0 group-hover:scale-125 transition-transform" />
                  <span>{t.about.p1Title}: {t.about.p1Desc}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-300 font-semibold group cursor-default">
                  <Check className="w-4 h-4 text-[#df0a1a] flex-shrink-0 group-hover:scale-125 transition-transform" />
                  <span>{t.about.p2Title}: {t.about.p2Desc}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-300 font-semibold group cursor-default">
                  <Check className="w-4 h-4 text-[#df0a1a] flex-shrink-0 group-hover:scale-125 transition-transform" />
                  <span>{t.about.p3Title}: {t.about.p3Desc}</span>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="right" delay={150} duration={700} className="lg:col-span-8">
            <div className="bg-[#1a1c1c] p-5 sm:p-8 md:p-10 border border-[#565757] shadow-industrial-red hover:shadow-industrial-red-lg transition-shadow duration-300">
              <p className="font-heading text-base sm:text-lg md:text-xl font-semibold text-white mb-4 sm:mb-6 leading-relaxed">
                {t.home.pillarsTitle}
              </p>
              <p className="font-body text-xs sm:text-sm md:text-base text-neutral-300 leading-relaxed mb-6">
                {t.home.pillarsSubtitle}
              </p>
              <div className="mt-6 sm:mt-8 pt-6 border-t border-neutral-700 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                <div className="flex items-center gap-3 group p-2 hover:bg-neutral-800/60 rounded-xs transition-colors">
                  <ShieldCheck className="w-7 h-7 sm:w-8 sm:h-8 text-[#df0a1a] flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                  <div>
                    <div className="text-xs uppercase font-heading font-bold text-white">{t.quality.pillars.isoTitle}</div>
                    <div className="text-[11px] sm:text-xs text-neutral-400">{t.quality.pillars.isoDesc}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 group p-2 hover:bg-neutral-800/60 rounded-xs transition-colors">
                  <Flame className="w-7 h-7 sm:w-8 sm:h-8 text-[#df0a1a] flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                  <div>
                    <div className="text-xs uppercase font-heading font-bold text-white">{t.quality.pillars.thermalTitle}</div>
                    <div className="text-[11px] sm:text-xs text-neutral-400">{t.quality.pillars.thermalDesc}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 group p-2 hover:bg-neutral-800/60 rounded-xs transition-colors">
                  <Gauge className="w-7 h-7 sm:w-8 sm:h-8 text-[#df0a1a] flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                  <div>
                    <div className="text-xs uppercase font-heading font-bold text-white">{t.quality.pillars.opticalTitle}</div>
                    <div className="text-[11px] sm:text-xs text-neutral-400">{t.quality.pillars.opticalDesc}</div>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* 4. Product Catalog Preview with Staggered 3D Tilt Cards */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-12 bg-[#f9f9f9]">
        <div className="max-w-[1280px] mx-auto">
          <RevealOnScroll direction="up" duration={600}>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-6 sm:mb-8 border-b border-[#dadada] pb-4 gap-3">
              <div>
                <span className="text-xs font-heading font-bold uppercase text-[#df0a1a] tracking-wider block mb-1">
                  {t.home.featuredTag}
                </span>
                <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-[#1a1c1c] uppercase tracking-tight">
                  {t.home.featuredTitle}
                </h2>
              </div>
              <button
                onClick={() => {
                  setActiveTab('products');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-xs font-heading font-bold uppercase text-[#df0a1a] hover:text-[#b20010] flex items-center gap-1.5 transition-colors cursor-pointer self-end sm:self-auto group"
              >
                <span className="link-expand-line">{t.home.viewAllProducts}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product, idx) => (
              <RevealOnScroll key={product.id} direction="up" delay={idx * 120} duration={650}>
                <TiltCard maxTilt={6} scale={1.02} glare={true} className="h-full">
                  <div className="bg-white border border-[#dadada] group hover:border-[#df0a1a] hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full">
                    <div>
                      {/* Image container with full view and click to open */}
                      <div
                        onClick={() => onSelectProduct(product)}
                        className="h-52 sm:h-56 bg-white relative overflow-hidden flex items-center justify-center border-b border-[#eeeeee] p-3 cursor-pointer group/img"
                        title={language === 'es' ? 'Haga clic para ver detalles y galería' : 'Click to view details and gallery'}
                      >
                        {product.isNew && (
                          <div className="absolute top-0 left-0 bg-[#df0a1a] text-white font-heading text-xs font-bold px-3 py-1 clip-slant-right z-10 shadow-sm">
                            {language === 'es' ? 'NUEVO' : 'NEW'}
                          </div>
                        )}
                        <img
                          alt={product.name}
                          src={product.image}
                          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                        />
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/img:opacity-100 transition-opacity duration-200 flex items-center justify-center pointer-events-none">
                          <span className="bg-[#1a1c1c]/90 text-white text-[11px] font-heading font-bold px-3 py-1.5 flex items-center gap-1.5 shadow-md border border-neutral-700">
                            <Maximize2 className="w-3.5 h-3.5 text-[#df0a1a]" />
                            {language === 'es' ? 'VER DETALLES' : 'VIEW DETAILS'}
                          </span>
                        </div>
                      </div>

                      {/* Body info */}
                      <div className="p-4 sm:p-5">
                        <h3 className="font-heading text-sm sm:text-base md:text-lg font-bold text-[#1a1c1c] mb-2 uppercase group-hover:text-[#df0a1a] transition-colors line-clamp-1">
                          {product.name}
                        </h3>
                        <p className="font-body text-xs sm:text-sm text-[#5e3f3b] mb-4 line-clamp-2 leading-relaxed">
                          {product.summary}
                        </p>
                      </div>
                    </div>

                    {/* Footer of Card */}
                    <div className="px-4 sm:px-5 pb-4 sm:pb-5">
                      <div className="flex justify-between items-center pt-3 border-t border-[#e2e2e2] gap-2">
                        <span className="font-heading text-xs font-bold text-[#1a1c1c] bg-[#eeeeee] px-2.5 py-1 shrink-0">
                          SKU: {product.sku}
                        </span>
                        <button
                          onClick={() => onSelectProduct(product)}
                          className="bg-[#1a1c1c] hover:bg-[#df0a1a] text-white font-heading text-xs font-bold uppercase py-1.5 px-3 transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm active:scale-95 btn-shimmer"
                          title={t.home.viewDetails}
                        >
                          <span>{t.home.viewDetails}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </RevealOnScroll>
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <button
              onClick={() => {
                setActiveTab('products');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full font-heading text-xs font-bold text-white bg-[#1a1c1c] py-3.5 uppercase inline-flex items-center justify-center gap-2 active:scale-98"
            >
              <span>{t.home.viewAllProducts}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 5. Direct Workshop Trust & Action Banner with Reveal */}
      <RevealOnScroll direction="up" duration={700}>
        <section className="bg-[#1a1c1c] text-white py-10 sm:py-12 px-4 sm:px-6 lg:px-12 border-t-2 border-[#df0a1a]">
          <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-heading font-bold text-[#df0a1a] uppercase mb-1">
                <Layers className="w-4 h-4" />
                <span>{t.home.ctaWorkshopTag}</span>
              </div>
              <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-bold uppercase tracking-tight">
                {t.home.ctaWorkshopTitle}
              </h3>
              <p className="font-body text-xs sm:text-sm text-neutral-400 mt-1 max-w-xl">
                {t.home.ctaWorkshopDesc}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <button
                onClick={onOpenContact}
                className="w-full sm:w-auto bg-[#df0a1a] hover:bg-[#b20010] text-white font-heading text-xs font-bold uppercase px-6 py-3.5 transition-all duration-200 text-center cursor-pointer clip-slant-right whitespace-nowrap active:scale-95 btn-shimmer hover-lift shadow-md"
              >
                {t.home.ctaRequestWholesale}
              </button>
            </div>
          </div>
        </section>
      </RevealOnScroll>
    </div>
  );
};
