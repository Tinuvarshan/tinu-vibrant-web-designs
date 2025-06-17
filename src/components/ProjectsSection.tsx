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
    <section id="projects" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore my latest work showcasing modern web development techniques and creative solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="card-hover border-border/50 group">
              <CardHeader>
                <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div>
                  <h4 className="font-semibold mb-3 text-primary">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm border border-border/50"
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
                      <div key={featureIndex} className="text-sm text-muted-foreground">
                        <span className="text-primary">✓</span> {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <Button 
                    className="flex-1 glow-effect"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  
                  <Button variant="outline" size="icon">
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Want to see more of my work?
          </p>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Let's Discuss Your Project
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;