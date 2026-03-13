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
  (p) => p.slug === "sub-contracting-support-for-oems-and-tier-1-suppliers"
)!;

export const metadata = createMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${post.slug}`,
});

export default function SubContractingArticle() {
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
              For OEMs and Tier-1 suppliers operating in aerospace, nuclear, marine, and commercial
              sectors, finding a sub-contract machining partner you can rely on is not a luxury — it
              is a competitive necessity. Internal machine shops fill up. Programs scale faster than
              hiring allows. New contracts demand capabilities or certifications that sit outside
              your current footprint. When these moments arise, the quality of your sub-contracting
              partner directly impacts your ability to deliver.
            </p>
            <p>
              Tru-Tech Precision operates as a dedicated sub-contract precision manufacturing partner
              for OEMs and Tier-1 suppliers across Canada and beyond. This article explains how we
              work within your supply chain — not as a commodity vendor, but as an extension of your
              manufacturing operation.
            </p>

            <h2>What Sub-Contract Manufacturing Looks Like at Tru-Tech</h2>
            <p>
              Sub-contracting, at its core, means we manufacture components to your specifications,
              under your quality requirements, and deliver them ready for integration into your
              assemblies or direct shipment to your end customer. But the reality of doing this well
              goes far beyond quoting a price and shipping a box of parts.
            </p>
            <p>
              When an OEM or Tier-1 engages Tru-Tech as a sub-contract partner, here is what that
              relationship typically involves:
            </p>
            <ul>
              <li>
                <strong>Full order review:</strong> Before production begins, our engineering and
                quality teams review your drawings, specifications, material requirements, and any
                customer-specific flow-down requirements. We flag potential issues early — unclear
                tolerances, material availability concerns, or specification conflicts — so they are
                resolved before chips start flying.
              </li>
              <li>
                <strong>Material procurement to your specs:</strong> We procure raw materials from
                certified sources, matching the exact alloy, temper, specification, and form your
                program requires. If you have preferred or mandated material suppliers, we work
                within your approved supply chain.
              </li>
              <li>
                <strong>Manufacturing under your quality system:</strong> Our AS9100 Rev D and
                ISO 9001:2015 certified quality management system provides the foundation, but we
                adapt to your specific requirements. If your purchase order calls out additional
                inspection points, specific measurement methods, or particular documentation formats,
                we comply.
              </li>
              <li>
                <strong>External processing coordination:</strong> Many sub-contracted parts require
                surface treatments, coatings, heat treating, or NDT after machining. We manage all
                external processing through approved suppliers — including NADCAP-accredited sources
                when required — so you receive a fully finished component.
              </li>
              <li>
                <strong>Complete documentation packages:</strong> Every shipment includes the
                documentation your program demands — material certifications, dimensional inspection
                reports, certificates of conformity, first article inspection packages, and any
                additional paperwork specified in your purchase order.
              </li>
            </ul>

            <h2>Why OEMs and Tier-1s Sub-Contract to Tru-Tech</h2>
            <p>
              There are several practical reasons why established manufacturers choose to sub-contract
              machining work to us rather than keeping everything in-house or using larger contract
              shops:
            </p>

            <h3>Capacity Relief Without Compromise</h3>
            <p>
              When your internal shop is at capacity, you need overflow work handled by a partner who
              operates at the same quality level. Our AS9100 certification, experienced machinists,
              and multi-axis CNC capabilities mean your sub-contracted parts meet the same standards
              as your in-house production. There is no quality gap to manage.
            </p>

            <h3>Access to Specialized Capabilities</h3>
            <p>
              Not every OEM maintains every type of machining capability in-house. Our equipment
              includes 3-axis, 4-axis, and 5-axis CNC milling centers, CNC lathes with live tooling,
              and precision grinding — giving you access to capabilities that may not exist on your
              shop floor. For complex geometries or tight-tolerance work that requires multi-axis
              machining, sub-contracting to a specialist is often more effective than investing in
              equipment and training for occasional needs.
            </p>

            <h3>Speed and Responsiveness</h3>
            <p>
              Programs do not always follow predictable timelines. When an AOG situation hits, a
              customer accelerates a delivery schedule, or a quality escape requires replacement
              parts, you need a sub-contractor who can respond quickly. Our AOG &amp; Speed Shop
              service provides rapid turnaround for urgent requirements — sometimes within 24 to 48
              hours — without compromising on quality or documentation.
            </p>

            <h3>Scaling Without Fixed Overhead</h3>
            <p>
              Sub-contracting allows you to take on new contracts, bid larger programs, and absorb
              demand spikes without the fixed costs of additional machines, floor space, and
              headcount. When volumes increase, we scale with you. When they decrease, you are not
              carrying unused capacity. This flexibility is particularly valuable for Tier-1 suppliers
              managing multiple OEM programs with varying demand patterns.
            </p>

            <h3>Simplified Supply Chain Management</h3>
            <p>
              Working with Tru-Tech means working with a single sub-contract partner who handles
              machining, external processing, inspection, documentation, and logistics. You issue
              one purchase order and receive a complete, inspected, documented component. We manage
              the complexity of coordinating multiple process steps so you do not have to split work
              across multiple vendors.
            </p>

            <h2>How We Handle Customer Flow-Down Requirements</h2>
            <p>
              OEMs and Tier-1 suppliers operate under strict quality flow-down obligations from their
              end customers — the primes, government agencies, and regulatory bodies that set the
              rules. When you sub-contract to Tru-Tech, those requirements do not get lost in
              translation.
            </p>
            <p>
              Our order review process captures every flow-down requirement from your purchase order,
              drawing notes, and referenced specifications. These include:
            </p>
            <ul>
              <li>
                <strong>Customer-specific quality requirements:</strong> Inspection methods, sampling
                plans, statistical process control requirements, and reporting formats specified by
                your end customer.
              </li>
              <li>
                <strong>Approved processor mandates:</strong> When your customer requires specific
                NADCAP-accredited processors for heat treating, plating, or NDT, we route work
                accordingly and document compliance.
              </li>
              <li>
                <strong>Material restrictions and approvals:</strong> Some programs mandate material
                from specific approved mills or distributors. We procure accordingly and provide
                full traceability documentation.
              </li>
              <li>
                <strong>Export control and ITAR compliance:</strong> For defense-related work, we
                understand the handling, access, and documentation requirements that apply to
                controlled technical data and articles.
              </li>
              <li>
                <strong>Shelf life and packaging requirements:</strong> Certain components require
                specific packaging, labeling, or shelf-life controls. We follow your instructions
                precisely.
              </li>
            </ul>
            <p>
              We treat your flow-down requirements as non-negotiable. If something is unclear or
              conflicts with another requirement, we raise it before production — not after.
            </p>

            <h2>Industries We Support Through Sub-Contracting</h2>
            <p>
              Our sub-contract manufacturing services span every industry we serve:
            </p>
            <ul>
              <li>
                <strong>Aerospace:</strong> Flight-critical and flight-safety components for aircraft
                OEMs and Tier-1 aerostructure, engine, and landing gear suppliers.
              </li>
              <li>
                <strong>Nuclear:</strong> Components for nuclear power generation with full material
                traceability and documentation to nuclear-grade standards.
              </li>
              <li>
                <strong>Space:</strong> Precision parts for satellite systems, launch vehicles, and
                ground support equipment.
              </li>
              <li>
                <strong>Marine:</strong> Corrosion-resistant components for vessel systems, offshore
                equipment, and propulsion assemblies.
              </li>
              <li>
                <strong>Commercial:</strong> Production machining for industrial equipment, hydraulic
                systems, and mechanical assemblies.
              </li>
            </ul>

            <h2>What Makes a Good Sub-Contracting Relationship</h2>
            <p>
              After years of operating as a sub-contract partner for OEMs and Tier-1 suppliers, we
              have learned that the most successful relationships share a few characteristics:
            </p>
            <ul>
              <li>
                <strong>Clear communication from the start:</strong> The more context you provide
                upfront — end-use application, critical dimensions, lessons learned from previous
                production — the better result you get. We invest time in understanding your
                requirements, and we ask questions when something is not clear.
              </li>
              <li>
                <strong>Consistent quality expectations:</strong> We operate to the same quality
                standards on every order, whether it is a first article run of five parts or a
                production release of five hundred. Our quality system does not have a &quot;good
                enough&quot; setting.
              </li>
              <li>
                <strong>Transparency when issues arise:</strong> Manufacturing is not perfect. When
                a problem occurs — a material delay, a dimensional deviation, a processing issue —
                we communicate immediately with a clear plan for resolution. No surprises.
              </li>
              <li>
                <strong>Long-term partnership mindset:</strong> The best sub-contracting
                relationships are not transactional. Over time, we learn your preferences, your
                specifications, and your program rhythms. This accumulated knowledge makes every
                subsequent order smoother, faster, and more efficient.
              </li>
            </ul>

            <h2>Getting Started</h2>
            <p>
              If you are an OEM or Tier-1 supplier looking for a sub-contract machining partner with
              AS9100 certification, multi-axis CNC capabilities, and the quality infrastructure to
              meet your flow-down requirements, we would like to hear from you.
            </p>
            <p>
              Send us your drawings and specifications, and our team will provide a detailed quote
              with lead time, process plan, and documentation commitments. Whether you need capacity
              relief for an existing program or a manufacturing partner for a new contract,{" "}
              <Link href="/contact" className="text-[#17135F] font-semibold hover:underline">
                contact Tru-Tech Precision
              </Link>{" "}
              to start the conversation.
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
