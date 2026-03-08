export function TrustSignals() {
  return (
    <section className="py-10 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-gray-400 uppercase tracking-wider mb-8">
          Certified &amp; Trusted
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
          <div className="flex flex-col items-center gap-3">
            <img
              src="/assets/1458f26437ca425f03f4b0d18ae3ec02eeae4c05.png"
              alt="NQA AS9100 Aerospace & Defense Certification"
              className="h-24 w-auto"
            />
            <div className="text-center text-white">
              <div className="text-sm font-bold">AS9100 Rev D</div>
              <div className="text-xs text-gray-300">ISO 9001:2015</div>
            </div>
          </div>
          <img
            src="/assets/ontario-made-logo.png"
            alt="Ontario Made - Certified Ontario Manufacturer"
            className="h-20 w-auto"
          />
        </div>
      </div>
    </section>
  );
}
