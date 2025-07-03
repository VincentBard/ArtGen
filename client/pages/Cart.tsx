import { Link } from "react-router-dom";
import {
  ShoppingBag,
  ArrowRight,
  Truck,
  Shield,
  RefreshCcw,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CartItem } from "@/components/cart/CartItem";
import { ArtCard } from "@/components/art/ArtCard";
import { useCart } from "@/hooks/useCart";
import { mockArtPieces } from "@/data/mockArt";

export default function Cart() {
  const { cart, clearCart, getItemCount } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);
  };

  // Get suggested items (excluding items already in cart)
  const cartItemIds = cart.items.map((item) => item.artPiece.id);
  const suggestedItems = mockArtPieces
    .filter((piece) => !cartItemIds.includes(piece.id))
    .slice(0, 4);

  const benefits = [
    {
      icon: <Truck className="h-5 w-5" />,
      title: "Free Shipping",
      description: "On orders over $500",
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: "Secure Checkout",
      description: "256-bit SSL encryption",
    },
    {
      icon: <RefreshCcw className="h-5 w-5" />,
      title: "Easy Returns",
      description: "30-day return policy",
    },
  ];

  if (cart.items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />

        <div className="container py-12">
          {/* Empty Cart State */}
          <div className="max-w-md mx-auto text-center">
            <div className="w-24 h-24 mx-auto mb-6 bg-muted rounded-full flex items-center justify-center">
              <ShoppingBag className="h-12 w-12 text-muted-foreground" />
            </div>
            <h1 className="font-display text-3xl font-bold mb-4">
              Your cart is empty
            </h1>
            <p className="text-muted-foreground mb-8">
              Looks like you haven't added any artworks to your cart yet.
              Discover amazing AI-generated art and start your collection!
            </p>
            <div className="space-y-4">
              <Button asChild size="lg" className="w-full">
                <Link to="/gallery">
                  <ShoppingBag className="mr-2 h-4 w-4" />
                  Explore Gallery
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full">
                <Link to="/">Return Home</Link>
              </Button>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">
            Shopping Cart
          </h1>
          <p className="text-muted-foreground">
            {getItemCount()} {getItemCount() === 1 ? "item" : "items"} in your
            cart
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Your Items</CardTitle>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearCart}
                  className="text-muted-foreground hover:text-destructive"
                >
                  Clear Cart
                </Button>
              </CardHeader>
              <CardContent className="p-0">
                {cart.items.map((item, index) => (
                  <CartItem
                    key={item.artPiece.id}
                    item={item}
                    className={
                      index === cart.items.length - 1 ? "border-b-0" : ""
                    }
                  />
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>{formatPrice(cart.subtotal)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span>{formatPrice(cart.tax)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>
                      {cart.shipping === 0 ? (
                        <Badge variant="secondary" className="text-xs">
                          Free
                        </Badge>
                      ) : (
                        formatPrice(cart.shipping)
                      )}
                    </span>
                  </div>
                  {cart.subtotal < 500 && cart.shipping > 0 && (
                    <p className="text-xs text-muted-foreground">
                      Add {formatPrice(500 - cart.subtotal)} more for free
                      shipping
                    </p>
                  )}
                </div>

                <Separator />

                <div className="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span className="price-text">{formatPrice(cart.total)}</span>
                </div>

                <Button asChild size="lg" className="w-full">
                  <Link to="/checkout">
                    Proceed to Checkout
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>

                <Button asChild variant="outline" size="lg" className="w-full">
                  <Link to="/gallery">Continue Shopping</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Why Shop With Us</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-0.5">
                      {benefit.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">{benefit.title}</h4>
                      <p className="text-xs text-muted-foreground">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Suggested Items */}
        {suggestedItems.length > 0 && (
          <div className="mt-16">
            <div className="mb-8">
              <h2 className="font-display text-2xl font-bold mb-2">
                You Might Also Like
              </h2>
              <p className="text-muted-foreground">
                Discover more amazing artworks from our collection
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {suggestedItems.map((artPiece) => (
                <ArtCard key={artPiece.id} artPiece={artPiece} />
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
