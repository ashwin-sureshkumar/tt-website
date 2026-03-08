import { Cog, Gauge, Wrench, Link2 } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Cog,
    title: "CNC Machining",
    description:
      "State-of-the-art CNC machining for complex parts with tight tolerances and superior surface finishes with lathe and 3-5 axis milling.",
    href: "/services/cnc-machining",
  },
  {
    icon: Gauge,
    title: "Engineering Service",
    description:
      "We provide engineering service to consult on manufacturability, handle deviation requests, and material procurement.",
    href: "/services/engineering-service",
  },
  {
    icon: Wrench,
    title: "AOG & Speed Shop",
    description:
      "Rapid machining service to meet your immediate needs quickly and efficiently.",
    href: "/services/aog-speed-shop",
  },
  {
    icon: Link2,
    title: "Supply Chain Management",
    description:
      "End-to-end supply chain support including material procurement, vendor management, and coordinated delivery to meet your production schedules.",
    href: "/services/engineering-service",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive manufacturing solutions tailored to your
            industry needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link
                key={index}
                href={service.href}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow group"
              >
                <div className="w-12 h-12 bg-[#17135F] rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#17135F] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </Link>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1711418235199-171c8ecb9d12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbmMlMjBtYWNoaW5pbmclMjBtZXRhbHxlbnwxfHx8fDE3Njk3MTM5MDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="CNC machining in action"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1768796372343-99ed316eb5ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWFsaXR5JTIwY29udHJvbCUyMG1hbnVmYWN0dXJpbmd8ZW58MXx8fHwxNzY5NjgxMzc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Quality control process"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
