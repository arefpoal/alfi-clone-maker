import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-primary/50 backdrop-blur-sm"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary-foreground">
              LFA<span className="text-secondary">.</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("services")}
              className="text-primary-foreground hover:text-secondary transition-colors duration-300 font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("expertise")}
              className="text-primary-foreground hover:text-secondary transition-colors duration-300 font-medium"
            >
              Expertise
            </button>
            <button
              onClick={() => scrollToSection("resources")}
              className="text-primary-foreground hover:text-secondary transition-colors duration-300 font-medium"
            >
              Resources
            </button>
            <button
              onClick={() => scrollToSection("news")}
              className="text-primary-foreground hover:text-secondary transition-colors duration-300 font-medium"
            >
              News
            </button>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm">
              Login
            </Button>
            <Button variant="hero" size="sm">
              Become A Member
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-transparent pb-6 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("services")}
                className="text-primary-foreground hover:text-secondary transition-colors duration-300 font-medium text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("expertise")}
                className="text-primary-foreground hover:text-secondary transition-colors duration-300 font-medium text-left"
              >
                Expertise
              </button>
              <button
                onClick={() => scrollToSection("resources")}
                className="text-primary-foreground hover:text-secondary transition-colors duration-300 font-medium text-left"
              >
                Resources
              </button>
              <button
                onClick={() => scrollToSection("news")}
                className="text-primary-foreground hover:text-secondary transition-colors duration-300 font-medium text-left"
              >
                News
              </button>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" size="sm">
                  Login
                </Button>
                <Button variant="hero" size="sm">
                  Become A Member
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
