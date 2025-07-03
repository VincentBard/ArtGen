import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";

export default function Collections() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container py-12">
        <Card>
          <CardContent className="p-12 text-center">
            <h1 className="font-display text-3xl font-bold mb-4">
              Collections
            </h1>
            <p className="text-muted-foreground">
              This page will display curated collections of artworks organized
              by theme, style, or featured campaigns.
            </p>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
}
