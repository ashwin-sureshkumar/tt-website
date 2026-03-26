import Link from "next/link";

export function Hero() {
  return (
    <section id="home" className="pt-20 md:pt-24">
      <div className="relative h-[360px] md:h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/f1d81dfb78f777254585b689064636706fca1dff.png"
            alt="Precision CNC machining"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          <div className="text-white max-w-2xl">
            <h1 className="text-3xl md:text-6xl font-bold mb-3 md:mb-6">
              Precision Engineering Excellence
            </h1>
            <p className="text-base md:text-2xl mb-2 md:mb-4 text-gray-100">
              Delivering high-quality manufacturing solutions with unmatched
              precision and reliability
            </p>
            <p className="text-[11px] sm:text-base md:text-lg font-bold text-gray-200 mb-4 md:mb-8">
              AS9100D &middot; ISO 9001:2015 &middot; Controlled Goods Program
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#17135F] hover:bg-[#17135F]/90 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg transition-colors text-sm md:text-lg border border-white"
            >
              Get a Quote
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
