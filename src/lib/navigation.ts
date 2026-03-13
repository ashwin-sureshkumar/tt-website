export const serviceLinks = [
  {
    title: "CNC Machining",
    href: "/services/cnc-machining",
    description: "Lathe and 3-5 axis milling with tight tolerances",
  },
  {
    title: "Engineering Service",
    href: "/services/engineering-service",
    description: "DFM consultation, deviation handling, material procurement",
  },
  {
    title: "AOG & Speed Shop",
    href: "/services/aog-speed-shop",
    description: "Rapid turnaround and emergency machining",
  },
];

export const industryLinks = [
  {
    title: "Aerospace",
    href: "/industries/aerospace",
    description: "AS9100 certified components for aircraft",
  },
  {
    title: "Nuclear",
    href: "/industries/nuclear",
    description: "Nuclear-grade materials with full traceability",
  },
  {
    title: "Electronic",
    href: "/industries/electronic",
    description: "Precision components for electronics",
  },
  {
    title: "Space",
    href: "/industries/space",
    description: "Components for extreme environments",
  },
  {
    title: "Marine",
    href: "/industries/marine",
    description: "Components for marine vessels and offshore systems",
  },
  {
    title: "Commercial",
    href: "/industries/commercial",
    description: "Parts for commercial and industrial applications",
  },
];

export const navItems = [
  { title: "Home", href: "/" },
  { title: "Services", children: serviceLinks },
  { title: "Industries", children: industryLinks },
  { title: "About", href: "/about" },
  { title: "Quality Assurance", href: "/quality-assurance" },
  { title: "Gallery", href: "/gallery" },
  { title: "Blog", href: "/blog" },
  { title: "Careers", href: "/careers" },
  { title: "Contact", href: "/contact" },
];
