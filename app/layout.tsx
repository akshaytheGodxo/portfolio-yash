import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import CursorTrail from "@/components/CursorTrail";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "RayaSocial - Personal Branding Agency",
  description:
    "Premium social media management for the fastest-growing personal brands",
  icons: {
    icon: "/rayasocial_logo_square.png",
    apple: "/rayasocial_logo_square.png",
  },
  openGraph: {
    title: "RayaSocial - Personal Branding Agency",
    description:
      "Premium social media management for the fastest-growing personal brands",
    url: "/",
    siteName: "RayaSocial",
    images: [
      {
        url: "/rayasocial_logo_square.png",
        width: 1200,
        height: 630,
        alt: "RayaSocial",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RayaSocial - Personal Branding Agency",
    description:
      "Premium social media management for the fastest-growing personal brands",
    images: ["/rayasocial_logo_square.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <CursorTrail />
      </body>
    </html>
  );
}
