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
      "https://sdmntprnorthcentralus.oaiusercontent.com/files/00000000-ee50-622f-9f95-d1c615d0d54e/raw?se=2025-07-04T01%3A55%3A04Z&sp=r&sv=2024-08-04&sr=b&scid=e5a39bbc-0499-529c-99de-59b738f9edcb&skoid=add8ee7d-5fc7-451e-b06e-a82b2276cf62&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-07-03T14%3A53%3A11Z&ske=2025-07-04T14%3A53%3A11Z&sks=b&skv=2024-08-04&sig=wLmFo4KBwJL%2BLGGko2pgvmBYfwTnLd8rh4JLasJSMG8%3D",
    description:
      "A mesmerizing blend of reality and fantasy, this piece explores the liminal space between dreams and consciousness.",
    medium: "Digital Print on Canvas",
    year: 2024,
    tags: ["abstract", "dreams", "purple", "mystical"],
    inStock: true,
    featured: true,
    collections: ["Digital Dreams"],
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
      "client/data/NeonCityscapes.jpg",
    description:
      "A vibrant exploration of future cities where neon lights dance across towering structures.",
    medium: "Digital Print on Aluminum",
    year: 2024,
    tags: ["cyberpunk", "neon", "city", "futuristic"],
    inStock: true,
    featured: true,
    collections: ["Neon Futures"],
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
    collections: ["Digital Dreams", "Nature's Algorithms"],
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
    collections: ["Cosmic Wonders"],
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
      "client/data/UrbanDecay.jpg",
    description:
      "A haunting portrayal of civilization's remnants, beauty found in destruction.",
    medium: "Digital Print on Metal",
    year: 2024,
    tags: ["dystopian", "urban", "decay", "atmospheric"],
    inStock: true,
    collections: [],
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
    collections: ["Digital Dreams", "Nature's Algorithms"],
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
    collections: ["Minimal Geometries"],
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
    collections: ["Cosmic Wonders", "Aquatic Dreams"],
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
    collections: ["Digital Dreams"],
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
      "client/data/UrbanSolitude.jpg",
    description:
      "A lone figure walks through a rain-soaked alley, the city humming quietly in the background.",
    medium: "Oil on Canvas",
    year: 2023,
    tags: ["city", "lonely", "moody", "blue tones"],
    inStock: true,
    featured: false,
    collections: [],
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
      "client/data/NebulaPulse.jpg",
    description:
      "Vivid hues of violet and orange dance through a swirling nebula-like form, representing cosmic energy.",
    medium: "Digital Print on Aluminum",
    year: 2024,
    tags: ["space", "vibrant", "cosmic", "digital"],
    inStock: true,
    featured: false,
    collections: ["Cosmic Wonders"],
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
      "client/data/GoldenReverie.jpg",
    description:
      "A field of golden wheat bathed in morning light, captured with expressive strokes and layered texture.",
    medium: "Acrylic and Gold Leaf on Wood",
    year: 2022,
    tags: ["nature", "sunlight", "organic", "gold"],
    inStock: true,
    featured: true,
    collections: ["Nature's Algorithms"],
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
      "client/data/Codeandchaos.jpg",
    description:
      "A chaotic yet harmonious visual symphony created with algorithmic randomness.",
    medium: "Archival Digital Print",
    year: 2025,
    tags: ["tech", "algorithm", "abstract", "AI"],
    inStock: true,
    featured: false,
    collections: [],
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
      "client/data/Throughthefog.jpg",
    description:
      "Soft muted grays and silhouettes evoke the feeling of wandering through morning mist.",
    medium: "Oil on Linen",
    year: 2023,
    tags: ["mist", "gray", "quiet", "city"],
    inStock: false,
    featured: false,
    collections: [],
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
    tags: ["ocean", "waves", "blue", "calm"],
    inStock: true,
    featured: false,
    collections: ["Aquatic Dreams"],
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
      "https://sdmntprnorthcentralus.oaiusercontent.com/files/00000000-81c4-622f-82d5-58bdeb59caed/raw?se=2025-07-04T01%3A52%3A47Z&sp=r&sv=2024-08-04&sr=b&scid=529d8a12-b972-57ba-a1a4-db18d453ed57&skoid=add8ee7d-5fc7-451e-b06e-a82b2276cf62&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-07-04T00%3A50%3A13Z&ske=2025-07-05T00%3A50%3A13Z&sks=b&skv=2024-08-04&sig=iKIynp0pCYmKvSwMBhI8RRNMefPAeJgn7M%2B8IQLVxKg%3D",
    description:
      "Vintage photographs and textures merge to reveal the fractured self beneath the surface.",
    medium: "Mixed Media on Board",
    year: 2023,
    tags: ["identity", "vintage", "cutout", "emotion"],
    inStock: true,
    featured: false,
    collections: [],
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
      "https://sdmntprcentralus.oaiusercontent.com/files/00000000-42d0-61f5-bf85-0679e7e5fdd6/raw?se=2025-07-04T01%3A47%3A19Z&sp=r&sv=2024-08-04&sr=b&scid=d7d304aa-13a7-595f-ad8c-b3d5085c258c&skoid=add8ee7d-5fc7-451e-b06e-a82b2276cf62&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-07-03T05%3A39%3A05Z&ske=2025-07-04T05%3A39%3A05Z&sks=b&skv=2024-08-04&sig=Cba9FfUpJvzO2k4e4rd5mpm6SisoALztiOGiGWZVcWw%3D",
    description:
      "Otherworldly flowers bloom against a cosmic backdrop, blending flora and stars.",
    medium: "Acrylic and Resin on Canvas",
    year: 2025,
    tags: ["floral", "cosmos", "pink", "texture"],
    inStock: true,
    featured: true,
    collections: ["Cosmic Wonders", "Nature's Algorithms"],
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
      "https://sdmntprwestcentralus.oaiusercontent.com/files/00000000-7898-61fb-bfd8-076243b64ba3/raw?se=2025-07-04T01%3A51%3A09Z&sp=r&sv=2024-08-04&sr=b&scid=529858a4-8ce8-5848-ac38-c737563e0ca0&skoid=add8ee7d-5fc7-451e-b06e-a82b2276cf62&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-07-04T00%3A50%3A17Z&ske=2025-07-05T00%3A50%3A17Z&sks=b&skv=2024-08-04&sig=Xww0HAs5Pc6RYmi6olngMUQkyRgv6BaQdl0qd20dj8k%3D",
    description:
      "Glitched lines, neon overlays, and corrupted forms represent human error in a digital world.",
    medium: "Generative Digital Print",
    year: 2024,
    tags: ["glitch", "neon", "digital", "code"],
    inStock: true,
    featured: false,
    collections: ["Neon Futures"],
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
