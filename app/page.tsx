import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedProjectCard from "@/components/FeaturedProjectCard";
import About from "@/components/About";
import TechnicalFoundations from "@/components/TechnicalFoundations";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-canvas text-primary">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <FeaturedProjectCard />
        <About />
        <TechnicalFoundations />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
