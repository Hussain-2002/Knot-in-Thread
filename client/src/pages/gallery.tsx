import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Paintbrush } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { galleryItems } from "@/lib/constants";

type Category = "all" | "toys" | "home-decor" | "accessories" | "flower-bouquet" | "keychain";

const categoryLabels: Record<Exclude<Category, "all">, string> = {
  toys: "Toys",
  "home-decor": "Home Decor",
  accessories: "Accessories",
  "flower-bouquet": "Flower Bouquet",
  keychain: "Keychain",
};


const categories: { id: Category; label: string }[] = [
  { id: "all", label: "All Work" },
  { id: "flower-bouquet", label: "Bouquet" },
  { id: "toys", label: "Toys" },
  { id: "home-decor", label: "Home Decor" },
  { id: "accessories", label: "Accessories" },
  { id: "keychain", label: "Keychains" },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filteredItems =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const getBadgeClasses = (category: string) => {
    switch (category) {
      case "toys":
        return "bg-gradient-to-r from-orange-100 to-yellow-100 text-orange-700";
      case "home-decor":
        return "bg-gradient-to-r from-green-100 to-yellow-100 text-green-700";
      case "accessories":
        return "bg-gradient-to-r from-yellow-100 to-green-100 text-yellow-700";
      case "flower-bouquet":
        return "bg-gradient-to-r from-pink-100 to-red-100 text-pink-700";
      case "keychain":
        return "bg-gradient-to-r from-blue-100 to-teal-100 text-blue-700";
      default:
        return "bg-gradient-to-r from-orange-100 to-green-100 text-gray-700";
    }
  };

  return (
    <div className="pt-24">
      <section className="py-20 bg-gradient-to-b from-orange-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <span className="px-6 py-3 bg-gradient-to-r from-orange-100 to-yellow-100 text-yellow-700 rounded-full text-sm font-bold tracking-wide uppercase shadow-lg">
                🎨 Handcrafted Collection
              </span>
            </div>
            <h1 className="font-dancing text-5xl lg:text-7xl font-bold bg-gradient-to-r from-yellow-700 to-orange-700 bg-clip-text text-transparent mb-6">
              My Crochet Gallery
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Each piece is lovingly handcrafted with premium yarn and attention
              to detail. Browse through our collection and find something special
              for you or your loved ones.
            </p>
          </div>

          {/* INLINE FILTER BUTTONS */}
          <div className="flex justify-center gap-3 flex-wrap mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat.id
                    ? "bg-yellow-500 text-white shadow-lg"
                    : "bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* GALLERY GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredItems.map((item) => (
              <Card
                key={item.id}
                className="group bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-500 hover:shadow-orange-500/20"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

                  {item.featured && (
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-none shadow-lg animate-pulse">
                        ⭐ Featured
                      </Badge>
                    </div>
                  )}

                  <div className="absolute top-4 right-4">
                    <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Heart className="w-5 h-5 text-pink-500 group-hover:fill-current transition-all duration-300" />
                    </div>
                  </div>
                </div>

                <CardContent className="p-8">
                  <h3 className="font-dancing text-2xl font-bold text-gray-800 mb-3 group-hover:text-yellow-700 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <Badge
                      className={`px-4 py-2 rounded-full font-semibold ${getBadgeClasses(
                        item.category
                      )}`}
                    >
                      {categoryLabels[item.category as Category] || "Other"}
                    </Badge>
                    <div className="flex text-yellow-400 text-sm">★★★★★</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No items found in this category.
              </p>
            </div>
          )}

          <div className="text-center mt-16">
            <h3 className="font-dancing text-2xl font-semibold text-yellow-700 mb-4">
              Don't see what you're looking for?
            </h3>
            <p className="text-gray-600 mb-8">
              I love creating custom pieces! Contact me to discuss your special
              project.
            </p>
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-orange-400 to-yellow-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 border-none">
                <Paintbrush className="mr-2 h-4 w-4" />
                Request Custom Order
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
