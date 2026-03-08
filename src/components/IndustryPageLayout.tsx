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

export function IndustryPageLayout({
  title,
  subtitle,
  description,
  path,
  faqs = [],
  relatedServices,
  children,
}: {
  title: string;
  subtitle: string;
  description: string;
  path: string;
  faqs?: { question: string; answer: string }[];
  relatedServices: { title: string; href: string }[];
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
          { name: "Industries", href: "/#industries" },
          { name: title, href: path },
        ])}
      />
      {faqs.length > 0 && <JsonLd data={faqSchema(faqs)} />}

      <PageHeader title={title} subtitle={subtitle} />
      <BreadcrumbNav
        items={[
          { label: "Industries", href: "/#industries" },
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

          {/* Related Services */}
          {relatedServices.length > 0 && (
            <section className="mt-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Services
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedServices.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="bg-gray-50 hover:bg-[#17135F] hover:text-white p-6 rounded-lg font-medium text-gray-900 transition-colors text-center"
                  >
                    {service.title}
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
