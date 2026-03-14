import { PageHeader } from "@/components/PageHeader";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/jsonld";
import { createMetadata } from "@/lib/metadata";
import { jobPostings } from "@/lib/careers";
import {
  MapPin,
  Clock,
  Briefcase,
  CheckCircle,
  Star,
  ArrowLeft,
  Mail,
} from "lucide-react";
import Link from "next/link";

const job = jobPostings[0];

export const metadata = createMetadata({
  title: `${job.title} | Careers at Tru-Tech Precision`,
  description: job.summary,
  path: `/careers/${job.slug}`,
});

export default function CNCMachinistPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          name: `${job.title} — Tru-Tech Precision`,
          description: job.summary,
          path: `/careers/${job.slug}`,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "Careers", href: "/careers" },
          { name: job.title, href: `/careers/${job.slug}` },
        ])}
      />

      <PageHeader title={job.title} subtitle={job.location} />
      <BreadcrumbNav
        items={[
          { label: "Careers", href: "/careers" },
          { label: job.title },
        ]}
      />

      <main className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/careers"
            className="inline-flex items-center gap-2 text-[#17135F] hover:underline mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Positions
          </Link>

          {/* Job Meta */}
          <div className="flex flex-wrap gap-4 mb-8">
            <span className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg text-sm text-gray-700">
              <Briefcase className="w-4 h-4" />
              {job.type}
            </span>
            <span className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg text-sm text-gray-700">
              <MapPin className="w-4 h-4" />
              {job.location}
            </span>
          </div>

          {/* Description */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              About This Role
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {job.description}
            </p>
          </section>

          {/* Responsibilities */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Responsibilities
            </h2>
            <ul className="space-y-3">
              {job.responsibilities.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#17135F] shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Qualifications */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Qualifications
            </h2>
            <ul className="space-y-3">
              {job.qualifications.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Nice to Have */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Nice to Have
            </h2>
            <ul className="space-y-3">
              {job.niceToHave.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Apply CTA */}
          <section className="bg-gray-50 p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Ready to Apply?
            </h2>
            <p className="text-gray-600 mb-6">
              Send your resume and a brief cover letter to our HR team.
            </p>
            <a
              href={`mailto:hr@trutechprecision.com?subject=Application%20-%20${encodeURIComponent(job.title)}`}
              className="inline-flex items-center gap-2 bg-[#17135F] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#0d0b3a] transition-colors"
            >
              <Mail className="w-5 h-5" />
              Apply Now
            </a>
            <p className="text-sm text-gray-500 mt-4">
              Tru-Tech Precision Inc. is an equal opportunity employer.
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
