import { Card, CardContent } from "@/components/ui/card";
import { Code, Brain, Database, Zap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Expert in modern web technologies",
    },
    {
      icon: Brain,
      title: "Machine Learning",
      description: "AI and neural networks specialist",
    },
    {
      icon: Database,
      title: "Data Solutions",
      description: "Scalable database architectures",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimized and efficient code",
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                As a passionate B.Tech student specializing in Full-Stack
                Development and Machine Learning, I thrive on creating
                innovative solutions that bridge the gap between cutting-edge
                technology and real-world applications.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My expertise spans across modern web technologies, AI/ML
                frameworks, and scalable database architectures. I like to write
                clean, efficient code and build applications that make a
                meaningful impact.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, I enjoy exploring new technologies,
                contributing to open-source projects, and staying updated with
                the latest trends in software development and artificial
                intelligence.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-elegant transition-all duration-300 hover:transform hover:scale-105 bg-card/50 backdrop-blur-sm border-border/50"
                >
                  <CardContent className="p-6 text-center">
                    <item.icon className="h-8 w-8 text-primary mx-auto mb-3 group-hover:text-secondary transition-colors duration-300" />
                    <h3 className="font-semibold mb-2 text-sm">{item.title}</h3>
                    <p className="text-xs text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
