import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Smartphone } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-red-500/5 rounded-full blur-xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-shimmer">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm a passionate web developer dedicated to creating exceptional digital experiences. 
            Every line of code is crafted by human expertise and creativity.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="card-hover border-border/50 bg-card/60 backdrop-blur-sm p-6 rounded-lg border relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10 text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Code className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Clean Code</h3>
              <p className="text-muted-foreground">
                Writing maintainable, scalable code following best practices and modern standards.
              </p>
            </div>
          </div>

          <div className="card-hover border-border/50 bg-card/60 backdrop-blur-sm p-6 rounded-lg border relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10 text-center">
              <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Palette className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Modern Design</h3>
              <p className="text-muted-foreground">
                Creating visually appealing interfaces that engage and convert users.
              </p>
            </div>
          </div>

          <div className="card-hover border-border/50 bg-card/60 backdrop-blur-sm p-6 rounded-lg border relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10 text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Smartphone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Responsive</h3>
              <p className="text-muted-foreground">
                Ensuring perfect functionality across all devices and screen sizes.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="border-border/50 bg-card/60 backdrop-blur-sm p-8 rounded-lg border relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-red-500 to-primary"></div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="animate-fade-in">
                <h3 className="text-2xl font-bold mb-4 gradient-text">My Journey</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  With a strong foundation in web technologies, I specialize in creating 
                  dynamic, user-friendly applications that solve real-world problems. 
                  My expertise spans across front-end and back-end development.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I believe in the power of human creativity and craftsmanship in every 
                  project I undertake. Each website is thoughtfully designed and 
                  meticulously developed to exceed expectations.
                </p>
              </div>
              
              <div className="animate-fade-in">
                <div className="bg-card/80 p-6 rounded-lg border border-border/50 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-red-500/5"></div>
                  <div className="relative z-10">
                    <h4 className="text-lg font-semibold mb-4 text-primary">Core Technologies</h4>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="text-sm flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                        HTML5 & CSS3
                      </div>
                      <div className="text-sm flex items-center">
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                        JavaScript ES6+
                      </div>
                      <div className="text-sm flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                        React.js
                      </div>
                      <div className="text-sm flex items-center">
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                        Responsive Design
                      </div>
                      <div className="text-sm flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                        UI/UX Design
                      </div>
                      <div className="text-sm flex items-center">
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                        Performance Optimization
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;