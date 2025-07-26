import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Paintbrush } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import GalleryFilter from "@/components/gallery-filter";
import { galleryItems } from "@/lib/constants";

type Category = 'all' | 'toys' | 'home-decor' | 'accessories' | 'wearables';

const categoryLabels = {
  'toys': 'Toys',
  'home-decor': 'Home Decor',
  'accessories': 'Accessories',
  'wearables': 'Wearables'
};

const categoryColors = {
  'toys': 'bg-soft-lavender text-warm-clay',
  'home-decor': 'bg-soft-mint text-warm-clay',
  'accessories': 'bg-soft-peach text-warm-clay',
  'wearables': 'bg-warm-taupe text-white'
};

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="pt-20">
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="font-dancing text-4xl lg:text-5xl font-bold text-warm-clay mb-4">
              My Crochet Gallery
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Each piece is lovingly handcrafted with premium yarn and attention to detail. 
              Browse through our collection and find something special for you or your loved ones.
            </p>
          </div>
          
          <GalleryFilter 
            activeCategory={activeCategory} 
            onCategoryChange={setActiveCategory} 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <Card key={item.id} className="gallery-item bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="relative">
                  <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    className="w-full h-64 object-cover" 
                  />
                  {item.featured && (
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-gradient-to-r from-soft-lavender to-soft-peach text-warm-clay border-none">
                        Featured
                      </Badge>
                    </div>
                  )}
                </div>
                <CardContent className="p-6">
                  <h3 className="font-dancing text-xl font-semibold text-warm-clay mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <Badge className={categoryColors[item.category]}>
                      {categoryLabels[item.category]}
                    </Badge>
                    <Heart className="w-5 h-5 text-soft-peach" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No items found in this category.</p>
            </div>
          )}
          
          <div className="text-center mt-16">
            <h3 className="font-dancing text-2xl font-semibold text-warm-clay mb-4">
              Don't see what you're looking for?
            </h3>
            <p className="text-gray-600 mb-8">
              I love creating custom pieces! Contact me to discuss your special project.
            </p>
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-soft-lavender to-soft-peach text-warm-clay px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 border-none">
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
