import { IndustryPageLayout } from "@/components/IndustryPageLayout";
import { createMetadata } from "@/lib/metadata";
import { serviceLinks } from "@/lib/navigation";
import { Rocket, Thermometer, Shield, Microscope } from "lucide-react";

export const metadata = createMetadata({
  title: "Space Industry Manufacturing",
  description:
    "Precision CNC machining for the space industry. Components engineered for extreme environments — vacuum, radiation, thermal cycling, and vibration.",
  path: "/industries/space",
});

export default function SpacePage() {
  return (
    <IndustryPageLayout
      title="Space Industry Manufacturing"
      subtitle="Components engineered for the extreme environments of space"
      description="Precision CNC machining for space industry applications."
      path="/industries/space"
      relatedServices={serviceLinks}
    >
      <section className="prose prose-lg max-w-none mb-16">
        <p className="text-xl text-gray-600 leading-relaxed">
          Space-grade manufacturing demands the highest levels of precision, reliability, and material
          integrity. Components destined for space must perform flawlessly in extreme conditions —
          vacuum, radiation, dramatic thermal cycling, and intense vibration during launch. Tru-Tech
          Precision manufactures components for satellite systems, launch vehicles, ground support
          equipment, and space exploration hardware.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed">
          Our AS9100 certified quality system provides the framework for the enhanced documentation
          and process control that space programs require. We work with space-qualified materials
          and maintain the complete traceability chains needed for components in these critical
          applications. From prototype development through flight hardware production, our team
          delivers the quality and reliability the space industry demands.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Space Manufacturing Capabilities
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              icon: Rocket,
              title: "Launch Vehicle Components",
              desc: "Structural brackets, valve bodies, manifolds, and hardware for launch vehicle systems. Manufactured from high-strength alloys with the tight tolerances and surface finishes required for flight hardware.",
            },
            {
              icon: Thermometer,
              title: "Thermal Management",
              desc: "Heat sinks, thermal straps, radiator panels, and cold plates designed to manage the extreme thermal environments of space. Machined from high-conductivity materials with precision contact surfaces.",
            },
            {
              icon: Shield,
              title: "Satellite Hardware",
              desc: "Structural components, antenna mounts, optical bench parts, and mechanism housings for satellite systems. Lightweight designs with critical dimensional stability requirements.",
            },
            {
              icon: Microscope,
              title: "Precision Optical Components",
              desc: "Mirror mounts, lens housings, and optical bench components requiring exceptional flatness, surface finish, and positional accuracy for space-based imaging and sensor systems.",
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="bg-gray-50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-[#17135F] rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mb-16 bg-gray-50 p-8 rounded-lg">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Space Environment Challenges We Address
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold text-[#17135F] mb-2">
              Thermal Cycling
            </h3>
            <p className="text-gray-600 text-sm">
              Components experience temperature swings from -150°C to +150°C. Material selection
              and machining processes are optimized for dimensional stability across these extremes.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-[#17135F] mb-2">
              Vacuum Outgassing
            </h3>
            <p className="text-gray-600 text-sm">
              Parts must be free from contaminants that could outgas in vacuum. Our cleaning and
              handling procedures ensure compliance with outgassing requirements.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-[#17135F] mb-2">
              Launch Vibration
            </h3>
            <p className="text-gray-600 text-sm">
              Components must survive the intense vibration and acoustic loads of launch. Proper
              material selection and machining practices ensure structural integrity.
            </p>
          </div>
        </div>
      </section>
    </IndustryPageLayout>
  );
}
