import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Palette, Users, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ArtCard } from "@/components/art/ArtCard";
import { featuredArtPieces, availableStyles } from "@/data/mockArt";

export default function Index() {
  const heroStats = [
    { label: "AI Artworks", value: "10,000+" },
    { label: "Digital Artists", value: "500+" },
    { label: "Happy Collectors", value: "25,000+" },
    { label: "Countries", value: "50+" },
  ];

  const features = [
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "AI-Generated Excellence",
      description:
        "Discover unique artworks created by cutting-edge AI technology and human creativity.",
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Diverse Art Styles",
      description:
        "From surrealism to cyberpunk, explore a vast range of artistic styles and mediums.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Curated by Artists",
      description:
        "Every piece is carefully selected and approved by our community of digital artists.",
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Premium Quality",
      description:
        "High-resolution prints on premium materials, shipped worldwide with care.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
        <div className="container relative py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge
                  variant="secondary"
                  className="w-fit bg-accent/10 text-accent-foreground border-accent/20"
                >
                  <Sparkles className="h-3 w-3 mr-1" />
                  New Collection Available
                </Badge>
                <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                  Where{" "}
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    AI Meets
                  </span>{" "}
                  Artistry
                </h1>
                <p className="text-xl text-muted-foreground max-w-md">
                  Discover, collect, and own stunning AI-generated artworks from
                  talented digital artists around the world.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="text-lg px-8">
                  <Link to="/gallery">
                    Explore Gallery
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg">
                  <Link to="/artists">Meet Artists</Link>
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-8">
                {heroStats.map((stat, index) => (
                  <div key={index} className="text-center lg:text-left">
                    <div className="font-display text-2xl font-bold text-primary">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=800&fit=crop"
                  alt="Featured AI Art"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-sm opacity-90">Featured Artwork</p>
                  <h3 className="font-display text-xl font-semibold">
                    Ethereal Dreams
                  </h3>
                  <p className="text-sm opacity-75">by Luna Martinez</p>
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent rounded-full opacity-20 animate-pulse" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary rounded-full opacity-15 animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Why Choose ArtGen?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're revolutionizing the art world by combining artificial
              intelligence with human creativity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 text-primary">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Artworks */}
      <section className="py-20">
        <div className="container">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Featured Artworks
              </h2>
              <p className="text-muted-foreground">
                Handpicked masterpieces from our most talented artists
              </p>
            </div>
            <Button asChild variant="outline">
              <Link to="/gallery?featured=true">
                View All Featured
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredArtPieces.slice(0, 4).map((artPiece) => (
              <ArtCard
                key={artPiece.id}
                artPiece={artPiece}
                className="animate-fade-in"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Art Styles Section */}
      <section className="py-20 bg-gallery-bg">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Explore Art Styles
            </h2>
            <p className="text-muted-foreground">
              From classical to contemporary, discover your perfect style
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {availableStyles.map((style, index) => (
              <Link
                key={style}
                to={`/gallery?style=${encodeURIComponent(style)}`}
                className="group"
              >
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                      <Palette className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-medium text-sm">{style}</h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
        <div className="container text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Collection?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of art enthusiasts who have discovered their perfect
            pieces through ArtGen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="text-lg px-8"
            >
              <Link to="/gallery">Start Browsing</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-lg border-white/20 text-white hover:bg-white/10"
            >
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
