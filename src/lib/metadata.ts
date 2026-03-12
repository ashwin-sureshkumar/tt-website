import type { Metadata } from "next";

const SITE_URL = "https://www.trutechprecision.com";
const SITE_NAME = "Tru-Tech Precision Inc.";
const DEFAULT_OG_IMAGE = `${SITE_URL}/assets/af8bb2b29d9184d4d83751d1fa438bea1a181d56.png`;

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
      images: [{ url: ogImage || DEFAULT_OG_IMAGE }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage || DEFAULT_OG_IMAGE],
    },
  };
}
