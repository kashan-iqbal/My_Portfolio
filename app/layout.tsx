import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "MERN Stack Developer | Portfolio of Kashan Iqbal",
  description:
    "Senior MERN Stack Developer specializing in full-stack web applications and system design. Available for freelance, remote, and full-time projects in Karachi, Saudi Arabia, and globally.",
  keywords: [
    "MERN developer Karachi",
    "Full Stack Developer Saudi Arabia",
    "Remote MERN developer",
    "System Design expert",
    "React Node MongoDB developer",
  ],
  openGraph: {
    title: "MERN Stack Developer | Portfolio of Kashan Iqbal",
    description:
      "Explore my full-stack web development projects and services. Available globally.",
    url: "https://kashan-iqbal.netlify.app", // Replace with your actual domain
    siteName: "Kashan Iqbal Portfolio",
    images: [
      {
        url: "https://kashan-iqbal.netlify.app/profile.jpg", // Replace with actual image
        width: 1200,
        height: 630,
        alt: "MERN Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MERN Stack Developer | Portfolio of Kashan Iqbal",
    description:
      "Full-stack developer available for freelance and full-time roles. Based in Karachi & Saudi Arabia.",
    images: ["https://kashan-iqbal.netlify.app/profile.jpg"], // Same OG image
  },
  metadataBase: new URL("https://kashan-iqbal.netlify.app"),
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  display: "swap",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  display: "swap",
  subsets: ["latin"],
});

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
        {children}
      </body>
    </html>
  );
}
