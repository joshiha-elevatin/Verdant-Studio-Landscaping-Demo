import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getService, getAllSlugs } from "@/lib/services";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ServicePage from "@/components/ServicePage";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
  };
}

export default async function ServicePageRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <>
      <div className="grain-overlay" />
      <Nav />
      <ServicePage service={service} />
      <Footer />
    </>
  );
}
