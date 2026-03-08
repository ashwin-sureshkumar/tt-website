import { IndustryPageLayout } from "@/components/IndustryPageLayout";
import { createMetadata } from "@/lib/metadata";
import { serviceLinks } from "@/lib/navigation";
import { Atom, FileCheck, Shield, Search } from "lucide-react";

export const metadata = createMetadata({
  title: "Nuclear Industry Manufacturing",
  description:
    "Precision CNC machining for the nuclear industry. Nuclear-grade materials, complete traceability, and rigorous quality control for reactor components and nuclear equipment.",
  path: "/industries/nuclear",
});

export default function NuclearPage() {
  return (
    <IndustryPageLayout
      title="Nuclear Industry Manufacturing"
      subtitle="Nuclear-grade precision components with complete material traceability"
      description="Precision CNC machining for nuclear industry applications."
      path="/industries/nuclear"
      relatedServices={serviceLinks}
    >
      <section className="prose prose-lg max-w-none mb-16">
        <p className="text-xl text-gray-600 leading-relaxed">
          Manufacturing for the nuclear industry requires an unwavering commitment to quality, safety,
          and traceability. At Tru-Tech Precision, we understand the critical nature of nuclear
          applications and have built our processes to meet the stringent requirements of this
          highly regulated industry. Every component we produce for nuclear applications undergoes
          rigorous inspection and documentation to ensure complete compliance.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed">
          Our experience spans components for nuclear power generation, research facilities, and
          related equipment. We work with nuclear-grade materials including specialized stainless
          steels, Inconel, Hastelloy, and other alloys specified for nuclear service. Complete
          material traceability from mill certification through finished part is maintained and
          documented throughout our process.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Nuclear Manufacturing Capabilities
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              icon: Atom,
              title: "Nuclear-Grade Materials",
              desc: "We source and machine materials that meet nuclear specifications, including specialized grades of stainless steel, nickel alloys, and other materials certified for nuclear service environments.",
            },
            {
              icon: FileCheck,
              title: "Complete Traceability",
              desc: "Every material, process step, and inspection result is documented and traceable. Our quality system maintains records that link each finished component back to its raw material source with full certification chains.",
            },
            {
              icon: Shield,
              title: "Rigorous Quality Control",
              desc: "Nuclear components undergo enhanced inspection protocols beyond our standard quality processes. This includes additional dimensional verification, surface integrity checks, and documentation requirements.",
            },
            {
              icon: Search,
              title: "Non-Destructive Testing",
              desc: "We coordinate with qualified NDE/NDT providers for liquid penetrant, magnetic particle, radiographic, and ultrasonic testing as required by your specifications. All testing is performed by certified Level II/III technicians.",
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
          Nuclear Materials We Work With
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            "316/316L Stainless Steel",
            "304/304L Stainless Steel",
            "Inconel 600/625/718",
            "Hastelloy C-276",
            "Monel 400/K-500",
            "Duplex Stainless Steels",
            "Carbon Steel (SA-105, SA-350)",
            "Alloy 20",
            "Zirconium Alloys",
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
