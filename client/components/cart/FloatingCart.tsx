import { Link } from "react-router-dom";
import { ShoppingCart, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useCart } from "@/hooks/useCart";
import { useState } from "react";

export function FloatingCart() {
  const { cart, getItemCount, removeFromCart } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);
  };

  if (getItemCount() === 0) {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            size="lg"
            className="h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 relative"
          >
            <ShoppingCart className="h-6 w-6" />
            <Badge
              variant="destructive"
              className="absolute -top-2 -right-2 h-6 w-6 rounded-full p-0 text-xs font-bold flex items-center justify-center"
            >
              {getItemCount()}
            </Badge>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-96">
          <SheetHeader>
            <SheetTitle>Shopping Cart</SheetTitle>
            <SheetDescription>
              {getItemCount()} {getItemCount() === 1 ? "item" : "items"} in your
              cart
            </SheetDescription>
          </SheetHeader>

          <div className="mt-6 space-y-4">
            {cart.items.map((item) => (
              <div
                key={item.artPiece.id}
                className="flex gap-3 p-3 border rounded-lg"
              >
                <img
                  src={item.artPiece.image}
                  alt={item.artPiece.title}
                  className="w-16 h-20 object-cover rounded-md"
                />
                <div className="flex-1">
                  <h4 className="font-medium text-sm line-clamp-1">
                    {item.artPiece.title}
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    by {item.artPiece.artist.name}
                  </p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="font-semibold text-sm">
                      {formatPrice(item.artPiece.price)}
                    </span>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6"
                      onClick={() => removeFromCart(item.artPiece.id)}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Separator className="my-6" />

          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span>Subtotal</span>
              <span>{formatPrice(cart.subtotal)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Tax</span>
              <span>{formatPrice(cart.tax)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Shipping</span>
              <span>
                {cart.shipping === 0 ? "Free" : formatPrice(cart.shipping)}
              </span>
            </div>
            <Separator />
            <div className="flex justify-between font-semibold">
              <span>Total</span>
              <span>{formatPrice(cart.total)}</span>
            </div>
          </div>

          <div className="mt-6 space-y-3">
            <Button asChild className="w-full" onClick={() => setIsOpen(false)}>
              <Link to="/checkout">
                Checkout Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="w-full"
              onClick={() => setIsOpen(false)}
            >
              <Link to="/cart">View Full Cart</Link>
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
