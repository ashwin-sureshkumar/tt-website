import Link from "next/link";
import { ArrowRight } from "lucide-react";

const galleryImages = [
  {
    url: "/assets/gallery-202511270007.jpg",
    alt: "Precision machined block assemblies with threaded bores",
  },
  {
    url: "/assets/gallery-202512030027.jpg",
    alt: "Complex anodized ring with internal profile machining",
  },
  {
    url: "/assets/gallery-202512030038.jpg",
    alt: "Brass manifold plate with precision-bored holes",
  },
  {
    url: "/assets/gallery-202512030025.jpg",
    alt: "Anodized retaining ring with slotted features",
  },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Work</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Precision-manufactured components across aerospace, nuclear,
            and more
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative h-64 rounded-lg overflow-hidden shadow-lg group"
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <p className="text-sm font-semibold">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-[#17135F] font-semibold hover:underline text-lg"
          >
            View Full Gallery
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
