import { Button } from "@/components/ui/button";
import { ArrowRight, X } from "lucide-react";
import { useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
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
  const [selectedArticle, setSelectedArticle] = useState<typeof newsArticles[0] | null>(null);

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

        {/* News Slideshow */}
        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 4000,
              stopOnInteraction: true,
            }),
          ]}
          className="w-full mb-12"
        >
          <CarouselContent>
            {newsArticles.map((article, index) => (
              <CarouselItem key={index}>
                <div
                  onClick={() => setSelectedArticle(article)}
                  className="group cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-2xl h-[500px] md:h-[600px]">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                      <span className="bg-secondary text-secondary-foreground text-xs font-bold px-4 py-2 rounded-full mb-4 inline-block">
                        {article.category}
                      </span>
                      <h3 className="text-2xl md:text-4xl font-bold text-white mb-4 group-hover:text-secondary transition-colors duration-300">
                        {article.title}
                      </h3>
                      <p className="text-white/90 text-base md:text-lg mb-6 max-w-3xl line-clamp-2">
                        {article.excerpt}
                      </p>
                      <Button
                        variant="secondary"
                        size="lg"
                        className="group-hover:scale-105 transition-transform duration-300"
                      >
                        READ MORE
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4 md:left-8" />
          <CarouselNext className="right-4 md:right-8" />
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

        {/* News Modal */}
        <Dialog open={!!selectedArticle} onOpenChange={() => setSelectedArticle(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            {selectedArticle && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold">{selectedArticle.title}</DialogTitle>
                </DialogHeader>
                <div className="mt-4">
                  <div className="relative h-96 mb-6">
                    <img
                      src={selectedArticle.image}
                      alt={selectedArticle.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full">
                        {selectedArticle.category}
                      </span>
                    </div>
                  </div>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {selectedArticle.excerpt}
                    </p>
                    <p className="mt-4 text-foreground leading-relaxed">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p className="mt-4 text-foreground leading-relaxed">
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default News;
