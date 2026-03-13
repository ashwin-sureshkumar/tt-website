import { PageHeader } from "@/components/PageHeader";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/jsonld";
import { createMetadata } from "@/lib/metadata";
import {
  DollarSign,
  GraduationCap,
  Cog,
  TrendingUp,
  Users,
  ShieldCheck,
  Rocket,
  Award,
  Star,
  MapPin,
  Heart,
  Wrench,
  Mail,
  FileText,
  Briefcase,
  Clock,
} from "lucide-react";

export const metadata = createMetadata({
  title: "Careers at Tru-Tech Precision | Join Our Team",
  description:
    "Join Tru-Tech Precision Inc. — a women-owned precision CNC machining company. Explore open positions in CNC machining and quality assurance. Build your career in aerospace and nuclear manufacturing.",
  path: "/careers",
});

const benefits = [
  {
    icon: DollarSign,
    title: "Competitive Compensation",
    desc: "Fair pay that reflects your skills and experience in precision manufacturing.",
  },
  {
    icon: GraduationCap,
    title: "Skills Training & Development",
    desc: "Ongoing learning opportunities to grow your expertise and advance your career.",
  },
  {
    icon: Cog,
    title: "Advanced CNC Equipment",
    desc: "Work with state-of-the-art 5-axis and multi-axis CNC machines on challenging projects.",
  },
  {
    icon: TrendingUp,
    title: "Stable & Growing Company",
    desc: "Diverse industry exposure across aerospace, nuclear, space, and marine sectors.",
  },
  {
    icon: Users,
    title: "Collaborative Team Culture",
    desc: "A respectful, supportive work environment where every team member is valued.",
  },
  {
    icon: ShieldCheck,
    title: "Health & Safety Commitment",
    desc: "Your safety is our priority — rigorous safety protocols and a clean, modern facility.",
  },
];

const openPositions = [
  {
    title: "CNC Machinist",
    type: "Full-time",
    description:
      "Operate and program CNC turning centers and multi-axis milling machines to produce precision components for aerospace, nuclear, and space industries. Experience with tight tolerances and complex geometries preferred.",
  },
  {
    title: "Quality Assurance Inspector",
    type: "Full-time",
    description:
      "Inspect precision-machined components using CMM and manual inspection tools. Ensure compliance with AS9100 quality standards and customer specifications. Experience with aerospace quality systems is an asset.",
  },
];

export default function CareersPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          name: "Careers at Tru-Tech Precision",
          description:
            "Explore career opportunities at Tru-Tech Precision Inc., a women-owned precision manufacturing company.",
          path: "/careers",
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "Careers", href: "/careers" },
        ])}
      />

      <PageHeader
        title="Careers at Tru-Tech Precision"
        subtitle="Build your career in precision manufacturing"
      />
      <BreadcrumbNav items={[{ label: "Careers" }]} />

      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Why Work at Tru-Tech */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Why Work at Tru-Tech?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Heart,
                  title: "Women-Owned & Led",
                  desc: "Be part of a company that champions diversity and brings unique perspectives to precision manufacturing.",
                },
                {
                  icon: Rocket,
                  title: "Work on What Matters",
                  desc: "Manufacture components for aerospace, nuclear, space, and marine applications — your work has real impact.",
                },
                {
                  icon: Award,
                  title: "AS9100 Certified Environment",
                  desc: "Learn and practice industry-leading quality standards in an aerospace-certified facility.",
                },
                {
                  icon: Star,
                  title: "Small Team, High Impact",
                  desc: "Your contributions are visible and valued. Every team member plays a critical role in our success.",
                },
                {
                  icon: GraduationCap,
                  title: "Growth & Development",
                  desc: "We invest in our people with training, skill development, and opportunities to advance.",
                },
                {
                  icon: MapPin,
                  title: "Mississauga Location",
                  desc: "Accessible, modern facility in Mississauga — a hub for Canadian manufacturing excellence.",
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="flex gap-4 p-6 bg-gray-50 rounded-lg"
                  >
                    <div className="w-12 h-12 bg-[#17135F] rounded-lg flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* What We Offer */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              What We Offer
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="bg-gray-50 p-6 rounded-lg text-center">
                    <div className="w-12 h-12 mx-auto bg-[#17135F] rounded-lg flex items-center justify-center mb-4">
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

          {/* Open Positions */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Open Positions
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {openPositions.map((position, i) => (
                <div
                  key={i}
                  className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Briefcase className="w-5 h-5 text-[#17135F]" />
                    <h3 className="text-xl font-bold text-gray-900">
                      {position.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-500">
                      {position.type}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-6">{position.description}</p>
                  <a
                    href="mailto:hr@trutechprecision.com?subject=Application%20-%20{position.title}"
                    className="inline-block bg-[#17135F] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#0d0b3a] transition-colors"
                  >
                    Apply Now
                  </a>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-gray-50 p-6 rounded-lg text-center">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Don&apos;t see your role?
              </h3>
              <p className="text-gray-600 mb-4">
                We&apos;re always interested in hearing from talented people.
                Send us your resume and tell us how you can contribute to our
                team.
              </p>
              <a
                href="mailto:hr@trutechprecision.com?subject=General%20Application"
                className="inline-block border-2 border-[#17135F] text-[#17135F] px-6 py-3 rounded-lg font-semibold hover:bg-[#17135F] hover:text-white transition-colors"
              >
                Send Your Resume
              </a>
            </div>
          </section>

          {/* How to Apply */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              How to Apply
            </h2>
            <div className="max-w-2xl mx-auto bg-gray-50 p-8 rounded-lg">
              <div className="flex items-center gap-3 mb-6">
                <Mail className="w-6 h-6 text-[#17135F]" />
                <p className="text-lg text-gray-900">
                  Email your application to{" "}
                  <a
                    href="mailto:hr@trutechprecision.com"
                    className="text-[#17135F] font-semibold hover:underline"
                  >
                    hr@trutechprecision.com
                  </a>
                </p>
              </div>
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <FileText className="w-5 h-5 text-[#17135F]" />
                  <h3 className="text-lg font-bold text-gray-900">
                    What to Include
                  </h3>
                </div>
                <ul className="space-y-2 ml-7">
                  {[
                    "Your resume or CV",
                    "Relevant work experience and skills",
                    "Certifications (e.g., CNC programming, inspection, AS9100)",
                    "The position you are applying for",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#17135F] rounded-full shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-sm text-gray-500">
                Tru-Tech Precision Inc. is an equal opportunity employer. We
                celebrate diversity and are committed to creating an inclusive
                environment for all employees.
              </p>
            </div>
          </section>
        </div>
      </main>

      {/* Careers CTA */}
      <section className="bg-[#17135F] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Interested in Joining Our Team?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Send us your resume and let&apos;s start a conversation about your
            future at Tru-Tech Precision.
          </p>
          <a
            href="mailto:hr@trutechprecision.com?subject=Career%20Inquiry"
            className="inline-block bg-white text-[#17135F] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Contact HR
          </a>
        </div>
      </section>
    </>
  );
}
