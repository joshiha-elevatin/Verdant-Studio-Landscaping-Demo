import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ContactContent from "@/components/ContactContent";

export const metadata: Metadata = {
  title: "Contact — Verdant Studio",
  description:
    "Start your landscape project with Verdant Studio. Request a consultation and tell us about your outdoor space.",
};

export default function ContactPage() {
  return (
    <>
      <div className="grain-overlay" />
      <Nav />
      <ContactContent />
      <Footer />
    </>
  );
}
