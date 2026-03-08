import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { organizationSchema } from "@/lib/jsonld";

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
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-RBY2BYY590"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RBY2BYY590');
          `}
        </Script>
      </head>
      <body className="min-h-screen bg-white antialiased">
        <JsonLd data={organizationSchema()} />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
