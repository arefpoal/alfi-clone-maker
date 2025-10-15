import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import news1 from "@/assets/news-1.jpg";
import news2 from "@/assets/news-2.jpg";
import news3 from "@/assets/news-3.jpg";

const newsArticles = [
  {
    id: "1",
    image: news1,
    category: "LOGISTICS",
    title: "Government Policies Shape Indonesia's Logistics Industry",
    excerpt:
      "Government Policies Shape Indonesia's Logistics Industry Government Policies Shape Indonesia's Logistics Industry",
  },
  {
    id: "2",
    image: news2,
    category: "LOGISTICS",
    title: "Global Supply Chain Innovations Transform Local Markets",
    excerpt:
      "Discover how international supply chain innovations are revolutionizing logistics operations across Indonesia",
  },
  {
    id: "3",
    image: news3,
    category: "LOGISTICS",
    title: "Digital Transformation in Freight Forwarding Sector",
    excerpt:
      "Technology adoption accelerates as freight forwarders embrace digital solutions for enhanced efficiency",
  },
  {
    id: "4",
    image: news1,
    category: "INDUSTRY",
    title: "Sustainable Practices Reshape Supply Chain Management",
    excerpt:
      "Environmental concerns drive logistics companies to adopt eco-friendly practices and green technologies",
  },
  {
    id: "5",
    image: news2,
    category: "TECHNOLOGY",
    title: "AI-Powered Solutions Optimize Warehouse Operations",
    excerpt:
      "Artificial intelligence revolutionizes inventory management and warehouse efficiency in the logistics sector",
  },
  {
    id: "6",
    image: news3,
    category: "TRADE",
    title: "Cross-Border E-Commerce Drives Logistics Growth",
    excerpt:
      "Rising online shopping demands push logistics providers to expand international delivery capabilities",
  },
];

const News = () => {
  const navigate = useNavigate();

  return (
    <section id="news" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-3">
            LATEST NEWS
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Latest updates from us
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Stay informed with the latest insights, policy updates, and industry developments
            shaping the future of logistics in Indonesia.
          </p>
        </div>

        {/* News Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full mb-12"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {newsArticles.map((article, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <div
                  onClick={() => navigate(`/news/${article.id}`)}
                  className="group bg-card rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer h-full"
                >
                  <div className="relative overflow-hidden h-64">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-2">{article.excerpt}</p>
                    <Button
                      variant="link"
                      className="p-0 h-auto font-semibold group-hover:text-secondary"
                    >
                      READ MORE
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                    </Button>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>

        {/* Newsletter CTA */}
        <div className="bg-primary rounded-2xl p-8 md:p-12 text-center animate-fade-in">
          <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Interested in news about exhibitors, top offers and trends in the industry?
          </h3>
          <p className="text-primary-foreground/80 text-lg mb-6">Subscribe to Newsletter</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-secondary transition-colors duration-300"
            />
            <Button variant="hero" size="lg">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
