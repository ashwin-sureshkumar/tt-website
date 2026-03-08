import { Clock, CheckCircle, Award, Users } from "lucide-react";

const stats = [
  {
    icon: Clock,
    value: "13+",
    label: "Years of Experience",
  },
  {
    icon: CheckCircle,
    value: "1000+",
    label: "Projects Completed",
  },
  {
    icon: Users,
    value: "Women",
    label: "Owned & Led",
  },
];

export function TrustSignals() {
  return (
    <section className="py-16 bg-[#17135F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-8 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-12 h-12 mx-auto bg-white/10 rounded-lg flex items-center justify-center mb-3">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Certification Badges */}
        <div className="border-t border-white/20 pt-10">
          <p className="text-center text-sm text-gray-300 uppercase tracking-wider mb-6">
            Certified &amp; Trusted
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="flex items-center gap-4 bg-white/10 rounded-lg px-6 py-4">
              <img
                src="/assets/1458f26437ca425f03f4b0d18ae3ec02eeae4c05.png"
                alt="AS9100 Aerospace Certification"
                className="h-16 w-auto"
              />
              <div className="text-white">
                <div className="font-bold text-lg">AS9100 Rev D</div>
                <div className="text-sm text-gray-300">Aerospace Quality Management</div>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white/10 rounded-lg px-6 py-4">
              <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center">
                <Award className="w-8 h-8 text-[#17135F]" />
              </div>
              <div className="text-white">
                <div className="font-bold text-lg">ISO 9001:2015</div>
                <div className="text-sm text-gray-300">Quality Management System</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
