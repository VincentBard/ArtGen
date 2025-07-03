import { useCart } from "@/hooks/useCart";

export function CartDebug() {
  const { cart, getItemCount } = useCart();

  if (process.env.NODE_ENV !== "development") {
    return null;
  }

  return (
    <div className="fixed bottom-20 left-6 bg-black text-white p-3 rounded text-xs z-50 max-w-xs">
      <div>Cart Debug:</div>
      <div>Items: {getItemCount()}</div>
      <div>Total: ${cart.total.toFixed(2)}</div>
      <div>
        LocalStorage: {localStorage.getItem("artgallery_cart") ? "Yes" : "No"}
      </div>
      <pre className="text-xs mt-2 max-h-20 overflow-auto">
        {JSON.stringify(
          cart.items.map((item) => ({
            id: item.artPiece.id,
            title: item.artPiece.title,
            qty: item.quantity,
          })),
          null,
          1,
        )}
      </pre>
    </div>
  );
}
