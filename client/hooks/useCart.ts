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

export function useCart() {
  const [cart, setCart] = useState<Cart>(() => {
    // Initialize cart from localStorage on first render
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem(CART_STORAGE_KEY);
      if (savedCart) {
        try {
          const parsed = JSON.parse(savedCart);
          console.log("useCart: Loaded from localStorage", parsed);
          return parsed;
        } catch (error) {
          console.error("Error loading cart from localStorage:", error);
        }
      }
    }
    console.log("useCart: Using initial cart", initialCart);
    return initialCart;
  });

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    console.log("useCart: Cart state changed", cart);
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
    setCart((prevCart) => {
      const existingItemIndex = prevCart.items.findIndex(
        (item) => item.artPiece.id === artPiece.id,
      );

      let newItems: CartItem[];

      if (existingItemIndex >= 0) {
        // Update existing item
        newItems = prevCart.items.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        );
      } else {
        // Add new item
        newItems = [...prevCart.items, { artPiece, quantity }];
      }

      const totals = calculateTotals(newItems);
      const newCart = {
        items: newItems,
        subtotal: totals.subtotal || 0,
        tax: totals.tax || 0,
        shipping: totals.shipping || 0,
        total: totals.total || 0,
      };

      // Force immediate localStorage update
      if (typeof window !== "undefined") {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(newCart));
      }

      return newCart;
    });
  };

  const removeFromCart = (artPieceId: string) => {
    setCart((prevCart) => {
      const newItems = prevCart.items.filter(
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

      // Force immediate localStorage update
      if (typeof window !== "undefined") {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(newCart));
      }

      return newCart;
    });
  };

  const updateQuantity = (artPieceId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(artPieceId);
      return;
    }

    setCart((prevCart) => {
      const newItems = prevCart.items.map((item) =>
        item.artPiece.id === artPieceId ? { ...item, quantity } : item,
      );
      const totals = calculateTotals(newItems);
      return { ...prevCart, items: newItems, ...totals };
    });
  };

  const clearCart = () => {
    setCart(initialCart);
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
