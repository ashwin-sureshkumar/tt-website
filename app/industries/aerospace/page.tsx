import { IndustryPageLayout } from "@/components/IndustryPageLayout";
import { createMetadata } from "@/lib/metadata";
import { serviceLinks } from "@/lib/navigation";
import { Shield, FileCheck, Award, Plane } from "lucide-react";

export const metadata = createMetadata({
  title: "Aerospace Manufacturing",
  description:
    "AS9100 certified precision CNC machining for the aerospace industry. Aircraft components, engine parts, structural elements, and avionics housings manufactured to the highest standards.",
  path: "/industries/aerospace",
});

export default function AerospacePage() {
  return (
    <IndustryPageLayout
      title="Aerospace Manufacturing"
      subtitle="AS9100 certified precision components for aircraft and aviation systems"
      description="AS9100 certified CNC machining for aerospace applications."
      path="/industries/aerospace"
      relatedServices={serviceLinks}
    >
      <section className="prose prose-lg max-w-none mb-16">
        <p className="text-xl text-gray-600 leading-relaxed">
          The aerospace industry demands perfection — and Tru-Tech Precision delivers. As an AS9100
          certified manufacturer, we produce flight-critical components that meet the rigorous quality
          and traceability requirements of the global aerospace supply chain. From commercial aviation
          to military aircraft, our precision-machined parts are trusted in applications where failure
          is not an option.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed">
          Our team has extensive experience working with major aerospace OEMs and Tier 1 suppliers,
          manufacturing components ranging from engine hardware and landing gear parts to structural
          brackets and avionics enclosures. Every part is produced under our AS9100 quality management
          system with complete material traceability, first article inspection reports (FAI per AS9102),
          and certificates of conformity.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Aerospace Capabilities
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              icon: Shield,
              title: "AS9100 Quality System",
              desc: "Our quality management system is certified to AS9100 Rev D, the international standard for aerospace quality. Every process — from order entry to final shipment — is controlled, documented, and auditable.",
            },
            {
              icon: FileCheck,
              title: "First Article Inspection (FAI)",
              desc: "We perform comprehensive first article inspections per AS9102, including full dimensional verification, material certification review, and process documentation. FAI reports are provided in standard formats accepted by major OEMs.",
            },
            {
              icon: Award,
              title: "Material Certifications",
              desc: "All aerospace materials are procured from approved sources with full mill certifications. We maintain material traceability from raw stock through finished part, including heat lot, batch, and specification compliance documentation.",
            },
            {
              icon: Plane,
              title: "Flight-Critical Components",
              desc: "We manufacture components designated as flight-critical and flight-safety, with appropriate process controls, inspection requirements, and documentation to meet the most stringent aerospace specifications.",
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="bg-gray-50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-[#17135F] rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mb-16 bg-gray-50 p-8 rounded-lg">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Typical Aerospace Components
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "Engine brackets",
            "Structural fittings",
            "Landing gear components",
            "Avionics housings",
            "Actuator bodies",
            "Hydraulic manifolds",
            "Bearing housings",
            "Control linkages",
            "Turbine hardware",
            "Mounting plates",
            "Connector housings",
            "Shafts & spindles",
          ].map((item) => (
            <div
              key={item}
              className="bg-white px-4 py-3 rounded text-sm font-medium text-gray-700 text-center"
            >
              {item}
            </div>
          ))}
        </div>
      </section>
    </IndustryPageLayout>
  );
}
