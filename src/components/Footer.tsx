import { Heart, Code } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card/30 border-t border-border/50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <p className="text-muted-foreground text-sm flex items-center">
              Made with <Heart className="w-4 h-4 mx-1 text-primary" /> and{" "}
              <Code className="w-4 h-4 mx-1 text-primary" /> by Tinuvarshan
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Tinuvarshan. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Crafted with human creativity and expertise
            </p>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-border/30">
          <div className="text-center">
            <p className="text-xs text-muted-foreground">
              This website was designed and developed entirely by human hands, with attention to detail and passion for web development.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;