import { PageHeader } from "@/components/PageHeader";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/jsonld";
import { createMetadata } from "@/lib/metadata";
import { CheckCircle, Award, Users, Building } from "lucide-react";

export const metadata = createMetadata({
  title: "About Us",
  description:
    "Learn about Tru-Tech Precision Inc. — a women-owned precision CNC machining company with 13+ years of experience serving aerospace, nuclear, electronic, and space industries from Mississauga, Ontario.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          name: "About Tru-Tech Precision",
          description:
            "Learn about Tru-Tech Precision Inc., a women-owned precision manufacturing company.",
          path: "/about",
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
        ])}
      />

      <PageHeader
        title="About Tru-Tech Precision"
        subtitle="Your trusted partner in precision manufacturing and engineering excellence"
      />
      <BreadcrumbNav items={[{ label: "About" }]} />

      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Company Story */}
          <section className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                Founded over 13 years ago, Tru-Tech Precision Inc. has grown from a small machine
                shop into a trusted precision manufacturing partner for some of the most demanding
                industries in the world. Located in Mississauga, Ontario, our facility is equipped
                with advanced CNC turning centers and multi-axis milling machines that enable us to
                tackle complex projects with confidence.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                As a women-owned and led company, we bring a unique perspective to the manufacturing
                industry. Our leadership team combines deep technical expertise with a commitment
                to quality, innovation, and customer partnership that sets us apart in a competitive market.
              </p>
              <p className="text-lg text-gray-600">
                Today, we serve aerospace, nuclear, electronic, and space industries with
                AS9100 and ISO 9001 certified manufacturing services. With over 1,000 projects
                completed, our reputation is built on delivering precision parts on time, every time
                — with a 99.8% on-time delivery rate that speaks to our reliability.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <img
                src="/assets/7f21666d30b1f73077dc471121aec59f4f0d1958.png"
                alt="Tru-Tech Precision manufacturing facility"
                className="w-full h-full object-cover"
              />
            </div>
          </section>

          {/* Values */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              What Sets Us Apart
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Award,
                  title: "Quality First",
                  desc: "AS9100 and ISO 9001 certified. Quality is not just a department — it is embedded in every process and every person at Tru-Tech.",
                },
                {
                  icon: Users,
                  title: "Women-Owned & Led",
                  desc: "We bring diverse leadership and perspectives to precision manufacturing, driving innovation and partnership.",
                },
                {
                  icon: CheckCircle,
                  title: "99.8% On-Time Delivery",
                  desc: "We understand that your production schedules depend on our reliability. Our track record proves we deliver.",
                },
                {
                  icon: Building,
                  title: "Made in Ontario",
                  desc: "Our Mississauga facility combines Canadian manufacturing excellence with proximity to major aerospace and industrial hubs.",
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="bg-gray-50 p-6 rounded-lg text-center">
                    <div className="w-12 h-12 mx-auto bg-[#17135F] rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Certifications */}
          <section className="mb-16 bg-gray-50 p-8 rounded-lg">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Certifications & Standards
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Our certifications reflect our commitment to maintaining the highest quality
                  standards in precision manufacturing. These certifications are not just credentials
                  — they represent the rigorous processes and controls we apply to every project.
                </p>
                <ul className="space-y-4">
                  {[
                    "AS9100 Rev D — Aerospace Quality Management System",
                    "ISO 9001:2015 — Quality Management System",
                  ].map((cert) => (
                    <li key={cert} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                      <span className="text-gray-700 font-medium">{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-center">
                <img
                  src="/assets/1458f26437ca425f03f4b0d18ae3ec02eeae4c05.png"
                  alt="AS9100 Aerospace Certification"
                  className="w-40 h-auto"
                />
              </div>
            </div>
          </section>

          {/* Facility */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Facility
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-600 mb-4">
                  Our Mississauga facility houses a comprehensive range of CNC equipment including
                  multi-axis milling centers, CNC turning centers with live tooling, and precision
                  grinding equipment. The facility is temperature-controlled for consistent machining
                  accuracy and equipped with modern inspection equipment including CMM capabilities.
                </p>
                <p className="text-lg text-gray-600">
                  We continuously invest in new technology and equipment to expand our capabilities
                  and improve efficiency. Our facility layout is optimized for lean manufacturing
                  principles, minimizing waste and maximizing throughput while maintaining the
                  highest quality standards.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Equipment Highlights
                </h3>
                <ul className="space-y-3">
                  {[
                    "5-axis CNC machining center",
                    "3 & 4-axis CNC milling centers",
                    "CNC turning centers",
                    "CMM inspection equipment",
                    "CAD/CAM programming capabilities",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#17135F] rounded-full shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </div>
      </main>

      <CTASection />
    </>
  );
}
