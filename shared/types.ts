export interface ArtPiece {
  id: string;
  title: string;
  artist: {
    name: string;
    avatar?: string;
    bio?: string;
  };
  style: string;
  dimensions: {
    width: number;
    height: number;
    unit: "cm" | "in";
  };
  price: number;
  currency: string;
  image: string;
  images?: string[];
  description: string;
  medium: string;
  year: number;
  edition?: {
    current: number;
    total: number;
  };
  tags: string[];
  inStock: boolean;
  featured?: boolean;
  collections?: string[];
}

export interface CartItem {
  artPiece: ArtPiece;
  quantity: number;
  selectedSize?: string;
}

export interface Cart {
  items: CartItem[];
  total: number;
  subtotal: number;
  tax: number;
  shipping: number;
}

export interface OrderCustomer {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
}

export interface ShippingAddress {
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

export interface PaymentMethod {
  type: "card" | "paypal" | "bank";
  cardNumber?: string;
  expiryMonth?: number;
  expiryYear?: number;
  cvv?: string;
  cardholderName?: string;
}

export interface Order {
  id: string;
  customer: OrderCustomer;
  items: CartItem[];
  shippingAddress: ShippingAddress;
  billingAddress?: ShippingAddress;
  paymentMethod: PaymentMethod;
  total: number;
  subtotal: number;
  tax: number;
  shipping: number;
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
  createdAt: Date;
  updatedAt: Date;
}

export interface FilterOptions {
  styles: string[];
  priceRange: {
    min: number;
    max: number;
  };
  mediums: string[];
  artists: string[];
  inStock?: boolean;
  featured?: boolean;
}

export interface SearchFilters {
  query?: string;
  style?: string;
  priceMin?: number;
  priceMax?: number;
  medium?: string;
  artist?: string;
  inStock?: boolean;
  featured?: boolean;
  sortBy?: "title" | "price-asc" | "price-desc" | "artist" | "newest";
}
