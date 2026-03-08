import { IndustryPageLayout } from "@/components/IndustryPageLayout";
import { createMetadata } from "@/lib/metadata";
import { serviceLinks } from "@/lib/navigation";
import { JsonLd } from "@/components/JsonLd";
import { faqSchema } from "@/lib/jsonld";
import { Shield, Cog, Clock, CheckCircle, Package } from "lucide-react";

export const metadata = createMetadata({
  title: "Commercial CNC Machining | Precision Industrial Parts",
  description:
    "Precision CNC machining for commercial and industrial applications. Custom components, production runs, and prototypes with AS9100-level quality for general industry.",
  path: "/industries/commercial",
});

const faqs = [
  {
    question: "What types of commercial parts do you manufacture?",
    answer:
      "We manufacture a wide range of commercial and industrial components including hydraulic fittings, valve bodies, pump components, gear housings, mechanical assemblies, custom brackets, and precision fixtures. Our capabilities span from one-off prototypes to production runs of thousands of parts.",
  },
  {
    question: "Do commercial parts receive the same quality standards as aerospace?",
    answer:
      "Yes. Our AS9100 and ISO 9001 certified quality management system applies to all work, regardless of industry. Every commercial part benefits from the same rigorous inspection, traceability, and documentation standards we use for aerospace and nuclear components.",
  },
  {
    question: "What materials do you work with for commercial applications?",
    answer:
      "We machine a full range of materials including aluminum alloys (6061, 7075, 2024), stainless steels (303, 304, 316, 17-4PH), brass, copper, carbon steel, Delrin, PEEK, Torlon, and other engineering plastics. We source all materials with full certifications and traceability.",
  },
  {
    question: "Can you handle both prototypes and production volumes?",
    answer:
      "Absolutely. We support the full product lifecycle — from initial prototyping and first article inspection through low-volume and medium-volume production. Our flexible scheduling and diverse machine capacity allow us to scale with your needs.",
  },
  {
    question: "What are your typical lead times for commercial work?",
    answer:
      "Standard lead times for commercial work are typically 2-4 weeks depending on complexity, material availability, and quantity. For urgent needs, our AOG & Speed Shop service can deliver parts in as little as 24-48 hours.",
  },
];

export default function CommercialPage() {
  return (
    <IndustryPageLayout
      title="Commercial Manufacturing"
      subtitle="Precision CNC machining for commercial and industrial applications"
      description="Precision CNC machining for commercial and industrial applications."
      path="/industries/commercial"
      faqs={faqs}
      relatedServices={serviceLinks}
    >
      <JsonLd data={faqSchema(faqs)} />

      {/* Introduction */}
      <section className="prose prose-lg max-w-none mb-16">
        <p className="text-xl text-gray-600 leading-relaxed">
          Tru-Tech Precision brings aerospace-level quality to commercial and industrial
          manufacturing. Our AS9100 and ISO 9001 certified processes ensure that every
          commercial component we produce meets the same rigorous standards our aerospace
          and nuclear customers depend on — giving you a quality advantage in your market.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed">
          Whether you need custom machined parts for industrial equipment, precision
          components for commercial products, or production runs of mechanical assemblies,
          our team delivers consistent quality with reliable lead times. We work with a
          wide range of metals and engineering plastics to meet your specific application
          requirements.
        </p>
      </section>

      {/* Key Capabilities */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Key Capabilities
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              icon: Cog,
              title: "Custom Machined Components",
              description:
                "From complex housings and manifolds to precision shafts and fittings, we manufacture custom components to your exact specifications. Our multi-axis CNC capabilities handle parts from simple to highly complex geometries.",
            },
            {
              icon: Clock,
              title: "Prototype to Production",
              description:
                "We support your product lifecycle from initial prototyping through production volumes. Our flexible scheduling and diverse machine capacity allow us to scale production as your needs grow, with consistent quality at every stage.",
            },
            {
              icon: Shield,
              title: "Certified Quality System",
              description:
                "Every commercial part benefits from our AS9100 and ISO 9001 certified quality management system. Full dimensional inspection, material traceability, and documentation are standard — not optional extras.",
            },
            {
              icon: Package,
              title: "Material Versatility",
              description:
                "We machine aluminum, stainless steel, brass, copper, carbon steel, and engineering plastics including Delrin, PEEK, and Torlon. All materials are sourced with full certifications and material test reports.",
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="bg-gray-50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-[#17135F] rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Why Choose */}
      <section className="mb-16 bg-gray-50 p-8 rounded-lg">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Why Choose Tru-Tech for Commercial Manufacturing
        </h2>
        <div className="space-y-4">
          {[
            "Aerospace-level quality applied to every commercial project — AS9100 and ISO 9001 certified",
            "Full material traceability with certifications and test reports on every order",
            "Flexible capacity for prototypes, short runs, and production volumes",
            "Experienced engineering team available for DFM consultation and design optimization",
            "Competitive pricing with transparent quoting and no hidden costs",
            "Responsive communication with dedicated project coordination",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-[#17135F] shrink-0 mt-0.5" />
              <span className="text-gray-700">{item}</span>
            </div>
          ))}
        </div>
      </section>
    </IndustryPageLayout>
  );
}
