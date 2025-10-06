import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Github, Linkedin, Send, MapPin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sameer.242470.it@mhssce.ac.in",
      href: "mailto:sameer.242470.it@mhssce.ac.in",
      color: "text-primary",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8104267188",
      href: "tel:+918104267188",
      color: "text-secondary",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/SamCodesAlright",
      href: "https://github.com/SamCodesAlright",
      color: "text-accent",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/sameer-shaikh",
      href: "https://www.linkedin.com/in/sameer-shaikh-950542213/",
      color: "text-primary",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let's discuss how we can work
              together to create something amazing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-elegant transition-all duration-300 hover:transform hover:scale-105 bg-card/50 backdrop-blur-sm border-border/50"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 rounded-full bg-muted/50">
                        <contact.icon
                          className={`h-6 w-6 ${contact.color} group-hover:animate-pulse`}
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">
                          {contact.label}
                        </h3>
                        <a
                          href={contact.href}
                          className="text-muted-foreground hover:text-primary transition-colors duration-300"
                          target={
                            contact.href.startsWith("http")
                              ? "_blank"
                              : undefined
                          }
                          rel={
                            contact.href.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                        >
                          {contact.value}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* CTA Section */}
            <div className="flex flex-col justify-center space-y-6">
              <Card className="bg-gradient-hero border-border/50 p-8">
                <div className="text-center space-y-6">
                  <div className="p-4 rounded-full bg-gradient-primary w-fit mx-auto">
                    <Send className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">
                      Ready to collaborate?
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Whether it's a new project, collaboration opportunity, or
                      just a chat about technology, I'd love to hear from you.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      variant="hero"
                      size="lg"
                      className="flex-1"
                      onClick={() =>
                        (window.location.href =
                          "mailto:sameer.242470.it@mhssce.ac.in")
                      }
                    >
                      <Mail className="mr-2 h-5 w-5" />
                      Send Email
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      onClick={() =>
                        window.open(
                          "https://www.linkedin.com/in/sameer-shaikh-950542213/",
                          "_blank"
                        )
                      }
                    >
                      <Linkedin className="mr-2 h-5 w-5" />
                      LinkedIn
                    </Button>
                  </div>
                </div>
              </Card>

              <div className="text-center text-sm text-muted-foreground">
                <div className="flex items-center justify-center mb-2">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>Available for remote work worldwide</span>
                </div>
                <p>Response time: Usually within 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
