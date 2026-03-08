import { IndustryPageLayout } from "@/components/IndustryPageLayout";
import { JsonLd } from "@/components/JsonLd";
import { createMetadata } from "@/lib/metadata";
import { faqSchema } from "@/lib/jsonld";
import { serviceLinks } from "@/lib/navigation";
import {
  Rocket,
  Feather,
  Shield,
  Microscope,
  FileCheck,
  Orbit,
} from "lucide-react";

export const metadata = createMetadata({
  title: "Space Industry CNC Machining | Flight-Qualified Parts",
  description:
    "Precision CNC machining for the space industry. Components engineered for extreme environments — vacuum, radiation, thermal cycling, and vibration.",
  path: "/industries/space",
});

const faqs = [
  {
    question:
      "What materials does Tru-Tech machine for space CNC machining applications?",
    answer:
      "We machine a wide range of space-qualified materials including aluminum alloys (6061-T6, 7075-T7351), titanium alloys (Ti-6Al-4V), stainless steels, Invar 36, Kovar, copper alloys, and engineering plastics such as PEEK and Vespel. Material selection depends on the specific mission requirements — thermal conductivity, coefficient of thermal expansion, weight, and radiation resistance all factor into the choice.",
  },
  {
    question:
      "How does Tru-Tech ensure traceability for flight-qualified parts?",
    answer:
      "Every flight-qualified part we manufacture is accompanied by a complete traceability package. This includes raw material mill certifications, in-process inspection records, final dimensional reports, and any special process certifications (anodizing, plating, heat treatment). Our AS9100 quality management system ensures that every step — from material receipt through final shipment — is documented and traceable to specific lot numbers, operators, and dates.",
  },
  {
    question:
      "Can Tru-Tech handle both prototype and production quantities of satellite components?",
    answer:
      "Yes. We regularly support space programs from early-stage prototype development through full production of flight hardware. Our flexible shop floor allows us to efficiently produce one-off engineering models and qualification units, then scale to repeat production runs for constellation programs or multi-unit missions. We maintain consistent quality and process control regardless of quantity.",
  },
  {
    question:
      "What quality certifications does Tru-Tech hold for space component manufacturing?",
    answer:
      "Tru-Tech is AS9100 certified, which is the internationally recognized quality management standard for the aerospace and space industries. This certification covers our entire operation — from order entry and planning through machining, inspection, and shipping. AS9100 builds on ISO 9001 requirements with additional controls for product safety, counterfeit part prevention, and process accountability that space programs demand.",
  },
  {
    question:
      "How does Tru-Tech address contamination and outgassing concerns for space hardware?",
    answer:
      "We implement contamination-controlled manufacturing practices for space hardware. This includes dedicated cleaning procedures, use of space-compatible cutting fluids and lubricants, careful handling and packaging protocols, and clean storage environments. Parts are cleaned to remove all machining residues, and we can coordinate outgassing testing to verify compliance with ASTM E595 or equivalent specifications when required by the program.",
  },
];

export default function SpacePage() {
  return (
    <IndustryPageLayout
      title="Space Industry Manufacturing"
      subtitle="Components engineered for the extreme environments of space"
      description="Precision CNC machining for space industry applications."
      path="/industries/space"
      relatedServices={serviceLinks}
    >
      <JsonLd data={faqSchema(faqs)} />

      {/* Introduction */}
      <section className="prose prose-lg max-w-none mb-16">
        <p className="text-xl text-gray-600 leading-relaxed">
          Space-grade manufacturing demands the highest levels of precision,
          reliability, and material integrity. Every component destined for orbit
          or deep space must perform flawlessly under conditions that would
          compromise ordinary hardware — sustained vacuum exposure, intense
          radiation bombardment, dramatic thermal cycling from cryogenic cold to
          searing heat, and punishing vibration loads during launch. Tru-Tech
          Precision provides space CNC machining services for satellite systems,
          launch vehicle hardware, ground support equipment, and space
          exploration missions. Our team understands that there are no second
          chances in space: once a component is integrated into a spacecraft and
          launched, it must function perfectly for the duration of the mission
          without the possibility of repair or replacement.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed">
          Our AS9100 certified quality management system provides the rigorous
          framework that space programs require. We work with a broad range of
          space-qualified materials — from lightweight aluminum alloys and
          high-strength titanium to low-expansion alloys like Invar and specialty
          engineering plastics — and maintain the complete material traceability
          chains essential for flight-qualified parts. Whether you need a single
          prototype component for a technology demonstration mission or
          production quantities of satellite components for a constellation
          program, Tru-Tech delivers the precision, documentation, and
          reliability that the space industry demands. Our experience spans
          structural hardware, thermal management systems, optical instrument
          assemblies, and electromechanical mechanism components, giving us broad
          insight into the challenges of manufacturing for extreme environments.
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
              icon: Rocket,
              title: "Extreme Environment Engineering",
              desc: "Space components face a unique combination of environmental stresses that terrestrial parts never encounter. We machine parts designed to maintain dimensional stability through thermal cycling between -150\u00B0C and +150\u00B0C, survive radiation exposure over years-long missions, and operate reliably in hard vacuum. Our understanding of how materials behave under these conditions informs every decision — from toolpath strategy and cutting parameters to surface finish specifications — ensuring that finished parts meet the demanding performance requirements of space hardware.",
            },
            {
              icon: Feather,
              title: "Lightweight Precision Components",
              desc: "Every gram matters in spacecraft design. Launch costs are measured in thousands of dollars per kilogram, making weight optimization a critical priority for every component. We specialize in machining thin-walled structures, pocket-milled housings, and weight-optimized brackets that reduce mass without sacrificing structural integrity. Our multi-axis machining capabilities allow us to produce complex contoured geometries and deep pocket features that maximize the strength-to-weight ratio of each part.",
            },
            {
              icon: FileCheck,
              title: "Complete Material Traceability",
              desc: "Flight-qualified parts require an unbroken chain of documentation from raw material to finished component. Tru-Tech maintains complete traceability for every part we manufacture, including mill certifications, heat lot tracking, in-process inspection records, final dimensional reports, and special process certifications. Our AS9100 quality system ensures that every operation is recorded, every measurement is documented, and every part can be traced back to its source material and manufacturing history.",
            },
            {
              icon: Shield,
              title: "Contamination-Controlled Manufacturing",
              desc: "Spacecraft components must be free from particulate and molecular contaminants that could outgas in vacuum, deposit on sensitive optics, or interfere with mechanism operation. We implement rigorous cleaning procedures, use space-compatible cutting fluids, and follow careful handling and packaging protocols to deliver parts that meet stringent cleanliness specifications. When required, we coordinate outgassing testing and verification to ensure compliance with ASTM E595 and similar standards.",
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
                <p className="text-gray-600">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Why Choose Tru-Tech for Space */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Why Choose Tru-Tech for Space
        </h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-gray-600 leading-relaxed">
            Space programs require a manufacturing partner that understands the
            stakes involved. A single nonconforming part can delay a launch,
            compromise mission performance, or lead to outright failure in an
            environment where repair is impossible. Tru-Tech brings the
            combination of precision machining capability, quality system rigor,
            and space industry experience that programs need to move forward with
            confidence.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our AS9100 certification is not just a credential — it is the
            foundation of how we operate. Every process is controlled, every
            measurement is recorded, and every part ships with the documentation
            package your program requires. We invest in our team and our
            equipment to stay at the forefront of precision manufacturing, and we
            approach every space project with the attention to detail and sense
            of responsibility that flight hardware demands.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            From rapid-turnaround prototypes for early mission phases through
            production runs of flight-qualified parts, Tru-Tech is ready to
            support your space program. We welcome the opportunity to review your
            requirements, discuss material options, and develop a manufacturing
            plan that meets your technical specifications, schedule, and budget.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {faq.question}
              </h3>
              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </IndustryPageLayout>
  );
}
