import { IndustryPageLayout } from "@/components/IndustryPageLayout";
import { JsonLd } from "@/components/JsonLd";
import { createMetadata } from "@/lib/metadata";
import { faqSchema } from "@/lib/jsonld";
import { serviceLinks } from "@/lib/navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Cpu, Zap, Shield, Thermometer, CheckCircle } from "lucide-react";

export const metadata = createMetadata({
  title: "Electronic Components Machining | Precision CNC Parts",
  description:
    "Precision CNC machining for the electronics industry. Custom enclosures, heat sinks, connectors, and precision components for electronic systems.",
  path: "/industries/electronic",
});

const faqs = [
  {
    question:
      "What tolerances can Tru-Tech hold for electronic components?",
    answer:
      "We routinely hold tolerances as tight as +/-0.0005 inches for electronic components such as precision enclosures, heat sinks, and connector housings. Our CNC machining processes are optimized for the fine features and dimensional accuracy that electronic assemblies demand, and every part is verified with calibrated inspection equipment before shipment.",
  },
  {
    question:
      "Which materials does Tru-Tech use for electronic component machining?",
    answer:
      "We machine a wide range of materials suited to electronic applications, including 6061 and 7075 aluminum for lightweight enclosures and heat sinks, copper and copper alloys for high-conductivity thermal management parts, brass for connector housings, and stainless steel for structural or shielding components. We can also work with specialty alloys when your design requires specific electrical or thermal properties.",
  },
  {
    question:
      "Can Tru-Tech produce both prototypes and production runs of electronic parts?",
    answer:
      "Yes. We support the full product lifecycle, from single-piece prototypes for design validation through to medium and high-volume production runs. Our flexible scheduling and quick-turn capabilities mean you can iterate on designs quickly during development and then transition seamlessly into production quantities without changing suppliers.",
  },
  {
    question:
      "How does Tru-Tech ensure quality for precision electronic components?",
    answer:
      "Quality is embedded in every step of our process. We are AS9100 and ISO 9001:2015 certified, and we perform in-process inspections as well as final dimensional verification on all electronic components. For critical features such as mating surfaces, bore alignments, and thermal interface flatness, we use coordinate measuring machines (CMMs) and optical comparators to confirm that every part meets specification.",
  },
  {
    question:
      "Does Tru-Tech offer surface finishing for electronic parts?",
    answer:
      "We offer a variety of surface finishes commonly required for electronic components, including anodizing (clear and color) for aluminum enclosures, chromate conversion coatings for corrosion resistance, nickel plating for conductivity and wear resistance, and precision-polished surfaces for thermal interface applications. We coordinate finishing operations so that you receive complete, ready-to-assemble parts.",
  },
];

export default function ElectronicPage() {
  return (
    <IndustryPageLayout
      title="Electronic Industry Manufacturing"
      subtitle="High-precision components for electronic systems and assemblies"
      description="Precision CNC machining for electronic industry applications."
      path="/industries/electronic"
      relatedServices={serviceLinks}
    >
      <JsonLd data={faqSchema(faqs)} />

      {/* Introduction */}
      <section className="prose prose-lg max-w-none mb-16">
        <p className="text-xl text-gray-600 leading-relaxed">
          The electronics industry demands components manufactured to exacting
          standards, where dimensional accuracy, superior surface finishes, and
          lot-to-lot consistency are non-negotiable. At Tru-Tech Precision, we
          specialize in CNC machining of electronic components that meet these
          rigorous requirements, including custom enclosures, heat sinks,
          connector housings, RF/EMI shielding parts, and specialized mounting
          hardware. Our deep understanding of the materials and tolerances
          critical to electronic assemblies allows us to deliver parts that
          perform reliably in demanding operating environments, whether the
          application involves high-frequency signal integrity, efficient
          thermal dissipation, or electromagnetic compatibility.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed">
          From prototype development through full production, Tru-Tech serves
          as a single-source manufacturing partner for electronic industry
          OEMs and contract manufacturers. We work with aluminum, copper,
          brass, stainless steel, and specialty alloys to produce precision
          components that satisfy the thermal, electrical, and mechanical
          requirements of modern electronic systems. Our AS9100 and ISO
          9001:2015 certifications reflect the disciplined quality management
          system behind every part we ship. Whether your project calls for
          tight-tolerance aluminum machining of a complex heat sink geometry or
          a production run of shielded connector housings, Tru-Tech has the
          capacity, expertise, and commitment to quality that the electronics
          industry requires.
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
              icon: Cpu,
              title: "Precision Enclosures",
              desc: "We manufacture custom enclosures and housings for sensitive electronic equipment, machined from solid billet for maximum structural integrity and shielding effectiveness. Each enclosure is produced with precise cutouts for connectors, displays, switches, and ventilation, and can incorporate features such as card guides, standoffs, and gasket grooves directly into the design. Our tight-tolerance machining ensures reliable mating between enclosure halves and consistent fitment of internal assemblies, reducing integration time on your production floor.",
            },
            {
              icon: Thermometer,
              title: "Thermal Management",
              desc: "Effective heat dissipation is critical to electronic system reliability. Tru-Tech machines heat sinks, cold plates, and thermal interface components from high-conductivity aluminum and copper alloys. We produce complex fin geometries, micro-channel structures, and custom mounting configurations that maximize thermal transfer while meeting tight dimensional requirements. Whether your design calls for a compact finned heat sink or a liquid-cooled cold plate with intricate internal passages, we deliver parts with the surface flatness and finish quality needed for optimal thermal contact.",
            },
            {
              icon: Shield,
              title: "RF/EMI Shielding Components",
              desc: "Electronic systems operating in environments with electromagnetic interference require precision-machined shielding components to maintain signal integrity and regulatory compliance. Tru-Tech manufactures RF/EMI shielding cans, cavity filters, waveguide assemblies, and shielded compartment dividers with the dimensional accuracy needed for effective attenuation across target frequency ranges. We machine features such as knife-edge contacts, tongue-and-groove joints, and gasket channels that ensure reliable shielding performance after assembly.",
            },
            {
              icon: Zap,
              title: "Connector Housings",
              desc: "Connectors are the interface points where reliability matters most. We produce custom connector housings and bodies from brass, aluminum, and stainless steel with the bore accuracy, concentricity, and surface finish required for secure electrical contact and repeatable mating cycles. Our CNC machining capabilities accommodate complex multi-pin configurations, keying features, and threaded coupling mechanisms. Each connector housing is inspected to verify critical dimensions, ensuring consistent performance in your electronic assemblies.",
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

      {/* Common Electronic Applications */}
      <section className="mb-16 bg-gray-50 p-8 rounded-lg">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Common Electronic Applications
        </h2>
        <p className="text-gray-600 mb-6">
          Our CNC machining services support a broad range of electronic
          industry applications. Below are some of the most common component
          types we produce for electronics OEMs and contract manufacturers.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "Custom enclosures",
            "Heat sinks",
            "Connector housings",
            "Waveguides",
            "Chassis & frames",
            "Mounting brackets",
            "Terminal blocks",
            "Sensor housings",
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

      {/* Why Choose Tru-Tech for Electronics */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Why Choose Tru-Tech for Electronics
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Tight Tolerances as Standard",
              desc: "Electronic components often require tolerances of +/-0.0005 inches or better. Our CNC machining processes are set up to achieve these specifications consistently, run after run.",
            },
            {
              title: "Material Expertise",
              desc: "We work daily with the aluminum alloys, copper, brass, and specialty metals used in electronic applications, and understand how each material behaves during machining to deliver optimal results.",
            },
            {
              title: "Prototype to Production",
              desc: "From first-article prototypes through volume production, we provide a seamless transition that keeps your project on schedule without compromising quality or changing suppliers.",
            },
            {
              title: "Certified Quality System",
              desc: "Our AS9100 and ISO 9001:2015 certifications ensure that every electronic component is manufactured under a rigorous quality management system with full traceability and documentation.",
            },
            {
              title: "Surface Finish Capabilities",
              desc: "We offer anodizing, chromate conversion, nickel plating, and precision-polished finishes to meet the functional and cosmetic requirements of electronic assemblies.",
            },
            {
              title: "Responsive Communication",
              desc: "Our engineering team works closely with your designers to review manufacturability, suggest improvements, and ensure that every part meets your functional and dimensional requirements.",
            },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <CheckCircle className="w-6 h-6 text-[#17135F]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`faq-${index}`}>
              <AccordionTrigger className="text-left text-lg font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </IndustryPageLayout>
  );
}
