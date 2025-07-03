import { useState } from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Calendar,
  Award,
  ExternalLink,
  Filter,
  Grid,
  List,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
import { mockArtPieces, availableStyles } from "@/data/mockArt";
import { cn } from "@/lib/utils";

// Generate artist data from artwork collection
const generateArtistData = () => {
  const artistMap = new Map();

  mockArtPieces.forEach((artwork, index) => {
    const artistName = artwork.artist.name;
    if (!artistMap.has(artistName)) {
      const artistArtworks = mockArtPieces.filter(
        (piece) => piece.artist.name === artistName,
      );
      const styles = [...new Set(artistArtworks.map((piece) => piece.style))];
      const featured = artistArtworks.some((piece) => piece.featured);

      artistMap.set(artistName, {
        id: `artist-${index}`,
        name: artistName,
        avatar: artwork.artist.avatar,
        bio:
          artwork.artist.bio ||
          "Talented digital artist creating unique visual experiences.",
        location: getRandomLocation(),
        joinedYear: Math.floor(Math.random() * 3) + 2022, // 2022-2024
        specialties: styles,
        artworkCount: artistArtworks.length,
        featured: featured,
        awards: getRandomAwards(),
        social: {
          website: `https://${artistName.toLowerCase().replace(" ", "")}.art`,
          instagram: `@${artistName.toLowerCase().replace(" ", "_")}_art`,
        },
        stats: {
          followers: Math.floor(Math.random() * 3000) + 1500,
          likes: Math.floor(Math.random() * 20000) + 10000,
          collections: Math.floor(Math.random() * 10) + 5,
        },
      });
    }
  });

  return Array.from(artistMap.values());
};

const getRandomLocation = () => {
  const locations = [
    "New York, USA",
    "London, UK",
    "Tokyo, Japan",
    "Paris, France",
    "Barcelona, Spain",
    "Berlin, Germany",
    "Los Angeles, USA",
    "Sydney, Australia",
  ];
  return locations[Math.floor(Math.random() * locations.length)];
};

const getRandomAwards = () => {
  const awards = [
    ["Digital Art Excellence Award 2024"],
    ["Contemporary Art Prize", "Digital Innovation Award"],
    ["Emerging Artist Award 2023"],
    ["International Digital Art Competition Winner"],
    [],
  ];
  return awards[Math.floor(Math.random() * awards.length)];
};

const artists = generateArtistData();

export default function Artists() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("featured");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // Filter and sort artists
  const filteredArtists = artists
    .filter((artist) => {
      const matchesSearch = artist.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesSpecialty =
        selectedSpecialty === "" ||
        selectedSpecialty === "all" ||
        artist.specialties.includes(selectedSpecialty);
      return matchesSearch && matchesSpecialty;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "featured":
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return b.stats.followers - a.stats.followers;
        case "popularity":
          return b.stats.followers - a.stats.followers;
        case "artworks":
          return b.artworkCount - a.artworkCount;
        case "newest":
          return b.joinedYear - a.joinedYear;
        case "name":
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

  const getArtistArtworks = (artistName: string) => {
    return mockArtPieces.filter((piece) => piece.artist.name === artistName);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Meet Our{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Artists
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the talented digital artists behind our stunning digital
            artworks. Each artist brings their unique vision and expertise to
            create extraordinary pieces.
          </p>
        </div>

        {/* Filters and Controls */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          <div className="flex-1">
            <Input
              placeholder="Search artists..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="max-w-md"
            />
          </div>

          <div className="flex gap-4">
            <Select
              value={selectedSpecialty}
              onValueChange={(value) =>
                setSelectedSpecialty(value === "all" ? "" : value)
              }
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="All Specialties" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Specialties</SelectItem>
                {availableStyles.map((style) => (
                  <SelectItem key={style} value={style}>
                    {style}
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
                <SelectItem value="popularity">Most Popular</SelectItem>
                <SelectItem value="artworks">Most Artworks</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="name">Name A-Z</SelectItem>
              </SelectContent>
            </Select>

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
          </div>
        </div>

        {/* Artists Grid */}
        <div
          className={cn(
            "grid gap-6 mb-16",
            viewMode === "grid"
              ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              : "grid-cols-1",
          )}
        >
          {filteredArtists.map((artist) => {
            const artworks = getArtistArtworks(artist.name);
            return (
              <Card
                key={artist.id}
                className={cn(
                  "overflow-hidden hover:shadow-lg transition-shadow duration-300",
                  viewMode === "list" && "flex flex-row",
                )}
              >
                <div
                  className={cn(
                    "relative",
                    viewMode === "list" ? "w-48 flex-shrink-0" : "h-48",
                  )}
                >
                  {artworks.length > 0 && (
                    <img
                      src={artworks[0].image}
                      alt={`${artist.name}'s artwork`}
                      className="w-full h-full object-cover"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  {artist.featured && (
                    <Badge
                      variant="default"
                      className="absolute top-3 left-3 bg-accent text-accent-foreground"
                    >
                      Featured Artist
                    </Badge>
                  )}

                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="flex items-center gap-3">
                      <Avatar className="w-12 h-12 border-2 border-white">
                        <AvatarImage src={artist.avatar} alt={artist.name} />
                        <AvatarFallback>
                          {artist.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="text-white">
                        <h3 className="font-semibold">{artist.name}</h3>
                        <p className="text-xs opacity-90 flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {artist.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6 flex-1">
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {artist.bio}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {artist.specialties.slice(0, 3).map((specialty) => (
                        <Badge
                          key={specialty}
                          variant="outline"
                          className="text-xs"
                        >
                          {specialty}
                        </Badge>
                      ))}
                    </div>

                    <div className="grid grid-cols-3 gap-4 text-center text-sm">
                      <div>
                        <p className="font-semibold">{artist.artworkCount}</p>
                        <p className="text-xs text-muted-foreground">
                          Artworks
                        </p>
                      </div>
                      <div>
                        <p className="font-semibold">
                          {artist.stats.followers}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Followers
                        </p>
                      </div>
                      <div>
                        <p className="font-semibold">
                          {artist.stats.collections}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Collections
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button asChild size="sm" className="flex-1">
                        <Link
                          to={`/gallery?artist=${encodeURIComponent(artist.name)}`}
                        >
                          View Artworks
                        </Link>
                      </Button>
                      <Button variant="outline" size="sm">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>

                    {artist.awards.length > 0 && (
                      <div className="pt-2 border-t">
                        <div className="flex items-center gap-2 mb-2">
                          <Award className="h-4 w-4 text-accent" />
                          <span className="text-sm font-medium">
                            Recent Awards
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          {artist.awards[0]}
                        </p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Featured Artworks Section */}
        <div>
          <div className="mb-8">
            <h2 className="font-display text-3xl font-bold mb-2">
              Latest from Our Artists
            </h2>
            <p className="text-muted-foreground">
              Discover the newest creations from our talented community
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
