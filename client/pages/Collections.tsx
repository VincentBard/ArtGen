import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Calendar,
  Users,
  Palette,
  Sparkles,
  ArrowRight,
  Clock,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ArtCard } from "@/components/art/ArtCard";
import { mockArtPieces } from "@/data/mockArt";

interface Collection {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  artworkCount: number;
  curatorName: string;
  curatorAvatar: string;
  createdDate: string;
  category: string;
  featured: boolean;
  trending: boolean;
  limited: boolean;
  artworkIds: string[];
  tags: string[];
}

const collections: Collection[] = [
  {
    id: "1",
    title: "Digital Dreams",
    description:
      "A mesmerizing collection of surreal and ethereal artworks that blur the line between dreams and reality. These pieces invite viewers into fantastical worlds.",
    coverImage:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
    artworkCount: 12,
    curatorName: "Luna Martinez",
    curatorAvatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b1e5?w=100&h=100&fit=crop&crop=face",
    createdDate: "2024-01-15",
    category: "Surrealism",
    featured: true,
    trending: true,
    limited: false,
    artworkIds: ["1", "3", "6"],
    tags: ["dreams", "ethereal", "fantasy", "surreal"],
  },
  {
    id: "2",
    title: "Neon Futures",
    description:
      "Explore the cyberpunk aesthetic with this collection of futuristic cityscapes, neon-lit streets, and technological marvels from tomorrow.",
    coverImage:
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop",
    artworkCount: 8,
    curatorName: "Alex Chen",
    curatorAvatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    createdDate: "2024-02-01",
    category: "Cyberpunk",
    featured: true,
    trending: false,
    limited: true,
    artworkIds: ["2"],
    tags: ["cyberpunk", "neon", "futuristic", "urban"],
  },
  {
    id: "3",
    title: "Cosmic Wonders",
    description:
      "Journey through the cosmos with this stellar collection featuring galaxies, nebulae, and celestial phenomena that showcase the beauty of space.",
    coverImage:
      "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=800&h=600&fit=crop",
    artworkCount: 10,
    curatorName: "David Kim",
    curatorAvatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    createdDate: "2024-01-20",
    category: "Space Art",
    featured: true,
    trending: true,
    limited: false,
    artworkIds: ["4", "8"],
    tags: ["space", "cosmic", "stars", "universe"],
  },
  {
    id: "4",
    title: "Nature's Algorithms",
    description:
      "Discover how AI interprets the natural world through organic forms, botanical studies, and abstract representations of nature's patterns.",
    coverImage:
      "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=800&h=600&fit=crop",
    artworkCount: 15,
    curatorName: "Maya Patel",
    curatorAvatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    createdDate: "2024-02-10",
    category: "Nature",
    featured: false,
    trending: true,
    limited: false,
    artworkIds: ["3", "6"],
    tags: ["nature", "organic", "botanical", "patterns"],
  },
  {
    id: "5",
    title: "Minimal Geometries",
    description:
      "Clean lines, perfect forms, and mathematical beauty come together in this collection celebrating the elegance of geometric abstraction.",
    coverImage:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop",
    artworkCount: 6,
    curatorName: "Michael Zhang",
    curatorAvatar:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&fit=crop&crop=face",
    createdDate: "2024-01-25",
    category: "Geometric",
    featured: false,
    trending: false,
    limited: true,
    artworkIds: ["7"],
    tags: ["geometric", "minimal", "abstract", "clean"],
  },
  {
    id: "6",
    title: "Aquatic Dreams",
    description:
      "Dive into the depths of imagination with this underwater-themed collection featuring marine life, ocean scenes, and aquatic fantasies.",
    coverImage:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
    artworkCount: 9,
    curatorName: "Isabella Torres",
    curatorAvatar:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face",
    createdDate: "2024-02-05",
    category: "Marine",
    featured: false,
    trending: false,
    limited: false,
    artworkIds: ["8"],
    tags: ["ocean", "marine", "underwater", "aquatic"],
  },
];

export default function Collections() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("featured");

  const categories = [
    ...new Set(collections.map((collection) => collection.category)),
  ];

  const filteredCollections = collections
    .filter((collection) => {
      const matchesSearch = collection.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesCategory =
        !selectedCategory || collection.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "featured":
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return (
            new Date(b.createdDate).getTime() -
            new Date(a.createdDate).getTime()
          );
        case "newest":
          return (
            new Date(b.createdDate).getTime() -
            new Date(a.createdDate).getTime()
          );
        case "trending":
          if (a.trending && !b.trending) return -1;
          if (!a.trending && b.trending) return 1;
          return b.artworkCount - a.artworkCount;
        case "size":
          return b.artworkCount - a.artworkCount;
        case "title":
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });

  const getCollectionArtworks = (artworkIds: string[]) => {
    return mockArtPieces.filter((piece) => artworkIds.includes(piece.id));
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Curated{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Collections
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore handpicked collections of digital artworks, thoughtfully
            curated by our artists and community. Each collection tells a unique
            story through carefully selected pieces.
          </p>
        </div>

        {/* Filters and Controls */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          <div className="flex-1">
            <Input
              placeholder="Search collections..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="max-w-md"
            />
          </div>

          <div className="flex gap-4">
            <Select
              value={selectedCategory}
              onValueChange={(value) =>
                setSelectedCategory(value === "all" ? "" : value)
              }
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[150px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured First</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="trending">Trending</SelectItem>
                <SelectItem value="size">Most Artworks</SelectItem>
                <SelectItem value="title">Title A-Z</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Featured Collections */}
        {sortBy === "featured" && (
          <div className="mb-16">
            <h2 className="font-display text-2xl font-bold mb-6">
              Featured Collections
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {collections
                .filter((c) => c.featured)
                .slice(0, 3)
                .map((collection) => {
                  const artworks = getCollectionArtworks(collection.artworkIds);
                  return (
                    <Card
                      key={collection.id}
                      className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className="relative h-48">
                        <img
                          src={collection.coverImage}
                          alt={collection.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                        <div className="absolute top-3 left-3 flex gap-2">
                          <Badge
                            variant="default"
                            className="bg-accent text-accent-foreground"
                          >
                            Featured
                          </Badge>
                          {collection.trending && (
                            <Badge variant="secondary">
                              <Sparkles className="h-3 w-3 mr-1" />
                              Trending
                            </Badge>
                          )}
                          {collection.limited && (
                            <Badge variant="destructive">Limited</Badge>
                          )}
                        </div>

                        <div className="absolute bottom-3 left-3 right-3 text-white">
                          <h3 className="font-display text-xl font-bold mb-1">
                            {collection.title}
                          </h3>
                          <p className="text-sm opacity-90 flex items-center gap-2">
                            <Palette className="h-4 w-4" />
                            {collection.artworkCount} artworks
                          </p>
                        </div>
                      </div>

                      <CardContent className="p-6">
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                          {collection.description}
                        </p>

                        <div className="flex items-center gap-3 mb-4">
                          <img
                            src={collection.curatorAvatar}
                            alt={collection.curatorName}
                            className="w-8 h-8 rounded-full"
                          />
                          <div>
                            <p className="text-sm font-medium">
                              {collection.curatorName}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              Curator
                            </p>
                          </div>
                        </div>

                        <Button asChild className="w-full">
                          <Link
                            to={`/gallery?collection=${encodeURIComponent(collection.title)}`}
                          >
                            Explore Collection
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
            </div>
          </div>
        )}

        {/* All Collections */}
        <div>
          <h2 className="font-display text-2xl font-bold mb-6">
            All Collections
          </h2>
          <div className="grid gap-6">
            {filteredCollections.map((collection) => {
              const artworks = getCollectionArtworks(collection.artworkIds);
              return (
                <Card
                  key={collection.id}
                  className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-80 h-48 lg:h-auto relative flex-shrink-0">
                      <img
                        src={collection.coverImage}
                        alt={collection.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                      <div className="absolute top-3 left-3 flex gap-2">
                        {collection.featured && (
                          <Badge
                            variant="default"
                            className="bg-accent text-accent-foreground"
                          >
                            Featured
                          </Badge>
                        )}
                        {collection.trending && (
                          <Badge variant="secondary">
                            <Sparkles className="h-3 w-3 mr-1" />
                            Trending
                          </Badge>
                        )}
                        {collection.limited && (
                          <Badge variant="destructive">Limited</Badge>
                        )}
                      </div>
                    </div>

                    <CardContent className="flex-1 p-6">
                      <div className="space-y-4">
                        <div>
                          <h3 className="font-display text-2xl font-bold mb-2">
                            {collection.title}
                          </h3>
                          <p className="text-muted-foreground">
                            {collection.description}
                          </p>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {collection.tags.map((tag) => (
                            <Badge
                              key={tag}
                              variant="outline"
                              className="text-xs"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                          <div className="flex items-center gap-2">
                            <Palette className="h-4 w-4 text-primary" />
                            <span>{collection.artworkCount} artworks</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="h-4 w-4 text-secondary" />
                            <span>{collection.curatorName}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <span>{formatDate(collection.createdDate)}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Star className="h-4 w-4 text-accent" />
                            <span>{collection.category}</span>
                          </div>
                        </div>

                        <div className="flex gap-3">
                          <Button asChild>
                            <Link
                              to={`/gallery?collection=${encodeURIComponent(collection.title)}`}
                            >
                              View Collection
                            </Link>
                          </Button>
                          <Button variant="outline">
                            <Users className="mr-2 h-4 w-4" />
                            Follow
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Preview Artworks */}
        <div className="mt-16">
          <div className="mb-8">
            <h2 className="font-display text-3xl font-bold mb-2">
              From Our Collections
            </h2>
            <p className="text-muted-foreground">
              A taste of the incredible artworks waiting to be discovered
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mockArtPieces.slice(0, 8).map((artPiece) => (
              <ArtCard key={artPiece.id} artPiece={artPiece} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
