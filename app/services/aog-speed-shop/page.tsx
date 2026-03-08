import { ServicePageLayout } from "@/components/ServicePageLayout";
import { createMetadata } from "@/lib/metadata";
import { industryLinks } from "@/lib/navigation";
import { Zap, Clock, Plane, Phone } from "lucide-react";

export const metadata = createMetadata({
  title: "AOG & Speed Shop Service",
  description:
    "Rapid turnaround CNC machining for AOG (Aircraft on Ground) emergencies and urgent manufacturing needs. 24-48 hour turnaround available.",
  path: "/services/aog-speed-shop",
});

const features = [
  {
    icon: Zap,
    title: "Rapid Turnaround",
    description:
      "When standard lead times are not an option, our speed shop delivers. We prioritize urgent jobs and streamline our process to get your parts manufactured and inspected as quickly as possible — often within 24-48 hours for straightforward components.",
  },
  {
    icon: Plane,
    title: "AOG Emergency Support",
    description:
      "Aircraft on Ground situations demand immediate action. Our AOG service is designed to respond to these critical needs with expedited quoting, priority scheduling, and accelerated inspection. We understand that every hour of downtime costs thousands — and we act accordingly.",
  },
  {
    icon: Clock,
    title: "Priority Scheduling",
    description:
      "Urgent projects are assigned dedicated machine time and inspector availability. Our production team coordinates material procurement, setup, machining, and inspection in parallel wherever possible to compress your delivery timeline.",
  },
  {
    icon: Phone,
    title: "Direct Communication",
    description:
      "For AOG and speed shop orders, you get direct access to your dedicated project coordinator. Real-time status updates, immediate response to questions, and proactive communication if anything changes with your delivery schedule.",
  },
];

const faqs = [
  {
    question: "What qualifies as an AOG (Aircraft on Ground) order?",
    answer:
      "An AOG order is any part or component needed to return a grounded aircraft to service. These orders receive our highest priority with expedited processing at every stage. Contact us directly at (905) 828-5055 to initiate an AOG request.",
  },
  {
    question: "How fast can you turn around urgent parts?",
    answer:
      "For simple to moderate complexity parts with readily available materials, we can often deliver within 24-48 hours. More complex parts or those requiring exotic materials may take 3-5 days. We provide an honest delivery estimate at the time of quoting and keep you updated throughout production.",
  },
  {
    question: "Is there an additional cost for expedited service?",
    answer:
      "Yes, speed shop and AOG orders carry an expedite premium to cover overtime, priority scheduling, and accelerated processing. The premium varies based on urgency, complexity, and the extent of schedule disruption required. We provide transparent pricing upfront so there are no surprises.",
  },
  {
    question: "Do expedited parts meet the same quality standards?",
    answer:
      "Absolutely. Every part manufactured at Tru-Tech — regardless of lead time — goes through our full AS9100 quality management system. Expediting the schedule never means cutting corners on quality. All inspection and documentation requirements are maintained.",
  },
  {
    question: "Can you hold safety stock for critical components?",
    answer:
      "Yes, we offer blanket order and safety stock programs for customers with recurring needs for critical components. We can manufacture and hold inventory so parts are ready to ship the same day they are needed, eliminating lead time entirely for your most critical items.",
  },
];

export default function AOGSpeedShopPage() {
  return (
    <ServicePageLayout
      title="AOG & Speed Shop Service"
      subtitle="Rapid machining service for urgent and emergency manufacturing needs"
      description="Rapid turnaround CNC machining for AOG emergencies and urgent needs."
      path="/services/aog-speed-shop"
      faqs={faqs}
      relatedIndustries={industryLinks}
    >
      {/* Introduction */}
      <section className="prose prose-lg max-w-none mb-16">
        <p className="text-xl text-gray-600 leading-relaxed">
          When an aircraft is grounded, a production line is halted, or a critical system is down,
          you cannot wait weeks for replacement parts. Tru-Tech Precision&apos;s AOG &amp; Speed Shop
          service is built for exactly these moments — delivering precision-machined components with
          the urgency your situation demands, without compromising on quality.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed">
          With over 13 years of experience serving the aerospace, nuclear, and space industries,
          we understand that downtime is costly. Our speed shop operates with dedicated resources,
          streamlined workflows, and direct communication channels to compress turnaround times from
          weeks to days — or even hours when the situation requires it.
        </p>
      </section>

      {/* Emergency Banner */}
      <section className="mb-16 bg-red-50 border border-red-200 p-8 rounded-lg">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-red-900 mb-2">
              AOG Emergency? Call Us Now.
            </h2>
            <p className="text-red-700">
              For Aircraft on Ground emergencies, call us directly for immediate response.
              Our team is ready to evaluate your needs and begin work as soon as possible.
            </p>
          </div>
          <a
            href="tel:9058285055"
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors whitespace-nowrap"
          >
            (905) 828-5055
          </a>
        </div>
      </section>

      {/* Features */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          How We Deliver Speed Without Sacrificing Quality
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-[#17135F] rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Timeline */}
      <section className="mb-16 bg-gray-50 p-8 rounded-lg">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Typical Speed Shop Timeline
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-[#17135F] mb-2">
              24-48 hrs
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Simple Parts</h3>
            <p className="text-sm text-gray-600">
              Standard materials, straightforward geometry, basic tolerances.
            </p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#17135F] mb-2">
              3-5 days
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Complex Parts</h3>
            <p className="text-sm text-gray-600">
              Multi-axis machining, tight tolerances, multiple operations.
            </p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#17135F] mb-2">
              5-10 days
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Exotic Materials</h3>
            <p className="text-sm text-gray-600">
              Specialty alloys requiring procurement plus complex machining.
            </p>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
}
