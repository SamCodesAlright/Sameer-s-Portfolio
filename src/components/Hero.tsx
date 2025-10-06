import { Button } from "@/components/ui/button";
import { ArrowDown, Mail } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Sameer Shaikh
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold text-secondary mb-6 animate-float">
            Full-Stack Developer
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Passionate individual specializing in Full-Stack Development and
            Machine Learning. Building scalable web applications and AI-driven
            solutions for the future.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="hero"
              size="lg"
              onClick={scrollToContact}
              className="group"
            >
              <Mail className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Contact Me
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={scrollToAbout}
              className="group"
            >
              Learn More
              <ArrowDown className="ml-2 h-5 w-5 group-hover:animate-bounce" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-primary" />
      </div>
    </section>
  );
};

export default Hero;
