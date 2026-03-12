import { IndustryPageLayout } from "@/components/IndustryPageLayout";
import { JsonLd } from "@/components/JsonLd";
import { createMetadata } from "@/lib/metadata";
import { faqSchema } from "@/lib/jsonld";
import { serviceLinks } from "@/lib/navigation";
import { Shield, Anchor, FileCheck, CheckCircle, Droplets, Wrench } from "lucide-react";

export const metadata = createMetadata({
  title: "Marine CNC Machining | Precision Components for Marine & Offshore",
  description:
    "Precision CNC machining for the marine and offshore industry. Corrosion-resistant components for vessels, propulsion systems, and offshore platforms manufactured with full traceability.",
  path: "/industries/marine",
});

const faqs = [
  {
    question: "What types of marine components does Tru-Tech manufacture?",
    answer:
      "We manufacture a wide range of precision-machined marine components including propulsion system parts, valve bodies, pump housings, shaft couplings, hydraulic manifolds, deck hardware fittings, and custom components for marine engines and offshore equipment. Our capabilities support both new-build construction and maintenance, repair, and overhaul (MRO) requirements.",
  },
  {
    question: "What materials does Tru-Tech machine for marine applications?",
    answer:
      "We have extensive experience machining marine-grade materials including stainless steels (316, 316L, duplex, super duplex), nickel-aluminum bronze, Monel, Inconel, copper-nickel alloys, and marine-grade aluminum. Our machinists understand the specific requirements for materials that must withstand saltwater exposure, high pressures, and demanding offshore environments.",
  },
  {
    question: "Does Tru-Tech provide documentation and traceability for marine parts?",
    answer:
      "Yes. Every marine component we produce comes with complete documentation including material certifications, dimensional inspection reports, and certificates of conformity. Our AS9100 and ISO 9001 certified quality management system ensures full traceability from raw material through finished part, meeting the documentation requirements of classification societies and marine OEMs.",
  },
  {
    question: "Can Tru-Tech support urgent marine repair and MRO needs?",
    answer:
      "Absolutely. Our AOG & Speed Shop service is available for urgent marine repair and replacement part needs. We understand that vessel downtime is extremely costly, and we can manufacture critical replacement components with rapid turnaround times to get your operations back up and running as quickly as possible.",
  },
  {
    question: "What quality certifications are relevant to your marine work?",
    answer:
      "Our AS9100 Rev D and ISO 9001:2015 certifications provide the quality management framework for all our marine manufacturing. These certifications ensure rigorous process control, material traceability, and documentation standards that meet or exceed the requirements of major classification societies and marine industry specifications.",
  },
];

export default function MarinePage() {
  return (
    <>
      <JsonLd data={faqSchema(faqs)} />
      <IndustryPageLayout
        title="Marine Manufacturing"
        subtitle="Precision components for marine vessels and offshore applications"
        description="Precision CNC machining for marine and offshore applications."
        path="/industries/marine"
        relatedServices={serviceLinks}
      >
        {/* Introduction */}
        <section className="prose prose-lg max-w-none mb-16">
          <p className="text-xl text-gray-600 leading-relaxed">
            The marine and offshore industry demands components that perform reliably in some of the
            harshest operating environments on earth. Tru-Tech Precision manufactures precision-machined
            parts for marine vessels, propulsion systems, and offshore platforms using corrosion-resistant
            alloys and marine-grade materials. Our AS9100 and ISO 9001 certified quality system ensures
            that every component meets the strict dimensional, material, and documentation requirements
            demanded by this critical industry.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            From propulsion components and hydraulic system parts to custom deck fittings and offshore
            equipment, our team has the machining expertise and material knowledge to deliver marine
            components that withstand saltwater exposure, extreme pressures, and continuous use. We
            support both new-build programs and maintenance, repair, and overhaul operations with the
            same commitment to quality and traceability.
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
                icon: Anchor,
                title: "Marine-Grade Components",
                desc: "We manufacture components for marine propulsion systems, deck machinery, hydraulic systems, and offshore equipment. Our machinists understand the critical requirements of parts that must perform reliably in harsh marine environments, applying the appropriate tolerances, surface finishes, and material selections to ensure long service life.",
              },
              {
                icon: Droplets,
                title: "Corrosion-Resistant Materials",
                desc: "Marine applications require materials that resist saltwater corrosion and extreme environmental exposure. We have deep experience machining marine-grade stainless steels, nickel-aluminum bronze, Monel, Inconel, copper-nickel alloys, and duplex stainless steels — each with its specific cutting requirements and process parameters.",
              },
              {
                icon: Shield,
                title: "Certified Quality System",
                desc: "Our AS9100 and ISO 9001 certified quality management system provides the rigorous process control, inspection, and documentation that marine applications demand. Every part is produced with full material traceability, dimensional verification, and documentation packages that satisfy classification society and OEM requirements.",
              },
              {
                icon: Wrench,
                title: "MRO & Rapid Turnaround",
                desc: "We understand that vessel downtime costs money. Our AOG & Speed Shop service supports urgent marine repair and replacement part needs with rapid turnaround. We can reverse-engineer worn or damaged components, source materials quickly, and deliver precision replacement parts to minimize your operational downtime.",
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

        {/* Why Choose Tru-Tech for Marine */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Why Choose Tru-Tech for Marine Manufacturing
          </h2>
          <p className="text-gray-600 mb-6">
            Marine and offshore components require a manufacturing partner with the right material
            expertise, quality systems, and responsiveness. Here is what sets Tru-Tech apart:
          </p>
          <ul className="space-y-4">
            {[
              {
                icon: Shield,
                text: "AS9100 & ISO 9001 Certified — Our certified quality management system ensures every marine component meets rigorous standards for dimensional accuracy, material integrity, and documentation. The same quality discipline trusted by aerospace and nuclear customers applies to every marine part we produce.",
              },
              {
                icon: CheckCircle,
                text: "Marine Material Expertise — Our machinists have extensive experience with corrosion-resistant alloys including duplex and super duplex stainless steels, nickel-aluminum bronze, Monel, and Inconel. We understand the machining characteristics and process requirements unique to these demanding materials.",
              },
              {
                icon: FileCheck,
                text: "Full Traceability & Documentation — Every marine component ships with complete documentation including material certifications, dimensional inspection reports, and certificates of conformity. We provide the traceability and paperwork required by classification societies and marine OEMs.",
              },
              {
                icon: Wrench,
                text: "Rapid Response for MRO — Our AOG & Speed Shop service provides fast turnaround for urgent marine repair and replacement parts. We minimize vessel downtime by manufacturing critical components quickly without compromising quality.",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <li key={i} className="flex items-start gap-4 bg-gray-50 p-5 rounded-lg">
                  <div className="w-10 h-10 bg-[#17135F] rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-gray-600 leading-relaxed">{item.text}</p>
                </li>
              );
            })}
          </ul>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </IndustryPageLayout>
    </>
  );
}
