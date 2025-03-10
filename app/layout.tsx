import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: 'Nepscape | IT Company | Website, App & Digital Marketing Services',
  description: 'We have Top website developer to design and develop your website. Contact Us. Highly functional and visually appealing website designed to meet your needs. Professional Designs. Free Consultation. SEO Optimized.',
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
    "Machine Learning",
    "Business Automation",
    "Next.js Development"
  ], openGraph: {
    title: 'Nepscape | IT Company | Website, App & Digital Marketing Services',
    description: 'We have top website developer to design and develop your website. Contact Us. Highly functional and visually appealing website designed to meet your needs.',
    url: 'https://nepscape.com',
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Nepscape Logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar /> {/* Add Navbar here */}
        <main>{children}</main> {/* Wrap children in a <main> for better semantics */}
      </body>
    </html>
  );
}
