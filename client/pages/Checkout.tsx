import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  CheckoutStepper,
  CheckoutStep,
} from "@/components/checkout/CheckoutStepper";
import { ShippingForm } from "@/components/checkout/ShippingForm";
import { PaymentForm } from "@/components/checkout/PaymentForm";
import { OrderReview } from "@/components/checkout/OrderReview";
import { OrderConfirmation } from "@/components/checkout/OrderConfirmation";
import { useCart } from "@/hooks/useCart";
import { OrderCustomer, ShippingAddress, PaymentMethod } from "@shared/types";

const checkoutSteps: CheckoutStep[] = [
  {
    id: "shipping",
    title: "Shipping",
    description: "Address & Contact",
  },
  {
    id: "payment",
    title: "Payment",
    description: "Payment Method",
  },
  {
    id: "review",
    title: "Review",
    description: "Order Summary",
  },
  {
    id: "confirmation",
    title: "Complete",
    description: "Order Confirmed",
  },
];

export default function Checkout() {
  const navigate = useNavigate();
  const { cart, clearCart } = useCart();
  const [currentStep, setCurrentStep] = useState(0);
  const [customer, setCustomer] = useState<OrderCustomer | null>(null);
  const [shipping, setShipping] = useState<ShippingAddress | null>(null);
  const [payment, setPayment] = useState<PaymentMethod | null>(null);
  const [orderNumber, setOrderNumber] = useState<string>("");

  // Redirect to cart if empty
  if (cart.items.length === 0 && currentStep < 3) {
    navigate("/cart");
    return null;
  }

  const handleStepClick = (stepIndex: number) => {
    // Only allow going back to completed steps
    if (stepIndex < currentStep) {
      setCurrentStep(stepIndex);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleShippingNext = (data: {
    customer: OrderCustomer;
    shipping: ShippingAddress;
  }) => {
    setCustomer(data.customer);
    setShipping(data.shipping);
    setCurrentStep(1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePaymentNext = (data: PaymentMethod) => {
    setPayment(data);
    setCurrentStep(2);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleOrderPlace = () => {
    // Generate order number
    const orderNum = `ART${Date.now().toString().slice(-8)}`;
    setOrderNumber(orderNum);
    clearCart();
    setCurrentStep(3);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleStartNewOrder = () => {
    // Reset all state
    setCurrentStep(0);
    setCustomer(null);
    setShipping(null);
    setPayment(null);
    setOrderNumber("");
    navigate("/gallery");
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <ShippingForm
            onNext={handleShippingNext}
            onBack={() => navigate("/cart")}
          />
        );
      case 1:
        return (
          <PaymentForm
            onNext={handlePaymentNext}
            onBack={() => setCurrentStep(0)}
          />
        );
      case 2:
        return customer && shipping && payment ? (
          <OrderReview
            customer={customer}
            shipping={shipping}
            payment={payment}
            onEdit={handleStepClick}
            onPlaceOrder={handleOrderPlace}
            onBack={() => setCurrentStep(1)}
          />
        ) : null;
      case 3:
        return customer ? (
          <OrderConfirmation
            orderNumber={orderNumber}
            email={customer.email}
            onStartNewOrder={handleStartNewOrder}
          />
        ) : null;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">
            {currentStep === 3 ? "Order Complete" : "Checkout"}
          </h1>
          <p className="text-muted-foreground">
            {currentStep === 3
              ? "Thank you for your purchase!"
              : "Complete your purchase securely"}
          </p>
        </div>

        {/* Progress Stepper */}
        {currentStep < 3 && (
          <div className="mb-12">
            <CheckoutStepper
              steps={checkoutSteps.slice(0, 3)} // Don't show confirmation step in stepper
              currentStep={currentStep}
              onStepClick={handleStepClick}
            />
          </div>
        )}

        {/* Step Content */}
        <div className="max-w-4xl mx-auto">{renderStepContent()}</div>
      </div>

      <Footer />
    </div>
  );
}
