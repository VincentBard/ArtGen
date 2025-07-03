import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, Search, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <div className="flex-1 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center">
              <Palette className="h-16 w-16 text-primary" />
            </div>
            <h1 className="font-display text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              404
            </h1>
            <h2 className="font-display text-2xl font-semibold mb-2">
              Artwork Not Found
            </h2>
            <p className="text-muted-foreground mb-8">
              Oops! The page you're looking for seems to have vanished like a
              digital brushstroke. Let's get you back to discovering amazing
              art.
            </p>
          </div>

          <div className="space-y-4">
            <Button asChild size="lg" className="w-full">
              <Link to="/">
                <Home className="mr-2 h-4 w-4" />
                Return Home
              </Link>
            </Button>

            <Button asChild variant="outline" size="lg" className="w-full">
              <Link to="/gallery">
                <Search className="mr-2 h-4 w-4" />
                Browse Gallery
              </Link>
            </Button>
          </div>

          <div className="mt-8 text-sm text-muted-foreground">
            <p>
              Lost? Try our{" "}
              <Link to="/gallery" className="text-primary hover:underline">
                art gallery
              </Link>{" "}
              or{" "}
              <Link to="/artists" className="text-primary hover:underline">
                meet our artists
              </Link>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NotFound;
