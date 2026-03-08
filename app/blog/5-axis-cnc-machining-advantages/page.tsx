import { PageHeader } from "@/components/PageHeader";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema, articleSchema } from "@/lib/jsonld";
import { createMetadata } from "@/lib/metadata";
import { blogPosts, formatDate } from "@/lib/blog";
import Link from "next/link";
import { Clock, ArrowLeft } from "lucide-react";

const post = blogPosts[1];

export const metadata = createMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${post.slug}`,
});

export default function FiveAxisArticle() {
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
              Five-axis CNC machining has become a buzzword in precision manufacturing. But it
              is not always the right answer. Understanding when 5-axis capability genuinely
              adds value — and when 3-axis machining does the job just fine — can save you
              money and lead time without sacrificing quality.
            </p>

            <h2>How 5-Axis Machining Works</h2>
            <p>
              A 5-axis CNC machine moves a cutting tool (or the workpiece) along five axes
              simultaneously: the three linear axes (X, Y, Z) plus two rotational axes (typically
              A and C, or B and C). This allows the tool to approach the workpiece from virtually
              any angle in a single setup.
            </p>
            <p>
              Contrast this with a 3-axis machine, where the tool moves only in X, Y, and Z.
              To machine features on multiple faces of a part, the operator must stop the machine,
              reposition the workpiece in the fixture, re-indicate, and resume cutting. Each
              repositioning introduces potential for error and adds setup time.
            </p>

            <h2>When 5-Axis Makes a Real Difference</h2>

            <h3>1. Complex Contoured Surfaces</h3>
            <p>
              Parts with compound curves, blended surfaces, or organic shapes — common in
              turbine blades, impellers, and aerodynamic components — are natural candidates
              for 5-axis. The simultaneous multi-axis motion allows the tool to maintain optimal
              contact angle with the surface, producing better surface finish and more accurate
              geometry than indexed approaches.
            </p>

            <h3>2. Features on Multiple Faces</h3>
            <p>
              If your part has holes, pockets, or features on three or more faces, 5-axis
              machining can complete them in one setup. Fewer setups mean better positional
              accuracy between features, because you eliminate the error introduced each time
              the part is repositioned.
            </p>

            <h3>3. Deep Cavities and Undercuts</h3>
            <p>
              The ability to tilt the tool allows access to features that would be impossible
              or impractical on a 3-axis machine. Deep, narrow pockets can be reached with
              shorter, more rigid tools — reducing vibration and improving surface finish.
            </p>

            <h3>4. Reducing Total Lead Time</h3>
            <p>
              For complex parts that would require four or five setups on a 3-axis machine,
              5-axis machining can compress this into one or two setups. The programming time
              is longer, but total cycle time — including setup, machining, and inspection — is
              often shorter.
            </p>

            <h2>When 3-Axis Is the Better Choice</h2>
            <p>
              Not every part benefits from 5-axis capability. Consider staying with 3-axis when:
            </p>
            <ul>
              <li>
                <strong>Simple prismatic geometry:</strong> Flat surfaces, standard pockets, and
                holes on one or two faces are efficiently handled by 3-axis machines.
              </li>
              <li>
                <strong>High-volume production:</strong> For simpler parts in large quantities,
                3-axis machines often have faster cycle times and lower hourly rates.
              </li>
              <li>
                <strong>Cost sensitivity:</strong> 5-axis machine time carries a premium. If
                the geometry does not require it, you are paying for capability you do not need.
              </li>
            </ul>

            <h2>The Hybrid Approach</h2>
            <p>
              At Tru-Tech Precision, we often use a combination. Rough machining on a 3-axis
              mill to remove material quickly, then finish machining on 5-axis for the features
              that demand it. This approach balances cost and capability — you get the precision
              of 5-axis where it matters without paying the premium for every operation.
            </p>
            <p>
              Our engineering team evaluates every project to recommend the most efficient
              manufacturing approach. Sometimes that means 5-axis. Sometimes 3-axis is the
              right call. The goal is always the best combination of quality, cost, and delivery
              for your specific part.
            </p>

            <h2>Making the Decision</h2>
            <p>
              If you are unsure whether your part needs 5-axis machining, send us your drawings.
              Our engineering team provides complimentary DFM reviews and will recommend the
              most efficient manufacturing approach for your specific requirements.{" "}
              <Link href="/contact" className="text-[#17135F] font-semibold hover:underline">
                Get in touch
              </Link>{" "}
              to discuss your next project.
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
