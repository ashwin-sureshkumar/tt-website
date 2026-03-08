import { Shield, Award, FileCheck, Users } from 'lucide-react';

const qualityFeatures = [
  {
    icon: Shield,
    title: 'AS9100 Certified',
    description: 'Our AS9100 certification ensures the highest quality standards for aerospace and defense manufacturing.',
  },
  {
    icon: Award,
    title: 'ISO 9001 Compliant',
    description: 'We maintain rigorous quality management systems that meet international ISO 9001 standards.',
  },
  {
    icon: FileCheck,
    title: 'Complete Traceability',
    description: 'Full material and process traceability for every component, ensuring complete documentation.',
  },
  {
    icon: Users,
    title: 'Expert Inspection',
    description: 'Our experienced quality team conducts thorough inspections using advanced measurement equipment.',
  },
];

export function QualityAssurance() {
  return (
    <section id="quality" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Quality Assurance</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our commitment to quality is unwavering. Every component undergoes rigorous inspection 
            and testing to ensure it meets or exceeds industry standards.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {qualityFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-[#17135F] rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Quality Process</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="text-[#17135F] font-bold text-lg mb-2">1. Incoming Inspection</div>
              <p className="text-gray-600">
                All raw materials are verified against specifications and certificates of conformity.
              </p>
            </div>
            <div>
              <div className="text-[#17135F] font-bold text-lg mb-2">2. In-Process Verification</div>
              <p className="text-gray-600">
                Continuous monitoring during production ensures every step meets quality standards.
              </p>
            </div>
            <div>
              <div className="text-[#17135F] font-bold text-lg mb-2">3. Final Inspection</div>
              <p className="text-gray-600">
                Complete dimensional and visual inspection with detailed documentation before delivery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
