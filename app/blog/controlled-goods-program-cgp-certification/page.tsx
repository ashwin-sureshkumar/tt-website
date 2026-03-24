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
  (p) => p.slug === "controlled-goods-program-cgp-certification"
)!;

export const metadata = createMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${post.slug}`,
});

export default function ControlledGoodsProgramArticle() {
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
              Tru-Tech Precision is proud to announce that we have received our Controlled
              Goods Program (CGP) certification. This is a significant milestone for our
              company and a direct benefit to our customers who operate in defence, aerospace,
              and other sectors where controlled goods requirements apply. With this
              certification in place, Tru-Tech can now receive, examine, possess, transfer,
              and dispose of controlled goods in full compliance with Canadian federal
              regulations.
            </p>
            <p>
              This article explains what the Controlled Goods Program is, why it exists, what
              CGP certification requires, and how Tru-Tech&apos;s registration strengthens our
              ability to support your supply chain.
            </p>

            <h2>What Is the Controlled Goods Program?</h2>
            <p>
              The Controlled Goods Program is a federal security program administered by
              Public Services and Procurement Canada (PSPC) under the <em>Defence Production
              Act</em> and the <em>Controlled Goods Regulations</em>. The program regulates
              access to controlled goods within Canada — goods that have military or national
              security significance and require protection from unauthorized access or
              transfer.
            </p>
            <p>
              Controlled goods include a wide range of items defined under Canada&apos;s
              Controlled Goods List, which is aligned with the International Traffic in Arms
              Regulations (ITAR) Munitions List. These include:
            </p>
            <ul>
              <li>Military weapons systems and components</li>
              <li>Defence electronics, guidance, and navigation equipment</li>
              <li>Military aircraft parts and assemblies</li>
              <li>Armour, ammunition, and explosives</li>
              <li>Naval vessels and submarine components</li>
              <li>Space and satellite hardware with defence applications</li>
              <li>Technical data, blueprints, and specifications related to any of the above</li>
            </ul>
            <p>
              Any Canadian company that examines, possesses, or transfers controlled goods
              must be registered under the CGP. Without registration, it is illegal to have
              access to these items — even if you are manufacturing a subcomponent for a
              larger defence assembly.
            </p>

            <h2>Why Does CGP Exist?</h2>
            <p>
              Canada is a signatory to numerous international defence agreements, including
              bilateral defence cooperation treaties with the United States and other NATO
              allies. The Controlled Goods Program exists to ensure that sensitive military
              and defence-related items are only handled by vetted, authorized individuals
              and organizations within Canada.
            </p>
            <p>
              The program serves several critical purposes:
            </p>
            <ul>
              <li>
                <strong>National security:</strong> Preventing unauthorized access to defence
                technology and military hardware that could compromise Canadian or allied
                security interests.
              </li>
              <li>
                <strong>ITAR compliance:</strong> Maintaining Canada&apos;s exemptions under
                the U.S. International Traffic in Arms Regulations, which allow certain
                defence articles to be transferred between the U.S. and Canada without
                individual export licences — provided the Canadian recipient is CGP-registered.
              </li>
              <li>
                <strong>Supply chain integrity:</strong> Ensuring that every link in the
                defence manufacturing supply chain — from prime contractors to sub-tier
                suppliers — meets the same security standards for handling controlled goods.
              </li>
              <li>
                <strong>International obligations:</strong> Demonstrating to allied nations
                that Canada has robust controls in place for protecting sensitive defence
                information and technology.
              </li>
            </ul>

            <h2>What CGP Certification Requires</h2>
            <p>
              Obtaining CGP certification is not a simple paperwork exercise. The registration
              process requires organizations to demonstrate that they have the security
              infrastructure, personnel controls, and procedures in place to properly
              safeguard controlled goods. The key requirements include:
            </p>

            <h3>Designated Official</h3>
            <p>
              Every registered organization must appoint a Designated Official who is
              responsible for the company&apos;s compliance with the Controlled Goods
              Regulations. This individual undergoes a security assessment by PSPC and is
              personally accountable for ensuring that the organization&apos;s controlled
              goods procedures are followed. The Designated Official is responsible for
              authorizing which employees may access controlled goods and for maintaining
              all required records and security plans.
            </p>

            <h3>Security Assessments</h3>
            <p>
              All individuals who will have access to controlled goods — including the
              Designated Official, employees, and contractors — must undergo security
              assessments conducted by PSPC. These assessments verify the identity,
              criminal record, and reliability of each individual. No person may access
              controlled goods until their assessment has been completed and approved.
            </p>

            <h3>Security Plan</h3>
            <p>
              Registered organizations must develop and maintain a comprehensive security
              plan that details how controlled goods will be protected within their facility.
              This plan covers:
            </p>
            <ul>
              <li>Physical security measures (locked storage, restricted access areas, surveillance)</li>
              <li>Information security controls (document handling, digital data protection, visitor access)</li>
              <li>Employee access procedures and record-keeping</li>
              <li>Incident reporting and response procedures</li>
              <li>Procedures for receiving, transferring, and disposing of controlled goods</li>
            </ul>

            <h3>Record-Keeping and Reporting</h3>
            <p>
              CGP-registered organizations must maintain detailed records of all controlled
              goods in their possession, including receipt, transfer, and disposal records.
              These records must be available for inspection by PSPC at any time. Any security
              incidents, unauthorized access, or potential breaches must be reported to PSPC
              promptly.
            </p>

            <h3>Ongoing Compliance</h3>
            <p>
              Registration is not a one-time event. PSPC conducts periodic compliance
              inspections to verify that registered organizations continue to meet all
              requirements. Organizations must keep their security plans current, ensure new
              employees undergo assessments before accessing controlled goods, and report any
              changes that could affect their compliance status.
            </p>

            <h2>How CGP Relates to ITAR</h2>
            <p>
              One of the most practical benefits of CGP registration is its relationship with
              the United States International Traffic in Arms Regulations. Under ITAR, the
              export of defence articles and technical data from the U.S. normally requires
              a State Department licence. However, the Canadian exemptions under ITAR (22 CFR
              126.5) allow certain controlled defence items to be transferred to Canada
              without individual licences — provided the Canadian recipient is registered
              under the Controlled Goods Program.
            </p>
            <p>
              This means that for Canadian manufacturers working on U.S. defence programs
              or receiving ITAR-controlled technical data and components from American prime
              contractors, CGP registration is not optional — it is a prerequisite for
              participating in the supply chain. Without it, U.S. companies cannot legally
              transfer controlled articles to a Canadian supplier.
            </p>

            <h2>How Tru-Tech&apos;s CGP Certification Supports Your Supply Chain</h2>
            <p>
              With our CGP certification now in place, Tru-Tech Precision is positioned to
              support defence and aerospace customers in ways that were previously not
              possible. Here is what this means for our customers:
            </p>

            <h3>Defence Component Manufacturing</h3>
            <p>
              We can now manufacture precision-machined components for defence programs that
              involve controlled goods. Whether you need parts for military aircraft,
              naval systems, land defence vehicles, or space and satellite applications,
              Tru-Tech has the security clearance and quality systems to handle your
              controlled goods requirements alongside our existing AS9100 certification.
            </p>

            <h3>ITAR-Controlled Technical Data</h3>
            <p>
              Our CGP registration enables us to receive and work with ITAR-controlled
              technical data — engineering drawings, specifications, and manufacturing
              instructions that are classified as defence articles. This is essential for
              sub-contract work on U.S. defence programs where the technical package includes
              ITAR-controlled information.
            </p>

            <h3>Secure Handling and Traceability</h3>
            <p>
              Our facility now has the physical and procedural security infrastructure
              required for controlled goods. This includes restricted access controls,
              secure storage, documented chain of custody, and vetted personnel. Combined
              with our AS9100 quality system, this provides a complete framework for
              manufacturing, inspecting, and delivering controlled goods with full
              traceability and security compliance.
            </p>

            <h3>Simplified Procurement for Prime Contractors</h3>
            <p>
              If you are a prime contractor or Tier-1 supplier managing a defence supply
              chain, working with a CGP-registered sub-contractor simplifies your compliance
              obligations. You can transfer controlled goods and technical data to Tru-Tech
              without the administrative burden of arranging individual export permits or
              exemptions — our CGP registration provides the legal framework for compliant
              transfers.
            </p>

            <h3>Combined Certifications</h3>
            <p>
              Tru-Tech&apos;s CGP certification sits alongside our existing AS9100
              certification, creating a comprehensive quality and security framework. AS9100
              ensures that our manufacturing processes, inspection procedures, and
              traceability systems meet aerospace industry standards. CGP ensures that our
              security controls meet federal requirements for handling defence-related items.
              Together, these certifications demonstrate that Tru-Tech has the capability
              to deliver precision components for the most demanding defence and aerospace
              applications.
            </p>

            <h2>Industries That Benefit from Our CGP Certification</h2>
            <p>
              While CGP applies broadly to any work involving controlled goods, the
              industries most directly affected include:
            </p>
            <ul>
              <li>
                <strong>Defence and military:</strong> Components for weapons systems,
                military vehicles, communication equipment, and support infrastructure.
              </li>
              <li>
                <strong>Aerospace:</strong> Parts for military aircraft, helicopters, UAVs,
                and defence-related avionics and propulsion systems.
              </li>
              <li>
                <strong>Naval and marine:</strong> Components for naval vessels, submarines,
                and maritime defence systems.
              </li>
              <li>
                <strong>Space:</strong> Satellite components, launch vehicle hardware, and
                space-based defence systems.
              </li>
              <li>
                <strong>Electronics:</strong> Defence electronics, radar systems, guidance
                and navigation equipment, and electronic warfare components.
              </li>
            </ul>

            <h2>What This Means Going Forward</h2>
            <p>
              Our CGP certification opens a new chapter for Tru-Tech Precision. We have
              always been committed to serving the most demanding industries with precision
              machining, rigorous quality management, and reliable delivery. Adding CGP to
              our certifications extends that commitment into the defence sector, allowing
              us to take on work that requires the highest levels of security and compliance.
            </p>
            <p>
              For our existing customers, this means expanded capability — we can now support
              programmes that include controlled goods without you needing to source a
              separate CGP-registered supplier. For new customers in the defence sector, this
              means Tru-Tech is ready to be part of your supply chain from day one, with the
              certifications, processes, and security infrastructure already in place.
            </p>
            <p>
              If you have a project involving controlled goods or need a CGP-registered
              precision machining partner,{" "}
              <Link href="/contact" className="text-[#17135F] font-semibold hover:underline">
                contact our team
              </Link>{" "}
              to discuss how we can support your requirements.
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
