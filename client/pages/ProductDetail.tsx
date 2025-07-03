import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Heart,
  Share2,
  Download,
  Info,
  Ruler,
  Palette,
  User,
  Calendar,
  Award,
  ShoppingCart,
  Plus,
  Minus,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ArtCard } from "@/components/art/ArtCard";
import { FloatingCart } from "@/components/cart/FloatingCart";
import { useCart } from "@/hooks/useCart";
import { mockArtPieces } from "@/data/mockArt";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, getItemQuantity } = useCart();
  const { toast } = useToast();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("original");

  // Find the artwork
  const artwork = mockArtPieces.find((piece) => piece.id === id);

  // Get related artworks
  const relatedArtworks = mockArtPieces
    .filter(
      (piece) =>
        piece.id !== id &&
        (piece.style === artwork?.style ||
          piece.artist.name === artwork?.artist.name),
    )
    .slice(0, 4);

  useEffect(() => {
    if (!artwork) {
      navigate("/404");
    }
  }, [artwork, navigate]);

  if (!artwork) {
    return null;
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);
  };

  const formatDimensions = (dimensions: typeof artwork.dimensions) => {
    return `${dimensions.width}" × ${dimensions.height}" ${dimensions.unit}`;
  };

  const handleAddToCart = () => {
    addToCart(artwork, quantity);
    toast({
      title: "Added to cart!",
      description: `${quantity}x "${artwork.title}" by ${artwork.artist.name}`,
    });
  };

  const handleBuyNow = () => {
    addToCart(artwork, quantity);
    navigate("/checkout");
  };

  const sizeOptions = [
    {
      value: "original",
      label: "Original Size",
      dimensions: formatDimensions(artwork.dimensions),
      price: artwork.price,
    },
    {
      value: "large",
      label: "Large Print",
      dimensions: '32" × 40" in',
      price: artwork.price * 1.5,
    },
    {
      value: "medium",
      label: "Medium Print",
      dimensions: '20" × 24" in',
      price: artwork.price * 0.8,
    },
    {
      value: "small",
      label: "Small Print",
      dimensions: '12" × 16" in',
      price: artwork.price * 0.6,
    },
  ];

  const selectedSizeOption = sizeOptions.find(
    (option) => option.value === selectedSize,
  );
  const currentPrice = selectedSizeOption?.price || artwork.price;

  // Single image display
  const images = [artwork.image];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-6 text-sm text-muted-foreground">
          <Link
            to="/gallery"
            className="hover:text-foreground transition-colors"
          >
            Gallery
          </Link>
          <span>/</span>
          <Link
            to={`/gallery?style=${encodeURIComponent(artwork.style)}`}
            className="hover:text-foreground transition-colors"
          >
            {artwork.style}
          </Link>
          <span>/</span>
          <span className="text-foreground">{artwork.title}</span>
        </div>

        {/* Back Button */}
        <Button variant="ghost" onClick={() => navigate(-1)} className="mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-[3/4] relative overflow-hidden rounded-2xl bg-muted">
              <img
                src={images[selectedImage]}
                alt={artwork.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />

              {/* Image Overlay Info */}
              <div className="absolute top-4 left-4 flex gap-2">
                {artwork.featured && (
                  <Badge
                    variant="default"
                    className="bg-accent text-accent-foreground"
                  >
                    Featured
                  </Badge>
                )}
                {artwork.edition && (
                  <Badge variant="secondary">
                    Edition {artwork.edition.current}/{artwork.edition.total}
                  </Badge>
                )}
              </div>

              {/* Zoom Indicator */}
              <div className="absolute bottom-4 right-4 bg-black/50 text-white px-2 py-1 rounded text-xs">
                Click to zoom
              </div>
            </div>

            {/* Single image - no thumbnails needed */}
          </div>

          {/* Product Information */}
          <div className="space-y-6">
            {/* Title and Artist */}
            <div>
              <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">
                {artwork.title}
              </h1>
              <Link
                to={`/gallery?artist=${encodeURIComponent(artwork.artist.name)}`}
                className="flex items-center gap-3 hover:opacity-80 transition-opacity"
              >
                <Avatar className="w-8 h-8">
                  <AvatarImage
                    src={artwork.artist.avatar}
                    alt={artwork.artist.name}
                  />
                  <AvatarFallback>
                    {artwork.artist.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">by {artwork.artist.name}</p>
                  <p className="text-sm text-muted-foreground">
                    View artist profile
                  </p>
                </div>
              </Link>
            </div>

            {/* Price */}
            <div className="space-y-2">
              <div className="text-3xl font-bold price-text">
                {formatPrice(currentPrice)}
              </div>
              {selectedSize !== "original" && (
                <p className="text-sm text-muted-foreground">
                  Original: {formatPrice(artwork.price)}
                </p>
              )}
            </div>

            {/* Size Selection */}
            <div className="space-y-3">
              <label className="text-sm font-medium">Size & Format</label>
              <Select value={selectedSize} onValueChange={setSelectedSize}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {sizeOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      <div className="flex justify-between items-center w-full">
                        <div>
                          <div className="font-medium">{option.label}</div>
                          <div className="text-xs text-muted-foreground">
                            {option.dimensions}
                          </div>
                        </div>
                        <div className="ml-4 font-medium">
                          {formatPrice(option.price)}
                        </div>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Quantity */}
            <div className="space-y-3">
              <label className="text-sm font-medium">Quantity</label>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.min(5, quantity + 1))}
                  disabled={quantity >= 5}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button
                onClick={handleBuyNow}
                size="lg"
                className="w-full"
                disabled={!artwork.inStock}
              >
                Buy Now - {formatPrice(currentPrice * quantity)}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <Button
                onClick={handleAddToCart}
                variant="outline"
                size="lg"
                className="w-full"
                disabled={!artwork.inStock}
              >
                <ShoppingCart className="mr-2 h-4 w-4" />
                {getItemQuantity(artwork.id) > 0
                  ? `In Cart (${getItemQuantity(artwork.id)})`
                  : "Add to Cart"}
              </Button>

              <div className="flex gap-2">
                <Button variant="ghost" size="lg" className="flex-1">
                  <Heart className="mr-2 h-4 w-4" />
                  Save
                </Button>
                <Button variant="ghost" size="lg" className="flex-1">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </Button>
              </div>
            </div>

            {/* Stock Status */}
            {!artwork.inStock && (
              <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-lg">
                <p className="text-destructive font-medium">
                  Currently Out of Stock
                </p>
                <p className="text-sm text-destructive/80">
                  Join our waitlist to be notified when this artwork becomes
                  available.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Detailed Information Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="artist">Artist</TabsTrigger>
              <TabsTrigger value="shipping">Shipping</TabsTrigger>
            </TabsList>

            <TabsContent value="description" className="mt-6">
              <Card>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {artwork.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {artwork.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="details" className="mt-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Ruler className="h-5 w-5 text-primary" />
                        <div>
                          <p className="font-medium">Dimensions</p>
                          <p className="text-sm text-muted-foreground">
                            {formatDimensions(artwork.dimensions)}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <Palette className="h-5 w-5 text-primary" />
                        <div>
                          <p className="font-medium">Medium</p>
                          <p className="text-sm text-muted-foreground">
                            {artwork.medium}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <Calendar className="h-5 w-5 text-primary" />
                        <div>
                          <p className="font-medium">Year Created</p>
                          <p className="text-sm text-muted-foreground">
                            {artwork.year}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Award className="h-5 w-5 text-primary" />
                        <div>
                          <p className="font-medium">Style</p>
                          <p className="text-sm text-muted-foreground">
                            {artwork.style}
                          </p>
                        </div>
                      </div>

                      {artwork.edition && (
                        <div className="flex items-center gap-3">
                          <Info className="h-5 w-5 text-primary" />
                          <div>
                            <p className="font-medium">Edition</p>
                            <p className="text-sm text-muted-foreground">
                              Limited edition {artwork.edition.current} of{" "}
                              {artwork.edition.total}
                            </p>
                          </div>
                        </div>
                      )}

                      <div className="flex items-center gap-3">
                        <Download className="h-5 w-5 text-primary" />
                        <div>
                          <p className="font-medium">Format</p>
                          <p className="text-sm text-muted-foreground">
                            High-resolution digital print
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="artist" className="mt-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4 mb-4">
                    <Avatar className="w-16 h-16">
                      <AvatarImage
                        src={artwork.artist.avatar}
                        alt={artwork.artist.name}
                      />
                      <AvatarFallback>
                        {artwork.artist.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">
                        {artwork.artist.name}
                      </h3>
                      <p className="text-muted-foreground mb-3">
                        {artwork.artist.bio}
                      </p>
                      <div className="flex gap-2">
                        <Button asChild variant="outline" size="sm">
                          <Link
                            to={`/gallery?artist=${encodeURIComponent(artwork.artist.name)}`}
                          >
                            View All Works
                          </Link>
                        </Button>
                        <Button variant="ghost" size="sm">
                          Follow Artist
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="shipping" className="mt-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Shipping Information</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Free shipping on orders over $500</li>
                        <li>• Standard shipping: 5-7 business days</li>
                        <li>• Express shipping: 2-3 business days</li>
                        <li>• International shipping available</li>
                      </ul>
                    </div>
                    <Separator />
                    <div>
                      <h4 className="font-medium mb-2">Return Policy</h4>
                      <p className="text-sm text-muted-foreground">
                        30-day return policy. Items must be returned in original
                        condition. Digital downloads are non-refundable.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Related Artworks */}
        {relatedArtworks.length > 0 && (
          <div className="mt-16">
            <div className="mb-8">
              <h2 className="font-display text-2xl font-bold mb-2">
                You Might Also Like
              </h2>
              <p className="text-muted-foreground">
                More artworks from {artwork.artist.name} and similar styles
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedArtworks.map((artPiece) => (
                <ArtCard key={artPiece.id} artPiece={artPiece} />
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
      <FloatingCart />
    </div>
  );
}
