import { Card } from "@/components/ui/card";
import { GraduationCap, Target, Award } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          About Me
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Passionate about creating innovative solutions and continuously learning new technologies
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Education Card */}
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 group">
            <div className="flex flex-col items-center text-center">
              <div className="p-4 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Education</h3>
              <p className="text-muted-foreground">B.E Computer Science</p>
              <p className="text-sm text-muted-foreground">Anna University</p>
              <p className="text-sm font-semibold text-primary mt-2">CGPA: 8.2/10</p>
            </div>
          </Card>

          {/* Objective Card */}
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 group">
            <div className="flex flex-col items-center text-center">
              <div className="p-4 rounded-full bg-accent/10 mb-4 group-hover:bg-accent/20 transition-colors">
                <Target className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Objective</h3>
              <p className="text-muted-foreground text-sm">
                Entry-level Software Engineer eager to contribute to scalable and user-focused software solutions
              </p>
            </div>
          </Card>

          {/* Certifications Card */}
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 group">
            <div className="flex flex-col items-center text-center">
              <div className="p-4 rounded-full bg-purple-500/10 mb-4 group-hover:bg-purple-500/20 transition-colors">
                <Award className="h-8 w-8 text-purple-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Certifications</h3>
              <p className="text-sm text-muted-foreground">HackerRank CSS</p>
              <p className="text-sm text-muted-foreground">HackerRank Problem Solving</p>
              <p className="text-sm text-muted-foreground">Java Fundamentals</p>
            </div>
          </Card>
        </div>

        {/* Experience Section */}
        <Card className="p-8 bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm border-border">
          <h3 className="text-2xl font-semibold mb-6 text-center">Professional Experience</h3>
          <div className="space-y-6">
            <div className="border-l-2 border-primary pl-6">
              <h4 className="text-lg font-semibold text-primary">C/C++ Programming Internship</h4>
              <p className="text-sm text-muted-foreground mb-2">Cognifyz Technologies</p>
              <p className="text-sm text-muted-foreground">
                Gained hands-on experience in C/C++ programming fundamentals and problem-solving
              </p>
            </div>
            <div className="border-l-2 border-accent pl-6">
              <h4 className="text-lg font-semibold text-accent">Web Development Internship</h4>
              <p className="text-sm text-muted-foreground mb-2">Cognifyz Technologies</p>
              <p className="text-sm text-muted-foreground">
                Developed responsive websites using HTML5, CSS3, and JavaScript with modern design principles
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default About;
