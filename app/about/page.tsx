import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import AboutContent from "@/components/AboutContent";

export const metadata: Metadata = {
  title: "About — Verdant Studio",
  description:
    "Founded in 2009, Verdant Studio is an award-winning landscape architecture and outdoor living design practice based in London and the Home Counties.",
};

export default function AboutPage() {
  return (
    <>
      <div className="grain-overlay" />
      <Nav />
      <AboutContent />
      <Footer />
    </>
  );
}
