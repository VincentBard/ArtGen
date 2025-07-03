import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";

export default function Checkout() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container py-12">
        <Card>
          <CardContent className="p-12 text-center">
            <h1 className="font-display text-3xl font-bold mb-4">Checkout</h1>
            <p className="text-muted-foreground">
              This page will contain a multi-step checkout process including
              customer information, shipping address, payment method, and order
              confirmation.
            </p>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
}
