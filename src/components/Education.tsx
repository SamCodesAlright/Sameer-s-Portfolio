import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, BookOpen, Trophy } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "B.Tech",
      institution: "M.H. Saboo Siddik College Of Engineering",
      period: "2024 - 2027",
      description:
        "Specializing in Information Technology with focus on Full-Stack Development and Machine Learning",
      status: "In Progress",
    },
    {
      degree: "Diploma in Information Technology",
      institution: "Thakur Polytechnic",
      period: "2022 - 2024",
      description:
        "Foundation in programming, database management, and software development principles",
      status: "Completed",
    },
  ];

  const achievements = [
    {
      icon: Trophy,
      title: "Second Place in Technofest 2024",
      description: "Technical Project Competition / College Hackathon",
      date: "2024",
    },
    {
      icon: BookOpen,
      title: "Published Research Paper",
      description: '"Customer Churn Prediction" in IJNRD (Impact Factor: 8.76)',
      date: "2024",
    },
  ];

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-secondary bg-clip-text text-transparent">
              Education & Achievements
            </h2>
            <div className="w-20 h-1 bg-gradient-secondary mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center">
                <GraduationCap className="mr-3 h-6 w-6 text-primary" />
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <Card
                    key={index}
                    className="group hover:shadow-elegant transition-all duration-300 hover:transform hover:scale-105 bg-card/50 backdrop-blur-sm border-border/50"
                  >
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">
                            {edu.degree}
                          </CardTitle>
                          <p className="text-muted-foreground font-medium">
                            {edu.institution}
                          </p>
                        </div>
                        <Badge
                          variant={
                            edu.status === "Completed" ? "default" : "secondary"
                          }
                        >
                          {edu.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-primary font-medium">
                        {edu.period}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm">
                        {edu.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center">
                <Award className="mr-3 h-6 w-6 text-secondary" />
                Achievements
              </h3>
              <div className="space-y-6">
                {achievements.map((achievement, index) => (
                  <Card
                    key={index}
                    className="group hover:shadow-elegant transition-all duration-300 hover:transform hover:scale-105 bg-card/50 backdrop-blur-sm border-border/50"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-full bg-gradient-secondary">
                          <achievement.icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-lg group-hover:text-secondary transition-colors duration-300">
                            {achievement.title}
                          </h4>
                          <p className="text-muted-foreground text-sm mb-2">
                            {achievement.description}
                          </p>
                          <Badge variant="outline" className="text-xs">
                            {achievement.date}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
