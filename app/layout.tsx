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
  title: "Nepscape",
  description: "Nepscape is a leading software company providing top-tier Web development and IT services. We build scalable, high-performance digital products tailored to your business needs.",
  icons: "/logo.png",
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
    title: "Nepscape",
    description: "Nepscape specializes in web development and IT services, delivering high-performance, scalable digital products for businesses worldwide.",
    url: "https://yourwebsite.com", 
    type: "website",
    imgs: [
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
