export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "receiving-inspection-as9100-accepting-and-rejecting-parts",
    title: "Receiving Inspection Under AS9100: Accepting and Rejecting Parts",
    description:
      "How receiving inspection works under AS9100, what happens when material is accepted or rejected, and why this quality gate is critical to aerospace manufacturing.",
    date: "2026-03-20",
    readTime: "8 min read",
    category: "Quality",
    image: "/assets/gallery-202511270007.jpg",
  },
  {
    slug: "sub-contracting-support-for-oems-and-tier-1-suppliers",
    title: "Sub-Contracting: How Tru-Tech Supports OEMs and Tier-1 Suppliers",
    description:
      "How Tru-Tech Precision operates as a reliable sub-contract manufacturing partner for OEMs and Tier-1 suppliers across aerospace, nuclear, marine, and commercial industries.",
    date: "2026-03-12",
    readTime: "7 min read",
    category: "Manufacturing",
    image: "/assets/gallery-202512030038.jpg",
  },
  {
    slug: "external-processing-anodizing-passivation-and-approved-suppliers",
    title: "External Processing: Anodizing, Passivation & Working with Approved Suppliers",
    description:
      "How Tru-Tech manages external processing like anodizing, passivation, and plating through approved supplier lists and customer-driven requirements including NADCAP.",
    date: "2026-03-01",
    readTime: "7 min read",
    category: "Quality",
    image: "/assets/gallery-202511270007.jpg",
  },
  {
    slug: "understanding-as9100-certification",
    title: "Understanding AS9100 Certification: What It Means for Your Supply Chain",
    description:
      "Learn what AS9100 certification really means, why it matters for aerospace procurement, and how to evaluate certified suppliers.",
    date: "2026-02-15",
    readTime: "6 min read",
    category: "Quality",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
  },
  {
    slug: "5-axis-cnc-machining-advantages",
    title: "5-Axis CNC Machining: When Do You Actually Need It?",
    description:
      "Not every part needs 5-axis machining. Learn when multi-axis capability makes a real difference in quality, cost, and lead time.",
    date: "2026-01-22",
    readTime: "5 min read",
    category: "Manufacturing",
    image: "/assets/matsuura-mx330-5axis.png",
  },
  {
    slug: "choosing-right-material-for-aerospace-parts",
    title: "Choosing the Right Material for Aerospace Machined Parts",
    description:
      "A practical guide to selecting between aluminum, titanium, Inconel, and stainless steel for aerospace components based on performance requirements.",
    date: "2025-12-10",
    readTime: "7 min read",
    category: "Engineering",
    image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&q=80",
  },
];

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
