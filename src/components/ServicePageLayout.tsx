import { PageHeader } from "@/components/PageHeader";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema, faqSchema } from "@/lib/jsonld";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export function ServicePageLayout({
  title,
  subtitle,
  description,
  path,
  faqs,
  relatedIndustries,
  children,
}: {
  title: string;
  subtitle: string;
  description: string;
  path: string;
  faqs: { question: string; answer: string }[];
  relatedIndustries: { title: string; href: string }[];
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd
        data={webPageSchema({ name: title, description, path })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "Services", href: "/#services" },
          { name: title, href: path },
        ])}
      />
      {faqs.length > 0 && <JsonLd data={faqSchema(faqs)} />}

      <PageHeader title={title} subtitle={subtitle} />
      <BreadcrumbNav
        items={[
          { label: "Services", href: "/#services" },
          { label: title },
        ]}
      />

      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {children}

          {/* FAQ Section */}
          {faqs.length > 0 && (
            <section className="mt-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Frequently Asked Questions
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`faq-${index}`}>
                    <AccordionTrigger className="text-left text-lg font-medium">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 text-base">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>
          )}

          {/* Related Industries */}
          {relatedIndustries.length > 0 && (
            <section className="mt-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Industries We Serve
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {relatedIndustries.map((industry) => (
                  <Link
                    key={industry.href}
                    href={industry.href}
                    className="bg-gray-50 hover:bg-[#17135F] hover:text-white p-4 rounded-lg text-center font-medium text-gray-900 transition-colors"
                  >
                    {industry.title}
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>

      <CTASection />
    </>
  );
}
