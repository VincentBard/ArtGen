import { Link } from "react-router-dom";
import {
  CheckCircle,
  Download,
  Mail,
  Truck,
  Home,
  Package,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface OrderConfirmationProps {
  orderNumber: string;
  email: string;
  onStartNewOrder: () => void;
}

export function OrderConfirmation({
  orderNumber,
  email,
  onStartNewOrder,
}: OrderConfirmationProps) {
  const estimatedDelivery = new Date();
  estimatedDelivery.setDate(estimatedDelivery.getDate() + 7);

  const nextSteps = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Order Confirmation",
      description: "We've sent a confirmation email to your inbox",
      status: "completed",
    },
    {
      icon: <Package className="h-5 w-5" />,
      title: "Order Processing",
      description: "Your artwork is being prepared for shipping",
      status: "pending",
    },
    {
      icon: <Truck className="h-5 w-5" />,
      title: "Shipping",
      description: "Your order will be shipped within 2-3 business days",
      status: "upcoming",
    },
    {
      icon: <Home className="h-5 w-5" />,
      title: "Delivery",
      description: `Estimated delivery: ${estimatedDelivery.toLocaleDateString()}`,
      status: "upcoming",
    },
  ];

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Success Message */}
      <Card className="text-center">
        <CardContent className="pt-8 pb-6">
          <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
          <h1 className="font-display text-3xl font-bold mb-2">
            Order Confirmed!
          </h1>
          <p className="text-muted-foreground mb-4">
            Thank you for your purchase. Your order has been successfully
            placed.
          </p>
          <div className="bg-muted rounded-lg p-4 mb-4">
            <p className="text-sm text-muted-foreground mb-1">Order Number</p>
            <p className="font-mono text-lg font-semibold">{orderNumber}</p>
          </div>
          <p className="text-sm text-muted-foreground">
            A confirmation email has been sent to{" "}
            <span className="font-medium">{email}</span>
          </p>
        </CardContent>
      </Card>

      {/* Order Progress */}
      <Card>
        <CardHeader>
          <CardTitle>What Happens Next?</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {nextSteps.map((step, index) => (
              <div key={index} className="flex items-start gap-4">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    step.status === "completed"
                      ? "bg-green-100 text-green-600"
                      : step.status === "pending"
                        ? "bg-blue-100 text-blue-600"
                        : "bg-muted text-muted-foreground"
                  }`}
                >
                  {step.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-medium">{step.title}</h4>
                    {step.status === "completed" && (
                      <Badge variant="default" className="text-xs">
                        Completed
                      </Badge>
                    )}
                    {step.status === "pending" && (
                      <Badge variant="secondary" className="text-xs">
                        In Progress
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Manage Your Order</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button variant="outline" className="justify-start">
              <Download className="mr-2 h-4 w-4" />
              Download Receipt
            </Button>
            <Button variant="outline" className="justify-start">
              <Truck className="mr-2 h-4 w-4" />
              Track Order
            </Button>
            <Button variant="outline" className="justify-start">
              <Mail className="mr-2 h-4 w-4" />
              Contact Support
            </Button>
            <Button variant="outline" className="justify-start">
              <Package className="mr-2 h-4 w-4" />
              View Order Details
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Continue Shopping */}
      <div className="text-center space-y-4">
        <Separator />
        <p className="text-muted-foreground">
          Ready to discover more amazing artworks?
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <Link to="/gallery">Continue Shopping</Link>
          </Button>
          <Button variant="outline" onClick={onStartNewOrder}>
            Start New Order
          </Button>
        </div>
      </div>
    </div>
  );
}
