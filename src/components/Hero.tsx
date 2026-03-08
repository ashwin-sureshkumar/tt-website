import Link from "next/link";

export function Hero() {
  return (
    <section id="home" className="pt-24">
      <div className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/f1d81dfb78f777254585b689064636706fca1dff.png"
            alt="Precision CNC machining"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center lg:flex-row lg:items-center lg:justify-between">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Precision Engineering Excellence
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-gray-100">
              Delivering high-quality manufacturing solutions with unmatched
              precision and reliability
            </p>
            <div className="flex items-center gap-3 mb-8">
              <span className="bg-white/20 border border-white/40 text-white text-sm font-semibold px-4 py-1.5 rounded-full">
                AS9100 Certified
              </span>
              <span className="bg-white/20 border border-white/40 text-white text-sm font-semibold px-4 py-1.5 rounded-full">
                ISO 9001:2015
              </span>
            </div>
            <div className="flex items-center gap-6">
              <Link
                href="/contact"
                className="inline-block bg-[#17135F] hover:bg-[#17135F]/90 text-white px-8 py-4 rounded-lg transition-colors text-lg border border-white"
              >
                Get a Quote
              </Link>
              <div className="flex lg:hidden items-center gap-3">
                <img
                  src="/assets/1458f26437ca425f03f4b0d18ae3ec02eeae4c05.png"
                  alt="AS9100 Aerospace Certification"
                  className="w-14 h-auto"
                />
                <div className="text-white">
                  <div className="text-xs font-bold">AS9100 Rev D</div>
                  <div className="text-xs text-gray-300">ISO 9001:2015</div>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex flex-col items-center gap-3">
            <img
              src="/assets/1458f26437ca425f03f4b0d18ae3ec02eeae4c05.png"
              alt="AS9100 Aerospace Certification"
              className="w-24 h-auto"
            />
            <div className="text-center text-white">
              <div className="text-sm font-bold">AS9100 Rev D</div>
              <div className="text-xs text-gray-300">ISO 9001:2015</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
