import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Images, MessageCircle, Paintbrush } from "lucide-react";
import { PHONE_NUMBER, WHATSAPP_MESSAGE } from "@/lib/constants";

export default function Home() {
  const whatsappUrl = `https://wa.me/${PHONE_NUMBER.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Beautiful Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-orange-50 to-green-50">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-100/30 to-purple-100/30"></div>
          <div className="absolute top-20 left-10 w-32 h-32 bg-orange-200/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-200/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-green-200/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-xl border border-orange-100">
                <div className="flex space-x-2 mr-3">
                  <div className="w-3 h-3 bg-gradient-to-r from-orange-300 to-purple-300 rounded-full animate-bounce"></div>
                  <div className="w-3 h-3 bg-gradient-to-r from-purple-300 to-green-300 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  <div className="w-3 h-3 bg-gradient-to-r from-green-300 to-orange-300 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
                </div>
                <span className="text-gray-700 font-semibold tracking-wide">✨ Handmade with Love</span>
              </div>
              
              {/* Main Heading */}
              <div>
                <h1 className="font-dancing text-6xl lg:text-8xl font-bold leading-tight mb-4">
                  <span className="bg-gradient-to-r from-orange-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
                    Woven with love,
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                    every knot tells a story
                  </span>
                </h1>
              </div>
              
              {/* Description */}
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                Welcome to <span className="font-bold text-yellow-700">Knot in Thread</span>, where each stitch carries passion and every creation tells a unique story. 
                Discover our collection of handmade crochet treasures, crafted with love and attention to detail.
              </p>
              
              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start pt-4">
                <Link href="/gallery">
                  <Button className="group bg-gradient-to-r from-orange-400 to-yellow-500 hover:from-orange-500 hover:to-yellow-600 text-white px-10 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 hover:scale-110 border-none transform hover:-translate-y-1">
                    <Images className="mr-3 h-5 w-5 group-hover:rotate-12 transition-transform" />
                    View My Work
                  </Button>
                </Link>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="group bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-10 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-green-500/25 transition-all duration-300 hover:scale-110 transform hover:-translate-y-1">
                    <MessageCircle className="mr-3 h-5 w-5 group-hover:rotate-12 transition-transform" />
                    Chat on WhatsApp
                  </Button>
                </a>
              </div>
            </div>
            
            {/* Image Gallery */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="group relative overflow-hidden rounded-3xl shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-500 hover:scale-105">
                    <img 
                      src="@assets/IMG-9.png_1753511160598.jpg" 
                      alt="Amigurumi teddy bears" 
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="font-bold">Amigurumi Teddy Bears</p>
                    </div>
                  </div>
                  <div className="group relative overflow-hidden rounded-3xl shadow-2xl transform -rotate-2 hover:rotate-0 transition-all duration-500 hover:scale-105">
                    <img 
                      src="@assets/IMG-3.png_1753511160591.jpg" 
                      alt="Colorful hair bows" 
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="font-bold">Hair Bow Collection</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6 pt-12">
                  <div className="group relative overflow-hidden rounded-3xl shadow-2xl transform rotate-2 hover:rotate-0 transition-all duration-500 hover:scale-105">
                    <img 
                      src="@assets/IMG-4.png_1753511160592.jpg" 
                      alt="Tulip bouquet gift set" 
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="font-bold">Tulip Bouquets</p>
                    </div>
                  </div>
                  <div className="group relative overflow-hidden rounded-3xl shadow-2xl transform -rotate-1 hover:rotate-0 transition-all duration-500 hover:scale-105">
                    <img 
                      src="@assets/IMG-2.png_1753511160590.jpg" 
                      alt="Designer handbag collection" 
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="font-bold">Designer Handbags</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating decorative elements */}
              <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-r from-orange-300 to-yellow-300 rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-green-300 to-orange-300 rounded-full opacity-60 animate-pulse" style={{animationDelay: '1s'}}></div>
              <div className="absolute top-1/3 -right-6 w-8 h-8 bg-gradient-to-r from-yellow-300 to-green-300 rounded-full opacity-60 animate-pulse" style={{animationDelay: '2s'}}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Preview */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <span className="px-4 py-2 bg-gradient-to-r from-orange-100 to-yellow-100 text-yellow-700 rounded-full text-sm font-semibold tracking-wide uppercase">
                ✨ Featured Creations
              </span>
            </div>
            <h2 className="font-dancing text-5xl lg:text-6xl font-bold bg-gradient-to-r from-yellow-700 to-orange-700 bg-clip-text text-transparent mb-6">
              Most Loved Handcrafted Pieces
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Each piece tells its own unique story, crafted with premium materials and endless love
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10 mb-16">
            {/* Card 1 */}
            <div className="group relative bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-500 hover:shadow-pink-500/20">
              <div className="absolute top-4 right-4 z-20">
                <span className="bg-gradient-to-r from-orange-400 to-yellow-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                  BESTSELLER
                </span>
              </div>
              <div className="relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400" 
                  alt="Amigurumi Friends" 
                  className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              </div>
              <div className="p-8">
                <h3 className="font-dancing text-2xl font-bold text-gray-800 mb-3">Amigurumi Friends</h3>
                <p className="text-gray-600 leading-relaxed mb-4">Adorable crocheted animals perfect for children and collectors. Each piece is uniquely designed with love.</p>
                <div className="flex items-center justify-between">
                  <span className="text-orange-600 font-semibold">Toys Collection</span>
                  <div className="flex text-yellow-400">
                    ★★★★★
                  </div>
                </div>
              </div>
            </div>
            
            {/* Card 2 */}
            <div className="group relative bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-500 hover:shadow-purple-500/20">
              <div className="absolute top-4 right-4 z-20">
                <span className="bg-gradient-to-r from-purple-400 to-green-400 text-white px-3 py-1 rounded-full text-xs font-bold">
                  FEATURED
                </span>
              </div>
              <div className="relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400" 
                  alt="Throw Pillows" 
                  className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              </div>
              <div className="p-8">
                <h3 className="font-dancing text-2xl font-bold text-gray-800 mb-3">Cozy Throw Pillows</h3>
                <p className="text-gray-600 leading-relaxed mb-4">Transform your living space with these luxurious, handcrafted cushions in beautiful patterns.</p>
                <div className="flex items-center justify-between">
                  <span className="text-green-600 font-semibold">Home Decor</span>
                  <div className="flex text-yellow-400">
                    ★★★★★
                  </div>
                </div>
              </div>
            </div>
            
            {/* Card 3 */}
            <div className="group relative bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-500 hover:shadow-blue-500/20">
              <div className="absolute top-4 right-4 z-20">
                <span className="bg-gradient-to-r from-green-400 to-yellow-400 text-white px-3 py-1 rounded-full text-xs font-bold">
                  TRENDING
                </span>
              </div>
              <div className="relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400" 
                  alt="Handbag Collection" 
                  className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              </div>
              <div className="p-8">
                <h3 className="font-dancing text-2xl font-bold text-gray-800 mb-3">Designer Handbags</h3>
                <p className="text-gray-600 leading-relaxed mb-4">Stylish and functional crocheted bags perfect for everyday use and special occasions.</p>
                <div className="flex items-center justify-between">
                  <span className="text-yellow-600 font-semibold">Accessories</span>
                  <div className="flex text-yellow-400">
                    ★★★★★
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Link href="/gallery">
              <Button className="group bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white px-12 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-orange-500/30 transition-all duration-300 hover:scale-110 border-none transform hover:-translate-y-2">
                <Images className="mr-3 h-5 w-5 group-hover:rotate-12 transition-transform" />
                Explore Full Gallery
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-24 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-yellow-50 to-green-100">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-200/20 to-yellow-200/20"></div>
          <div className="absolute top-10 left-20 w-64 h-64 bg-orange-300/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-20 w-80 h-80 bg-yellow-300/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-green-300/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '3s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block mb-8">
              <span className="px-6 py-3 bg-white/90 backdrop-blur-sm text-yellow-700 rounded-full text-sm font-bold tracking-wide uppercase shadow-lg border border-yellow-100">
                🎨 Custom Creations
              </span>
            </div>
            
            <h2 className="font-dancing text-5xl lg:text-7xl font-bold leading-tight mb-8">
              <span className="bg-gradient-to-r from-yellow-700 via-orange-600 to-green-600 bg-clip-text text-transparent">
                Ready to Create Something
              </span>
              <br />
              <span className="bg-gradient-to-r from-orange-700 to-yellow-700 bg-clip-text text-transparent">
                Absolutely Special?
              </span>
            </h2>
            
            <p className="text-xl text-gray-700 leading-relaxed mb-12 max-w-3xl mx-auto">
              Whether you have a specific vision in mind or need inspiration for a custom piece, 
              I'd love to bring your <span className="font-bold text-yellow-700">crochet dreams to life</span>. 
              Let's create something magical together!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/contact">
                <Button className="group bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white px-12 py-5 rounded-full font-bold text-xl shadow-2xl hover:shadow-orange-500/30 transition-all duration-300 hover:scale-110 border-none transform hover:-translate-y-2">
                  <Paintbrush className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform" />
                  Start Your Custom Order
                </Button>
              </Link>
              
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <Button className="group bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-12 py-5 rounded-full font-bold text-xl shadow-2xl hover:shadow-green-500/30 transition-all duration-300 hover:scale-110 transform hover:-translate-y-2">
                  <MessageCircle className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform" />
                  Quick Chat
                </Button>
              </a>
            </div>
            
            <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/50">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🧶</span>
                </div>
                <h3 className="font-dancing text-xl font-bold text-gray-800 mb-2">Premium Quality</h3>
                <p className="text-gray-600 text-sm">Only the finest yarns and materials for lasting beauty</p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/50">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">💖</span>
                </div>
                <h3 className="font-dancing text-xl font-bold text-gray-800 mb-2">Made with Love</h3>
                <p className="text-gray-600 text-sm">Every stitch crafted with passion and attention to detail</p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/50">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">✨</span>
                </div>
                <h3 className="font-dancing text-xl font-bold text-gray-800 mb-2">Unique Designs</h3>
                <p className="text-gray-600 text-sm">Custom pieces tailored to your personal style</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
