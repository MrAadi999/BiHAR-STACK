import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BiharStack | Next-Gen Digital Growth & Technology Company",
  description:
    "Building Bihar. Scaling Businesses. Empowering companies with world-class Branding, Digital Marketing, Custom Web & App Development, and AI Automation.",
  keywords: [
    "BiharStack",
    "Digital Marketing Bihar",
    "Web Development Bihar",
    "AI Automation India",
    "Branding Agency Patna",
    "Software Development Bihar",
    "Tech Agency Bihar",
  ],
  authors: [{ name: "BiharStack Team" }],
  openGraph: {
    title: "BiharStack | Building Bihar. Scaling Businesses.",
    description:
      "Empowering businesses with innovation, creativity, technology, and AI. Modern digital growth partner based in Bihar, serving globally.",
    url: "https://biharstack.com",
    siteName: "BiharStack",
    images: [
      {
        url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&auto=format&fit=crop&q=80",
        width: 1200,
        height: 630,
        alt: "BiharStack Digital Growth & Tech",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BiharStack — Think Digital. Think BiharStack.",
    description: "Next-gen Digital Growth & Technology agency from Bihar, India.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className="bg-[#f0f0f0] text-black antialiased min-h-screen selection:bg-black selection:text-white relative">
        {children}
      </body>
    </html>
  );
}
