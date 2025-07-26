import { Button } from "@/components/ui/button";

type Category = 'all' | 'toys' | 'home-decor' | 'accessories' | 'wearables';

interface GalleryFilterProps {
  activeCategory: Category;
  onCategoryChange: (category: Category) => void;
}

const categories = [
  { value: 'all', label: 'All Works', color: 'from-purple-500 to-pink-500', emoji: '🎨' },
  { value: 'toys', label: 'Toys', color: 'from-pink-500 to-purple-500', emoji: '🧸' },
  { value: 'home-decor', label: 'Home Decor', color: 'from-blue-500 to-purple-500', emoji: '🏠' },
  { value: 'accessories', label: 'Accessories', color: 'from-purple-500 to-blue-500', emoji: '👜' },
  { value: 'wearables', label: 'Wearables', color: 'from-pink-500 to-blue-500', emoji: '👕' },
] as const;

export default function GalleryFilter({ activeCategory, onCategoryChange }: GalleryFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-16">
      {categories.map((category) => (
        <Button
          key={category.value}
          onClick={() => onCategoryChange(category.value as Category)}
          variant="ghost"
          className={`group px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
            activeCategory === category.value
              ? `bg-gradient-to-r ${category.color} text-white shadow-2xl shadow-purple-500/30 border-none`
              : 'bg-white/80 backdrop-blur-sm border-2 border-purple-100 text-gray-700 hover:bg-purple-50 hover:border-purple-200 shadow-lg'
          }`}
        >
          <span className="mr-2 text-xl group-hover:animate-bounce">{category.emoji}</span>
          {category.label}
        </Button>
      ))}
    </div>
  );
}
