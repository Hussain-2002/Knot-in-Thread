import { GalleryItem, Testimonial } from "@shared/schema";

export const PHONE_NUMBER = "+91XXXXXXXXXX";
export const EMAIL = "knotinthread@example.com";
export const WHATSAPP_MESSAGE = "Hi Knot in Thread! I'm interested in your crochet work.";

export const galleryItems: GalleryItem[] = [
  // Toys Category
  {
    id: "1",
    title: "Amigurumi Friends",
    description: "Adorable crocheted animals perfect for children and collectors",
    category: "toys",
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400",
    featured: true
  },
  {
    id: "2",
    title: "Baby Toys Collection",
    description: "Safe, soft crocheted toys perfect for little hands",
    category: "toys",
    imageUrl: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400"
  },
  {
    id: "3",
    title: "Fantasy Characters",
    description: "Magical crocheted dolls that spark imagination",
    category: "toys",
    imageUrl: "https://pixabay.com/get/g38758eccc8931ced363cefe69427556b0bf75fbbab97dc539187c51bc081b1d9f7c53de3fa09138af76da58b597a51974ac46033f27f36dc3b11887c4098a2c0_1280.jpg"
  },
  {
    id: "4",
    title: "Learning Toys",
    description: "Educational crocheted toys for early learning",
    category: "toys",
    imageUrl: "https://pixabay.com/get/ge67e9415a51f2fc5fc91e676f9b9e7f2fe3ae8d51dd12a2209c1592f588c0190994b1a4c1c7a43007a406dad9c32704353a375d2ca54c395716c6fd622768f21_1280.jpg"
  },
  // Accessories Category
  {
    id: "5",
    title: "Handbag Collection",
    description: "Stylish and functional crocheted bags for everyday use",
    category: "accessories",
    imageUrl: "https://pixabay.com/get/g9328c6e7dca408e492da38222ad8da8905c42ddb91288e873a21fa202fb1dde88e46a1d38d6f737cf043e5bce4957282d7e271a1a07602679e66f4d900c32b3b_1280.jpg"
  },
  {
    id: "6",
    title: "Cozy Scarves",
    description: "Warm and stylish scarves in beautiful patterns",
    category: "accessories",
    imageUrl: "https://pixabay.com/get/gfa54ef2d2c732c1a54b665c3215a2534ce500eafb2c4e54a47cdb51d5a860c6f2ddd8827be6a8e2553a85420a50f5ef10946fe82717c0c96cf254f8a1792c206_1280.jpg"
  },
  {
    id: "7",
    title: "Jewelry & Accessories",
    description: "Delicate crocheted jewelry for special occasions",
    category: "accessories",
    imageUrl: "https://pixabay.com/get/gfd20c56bccdd339c96b4921ca7ac0e6e64c0ae33238ac4e3f8874e91169fdf1af080cda41109ead8b30f8f488d34acada8aaff225617c05eafc4958c1fe6eaf6_1280.jpg"
  },
  {
    id: "8",
    title: "Hats & Headbands",
    description: "Trendy headwear for all seasons",
    category: "accessories",
    imageUrl: "https://pixabay.com/get/g1a1f3ed46164ef862ab2a7fccd12d6da8ae7ef3689c3797fb7b2a9b87bc2c4602302975db9918168fc67410cfdd00ee8edc8659edf0657dd4d93610cd03ff3c5_1280.jpg"
  },
  // Home Decor Category
  {
    id: "9",
    title: "Throw Pillows",
    description: "Cozy cushions to brighten up any living space",
    category: "home-decor",
    imageUrl: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400"
  },
  {
    id: "10",
    title: "Cozy Blankets",
    description: "Luxurious afghans perfect for snuggling",
    category: "home-decor",
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400"
  },
  {
    id: "11",
    title: "Wall Art",
    description: "Artistic wall hangings to enhance your decor",
    category: "home-decor",
    imageUrl: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400"
  },
  {
    id: "12",
    title: "Storage Solutions",
    description: "Beautiful and functional storage baskets",
    category: "home-decor",
    imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400"
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Emma Rodriguez",
    role: "New Mom",
    content: "The most beautiful baby blanket I've ever seen! Sarah's attention to detail is incredible. My daughter loves her new toy too.",
    rating: 5
  },
  {
    id: "2",
    name: "Michael Chen",
    role: "Fashion Enthusiast",
    content: "Custom scarf exceeded all my expectations! Perfect colors, soft texture, and arrived exactly when promised. Highly recommend!",
    rating: 5
  },
  {
    id: "3",
    name: "Lisa Thompson",
    role: "Interior Designer",
    content: "The throw pillows completely transformed our living room! Quality is amazing and the patterns are so unique. Thank you, Sarah!",
    rating: 5
  }
];
