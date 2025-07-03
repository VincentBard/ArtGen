import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";

export default function Artists() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container py-12">
        <Card>
          <CardContent className="p-12 text-center">
            <h1 className="font-display text-3xl font-bold mb-4">Artists</h1>
            <p className="text-muted-foreground">
              This page will showcase our featured digital artists, their
              profiles, portfolios, and available artworks.
            </p>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
}
