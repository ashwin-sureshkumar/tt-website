import Link from "next/link";
import { ArrowRight } from "lucide-react";

const industries = [
  {
    title: "Aerospace",
    description: "AS9100 certified precision components for aircraft and aviation systems.",
    href: "/industries/aerospace",
    image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=600&q=80",
  },
  {
    title: "Nuclear",
    description: "Nuclear-grade materials with complete traceability and documentation.",
    href: "/industries/nuclear",
    image: "https://images.unsplash.com/photo-1591439657848-9f4b9ce436b9?w=600&q=80",
  },
  {
    title: "Electronic",
    description: "High-precision components for electronic systems and assemblies.",
    href: "/industries/electronic",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
  },
  {
    title: "Space",
    description: "Components engineered for the extreme environments of space.",
    href: "/industries/space",
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=600&q=80",
  },
];

export function IndustriesOverview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Industries We Serve
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by leading companies across the most demanding industries
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry) => (
            <Link
              key={industry.href}
              href={industry.href}
              className="group relative h-64 rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={industry.image}
                alt={industry.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white mb-1">
                  {industry.title}
                </h3>
                <p className="text-sm text-gray-200 mb-3">
                  {industry.description}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-white group-hover:underline">
                  Learn More <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
