import { PageHeader } from "@/components/PageHeader";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/jsonld";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Gallery",
  description:
    "Browse examples of precision-machined components by Tru-Tech Precision Inc. Aerospace brackets, CNC machined shafts, custom metal parts, and more.",
  path: "/gallery",
});

const galleryImages = [
  {
    url: "/assets/dbb72e773d50dc8fe7b483bd97200ade80613d28.png",
    alt: "Precision machined aerospace bracket",
    category: "Aerospace",
  },
  {
    url: "/assets/975f7e5a6f4a3a9d57d89074890e552ea75a2c1a.png",
    alt: "CNC machined threaded shaft component",
    category: "CNC Turning",
  },
  {
    url: "/assets/a8e8e9a0072478ad9238d8c4dad6406cb4a944a3.png",
    alt: "Custom metal bracket with mounting holes",
    category: "CNC Milling",
  },
  {
    url: "/assets/c6b03f6a41805f17037fce593f81fac664910cde.png",
    alt: "Precision threaded spindle component",
    category: "CNC Turning",
  },
  {
    url: "/assets/ae94597534e4748a6db29d32abadf63f90848517.png",
    alt: "Complex machined circular component",
    category: "5-Axis Machining",
  },
  {
    url: "/assets/6574e72f4dbce096d64aa637eca5a23e3595c0aa.png",
    alt: "Gold anodized precision mounting bracket",
    category: "Anodized Parts",
  },
];

export default function GalleryPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          name: "Gallery",
          description:
            "Browse examples of precision-machined components by Tru-Tech Precision.",
          path: "/gallery",
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "Gallery", href: "/gallery" },
        ])}
      />

      <PageHeader
        title="Our Work"
        subtitle="Explore examples of our precision-manufactured components across various industries"
      />
      <BreadcrumbNav items={[{ label: "Gallery" }]} />

      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative h-80 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group"
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-xs font-semibold uppercase tracking-wider bg-[#17135F] px-2 py-1 rounded">
                      {image.category}
                    </span>
                    <p className="font-semibold mt-2">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <CTASection />
    </>
  );
}
