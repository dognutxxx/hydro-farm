
import React, { useState, createContext, useContext, useMemo } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import SuccessPage from './pages/SuccessPage';
import TrackPage from './pages/TrackPage';
import HowToPage from './pages/HowToPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PromotionsPage from './pages/PromotionsPage';
import { Product, CartItem, CartContextType } from './types';

export const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
};

const App: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: number) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId: number, delta: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
      )
    );
  };

  const clearCart = () => setCart([]);

  const subtotal = useMemo(() => cart.reduce((sum, item) => sum + item.price * item.quantity, 0), [cart]);
  const shipping = cart.length > 0 ? 40 : 0;
  const total = subtotal + shipping;

  const cartValue = {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    subtotal,
    shipping,
    total,
  };

  return (
    <CartContext.Provider value={cartValue}>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/product/:slug" element={<ProductDetailPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/success" element={<SuccessPage />} />
            <Route path="/track" element={<TrackPage />} />
            <Route path="/how-to" element={<HowToPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/promotions" element={<PromotionsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </CartContext.Provider>
  );
};

export default App;
