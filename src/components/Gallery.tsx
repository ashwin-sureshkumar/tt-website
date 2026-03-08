import Link from "next/link";
import { ArrowRight } from "lucide-react";

const galleryImages = [
  {
    url: "/assets/dbb72e773d50dc8fe7b483bd97200ade80613d28.png",
    alt: "Precision machined aerospace bracket",
  },
  {
    url: "/assets/975f7e5a6f4a3a9d57d89074890e552ea75a2c1a.png",
    alt: "CNC machined threaded shaft component",
  },
  {
    url: "/assets/a8e8e9a0072478ad9238d8c4dad6406cb4a944a3.png",
    alt: "Custom metal bracket with mounting holes",
  },
  {
    url: "/assets/ae94597534e4748a6db29d32abadf63f90848517.png",
    alt: "Complex machined circular component",
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
