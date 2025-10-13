import iconDigital from "@/assets/icon-digital.png";
import iconCareer from "@/assets/icon-career.png";
import iconTraining from "@/assets/icon-training.png";
import iconCertification from "@/assets/icon-certification.png";

const services = [
  {
    icon: iconDigital,
    title: "Digital Platform",
    description:
      "A platform for members to exchange data, access trade docs, and gain business insights from one login.",
  },
  {
    icon: iconCareer,
    title: "Job and Career",
    description:
      "Members can post job vacancies and connect with top industry professionals through a dedicated recruitment hub.",
  },
  {
    icon: iconTraining,
    title: "Logistic Training",
    description:
      "Through our Institute, we offer globally benchmarked training rooted in local expertise for professionals.",
  },
  {
    icon: iconCertification,
    title: "Certification",
    description:
      "We certify logistics professionals and companies to boost credibility and meet national and global standards.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-3">
            OUR SERVICES
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Supporting Indonesia's logistics industry
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            We provide strategic support, training, and connections that empower freight forwarders
            and logistics professionals nationwide.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card hover:bg-primary transition-all duration-500 rounded-xl p-8 shadow-md hover:shadow-2xl border border-border hover:border-primary animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-6 w-20 h-20 bg-secondary/10 group-hover:bg-secondary/20 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-12 h-12 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-foreground group-hover:text-primary-foreground mb-3 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-muted-foreground group-hover:text-primary-foreground/80 transition-colors duration-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
