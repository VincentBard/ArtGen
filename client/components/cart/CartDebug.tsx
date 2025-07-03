import { useCart } from "@/hooks/useCart";
import { mockArtPieces } from "@/data/mockArt";
import { useEffect, useState } from "react";

export function CartDebug() {
  const { cart, getItemCount, addToCart } = useCart();
  const [forceRender, setForceRender] = useState(0);

  // Force re-render when cart changes
  useEffect(() => {
    setForceRender((prev) => prev + 1);
  }, [cart, cart.items.length, cart.total]);

  if (process.env.NODE_ENV !== "development") {
    return null;
  }

  const storageData =
    typeof window !== "undefined"
      ? localStorage.getItem("artgallery_cart")
      : null;

  const testAddToCart = () => {
    const testArt = mockArtPieces[0];
    console.log("Debug: Adding test item to cart", testArt);
    addToCart(testArt);
  };

  return (
    <div className="fixed bottom-20 left-6 bg-black text-white p-3 rounded text-xs z-50 max-w-xs">
      <div className="font-bold">Cart Debug: (R:{forceRender})</div>
      <div>Items Count: {getItemCount()}</div>
      <div>Array Length: {cart.items.length}</div>
      <div>Total: ${cart.total.toFixed(2)}</div>
      <div>Subtotal: ${cart.subtotal.toFixed(2)}</div>
      <div>LocalStorage: {storageData ? "Yes" : "No"}</div>
      {storageData && (
        <div>Storage Items: {JSON.parse(storageData).items?.length || 0}</div>
      )}
      <button
        onClick={testAddToCart}
        className="bg-red-600 text-white px-2 py-1 rounded mt-2 text-xs"
      >
        Test Add Item
      </button>
      <pre className="text-xs mt-2 max-h-20 overflow-auto">
        {JSON.stringify(
          cart.items.map((item) => ({
            id: item.artPiece.id,
            title: item.artPiece.title.substring(0, 15),
            qty: item.quantity,
          })),
          null,
          1,
        )}
      </pre>
    </div>
  );
}
