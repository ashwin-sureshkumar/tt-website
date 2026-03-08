import { IndustryPageLayout } from "@/components/IndustryPageLayout";
import { createMetadata } from "@/lib/metadata";
import { serviceLinks } from "@/lib/navigation";
import { Cpu, Zap, Microscope, Settings } from "lucide-react";

export const metadata = createMetadata({
  title: "Electronic Industry Manufacturing",
  description:
    "Precision CNC machining for the electronics industry. Custom enclosures, heat sinks, connectors, and precision components for electronic systems.",
  path: "/industries/electronic",
});

export default function ElectronicPage() {
  return (
    <IndustryPageLayout
      title="Electronic Industry Manufacturing"
      subtitle="High-precision components for electronic systems and assemblies"
      description="Precision CNC machining for electronic industry applications."
      path="/industries/electronic"
      relatedServices={serviceLinks}
    >
      <section className="prose prose-lg max-w-none mb-16">
        <p className="text-xl text-gray-600 leading-relaxed">
          The electronics industry requires components with exceptional dimensional accuracy, superior
          surface finishes, and consistent quality across production runs. Tru-Tech Precision
          manufactures precision-machined components for electronic systems, from custom enclosures
          and heat sinks to connectors and specialized mounting hardware.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed">
          Our CNC machining capabilities are well-suited to the tight tolerances and fine features
          typical of electronic components. We work with aluminum, copper, brass, and specialty alloys
          to produce parts that meet the thermal, electrical, and mechanical requirements of modern
          electronic systems. Whether you need prototype quantities for development or production runs,
          we deliver consistent quality and reliable performance.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Electronic Manufacturing Capabilities
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              icon: Cpu,
              title: "Precision Enclosures & Housings",
              desc: "Custom-machined enclosures for sensitive electronic equipment with precise cutouts for connectors, displays, and ventilation. EMI/RFI shielding features can be integrated directly into the design.",
            },
            {
              icon: Zap,
              title: "Thermal Management Components",
              desc: "Heat sinks, cold plates, and thermal interface hardware machined from high-conductivity aluminum and copper alloys. Complex fin geometries and mounting features produced to tight tolerances.",
            },
            {
              icon: Microscope,
              title: "Micro-Machining",
              desc: "Fine-feature machining for miniature electronic components requiring features as small as 0.010\" with exceptional surface finish and positional accuracy.",
            },
            {
              icon: Settings,
              title: "Test Fixtures & Tooling",
              desc: "Custom test fixtures, jigs, and tooling for electronic assembly and testing operations. Designed for repeatability and ease of use in production environments.",
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
          Typical Electronic Components
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "Enclosures & housings",
            "Heat sinks",
            "Connector bodies",
            "Waveguide components",
            "PCB mounting hardware",
            "Shielding cans",
            "Chassis & frames",
            "Test fixtures",
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
