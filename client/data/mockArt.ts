import { ArtPiece } from "@shared/types";

export const mockArtPieces: ArtPiece[] = [
  {
    id: "1",
    title: "Ethereal Dreams",
    artist: {
      name: "Luna Martinez",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b1e5?w=150&h=150&fit=crop&crop=face",
      bio: "Digital artist specializing in surreal landscapes and ethereal compositions.",
    },
    style: "Surrealism",
    dimensions: { width: 24, height: 36, unit: "in" },
    price: 850,
    currency: "USD",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=1200&fit=crop",
    description:
      "A mesmerizing blend of reality and fantasy, this piece explores the liminal space between dreams and consciousness.",
    medium: "Digital Print on Canvas",
    year: 2024,
    edition: { current: 3, total: 25 },
    tags: ["abstract", "dreams", "purple", "mystical"],
    inStock: true,
    featured: true,
  },
  {
    id: "2",
    title: "Neon Cityscapes",
    artist: {
      name: "Alex Chen",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      bio: "Cyberpunk artist creating futuristic urban visions.",
    },
    style: "Cyberpunk",
    dimensions: { width: 30, height: 20, unit: "in" },
    price: 1200,
    currency: "USD",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop",
    description:
      "A vibrant exploration of future cities where neon lights dance across towering structures.",
    medium: "Digital Print on Aluminum",
    year: 2024,
    tags: ["cyberpunk", "neon", "city", "futuristic"],
    inStock: true,
    featured: true,
  },
  {
    id: "3",
    title: "Organic Abstractions",
    artist: {
      name: "Maya Patel",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      bio: "Nature-inspired digital artist exploring organic forms.",
    },
    style: "Abstract",
    dimensions: { width: 18, height: 24, unit: "in" },
    price: 650,
    currency: "USD",
    image:
      "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=1000&fit=crop",
    description:
      "Flowing forms that capture the essence of natural growth and organic movement.",
    medium: "Digital Print on Paper",
    year: 2024,
    tags: ["abstract", "organic", "nature", "flowing"],
    inStock: true,
  },
  {
    id: "4",
    title: "Cosmic Meditation",
    artist: {
      name: "David Kim",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      bio: "Space and cosmos themed digital artist.",
    },
    style: "Space Art",
    dimensions: { width: 36, height: 24, unit: "in" },
    price: 950,
    currency: "USD",
    image:
      "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=800&h=600&fit=crop",
    description:
      "A contemplative journey through the cosmos, inviting viewers to explore the infinite.",
    medium: "Digital Print on Canvas",
    year: 2024,
    tags: ["space", "meditation", "cosmic", "stars"],
    inStock: true,
    featured: true,
  },
  {
    id: "5",
    title: "Urban Decay",
    artist: {
      name: "Sarah Johnson",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      bio: "Post-apocalyptic and dystopian digital artist.",
    },
    style: "Post-Apocalyptic",
    dimensions: { width: 20, height: 30, unit: "in" },
    price: 750,
    currency: "USD",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=1200&fit=crop",
    description:
      "A haunting portrayal of civilization's remnants, beauty found in destruction.",
    medium: "Digital Print on Metal",
    year: 2024,
    tags: ["dystopian", "urban", "decay", "atmospheric"],
    inStock: true,
  },
  {
    id: "6",
    title: "Botanical Dreams",
    artist: {
      name: "Emma Rodriguez",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
      bio: "Botanical and nature-inspired digital artist.",
    },
    style: "Botanical",
    dimensions: { width: 16, height: 20, unit: "in" },
    price: 480,
    currency: "USD",
    image:
      "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=800&h=1000&fit=crop",
    description:
      "Delicate floral compositions that celebrate the intricate beauty of plant life.",
    medium: "Digital Print on Paper",
    year: 2024,
    tags: ["botanical", "flowers", "nature", "delicate"],
    inStock: true,
  },
  {
    id: "7",
    title: "Geometric Harmony",
    artist: {
      name: "Michael Zhang",
      avatar:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=150&h=150&fit=crop&crop=face",
      bio: "Geometric and minimalist digital artist.",
    },
    style: "Geometric",
    dimensions: { width: 24, height: 24, unit: "in" },
    price: 580,
    currency: "USD",
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=800&fit=crop",
    description:
      "Perfect balance achieved through mathematical precision and aesthetic beauty.",
    medium: "Digital Print on Canvas",
    year: 2024,
    tags: ["geometric", "minimalist", "balance", "precision"],
    inStock: true,
  },
  {
    id: "8",
    title: "Ocean Depths",
    artist: {
      name: "Isabella Torres",
      avatar:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
      bio: "Underwater and marine life digital artist.",
    },
    style: "Marine Art",
    dimensions: { width: 32, height: 20, unit: "in" },
    price: 890,
    currency: "USD",
    image:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=500&fit=crop",
    description:
      "Dive into the mysterious depths where light dances through crystal waters.",
    medium: "Digital Print on Acrylic",
    year: 2024,
    tags: ["ocean", "underwater", "marine", "depths"],
    inStock: true,
    featured: true,
  },
];

export const featuredArtPieces = mockArtPieces.filter(
  (piece) => piece.featured,
);

export const availableStyles = [
  ...new Set(mockArtPieces.map((piece) => piece.style)),
];
export const availableMediums = [
  ...new Set(mockArtPieces.map((piece) => piece.medium)),
];
export const availableArtists = [
  ...new Set(mockArtPieces.map((piece) => piece.artist.name)),
];

export const priceRange = {
  min: Math.min(...mockArtPieces.map((piece) => piece.price)),
  max: Math.max(...mockArtPieces.map((piece) => piece.price)),
};
