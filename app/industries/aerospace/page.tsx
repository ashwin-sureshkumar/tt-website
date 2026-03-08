import { IndustryPageLayout } from "@/components/IndustryPageLayout";
import { JsonLd } from "@/components/JsonLd";
import { createMetadata } from "@/lib/metadata";
import { faqSchema } from "@/lib/jsonld";
import { serviceLinks } from "@/lib/navigation";
import { Shield, Plane, FileCheck, Wrench, Cog, CheckCircle, Layers, ClipboardCheck } from "lucide-react";

export const metadata = createMetadata({
  title: "Aerospace CNC Machining | AS9100 Certified Manufacturer",
  description:
    "AS9100 certified precision CNC machining for the aerospace industry. Aircraft components, engine parts, structural elements, and avionics housings manufactured to the highest standards.",
  path: "/industries/aerospace",
});

const faqs = [
  {
    question: "What aerospace quality certifications does Tru-Tech hold?",
    answer:
      "Tru-Tech Precision is AS9100 Rev D certified, which is the internationally recognized quality management standard for the aerospace industry. This certification covers our entire operation — from quoting and material procurement through machining, inspection, and final shipment. Our quality system ensures that every aerospace component we produce meets the strict documentation, traceability, and process control requirements demanded by the global aerospace supply chain.",
  },
  {
    question: "What materials does Tru-Tech machine for aerospace applications?",
    answer:
      "We have extensive experience machining the full range of aerospace-grade materials, including titanium alloys (such as Ti-6Al-4V), high-strength aluminum alloys (6061, 7075, 2024), nickel-based superalloys like Inconel 625 and 718, various grades of stainless steel, and specialty alloys specified by aerospace OEMs. Our machinists understand the unique cutting characteristics, tooling requirements, and process parameters each material demands to achieve tight tolerances and superior surface finishes.",
  },
  {
    question: "Does Tru-Tech provide First Article Inspection reports for aerospace parts?",
    answer:
      "Yes. We perform comprehensive First Article Inspections (FAI) in accordance with AS9102 for all new aerospace part numbers. Our FAI packages include full dimensional verification using calibrated CMM and precision instruments, material certification review, process documentation, and balloon-referenced inspection reports. We deliver FAI documentation in industry-standard formats accepted by major aerospace OEMs and Tier 1 suppliers.",
  },
  {
    question: "What types of aerospace components does Tru-Tech manufacture?",
    answer:
      "We manufacture a broad range of precision-machined aerospace components, including structural brackets and fittings, engine components, landing gear parts, avionics housings and enclosures, actuator components, fuel system parts, and specialty fasteners. Whether you need a single prototype or recurring production quantities, our aerospace CNC machining capabilities can accommodate complex geometries, tight tolerances, and demanding surface finish requirements.",
  },
  {
    question: "How does Tru-Tech ensure material traceability for aerospace parts?",
    answer:
      "Material traceability is fundamental to our aerospace manufacturing process. We procure all aerospace-grade raw materials from approved and certified sources, and every incoming material lot is verified against its mill certification before being released for production. Throughout machining, each part maintains full traceability back to the original material heat lot, batch number, and specification. Certificates of conformity accompany every shipment, giving our customers the documentation they need to satisfy their own quality and regulatory requirements.",
  },
];

export default function AerospacePage() {
  return (
    <>
      <JsonLd data={faqSchema(faqs)} />
      <IndustryPageLayout
        title="Aerospace Manufacturing"
        subtitle="AS9100 certified precision components for aircraft and aviation systems"
        description="AS9100 certified CNC machining for aerospace applications."
        path="/industries/aerospace"
        relatedServices={serviceLinks}
      >
        {/* Introduction */}
        <section className="prose prose-lg max-w-none mb-16">
          <p className="text-xl text-gray-600 leading-relaxed">
            The aerospace industry demands absolute precision and unwavering quality — and
            Tru-Tech Precision delivers on both. As an AS9100 certified precision manufacturing
            facility, we produce flight-critical components that meet the rigorous quality,
            dimensional, and traceability requirements of the global aerospace supply chain. Our
            aerospace CNC machining capabilities span a wide range of complex geometries, tight
            tolerances, and high-performance materials, enabling us to serve commercial aviation
            programs and specialized aerospace platforms alike. Every aircraft part that leaves our
            facility has been manufactured, inspected, and documented to the highest standards the
            industry requires.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our team has extensive experience partnering with major aerospace OEMs and Tier 1
            suppliers, manufacturing components that range from engine hardware and landing gear
            parts to structural brackets, avionics enclosures, and fuel system assemblies. We
            understand that aerospace precision manufacturing is about more than hitting dimensions
            on a print — it requires a disciplined quality culture, thorough process documentation,
            and a commitment to continuous improvement. Every part is produced under our AS9100
            quality management system with complete material traceability, first article inspection
            reports per AS9102, certificates of conformity, and any additional documentation our
            customers require. When you need a manufacturing partner who treats your aerospace
            program with the seriousness it deserves, Tru-Tech is ready.
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
                icon: Plane,
                title: "Flight-Critical Components",
                desc: "We manufacture components designated as flight-critical and flight-safety, applying the appropriate process controls, in-process inspections, and final verification steps these parts demand. Our operators and quality personnel understand the responsibility that comes with producing aircraft parts where reliability is paramount. From raw material verification through final dimensional inspection, every step is controlled and documented to ensure full compliance with customer and regulatory specifications.",
              },
              {
                icon: Shield,
                title: "AS9100 Certified Processes",
                desc: "Our quality management system is certified to AS9100 Rev D, the international standard for aerospace quality. This certification governs our entire operation — order review, production planning, machining, inspection, packaging, and shipment. We conduct regular internal audits, management reviews, and corrective action processes to maintain and continuously improve our quality system. Our AS9100 certification gives aerospace customers confidence that Tru-Tech operates at the level their programs require.",
              },
              {
                icon: Layers,
                title: "Material Expertise",
                desc: "Aerospace applications demand materials that perform under extreme conditions, and our machinists have deep experience working with titanium alloys, high-strength aluminum (including 7075 and 2024), Inconel superalloys, and various grades of stainless steel. We understand the unique machining characteristics of each material — optimal speeds, feeds, tooling, and coolant strategies — to achieve the tight tolerances, surface finishes, and metallurgical integrity that aerospace specifications require.",
              },
              {
                icon: FileCheck,
                title: "First Article Inspection",
                desc: "We perform thorough First Article Inspections in accordance with AS9102 for every new aerospace part number. Our FAI packages include complete dimensional verification using calibrated CMM and precision gauging, review of material certifications against specification requirements, and detailed inspection reports in industry-standard formats. These comprehensive FAI reports are accepted by major OEMs and give our customers the documented evidence they need to approve production.",
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

        {/* Common Aerospace Applications */}
        <section className="mb-16 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Common Aerospace Applications
          </h2>
          <p className="text-gray-600 mb-6">
            Our aerospace CNC machining services support a diverse range of aircraft systems and
            assemblies. Below are some of the component types we regularly produce for our
            aerospace customers:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Wrench, label: "Structural brackets" },
              { icon: Cog, label: "Fittings" },
              { icon: Cog, label: "Engine components" },
              { icon: Wrench, label: "Landing gear parts" },
              { icon: Shield, label: "Avionics housings" },
              { icon: Cog, label: "Actuator components" },
              { icon: Wrench, label: "Fuel system parts" },
              { icon: ClipboardCheck, label: "Fasteners" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="bg-white px-4 py-4 rounded text-sm font-medium text-gray-700 text-center flex flex-col items-center gap-2"
                >
                  <Icon className="w-5 h-5 text-[#17135F]" />
                  {item.label}
                </div>
              );
            })}
          </div>
        </section>

        {/* Why Choose Tru-Tech for Aerospace */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Why Choose Tru-Tech for Aerospace
          </h2>
          <p className="text-gray-600 mb-6">
            Choosing the right precision manufacturing partner is critical in aerospace, where
            quality failures can have serious consequences. Here is what sets Tru-Tech apart:
          </p>
          <ul className="space-y-4">
            {[
              {
                icon: Shield,
                text: "AS9100 Rev D Certified — Our certified quality management system ensures that every process, from material procurement to final shipment, meets the rigorous standards the aerospace industry demands. We maintain our certification through regular surveillance audits and a culture of continuous improvement.",
              },
              {
                icon: ClipboardCheck,
                text: "Full Material Traceability — Every aerospace part we produce is fully traceable back to its original material heat lot and mill certification. We maintain detailed records that enable complete traceability throughout the manufacturing process, providing our customers with the documentation and confidence they need.",
              },
              {
                icon: CheckCircle,
                text: "Decades of Aerospace Experience — Our team has built deep expertise in aerospace precision manufacturing over many years of producing aircraft parts for demanding programs. We understand aerospace specifications, material requirements, and the level of documentation and communication these programs require.",
              },
              {
                icon: FileCheck,
                text: "Comprehensive Documentation Packages — We provide complete documentation with every aerospace shipment, including certificates of conformity, material certifications, dimensional inspection reports, First Article Inspection packages per AS9102, and any additional customer-specific documentation requirements.",
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
