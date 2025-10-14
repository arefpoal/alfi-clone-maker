const historyMilestones = [
  {
    year: "1990",
    title: "Foundation",
    description:
      "Established as a pioneer in Indonesia's freight forwarding industry, setting new standards for logistics excellence.",
  },
  {
    year: "2000",
    title: "National Expansion",
    description:
      "Expanded operations across major cities in Indonesia, building a robust network of logistics professionals.",
  },
  {
    year: "2010",
    title: "Digital Transformation",
    description:
      "Launched our digital platform, revolutionizing how logistics data and documentation is managed across the industry.",
  },
  {
    year: "2020",
    title: "Industry Leadership",
    description:
      "Became the leading association for freight forwarders, serving thousands of members with training and certification programs.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-3">
            OUR HISTORY
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Building Indonesia's Logistics Future
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Over three decades of excellence, innovation, and leadership in shaping the freight forwarding
            and logistics industry across Indonesia.
          </p>
        </div>

        {/* History Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {historyMilestones.map((milestone, index) => (
            <div
              key={index}
              className="group bg-card hover:bg-primary transition-all duration-500 rounded-xl p-8 shadow-md hover:shadow-2xl border border-border hover:border-primary animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-6">
                <div className="text-5xl font-bold text-primary group-hover:text-primary-foreground transition-colors duration-300">
                  {milestone.year}
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground group-hover:text-primary-foreground mb-3 transition-colors duration-300">
                {milestone.title}
              </h3>
              <p className="text-muted-foreground group-hover:text-primary-foreground/80 transition-colors duration-300">
                {milestone.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
