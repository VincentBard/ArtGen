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
      "https://api.deepai.org/job-view-file/1cfe9669-ded1-4f36-8507-1c0cb5259d43/outputs/output.jpg",
    description:
      "A mesmerizing blend of reality and fantasy, this piece explores the liminal space between dreams and consciousness.",
    medium: "Digital Print on Canvas",
    year: 2024,
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
      "https://api.deepai.org/job-view-file/be017e7e-f72d-404e-8bc1-a52428eb1552/outputs/output.jpg",
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
      "https://api.deepai.org/job-view-file/c876c42d-caa5-4173-bafe-0e6107cc4c91/outputs/output.jpg",
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
  {
    id: "9",
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
    tags: ["abstract", "dreams", "purple", "mystical"],
    inStock: true,
    featured: true,
  },
  {
    id: "10",
    title: "Urban Solitude",
    artist: {
      name: "Jasper Lee",
      avatar:
        "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=150&h=150&fit=crop&crop=face",
      bio: "Painter capturing moments of isolation in crowded cityscapes.",
    },
    style: "Modern Realism",
    dimensions: { width: 30, height: 40, unit: "in" },
    price: 1200,
    currency: "USD",
    image:
      "https://api.deepai.org/job-view-file/3fc6fead-d3d4-401e-9f23-64704a536a6c/outputs/output.jpgp",
    description:
      "A lone figure walks through a rain-soaked alley, the city humming quietly in the background.",
    medium: "Oil on Canvas",
    year: 2023,
    tags: ["city", "lonely", "moody", "blue tones"],
    inStock: true,
    featured: false,
  },
  {
    id: "11",
    title: "Nebula Pulse",
    artist: {
      name: "Luna Martinez",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b1e5?w=150&h=150&fit=crop&crop=face",
      bio: "Digital artist specializing in surreal landscapes and ethereal compositions.",
    },
    style: "Abstract",
    dimensions: { width: 20, height: 30, unit: "in" },
    price: 720,
    currency: "USD",
    image:
      "https://api.deepai.org/job-view-file/f98acf39-efc4-4bd5-abc2-c158106941b2/outputs/output.jpg",
    description:
      "Vivid hues of violet and orange dance through a swirling nebula-like form, representing cosmic energy.",
    medium: "Digital Print on Aluminum",
    year: 2024,
    tags: ["space", "vibrant", "cosmic", "digital"],
    inStock: true,
    featured: false,
  },
  {
    id: "12",
    title: "Golden Reverie",
    artist: {
      name: "Sofia Kim",
      avatar:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=150&h=150&fit=crop&crop=face",
      bio: "Mixed media artist with a focus on organic textures and dreamlike symbolism.",
    },
    style: "Impressionism",
    dimensions: { width: 18, height: 24, unit: "in" },
    price: 950,
    currency: "USD",
    image:
      "https://api.deepai.org/job-view-file/5462bfd5-ce0a-4189-b8ad-43213c06a5d2/outputs/output.jpg",
    description:
      "A field of golden wheat bathed in morning light, captured with expressive strokes and layered texture.",
    medium: "Acrylic and Gold Leaf on Wood",
    year: 2022,
    tags: ["nature", "sunlight", "organic", "gold"],
    inStock: true,
    featured: true,
  },
  {
    id: "13",
    title: "Code and Chaos",
    artist: {
      name: "Theo Nakamura",
      avatar:
        "https://images.unsplash.com/photo-1502767089025-6572583495ff?w=150&h=150&fit=crop&crop=face",
      bio: "Generative artist exploring the intersection of code and emotion.",
    },
    style: "Generative Art",
    dimensions: { width: 36, height: 36, unit: "in" },
    price: 1100,
    currency: "USD",
    image:
      "https://api.deepai.org/job-view-file/9f79578a-bb55-4b26-b9c4-4199f2af2a71/outputs/output.jpg",
    description:
      "A chaotic yet harmonious visual symphony created with algorithmic randomness.",
    medium: "Archival Digital Print",
    year: 2025,
    tags: ["tech", "algorithm", "abstract", "AI"],
    inStock: true,
    featured: false,
  },
  {
    id: "14",
    title: "Through the Fog",
    artist: {
      name: "Jasper Lee",
      avatar:
        "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=150&h=150&fit=crop&crop=face",
      bio: "Painter capturing moments of isolation in crowded cityscapes.",
    },
    style: "Contemporary",
    dimensions: { width: 22, height: 30, unit: "in" },
    price: 980,
    currency: "USD",
    image:
      "https://api.deepai.org/job-view-file/3ea6849b-4d18-4119-a587-590a39de5621/outputs/output.jpg",
    description:
      "Soft muted grays and silhouettes evoke the feeling of wandering through morning mist.",
    medium: "Oil on Linen",
    year: 2023,
    edition: { current: 1, total: 1 },
    tags: ["mist", "gray", "quiet", "city"],
    inStock: false,
    featured: false,
  },
  {
    id: "15",
    title: "Ocean Mind",
    artist: {
      name: "Ava Moreau",
      avatar:
        "https://images.unsplash.com/photo-1544725176-7c40e5a2c9f9?w=150&h=150&fit=crop&crop=face",
      bio: "Marine-inspired painter exploring water as metaphor and medium.",
    },
    style: "Minimalism",
    dimensions: { width: 40, height: 20, unit: "in" },
    price: 670,
    currency: "USD",
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=800&h=1200&fit=crop",
    description:
      "A minimalist expression of the subconscious mind, represented by layered waves and ripples.",
    medium: "Watercolor and Ink on Paper",
    year: 2024,
    edition: { current: 2, total: 10 },
    tags: ["ocean", "waves", "blue", "calm"],
    inStock: true,
    featured: false,
  },
  {
    id: "16",
    title: "Fragmented Identity",
    artist: {
      name: "Kairo Bennett",
      avatar:
        "https://images.unsplash.com/photo-1603415526960-f8f7cb6ef337?w=150&h=150&fit=crop&crop=face",
      bio: "Collage artist focused on themes of identity and memory.",
    },
    style: "Collage",
    dimensions: { width: 16, height: 20, unit: "in" },
    price: 430,
    currency: "USD",
    image:
      "https://api.deepai.org/job-view-file/b29d2831-6faf-488a-a08a-5fd5aa5b837d/outputs/output.jpg",
    description:
      "Vintage photographs and textures merge to reveal the fractured self beneath the surface.",
    medium: "Mixed Media on Board",
    year: 2023,
    edition: { current: 1, total: 1 },
    tags: ["identity", "vintage", "cutout", "emotion"],
    inStock: true,
    featured: false,
  },
  {
    id: "17",
    title: "Celestial Bloom",
    artist: {
      name: "Sofia Kim",
      avatar:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=150&h=150&fit=crop&crop=face",
      bio: "Mixed media artist with a focus on organic textures and dreamlike symbolism.",
    },
    style: "Fantasy Art",
    dimensions: { width: 28, height: 28, unit: "in" },
    price: 890,
    currency: "USD",
    image:
      "https://api.deepai.org/job-view-file/f73cd1bf-0e5d-4d07-9a9c-073319b5a37b/outputs/output.jpg",
    description:
      "Otherworldly flowers bloom against a cosmic backdrop, blending flora and stars.",
    medium: "Acrylic and Resin on Canvas",
    year: 2025,
    edition: { current: 2, total: 15 },
    tags: ["floral", "cosmos", "pink", "texture"],
    inStock: true,
    featured: true,
  },
  {
    id: "18",
    title: "Syntax Error",
    artist: {
      name: "Theo Nakamura",
      avatar:
        "https://images.unsplash.com/photo-1502767089025-6572583495ff?w=150&h=150&fit=crop&crop=face",
      bio: "Generative artist exploring the intersection of code and emotion.",
    },
    style: "Cyberpunk",
    dimensions: { width: 30, height: 30, unit: "in" },
    price: 990,
    currency: "USD",
    image:
      "https://api.deepai.org/job-view-file/dbac29e7-62c1-4abd-9246-26da71e5e9c5/outputs/output.jpg",
    description:
      "Glitched lines, neon overlays, and corrupted forms represent human error in a digital world.",
    medium: "Generative Digital Print",
    year: 2024,
    edition: { current: 4, total: 8 },
    tags: ["glitch", "neon", "digital", "code"],
    inStock: true,
    featured: false,
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
