import React, { useState } from 'react';
import { Product, ActiveTab } from '../types';
import { Plus, ArrowRight, Check, Search, ShieldCheck, Flame, Gauge, Sparkles } from 'lucide-react';

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
  onOpenQuote,
}) => {
  const [searchMake, setSearchMake] = useState('Toyota');
  const [searchEngine, setSearchEngine] = useState('');

  const featuredProducts = products.filter((p) => p.isFeatured).slice(0, 3);

  const handleQuickSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setActiveTab('products');
  };

  return (
    <div className="w-full bg-[#f9f9f9] text-[#1a1c1c]">
      {/* 1. Hero Section - Exact Design from Mockup */}
      <section className="relative bg-white pt-12 md:pt-20 pb-16 md:pb-20 px-4 md:px-16 overflow-hidden border-b border-[#dadada]">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#eeeeee] border border-neutral-300 text-xs font-heading font-bold uppercase text-[#b20010] mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Línea Profesional 2024 - 2025
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1a1c1c] uppercase mb-4 leading-[1.15] tracking-tight">
              EL ALIADO ESTRATÉGICO DE TU TALLER
            </h1>
            <p className="font-body text-base md:text-lg text-[#5e3f3b] mb-8 max-w-lg leading-relaxed">
              Alta calidad y precisión en juegos de empacaduras y sellos para motores. Diseñados para cumplir con los estándares más exigentes del mercado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => {
                  setActiveTab('products');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="font-heading text-sm font-bold uppercase bg-[#df0a1a] text-white px-8 py-3.5 clip-slant-right hover:bg-[#b20010] transition-all duration-300 shadow-md cursor-pointer tracking-wider text-center"
              >
                EXPLORAR CATÁLOGO
              </button>
              <button
                onClick={onOpenContact}
                className="font-heading text-sm font-bold uppercase border-2 border-[#936e6a] bg-transparent text-[#1a1c1c] px-8 py-3.5 hover:border-[#df0a1a] hover:text-[#df0a1a] transition-all duration-300 cursor-pointer text-center"
              >
                SOLICITAR ASESORÍA
              </button>
            </div>
          </div>

          <div className="relative">
            {/* Red skewed decorative backdrop accent */}
            <div className="absolute inset-0 bg-[#df0a1a] opacity-10 transform skew-x-[-15deg] scale-105 z-0"></div>
            <div className="relative z-10 border border-[#dadada] shadow-industrial-black bg-white">
              <img
                className="w-full h-auto object-cover block"
                alt="Seal Pro Brandbook and Product Presentation"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbWQyI6tIxFBOn5ij6Q89rxJvWXu3Sen12d3FI1eRyfc7DnFzcTUeJHVh8-ucfARa56Oz49-7Um5yU7qGLj2RzPCEYwlqoZIAVtK_cNkKE3bfkaM289t_aHJx8tq4mThE4a6Weowy0692aMOndS3yG8wsqseRUSV9SaheS30l3v7PI8AXtxASvG-BvB3BIOUcrLRHhALv7rWGwnYoofZWW-TDGEUzDEcrFUUmuolvSYlpEunC9cL0PIqYr2zprlTkcxTs"
              />
              <div className="bg-[#111213] text-white px-4 py-2 text-xs flex justify-between items-center border-t border-neutral-800">
                <span className="font-heading uppercase font-semibold text-neutral-300">Empaques y Sellos de Grado OEM</span>
                <span className="text-[#df0a1a] font-bold">100% GARANTIZADOS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Interactive Workshop Fast Compatibility Finder Bar */}
      <section className="bg-[#1a1c1c] border-b-2 border-[#df0a1a] py-6 px-4 md:px-16">
        <div className="max-w-[1280px] mx-auto">
          <form
            onSubmit={handleQuickSearch}
            className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4"
          >
            <div className="flex items-center gap-3">
              <div className="bg-[#df0a1a] text-white p-2.5">
                <Search className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading text-sm md:text-base font-bold text-white uppercase tracking-wider">
                  Buscador Rápido por Motor y Vehículo
                </h3>
                <p className="text-xs text-neutral-400">
                  Consulte juegos completos, empaques MLS y torques de fábrica
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 flex-1 max-w-2xl">
              <select
                value={searchMake}
                onChange={(e) => setSearchMake(e.target.value)}
                className="bg-[#2f3131] text-white text-xs font-heading font-semibold px-3 py-2.5 border border-neutral-700 focus:border-[#df0a1a] focus:outline-none"
              >
                <option value="Toyota">Toyota</option>
                <option value="Chevrolet">Chevrolet</option>
                <option value="Nissan">Nissan</option>
                <option value="Ford">Ford</option>
                <option value="Volkswagen">Volkswagen / Audi</option>
                <option value="Honda">Honda</option>
                <option value="Hyundai">Hyundai / Kia</option>
                <option value="Mitsubishi">Mitsubishi</option>
              </select>

              <input
                type="text"
                value={searchEngine}
                onChange={(e) => setSearchEngine(e.target.value)}
                placeholder="Código Motor (Ej: 1ZZ, Vortec, K24)..."
                className="bg-[#2f3131] text-white text-xs font-body px-3 py-2.5 border border-neutral-700 focus:border-[#df0a1a] focus:outline-none placeholder-neutral-500"
              />

              <button
                type="submit"
                className="bg-[#df0a1a] hover:bg-[#b20010] text-white font-heading text-xs font-bold uppercase py-2.5 px-4 transition-colors flex items-center justify-center gap-2 cursor-pointer clip-slant-right"
              >
                <span>BUSCAR PIEZAS</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* 3. Our Commitment Section - Exact Structure & Dark Block */}
      <section className="bg-[#2f3131] text-white py-16 md:py-20 px-4 md:px-16 relative bg-pattern">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-4">
            <div className="border-t-4 border-[#df0a1a] pt-4 mb-6 inline-block">
              <h2 className="font-heading text-2xl md:text-3xl font-bold uppercase tracking-tight text-white">
                NUESTRO COMPROMISO
              </h2>
            </div>
            <p className="font-body text-sm md:text-base text-[#e2e2e2] mb-4 leading-relaxed">
              La marca se rige por valores fundamentales como la calidad, el prestigio y la responsabilidad, lo que refuerza su compromiso con la excelencia y la satisfacción del cliente.
            </p>
            <p className="font-body text-sm md:text-base text-[#e2e2e2] leading-relaxed mb-6">
              Esto los posiciona como un aliado confiable en el mantenimiento y reparación de vehículos.
            </p>
            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-2 text-xs text-neutral-300 font-semibold">
                <Check className="w-4 h-4 text-[#df0a1a]" />
                <span>Control dimensional micrométrico pieza por pieza</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-neutral-300 font-semibold">
                <Check className="w-4 h-4 text-[#df0a1a]" />
                <span>Compatibilidad 100% garantizada con lubricantes sintéticos</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-neutral-300 font-semibold">
                <Check className="w-4 h-4 text-[#df0a1a]" />
                <span>Asistencia técnica directa para rectificadoras</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 bg-[#1a1c1c] p-6 md:p-10 border border-[#565757] shadow-industrial-red">
            <p className="font-heading text-lg md:text-xl font-semibold text-white mb-6 leading-relaxed">
              Seal-Pro, se especializa en la fabricación y venta de juegos de empacaduras y sellos para motores, ofreciendo productos automotrices de alta calidad y asesoría a talleres mecánicos y propietarios de vehículos.
            </p>
            <p className="font-heading text-lg md:text-xl font-semibold text-white leading-relaxed">
              Su compromiso con la innovación y la mejora continua les permite desarrollar soluciones avanzadas que cumplen con los estándares más exigentes del mercado.
            </p>
            <div className="mt-8 pt-6 border-t border-neutral-700 flex flex-wrap gap-6 items-center justify-between">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-8 h-8 text-[#df0a1a]" />
                <div>
                  <div className="text-xs uppercase font-heading font-bold text-white">Garantía de Fábrica</div>
                  <div className="text-xs text-neutral-400">1 Año o 50,000 Km de estanqueidad</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Flame className="w-8 h-8 text-[#df0a1a]" />
                <div>
                  <div className="text-xs uppercase font-heading font-bold text-white">Resistencia Térmica</div>
                  <div className="text-xs text-neutral-400">Hasta 950°C en cámara de combustión</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Gauge className="w-8 h-8 text-[#df0a1a]" />
                <div>
                  <div className="text-xs uppercase font-heading font-bold text-white">Presión Máxima</div>
                  <div className="text-xs text-neutral-400">280 Bar en sellado MLS</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Product Catalog Preview - Exact 3 Cards from Mockup */}
      <section className="py-16 md:py-20 px-4 md:px-16 bg-[#f9f9f9]">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex justify-between items-end mb-8 border-b border-[#dadada] pb-4">
            <div>
              <span className="text-xs font-heading font-bold uppercase text-[#df0a1a] tracking-wider block mb-1">
                LÍNEA DESTACADA PARA REPARACIÓN
              </span>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#1a1c1c] uppercase tracking-tight">
                CATÁLOGO DE PRODUCTOS
              </h2>
            </div>
            <button
              onClick={() => {
                setActiveTab('products');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="font-heading text-xs md:text-sm font-bold text-[#df0a1a] uppercase hover:underline hidden md:flex items-center gap-1.5 cursor-pointer group"
            >
              <span>VER CATÁLOGO COMPLETO</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Grid of 3 Product Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white border border-[#dadada] group hover:border-[#df0a1a] hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Image container */}
                  <div className="h-52 bg-[#f3f3f4] relative overflow-hidden flex items-center justify-center border-b border-[#eeeeee]">
                    {product.isNew && (
                      <div className="absolute top-0 left-0 bg-[#df0a1a] text-white font-heading text-xs font-bold px-3 py-1 clip-slant-right z-10">
                        NUEVO
                      </div>
                    )}
                    <img
                      alt={product.name}
                      src={product.image}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Body info */}
                  <div className="p-5">
                    <h3 className="font-heading text-base md:text-lg font-bold text-[#1a1c1c] mb-2 uppercase group-hover:text-[#df0a1a] transition-colors line-clamp-1">
                      {product.name}
                    </h3>
                    <p className="font-body text-xs md:text-sm text-[#5e3f3b] mb-4 line-clamp-2 leading-relaxed">
                      {product.summary}
                    </p>
                  </div>
                </div>

                {/* Footer of Card */}
                <div className="px-5 pb-5">
                  <div className="flex justify-between items-center pt-3 border-t border-[#e2e2e2]">
                    <span className="font-heading text-xs font-bold text-[#1a1c1c] bg-[#eeeeee] px-2.5 py-1">
                      SKU: {product.sku}
                    </span>
                    <button
                      onClick={() => onSelectProduct(product)}
                      className="text-[#df0a1a] hover:text-[#b20010] hover:scale-110 transition-transform cursor-pointer p-1"
                      title="Ver detalles técnicos y cotizar"
                      aria-label={`Ver detalles de ${product.name}`}
                    >
                      <Plus className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <button
              onClick={() => {
                setActiveTab('products');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="font-heading text-sm font-bold text-[#df0a1a] uppercase underline"
            >
              VER CATÁLOGO COMPLETO &rarr;
            </button>
          </div>
        </div>
      </section>

      {/* 5. Industrial Application Banner & Fast Technical Advisory Callout */}
      <section className="py-12 px-4 md:px-16 bg-[#eeeeee] border-t border-b border-[#dadada]">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
          <div className="lg:col-span-2 space-y-2">
            <h3 className="font-heading text-xl font-bold uppercase text-[#1a1c1c]">
              ¿Tienes un taller mecánico o rectificadora de motores?
            </h3>
            <p className="font-body text-sm text-[#5e3f3b]">
              Accede a tarifas preferenciales por volumen, catálogo de torques oficial descargable y asesoría técnica de ingeniería personalizada en planta.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row lg:justify-end gap-3">
            <button
              onClick={() => {
                setActiveTab('tech-specs');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="font-heading text-xs font-bold uppercase border-2 border-[#1a1c1c] text-[#1a1c1c] px-4 py-3 hover:bg-[#1a1c1c] hover:text-white transition-all text-center"
            >
              CONSULTAR TORQUES
            </button>
            <button
              onClick={onOpenContact}
              className="font-heading text-xs font-bold uppercase bg-[#df0a1a] text-white px-5 py-3 clip-slant-right hover:bg-[#b20010] transition-all text-center"
            >
              REGISTRAR TALLER
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
