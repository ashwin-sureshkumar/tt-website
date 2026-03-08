import { ServicePageLayout } from "@/components/ServicePageLayout";
import { createMetadata } from "@/lib/metadata";
import { industryLinks } from "@/lib/navigation";
import { FileSearch, ClipboardCheck, Package, MessageSquare } from "lucide-react";

export const metadata = createMetadata({
  title: "Engineering Services",
  description:
    "Expert engineering services including DFM consultation, deviation handling, material procurement, and design optimization for precision manufacturing.",
  path: "/services/engineering-service",
});

const services = [
  {
    icon: FileSearch,
    title: "Design for Manufacturability (DFM)",
    description:
      "Our engineering team reviews your designs before production begins, identifying potential manufacturing challenges and suggesting optimizations. We help reduce costs, improve part quality, and shorten lead times by recommending design modifications that maintain performance while enhancing manufacturability. DFM review is complimentary for all new projects.",
  },
  {
    icon: ClipboardCheck,
    title: "Deviation & Non-Conformance Handling",
    description:
      "When discrepancies arise between design intent and manufacturing reality, our engineers work with your team to evaluate the impact and propose solutions. We manage the deviation request process from initial documentation through final disposition, ensuring every decision is traceable and compliant with your quality requirements.",
  },
  {
    icon: Package,
    title: "Material Procurement & Supply Chain",
    description:
      "We actively seek and evaluate suppliers into our approved supplier list, requiring Material Test Reports (MTRs) for everything we procure. We also work with OEM-approved supplier lists as flowed down by supply agreements. Materials include aluminum, stainless steel, brass, Inconel, Torlon, and engineering plastics.",
  },
  {
    icon: MessageSquare,
    title: "Technical Consultation",
    description:
      "Our experienced engineers are available to discuss your project requirements, recommend manufacturing approaches, and help you select the right materials and processes for your application. Whether you are developing a new product or optimizing an existing design, we provide the technical expertise you need.",
  },
];

const faqs = [
  {
    question: "What is included in your DFM review?",
    answer:
      "Our DFM review covers dimensional feasibility, tolerance analysis, material selection recommendations, surface finish achievability, tooling considerations, and cost optimization suggestions. We provide a detailed report with recommended changes and their expected impact on cost and lead time. This service is provided at no cost for all new projects.",
  },
  {
    question: "How do you handle deviation requests?",
    answer:
      "We follow a structured deviation request process that includes documenting the non-conformance, performing an engineering assessment of fit, form, and function impact, and presenting disposition options (use-as-is, rework, or scrap) with supporting data. All deviations are tracked in our quality management system with full traceability.",
  },
  {
    question: "Can you source specialty or exotic materials?",
    answer:
      "Yes, we have established relationships with certified suppliers for a wide range of standard and exotic materials including titanium alloys, Inconel, Hastelloy, and other high-performance alloys. All materials are procured with full mill certifications and material test reports to meet your traceability requirements.",
  },
  {
    question: "Do you offer reverse engineering services?",
    answer:
      "Yes, we can reverse-engineer existing components using our CMM and measurement equipment to create detailed engineering drawings and 3D models. This is particularly useful when original drawings are unavailable or when you need to reproduce legacy parts.",
  },
];

export default function EngineeringServicePage() {
  return (
    <ServicePageLayout
      title="Engineering Services"
      subtitle="Expert engineering support from DFM consultation to material procurement"
      description="Expert engineering services including DFM consultation, deviation handling, and material procurement."
      path="/services/engineering-service"
      faqs={faqs}
      relatedIndustries={industryLinks}
    >
      {/* Introduction */}
      <section className="prose prose-lg max-w-none mb-16">
        <p className="text-xl text-gray-600 leading-relaxed">
          At Tru-Tech Precision, our engineering services extend well beyond the machine shop floor.
          We believe that great manufacturing starts with great engineering — and our team is here to
          support you from initial concept through final delivery. Our engineers bring decades of
          combined experience in precision machining for aerospace, nuclear, and other
          demanding industries.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed">
          Whether you need help optimizing a design for manufacturability, managing a complex deviation
          request, sourcing certified materials, or simply discussing the best approach for your next
          project, our engineering team is ready to help. We work as an extension of your team,
          bringing shop-floor expertise to every conversation.
        </p>
      </section>

      {/* Services Grid */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          What We Offer
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-[#17135F] rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Pre & Post Processes */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Pre & Post Processing Services
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          We coordinate a full range of secondary processes through our network of approved vendors,
          selected based on technical drawing specifications and our Approved Supplier List (ASL).
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            "Heat Treatment",
            "Nickel Plating",
            "Anodizing",
            "Painting & Priming",
            "Chemical Conversion",
            "Passivation",
          ].map((process) => (
            <div
              key={process}
              className="bg-gray-50 px-4 py-3 rounded-lg text-sm font-medium text-gray-700 text-center"
            >
              {process}
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="mb-16 bg-gray-50 p-8 rounded-lg">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Our Engineering Process
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              step: "1",
              title: "Review",
              desc: "We review your drawings, models, and specifications to understand requirements.",
            },
            {
              step: "2",
              title: "Analyze",
              desc: "Our engineers analyze manufacturability, identify risks, and develop process plans.",
            },
            {
              step: "3",
              title: "Recommend",
              desc: "We present recommendations with cost and lead time impact analysis.",
            },
            {
              step: "4",
              title: "Execute",
              desc: "Approved plans are documented and handed off to our manufacturing team.",
            },
          ].map((item) => (
            <div key={item.step} className="text-center">
              <div className="w-12 h-12 mx-auto bg-[#17135F] text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                {item.step}
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </ServicePageLayout>
  );
}
