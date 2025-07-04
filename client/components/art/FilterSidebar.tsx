import { useState } from "react";
import { X, Filter, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { SearchFilters } from "@shared/types";
import {
  availableStyles,
  availableMediums,
  availableArtists,
  priceRange,
} from "@/data/mockArt";

interface FilterSidebarProps {
  filters: SearchFilters;
  onFiltersChange: (filters: SearchFilters) => void;
  onClearFilters: () => void;
  activeFilterCount: number;
  className?: string;
}

export function FilterSidebar({
  filters,
  onFiltersChange,
  onClearFilters,
  activeFilterCount,
  className,
}: FilterSidebarProps) {
  const [priceValues, setPriceValues] = useState([
    filters.priceMin || priceRange.min,
    filters.priceMax || priceRange.max,
  ]);

  const handleStyleChange = (style: string, checked: boolean) => {
    if (checked) {
      onFiltersChange({ ...filters, style });
    } else {
      const { style: _, ...rest } = filters;
      onFiltersChange(rest);
    }
  };

  const handleMediumChange = (medium: string, checked: boolean) => {
    if (checked) {
      onFiltersChange({ ...filters, medium });
    } else {
      const { medium: _, ...rest } = filters;
      onFiltersChange(rest);
    }
  };

  const handleArtistChange = (artist: string, checked: boolean) => {
    if (checked) {
      onFiltersChange({ ...filters, artist });
    } else {
      const { artist: _, ...rest } = filters;
      onFiltersChange(rest);
    }
  };

  const handlePriceChange = (values: number[]) => {
    setPriceValues(values);
    onFiltersChange({
      ...filters,
      priceMin: values[0],
      priceMax: values[1],
    });
  };

  const handleInStockChange = (checked: boolean) => {
    if (checked) {
      onFiltersChange({ ...filters, inStock: true });
    } else {
      const { inStock: _, ...rest } = filters;
      onFiltersChange(rest);
    }
  };

  const handleFeaturedChange = (checked: boolean) => {
    if (checked) {
      onFiltersChange({ ...filters, featured: true });
    } else {
      const { featured: _, ...rest } = filters;
      onFiltersChange(rest);
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Card className={className}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg flex items-center gap-2">
            <Filter className="h-5 w-5" />
            Filters
            {activeFilterCount > 0 && (
              <Badge variant="secondary" className="ml-2">
                {activeFilterCount}
              </Badge>
            )}
          </CardTitle>
          {activeFilterCount > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onClearFilters}
              className="h-8 px-2"
            >
              <X className="h-4 w-4 mr-1" />
              Clear
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Price Range */}
        <div className="space-y-3">
          <Label className="text-sm font-medium">Price Range</Label>
          <div className="px-2">
            <Slider
              value={priceValues}
              onValueChange={handlePriceChange}
              max={priceRange.max}
              min={priceRange.min}
              step={50}
              minStepsBetweenThumbs={1}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-muted-foreground mt-2">
              <span>{formatPrice(priceValues[0])}</span>
              <span>{formatPrice(priceValues[1])}</span>
            </div>
          </div>
        </div>

        <Separator />

        {/* Art Styles */}
        <Collapsible defaultOpen>
          <CollapsibleTrigger className="flex w-full items-center justify-between">
            <Label className="text-sm font-medium cursor-pointer">
              Art Styles
            </Label>
            <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200 data-[state=closed]:rotate-0 data-[state=open]:rotate-180" />
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-2 mt-3">
            {availableStyles.map((style) => (
              <div key={style} className="flex items-center space-x-2">
                <Checkbox
                  id={`style-${style}`}
                  checked={filters.style === style}
                  onCheckedChange={(checked) =>
                    handleStyleChange(style, checked as boolean)
                  }
                />
                <Label
                  htmlFor={`style-${style}`}
                  className="text-sm cursor-pointer"
                >
                  {style}
                </Label>
              </div>
            ))}
          </CollapsibleContent>
        </Collapsible>

        <Separator />

        {/* Medium */}
        <Collapsible defaultOpen>
          <CollapsibleTrigger className="flex w-full items-center justify-between">
            <Label className="text-sm font-medium cursor-pointer">Medium</Label>
            <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200 data-[state=closed]:rotate-0 data-[state=open]:rotate-180" />
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-2 mt-3">
            {availableMediums.map((medium) => (
              <div key={medium} className="flex items-center space-x-2">
                <Checkbox
                  id={`medium-${medium}`}
                  checked={filters.medium === medium}
                  onCheckedChange={(checked) =>
                    handleMediumChange(medium, checked as boolean)
                  }
                />
                <Label
                  htmlFor={`medium-${medium}`}
                  className="text-sm cursor-pointer line-clamp-2"
                >
                  {medium}
                </Label>
              </div>
            ))}
          </CollapsibleContent>
        </Collapsible>

        <Separator />

        {/* Artists */}
        <Collapsible>
          <CollapsibleTrigger className="flex w-full items-center justify-between">
            <Label className="text-sm font-medium cursor-pointer">
              Artists
            </Label>
            <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200 data-[state=closed]:rotate-0 data-[state=open]:rotate-180" />
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-2 mt-3">
            {availableArtists.map((artist) => (
              <div key={artist} className="flex items-center space-x-2">
                <Checkbox
                  id={`artist-${artist}`}
                  checked={filters.artist === artist}
                  onCheckedChange={(checked) =>
                    handleArtistChange(artist, checked as boolean)
                  }
                />
                <Label
                  htmlFor={`artist-${artist}`}
                  className="text-sm cursor-pointer"
                >
                  {artist}
                </Label>
              </div>
            ))}
          </CollapsibleContent>
        </Collapsible>

        <Separator />

        {/* Additional Filters */}
        <div className="space-y-3">
          <Label className="text-sm font-medium">Availability</Label>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="in-stock"
                checked={filters.inStock || false}
                onCheckedChange={handleInStockChange}
              />
              <Label htmlFor="in-stock" className="text-sm cursor-pointer">
                In Stock Only
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="featured"
                checked={filters.featured || false}
                onCheckedChange={handleFeaturedChange}
              />
              <Label htmlFor="featured" className="text-sm cursor-pointer">
                Featured Artworks
              </Label>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
