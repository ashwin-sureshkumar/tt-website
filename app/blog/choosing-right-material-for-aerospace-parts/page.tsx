import { PageHeader } from "@/components/PageHeader";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/jsonld";
import { createMetadata } from "@/lib/metadata";
import { blogPosts, formatDate } from "@/lib/blog";
import Link from "next/link";
import { Clock, ArrowLeft } from "lucide-react";

const post = blogPosts[2];

export const metadata = createMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${post.slug}`,
});

export default function MaterialSelectionArticle() {
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
              Material selection is one of the most consequential decisions in aerospace
              component design. The right material balances strength, weight, corrosion
              resistance, temperature performance, and machinability — while the wrong
              choice can lead to premature failure, unnecessary cost, or manufacturing
              difficulties that delay your program.
            </p>

            <h2>Aluminum Alloys: The Workhorse</h2>
            <p>
              Aluminum remains the most widely used material in aerospace machined components,
              and for good reason. It offers an excellent strength-to-weight ratio, machines
              easily, and is readily available at reasonable cost.
            </p>
            <h3>Common Aerospace Grades</h3>
            <ul>
              <li>
                <strong>6061-T6:</strong> Good all-around alloy with excellent machinability
                and corrosion resistance. Widely used for structural brackets, housings, and
                non-critical structural components. Lower cost than other aerospace aluminums.
              </li>
              <li>
                <strong>7075-T6:</strong> Significantly higher strength than 6061, approaching
                some steels. The go-to choice for structural aerospace components where strength
                matters. Slightly more difficult to machine and less corrosion-resistant than 6061.
              </li>
              <li>
                <strong>2024-T3:</strong> Excellent fatigue resistance, making it ideal for
                components subject to cyclic loading. Common in fuselage and wing structures.
                Poor corrosion resistance — typically requires surface treatment.
              </li>
            </ul>
            <p>
              <strong>Best for:</strong> Structural brackets, housings, mounting plates, and any
              application where weight is critical but temperatures remain below 150°C.
            </p>

            <h2>Titanium: When Strength and Temperature Matter</h2>
            <p>
              Titanium offers the highest strength-to-weight ratio of common aerospace metals,
              with excellent corrosion resistance and temperature capability up to approximately
              315°C. The trade-off is cost — both material and machining costs are significantly
              higher than aluminum.
            </p>
            <h3>Key Grades</h3>
            <ul>
              <li>
                <strong>Grade 5 (Ti-6Al-4V):</strong> The most widely used titanium alloy in
                aerospace, accounting for over 50% of all titanium used. Excellent strength,
                good fatigue resistance, and proven track record in flight-critical applications.
              </li>
              <li>
                <strong>Grade 2 (Commercially Pure):</strong> Lower strength than Grade 5 but
                excellent corrosion resistance and better formability. Used in fluid system
                components, exhaust hardware, and marine-adjacent aerospace applications.
              </li>
            </ul>
            <p>
              <strong>Best for:</strong> Engine components, landing gear hardware, fasteners,
              and structural components where aluminum is not strong enough or temperatures
              exceed aluminum limits.
            </p>

            <h2>Inconel: Extreme Temperature Performance</h2>
            <p>
              Inconel alloys (primarily 625 and 718) maintain their mechanical properties at
              temperatures where other metals weaken or fail — up to 700°C for Inconel 718.
              This makes them essential for hot-section components in jet engines and other
              extreme-temperature applications.
            </p>
            <p>
              Inconel is challenging to machine. It work-hardens rapidly, generates significant
              heat during cutting, and is abrasive to tooling. This means longer cycle times,
              more frequent tool changes, and higher machining costs. However, for applications
              that demand extreme temperature resistance, there is often no substitute.
            </p>
            <p>
              <strong>Best for:</strong> Turbine hardware, exhaust components, combustion chamber
              parts, and any application with sustained temperatures above 315°C.
            </p>

            <h2>Stainless Steel: Corrosion Resistance with Strength</h2>
            <p>
              Stainless steels offer a middle ground — stronger and more temperature-resistant
              than aluminum, more affordable and easier to machine than titanium, with excellent
              corrosion resistance.
            </p>
            <ul>
              <li>
                <strong>303:</strong> The most machinable stainless steel. Used for non-critical
                components where corrosion resistance is needed but strength requirements are moderate.
              </li>
              <li>
                <strong>304/316:</strong> Excellent corrosion resistance for fluid handling
                components, fittings, and hardware exposed to harsh environments.
              </li>
              <li>
                <strong>17-4 PH:</strong> Precipitation-hardened stainless with high strength
                (up to 190 ksi). Used for high-strength fasteners, shafts, and structural
                components where corrosion resistance and strength are both critical.
              </li>
            </ul>
            <p>
              <strong>Best for:</strong> Fluid system components, fasteners, shafts, and
              applications requiring both corrosion resistance and moderate-to-high strength.
            </p>

            <h2>Making the Right Choice</h2>
            <p>
              Material selection should be driven by the functional requirements of your
              application — not habit or preference. Consider these factors in order of priority:
            </p>
            <ol>
              <li><strong>Operating temperature</strong> — eliminates options that cannot perform</li>
              <li><strong>Strength requirements</strong> — defines the minimum material capability</li>
              <li><strong>Weight constraints</strong> — favors aluminum and titanium</li>
              <li><strong>Corrosion environment</strong> — may require specific alloys or treatments</li>
              <li><strong>Cost and availability</strong> — practical considerations that affect lead time</li>
            </ol>
            <p>
              At Tru-Tech Precision, our engineering team works with all of these materials daily.
              We can help you evaluate trade-offs and recommend the best material for your specific
              application. Our{" "}
              <Link
                href="/services/engineering-service"
                className="text-[#17135F] font-semibold hover:underline"
              >
                complimentary DFM review
              </Link>{" "}
              includes material selection guidance based on your performance requirements and budget.{" "}
              <Link href="/contact" className="text-[#17135F] font-semibold hover:underline">
                Contact us
              </Link>{" "}
              to get started.
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
