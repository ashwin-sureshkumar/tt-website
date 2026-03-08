import { Mail, Phone, MapPin, Clock, ExternalLink } from "lucide-react";
import Link from "next/link";

export function Contact() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact Methods Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Phone */}
          <a
            href="tel:+19058285055"
            className="group bg-white border border-gray-200 rounded-xl p-8 text-center hover:border-[#17135F] hover:shadow-lg transition-all"
          >
            <div className="w-14 h-14 bg-[#17135F] rounded-xl flex items-center justify-center mx-auto mb-5">
              <Phone className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Call Us</h3>
            <p className="text-2xl font-bold text-[#17135F] group-hover:underline mb-2">
              (905) 828-5055
            </p>
            <p className="text-sm text-gray-500">Tap to call directly</p>
          </a>

          {/* Email */}
          <a
            href="mailto:sales@trutechprecision.com"
            className="group bg-white border border-gray-200 rounded-xl p-8 text-center hover:border-[#17135F] hover:shadow-lg transition-all"
          >
            <div className="w-14 h-14 bg-[#17135F] rounded-xl flex items-center justify-center mx-auto mb-5">
              <Mail className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Email Us</h3>
            <p className="text-lg font-bold text-[#17135F] group-hover:underline mb-2">
              sales@trutechprecision.com
            </p>
            <p className="text-sm text-gray-500">
              For quotes and general inquiries
            </p>
          </a>

          {/* Hours */}
          <div className="bg-white border border-gray-200 rounded-xl p-8 text-center">
            <div className="w-14 h-14 bg-[#17135F] rounded-xl flex items-center justify-center mx-auto mb-5">
              <Clock className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Business Hours
            </h3>
            <p className="text-gray-700 font-medium mb-1">Monday – Friday</p>
            <p className="text-2xl font-bold text-[#17135F] mb-2">
              8:00 AM – 5:00 PM
            </p>
            <p className="text-sm text-gray-500">Eastern Time (ET)</p>
          </div>
        </div>

        {/* Location */}
        <div className="bg-gray-50 rounded-xl p-8 mb-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#17135F] rounded-lg flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  Our Location
                </h3>
                <p className="font-semibold text-gray-700">
                  Tru-Tech Precision Inc.
                </p>
                <p className="text-gray-600">Unit 7 - 2576 Dunwin Dr</p>
                <p className="text-gray-600">Mississauga, ON L5L 5P6, Canada</p>
                <p className="text-sm text-gray-500 mt-2">
                  Located in Mississauga&apos;s industrial district, easily
                  accessible from the QEW and Highway 403.
                </p>
              </div>
            </div>
            <a
              href="https://www.google.com/maps/dir//Tru-Tech+Precision+Inc.,+2576+Dunwin+Dr+Unit+7,+Mississauga,+ON+L5L+5P6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#17135F] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#17135F]/90 transition-colors shrink-0"
            >
              Get Directions <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* AOG Banner */}
        <div className="bg-[#17135F] rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-3">
            Need an Emergency or AOG Part?
          </h3>
          <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
            Our AOG &amp; Speed Shop provides rapid turnaround for urgent
            machining needs. Call us directly for immediate assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+19058285055"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#17135F] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              <Phone className="w-5 h-5" /> Call (905) 828-5055
            </a>
            <Link
              href="/services/aog-speed-shop"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Learn About AOG Service
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
