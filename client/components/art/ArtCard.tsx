import { Link } from "react-router-dom";
import { Heart, ShoppingCart, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useToast } from "@/components/ui/use-toast";
import { ArtPiece } from "@shared/types";
import { useCart } from "@/hooks/useCart";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface ArtCardProps {
  artPiece: ArtPiece;
  className?: string;
}

export function ArtCard({ artPiece, className }: ArtCardProps) {
  const { addToCart, isInCart, getItemQuantity } = useCart();
  const { toast } = useToast();
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  // Track current cart state for this item
  const currentQuantity = getItemQuantity(artPiece.id);
  const itemInCart = isInCart(artPiece.id);

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    setIsAdding(true);

    // Add to cart
    addToCart(artPiece);

    // Show toast
    toast({
      title: "Added to cart!",
      description: `"${artPiece.title}" by ${artPiece.artist.name}`,
    });

    // Reset loading state after a short delay
    setTimeout(() => setIsAdding(false), 1000);
  };

  const formatPrice = (price: number, currency: string) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency,
    }).format(price);
  };

  const formatDimensions = (dimensions: ArtPiece["dimensions"]) => {
    return `${dimensions.width}" × ${dimensions.height}" ${dimensions.unit}`;
  };

  return (
    <Card
      className={cn(
        "group overflow-hidden border-gallery-border hover:shadow-lg transition-all duration-300 gallery-card",
        className,
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/artwork/${artPiece.id}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden">
          {!imageLoaded && (
            <div className="absolute inset-0 bg-muted animate-pulse" />
          )}
          <img
            src={artPiece.image}
            alt={artPiece.title}
            className={cn(
              "h-full w-full object-cover transition-transform duration-300 group-hover:scale-105",
              imageLoaded ? "opacity-100" : "opacity-0",
            )}
            onLoad={() => setImageLoaded(true)}
          />

          {/* Badges */}
          <div className="absolute top-3 left-3 flex gap-2">
            {artPiece.featured && (
              <Badge
                variant="default"
                className="bg-accent text-accent-foreground"
              >
                Featured
              </Badge>
            )}
            {artPiece.edition && (
              <Badge variant="secondary" className="text-xs">
                {artPiece.edition.current}/{artPiece.edition.total}
              </Badge>
            )}
          </div>

          {/* Quick Actions */}
          <div
            className={cn(
              "absolute top-3 right-3 flex flex-col gap-2 transition-opacity duration-200",
              isHovered ? "opacity-100" : "opacity-0",
            )}
          >
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="h-8 w-8 shadow-md"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Add to wishlist</TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="h-8 w-8 shadow-md"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                  >
                    <Info className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Quick view</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>

          {/* Add to Cart Overlay */}
          <div
            className={cn(
              "absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4 transition-opacity duration-200",
              isHovered ? "opacity-100" : "opacity-0",
            )}
          >
            <Button
              onClick={handleAddToCart}
              className="w-full"
              variant={itemInCart ? "secondary" : "default"}
              disabled={isAdding}
            >
              <ShoppingCart className="mr-2 h-4 w-4" />
              {isAdding
                ? "Adding..."
                : currentQuantity > 0
                  ? `In Cart (${currentQuantity})`
                  : "Add to Cart"}
            </Button>
          </div>
        </div>

        <CardContent className="p-4 space-y-3">
          {/* Title and Artist */}
          <div>
            <h3 className="font-medium line-clamp-1 group-hover:text-primary transition-colors">
              {artPiece.title}
            </h3>
            <p className="text-sm artist-text line-clamp-1">
              by {artPiece.artist.name}
            </p>
          </div>

          {/* Style and Dimensions */}
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span className="bg-muted px-2 py-1 rounded-md">
              {artPiece.style}
            </span>
            <span>{formatDimensions(artPiece.dimensions)}</span>
          </div>

          {/* Price */}
          <div className="flex items-center justify-between">
            <span className="font-semibold text-lg price-text">
              {formatPrice(artPiece.price, artPiece.currency)}
            </span>
            {!artPiece.inStock && (
              <Badge variant="destructive" className="text-xs">
                Sold Out
              </Badge>
            )}
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}
