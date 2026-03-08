const SITE_URL = "https://www.trutechprecision.com";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Tru-Tech Precision Inc.",
    url: SITE_URL,
    logo: `${SITE_URL}/assets/af8bb2b29d9184d4d83751d1fa438bea1a181d56.png`,
    description:
      "Precision CNC machining and manufacturing for aerospace, nuclear, electronic, and space industries. AS9100 and ISO 9001:2015 certified.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Unit 7 - 2576 Dunwin Dr",
      addressLocality: "Mississauga",
      addressRegion: "ON",
      postalCode: "L5L 5P6",
      addressCountry: "CA",
    },
    telephone: "(905) 828-5055",
    email: "sales@trutechprecision.com",
    sameAs: ["https://www.linkedin.com/company/tru-tech-precision/"],
  };
}

export function breadcrumbSchema(
  items: { name: string; href: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.href}`,
    })),
  };
}

export function webPageSchema({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url: `${SITE_URL}${path}`,
    publisher: {
      "@type": "Organization",
      name: "Tru-Tech Precision Inc.",
    },
  };
}

export function faqSchema(
  items: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function articleSchema({
  title,
  description,
  path,
  date,
  image,
}: {
  title: string;
  description: string;
  path: string;
  date: string;
  image: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image,
    datePublished: date,
    dateModified: date,
    author: {
      "@type": "Organization",
      name: "Tru-Tech Precision Inc.",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Tru-Tech Precision Inc.",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/assets/af8bb2b29d9184d4d83751d1fa438bea1a181d56.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}${path}`,
    },
  };
}
