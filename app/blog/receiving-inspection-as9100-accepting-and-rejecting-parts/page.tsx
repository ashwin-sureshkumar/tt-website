import { PageHeader } from "@/components/PageHeader";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema, articleSchema } from "@/lib/jsonld";
import { createMetadata } from "@/lib/metadata";
import { blogPosts, formatDate } from "@/lib/blog";
import Link from "next/link";
import { Clock, ArrowLeft } from "lucide-react";

const post = blogPosts.find(
  (p) => p.slug === "receiving-inspection-as9100-accepting-and-rejecting-parts"
)!;

export const metadata = createMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${post.slug}`,
});

export default function ReceivingInspectionArticle() {
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
      <JsonLd
        data={articleSchema({
          title: post.title,
          description: post.description,
          path: `/blog/${post.slug}`,
          date: post.date,
          image: post.image,
        })}
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
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-[#17135F] rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">TT</span>
            </div>
            <div>
              <div className="text-sm font-medium text-gray-900">Tru-Tech Precision</div>
              <div className="text-xs text-gray-500">Engineering Team</div>
            </div>
          </div>

          <article className="prose prose-lg max-w-none">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 object-cover rounded-lg mb-8"
            />

            <p>
              In aerospace manufacturing, quality does not start on the shop floor — it starts
              at the loading dock. Receiving inspection is the first line of defence in any
              AS9100-compliant quality management system, and getting it right determines whether
              non-conforming material ever makes it into your production process. At Tru-Tech
              Precision, receiving inspection is a controlled, documented process that applies to
              every piece of raw material, purchased component, and externally processed part that
              enters our facility.
            </p>
            <p>
              This article explains how receiving inspection works under AS9100, what happens when
              material is accepted or rejected, and why this process is critical to delivering
              conforming aerospace components.
            </p>

            <h2>What AS9100 Requires for Receiving Inspection</h2>
            <p>
              AS9100 Rev D (clause 8.4.2) requires organizations to establish and implement
              verification activities to ensure that externally provided products and services
              meet specified requirements. In practical terms, this means every incoming material
              and part must be inspected or otherwise verified before it is released for use in
              production.
            </p>
            <p>
              The standard does not prescribe a single method — it allows organizations to
              define their own receiving inspection procedures based on the type of product, the
              supplier&apos;s track record, and the criticality of the application. What it does
              require is that the process is documented, consistently followed, and that records
              are maintained.
            </p>
            <p>
              At Tru-Tech, our receiving inspection procedure covers:
            </p>
            <ul>
              <li>Raw material (bar stock, plate, forgings, castings)</li>
              <li>Purchased components and hardware</li>
              <li>Parts returning from external processing (anodizing, plating, heat treat, NDT)</li>
              <li>Customer-supplied material or tooling</li>
            </ul>

            <h2>The Receiving Inspection Process</h2>
            <p>
              When material arrives at our facility, it does not go directly to the shop floor.
              It enters a designated receiving area where our quality team performs a structured
              inspection before releasing it for production use.
            </p>

            <h3>1. Visual and Packaging Inspection</h3>
            <p>
              The first check is straightforward — we verify that packaging is intact and that
              there is no visible damage to the material. Dented boxes, torn wrapping, or signs
              of moisture exposure are flagged immediately. For raw material, we look for surface
              defects such as scratches, pitting, corrosion, or mill scale that could affect the
              finished part.
            </p>

            <h3>2. Documentation Verification</h3>
            <p>
              This is where receiving inspection becomes critical under AS9100. We verify that
              all required documentation accompanies the shipment:
            </p>
            <ul>
              <li>
                <strong>Mill certifications (MTRs):</strong> For raw material, the material test
                report must match the specification called out on the purchase order — correct alloy
                designation, temper condition, and mechanical properties within the required ranges.
              </li>
              <li>
                <strong>Certificates of conformity (C of C):</strong> Supplier certifications
                confirming that the product meets the purchase order requirements and applicable
                specifications.
              </li>
              <li>
                <strong>Processing certifications:</strong> For parts returning from external
                processing, we verify that the processing house has provided certifications
                confirming the correct process was performed per the applicable specification
                (e.g., MIL-A-8625 for anodizing, AMS 2700 for passivation).
              </li>
              <li>
                <strong>Test reports:</strong> Where applicable — dimensional reports, hardness
                test results, NDT reports, or any other testing specified by the purchase order.
              </li>
            </ul>
            <p>
              Missing or incomplete documentation is one of the most common reasons for material
              being placed on hold during receiving inspection. We do not release material into
              production without the required paperwork — no exceptions.
            </p>

            <h3>3. Dimensional and Physical Verification</h3>
            <p>
              Depending on the material type and criticality, we perform dimensional checks to
              confirm the material matches the purchase order. For raw bar stock, this includes
              verifying diameter, length, and material identification markings. For purchased
              components, we may perform dimensional inspection of critical features using
              calipers, micrometers, or CMM equipment. For externally processed parts, we
              verify coating thickness, visual appearance, and any measurable attributes
              specified by the process specification.
            </p>

            <h3>4. Positive Material Identification (PMI)</h3>
            <p>
              For critical applications — particularly nuclear and aerospace — we perform
              positive material identification testing to verify that the material&apos;s chemical
              composition matches the mill certification. PMI testing uses X-ray fluorescence
              (XRF) or optical emission spectroscopy to confirm the alloy is what it claims to
              be. This step catches potential material mix-ups at the source before they become
              a problem in production.
            </p>

            <h2>Accepting Material</h2>
            <p>
              Material that passes all receiving inspection checks — visual, documentation,
              dimensional, and PMI where applicable — is formally accepted and released for
              production use. The acceptance is documented in our quality system with:
            </p>
            <ul>
              <li>The date of inspection and the inspector who performed it</li>
              <li>Confirmation that all documentation was reviewed and found compliant</li>
              <li>Any dimensional or test results recorded during inspection</li>
              <li>A unique lot or identification number that links the material to its certifications throughout production</li>
            </ul>
            <p>
              Accepted material is moved from the receiving area to our controlled inventory
              storage, where it is clearly identified and traceable. This traceability chain —
              from the mill certification through receiving inspection to the finished part — is
              a fundamental requirement of AS9100 and is what enables us to provide complete
              material traceability on every component we ship.
            </p>

            <h2>Rejecting Material</h2>
            <p>
              When material fails any aspect of receiving inspection, it is immediately
              segregated and identified as non-conforming. Under AS9100, non-conforming product
              must be controlled to prevent its unintended use or delivery. Here is how we
              handle rejections:
            </p>

            <h3>Segregation and Identification</h3>
            <p>
              Rejected material is physically moved to a designated non-conforming material
              area — separate from accepted inventory and the production floor. It is clearly
              tagged or labelled to indicate its non-conforming status. This prevents anyone
              from inadvertently pulling the material for a job.
            </p>

            <h3>Non-Conformance Report (NCR)</h3>
            <p>
              A formal non-conformance report is generated documenting the nature of the
              discrepancy — whether it is a documentation issue, dimensional non-conformance,
              material defect, or incorrect processing. The NCR includes:
            </p>
            <ul>
              <li>A description of the non-conformance</li>
              <li>The purchase order and specification requirements that were not met</li>
              <li>Supporting evidence (measurements, photographs, certification discrepancies)</li>
              <li>The disposition decision</li>
            </ul>

            <h3>Disposition Options</h3>
            <p>
              Once a non-conformance is documented, the material must be dispositioned. Under
              AS9100, the typical disposition options are:
            </p>
            <ul>
              <li>
                <strong>Return to supplier:</strong> The most common disposition for incoming
                material that does not meet purchase order requirements. The material is returned
                to the supplier with documentation of the non-conformance, and replacement
                material is requested.
              </li>
              <li>
                <strong>Use as-is (with customer approval):</strong> In some cases, a minor
                deviation may not affect the part&apos;s form, fit, or function. However, using
                non-conforming material requires documented engineering justification and — for
                aerospace applications — written customer approval before proceeding. We do not
                make use-as-is decisions unilaterally.
              </li>
              <li>
                <strong>Rework or repair:</strong> If the non-conformance can be corrected — for
                example, re-processing a surface treatment that did not meet specification — the
                material may be sent back for rework. The reworked product must then pass
                receiving inspection again before acceptance.
              </li>
              <li>
                <strong>Scrap:</strong> Material that cannot be returned, used as-is, or reworked
                is scrapped and disposed of. Scrapped material is removed from inventory and
                documented in the quality system.
              </li>
            </ul>

            <h3>Supplier Notification and Corrective Action</h3>
            <p>
              When material is rejected, we notify the supplier with details of the
              non-conformance. For recurring issues or significant defects, we may issue a
              Supplier Corrective Action Request (SCAR) requiring the supplier to investigate the
              root cause, implement corrective actions, and provide evidence that the issue has
              been resolved. This process is an important part of maintaining a reliable supply
              chain and is tracked as part of our supplier performance monitoring under AS9100.
            </p>

            <h2>Common Reasons for Rejection</h2>
            <p>
              Based on our experience, the most frequent reasons material is rejected during
              receiving inspection include:
            </p>
            <ul>
              <li>
                <strong>Missing or incomplete certifications:</strong> The material test report
                is missing, does not list the required specification, or does not include all
                required test results.
              </li>
              <li>
                <strong>Material specification mismatch:</strong> The cert shows a different alloy
                grade, temper, or specification than what was ordered. Even a minor discrepancy —
                such as receiving 6061-T6 when 6061-T651 was specified — requires resolution.
              </li>
              <li>
                <strong>Dimensional discrepancies:</strong> Raw material outside the ordered size
                tolerance, or purchased components that do not meet drawing requirements.
              </li>
              <li>
                <strong>Surface condition issues:</strong> Scratches, corrosion, contamination,
                or other surface defects that could affect the finished component&apos;s performance
                or appearance.
              </li>
              <li>
                <strong>Processing non-conformances:</strong> Parts returning from external
                processing with incorrect coating thickness, missed areas, discolouration, or
                certifications that do not reference the correct specification.
              </li>
              <li>
                <strong>Incorrect quantity or part number:</strong> What was shipped does not match
                what was ordered.
              </li>
            </ul>

            <h2>Why Receiving Inspection Matters</h2>
            <p>
              It is tempting to view receiving inspection as paperwork overhead — an
              administrative step before the real work begins. But in aerospace manufacturing,
              receiving inspection is a quality gate that prevents non-conforming material from
              contaminating your production process. The cost of catching a material issue at
              receiving is a fraction of catching it after machining, after external processing,
              or — worst case — after the part has been shipped to a customer.
            </p>
            <p>
              A disciplined receiving inspection process also protects your traceability chain.
              Every component Tru-Tech ships can be traced back to the specific heat lot of raw
              material it was made from, the certifications that accompanied that material, and
              the inspector who verified it at receiving. This is not just an AS9100
              requirement — it is what allows our customers to confidently install our parts
              into flight-critical and safety-critical assemblies.
            </p>

            <h2>How Tru-Tech Handles Receiving Inspection</h2>
            <p>
              At Tru-Tech Precision, receiving inspection is embedded in our daily operations —
              not treated as an afterthought. Our quality team inspects every incoming shipment
              using documented procedures, calibrated equipment, and standardized checklists.
              Material is not released to the floor until it has been formally accepted. When
              issues arise, our non-conformance and corrective action processes ensure they are
              resolved properly and that suppliers are held accountable.
            </p>
            <p>
              This discipline is part of what makes our AS9100 quality system work in practice,
              not just on paper. It is why our customers trust us with their most critical
              components — they know that the quality of a Tru-Tech part starts before the
              spindle ever turns.
            </p>
            <p>
              If you have questions about our receiving inspection process or how our quality
              system protects your supply chain,{" "}
              <Link href="/contact" className="text-[#17135F] font-semibold hover:underline">
                contact our team
              </Link>.
            </p>
          </article>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Related Articles</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {blogPosts
                .filter((p) => p.slug !== post.slug)
                .map((p) => (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="text-sm font-semibold text-gray-900">{p.title}</div>
                    <div className="text-xs text-gray-500 mt-1">{p.readTime}</div>
                  </Link>
                ))}
            </div>
          </div>

          <div className="mt-8">
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
