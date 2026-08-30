import React, { useState, useMemo } from 'react';
import { Product } from '../types';
import { Search, Filter, Plus, Check, LayoutGrid, Table as TableIcon, ArrowRight, Shield, Layers } from 'lucide-react';

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
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');
  const [selectedMake, setSelectedMake] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'TODAS LAS CATEGORÍAS' },
    { id: 'juegos-full', label: 'JUEGOS COMPLETOS' },
    { id: 'culata-mls', label: 'CULATA MLS' },
    { id: 'sellos-valvula', label: 'SELLOS DE VÁLVULA' },
    { id: 'retenes', label: 'RETENES RADIALES' },
    { id: 'multiple-carter', label: 'MÚLTIPLE Y CÁRTER' },
  ];

  const makes = ['all', 'Toyota', 'Chevrolet', 'Ford', 'Nissan', 'Volkswagen', 'Honda', 'Hyundai', 'Mitsubishi'];

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
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
  }, [products, selectedCategory, searchTerm, selectedMake]);

  return (
    <div className="w-full bg-[#f9f9f9] min-h-screen py-10 px-4 md:px-16 text-[#1a1c1c]">
      <div className="max-w-[1280px] mx-auto">
        {/* Page Header */}
        <div className="border-b-2 border-[#dadada] pb-6 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-heading font-bold uppercase text-[#df0a1a] tracking-widest mb-1">
              <span>CATÁLOGO INDUSTRIAL DE EMPACADURAS</span>
            </div>
            <h1 className="font-heading text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-[#1a1c1c]">
              GAMA DE PRODUCTOS SEAL-PRO
            </h1>
            <p className="font-body text-sm text-[#5e3f3b] mt-1 max-w-2xl">
              Consulte nuestra línea completa de juegos de empacaduras, sellos Viton®, empaques de culata MLS multicapa y retenes de alta estanqueidad.
            </p>
          </div>

          {/* View toggle */}
          <div className="flex items-center gap-2 self-start md:self-auto">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 border transition-colors ${
                viewMode === 'grid'
                  ? 'bg-[#1a1c1c] text-white border-[#1a1c1c]'
                  : 'bg-white text-neutral-600 border-neutral-300 hover:border-neutral-500'
              }`}
              title="Vista en Cuadrícula"
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('table')}
              className={`p-2 border transition-colors ${
                viewMode === 'table'
                  ? 'bg-[#1a1c1c] text-white border-[#1a1c1c]'
                  : 'bg-white text-neutral-600 border-neutral-300 hover:border-neutral-500'
              }`}
              title="Vista en Tabla Técnica"
            >
              <TableIcon className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-white border border-[#dadada] p-4 md:p-6 mb-8 shadow-sm space-y-4">
          {/* Search inputs */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="md:col-span-8 relative">
              <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar por SKU, nombre, motor (ej: 1ZZ, Vortec 5.3L), modelo o OEM..."
                className="w-full pl-10 pr-4 py-2.5 bg-[#f9f9f9] border border-neutral-300 focus:border-[#df0a1a] focus:outline-none font-body text-sm text-[#1a1c1c]"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-neutral-400 hover:text-neutral-700"
                >
                  LIMPIAR
                </button>
              )}
            </div>

            <div className="md:col-span-4 flex gap-2 items-center">
              <Filter className="w-4 h-4 text-neutral-500 flex-shrink-0" />
              <select
                value={selectedMake}
                onChange={(e) => setSelectedMake(e.target.value)}
                className="w-full py-2.5 px-3 bg-[#f9f9f9] border border-neutral-300 focus:border-[#df0a1a] focus:outline-none font-heading text-xs font-bold uppercase text-[#1a1c1c]"
              >
                <option value="all">TODAS LAS MARCAS</option>
                {makes.filter((m) => m !== 'all').map((m) => (
                  <option key={m} value={m}>
                    Vehículos {m}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-neutral-100">
            {categories.map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`font-heading text-xs font-bold uppercase px-3 py-1.5 transition-all cursor-pointer ${
                    active
                      ? 'bg-[#df0a1a] text-white shadow-sm'
                      : 'bg-[#eeeeee] text-[#1a1c1c] hover:bg-neutral-300'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex justify-between items-center mb-4 text-xs font-heading font-semibold text-neutral-500">
          <span>{filteredProducts.length} PRODUCTOS ENCONTRADOS</span>
          {searchTerm && <span>Filtro activo: &ldquo;{searchTerm}&rdquo;</span>}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="bg-white border border-[#dadada] p-12 text-center my-8">
            <Layers className="w-12 h-12 text-neutral-400 mx-auto mb-3" />
            <h3 className="font-heading text-lg font-bold uppercase text-[#1a1c1c]">
              No se encontraron productos coincidentes
            </h3>
            <p className="font-body text-sm text-neutral-500 mt-1 max-w-md mx-auto">
              Intente buscar por código OEM, especificación de motor o restablezca los filtros.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedMake('all');
              }}
              className="mt-4 bg-[#1a1c1c] text-white font-heading text-xs font-bold uppercase px-5 py-2.5 hover:bg-[#df0a1a] transition-colors"
            >
              Restablecer Filtros
            </button>
          </div>
        )}

        {/* Grid View */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => {
              const inQuote = quoteSkus.includes(product.sku);
              return (
                <div
                  key={product.id}
                  className="bg-white border border-[#dadada] group hover:border-[#df0a1a] hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Image */}
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
                      <div className="absolute bottom-2 right-2 bg-black/75 text-white text-[10px] font-heading font-bold px-2 py-0.5 uppercase">
                        {product.categoryLabel}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <div className="flex justify-between items-start mb-2">
                        <span className="font-heading text-xs font-bold text-[#df0a1a] uppercase">
                          SKU: {product.sku}
                        </span>
                        <span className="text-[11px] text-neutral-500 bg-neutral-100 px-2 py-0.5 border border-neutral-200">
                          {product.compatibility[0]?.make || 'Universal'}
                        </span>
                      </div>

                      <h3 className="font-heading text-base font-bold text-[#1a1c1c] mb-2 uppercase group-hover:text-[#df0a1a] transition-colors line-clamp-1">
                        {product.name}
                      </h3>
                      <p className="font-body text-xs text-[#5e3f3b] mb-4 line-clamp-2 leading-relaxed">
                        {product.summary}
                      </p>

                      {/* Technical Quick Specs Badges */}
                      <div className="space-y-1.5 pt-2 border-t border-neutral-100 text-xs">
                        <div className="flex justify-between text-neutral-600">
                          <span className="font-medium">Material:</span>
                          <span className="font-semibold text-neutral-800 text-right truncate max-w-[170px]">
                            {product.material.split('+')[0]}
                          </span>
                        </div>
                        <div className="flex justify-between text-neutral-600">
                          <span className="font-medium">Temp. Máxima:</span>
                          <span className="font-semibold text-[#df0a1a]">{product.temperatureMax.split('/')[0]}</span>
                        </div>
                        <div className="flex justify-between text-neutral-600">
                          <span className="font-medium">Torque Ref:</span>
                          <span className="font-semibold text-neutral-800">{product.suggestedTorque}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Actions footer */}
                  <div className="p-5 pt-0">
                    <div className="flex gap-2 pt-3 border-t border-[#e2e2e2]">
                      <button
                        onClick={() => onSelectProduct(product)}
                        className="flex-1 bg-[#1a1c1c] hover:bg-neutral-800 text-white font-heading text-xs font-bold uppercase py-2 px-3 transition-colors text-center cursor-pointer"
                      >
                        VER DETALLES
                      </button>
                      <button
                        onClick={() => onAddToQuote(product)}
                        className={`px-3 py-2 font-heading text-xs font-bold uppercase transition-colors flex items-center justify-center cursor-pointer ${
                          inQuote
                            ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                            : 'bg-[#df0a1a] text-white hover:bg-[#b20010]'
                        }`}
                        title={inQuote ? 'En cotización' : 'Añadir a Cotización'}
                      >
                        {inQuote ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Table View */}
        {viewMode === 'table' && (
          <div className="bg-white border border-[#dadada] overflow-x-auto shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#1a1c1c] text-white font-heading text-xs uppercase tracking-wider">
                  <th className="p-3.5 border-b border-neutral-700">SKU / Imagen</th>
                  <th className="p-3.5 border-b border-neutral-700">Producto</th>
                  <th className="p-3.5 border-b border-neutral-700">Categoría</th>
                  <th className="p-3.5 border-b border-neutral-700">Material</th>
                  <th className="p-3.5 border-b border-neutral-700">Temp / Presión</th>
                  <th className="p-3.5 border-b border-neutral-700">Compatibilidad Clave</th>
                  <th className="p-3.5 border-b border-neutral-700 text-right">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 font-body text-xs text-neutral-800">
                {filteredProducts.map((product, idx) => {
                  const inQuote = quoteSkus.includes(product.sku);
                  return (
                    <tr
                      key={product.id}
                      className={idx % 2 === 0 ? 'bg-white hover:bg-neutral-50' : 'bg-[#fcfcfc] hover:bg-neutral-50'}
                    >
                      <td className="p-3.5 font-heading font-bold text-neutral-900 whitespace-nowrap">
                        <div className="flex items-center gap-3">
                          <img
                            src={product.image}
                            alt={product.sku}
                            className="w-10 h-10 object-cover border border-neutral-200"
                          />
                          <span className="text-[#df0a1a]">{product.sku}</span>
                        </div>
                      </td>
                      <td className="p-3.5 font-heading font-bold text-[#1a1c1c] max-w-[200px]">
                        {product.name}
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
                            className="bg-[#eeeeee] hover:bg-neutral-300 text-neutral-900 font-heading font-bold px-2.5 py-1 text-[11px] uppercase"
                          >
                            Ver Ficha
                          </button>
                          <button
                            onClick={() => onAddToQuote(product)}
                            className={`font-heading font-bold px-2.5 py-1 text-[11px] uppercase text-white ${
                              inQuote ? 'bg-emerald-600' : 'bg-[#df0a1a] hover:bg-[#b20010]'
                            }`}
                          >
                            {inQuote ? 'En Lista' : '+ Cotizar'}
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};
