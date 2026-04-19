import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Bento from "@/components/Bento";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Process from "@/components/Process";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden w-full max-w-full">
      <div className="grain-overlay" aria-hidden="true" />
      <Nav />
      <Hero />
      <Marquee />
      <Bento />
      <Services />
      <Testimonials />
      <Process />
      <CTA />
      <Footer />
    </main>
  );
}
