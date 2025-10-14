import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import news1 from "@/assets/news-1.jpg";
import news2 from "@/assets/news-2.jpg";
import news3 from "@/assets/news-3.jpg";

const newsData = [
  {
    id: "1",
    image: news1,
    category: "LOGISTICS",
    title: "Government Policies Shape Indonesia's Logistics Industry",
    excerpt: "Government Policies Shape Indonesia's Logistics Industry Government Policies Shape Indonesia's Logistics Industry",
    date: "March 15, 2024",
    author: "John Doe",
    content: `
      <p>The Indonesian government has recently implemented a series of comprehensive policies aimed at transforming the nation's logistics industry. These strategic initiatives are designed to enhance efficiency, reduce costs, and position Indonesia as a key logistics hub in Southeast Asia.</p>
      
      <h3>Key Policy Changes</h3>
      <p>The new regulatory framework introduces several significant changes that will impact logistics operations across the country. From infrastructure development to digital integration, these policies represent a major shift in how logistics services are delivered.</p>
      
      <p>Industry experts predict that these changes will lead to improved supply chain efficiency, reduced delivery times, and enhanced competitiveness in the global market. The government's commitment to modernizing the logistics sector demonstrates its recognition of the industry's critical role in economic growth.</p>
      
      <h3>Impact on Businesses</h3>
      <p>Local and international logistics companies are adapting their strategies to align with these new policies. The changes present both challenges and opportunities for businesses operating in the Indonesian market.</p>
      
      <p>As the implementation progresses, stakeholders across the industry are closely monitoring the outcomes and working collaboratively with government agencies to ensure smooth transitions and maximize benefits.</p>
    `,
  },
  {
    id: "2",
    image: news2,
    category: "LOGISTICS",
    title: "Global Supply Chain Innovations Transform Local Markets",
    excerpt: "Discover how international supply chain innovations are revolutionizing logistics operations across Indonesia",
    date: "March 12, 2024",
    author: "Jane Smith",
    content: `
      <p>International supply chain innovations are making significant waves in Indonesia's logistics landscape. From automation to AI-powered optimization, these technological advances are reshaping how goods move through the country.</p>
      
      <h3>Technology Adoption</h3>
      <p>Leading logistics providers are investing heavily in cutting-edge technologies that promise to streamline operations and reduce costs. These innovations include automated warehousing systems, real-time tracking solutions, and predictive analytics platforms.</p>
      
      <p>The integration of these technologies is not just improving efficiency—it's fundamentally changing the competitive landscape of the logistics industry in Indonesia.</p>
      
      <h3>Future Outlook</h3>
      <p>As global supply chain innovations continue to evolve, Indonesian logistics companies are positioning themselves to take full advantage of these advancements. The next few years will be critical in determining which players successfully navigate this transformation.</p>
    `,
  },
  {
    id: "3",
    image: news3,
    category: "LOGISTICS",
    title: "Digital Transformation in Freight Forwarding Sector",
    excerpt: "Technology adoption accelerates as freight forwarders embrace digital solutions for enhanced efficiency",
    date: "March 10, 2024",
    author: "Michael Johnson",
    content: `
      <p>The freight forwarding sector in Indonesia is experiencing a digital revolution. Companies across the industry are embracing technological solutions that promise to enhance efficiency, improve customer service, and reduce operational costs.</p>
      
      <h3>Digital Solutions Leading the Change</h3>
      <p>Cloud-based platforms, IoT sensors, and blockchain technology are among the key innovations being adopted by forward-thinking freight forwarders. These tools provide unprecedented visibility and control over shipments.</p>
      
      <p>Customer expectations are driving much of this transformation, as businesses demand real-time information and seamless digital experiences when managing their freight operations.</p>
      
      <h3>Industry Response</h3>
      <p>Major freight forwarding companies are investing substantial resources in digital infrastructure. The shift toward digital operations is no longer optional—it's essential for survival in an increasingly competitive market.</p>
      
      <p>As digital adoption accelerates, the industry is seeing improved collaboration, reduced paperwork, and faster processing times, all of which contribute to better service delivery and customer satisfaction.</p>
    `,
  },
];

const NewsDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const article = newsData.find((item) => item.id === id);

  if (!article) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Article not found</h1>
          <Button onClick={() => navigate("/")} variant="default">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <article className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Back Button */}
          <Button
            onClick={() => navigate("/")}
            variant="ghost"
            className="mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to News
          </Button>

          {/* Category Badge */}
          <div className="mb-4">
            <span className="bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full">
              {article.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {article.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{article.author}</span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="rounded-xl overflow-hidden mb-8">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-[400px] object-cover"
            />
          </div>

          {/* Content */}
          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>
      </article>
      <Footer />
    </div>
  );
};

export default NewsDetail;
