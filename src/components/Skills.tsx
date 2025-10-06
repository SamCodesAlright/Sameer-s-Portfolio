import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Globe,
  Server,
  Database,
  Brain,
  Wrench,
  Code,
  Palette,
  Cpu,
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Languages",
      color: "text-accent",
      skills: ["Java", "Python", "JavaScript", "TypeScript"],
    },
    {
      icon: Palette,
      title: "Frontend",
      color: "text-accent",
      skills: [
        "HTML",
        "CSS",
        "React.js",
        "Next.js",
        "Zustand",
        "Bootstrap",
        "Tailwind CSS",
      ],
    },
    {
      icon: Server,
      title: "Backend",
      color: "text-primary",
      skills: ["Node.js", "Express.js", "REST APIs", "JWT", "Flask", "Django"],
    },
    {
      icon: Database,
      title: "Databases",
      color: "text-secondary",
      skills: ["MySQL", "MongoDB", "Firebase"],
    },
    {
      icon: Brain,
      title: "AI/ML",
      color: "text-accent",
      skills: [
        "TensorFlow",
        "Neural Networks",
        "Matplotlib",
        "CNN",
        "Deep Learning",
        "Pandas",
        "Numpy",
      ],
    },
    {
      icon: Wrench,
      title: "Tools",
      color: "text-primary",
      skills: ["Git", "GitHub", "Docker", "AWS", "Jenkins", "Linux"],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-secondary bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <div className="w-20 h-1 bg-gradient-secondary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit of modern technologies and frameworks that
              I use to build robust, scalable, and innovative solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="group hover:shadow-elegant transition-all duration-500 hover:transform hover:scale-105 bg-card/50 backdrop-blur-sm border-border/50"
              >
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-full bg-muted/50">
                      <category.icon
                        className={`h-8 w-8 ${category.color} group-hover:animate-pulse`}
                      />
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="text-xs py-1 px-3 hover:bg-gradient-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Skill Progress Bars */}
          <div className="mt-16 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-8">
              Proficiency Levels
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { skill: "React.js", level: 80 },
                { skill: "Node.js", level: 85 },
                { skill: "Python", level: 75 },
                { skill: "Machine Learning", level: 60 },
                { skill: "MongoDB", level: 85 },
                { skill: "TensorFlow", level: 70 },
              ].map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">{item.skill}</span>
                    <span className="text-sm text-muted-foreground">
                      {item.level}%
                    </span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-gradient-primary h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${item.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
