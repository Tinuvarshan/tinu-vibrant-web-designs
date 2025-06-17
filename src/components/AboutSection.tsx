import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Smartphone } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm a passionate web developer dedicated to creating exceptional digital experiences. 
            Every line of code is crafted by human expertise and creativity.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="card-hover border-border/50">
            <CardContent className="p-6 text-center">
              <Code className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Clean Code</h3>
              <p className="text-muted-foreground">
                Writing maintainable, scalable code following best practices and modern standards.
              </p>
            </CardContent>
          </Card>

          <Card className="card-hover border-border/50">
            <CardContent className="p-6 text-center">
              <Palette className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Modern Design</h3>
              <p className="text-muted-foreground">
                Creating visually appealing interfaces that engage and convert users.
              </p>
            </CardContent>
          </Card>

          <Card className="card-hover border-border/50">
            <CardContent className="p-6 text-center">
              <Smartphone className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Responsive</h3>
              <p className="text-muted-foreground">
                Ensuring perfect functionality across all devices and screen sizes.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-border/50">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="animate-slide-in-left">
                  <h3 className="text-2xl font-bold mb-4">My Journey</h3>
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
                  <div className="bg-card/50 p-6 rounded-lg border border-border/50">
                    <h4 className="text-lg font-semibold mb-4 text-primary">Core Technologies</h4>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="text-sm">
                        <span className="text-primary">•</span> HTML5 & CSS3
                      </div>
                      <div className="text-sm">
                        <span className="text-primary">•</span> JavaScript ES6+
                      </div>
                      <div className="text-sm">
                        <span className="text-primary">•</span> React.js
                      </div>
                      <div className="text-sm">
                        <span className="text-primary">•</span> Responsive Design
                      </div>
                      <div className="text-sm">
                        <span className="text-primary">•</span> UI/UX Design
                      </div>
                      <div className="text-sm">
                        <span className="text-primary">•</span> Performance Optimization
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;