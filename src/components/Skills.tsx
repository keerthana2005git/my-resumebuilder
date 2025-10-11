import { Card } from "@/components/ui/card";
import { Code, Palette, Database, Wrench, Brain } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code,
    skills: ["Java", "JavaScript", "Python", "HTML5", "CSS"],
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    title: "Frontend",
    icon: Palette,
    skills: ["HTML5", "CSS", "Bootstrap", "jQuery", "Responsive Design"],
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    title: "Backend & Database",
    icon: Database,
    skills: ["MySQL", "API Integration", "Data Structures"],
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    title: "Tools & Technologies",
    icon: Wrench,
    skills: ["Git", "GitHub", "VSCode", "Postman", "Jupyter Notebook"],
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
  },
  {
    title: "Soft Skills",
    icon: Brain,
    skills: ["Analytical Thinking", "Communication", "Team Management", "Quick Learner"],
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Skills & Expertise
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A comprehensive toolkit for building modern, scalable applications
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={index}
                className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 group hover:scale-105"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-lg ${category.bgColor} group-hover:scale-110 transition-transform`}>
                    <Icon className={`h-6 w-6 ${category.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="text-sm px-3 py-1 rounded-full bg-secondary/50 text-secondary-foreground border border-border hover:border-primary/50 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Additional Highlights */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <Card className="p-6 text-center bg-gradient-to-br from-primary/20 to-primary/5 border-primary/30">
            <div className="text-3xl font-bold text-primary mb-2">3+</div>
            <div className="text-sm text-muted-foreground">Completed Projects</div>
          </Card>
          <Card className="p-6 text-center bg-gradient-to-br from-accent/20 to-accent/5 border-accent/30">
            <div className="text-3xl font-bold text-accent mb-2">5+</div>
            <div className="text-sm text-muted-foreground">Certifications</div>
          </Card>
          <Card className="p-6 text-center bg-gradient-to-br from-purple-500/20 to-purple-500/5 border-purple-500/30">
            <div className="text-3xl font-bold text-purple-500 mb-2">8.2</div>
            <div className="text-sm text-muted-foreground">Academic CGPA</div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
