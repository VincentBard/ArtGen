import { useParams } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";

export default function ProductDetail() {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container py-12">
        <Card>
          <CardContent className="p-12 text-center">
            <h1 className="font-display text-3xl font-bold mb-4">
              Product Detail Page
            </h1>
            <p className="text-muted-foreground mb-4">Artwork ID: {id}</p>
            <p className="text-muted-foreground">
              This page will display detailed information about the selected
              artwork, including high-resolution images, artist information,
              dimensions, pricing, and purchase options.
            </p>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
}
