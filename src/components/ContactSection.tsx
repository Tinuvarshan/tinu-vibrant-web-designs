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
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="animate-slide-in-left">
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always excited to work on new projects and collaborate with creative minds. 
                Whether you need a complete website overhaul or a fresh new design, I'm here to help.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="border-border/50 card-hover">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
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
                </CardContent>
              </Card>

              <Card className="border-border/50 card-hover">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-primary" />
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
                </CardContent>
              </Card>

              <Card className="border-border/50 card-hover">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MessageCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Response Time</h4>
                    <p className="text-muted-foreground">Usually within 24 hours</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-card/50 p-6 rounded-lg border border-border/50">
              <h4 className="font-semibold mb-3 text-primary">What I Offer:</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><span className="text-primary">•</span> Custom Website Development</li>
                <li><span className="text-primary">•</span> Responsive Design Implementation</li>
                <li><span className="text-primary">•</span> React Application Development</li>
                <li><span className="text-primary">•</span> Website Maintenance & Updates</li>
                <li><span className="text-primary">•</span> Performance Optimization</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
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
                    className="bg-input border-border/50 focus:border-primary"
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
                    className="bg-input border-border/50 focus:border-primary"
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
                    className="bg-input border-border/50 focus:border-primary resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full glow-effect hover:animate-pulse-glow"
                  size="lg"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;