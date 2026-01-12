
export interface Product {
  id: number;
  slug: string;
  name: string;
  price: number;
  oldPrice?: number;
  unit: string;
  tag?: 'ยอดนิยม' | 'ลดราคา' | 'ใหม่';
  img: string;
  description: string;
  nutrition?: {
    calories: string;
    fiber: string;
    vitaminA: string;
    vitaminC: string;
  };
}

export interface CartItem extends Product {
  quantity: number;
}

export interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, delta: number) => void;
  clearCart: () => void;
  subtotal: number;
  shipping: number;
  total: number;
}
