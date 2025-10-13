import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Expertise from "@/components/Expertise";
import Resources from "@/components/Resources";
import News from "@/components/News";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Expertise />
      <Resources />
      <News />
      <Footer />
    </div>
  );
};

export default Index;
