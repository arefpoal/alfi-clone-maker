import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import expertiseBg from "@/assets/expertise-bg.jpg";

const Expertise = () => {
  return (
    <section id="expertise" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-3">
            OUR EXPERTISE
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Equipping industry players with expert tools
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            We equip logistics professionals and companies with the expertise they need to grow,
            compete, and lead in a fast-evolving industry.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-slide-up">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Professional Institute
            </h3>
            <p className="text-muted-foreground text-lg mb-8">
              Strategic training, certification, and development programs tailored to empower
              freight forwarders and logistics professionals across Indonesia.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <div className="bg-secondary/10 rounded-full p-1 mt-1">
                  <Check className="w-5 h-5 text-secondary" />
                </div>
                <p className="text-foreground">
                  Certified programs aligned with global and national standards
                </p>
              </div>
              <div className="flex items-start gap-3 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="bg-secondary/10 rounded-full p-1 mt-1">
                  <Check className="w-5 h-5 text-secondary" />
                </div>
                <p className="text-foreground">
                  Practical skills for future-ready logistics careers
                </p>
              </div>
              <div className="flex items-start gap-3 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <div className="bg-secondary/10 rounded-full p-1 mt-1">
                  <Check className="w-5 h-5 text-secondary" />
                </div>
                <p className="text-foreground">
                  Nationwide network and industry connections
                </p>
              </div>
            </div>

            <Button variant="hero" size="lg">
              Learn More
            </Button>
          </div>

          {/* Image */}
          <div className="relative animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={expertiseBg}
                alt="Shipping containers at port"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
