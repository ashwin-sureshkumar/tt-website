import { PageHeader } from "@/components/PageHeader";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/jsonld";
import { createMetadata } from "@/lib/metadata";
import { blogPosts, formatDate } from "@/lib/blog";
import Link from "next/link";
import { Clock, ArrowLeft } from "lucide-react";

const post = blogPosts[0];

export const metadata = createMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${post.slug}`,
});

export default function AS9100Article() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          name: post.title,
          description: post.description,
          path: `/blog/${post.slug}`,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blog" },
          { name: post.title, href: `/blog/${post.slug}` },
        ])}
      />

      <PageHeader title={post.title} />
      <BreadcrumbNav
        items={[
          { label: "Blog", href: "/blog" },
          { label: post.title },
        ]}
      />

      <main className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-8">
            <span>{formatDate(post.date)}</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
            <span className="bg-[#17135F]/10 text-[#17135F] px-3 py-0.5 rounded font-medium">
              {post.category}
            </span>
          </div>

          <article className="prose prose-lg max-w-none">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 object-cover rounded-lg mb-8"
            />

            <p>
              If you procure machined components for aerospace applications, you have
              almost certainly encountered the term AS9100. But what does this certification
              actually mean? And more importantly, how does it protect you as a buyer?
            </p>

            <h2>What Is AS9100?</h2>
            <p>
              AS9100 is the internationally recognized quality management system (QMS) standard
              for the aerospace industry. Published by the International Aerospace
              Quality Group (IAQG), it builds on the ISO 9001 foundation and adds requirements
              specific to aviation and space — including product safety, configuration
              management, risk management, and enhanced traceability.
            </p>
            <p>
              The current revision is AS9100 Rev D, which aligns with ISO 9001:2015 and
              incorporates lessons learned from decades of aerospace manufacturing. It is not a
              self-declared standard — certification requires audit by an accredited third-party
              registrar, with surveillance audits conducted annually.
            </p>

            <h2>Why Does AS9100 Matter for Your Supply Chain?</h2>
            <p>
              When you work with an AS9100 certified supplier like Tru-Tech Precision, you gain
              several concrete assurances:
            </p>
            <ul>
              <li>
                <strong>Documented processes:</strong> Every step — from order review through final
                inspection — follows controlled procedures. This means consistent results regardless
                of which machinist or inspector handles your job.
              </li>
              <li>
                <strong>Material traceability:</strong> AS9100 requires full material traceability
                from raw stock to finished part. You receive mill certifications, material test
                reports, and certificates of conformity with every shipment.
              </li>
              <li>
                <strong>Risk management:</strong> Certified shops must identify and mitigate risks
                throughout the manufacturing process. This proactive approach catches potential
                issues before they become defects.
              </li>
              <li>
                <strong>Non-conformance control:</strong> When something does go wrong, AS9100
                mandates structured corrective action processes — root cause analysis, containment,
                and verification that fixes actually work.
              </li>
            </ul>

            <h2>AS9100 vs. ISO 9001: What Is the Difference?</h2>
            <p>
              ISO 9001 is a general-purpose quality management standard applicable to any industry.
              AS9100 includes all ISO 9001 requirements but adds approximately 100 additional
              requirements specific to aerospace. Key differences include:
            </p>
            <ul>
              <li>First Article Inspection (FAI) requirements per AS9102</li>
              <li>Product safety and configuration management controls</li>
              <li>Enhanced requirements for control of external providers</li>
              <li>Mandatory counterfeit parts prevention programs</li>
              <li>On-time delivery performance tracking and reporting</li>
            </ul>
            <p>
              A shop with only ISO 9001 may produce good parts, but they lack the aerospace-specific
              controls that AS9100 requires. For flight-critical or safety-critical components, this
              distinction matters.
            </p>

            <h2>How to Evaluate an AS9100 Certified Supplier</h2>
            <p>
              Not all certifications are equal in practice. When evaluating a potential supplier,
              consider these factors beyond the certificate itself:
            </p>
            <ul>
              <li>
                <strong>OASIS database listing:</strong> Verify the supplier appears in the IAQG
                OASIS database, which is the official registry of AS9100 certified organizations.
              </li>
              <li>
                <strong>Scope of certification:</strong> Check that the certificate covers the
                specific processes you need (e.g., CNC machining, turning, grinding).
              </li>
              <li>
                <strong>Track record:</strong> Ask about on-time delivery rates, reject rates,
                and customer satisfaction metrics. A good AS9100 shop tracks and can share these.
              </li>
              <li>
                <strong>Experience with your specifications:</strong> Certification is a baseline.
                Experience with your specific OEM requirements, materials, and tolerances is
                equally important.
              </li>
            </ul>

            <h2>The Bottom Line</h2>
            <p>
              AS9100 certification is not just a badge — it represents a comprehensive system of
              controls designed to deliver consistent, traceable, and reliable aerospace components.
              When you choose an AS9100 certified supplier, you are choosing a partner who has
              invested in the infrastructure to support your quality requirements.
            </p>
            <p>
              At Tru-Tech Precision, our AS9100 Rev D certification reflects over 13 years of
              commitment to aerospace quality. If you have questions about how our quality system
              can support your next project,{" "}
              <Link href="/contact" className="text-[#17135F] font-semibold hover:underline">
                contact our team
              </Link>.
            </p>
          </article>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[#17135F] font-semibold hover:underline"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </div>
        </div>
      </main>

      <CTASection />
    </>
  );
}
