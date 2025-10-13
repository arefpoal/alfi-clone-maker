import { FileText, Scale, Handshake, Award, Globe } from "lucide-react";

const resources = [
  {
    icon: FileText,
    title: "REGULATION",
    description:
      "Access our internal regulations (AD/ART) that guide collaboration and governance among members. Download the official document here.",
  },
  {
    icon: Scale,
    title: "STC",
    description:
      "Our official terms and conditions set a clear, unified standard for logistics and freight forwarding transactions.",
  },
  {
    icon: Handshake,
    title: "MOU",
    description:
      "Browse signed MOUs that reflect our strategic partnerships across sectors and regions.",
  },
  {
    icon: Award,
    title: "AWARDS",
    description:
      "An annual recognition event celebrating excellence in Indonesia's logistics and forwarding industry.",
  },
  {
    icon: Globe,
    title: "AFFILIATION",
    description:
      "See our affiliations with key national and international organisations—both within and beyond logistics.",
  },
];

const Resources = () => {
  return (
    <section id="resources" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-3">
            RESOURCES
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Driving logistics industry forward
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            A trusted knowledge hub for logistics professionals to access essential references,
            agreements, and recognitions that support growth, compliance, and connection across the
            sector.
          </p>
        </div>

        {/* Resource Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="group bg-card hover:bg-primary transition-all duration-500 rounded-xl p-8 shadow-md hover:shadow-2xl border border-border hover:border-secondary animate-slide-up cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-6 w-16 h-16 bg-secondary/10 group-hover:bg-secondary rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                <resource.icon className="w-8 h-8 text-secondary group-hover:text-secondary-foreground transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-bold text-foreground group-hover:text-primary-foreground mb-3 transition-colors duration-300 uppercase tracking-wide">
                {resource.title}
              </h3>
              <p className="text-muted-foreground group-hover:text-primary-foreground/80 transition-colors duration-300">
                {resource.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;
