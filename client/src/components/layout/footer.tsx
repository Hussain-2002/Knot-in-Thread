import { Link } from "wouter";
import {
  Instagram,
  Facebook,
  BookmarkPlus as Pinterest,
  Phone,
  MessageSquare,
  MessageCircleMore as WhatsApp,
} from "lucide-react";
import { PHONE_NUMBER, WHATSAPP_MESSAGE } from "@/lib/constants";
import Logo from "@/assets/Logo.png"; // Make sure this path is correct

export default function Footer() {
  const whatsappUrl = `https://wa.me/918965095353?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
  
  return (
    <footer className="bg-warm-clay text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center bg-white shadow-md">
                <img
                  src={Logo}
                  alt="Knot in Thread Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-dancing text-2xl font-bold">Knot in Thread</h3>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Handcrafted with love, every piece tells a story. Creating beautiful crochet treasures 
              that bring warmth and joy to your life.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-dancing text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-white/80 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/gallery" className="text-white/80 hover:text-white transition-colors">Gallery</Link></li>
              <li><Link href="/about" className="text-white/80 hover:text-white transition-colors">About</Link></li>
              <li><Link href="/contact" className="text-white/80 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-dancing text-xl font-semibold mb-4">Connect With Me</h4>
            <div className="flex space-x-3 mb-4">
              {/* Instagram Link - Updated with your Instagram profile */}
              <a 
                href="https://www.instagram.com/knot_in_thread/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                title="Follow us on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              {/* Facebook Link - Update with your actual Facebook URL */}
              {/* <a 
                href="#" 
                className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                title="Follow us on Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              {/* Pinterest Link - Update with your actual Pinterest URL */}
              {/* <a 
                href="#" 
                className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                title="Follow us on Pinterest"
              >
                <Pinterest className="w-4 h-4" />
              </a> */}
              {/* WhatsApp Link */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                title="Chat on WhatsApp"
              >
                <WhatsApp className="w-4 h-4" />
              </a>
            </div>
            <p className="text-white/60 text-xs">
              © 2024 Knot in Thread. Made with ❤️ and lots of yarn.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}