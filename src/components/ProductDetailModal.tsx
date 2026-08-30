import React from 'react';
import { Product } from '../types';
import { X, Check, Plus, Wrench, Shield, Thermometer, Gauge, Box, Layers, AlertCircle } from 'lucide-react';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToQuote: (product: Product) => void;
  isInQuote: boolean;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToQuote,
  isInQuote,
}) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-white border-2 border-[#1a1c1c] shadow-industrial-black w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden text-[#1a1c1c]">
        {/* Modal Header */}
        <div className="bg-[#1a1c1c] text-white px-6 py-4 flex justify-between items-center border-b-2 border-[#df0a1a]">
          <div className="flex items-center gap-3">
            <span className="font-heading text-xs font-bold bg-[#df0a1a] text-white px-2.5 py-1">
              SKU: {product.sku}
            </span>
            <span className="font-heading text-xs uppercase text-neutral-300 font-semibold tracking-wider">
              {product.categoryLabel}
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-neutral-400 hover:text-white hover:bg-neutral-800 p-1 transition-colors cursor-pointer"
            aria-label="Cerrar modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            {/* Image side */}
            <div className="md:col-span-5 bg-[#f3f3f4] border border-neutral-300 p-2 relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto object-cover border border-neutral-200"
              />
              <div className="mt-2 bg-[#1a1c1c] text-white text-[11px] p-2 text-center font-heading font-semibold">
                Grado de Fabricación Industrial Certificado
              </div>
            </div>

            {/* Main info side */}
            <div className="md:col-span-7 space-y-4">
              <div>
                <h2 className="font-heading text-2xl font-extrabold uppercase text-[#1a1c1c] leading-tight">
                  {product.name}
                </h2>
                <p className="font-body text-xs md:text-sm text-[#5e3f3b] mt-1 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Technical indicators */}
              <div className="grid grid-cols-2 gap-3 bg-[#f9f9f9] border border-neutral-300 p-3">
                <div className="space-y-0.5">
                  <div className="text-[10px] font-heading font-bold text-neutral-500 uppercase flex items-center gap-1">
                    <Thermometer className="w-3.5 h-3.5 text-[#df0a1a]" />
                    Temperatura Máx
                  </div>
                  <div className="font-heading font-bold text-xs text-[#1a1c1c]">{product.temperatureMax}</div>
                </div>

                <div className="space-y-0.5">
                  <div className="text-[10px] font-heading font-bold text-neutral-500 uppercase flex items-center gap-1">
                    <Gauge className="w-3.5 h-3.5 text-[#df0a1a]" />
                    Presión Máxima
                  </div>
                  <div className="font-heading font-bold text-xs text-[#1a1c1c]">{product.pressureMax}</div>
                </div>
              </div>

              {/* Torque Note */}
              <div className="bg-[#fff1ef] border-l-4 border-[#df0a1a] p-3 text-xs">
                <span className="font-heading font-bold text-[#df0a1a] uppercase block">
                  Recomendación de Torque:
                </span>
                <span className="font-body text-neutral-800 font-semibold">{product.suggestedTorque}</span>
              </div>
            </div>
          </div>

          {/* Detailed Specs & Materials */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-neutral-200">
            {/* Left: Package Contents */}
            <div className="space-y-2">
              <h3 className="font-heading text-xs font-bold uppercase text-[#1a1c1c] flex items-center gap-1.5 border-b border-neutral-200 pb-1.5">
                <Box className="w-4 h-4 text-[#df0a1a]" />
                CONTENIDO DEL EMPAQUE / KIT
              </h3>
              <ul className="space-y-1.5 text-xs font-body text-neutral-700">
                {product.packageContents.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#df0a1a] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Technical Specs Attributes */}
            <div className="space-y-2">
              <h3 className="font-heading text-xs font-bold uppercase text-[#1a1c1c] flex items-center gap-1.5 border-b border-neutral-200 pb-1.5">
                <Layers className="w-4 h-4 text-[#df0a1a]" />
                ESPECIFICACIONES DE MATERIAL Y PROPIEDADES
              </h3>
              <div className="space-y-2 text-xs font-body">
                <div className="flex justify-between py-1 border-b border-neutral-100">
                  <span className="text-neutral-500 font-medium">Composición:</span>
                  <span className="font-semibold text-neutral-800 text-right">{product.material}</span>
                </div>
                {product.specs.map((sp, idx) => (
                  <div key={idx} className="flex justify-between py-1 border-b border-neutral-100">
                    <span className="text-neutral-500 font-medium">{sp.label}:</span>
                    <span className="font-semibold text-neutral-800 text-right">{sp.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Compatibility table */}
          <div className="space-y-2 pt-4 border-t border-neutral-200">
            <h3 className="font-heading text-xs font-bold uppercase text-[#1a1c1c] flex items-center gap-1.5">
              <Wrench className="w-4 h-4 text-[#df0a1a]" />
              APLICACIONES Y VEHÍCULOS COMPATIBLES
            </h3>
            <div className="border border-neutral-300 overflow-x-auto">
              <table className="w-full text-left text-xs font-body">
                <thead>
                  <tr className="bg-[#eeeeee] font-heading font-bold text-neutral-800 uppercase">
                    <th className="p-2 border-b border-neutral-300">Marca</th>
                    <th className="p-2 border-b border-neutral-300">Modelo</th>
                    <th className="p-2 border-b border-neutral-300">Años</th>
                    <th className="p-2 border-b border-neutral-300">Motor</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200">
                  {product.compatibility.map((c, i) => (
                    <tr key={i} className="hover:bg-neutral-50">
                      <td className="p-2 font-semibold text-neutral-900">{c.make}</td>
                      <td className="p-2 text-neutral-700">{c.model}</td>
                      <td className="p-2 text-neutral-600">{c.years}</td>
                      <td className="p-2 font-heading font-bold text-[#df0a1a]">{c.engine}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* OEM interchange codes */}
          <div className="space-y-1.5 pt-2">
            <div className="text-[11px] font-heading font-bold text-neutral-500 uppercase">
              Códigos de Intercambio OEM / Fabricante Original:
            </div>
            <div className="flex flex-wrap gap-1.5">
              {product.oemNumbers.map((oem, idx) => (
                <span
                  key={idx}
                  className="bg-[#eeeeee] text-[#1a1c1c] text-xs font-mono px-2.5 py-1 border border-neutral-300"
                >
                  {oem}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-[#f9f9f9] border-t border-neutral-300 p-4 flex flex-col sm:flex-row justify-between items-center gap-3">
          <div className="text-xs text-neutral-600">
            Disponibilidad: <span className="text-emerald-700 font-bold">En Stock para Despacho Inmediato</span>
          </div>
          <div className="flex gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none border-2 border-neutral-400 bg-white hover:bg-neutral-100 text-neutral-800 font-heading text-xs font-bold uppercase px-5 py-2.5 transition-colors cursor-pointer"
            >
              Cerrar
            </button>
            <button
              onClick={() => onAddToQuote(product)}
              className={`flex-1 sm:flex-none font-heading text-xs font-bold uppercase px-6 py-2.5 clip-slant-right transition-colors text-white cursor-pointer ${
                isInQuote ? 'bg-emerald-600 hover:bg-emerald-700' : 'bg-[#df0a1a] hover:bg-[#b20010]'
              }`}
            >
              {isInQuote ? 'AGREGADO A COTIZACIÓN ✓' : '+ AÑADIR A COTIZACIÓN'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
