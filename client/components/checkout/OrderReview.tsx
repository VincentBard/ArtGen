import { useState } from "react";
import { Check, Edit, Truck, CreditCard, Package } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { OrderCustomer, ShippingAddress, PaymentMethod } from "@shared/types";
import { useCart } from "@/hooks/useCart";

interface OrderReviewProps {
  customer: OrderCustomer;
  shipping: ShippingAddress;
  payment: PaymentMethod;
  onEdit: (step: number) => void;
  onPlaceOrder: () => void;
  onBack: () => void;
}

export function OrderReview({
  customer,
  shipping,
  payment,
  onEdit,
  onPlaceOrder,
  onBack,
}: OrderReviewProps) {
  const { cart } = useCart();
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);

  const handlePlaceOrder = async () => {
    if (!acceptTerms) return;

    setIsPlacingOrder(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    onPlaceOrder();
    setIsPlacingOrder(false);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);
  };

  const maskCardNumber = (cardNumber?: string) => {
    if (!cardNumber) return "";
    return `**** **** **** ${cardNumber.slice(-4)}`;
  };

  return (
    <div className="space-y-6">
      {/* Order Items */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Package className="h-5 w-5" />
            Order Summary
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {cart.items.map((item) => (
              <div
                key={item.artPiece.id}
                className="flex items-center gap-4 py-4 border-b last:border-b-0"
              >
                <img
                  src={item.artPiece.image}
                  alt={item.artPiece.title}
                  className="w-16 h-20 object-cover rounded-md"
                />
                <div className="flex-1">
                  <h4 className="font-medium">{item.artPiece.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    by {item.artPiece.artist.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {item.artPiece.dimensions.width}" ×{" "}
                    {item.artPiece.dimensions.height}"{" "}
                    {item.artPiece.dimensions.unit}
                  </p>
                  <Badge variant="outline" className="mt-1 text-xs">
                    {item.artPiece.medium}
                  </Badge>
                </div>
                <div className="text-right">
                  <p className="font-medium">
                    {formatPrice(item.artPiece.price)}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Qty: {item.quantity}
                  </p>
                </div>
              </div>
            ))}

            <Separator />

            {/* Pricing Breakdown */}
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
                  {cart.shipping === 0 ? "Free" : formatPrice(cart.shipping)}
                </span>
              </div>
              <Separator />
              <div className="flex justify-between font-semibold text-lg">
                <span>Total</span>
                <span>{formatPrice(cart.total)}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Customer Information */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-600" />
              Customer Information
            </span>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onEdit(1)}
              className="text-primary"
            >
              <Edit className="h-4 w-4 mr-1" />
              Edit
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <p>
              <strong>Name:</strong> {customer.firstName} {customer.lastName}
            </p>
            <p>
              <strong>Email:</strong> {customer.email}
            </p>
            {customer.phone && (
              <p>
                <strong>Phone:</strong> {customer.phone}
              </p>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Shipping Information */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span className="flex items-center gap-2">
              <Truck className="h-5 w-5 text-blue-600" />
              Shipping Address
            </span>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onEdit(1)}
              className="text-primary"
            >
              <Edit className="h-4 w-4 mr-1" />
              Edit
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            <p>{shipping.street}</p>
            <p>
              {shipping.city}, {shipping.state} {shipping.postalCode}
            </p>
            <p>{shipping.country}</p>
          </div>
        </CardContent>
      </Card>

      {/* Payment Information */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span className="flex items-center gap-2">
              <CreditCard className="h-5 w-5 text-purple-600" />
              Payment Method
            </span>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onEdit(2)}
              className="text-primary"
            >
              <Edit className="h-4 w-4 mr-1" />
              Edit
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            {payment.type === "card" && (
              <div>
                <p>
                  <strong>Card:</strong> {maskCardNumber(payment.cardNumber)}
                </p>
                <p>
                  <strong>Name:</strong> {payment.cardholderName}
                </p>
              </div>
            )}
            {payment.type === "paypal" && (
              <p>
                <strong>PayPal:</strong> Payment will be processed via PayPal
              </p>
            )}
            {payment.type === "bank" && (
              <p>
                <strong>Bank Transfer:</strong> Instructions will be sent after
                order confirmation
              </p>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Terms and Conditions */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-start space-x-2">
            <Checkbox
              id="accept-terms"
              checked={acceptTerms}
              onCheckedChange={setAcceptTerms}
            />
            <div className="grid gap-1.5 leading-none">
              <Label
                htmlFor="accept-terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I accept the terms and conditions
              </Label>
              <p className="text-xs text-muted-foreground">
                By placing this order, you agree to our{" "}
                <a href="/terms" className="text-primary hover:underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </a>
                .
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-between pt-6">
        <Button variant="outline" onClick={onBack}>
          Back to Payment
        </Button>
        <Button
          onClick={handlePlaceOrder}
          disabled={!acceptTerms || isPlacingOrder}
          className="min-w-[150px]"
        >
          {isPlacingOrder ? "Placing Order..." : "Place Order"}
        </Button>
      </div>
    </div>
  );
}
