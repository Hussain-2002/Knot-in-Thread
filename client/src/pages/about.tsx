import { Card, CardContent } from "@/components/ui/card";
import Testimonials from "@/components/testimonials";
import Logo from "@/assets/Logo.png";

export default function About() {
  return (
    <div className="pt-20">
      <section className="py-20 bg-gradient-to-br from-warm-beige to-soft-cream yarn-texture">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
             <img 
              src={Logo}  // ✅ No quotes here!
              alt="Creator workspace with yarn and crochet tools" 
              className="rounded-xl shadow-lg w-full h-auto" 
            />

            </div>
            
            <div>
              <h1 className="font-dancing text-4xl lg:text-5xl font-bold text-warm-clay mb-6">
                About Me
              </h1>
              
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  Hello! I'm Aiman Ezzy, the heart and hands behind Knot in Thread. My journey with crochet began over 5 years ago with the Raza Mubarak of His Holinees Dr. Sayedna Muffadal Saifuddin. What started as a simple hobby has blossomed into a passionate craft that brings joy to both me and my customers.
                </p>
                
                <p>
                  Each piece I create is made with premium yarn and countless hours of love. I believe that handmade items carry a special energy – they're not just products, but pieces of art that bring warmth and personality to your life.
                </p>
                
                <p>
                  From cozy home decor to adorable toys for little ones, every stitch tells a story. I take pride in creating pieces that are not only beautiful but also durable and safe for all ages.
                </p>
              </div>
              
              <div className="mt-8 grid grid-cols-3 gap-4">
                <Card className="bg-white/80">
                  <CardContent className="p-4 text-center">
                    <h4 className="font-dancing text-xl font-semibold text-warm-clay mb-2">5+ Years</h4>
                    <p className="text-sm text-gray-600">Experience</p>
                  </CardContent>
                </Card>
                <Card className="bg-white/80">
                  <CardContent className="p-4 text-center">
                    <h4 className="font-dancing text-xl font-semibold text-warm-clay mb-2">150+</h4>
                    <p className="text-sm text-gray-600">Happy Customers</p>
                  </CardContent>
                </Card>
                <Card className="bg-white/80">
                  <CardContent className="p-4 text-center">
                    <h4 className="font-dancing text-xl font-semibold text-warm-clay mb-2">100%</h4>
                    <p className="text-sm text-gray-600">Handmade</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
          
          <Testimonials />
        </div>
      </section>
    </div>
  );
}
