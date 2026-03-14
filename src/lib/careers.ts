export interface JobPosting {
  slug: string;
  title: string;
  type: string;
  location: string;
  summary: string;
  description: string;
  responsibilities: string[];
  qualifications: string[];
  niceToHave: string[];
}

export const jobPostings: JobPosting[] = [
  {
    slug: "cnc-machinist",
    title: "CNC Machinist",
    type: "Full-time",
    location: "Mississauga, ON",
    summary:
      "Operate and program CNC turning centers and multi-axis milling machines to produce precision components for aerospace, nuclear, and space industries.",
    description:
      "We are looking for a skilled CNC Machinist to join our team. You will operate and program CNC turning centers and multi-axis milling machines to produce precision components for aerospace, nuclear, and space industries. This role requires a strong understanding of machining processes, the ability to read engineering drawings, and a commitment to producing high-quality work in an AS9100 certified environment.",
    responsibilities: [
      "Set up and operate CNC turning centers and 3-5 axis milling machines",
      "Read and interpret engineering drawings, GD&T, and specifications",
      "Perform in-process inspections using precision measuring instruments",
      "Program and edit CNC programs as required",
      "Maintain tight tolerances on complex geometries",
      "Follow AS9100 quality procedures and documentation requirements",
      "Perform routine machine maintenance and tool changes",
      "Collaborate with engineering and quality teams on new projects",
    ],
    qualifications: [
      "3+ years of experience operating CNC lathes and/or milling machines",
      "Ability to read and interpret engineering drawings and GD&T",
      "Proficiency with precision measuring instruments (micrometers, calipers, gauges)",
      "Experience with Fanuc or similar CNC controls",
      "Strong attention to detail and quality",
      "Ability to work independently and as part of a team",
    ],
    niceToHave: [
      "Experience with 5-axis CNC machining",
      "CAM programming experience (Mastercam, Fusion 360, or similar)",
      "Aerospace manufacturing experience",
      "Journeyperson certification or equivalent",
    ],
  },
  {
    slug: "quality-assurance-inspector",
    title: "Quality Assurance Inspector",
    type: "Full-time",
    location: "Mississauga, ON",
    summary:
      "Inspect precision-machined components using CMM and manual inspection tools. Ensure compliance with AS9100 quality standards and customer specifications.",
    description:
      "We are looking for a detail-oriented Quality Assurance Inspector to ensure our precision-machined components meet the highest standards. You will inspect parts using CMM and manual inspection tools, verify compliance with AS9100 quality standards, and work closely with our machining team to maintain the quality our customers expect. This is a key role in our aerospace-certified facility.",
    responsibilities: [
      "Inspect machined components using CMM, micrometers, calipers, and other precision instruments",
      "Verify parts conform to engineering drawings, GD&T, and customer specifications",
      "Create and maintain inspection reports and quality documentation",
      "Perform first article inspections (FAI) per AS9102 requirements",
      "Identify and document non-conformances and assist with root cause analysis",
      "Support internal and external audits",
      "Maintain calibration records for inspection equipment",
      "Collaborate with machining and engineering teams to resolve quality issues",
    ],
    qualifications: [
      "2+ years of experience in quality inspection in a machining environment",
      "Proficiency with CMM operation and manual inspection tools",
      "Strong understanding of GD&T and engineering drawings",
      "Familiarity with AS9100 and ISO 9001 quality management systems",
      "Experience with first article inspection (FAI) reports",
      "Strong attention to detail and documentation skills",
    ],
    niceToHave: [
      "CMM programming experience (PC-DMIS, Calypso, or similar)",
      "Aerospace or nuclear inspection experience",
      "ASQ certification (CQI, CQT, or similar)",
      "Experience with non-destructive testing (NDT)",
    ],
  },
];
