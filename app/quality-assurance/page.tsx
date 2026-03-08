import { PageHeader } from "@/components/PageHeader";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema, faqSchema } from "@/lib/jsonld";
import { createMetadata } from "@/lib/metadata";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Shield, Award, FileCheck, Microscope, ClipboardCheck, Search } from "lucide-react";

export const metadata = createMetadata({
  title: "Quality Assurance | AS9100 & ISO 9001 Certified",
  description:
    "AS9100 and ISO 9001 certified quality assurance at Tru-Tech Precision. Comprehensive inspection, complete traceability, and rigorous quality control for every component.",
  path: "/quality-assurance",
});

const faqs = [
  {
    question: "What quality certifications does Tru-Tech hold?",
    answer:
      "Tru-Tech Precision is certified to AS9100 Rev D (aerospace quality management) and ISO 9001:2015 (quality management systems). These certifications are maintained through annual surveillance audits and periodic recertification audits by accredited registrars.",
  },
  {
    question: "What inspection equipment do you use?",
    answer:
      "Our quality lab is equipped with coordinate measuring machines (CMM), optical comparators, surface profilometers, hardness testers, and a full range of calibrated hand tools including micrometers, calipers, bore gauges, and thread gauges. All equipment is maintained on a regular calibration schedule traceable to national standards.",
  },
  {
    question: "Do you provide first article inspection (FAI) reports?",
    answer:
      "Yes, we provide first article inspection reports per AS9102 for all new parts and after significant process changes. FAI reports include full dimensional verification against the engineering drawing, material certification review, and process documentation.",
  },
  {
    question: "How do you handle non-conforming material?",
    answer:
      "Non-conforming material is immediately quarantined and documented in our quality system. Our Material Review Board (MRB) evaluates each non-conformance and determines the appropriate disposition — use-as-is (with customer approval), rework, or scrap. All decisions are documented with supporting rationale.",
  },
  {
    question: "Can you meet customer-specific quality requirements?",
    answer:
      "Yes, we routinely work with customer-specific quality requirements, special process specifications, and flow-down requirements from prime contractors. We review all quality requirements at the time of order entry and ensure our processes are aligned before production begins.",
  },
];

export default function QualityAssurancePage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          name: "Quality Assurance",
          description:
            "AS9100 and ISO 9001 certified quality assurance at Tru-Tech Precision.",
          path: "/quality-assurance",
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "Quality Assurance", href: "/quality-assurance" },
        ])}
      />
      <JsonLd data={faqSchema(faqs)} />

      <PageHeader
        title="Quality Assurance"
        subtitle="Our commitment to quality is unwavering — AS9100 and ISO 9001 certified"
      />
      <BreadcrumbNav items={[{ label: "Quality Assurance" }]} />

      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <section className="prose prose-lg max-w-none mb-16">
            <p className="text-xl text-gray-600 leading-relaxed">
              At Tru-Tech Precision, quality is not a department — it is a culture. Every member of
              our team, from the front office to the shop floor, takes personal responsibility for
              the quality of the work they produce. Our AS9100 and ISO 9001 certified quality
              management system provides the framework, but it is our people and their commitment
              to excellence that truly sets our quality apart.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We understand that in aerospace, nuclear, and space applications, quality is
              not just about meeting dimensions — it is about safety, reliability, and trust. Every
              component we manufacture is inspected, documented, and traceable because we know our
              parts go into critical systems where performance matters.
            </p>
          </section>

          {/* Certifications */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Certifications & Standards
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-[#17135F] rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  AS9100 Rev D
                </h3>
                <p className="text-gray-600">
                  The international standard for quality management in aerospace.
                  AS9100 incorporates all ISO 9001 requirements and adds aerospace-specific
                  requirements for product safety, configuration management, risk management,
                  and supply chain management. Our certification is maintained through regular
                  surveillance and recertification audits.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-[#17135F] rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  ISO 9001:2015
                </h3>
                <p className="text-gray-600">
                  The globally recognized standard for quality management systems. ISO 9001
                  certification demonstrates our commitment to consistent quality, customer
                  satisfaction, and continuous improvement. Our quality system is designed around
                  the process approach and risk-based thinking principles of this standard.
                </p>
              </div>
            </div>
          </section>

          {/* Quality Process */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Our Quality Process
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: FileCheck,
                  title: "Incoming Inspection",
                  desc: "All raw materials are verified against purchase orders, specifications, and certifications of conformity. Material is quarantined until inspection is complete and approved.",
                },
                {
                  icon: Search,
                  title: "In-Process Verification",
                  desc: "Critical dimensions are verified during production at defined intervals. First-off, in-process, and last-off checks ensure consistent quality throughout the production run.",
                },
                {
                  icon: Microscope,
                  title: "Final Inspection",
                  desc: "Every completed part undergoes comprehensive dimensional inspection against the engineering drawing. Surface finish, visual appearance, and workmanship are also verified.",
                },
                {
                  icon: ClipboardCheck,
                  title: "Documentation Review",
                  desc: "Inspection reports, material certifications, process records, and certificates of conformity are compiled and reviewed before parts are released for shipment.",
                },
                {
                  icon: Shield,
                  title: "Non-Conformance Management",
                  desc: "Any discrepancy is immediately documented, quarantined, and evaluated by our Material Review Board. Corrective actions are implemented to prevent recurrence.",
                },
                {
                  icon: Award,
                  title: "Continuous Improvement",
                  desc: "We track quality metrics, analyze trends, and implement improvements through our corrective and preventive action (CAPA) system. Quality is a journey, not a destination.",
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

          {/* Quality Management Pillars */}
          <section className="mb-16 bg-[#17135F] p-8 rounded-lg text-white">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Our Quality Management Pillars
            </h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="text-xl font-bold mb-3">End-to-End Traceability</h3>
                <p className="text-gray-200">
                  Complete material and process traceability from raw stock through finished part,
                  with MTRs, CoCs, and full documentation chains.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Accuracy</h3>
                <p className="text-gray-200">
                  Calibrated measurement tools and CMM inspection ensure every dimension meets
                  specification with documented verification.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Accountability</h3>
                <p className="text-gray-200">
                  NCR management, root cause analysis, and deviation reporting ensure every issue
                  is documented, resolved, and prevented from recurring.
                </p>
              </div>
            </div>
          </section>

          {/* Inspection Equipment & Documentation */}
          <section className="mb-16 bg-gray-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Inspection & Documentation
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Our quality lab is equipped with calibrated measurement tools maintained on a regular
              calibration schedule traceable to national measurement standards.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "Coordinate Measuring Machine (CMM)",
                "Calibrated Measurement Tools",
                "First Article Inspection Reports (FAIR)",
                "Certificate of Conformance (CoC)",
                "Material Test Reports (MTR)",
                "Deviation Requests & Reports",
                "Non-Conformance Reports (NCR)",
                "Root Cause Analysis (RCA)",
                "End-to-End Traceability Records",
              ].map((item) => (
                <div
                  key={item}
                  className="bg-white px-4 py-3 rounded text-sm font-medium text-gray-700"
                >
                  {item}
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
        </div>
      </main>

      <CTASection />
    </>
  );
}
