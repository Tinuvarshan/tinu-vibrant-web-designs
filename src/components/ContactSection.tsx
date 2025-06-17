import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MessageCircle, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-56 h-56 bg-primary/5 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-red-500/5 rounded-full blur-xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="text-shimmer">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <h3 className="text-2xl font-bold mb-6 gradient-text">Get In Touch</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always excited to work on new projects and collaborate with creative minds. 
                Whether you need a complete website overhaul or a fresh new design, I'm here to help.
              </p>
            </div>

            <div className="space-y-6">
              <div className="border-border/50 bg-card/60 backdrop-blur-sm p-6 rounded-lg border card-hover relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 flex items-center space-x-4">
                  <div className="bg-primary/20 p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <a 
                      href="mailto:tinuvarshan.as@gmail.com" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      tinuvarshan.as@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="border-border/50 bg-card/60 backdrop-blur-sm p-6 rounded-lg border card-hover relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 flex items-center space-x-4">
                  <div className="bg-red-500/20 p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <a 
                      href="tel:8838505259" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +91 8838505259
                    </a>
                  </div>
                </div>
              </div>

              <div className="border-border/50 bg-card/60 backdrop-blur-sm p-6 rounded-lg border card-hover relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 flex items-center space-x-4">
                  <div className="bg-primary/20 p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <MessageCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Response Time</h4>
                    <p className="text-muted-foreground">Usually within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card/60 backdrop-blur-sm p-6 rounded-lg border border-border/50 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-red-500/5"></div>
              <div className="relative z-10">
                <h4 className="font-semibold mb-3 text-primary">What I Offer:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                    Custom Website Development
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                    Responsive Design Implementation
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                    React Application Development
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                    Website Maintenance & Updates
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                    Performance Optimization
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="border-border/50 bg-card/60 backdrop-blur-sm p-8 rounded-lg border relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-red-500 to-primary"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium mb-2 block">
                    Your Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-input/60 backdrop-blur-sm border-border/50 focus:border-primary hover:border-primary/50 transition-colors"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-sm font-medium mb-2 block">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-input/60 backdrop-blur-sm border-border/50 focus:border-primary hover:border-primary/50 transition-colors"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-sm font-medium mb-2 block">
                    Your Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-input/60 backdrop-blur-sm border-border/50 focus:border-primary hover:border-primary/50 transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full neon-glow hover:scale-105 transition-all duration-300"
                  size="lg"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;