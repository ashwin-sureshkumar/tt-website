import Link from "next/link";
import { ArrowRight } from "lucide-react";

const industries = [
  {
    title: "Aerospace",
    description: "AS9100 certified precision components for aircraft and aviation systems.",
    href: "/industries/aerospace",
    image: "/assets/industry-aerospace.jpg",
  },
  {
    title: "Space",
    description: "Components engineered for the extreme environments of space.",
    href: "/industries/space",
    image: "/assets/industry-space.jpg",
  },
  {
    title: "Marine",
    description: "Precision components for marine vessels and offshore applications.",
    href: "/industries/marine",
    image: "/assets/industry-marine.jpg",
  },
  {
    title: "Nuclear",
    description: "Nuclear-grade materials with complete traceability and documentation.",
    href: "/industries/nuclear",
    image: "/assets/industry-nuclear.jpg",
  },
  {
    title: "Electronic",
    description: "High-precision components for electronic systems and assemblies.",
    href: "/industries/electronic",
    image: "/assets/industry-electronic.jpg",
  },
  {
    title: "Commercial",
    description: "Precision machined parts for commercial and industrial applications.",
    href: "/industries/commercial",
    image: "/assets/industry-railway.jpg",
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
