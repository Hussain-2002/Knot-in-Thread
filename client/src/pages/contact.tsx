import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MessageCircle, Send, Info, Instagram, Facebook, BookmarkPlus as Pinterest } from "lucide-react";
import { insertContactMessageSchema } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { PHONE_NUMBER, EMAIL, WHATSAPP_MESSAGE } from "@/lib/constants";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      projectType: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: any) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      form.reset();
      setIsSubmitting(false);
    },
    onError: () => {
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via WhatsApp.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    },
  });

  const onSubmit = (data: any) => {
    setIsSubmitting(true);
    contactMutation.mutate(data);
  };

  const whatsappUrl = `https://wa.me/${PHONE_NUMBER.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <div className="pt-20">
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="font-dancing text-4xl lg:text-5xl font-bold text-warm-clay mb-4">
              Get In Touch
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Ready to bring your crochet dreams to life? I'd love to hear from you! 
              Whether you want a custom piece or have questions about existing items, let's connect.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="font-dancing text-2xl font-semibold text-warm-clay mb-8">
                Let's Connect
              </h2>
              
              <div className="space-y-6">
                {/* WhatsApp */}
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-green-50 rounded-xl hover:bg-green-100 transition-colors duration-300 group"
                >
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <MessageCircle className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-warm-clay">WhatsApp</h4>
                    <p className="text-gray-600 text-sm">Chat with me instantly</p>
                  </div>
                </a>
                
                {/* Phone */}
                <a 
                  href={`tel:${PHONE_NUMBER}`}
                  className="flex items-center p-4 bg-orange-50 rounded-xl hover:bg-orange-100 transition-colors duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-warm-clay">Phone</h4>
                    <p className="text-gray-600 text-sm">{PHONE_NUMBER}</p>
                  </div>
                </a>
                
                {/* Email */}
                <a 
                  href={`mailto:${EMAIL}`}
                  className="flex items-center p-4 bg-yellow-50 rounded-xl hover:bg-yellow-100 transition-colors duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-green-400 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-warm-clay">Email</h4>
                    <p className="text-gray-600 text-sm">{EMAIL}</p>
                  </div>
                </a>
              </div>
              
              {/* Social Media */}
              <div className="mt-8">
                <h4 className="font-dancing text-xl font-semibold text-warm-clay mb-4">Follow My Journey</h4>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-green-400 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-gradient-to-r from-green-400 to-orange-400 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300">
                    <Pinterest className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <h2 className="font-dancing text-2xl font-semibold text-warm-clay mb-8">
                Send Me a Message
              </h2>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-warm-clay">Your Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Enter your full name" 
                            className="border-2 border-yellow-200 focus:border-orange-500"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-warm-clay">Email Address</FormLabel>
                        <FormControl>
                          <Input 
                            type="email"
                            placeholder="your.email@example.com" 
                            className="border-2 border-yellow-200 focus:border-orange-500"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="projectType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-warm-clay">Project Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="border-2 border-yellow-200 focus:border-orange-500">
                              <SelectValue placeholder="Select a category" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="toys">Toys & Amigurumi</SelectItem>
                            <SelectItem value="home-decor">Home Decor</SelectItem>
                            <SelectItem value="accessories">Accessories</SelectItem>
                            <SelectItem value="wearables">Wearables</SelectItem>
                            <SelectItem value="custom">Custom Design</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-warm-clay">Message / Custom Order Details</FormLabel>
                        <FormControl>
                          <Textarea 
                            rows={5}
                            placeholder="Tell me about your project, preferred colors, size, timeline, or any special requirements..."
                            className="border-2 border-yellow-200 focus:border-orange-500 resize-vertical"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-orange-400 to-yellow-500 text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 border-none"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </Form>
              
              <Card className="mt-6 bg-green-50 border-green-200">
                <CardContent className="p-4">
                  <div className="flex items-start">
                    <Info className="text-warm-clay mt-1 mr-3 w-5 h-5" />
                    <div className="text-sm text-gray-700">
                      <strong>Custom Orders:</strong> I typically respond within 24 hours with a quote and timeline. 
                      Custom pieces usually take 1-3 weeks depending on complexity.
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
