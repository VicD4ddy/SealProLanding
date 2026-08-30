import React, { useState, useEffect } from 'react';
import { ActiveTab, Product, QuoteItem } from './types';
import { PRODUCTS_DATA } from './data/products';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomeView } from './components/HomeView';
import { ProductsView } from './components/ProductsView';
import { QualityView } from './components/QualityView';
import { AboutView } from './components/AboutView';
import { TechSpecsView } from './components/TechSpecsView';
import { ProductDetailModal } from './components/ProductDetailModal';
import { QuoteModal } from './components/QuoteModal';
import { ContactModal } from './components/ContactModal';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [quoteModalOpen, setQuoteModalOpen] = useState<boolean>(false);
  const [contactModalOpen, setContactModalOpen] = useState<boolean>(false);

  // Quote Cart state with local storage fallback
  const [quoteItems, setQuoteItems] = useState<QuoteItem[]>(() => {
    try {
      const saved = localStorage.getItem('sealpro_quote_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Notification Toast
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem('sealpro_quote_cart', JSON.stringify(quoteItems));
    } catch {
      // ignore
    }
  }, [quoteItems]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleAddToQuote = (product: Product) => {
    setQuoteItems((prev) => {
      const exists = prev.find((item) => item.product.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    showToast(`"${product.name}" agregado a la lista de cotización.`);
  };

  const handleUpdateQuantity = (productId: string, delta: number) => {
    setQuoteItems((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as QuoteItem[]
    );
  };

  const handleRemoveItem = (productId: string) => {
    setQuoteItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearQuote = () => {
    setQuoteItems([]);
  };

  const handleSelectProductBySku = (sku: string) => {
    const found = PRODUCTS_DATA.find((p) => p.sku === sku);
    if (found) {
      setSelectedProduct(found);
    } else {
      setActiveTab('products');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f9f9f9] text-[#1a1c1c] selection:bg-[#df0a1a] selection:text-white font-body">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#1a1c1c] text-white border-l-4 border-[#df0a1a] px-4 py-3 shadow-industrial-black text-xs font-heading font-bold animate-in slide-in-from-bottom-5">
          {toastMessage}
        </div>
      )}

      {/* Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        quoteItems={quoteItems}
        onOpenQuote={() => setQuoteModalOpen(true)}
        onOpenContact={() => setContactModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <HomeView
            products={PRODUCTS_DATA}
            setActiveTab={setActiveTab}
            onSelectProduct={(p) => setSelectedProduct(p)}
            onOpenContact={() => setContactModalOpen(true)}
            onOpenQuote={() => setQuoteModalOpen(true)}
          />
        )}

        {activeTab === 'products' && (
          <ProductsView
            products={PRODUCTS_DATA}
            onSelectProduct={(p) => setSelectedProduct(p)}
            onAddToQuote={handleAddToQuote}
            quoteSkus={quoteItems.map((item) => item.product.sku)}
          />
        )}

        {activeTab === 'quality' && (
          <QualityView
            setActiveTab={setActiveTab}
            onOpenContact={() => setContactModalOpen(true)}
          />
        )}

        {activeTab === 'about' && (
          <AboutView
            setActiveTab={setActiveTab}
            onOpenContact={() => setContactModalOpen(true)}
          />
        )}

        {activeTab === 'tech-specs' && (
          <TechSpecsView
            products={PRODUCTS_DATA}
            onSelectProductBySku={handleSelectProductBySku}
            onOpenContact={() => setContactModalOpen(true)}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        setActiveTab={setActiveTab}
        onOpenContact={() => setContactModalOpen(true)}
      />

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToQuote={handleAddToQuote}
        isInQuote={Boolean(
          selectedProduct && quoteItems.some((item) => item.product.id === selectedProduct.id)
        )}
      />

      {/* Quote Cart Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        quoteItems={quoteItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearQuote={handleClearQuote}
        onNavigateToCatalog={() => setActiveTab('products')}
      />

      {/* Contact / Advisory Modal */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </div>
  );
}

