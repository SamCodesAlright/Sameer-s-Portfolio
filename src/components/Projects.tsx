import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ExternalLink,
  Github,
  TrendingUp,
  Building,
  Brain,
} from "lucide-react";

const Projects = () => {
  const projects = [
    {
      icon: TrendingUp,
      title: "Expense Tracking System",
      description:
        "A comprehensive financial management application with real-time expense tracking, budget planning, and analytics dashboard. Features include category-wise spending analysis, monthly reports, and data visualization.",
      technologies: [
        "React.js",
        "Node.js",
        "MongoDB",
        "Express.js",
        "Chart.js",
      ],
      github: "https://github.com/yourusername/expense-tracker",
      demo: "https://expense-tracker-demo.com",
      gradient: "from-accent to-primary",
    },
    {
      icon: Building,
      title: "Museum Management System",
      description:
        "Enterprise-level museum management solution with artifact cataloging, visitor management, and exhibition planning. Includes admin dashboard, inventory tracking, and visitor analytics.",
      technologies: ["Python", "Flask", "Sqlite", "Bootstrap", "Jinja2"],
      github: "https://github.com/yourusername/museum-system",
      demo: "https://museum-demo.com",
      gradient: "from-secondary to-accent",
    },
    {
      icon: Brain,
      title: "Customer Churn Prediction",
      description:
        "Advanced machine learning model using Convolutional Neural Networks to predict customer churn with 94% accuracy. Includes data preprocessing, feature engineering, and model optimization techniques.",
      technologies: [
        "Python",
        "TensorFlow",
        "CNN",
        "Neural Networks",
        "Pandas",
      ],
      github: "https://github.com/yourusername/churn-prediction",
      demo: "https://churn-prediction-demo.com",
      gradient: "from-primary to-secondary",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Showcasing my expertise through innovative projects that
              demonstrate problem-solving skills and technical proficiency.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group hover:shadow-glow transition-all duration-500 hover:transform hover:-translate-y-2 bg-card/50 backdrop-blur-sm border-border/50 overflow-hidden"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`p-3 rounded-full bg-gradient-to-r ${project.gradient}`}
                    >
                      <project.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 hover:bg-muted group-hover:text-primary"
                        onClick={() => window.open(project.github, "_blank")}
                      >
                        <Github className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 hover:bg-muted group-hover:text-primary"
                        onClick={() => window.open(project.demo, "_blank")}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="text-xs border-border/50 hover:border-primary hover:text-primary transition-colors duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2 pt-2">
                    <Button
                      variant="gradient"
                      size="sm"
                      className="flex-1"
                      onClick={() => window.open(project.demo, "_blank")}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(project.github, "_blank")}
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
