import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import RatingScopeCaseStudy from "@/components/RatingScopeCaseStudy";
import About from "@/components/About";
import Credentials from "@/components/Credentials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-950 font-sans text-zinc-100">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <RatingScopeCaseStudy />
        <About />
        <Credentials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
