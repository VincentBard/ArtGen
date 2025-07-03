import { useState } from "react";
import { Minus, Plus, X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CartItem as CartItemType } from "@shared/types";
import { useCart } from "@/hooks/useCart";

interface CartItemProps {
  item: CartItemType;
  className?: string;
}

export function CartItem({ item, className }: CartItemProps) {
  const { updateQuantity, removeFromCart } = useCart();
  const [isUpdating, setIsUpdating] = useState(false);

  const handleQuantityChange = async (newQuantity: number) => {
    setIsUpdating(true);
    // Simulate async operation
    await new Promise((resolve) => setTimeout(resolve, 200));
    updateQuantity(item.artPiece.id, newQuantity);
    setIsUpdating(false);
  };

  const handleRemove = () => {
    removeFromCart(item.artPiece.id);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);
  };

  const formatDimensions = (
    dimensions: CartItemType["artPiece"]["dimensions"],
  ) => {
    return `${dimensions.width}" × ${dimensions.height}" ${dimensions.unit}`;
  };

  const itemTotal = item.artPiece.price * item.quantity;

  return (
    <div className={`flex gap-4 p-6 border-b ${className}`}>
      {/* Artwork Image */}
      <div className="flex-shrink-0">
        <img
          src={item.artPiece.image}
          alt={item.artPiece.title}
          className="w-24 h-32 object-cover rounded-lg"
        />
      </div>

      {/* Item Details */}
      <div className="flex-1 space-y-3">
        <div>
          <h3 className="font-semibold text-lg">{item.artPiece.title}</h3>
          <p className="text-muted-foreground">
            by {item.artPiece.artist.name}
          </p>
          <p className="text-sm text-muted-foreground">
            {formatDimensions(item.artPiece.dimensions)}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <Badge variant="outline">{item.artPiece.style}</Badge>
          <Badge variant="outline">{item.artPiece.medium}</Badge>
          {item.artPiece.featured && (
            <Badge
              variant="default"
              className="bg-accent text-accent-foreground"
            >
              Featured
            </Badge>
          )}
        </div>

        {/* Mobile Price */}
        <div className="md:hidden">
          <p className="text-lg font-semibold price-text">
            {formatPrice(item.artPiece.price)}
          </p>
          <p className="text-sm text-muted-foreground">
            Total: {formatPrice(itemTotal)}
          </p>
        </div>
      </div>

      {/* Quantity Controls */}
      <div className="flex flex-col items-end gap-4">
        {/* Desktop Price */}
        <div className="hidden md:block text-right">
          <p className="text-lg font-semibold price-text">
            {formatPrice(item.artPiece.price)}
          </p>
          <p className="text-sm text-muted-foreground">each</p>
        </div>

        {/* Quantity Selector */}
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            onClick={() => handleQuantityChange(item.quantity - 1)}
            disabled={isUpdating || item.quantity <= 1}
          >
            <Minus className="h-3 w-3" />
          </Button>

          <Select
            value={item.quantity.toString()}
            onValueChange={(value) => handleQuantityChange(parseInt(value))}
            disabled={isUpdating}
          >
            <SelectTrigger className="w-16 h-8">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {[1, 2, 3, 4, 5].map((num) => (
                <SelectItem key={num} value={num.toString()}>
                  {num}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            onClick={() => handleQuantityChange(item.quantity + 1)}
            disabled={isUpdating || item.quantity >= 5}
          >
            <Plus className="h-3 w-3" />
          </Button>
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Heart className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-destructive hover:text-destructive"
            onClick={handleRemove}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Item Total (Desktop) */}
        <div className="hidden md:block text-right">
          <p className="font-semibold text-lg">{formatPrice(itemTotal)}</p>
          <p className="text-xs text-muted-foreground">subtotal</p>
        </div>
      </div>
    </div>
  );
}
