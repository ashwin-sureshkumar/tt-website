import Link from "next/link";

export function Hero() {
  return (
    <section id="home" className="pt-16">
      <div className="relative h-[600px] overflow-hidden">
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
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Precision Engineering Excellence
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              Delivering high-quality manufacturing solutions with unmatched
              precision and reliability
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#17135F] hover:bg-[#17135F]/90 text-white px-8 py-4 rounded-lg transition-colors text-lg border border-white"
            >
              Get a Quote
            </Link>
          </div>

          <div className="hidden lg:block">
            <img
              src="/assets/1458f26437ca425f03f4b0d18ae3ec02eeae4c05.png"
              alt="AS9100 Aerospace & Defense Certification"
              className="w-20 h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
