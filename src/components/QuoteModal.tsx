import React, { useState } from 'react';
import { QuoteItem, Product } from '../types';
import { X, Trash2, Plus, Minus, FileText, Send, CheckCircle2, ShoppingBag, ArrowRight } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  quoteItems: QuoteItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearQuote: () => void;
  onNavigateToCatalog: () => void;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  quoteItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearQuote,
  onNavigateToCatalog,
}) => {
  const [workshopName, setWorkshopName] = useState('');
  const [contactName, setContactName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const totalItemsCount = quoteItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleSubmitQuote = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppQuote = () => {
    const itemsText = quoteItems
      .map((item) => `• ${item.quantity}x ${item.product.name} (SKU: ${item.product.sku})`)
      .join('%0A');
    
    const message = `Hola Seal-Pro! Quisiera solicitar cotización formal:%0A%0A*Taller/Empresa:* ${encodeURIComponent(
      workshopName || 'Taller Particular'
    )}%0A*Contacto:* ${encodeURIComponent(contactName || 'Mecánico')}%0A*Ciudad:* ${encodeURIComponent(
      city || 'N/A'
    )}%0A%0A*Repuestos Solicitados:*%0A${itemsText}%0A%0A*Notas:* ${encodeURIComponent(
      notes || 'Favor enviar disponibilidad y precios al mayor.'
    )}`;

    window.open(`https://wa.me/15551234567?text=${message}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-white border-2 border-[#1a1c1c] shadow-industrial-black w-full max-w-3xl max-h-[90vh] flex flex-col overflow-hidden text-[#1a1c1c]">
        {/* Header */}
        <div className="bg-[#1a1c1c] text-white px-6 py-4 flex justify-between items-center border-b-2 border-[#df0a1a]">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-5 h-5 text-[#df0a1a]" />
            <h2 className="font-heading text-base md:text-lg font-bold uppercase tracking-wider">
              SOLICITUD DE COTIZACIÓN FORMAL (TALLER / DISTRIBUIDOR)
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-neutral-400 hover:text-white hover:bg-neutral-800 p-1 transition-colors cursor-pointer"
            aria-label="Cerrar modal de cotización"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {submitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="font-heading text-2xl font-bold uppercase text-[#1a1c1c]">
                ¡SOLICITUD DE COTIZACIÓN ENVIADA CON ÉXITO!
              </h3>
              <p className="font-body text-sm text-neutral-600 max-w-md mx-auto">
                Un asesor técnico de Seal-Pro revisará el inventario en planta para <strong>{workshopName || 'su taller'}</strong> y le enviará la propuesta oficial con descuentos por volumen.
              </p>
              <div className="pt-4 flex justify-center gap-3">
                <button
                  onClick={handleWhatsAppQuote}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-heading text-xs font-bold uppercase px-6 py-3 clip-slant-right"
                >
                  Confirmar Vía WhatsApp &rarr;
                </button>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClearQuote();
                    onClose();
                  }}
                  className="bg-[#1a1c1c] text-white font-heading text-xs font-bold uppercase px-6 py-3"
                >
                  Cerrar
                </button>
              </div>
            </div>
          ) : quoteItems.length === 0 ? (
            <div className="text-center py-12 space-y-4">
              <ShoppingBag className="w-12 h-12 text-neutral-400 mx-auto" />
              <h3 className="font-heading text-lg font-bold uppercase text-[#1a1c1c]">
                No hay productos en su lista de cotización
              </h3>
              <p className="font-body text-xs text-neutral-500 max-w-sm mx-auto">
                Explore nuestro catálogo y agregue empaques de culata, sellos de válvulas o juegos completos con el botón &ldquo;+&rdquo;.
              </p>
              <button
                onClick={() => {
                  onClose();
                  onNavigateToCatalog();
                }}
                className="bg-[#df0a1a] hover:bg-[#b20010] text-white font-heading text-xs font-bold uppercase px-6 py-3 clip-slant-right cursor-pointer"
              >
                IR AL CATÁLOGO DE PRODUCTOS
              </button>
            </div>
          ) : (
            <>
              {/* Product List Table */}
              <div className="border border-neutral-300">
                <div className="bg-[#1a1c1c] text-white px-4 py-2 text-xs font-heading font-bold uppercase flex justify-between">
                  <span>Productos Seleccionados ({totalItemsCount} unidades)</span>
                  <button
                    onClick={onClearQuote}
                    className="text-neutral-400 hover:text-red-400 uppercase text-[10px]"
                  >
                    Vaciar Lista
                  </button>
                </div>
                <div className="divide-y divide-neutral-200">
                  {quoteItems.map((item) => (
                    <div key={item.product.id} className="p-3.5 flex items-center justify-between gap-4 bg-white">
                      <div className="flex items-center gap-3 flex-1 min-w-0">
                        <img
                          src={item.product.image}
                          alt={item.product.sku}
                          className="w-12 h-12 object-cover border border-neutral-200 flex-shrink-0"
                        />
                        <div className="min-w-0">
                          <span className="text-[10px] font-heading font-bold text-[#df0a1a] uppercase">
                            SKU: {item.product.sku}
                          </span>
                          <h4 className="font-heading font-bold text-xs text-[#1a1c1c] truncate uppercase">
                            {item.product.name}
                          </h4>
                          <span className="text-[11px] text-neutral-500 font-body block truncate">
                            {item.product.material.split('+')[0]}
                          </span>
                        </div>
                      </div>

                      {/* Stepper */}
                      <div className="flex items-center gap-2">
                        <div className="flex items-center border border-neutral-300">
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, -1)}
                            className="p-1.5 hover:bg-neutral-100 text-neutral-700"
                            title="Disminuir"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="px-3 font-heading font-bold text-xs">{item.quantity}</span>
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, 1)}
                            className="p-1.5 hover:bg-neutral-100 text-neutral-700"
                            title="Aumentar"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <button
                          onClick={() => onRemoveItem(item.product.id)}
                          className="p-1.5 text-neutral-400 hover:text-red-600 transition-colors"
                          title="Eliminar ítem"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Form to submit */}
              <form onSubmit={handleSubmitQuote} className="space-y-4 pt-2">
                <h3 className="font-heading text-xs font-bold uppercase text-[#1a1c1c] border-b border-neutral-200 pb-1">
                  DATOS DEL TALLER / SOLICITANTE
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div>
                    <label className="block font-heading font-bold uppercase text-neutral-700 mb-1">
                      Nombre del Taller / Empresa *
                    </label>
                    <input
                      type="text"
                      required
                      value={workshopName}
                      onChange={(e) => setWorkshopName(e.target.value)}
                      placeholder="Ej: Rectificadora Central C.A."
                      className="w-full p-2 bg-[#f9f9f9] border border-neutral-300 focus:border-[#df0a1a] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-heading font-bold uppercase text-neutral-700 mb-1">
                      Persona de Contacto *
                    </label>
                    <input
                      type="text"
                      required
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      placeholder="Ej: Ing. Carlos Pérez"
                      className="w-full p-2 bg-[#f9f9f9] border border-neutral-300 focus:border-[#df0a1a] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-heading font-bold uppercase text-neutral-700 mb-1">
                      WhatsApp / Teléfono *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+1 (555) 000-0000"
                      className="w-full p-2 bg-[#f9f9f9] border border-neutral-300 focus:border-[#df0a1a] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-heading font-bold uppercase text-neutral-700 mb-1">
                      Correo Electrónico *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="taller@ejemplo.com"
                      className="w-full p-2 bg-[#f9f9f9] border border-neutral-300 focus:border-[#df0a1a] focus:outline-none"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block font-heading font-bold uppercase text-neutral-700 mb-1">
                      Ciudad / País y Notas adicionales
                    </label>
                    <input
                      type="text"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Indique si requiere entrega urgente o especificaciones especiales..."
                      className="w-full p-2 bg-[#f9f9f9] border border-neutral-300 focus:border-[#df0a1a] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-between gap-3 pt-4 border-t border-neutral-200">
                  <button
                    type="button"
                    onClick={handleWhatsAppQuote}
                    className="border-2 border-emerald-600 bg-emerald-50 text-emerald-700 hover:bg-emerald-600 hover:text-white font-heading text-xs font-bold uppercase px-4 py-2.5 transition-colors cursor-pointer text-center"
                  >
                    Cotizar Directo por WhatsApp
                  </button>

                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={onClose}
                      className="border border-neutral-300 bg-white text-neutral-800 font-heading text-xs font-bold uppercase px-4 py-2.5"
                    >
                      Seguir Explorando
                    </button>
                    <button
                      type="submit"
                      className="bg-[#df0a1a] hover:bg-[#b20010] text-white font-heading text-xs font-bold uppercase px-6 py-2.5 clip-slant-right cursor-pointer"
                    >
                      ENVIAR SOLICITUD &rarr;
                    </button>
                  </div>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
