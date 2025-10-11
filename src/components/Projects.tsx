import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import projectSegmentation from "@/assets/project-segmentation.jpg";
import projectAmazon from "@/assets/project-amazon.jpg";
import projectWeather from "@/assets/project-weather.jpg";

const projects = [
  {
    title: "Customer Segmentation",
    description:
      "Built a K-Means clustering model to segment customers by age, income, and spending behavior. Created interactive 2D/3D visualizations in Plotly with a web interface for personalized marketing insights.",
    tech: ["Python", "HTML", "CSS", "JavaScript", "Plotly", "Pandas"],
    image: projectSegmentation,
    github: "#",
    live: "#",
    date: "Sep 2025",
  },
  {
    title: "Amazon Clone",
    description:
      "Fully responsive front-end clone of Amazon with modern, reusable UI components. Implemented Add-to-Cart functionality with dynamic cart calculations. Optimized design with flexbox/grid for scalability.",
    tech: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    image: projectAmazon,
    github: "#",
    live: "#",
    date: "July 2025",
  },
  {
    title: "Climate Crusader",
    description:
      "Real-time weather prediction website using OpenWeatherMap API. Displays temperature, humidity, and precipitation for user-selected locations with a clean, responsive interface for improved UX.",
    tech: ["HTML", "CSS", "Bootstrap", "JavaScript", "API"],
    image: projectWeather,
    github: "#",
    live: "#",
    date: "May 2024",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A showcase of my recent work in web development, data science, and API integration
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 group hover:scale-105"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-xs text-muted-foreground">{project.date}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-primary/50 hover:bg-primary/10"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-primary hover:bg-primary/90"
                    asChild
                  >
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
