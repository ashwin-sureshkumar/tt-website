import { CheckCircle } from "lucide-react";

const highlights = [
  "ISO 9001:AS9100 Certified",
  "13+ Years of Experience",
  "Advanced CNC Technology",
  "Made in Ontario",
  "Women-owned and led",
];

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              About Tru-Tech Precision
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              With over 12 years of experience in precision manufacturing,
              Tru-Tech Precision has established itself as a trusted partner for
              industries demanding the highest quality standards.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Our state-of-the-art facility combines cutting-edge technology with
              expert craftsmanship to deliver precision-engineered components that
              exceed expectations. We serve aerospace, nuclear, electronic, and
              space industries with unwavering commitment to quality and
              innovation.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 shrink-0" />
                  <span className="text-gray-700">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
            <img
              src="/assets/7f21666d30b1f73077dc471121aec59f4f0d1958.png"
              alt="Our manufacturing facility"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
