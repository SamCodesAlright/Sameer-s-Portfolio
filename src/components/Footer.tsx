import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/SamCodesAlright",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/sameer-shaikh-950542213/",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:sameer.242470.it@mhssce.ac.in",
      label: "Email",
    },
  ];

  return (
    <footer className="bg-card/50 backdrop-blur-sm border-t border-border/50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground">
              © {currentYear} Sameer Shaikh. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground mt-1 flex items-center justify-center md:justify-start">
              Made with{" "}
              <Heart className="h-4 w-4 mx-1 text-red-500 animate-pulse" />
              and lots of coffee
            </p>
          </div>

          <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="p-2 rounded-full bg-muted/50 hover:bg-gradient-primary hover:text-white transition-all duration-300 transform hover:scale-110"
                aria-label={link.label}
              >
                <link.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
