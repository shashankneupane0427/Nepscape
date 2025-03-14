import type { Metadata } from "next";
import { headers } from "next/headers";
import Script from "next/script"; // Import Next.js Script
import Navbar from "../components/Navbar";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers();
  const pathname = headersList.get("x-pathname") || "/";
  const canonicalUrl = `https://nepscape.com${pathname}`;
  return {
    title: "Nepscape | IT Company | Website Development",
    description:
      "We have Top website developer to design and develop your website. Contact Us for highly functional and visually appealing website.",
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      ],
      apple: "/apple-touch-icon.png",
    },
    keywords: [
      "Nepscape",
      "Web Development",
      "AI Solutions",
      "IT Services",
      "Software Company",
      "Custom Software",
      "MERN Stack",
      "Full-Stack Development",
      "Enterprise Solutions",
      "Cloud Computing",
      "SEO Optimization",
    ],
    openGraph: {
      title: "Nepscape | IT Company | Website Development",
      description:
        "We have Top website developer to design and develop your website. Contact Us for highly functional and visually appealing website.",
      url: canonicalUrl,
      images: [
        {
          url: "/logo.png",
          width: 1200,
          height: 630,
          alt: "Nepscape Logo",
        },
      ],
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-BJ2LQZ2FWJ"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-BJ2LQZ2FWJ');
            `,
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
