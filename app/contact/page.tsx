import { Contact } from "@/components/Contact";
import { PageHeader } from "@/components/PageHeader";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";
import { createMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/jsonld";

export const metadata = createMetadata({
  title: "Contact Us",
  description:
    "Contact Tru-Tech Precision Inc. for precision CNC machining quotes. Call (905) 828-5055 or email sales@trutechprecision.com. Located in Mississauga, Ontario.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          name: "Contact Us",
          description: "Contact Tru-Tech Precision for quotes and inquiries.",
          path: "/contact",
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "Contact", href: "/contact" },
        ])}
      />
      <PageHeader
        title="Contact Us"
        subtitle="Ready to discuss your next project? Get in touch with our team"
      />
      <BreadcrumbNav items={[{ label: "Contact" }]} />
      <main className="pb-8">
        <Contact />
      </main>
    </>
  );
}
