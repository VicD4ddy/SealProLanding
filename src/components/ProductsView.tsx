import React, { useState, useMemo } from 'react';
import { Product } from '../types';
import { Search, Filter, Plus, Check, LayoutGrid, Table as TableIcon, Layers, Maximize2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getLocalizedProduct } from '../utils/localize';
import { TiltCard } from './TiltCard';
import { RevealOnScroll } from './RevealOnScroll';

interface ProductsViewProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  onAddToQuote: (product: Product) => void;
  quoteSkus: string[];
}

export const ProductsView: React.FC<ProductsViewProps> = ({
  products,
  onSelectProduct,
  onAddToQuote,
  quoteSkus,
}) => {
  const { t, language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');
  const [selectedMake, setSelectedMake] = useState<string>('all');

  const categories = [
    { id: 'all', label: t.products.categories.all },
    { id: 'kit-empacadura', label: t.products.categories['kit-empacadura'] },
    { id: 'kit-tiempo', label: t.products.categories['kit-tiempo'] },
  ];

  const makes = ['all', 'Ford', 'Chevrolet', 'Jeep', 'Toyota'];

  const localizedProducts = useMemo(() => {
    return products.map((p) => getLocalizedProduct(p, language));
  }, [products, language]);

  const filteredProducts = useMemo(() => {
    return localizedProducts.filter((product) => {
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      
      const term = searchTerm.toLowerCase().trim();
      const matchesSearch =
        term === '' ||
        product.name.toLowerCase().includes(term) ||
        product.sku.toLowerCase().includes(term) ||
        product.summary.toLowerCase().includes(term) ||
        product.description.toLowerCase().includes(term) ||
        product.material.toLowerCase().includes(term) ||
        product.oemNumbers.some((oem) => oem.toLowerCase().includes(term)) ||
        product.compatibility.some(
          (c) =>
            c.make.toLowerCase().includes(term) ||
            c.model.toLowerCase().includes(term) ||
            c.engine.toLowerCase().includes(term)
        );

      const matchesMake =
        selectedMake === 'all' ||
        product.compatibility.some((c) =>
          c.make.toLowerCase().includes(selectedMake.toLowerCase()) ||
          c.make.toLowerCase().includes('universal')
        );

      return matchesCategory && matchesSearch && matchesMake;
    });
  }, [localizedProducts, selectedCategory, searchTerm, selectedMake]);

  return (
    <div className="w-full bg-[#f9f9f9] min-h-screen py-8 sm:py-12 px-4 sm:px-6 lg:px-12 text-[#1a1c1c]">
      <div className="max-w-[1280px] mx-auto">
        {/* Page Header */}
        <div className="border-b-2 border-[#dadada] pb-5 sm:pb-6 mb-6 sm:mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-heading font-bold uppercase text-[#df0a1a] tracking-widest mb-1">
              <span>{t.products.tag}</span>
            </div>
            <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-[#1a1c1c]">
              {t.products.title}
            </h1>
            <p className="font-body text-xs sm:text-sm text-[#5e3f3b] mt-1 max-w-2xl">
              {t.products.subtitle}
            </p>
          </div>

          {/* View toggle (Hidden on mobile to prioritize clean cards) */}
          <div className="hidden sm:flex items-center gap-2 self-start md:self-auto">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 border transition-colors cursor-pointer ${
                viewMode === 'grid'
                  ? 'bg-[#1a1c1c] text-white border-[#1a1c1c]'
                  : 'bg-white text-neutral-600 border-neutral-300 hover:border-neutral-500'
              }`}
              title="Vista de Cuadrícula"
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('table')}
              className={`p-2 border transition-colors cursor-pointer ${
                viewMode === 'table'
                  ? 'bg-[#1a1c1c] text-white border-[#1a1c1c]'
                  : 'bg-white text-neutral-600 border-neutral-300 hover:border-neutral-500'
              }`}
              title="Vista de Tabla Técnica"
            >
              <TableIcon className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Filter Controls Section */}
        <section aria-labelledby="products-filter-title" className="bg-white border border-[#dadada] p-4 sm:p-5 md:p-6 mb-6 sm:mb-8 shadow-xs space-y-4">
          <h2 id="products-filter-title" className="sr-only">
            {language === 'es' ? 'Filtros y Búsqueda de Productos' : 'Product Search and Filters'}
          </h2>
          {/* Search inputs */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4">
            <div className="md:col-span-8 relative">
              <Search className="w-4 sm:w-5 h-4 sm:h-5 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={t.products.searchPlaceholder}
                className="w-full pl-9 sm:pl-10 pr-8 sm:pr-9 py-2.5 bg-[#f9f9f9] border border-neutral-300 focus:border-[#df0a1a] focus:outline-none font-body text-xs sm:text-sm text-[#1a1c1c]"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-neutral-400 hover:text-neutral-700 cursor-pointer p-1"
                >
                  ✕
                </button>
              )}
            </div>

            <div className="md:col-span-4 flex gap-2 items-center">
              <Filter className="w-4 h-4 text-neutral-500 flex-shrink-0" />
              <select
                value={selectedMake}
                onChange={(e) => setSelectedMake(e.target.value)}
                className="w-full py-2.5 px-3 bg-[#f9f9f9] border border-neutral-300 focus:border-[#df0a1a] focus:outline-none font-heading text-xs font-bold uppercase text-[#1a1c1c] cursor-pointer"
              >
                <option value="all">{t.products.allMakes.toUpperCase()}</option>
                {makes.filter((m) => m !== 'all').map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Category Pills (Horizontal scrollable on mobile) */}
          <div className="flex items-center gap-2 pt-2 border-t border-neutral-100 overflow-x-auto no-scrollbar pb-1">
            {categories.map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`font-heading text-xs font-bold uppercase px-3.5 sm:px-4 py-2 transition-all cursor-pointer whitespace-nowrap active:scale-95 ${
                    active
                      ? 'bg-[#df0a1a] text-white clip-slant-right shadow-sm'
                      : 'bg-[#eeeeee] text-neutral-700 hover:bg-neutral-300'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </section>

        {/* Results Counter */}
        <div className="flex justify-between items-center mb-4 sm:mb-6 text-xs text-neutral-600 font-heading font-semibold">
          <span>{language === 'es' ? `Mostrando ${filteredProducts.length} productos` : `Showing ${filteredProducts.length} products`}</span>
          {(searchTerm || selectedCategory !== 'all' || selectedMake !== 'all') && (
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedMake('all');
              }}
              className="text-[#df0a1a] hover:underline cursor-pointer"
            >
              {language === 'es' ? 'Limpiar filtros' : 'Clear filters'}
            </button>
          )}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="bg-white border border-[#dadada] p-8 sm:p-12 text-center space-y-4">
            <Layers className="w-12 h-12 text-neutral-300 mx-auto" />
            <h3 className="font-heading text-lg font-bold text-[#1a1c1c] uppercase">
              {language === 'es' ? 'No se encontraron productos' : 'No products found'}
            </h3>
            <p className="font-body text-xs sm:text-sm text-neutral-500 max-w-md mx-auto">
              {language === 'es'
                ? 'Prueba modificando los términos de búsqueda o seleccionando otra categoría o marca de vehículo.'
                : 'Try adjusting your search terms or selecting another category or vehicle make.'}
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedMake('all');
              }}
              className="bg-[#1a1c1c] text-white font-heading text-xs font-bold uppercase px-6 py-2.5 hover:bg-[#df0a1a] transition-colors cursor-pointer"
            >
              {language === 'es' ? 'VER TODOS LOS PRODUCTOS' : 'VIEW ALL PRODUCTS'}
            </button>
          </div>
        )}

        {/* Grid View with Staggered Scroll Reveal */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product, idx) => {
              const inQuote = quoteSkus.includes(product.sku);
              return (
                <RevealOnScroll key={product.id} direction="up" delay={(idx % 6) * 90} duration={600} className="h-full">
                  <TiltCard maxTilt={6} scale={1.015} glare={true} className="h-full">
                    <div className="bg-white border border-[#dadada] group hover:border-[#df0a1a] hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full hover-lift-sm">
                      <div>
                        {/* Image Container with Full Visibility & Click to Expand */}
                        <div
                          onClick={() => onSelectProduct(product)}
                          className="h-56 sm:h-60 bg-white relative overflow-hidden flex items-center justify-center border-b border-[#eeeeee] p-3 cursor-pointer group/img"
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
                          {/* Hover Overlay Hint */}
                          <div className="absolute inset-0 bg-black/25 opacity-0 group-hover/img:opacity-100 transition-opacity duration-200 flex items-center justify-center pointer-events-none">
                            <span className="bg-[#1a1c1c]/90 text-white text-[11px] font-heading font-bold px-3.5 py-1.5 flex items-center gap-1.5 shadow-lg border border-neutral-700">
                              <Maximize2 className="w-3.5 h-3.5 text-[#df0a1a]" />
                              {language === 'es' ? 'AMPLIAR DETALLES' : 'EXPAND DETAILS'}
                            </span>
                          </div>
                          <div className="absolute bottom-2 right-2 bg-black/80 text-white text-[10px] font-heading font-bold px-2.5 py-0.5 uppercase z-10">
                            {product.categoryLabel}
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-4 sm:p-5">
                          <div className="flex justify-between items-start mb-2">
                            <span className="font-heading text-xs font-bold text-[#df0a1a] uppercase">
                              SKU: {product.sku}
                            </span>
                            <span className="text-[11px] text-neutral-500 bg-neutral-100 px-2 py-0.5 border border-neutral-200">
                              {product.compatibility[0]?.make || 'Universal'}
                            </span>
                          </div>

                          <h3 className="font-heading text-sm sm:text-base font-bold text-[#1a1c1c] mb-2 uppercase group-hover:text-[#df0a1a] transition-colors line-clamp-1">
                            {product.name}
                          </h3>
                          <p className="font-body text-xs text-[#5e3f3b] mb-4 line-clamp-2 leading-relaxed">
                            {product.summary}
                          </p>

                          {/* Technical Quick Specs Badges */}
                          <div className="space-y-1.5 pt-2 border-t border-neutral-100 text-xs">
                            <div className="flex justify-between text-neutral-600">
                              <span className="font-medium">{t.products.cardLabels.material}</span>
                              <span className="font-semibold text-neutral-800 text-right truncate max-w-[160px]">
                                {product.material.split('+')[0]}
                              </span>
                            </div>
                            <div className="flex justify-between text-neutral-600">
                              <span className="font-medium">{t.products.cardLabels.temp}</span>
                              <span className="font-semibold text-[#df0a1a]">{product.temperatureMax.split('/')[0]}</span>
                            </div>
                            <div className="flex justify-between text-neutral-600">
                              <span className="font-medium">{t.products.cardLabels.torque}</span>
                              <span className="font-semibold text-neutral-800">{product.suggestedTorque}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Actions footer */}
                      <div className="p-4 sm:p-5 pt-0">
                        <div className="flex gap-2 pt-3 border-t border-[#e2e2e2]">
                          <button
                            onClick={() => onSelectProduct(product)}
                            className="flex-1 bg-[#1a1c1c] hover:bg-neutral-800 text-white font-heading text-xs font-bold uppercase py-2.5 px-3 transition-colors text-center cursor-pointer flex items-center justify-center gap-1 active:scale-98"
                          >
                            <span>{t.products.viewSpecs}</span>
                          </button>
                          <button
                            onClick={() => onAddToQuote(product)}
                            className={`font-heading text-xs font-bold uppercase px-3.5 py-2.5 transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-sm btn-shimmer ${
                              inQuote
                                ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                                : 'bg-[#df0a1a] text-white hover:bg-[#b20010] active:scale-95'
                            }`}
                            title={inQuote ? t.products.inQuote : t.products.addToQuote}
                          >
                            {inQuote ? <Check className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                            <span>{inQuote ? (language === 'es' ? 'COTIZADO' : 'IN QUOTE') : (language === 'es' ? 'COTIZAR' : 'QUOTE')}</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </TiltCard>
                </RevealOnScroll>
              );
            })}
          </div>
        )}

        {/* Table View */}
        {viewMode === 'table' && (
          <div className="bg-white border border-[#dadada] shadow-xs overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-[#1a1c1c] text-white font-heading uppercase text-[11px] tracking-wider">
                    <th className="p-3.5">SKU / {language === 'es' ? 'PRODUCTO' : 'PRODUCT'}</th>
                    <th className="p-3.5">{language === 'es' ? 'CATEGORÍA' : 'CATEGORY'}</th>
                    <th className="p-3.5">{t.products.cardLabels.material}</th>
                    <th className="p-3.5">{t.products.cardLabels.temp} / {t.products.cardLabels.pressure}</th>
                    <th className="p-3.5">{language === 'es' ? 'COMPATIBILIDAD' : 'FITMENT'}</th>
                    <th className="p-3.5 text-right">{language === 'es' ? 'ACCIONES' : 'ACTIONS'}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200 font-body">
                  {filteredProducts.map((product) => {
                    const inQuote = quoteSkus.includes(product.sku);
                    return (
                      <tr key={product.id} className="hover:bg-neutral-50 transition-colors">
                        <td className="p-3.5">
                          <div className="flex items-center gap-3">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-10 h-10 object-contain bg-white border border-neutral-200 p-1 flex-shrink-0"
                            />
                            <div>
                              <div className="font-heading font-bold text-xs text-[#df0a1a]">{product.sku}</div>
                              <div className="text-neutral-900 font-heading text-xs font-semibold">{product.name}</div>
                            </div>
                          </div>
                        </td>
                        <td className="p-3.5 text-neutral-600">
                          {product.categoryLabel}
                        </td>
                        <td className="p-3.5 text-neutral-700 max-w-[160px] truncate">
                          {product.material}
                        </td>
                        <td className="p-3.5 text-neutral-700 whitespace-nowrap">
                          <div>{product.temperatureMax.split('/')[0]}</div>
                          <div className="text-[11px] text-neutral-500">{product.pressureMax.split('/')[0]}</div>
                        </td>
                        <td className="p-3.5 text-neutral-600 max-w-[220px]">
                          {product.compatibility.map((c) => `${c.make} (${c.engine})`).slice(0, 2).join(', ')}
                        </td>
                        <td className="p-3.5 text-right whitespace-nowrap">
                          <div className="flex items-center justify-end gap-2">
                            <button
                              onClick={() => onSelectProduct(product)}
                              className="bg-[#eeeeee] hover:bg-neutral-300 text-neutral-900 font-heading font-bold px-2.5 py-1 text-[11px] uppercase cursor-pointer"
                            >
                              {t.products.viewSpecs}
                            </button>
                            <button
                              onClick={() => onAddToQuote(product)}
                              className={`font-heading font-bold px-2.5 py-1 text-[11px] uppercase text-white cursor-pointer ${
                                inQuote ? 'bg-emerald-600' : 'bg-[#df0a1a] hover:bg-[#b20010]'
                              }`}
                            >
                              {inQuote ? t.products.inQuote : `+ ${t.products.addToQuote}`}
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
