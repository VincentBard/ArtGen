import { useState, useEffect, useMemo } from "react";
import { useSearchParams, Link } from "react-router-dom";
import {
  Grid,
  List,
  SlidersHorizontal,
  Search,
  ShoppingCart,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ArtCard } from "@/components/art/ArtCard";
import { FilterSidebar } from "@/components/art/FilterSidebar";
import { useCart } from "@/hooks/useCart";
import { SearchFilters } from "@shared/types";
import { mockArtPieces } from "@/data/mockArt";
import { cn } from "@/lib/utils";

export default function Gallery() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get("search") || "",
  );
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [filters, setFilters] = useState<SearchFilters>(() => {
    const initialFilters: SearchFilters = {};

    // Load filters from URL params
    if (searchParams.get("search")) {
      initialFilters.query = searchParams.get("search") || undefined;
    }
    if (searchParams.get("style")) {
      initialFilters.style = searchParams.get("style") || undefined;
    }
    if (searchParams.get("medium")) {
      initialFilters.medium = searchParams.get("medium") || undefined;
    }
    if (searchParams.get("artist")) {
      initialFilters.artist = searchParams.get("artist") || undefined;
    }
    if (searchParams.get("featured")) {
      initialFilters.featured = searchParams.get("featured") === "true";
    }
    if (searchParams.get("inStock")) {
      initialFilters.inStock = searchParams.get("inStock") === "true";
    }
    if (searchParams.get("sort")) {
      initialFilters.sortBy = searchParams.get("sort") as any;
    }

    return initialFilters;
  });

  // Update URL when filters change
  useEffect(() => {
    const params = new URLSearchParams();

    Object.entries(filters).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== "") {
        params.set(key, value.toString());
      }
    });

    setSearchParams(params);
  }, [filters, setSearchParams]);

  // Filter and sort art pieces
  const filteredArtPieces = useMemo(() => {
    let filtered = mockArtPieces.filter((piece) => {
      // Search query
      if (
        filters.query &&
        !piece.title.toLowerCase().includes(filters.query.toLowerCase()) &&
        !piece.artist.name
          .toLowerCase()
          .includes(filters.query.toLowerCase()) &&
        !piece.description
          .toLowerCase()
          .includes(filters.query.toLowerCase()) &&
        !piece.tags.some((tag) =>
          tag.toLowerCase().includes(filters.query!.toLowerCase()),
        )
      ) {
        return false;
      }

      // Style filter
      if (filters.style && piece.style !== filters.style) {
        return false;
      }

      // Medium filter
      if (filters.medium && piece.medium !== filters.medium) {
        return false;
      }

      // Artist filter
      if (filters.artist && piece.artist.name !== filters.artist) {
        return false;
      }

      // Price range
      if (filters.priceMin && piece.price < filters.priceMin) {
        return false;
      }
      if (filters.priceMax && piece.price > filters.priceMax) {
        return false;
      }

      // In stock filter
      if (filters.inStock && !piece.inStock) {
        return false;
      }

      // Featured filter
      if (filters.featured && !piece.featured) {
        return false;
      }

      return true;
    });

    // Sort
    switch (filters.sortBy) {
      case "title":
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "price-asc":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "artist":
        filtered.sort((a, b) => a.artist.name.localeCompare(b.artist.name));
        break;
      case "newest":
        filtered.sort((a, b) => b.year - a.year);
        break;
      default:
        // Default: featured first, then by title
        filtered.sort((a, b) => {
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return a.title.localeCompare(b.title);
        });
    }

    return filtered;
  }, [filters]);

  const handleFiltersChange = (newFilters: SearchFilters) => {
    setFilters(newFilters);
  };

  const handleClearFilters = () => {
    setFilters({});
    setSearchQuery("");
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFilters({ ...filters, query: searchQuery });
  };

  const activeFilterCount = Object.keys(filters).length;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">
            Art Gallery
          </h1>
          <p className="text-muted-foreground">
            Discover amazing AI-generated artworks from talented digital artists
          </p>
        </div>

        {/* Search and Controls */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          {/* Search */}
          <form onSubmit={handleSearchSubmit} className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search artworks, artists, styles..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </form>

          {/* Sort */}
          <Select
            value={filters.sortBy || "default"}
            onValueChange={(value) =>
              setFilters({
                ...filters,
                sortBy: value === "default" ? undefined : (value as any),
              })
            }
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="default">Featured First</SelectItem>
              <SelectItem value="title">Title A-Z</SelectItem>
              <SelectItem value="price-asc">Price: Low to High</SelectItem>
              <SelectItem value="price-desc">Price: High to Low</SelectItem>
              <SelectItem value="artist">Artist A-Z</SelectItem>
              <SelectItem value="newest">Newest First</SelectItem>
            </SelectContent>
          </Select>

          {/* View Mode */}
          <div className="flex border rounded-md">
            <Button
              variant={viewMode === "grid" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("grid")}
              className="rounded-r-none"
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("list")}
              className="rounded-l-none"
            >
              <List className="h-4 w-4" />
            </Button>
          </div>

          {/* Mobile Filter Toggle */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="lg:hidden">
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                Filters
                {activeFilterCount > 0 && (
                  <Badge variant="secondary" className="ml-2">
                    {activeFilterCount}
                  </Badge>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80">
              <SheetHeader>
                <SheetTitle>Filters</SheetTitle>
                <SheetDescription>
                  Refine your search to find the perfect artwork
                </SheetDescription>
              </SheetHeader>
              <div className="mt-6">
                <FilterSidebar
                  filters={filters}
                  onFiltersChange={handleFiltersChange}
                  onClearFilters={handleClearFilters}
                  activeFilterCount={activeFilterCount}
                />
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <div className="flex gap-8">
          {/* Desktop Filter Sidebar */}
          <aside className="hidden lg:block w-80 shrink-0">
            <FilterSidebar
              filters={filters}
              onFiltersChange={handleFiltersChange}
              onClearFilters={handleClearFilters}
              activeFilterCount={activeFilterCount}
              className="sticky top-24"
            />
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Results Header */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
              <p className="text-muted-foreground">
                Showing {filteredArtPieces.length} of {mockArtPieces.length}{" "}
                artworks
              </p>

              {/* Cart Actions */}
              {getItemCount() > 0 && (
                <div className="flex items-center gap-3">
                  <div className="text-sm text-muted-foreground">
                    {getItemCount()} item{getItemCount() !== 1 ? "s" : ""} in
                    cart
                  </div>
                  <div className="flex gap-2">
                    <Button asChild variant="outline" size="sm">
                      <Link to="/cart">
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        View Cart
                      </Link>
                    </Button>
                    <Button asChild size="sm">
                      <Link to="/checkout">
                        Checkout Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              )}

              {/* Active Filters */}
              {activeFilterCount > 0 && (
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-sm text-muted-foreground">
                    Active filters:
                  </span>
                  {filters.query && (
                    <Badge variant="secondary">Search: {filters.query}</Badge>
                  )}
                  {filters.style && (
                    <Badge variant="secondary">Style: {filters.style}</Badge>
                  )}
                  {filters.medium && (
                    <Badge variant="secondary">Medium: {filters.medium}</Badge>
                  )}
                  {filters.artist && (
                    <Badge variant="secondary">Artist: {filters.artist}</Badge>
                  )}
                  {filters.featured && (
                    <Badge variant="secondary">Featured</Badge>
                  )}
                  {filters.inStock && (
                    <Badge variant="secondary">In Stock</Badge>
                  )}
                </div>
              )}
            </div>

            {/* Art Grid */}
            {filteredArtPieces.length > 0 ? (
              <div
                className={cn(
                  "grid gap-6",
                  viewMode === "grid"
                    ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                    : "grid-cols-1",
                )}
              >
                {filteredArtPieces.map((artPiece, index) => (
                  <ArtCard
                    key={artPiece.id}
                    artPiece={artPiece}
                    className={cn(
                      "animate-fade-in",
                      viewMode === "list" && "flex-row",
                    )}
                    style={{
                      animationDelay: `${index * 0.1}s`,
                    }}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-24 h-24 mx-auto mb-4 bg-muted rounded-full flex items-center justify-center">
                  <Search className="h-12 w-12 text-muted-foreground" />
                </div>
                <h3 className="font-semibold text-lg mb-2">
                  No artworks found
                </h3>
                <p className="text-muted-foreground mb-4">
                  Try adjusting your filters or search terms
                </p>
                <Button onClick={handleClearFilters} variant="outline">
                  Clear all filters
                </Button>
              </div>
            )}
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
}
