import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { QualityAssurance } from "@/components/QualityAssurance";
import { Gallery } from "@/components/Gallery";
import { IndustriesOverview } from "@/components/IndustriesOverview";
import { CTASection } from "@/components/CTASection";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Tru-Tech Precision Inc. - Manufacturing Excellence",
  description:
    "Precision CNC machining and manufacturing for aerospace, nuclear, electronic, and space industries. AS9100 and ISO 9001:2015 certified. Located in Mississauga, Ontario.",
  path: "/",
});

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <IndustriesOverview />
      <About />
      <QualityAssurance />
      <Gallery />
      <CTASection />
    </main>
  );
}
