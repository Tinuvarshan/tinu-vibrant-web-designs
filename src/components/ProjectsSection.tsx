import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "KBR Advertising",
      description: "A comprehensive advertising agency website showcasing creative campaigns and marketing solutions. Built with modern web technologies for optimal performance and user experience.",
      tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      liveUrl: "https://kbradvertising.com",
      features: ["Interactive Portfolio", "Contact Forms", "SEO Optimized", "Mobile Responsive"]
    },
    {
      title: "Modern Web Application",
      description: "A cutting-edge web application demonstrating advanced React concepts and modern UI/UX principles. Showcases dynamic content management and seamless user interactions.",
      tech: ["React.js", "JavaScript", "CSS3", "Modern APIs"],
      liveUrl: "https://stately-scone-6ba510.netlify.app/",
      features: ["React Components", "State Management", "API Integration", "Performance Optimized"]
    }
  ];

  return (
    <section id="projects" className="py-20 mesh-gradient relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-20 w-40 h-40 bg-red-500/5 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 left-20 w-60 h-60 bg-primary/5 rounded-full blur-xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-shimmer">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore my latest work showcasing modern web development techniques and creative solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="card-hover border-border/50 bg-card/60 backdrop-blur-sm rounded-lg border relative overflow-hidden group">
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Animated border */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-red-500 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10 p-6">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>
                
                <div className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-secondary/60 backdrop-blur-sm text-secondary-foreground rounded-full text-sm border border-border/50 hover:scale-105 transition-transform duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                          <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <Button 
                      className="flex-1 neon-glow hover:scale-105 transition-all duration-300"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                    
                    <Button variant="outline" size="icon" className="hover:scale-110 transition-transform duration-300">
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Want to see more of my work?
          </p>
          <Button 
            variant="outline" 
            size="lg"
            className="gradient-border hover:scale-110 transition-all duration-300"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="bg-background px-6 py-3 rounded-md">Let's Discuss Your Project</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;