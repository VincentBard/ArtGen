import { useState, useEffect } from "react";
import { Cart, CartItem, ArtPiece } from "@shared/types";

const CART_STORAGE_KEY = "artgallery_cart";

const initialCart: Cart = {
  items: [],
  total: 0,
  subtotal: 0,
  tax: 0,
  shipping: 0,
};

// Global cart state to share between all components
let globalCart: Cart = initialCart;
let listeners: Array<(cart: Cart) => void> = [];

// Function to notify all listeners of cart changes
const notifyListeners = (newCart: Cart) => {
  globalCart = newCart;
  listeners.forEach((listener) => listener(newCart));
};

export function useCart() {
  const [cart, setCart] = useState<Cart>(() => {
    // Initialize from localStorage or global state
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem(CART_STORAGE_KEY);
      if (savedCart) {
        try {
          const parsed = JSON.parse(savedCart);
          globalCart = parsed;
          return parsed;
        } catch (error) {
          console.error("Error loading cart from localStorage:", error);
        }
      }
    }
    return globalCart;
  });

  // Subscribe to global cart changes
  useEffect(() => {
    const listener = (newCart: Cart) => setCart(newCart);
    listeners.push(listener);

    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    }
  }, [cart]);

  const calculateTotals = (items: CartItem[]): Partial<Cart> => {
    const subtotal = items.reduce(
      (sum, item) => sum + item.artPiece.price * item.quantity,
      0,
    );
    const tax = subtotal * 0.08; // 8% tax
    const shipping = subtotal > 500 ? 0 : 25; // Free shipping over $500
    const total = subtotal + tax + shipping;

    return { subtotal, tax, shipping, total };
  };

  const addToCart = (artPiece: ArtPiece, quantity = 1) => {
    const existingItemIndex = globalCart.items.findIndex(
      (item) => item.artPiece.id === artPiece.id,
    );

    let newItems: CartItem[];

    if (existingItemIndex >= 0) {
      // Update existing item
      newItems = globalCart.items.map((item, index) =>
        index === existingItemIndex
          ? { ...item, quantity: item.quantity + quantity }
          : item,
      );
    } else {
      // Add new item
      newItems = [...globalCart.items, { artPiece, quantity }];
    }

    const totals = calculateTotals(newItems);
    const newCart = {
      items: newItems,
      subtotal: totals.subtotal || 0,
      tax: totals.tax || 0,
      shipping: totals.shipping || 0,
      total: totals.total || 0,
    };

    // Update global state and notify all listeners
    notifyListeners(newCart);

    // Force immediate localStorage update
    if (typeof window !== "undefined") {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(newCart));
    }
  };

  const removeFromCart = (artPieceId: string) => {
    const newItems = globalCart.items.filter(
      (item) => item.artPiece.id !== artPieceId,
    );
    const totals = calculateTotals(newItems);
    const newCart = {
      items: newItems,
      subtotal: totals.subtotal || 0,
      tax: totals.tax || 0,
      shipping: totals.shipping || 0,
      total: totals.total || 0,
    };

    // Update global state and notify all listeners
    notifyListeners(newCart);

    // Force immediate localStorage update
    if (typeof window !== "undefined") {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(newCart));
    }
  };

  const updateQuantity = (artPieceId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(artPieceId);
      return;
    }

    const newItems = globalCart.items.map((item) =>
      item.artPiece.id === artPieceId ? { ...item, quantity } : item,
    );
    const totals = calculateTotals(newItems);
    const newCart = {
      items: newItems,
      subtotal: totals.subtotal || 0,
      tax: totals.tax || 0,
      shipping: totals.shipping || 0,
      total: totals.total || 0,
    };

    // Update global state and notify all listeners
    notifyListeners(newCart);
  };

  const clearCart = () => {
    notifyListeners(initialCart);
  };

  const getItemCount = () => {
    return cart.items.reduce((sum, item) => sum + item.quantity, 0);
  };

  const isInCart = (artPieceId: string) => {
    return cart.items.some((item) => item.artPiece.id === artPieceId);
  };

  const getItemQuantity = (artPieceId: string) => {
    const item = cart.items.find((item) => item.artPiece.id === artPieceId);
    return item ? item.quantity : 0;
  };

  return {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getItemCount,
    isInCart,
    getItemQuantity,
  };
}
