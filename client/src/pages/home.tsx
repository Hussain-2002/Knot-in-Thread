import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Images, MessageCircle, Paintbrush } from "lucide-react";
import { PHONE_NUMBER, WHATSAPP_MESSAGE } from "@/lib/constants";

export default function Home() {
  const whatsappUrl = `https://wa.me/${PHONE_NUMBER.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center yarn-texture knit-pattern">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center mb-6 bg-white/80 rounded-full px-6 py-2 shadow-md">
                <div className="w-3 h-3 bg-soft-lavender rounded-full mr-2 animate-float"></div>
                <div className="w-3 h-3 bg-soft-peach rounded-full mr-2 animate-float" style={{animationDelay: '0.2s'}}></div>
                <div className="w-3 h-3 bg-soft-mint rounded-full animate-float" style={{animationDelay: '0.4s'}}></div>
                <span className="ml-3 text-warm-clay font-medium">Handmade with Love</span>
              </div>
              
              <h1 className="font-dancing text-5xl lg:text-7xl font-bold text-warm-clay mb-6 leading-tight">
                Woven with love,<br />
                <span className="bg-gradient-to-r from-soft-lavender to-soft-peach bg-clip-text text-transparent">
                  every knot tells a story
                </span>
              </h1>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-xl">
                Welcome to Knot in Thread, where each stitch carries passion and every creation tells a unique story. 
                Discover our collection of handmade crochet treasures, crafted with love and attention to detail.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/gallery">
                  <Button className="bg-gradient-to-r from-soft-lavender to-soft-peach text-warm-clay px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 border-none">
                    <Images className="mr-2 h-4 w-4" />
                    View My Work
                  </Button>
                </Link>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Contact Me on WhatsApp
                  </Button>
                </a>
              </div>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://pixabay.com/get/g73aa928590130d656dde0e8a4e075a1c7e3924d42f27e998977c888a03561237d445adf02baf9587c14be334eeae5f7dca5fc15e974699033cd9d0fa51cd97e0_1280.jpg" 
                  alt="Colorful yarn balls" 
                  className="rounded-xl shadow-lg w-full h-auto animate-float" 
                />
                <img 
                  src="https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400" 
                  alt="Purple and pink yarn collection" 
                  className="rounded-xl shadow-lg w-full h-auto animate-float" 
                  style={{animationDelay: '0.5s'}}
                />
                <img 
                  src="https://pixabay.com/get/g7bf11d7d7cec8d7754bff1424357f9f5a1cb8042d9f0b123a80396a37f04f2fd78f85fd153df6f3acd7aff970096786b84745b8cc00cfcc8d59470c3d59ccedf_1280.jpg" 
                  alt="Rainbow yarn balls collection" 
                  className="rounded-xl shadow-lg w-full h-auto animate-float" 
                  style={{animationDelay: '1s'}}
                />
                <img 
                  src="https://images.unsplash.com/photo-1566041510394-cf7c8fe21800?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400" 
                  alt="Pastel yarn balls with soft lighting" 
                  className="rounded-xl shadow-lg w-full h-auto animate-float" 
                  style={{animationDelay: '1.5s'}}
                />
              </div>
              
              <div className="absolute top-4 right-4 w-6 h-6 bg-soft-mint rounded-full animate-float"></div>
              <div className="absolute bottom-8 left-8 w-4 h-4 bg-soft-peach rounded-full animate-float" style={{animationDelay: '0.8s'}}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-dancing text-4xl lg:text-5xl font-bold text-warm-clay mb-4">
              Featured Creations
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              A glimpse of our most loved handcrafted pieces, each telling its own unique story.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="gallery-item bg-white rounded-xl shadow-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400" 
                alt="Amigurumi Friends" 
                className="w-full h-64 object-cover" 
              />
              <div className="p-6">
                <h3 className="font-dancing text-xl font-semibold text-warm-clay mb-2">Amigurumi Friends</h3>
                <p className="text-gray-600 text-sm">Adorable crocheted animals perfect for children and collectors</p>
              </div>
            </div>
            
            <div className="gallery-item bg-white rounded-xl shadow-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400" 
                alt="Throw Pillows" 
                className="w-full h-64 object-cover" 
              />
              <div className="p-6">
                <h3 className="font-dancing text-xl font-semibold text-warm-clay mb-2">Throw Pillows</h3>
                <p className="text-gray-600 text-sm">Cozy cushions to brighten up any living space</p>
              </div>
            </div>
            
            <div className="gallery-item bg-white rounded-xl shadow-lg overflow-hidden">
              <img 
                src="https://pixabay.com/get/g9328c6e7dca408e492da38222ad8da8905c42ddb91288e873a21fa202fb1dde88e46a1d38d6f737cf043e5bce4957282d7e271a1a07602679e66f4d900c32b3b_1280.jpg" 
                alt="Handbag Collection" 
                className="w-full h-64 object-cover" 
              />
              <div className="p-6">
                <h3 className="font-dancing text-xl font-semibold text-warm-clay mb-2">Handbag Collection</h3>
                <p className="text-gray-600 text-sm">Stylish and functional crocheted bags for everyday use</p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Link href="/gallery">
              <Button className="bg-gradient-to-r from-soft-lavender to-soft-peach text-warm-clay px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 border-none">
                <Images className="mr-2 h-4 w-4" />
                View Full Gallery
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-warm-beige to-soft-cream yarn-texture">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-dancing text-4xl lg:text-5xl font-bold text-warm-clay mb-6">
            Ready to Create Something Special?
          </h2>
          <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
            Whether you have a specific vision in mind or need inspiration for a custom piece, 
            I'd love to bring your crochet dreams to life.
          </p>
          <Link href="/contact">
            <Button className="bg-gradient-to-r from-soft-lavender to-soft-peach text-warm-clay px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 border-none">
              <Paintbrush className="mr-2 h-4 w-4" />
              Request Custom Order
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
