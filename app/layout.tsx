import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tru-Tech Precision Inc. - Manufacturing Excellence",
  icons: {
    icon: "/assets/e560eb1a9ea8c65afcffc2a9ff017086b44f2055.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white antialiased">{children}</body>
    </html>
  );
}
