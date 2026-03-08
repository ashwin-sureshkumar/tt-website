import { PageHeader } from "@/components/PageHeader";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/jsonld";
import { createMetadata } from "@/lib/metadata";
import { blogPosts, formatDate } from "@/lib/blog";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";

export const metadata = createMetadata({
  title: "Blog | CNC Machining & Aerospace Manufacturing Insights",
  description:
    "Insights on precision CNC machining, aerospace manufacturing, material selection, and quality management from the Tru-Tech Precision engineering team.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          name: "Blog",
          description:
            "Insights on precision CNC machining and aerospace manufacturing.",
          path: "/blog",
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blog" },
        ])}
      />

      <PageHeader
        title="Blog"
        subtitle="Insights and expertise from our engineering team"
      />
      <BreadcrumbNav items={[{ label: "Blog" }]} />

      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-3 left-3 bg-[#17135F] text-white text-xs font-semibold px-3 py-1 rounded">
                    {post.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                    <span>{formatDate(post.date)}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#17135F] transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-sm mb-4">
                    {post.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#17135F]">
                    Read Article <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <CTASection />
    </>
  );
}
