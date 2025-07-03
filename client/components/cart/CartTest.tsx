import { useCart } from "@/hooks/useCart";
import { mockArtPieces } from "@/data/mockArt";
import { Button } from "@/components/ui/button";

export function CartTest() {
  const { cart, addToCart, removeFromCart, getItemCount } = useCart();

  const handleAddTest = () => {
    const testItem = mockArtPieces[0];
    console.log("TEST: Before add - Cart:", cart);
    console.log("TEST: Adding item", testItem.title);
    addToCart(testItem);
    // Add a small delay to check async state updates
    setTimeout(() => {
      console.log("TEST: Cart state after delay", cart);
    }, 100);
  };

  const handleRemoveTest = () => {
    if (cart.items.length > 0) {
      const firstItem = cart.items[0];
      console.log("TEST: Before remove - Cart:", cart);
      console.log("TEST: Removing item", firstItem.artPiece.title);
      removeFromCart(firstItem.artPiece.id);
      setTimeout(() => {
        console.log("TEST: Cart state after remove delay", cart);
      }, 100);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 bg-yellow-400 text-black p-4 rounded shadow-lg text-sm z-50">
      <div className="font-bold">Cart Test</div>
      <div>Items: {getItemCount()}</div>
      <div>Total: ${cart.total.toFixed(2)}</div>
      <div className="flex gap-2 mt-2">
        <Button onClick={handleAddTest} size="sm">
          Add Test
        </Button>
        <Button onClick={handleRemoveTest} size="sm" variant="outline">
          Remove Test
        </Button>
      </div>
      <div className="mt-2 text-xs">
        Cart Items:{" "}
        {cart.items.map((i) => i.artPiece.title.slice(0, 10)).join(", ")}
      </div>
    </div>
  );
}
