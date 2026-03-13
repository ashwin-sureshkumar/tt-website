import { ServicePageLayout } from "@/components/ServicePageLayout";
import { createMetadata } from "@/lib/metadata";
import { industryLinks } from "@/lib/navigation";
import { Cog, Gauge, Layers, Target } from "lucide-react";

export const metadata = createMetadata({
  title: "CNC Machining Services | 5-Axis Milling & Turning",
  description:
    "Precision CNC machining services including lathe turning, 3-5 axis milling, and complex part manufacturing. Tight tolerances, superior surface finishes. AS9100 certified.",
  path: "/services/cnc-machining",
});

const capabilities = [
  {
    icon: Target,
    title: "5-Axis CNC Machining",
    description:
      "High-tolerance, complex part production with full trunnion pivot and 360° table rotation. Our 5-axis capability enables intricate contoured surfaces, undercuts, and compound angles in a single setup — reducing lead times and improving accuracy.",
  },
  {
    icon: Layers,
    title: "3 & 4-Axis Milling",
    description:
      "Versatile multi-axis milling for high-volume production and prototypes. Our 4th-axis capability handles larger, more complex parts while standard 3-axis milling is ideal for brackets, housings, and structural components.",
  },
  {
    icon: Cog,
    title: "CNC Turning",
    description:
      "Precision CNC lathe turning for cylindrical components, shafts, and threaded parts. Multiple turning centers with varying chuck sizes and travel ranges allow us to handle a wide range of part diameters and lengths.",
  },
  {
    icon: Gauge,
    title: "CAD/CAM & DFM Expertise",
    description:
      "Advanced CAD/CAM programming for complex toolpaths and design for manufacturability (DFM) support. We optimize your designs for production efficiency while maintaining performance requirements.",
  },
];

const materials = [
  "Aluminum (6061, 7075, 2024)",
  "Stainless Steel (303, 304, 316, 17-4 PH)",
  "Titanium (Grade 2, Grade 5 Ti-6Al-4V)",
  "Inconel (625, 718)",
  "Tool Steel (A2, D2, H13, S7)",
  "Brass & Bronze",
  "Carbon Steel (1018, 4130, 4140, 4340)",
  "Copper Alloys",
  "Hastelloy",
  "Kovar & Invar",
  "Torlon (PAI)",
  "Engineering Plastics",
];

const faqs = [
  {
    question: "What tolerances can Tru-Tech achieve with CNC machining?",
    answer:
      "We routinely hold tolerances of ±0.0005\" (±0.0127mm) on critical dimensions. For ultra-precision work, we can achieve tolerances as tight as ±0.0001\" (±0.00254mm) depending on material, geometry, and feature size. Every part is verified with calibrated inspection equipment.",
  },
  {
    question: "What is the maximum part size you can machine?",
    answer:
      "Our milling centers accommodate parts up to 40\" x 20\" x 25\" (1016mm x 508mm x 635mm). Our lathes can handle diameters up to 18\" (457mm) with a turning length of 24\" (610mm). For larger or unusual configurations, contact our engineering team to discuss your requirements.",
  },
  {
    question: "What materials do you work with?",
    answer:
      "We machine a wide range of metals including aluminum alloys, stainless steels, titanium, Inconel, tool steels, carbon steels, brass, copper alloys, Hastelloy, and specialty alloys like Kovar and Invar. Our engineering team can advise on material selection for your specific application.",
  },
  {
    question: "Do you provide surface finishing services?",
    answer:
      "Yes, we offer several in-house finishing options including deburring and bead blasting. We also coordinate anodizing, plating, painting, passivation, and heat treatment through our network of qualified vendors with full traceability maintained.",
  },
  {
    question: "What is your typical lead time for CNC machined parts?",
    answer:
      "Standard lead times range from 2-4 weeks depending on complexity, quantity, and material availability. For urgent requirements, our AOG & Speed Shop service offers expedited turnaround — in some cases within 24-48 hours. Contact us for a delivery estimate on your specific project.",
  },
];

export default function CNCMachiningPage() {
  return (
    <ServicePageLayout
      title="CNC Machining Services"
      subtitle="State-of-the-art CNC machining for complex parts with tight tolerances and superior surface finishes"
      description="Precision CNC machining services including lathe turning, 3-5 axis milling, and complex part manufacturing."
      path="/services/cnc-machining"
      faqs={faqs}
      relatedIndustries={industryLinks}
    >
      {/* Introduction */}
      <section className="prose prose-lg max-w-none mb-16">
        <p className="text-xl text-gray-600 leading-relaxed">
          At Tru-Tech Precision, CNC machining is at the core of everything we do. Our facility houses
          a range of advanced CNC turning centers and multi-axis milling machines operated by experienced
          machinists who understand the critical demands of aerospace, nuclear, and space applications.
          Whether you need a single prototype or a production run of thousands, we deliver parts that meet
          your exact specifications — every time.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed">
          Our AS9100 and ISO 9001 certified quality management system ensures that every component
          is manufactured, inspected, and documented to the highest industry standards. From initial
          DFM review through final inspection, our team works closely with you to optimize designs
          for manufacturability while maintaining the performance characteristics your application demands.
        </p>
      </section>

      {/* Capabilities */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Our CNC Capabilities
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {capabilities.map((cap, index) => {
            const Icon = cap.icon;
            return (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-[#17135F] rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {cap.title}
                </h3>
                <p className="text-gray-600">{cap.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Materials */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Materials We Machine
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          We work with a comprehensive range of metals and alloys, sourced from certified suppliers
          with full material traceability. Our machinists have deep experience with exotic and
          difficult-to-machine materials commonly required in aerospace applications.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {materials.map((material) => (
            <div
              key={material}
              className="bg-gray-50 px-4 py-3 rounded-lg text-sm font-medium text-gray-700 text-center"
            >
              {material}
            </div>
          ))}
        </div>
      </section>

      {/* Tolerances & Quality */}
      <section className="mb-16 bg-gray-50 p-8 rounded-lg">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Tolerances & Quality Standards
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold text-[#17135F] mb-2">
              Standard Tolerances
            </h3>
            <p className="text-gray-600">
              ±0.005&quot; (±0.127mm) for non-critical features. All parts manufactured
              to print specifications with documented inspection results.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-[#17135F] mb-2">
              Precision Tolerances
            </h3>
            <p className="text-gray-600">
              ±0.0005&quot; (±0.0127mm) on critical dimensions. Achieved through
              careful process control, temperature-controlled environment, and
              calibrated inspection equipment.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-[#17135F] mb-2">
              Surface Finish
            </h3>
            <p className="text-gray-600">
              Standard 32 Ra to ultra-fine 8 Ra or better. Surface finish
              requirements are verified with profilometer testing and documented
              on inspection reports.
            </p>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
}
