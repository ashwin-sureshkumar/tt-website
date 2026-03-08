import { IndustryPageLayout } from "@/components/IndustryPageLayout";
import { createMetadata } from "@/lib/metadata";
import { serviceLinks } from "@/lib/navigation";
import {
  Atom,
  FileCheck,
  Shield,
  ClipboardCheck,
  Crosshair,
} from "lucide-react";

export const metadata = createMetadata({
  title: "Nuclear Industry CNC Machining | Precision Components",
  description:
    "Precision CNC machining for the nuclear industry. Nuclear-grade materials, complete traceability, and rigorous quality control for reactor components and nuclear equipment.",
  path: "/industries/nuclear",
});

const faqs = [
  {
    question:
      "What nuclear-grade materials does Tru-Tech machine?",
    answer:
      "We machine a wide range of nuclear-grade materials including 316/316L and 304/304L stainless steels, Inconel 600/625/718, Hastelloy C-276, Monel 400/K-500, duplex stainless steels, carbon steels (SA-105, SA-350), Alloy 20, and zirconium alloys. All materials are sourced from approved suppliers with full mill certifications and material test reports (MTRs) that accompany the material through every stage of production.",
  },
  {
    question:
      "How does Tru-Tech ensure traceability for nuclear CNC machining?",
    answer:
      "Traceability is built into every step of our nuclear manufacturing process. Each component is assigned a unique job traveler that links the finished part back to the original raw material heat number and mill certification. We maintain records of all process steps, inspection results, tooling used, and operator identification. This documentation creates an unbroken chain of traceability from raw material receipt through final shipment, satisfying the most stringent nuclear quality documentation requirements.",
  },
  {
    question:
      "What quality standards does Tru-Tech follow for nuclear components?",
    answer:
      "Our quality management system is designed to meet the rigorous demands of nuclear manufacturing. We follow documented procedures for material control, in-process inspection, final inspection, and records retention. Our processes align with nuclear industry expectations for quality documentation, including detailed inspection reports, material certifications, and process documentation. We work closely with our customers to ensure all applicable codes, standards, and specifications are met for each project.",
  },
  {
    question:
      "Can Tru-Tech provide the documentation packages required for nuclear parts?",
    answer:
      "Yes. We routinely provide comprehensive documentation packages that include material test reports (MTRs), certificates of conformance, detailed dimensional inspection reports, surface finish verification records, and any required non-destructive examination (NDE) reports. Our documentation packages are tailored to each customer's requirements and can include first article inspection reports, statistical process data, and any other records specified by the applicable nuclear procurement documents.",
  },
  {
    question:
      "What types of nuclear components does Tru-Tech manufacture?",
    answer:
      "We manufacture a broad range of precision components for nuclear applications, including reactor vessel internals, heat exchanger parts, valve bodies and trim, pump shafts and impellers, instrumentation housings, control rod mechanism components, piping fittings, and radiation shielding components. Our capabilities span both prototype and production quantities, and we work with customers across nuclear power generation, research facilities, and nuclear equipment suppliers.",
  },
];

export default function NuclearPage() {
  return (
    <IndustryPageLayout
      title="Nuclear Industry Manufacturing"
      subtitle="Nuclear-grade precision components with complete material traceability"
      description="Precision CNC machining for nuclear industry applications."
      path="/industries/nuclear"
      faqs={faqs}
      relatedServices={serviceLinks}
    >
      {/* Introduction */}
      <section className="prose prose-lg max-w-none mb-16">
        <p className="text-xl text-gray-600 leading-relaxed">
          Manufacturing for the nuclear industry requires an unwavering commitment to quality, safety,
          and traceability that goes far beyond standard industrial practices. At Tru-Tech Precision,
          we understand the critical nature of nuclear applications and have built our processes from the
          ground up to meet the stringent requirements of this highly regulated industry. Every component
          we produce for nuclear service undergoes rigorous inspection, documentation, and verification to
          ensure complete compliance with customer specifications and applicable codes. Our team has
          extensive experience working with the specialized materials, tight tolerances, and comprehensive
          quality documentation that nuclear projects demand, and we treat every nuclear job with the
          seriousness and attention to detail that this industry requires.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed">
          Our nuclear CNC machining experience spans components for nuclear power generation, research
          facilities, and related equipment manufacturers. We work with nuclear-grade materials including
          specialized stainless steels, Inconel, Hastelloy, Monel, and other alloys specified for nuclear
          service environments. Complete material traceability from mill certification through finished
          part is maintained and documented throughout our process, ensuring that every component can be
          traced back to its original material source. Whether you need a single prototype or a production
          run of reactor components, Tru-Tech provides the precision machining, quality documentation,
          and material expertise that nuclear applications require.
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
              icon: Atom,
              title: "Nuclear-Grade Materials",
              desc: "We source and machine materials that meet nuclear specifications, including specialized grades of stainless steel, nickel-based superalloys, and other materials certified for nuclear service environments. All materials are procured from approved suppliers with full mill certifications and material test reports (MTRs). We verify incoming material identity using positive material identification (PMI) testing to confirm alloy composition before any machining begins, ensuring that only verified, certified material enters our production process.",
            },
            {
              icon: FileCheck,
              title: "Complete Traceability",
              desc: "Every material, process step, and inspection result is documented and traceable throughout our manufacturing process. Our quality system maintains detailed records that link each finished component back to its raw material source with full certification chains. From the moment material arrives at our facility through final packaging and shipment, we maintain an unbroken chain of documentation that includes heat numbers, lot numbers, operator identification, machine records, and inspection data. This level of traceability satisfies the most demanding nuclear procurement requirements.",
            },
            {
              icon: Shield,
              title: "Rigorous Quality Control",
              desc: "Nuclear components undergo enhanced inspection protocols that go well beyond our standard quality processes. This includes additional dimensional verification at multiple stages of production, surface integrity checks, cleanliness requirements, and comprehensive documentation at every step. Our inspection team uses calibrated precision measuring equipment to verify all critical dimensions, and we perform thorough first article inspections before proceeding with production runs. Every measurement is recorded and becomes part of the permanent quality record for the component.",
            },
            {
              icon: Crosshair,
              title: "Precision Tolerances",
              desc: "Nuclear components frequently require extremely tight tolerances to ensure proper fit, function, and safety in critical applications. Our precision CNC machining capabilities allow us to consistently hold tolerances that meet the exacting demands of nuclear specifications. We understand that in nuclear service, dimensional accuracy is not just a quality metric but a safety requirement. Our process controls, environmental monitoring, and inspection protocols are designed to ensure that every feature on every part meets its specified tolerance requirements.",
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

      {/* Nuclear Materials */}
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

      {/* Why Choose Tru-Tech for Nuclear */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Why Choose Tru-Tech for Nuclear Manufacturing
        </h2>
        <p className="text-gray-600 text-lg mb-8">
          Nuclear procurement demands a manufacturing partner that understands the unique requirements
          of this industry. At Tru-Tech Precision, we combine precision CNC machining expertise with
          the disciplined quality processes and documentation practices that nuclear projects require.
          When you partner with us, you can expect:
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: FileCheck,
              title: "Comprehensive Traceability",
              desc: "Every component is fully traceable from raw material through finished part. Our documentation packages include material test reports, heat number traceability, process records, and detailed inspection reports that satisfy nuclear procurement requirements.",
            },
            {
              icon: ClipboardCheck,
              title: "Quality Documentation",
              desc: "We provide thorough documentation packages tailored to your specifications, including certificates of conformance, dimensional inspection reports, material certifications, NDE reports, and any other records required by your nuclear quality assurance program.",
            },
            {
              icon: Shield,
              title: "Material Certifications",
              desc: "All materials are sourced with full mill certifications and verified through positive material identification (PMI). We maintain strict material control procedures that prevent material mix-ups and ensure that only the specified material grade is used for your components.",
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 bg-[#17135F]/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-[#17135F]" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>
    </IndustryPageLayout>
  );
}
