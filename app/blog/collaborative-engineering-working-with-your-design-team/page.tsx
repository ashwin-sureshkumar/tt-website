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
  (p) => p.slug === "collaborative-engineering-working-with-your-design-team"
)!;

export const metadata = createMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${post.slug}`,
});

export default function CollaborativeEngineeringArticle() {
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
              A precision machined part is only as good as the thinking that went into it before
              the spindle starts turning. At Tru-Tech Precision, we have learned that the best
              outcomes happen when our engineering team and our customer&apos;s design team work
              together — not in sequence, but side by side. We are not a shop that simply
              receives a drawing, quotes it, and machines it without question. We actively engage
              with your engineers to make sure every part we produce is manufacturable, cost
              effective, and built to perform exactly as intended.
            </p>
            <p>
              This collaborative approach is not an add-on service. It is how we operate on every
              project, from first article prototypes to full production runs. And it is one of the
              reasons our customers keep coming back.
            </p>

            <h2>Why Collaboration Matters in Precision Manufacturing</h2>
            <p>
              Design engineers are experts in what a part needs to do. Manufacturing engineers
              are experts in how to make it. Problems arise when these two perspectives do not
              talk to each other early enough.
            </p>
            <p>
              A design might call for a tolerance that is technically achievable but adds
              significant cost because it requires secondary operations or specialized fixturing.
              A wall thickness might look fine in CAD but creates chatter or deflection during
              machining that compromises surface finish. A material callout might meet the
              performance requirement but have a 16-week lead time when an equally suitable
              alternative is available in days.
            </p>
            <p>
              These are not design mistakes — they are gaps between design intent and
              manufacturing reality. Closing those gaps early saves time, reduces cost, and
              produces better parts. That is where our team comes in.
            </p>

            <h2>How We Work with Your Engineering Team</h2>

            <h3>Early Design Review</h3>
            <p>
              We encourage customers to involve us as early as possible — ideally while the
              design is still in development, not after the drawing is released. Our engineers
              review your CAD models and drawings with a manufacturing lens, looking for
              opportunities to improve the design without compromising performance. This
              complimentary Design for Manufacturability (DFM) review is available on every new
              project.
            </p>
            <p>
              During a DFM review, we examine:
            </p>
            <ul>
              <li>
                <strong>Tolerance optimization:</strong> Are the specified tolerances necessary for
                function, or can some be relaxed without affecting performance? Tighter tolerances
                mean slower machining speeds, more inspection time, and higher cost. We identify
                which dimensions are truly critical and which ones offer room for optimization.
              </li>
              <li>
                <strong>Feature accessibility:</strong> Can every feature on the part be reached
                with standard tooling and reasonable setups? Deep pockets, thin walls, small
                internal radii, and features that require the part to be flipped multiple times
                all add complexity. We suggest alternatives that achieve the same function with
                simpler manufacturing.
              </li>
              <li>
                <strong>Material selection:</strong> Is the specified material the best choice for
                both performance and machinability? Sometimes a different alloy or temper condition
                machines more efficiently, costs less, and delivers equivalent mechanical
                properties. We bring that shop-floor perspective to the conversation.
              </li>
              <li>
                <strong>Surface finish achievability:</strong> The surface finish called out on the
                drawing needs to be achievable with the machining process and tooling used. We
                flag callouts that may require additional operations like grinding or lapping and
                discuss whether the application truly requires that level of finish.
              </li>
            </ul>

            <h3>Influencing Design for Better Outcomes</h3>
            <p>
              We do not just flag problems — we propose solutions. When we see an opportunity to
              improve a design, we present specific recommendations with clear reasoning. Our
              engineers explain what we would change, why the change benefits the customer, and
              what the impact is on cost and lead time. The final decision always stays with the
              customer&apos;s engineering team, but we make sure they have the manufacturing
              perspective they need to make an informed choice.
            </p>
            <p>
              Here are examples of design influence that have saved our customers real time and
              money:
            </p>
            <ul>
              <li>
                <strong>Consolidating setups:</strong> A bracket originally designed with features
                on six sides required four separate setups to machine. By suggesting minor geometry
                changes — shifting a hole pattern by a few millimetres and adjusting a pocket
                orientation — the part could be completed in two setups. The customer saved roughly
                40% on per-part machining cost with zero impact on fit or function.
              </li>
              <li>
                <strong>Relaxing non-critical tolerances:</strong> A housing had a general profile
                tolerance of 0.001&quot; applied across the entire part. After reviewing the assembly
                with the customer&apos;s engineers, we identified that only two mating surfaces actually
                needed that tolerance. Relaxing the rest to 0.005&quot; cut inspection time in half and
                reduced scrap rate.
              </li>
              <li>
                <strong>Material substitution:</strong> A customer specified a titanium alloy for a
                structural bracket based on weight requirements. Our team suggested a high-strength
                aluminum alloy that met the same strength-to-weight ratio for this particular
                application. The aluminum machined four times faster, cost significantly less in raw
                material, and had immediate availability versus an eight-week lead time for the
                titanium.
              </li>
              <li>
                <strong>Adding draft angles and radii:</strong> A component designed with sharp
                internal corners required EDM operations to achieve. By working with the
                customer&apos;s team to add small radii that their assembly could accommodate, the part
                became fully machinable on our 5-axis mills — eliminating EDM cost and cutting lead
                time by over a week.
              </li>
            </ul>

            <h3>Open Communication Throughout Production</h3>
            <p>
              Collaboration does not end once the drawing is approved. During production, our team
              maintains direct communication with your engineers. If we encounter an unexpected
              challenge — a material inconsistency, a feature that behaves differently than
              expected during machining, or an opportunity to improve the process — we pick up the
              phone. We do not make assumptions, and we do not wait until shipment to surface
              issues.
            </p>
            <p>
              This is especially important for first article runs, where the part is being
              manufactured for the first time. First articles often reveal things that neither the
              design team nor the manufacturing team fully anticipated. Our approach is to treat
              the first article as a joint learning exercise — documenting what worked, what
              needed adjustment, and feeding that knowledge back into the process for production
              runs.
            </p>

            <h2>Handling Deviations Collaboratively</h2>
            <p>
              Even with the best planning, manufacturing sometimes produces results that do not
              perfectly match the drawing. When this happens, our approach is transparent and
              solution-oriented.
            </p>
            <p>
              We document the deviation with precise measurements and supporting data, then
              present it to your engineering team with our assessment of the impact on fit, form,
              and function. We provide options — rework, use-as-is with engineering approval, or
              scrap and remake — along with our recommendation and the rationale behind it. The
              customer&apos;s engineering team makes the final call, but they make it with all the
              information they need.
            </p>
            <p>
              This process is formal and traceable under our AS9100 quality system. Every
              deviation is documented, dispositioned, and recorded. But the spirit behind it is
              collaborative — we are working with your team to find the best outcome, not just
              pushing paperwork.
            </p>

            <h2>Why This Approach Works</h2>
            <p>
              Aerospace and defence manufacturing does not reward a transactional relationship
              between customer and supplier. Parts are too complex, tolerances too tight, and
              stakes too high for a shop to simply take an order and hope for the best. The
              suppliers who deliver consistent quality and value are the ones who invest in
              understanding their customer&apos;s application and contribute their manufacturing
              expertise to the process.
            </p>
            <p>
              At Tru-Tech, our collaborative engineering approach delivers tangible results:
            </p>
            <ul>
              <li>
                <strong>Lower part cost:</strong> DFM recommendations and design optimizations
                routinely reduce per-part cost by identifying unnecessary complexity before
                production begins.
              </li>
              <li>
                <strong>Shorter lead times:</strong> Resolving manufacturability questions up front
                prevents delays during production. Parts move through the shop faster when the
                process plan is solid from the start.
              </li>
              <li>
                <strong>Higher first-pass yield:</strong> When designs are optimized for
                manufacturing, fewer parts are scrapped or require rework. This means better
                on-time delivery and less waste.
              </li>
              <li>
                <strong>Fewer surprises:</strong> Open communication and early involvement mean
                that issues are caught and resolved before they become expensive problems. No one
                likes surprises in aerospace manufacturing.
              </li>
              <li>
                <strong>Stronger long-term partnerships:</strong> Customers who experience this
                level of engagement do not shop on price alone. They value a supplier who actively
                contributes to their success — and that builds relationships that last.
              </li>
            </ul>

            <h2>We Work as an Extension of Your Team</h2>
            <p>
              When you work with Tru-Tech, you are not just getting a machine shop — you are
              getting a manufacturing engineering partner that is invested in your outcome. Our
              engineers bring decades of combined experience machining complex parts for aerospace,
              nuclear, space, and marine applications. That experience is available to your team
              from the moment you share a drawing with us.
            </p>
            <p>
              Whether you are developing a new component and want manufacturing input early,
              looking to reduce cost on an existing production part, or need a supplier who will
              work through a challenging design with your engineers rather than simply rejecting
              the quote — we are built for that kind of work.
            </p>
            <p>
              If you want a manufacturing partner who thinks with you, not just builds for
              you,{" "}
              <Link href="/contact" className="text-[#17135F] font-semibold hover:underline">
                let&apos;s talk
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
