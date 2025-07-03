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
  const [cart, setCart] = useState<Cart>(initialCart);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem(CART_STORAGE_KEY);
    console.log("useCart: Loading cart from localStorage", savedCart);
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        console.log("useCart: Parsed cart from localStorage", parsedCart);
        setCart(parsedCart);
      } catch (error) {
        console.error("Error loading cart from localStorage:", error);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    console.log("useCart: Saving cart to localStorage", cart);
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
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
    console.log("useCart: Adding to cart", {
      artPiece: artPiece.title,
      quantity,
    });
    setCart((prevCart) => {
      console.log("useCart: Previous cart state", prevCart);
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
        console.log("useCart: Updated existing item", newItems);
      } else {
        // Add new item
        newItems = [...prevCart.items, { artPiece, quantity }];
        console.log("useCart: Added new item", newItems);
      }

      const totals = calculateTotals(newItems);
      const newCart = { ...prevCart, items: newItems, ...totals };
      console.log("useCart: New cart state", newCart);
      return newCart;
    });
  };

  const removeFromCart = (artPieceId: string) => {
    setCart((prevCart) => {
      const newItems = prevCart.items.filter(
        (item) => item.artPiece.id !== artPieceId,
      );
      const totals = calculateTotals(newItems);
      return { ...prevCart, items: newItems, ...totals };
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
