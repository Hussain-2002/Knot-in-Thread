import { Button } from "@/components/ui/button";

type Category = 'all' | 'toys' | 'home-decor' | 'accessories' | 'wearables';

interface GalleryFilterProps {
  activeCategory: Category;
  onCategoryChange: (category: Category) => void;
}

const categories = [
  { value: 'all', label: 'All Works', color: 'from-soft-lavender to-soft-peach' },
  { value: 'toys', label: 'Toys', color: 'from-soft-lavender to-white' },
  { value: 'home-decor', label: 'Home Decor', color: 'from-soft-mint to-white' },
  { value: 'accessories', label: 'Accessories', color: 'from-soft-peach to-white' },
  { value: 'wearables', label: 'Wearables', color: 'from-warm-taupe to-white' },
] as const;

export default function GalleryFilter({ activeCategory, onCategoryChange }: GalleryFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {categories.map((category) => (
        <Button
          key={category.value}
          onClick={() => onCategoryChange(category.value as Category)}
          variant={activeCategory === category.value ? "default" : "outline"}
          className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-md ${
            activeCategory === category.value
              ? `bg-gradient-to-r ${category.color} text-warm-clay border-none`
              : 'bg-white border-2 border-soft-lavender text-warm-clay hover:bg-soft-lavender/20'
          }`}
        >
          {category.label}
        </Button>
      ))}
    </div>
  );
}
