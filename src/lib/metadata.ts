import type { Metadata } from "next";

const SITE_URL = "https://www.trutechprecision.com";
const SITE_NAME = "Tru-Tech Precision Inc.";

export function createMetadata({
  title,
  description,
  path = "/",
  ogImage,
}: {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
}): Metadata {
  const fullTitle = path === "/" ? title : `${title} | ${SITE_NAME}`;
  const canonical = `${SITE_URL}${path}`;

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonical,
      siteName: SITE_NAME,
      type: "website",
      ...(ogImage && { images: [{ url: ogImage }] }),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}
