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
  (p) => p.slug === "external-processing-anodizing-passivation-and-approved-suppliers"
)!;

export const metadata = createMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${post.slug}`,
});

export default function ExternalProcessingArticle() {
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
              Precision CNC machining is only part of the story. Many of the components we manufacture
              require external processing — surface treatments, coatings, and finishing operations
              performed by specialized suppliers after machining is complete. These processes are
              critical to the performance, corrosion resistance, and longevity of the finished part,
              and managing them properly is just as important as the machining itself.
            </p>
            <p>
              At Tru-Tech Precision, we coordinate all external processing on behalf of our customers,
              working through approved supplier lists and adhering to customer-specific requirements —
              including NADCAP accreditation where required. This article explains the most common
              external processes we manage and how our quality system ensures they are performed to
              the standards your program demands.
            </p>

            <h2>Common External Processes</h2>

            <h3>Anodizing</h3>
            <p>
              Anodizing is an electrochemical process that converts the surface of aluminum parts into
              a durable, corrosion-resistant oxide layer. It is one of the most common external
              processes we manage for aerospace and commercial components. There are several types:
            </p>
            <ul>
              <li>
                <strong>Type II (Sulfuric Acid Anodizing):</strong> Produces a thin, decorative oxide
                layer that provides moderate corrosion resistance. Often used for commercial and
                non-critical aerospace components. Can be dyed in various colors for identification
                purposes.
              </li>
              <li>
                <strong>Type III (Hardcoat Anodizing):</strong> Produces a much thicker, harder oxide
                layer that provides excellent wear resistance and corrosion protection. Common on
                aerospace components subject to abrasion, sliding contact, or harsh operating
                environments.
              </li>
              <li>
                <strong>Chromic Acid Anodizing (Type I):</strong> A thinner coating that provides
                good corrosion resistance with minimal dimensional change. Preferred for tight-tolerance
                aerospace parts and components that will be adhesively bonded.
              </li>
            </ul>
            <p>
              Anodizing specifications vary by customer and application. We ensure the correct
              specification (such as MIL-A-8625) is called out and that the processing supplier
              meets the required quality accreditations.
            </p>

            <h3>Passivation</h3>
            <p>
              Passivation is a chemical treatment applied to stainless steel and other corrosion-resistant
              alloys to remove surface contaminants — particularly free iron — that can compromise
              corrosion resistance. The process involves immersing parts in a nitric acid or citric
              acid solution, which dissolves surface impurities and promotes the formation of a
              uniform, protective chromium oxide layer.
            </p>
            <p>
              For aerospace and nuclear components, passivation is typically performed in accordance
              with specifications such as ASTM A967, AMS 2700, or customer-specific requirements. It
              is a critical step for stainless steel parts that will operate in corrosive environments
              or must meet stringent cleanliness requirements.
            </p>

            <h3>Plating</h3>
            <p>
              Electroplating and electroless plating processes deposit a thin layer of metal onto the
              surface of a component to improve corrosion resistance, wear resistance, conductivity, or
              solderability. Common plating processes we manage include:
            </p>
            <ul>
              <li>
                <strong>Cadmium Plating:</strong> Widely used in aerospace for its excellent corrosion
                resistance and lubricity. Performed per QQ-P-416 or customer specifications.
              </li>
              <li>
                <strong>Nickel Plating:</strong> Provides corrosion resistance and wear resistance.
                Electroless nickel plating (per AMS 2404 or MIL-C-26074) is common for its uniform
                coating thickness on complex geometries.
              </li>
              <li>
                <strong>Zinc Plating:</strong> An economical corrosion-resistant coating commonly used
                on carbon steel components for commercial and industrial applications.
              </li>
              <li>
                <strong>Chrome Plating:</strong> Used for wear resistance and dimensional recovery.
                Hard chrome plating is common on hydraulic components and bearing surfaces.
              </li>
            </ul>

            <h3>Chemical Conversion Coating (Chem Film)</h3>
            <p>
              Also known as chromate conversion coating or Alodine, this process creates a thin
              protective layer on aluminum surfaces. It provides corrosion resistance, improves paint
              adhesion, and maintains electrical conductivity. Commonly specified per MIL-DTL-5541
              (Class 1A for corrosion protection or Class 3 for electrical conductivity), it is
              frequently used on aerospace aluminum components either as a standalone treatment or
              as a primer for paint systems.
            </p>

            <h3>Heat Treating and Stress Relieving</h3>
            <p>
              Some components require heat treatment to achieve specific mechanical properties —
              hardness, tensile strength, or ductility — or stress relieving to remove residual
              stresses introduced during machining. These processes must be performed by qualified
              suppliers with calibrated furnaces and the ability to provide certifications that
              the specified thermal cycle was followed precisely.
            </p>

            <h3>Non-Destructive Testing (NDT)</h3>
            <p>
              External NDT services such as fluorescent penetrant inspection (FPI), magnetic particle
              inspection (MPI), and radiographic inspection are often required to verify that
              components are free of surface and subsurface defects. These inspections are critical
              for flight-safety and nuclear components and are typically specified by the customer
              drawing or purchase order.
            </p>

            <h2>Working with Approved Supplier Lists</h2>
            <p>
              In aerospace and other regulated industries, external processing cannot be sent to just
              any vendor. Customers typically maintain Approved Supplier Lists (ASLs) — also called
              Qualified Supplier Lists — that specify which processing houses are authorized to
              perform particular treatments on their components.
            </p>
            <p>
              At Tru-Tech, we work directly with our customers&apos; approved supplier lists. When a
              purchase order specifies external processing, our process is straightforward:
            </p>
            <ul>
              <li>
                <strong>We verify the required processor:</strong> We review the customer&apos;s purchase
                order, drawing, and specification callouts to identify exactly which processes are
                required and whether specific approved suppliers are mandated.
              </li>
              <li>
                <strong>We use the customer&apos;s approved sources:</strong> If the customer specifies
                that anodizing must be performed by a particular facility, or that plating must go
                to a NADCAP-accredited processor, we route the work accordingly. We do not substitute
                processors without customer authorization.
              </li>
              <li>
                <strong>We maintain our own approved supplier list:</strong> For customers who do not
                mandate specific processors, we maintain our own evaluated and approved list of
                external processing suppliers. These suppliers are assessed for quality, capability,
                delivery performance, and relevant certifications before being added to our approved
                list.
              </li>
              <li>
                <strong>We coordinate logistics and documentation:</strong> We handle all
                transportation, packaging, and paperwork between our facility and the external
                processor. When parts return, we verify that processing certifications are complete
                and that parts meet all requirements before shipping to the customer.
              </li>
            </ul>

            <h2>NADCAP and Customer-Driven Requirements</h2>
            <p>
              NADCAP (National Aerospace and Defense Contractors Accreditation Program) is an
              industry-managed accreditation program that provides standardized assessments of
              special processes. When a customer requires NADCAP-accredited processing, it means
              the external processor has been independently audited and accredited specifically for
              that process — whether it is chemical processing, heat treating, coatings, NDT, or
              other special processes.
            </p>
            <p>
              Many major aerospace OEMs and primes — including Boeing, Airbus, Pratt &amp; Whitney,
              and others — require that special processes on their components be performed by
              NADCAP-accredited sources. This requirement flows down through the supply chain, and
              as a manufacturer, it is our responsibility to ensure compliance.
            </p>
            <p>
              Here is how we handle NADCAP requirements at Tru-Tech:
            </p>
            <ul>
              <li>
                <strong>Flow-down compliance:</strong> When a customer&apos;s purchase order or
                specification requires NADCAP-accredited processing, we ensure the work is routed
                only to processors that hold current NADCAP accreditation for the specific process
                required. We verify accreditation status before placing orders.
              </li>
              <li>
                <strong>Documentation and traceability:</strong> We obtain and retain processing
                certifications from the NADCAP-accredited supplier, confirming that the work was
                performed in accordance with the applicable specification and that the processor&apos;s
                accreditation was current at the time of processing.
              </li>
              <li>
                <strong>Customer-specific requirements:</strong> Beyond NADCAP, individual customers
                may have additional requirements for external processing — specific test methods,
                sampling plans, reporting formats, or restrictions on sub-tier suppliers. We review
                and comply with all customer-specific requirements as part of our order review process.
              </li>
            </ul>

            <h2>Quality Control for External Processing</h2>
            <p>
              Sending parts out for external processing introduces risk — parts could be damaged in
              transit, processing could be performed incorrectly, or documentation could be
              incomplete. Our quality system addresses these risks at every step:
            </p>
            <ul>
              <li>
                <strong>Pre-processing inspection:</strong> Parts are inspected and documented before
                they leave our facility. This establishes a baseline and ensures we can identify any
                damage or issues introduced during external processing.
              </li>
              <li>
                <strong>Receiving inspection:</strong> When parts return from the external processor,
                we perform receiving inspection to verify visual appearance, coating thickness or
                quality where applicable, and review all processing certifications for completeness
                and accuracy.
              </li>
              <li>
                <strong>Certification review:</strong> Processing certifications are reviewed against
                the specification requirements and customer purchase order before parts are released
                for shipment. Any discrepancies are resolved before the parts move forward.
              </li>
              <li>
                <strong>Supplier performance monitoring:</strong> We track the quality and delivery
                performance of our external processing suppliers. Suppliers who consistently deliver
                on time with correct certifications and defect-free parts maintain their approved
                status. Issues are addressed through our corrective action process.
              </li>
            </ul>

            <h2>Why This Matters to You</h2>
            <p>
              When you send a purchase order to Tru-Tech, you are not just getting machining — you
              are getting a manufacturing partner who manages the entire process from raw material
              through finished, processed, and inspected parts. We take ownership of external
              processing coordination so that you receive a complete, ready-to-install component
              with all the documentation and certifications your program requires.
            </p>
            <p>
              Whether your parts need anodizing, passivation, plating, heat treating, or NDT — and
              whether they require NADCAP-accredited sources or specific customer-approved processors
              — we have the systems and supplier relationships in place to manage it properly.
            </p>
            <p>
              If you have questions about how we handle external processing for your specific
              requirements,{" "}
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
