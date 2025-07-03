import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container py-12">
        <Card>
          <CardContent className="p-12 text-center">
            <h1 className="font-display text-3xl font-bold mb-4">About Us</h1>
            <p className="text-muted-foreground">
              This page will tell the story of ArtGen, our mission to bridge AI
              technology with human creativity, and our vision for the future of
              digital art.
            </p>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
}
