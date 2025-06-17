import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center mesh-gradient relative overflow-hidden">
      {/* Floating Orbs */}
      <div className="floating-orb w-64 h-64 bg-primary top-10 right-10" style={{ animationDelay: '0s' }}></div>
      <div className="floating-orb w-32 h-32 bg-red-500 top-1/3 left-10" style={{ animationDelay: '2s' }}></div>
      <div className="floating-orb w-48 h-48 bg-primary bottom-20 left-1/4" style={{ animationDelay: '4s' }}></div>
      <div className="floating-orb w-40 h-40 bg-red-500 bottom-40 right-1/3" style={{ animationDelay: '1s' }}></div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-red-500/5"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm{" "}
            <span className="text-shimmer">Tinuvarshan</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Full-Stack Web Developer crafting beautiful, responsive experiences with{" "}
            <span className="text-primary font-semibold">HTML, CSS, JavaScript & React</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="neon-glow hover:scale-110 transition-all duration-300"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="gradient-border hover:scale-110 transition-all duration-300"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="bg-background px-6 py-3 rounded-md">Get In Touch</span>
            </Button>
          </div>
          
        </div>
      </div>
      
      {/* Animated Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center animate-bounce">
          <ArrowDown className="text-primary mb-2" size={32} />
          <div className="w-1 h-16 bg-gradient-to-b from-primary to-transparent rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;