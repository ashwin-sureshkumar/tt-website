import Link from "next/link";

export function CTASection() {
  return (
    <section className="bg-[#17135F] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Start Your Next Project?
        </h2>
        <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Get a quote from our engineering team. We specialize in precision
          manufacturing for the most demanding industries.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-block bg-white text-[#17135F] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Request a Quote
          </Link>
          <Link
            href="/contact"
            className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
          >
            Speak with Our Experts
          </Link>
        </div>
      </div>
    </section>
  );
}
