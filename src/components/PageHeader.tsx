export function PageHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative bg-[#17135F] pt-32 pb-16">
      <div className="absolute inset-0 bg-gradient-to-br from-[#17135F] to-[#0d0b3a]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
