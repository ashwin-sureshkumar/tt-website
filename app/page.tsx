import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { QualityAssurance } from "@/components/QualityAssurance";
import { Gallery } from "@/components/Gallery";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <QualityAssurance />
        <Gallery />
      </main>
      <Footer />
    </>
  );
}
