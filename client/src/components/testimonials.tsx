import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { testimonials } from "@/lib/constants";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-20">
      <h3 className="font-dancing text-3xl font-bold text-warm-clay text-center mb-12">
        What My Customers Say
      </h3>
      
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <Card 
            key={testimonial.id} 
            className={`transition-all duration-500 transform ${
              index === currentIndex ? 'scale-105 shadow-xl' : 'hover:shadow-lg'
            }`}
          >
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4 italic">
                "{testimonial.content}"
              </p>
              <div className="border-t pt-4">
                <p className="font-semibold text-warm-clay">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {/* Indicator dots */}
      <div className="flex justify-center mt-8 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-warm-clay' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
