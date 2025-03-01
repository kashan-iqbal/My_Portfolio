import "./globals.css";
import { Inter } from "next/font/google";
import type React from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";
import image from "../public/963ef819-b3b1-45e9-ae8a-5e9717fdb553.jpg";
import Head from "next/head"; // Import the Head component

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "Kashan Iqbal - MERN Stack Developer | Full-Stack Web Development Portfolio",
  description:
    "Explore the portfolio of Kashan Iqbal, a passionate MERN Stack Developer. Specializing in building dynamic and responsive full-stack web applications using MongoDB, Express.js, React, and Node.js. Check out my projects and skills.",
  keywords:
    "Kashan Iqbal, MERN Stack Developer, Full-Stack Web Developer, Web Development Portfolio, MongoDB, Express.js, React, Node.js, JavaScript Developer, Front-End Development, Back-End Development",
  author: "Kashan Iqbal",
  robots: "index, follow",
  openGraph: {
    title:
      "Kashan Iqbal - MERN Stack Developer | Full-Stack Web Development Portfolio",
    description:
      "Explore the portfolio of Kashan Iqbal, a passionate MERN Stack Developer. Specializing in building dynamic and responsive full-stack web applications using MongoDB, Express.js, React, and Node.js.",
    type: "website",
    url: "https://kashandev.netlify.app/", // Replace with your actual domain
    image: "../public/963ef819-b3b1-45e9-ae8a-5e9717fdb553.jpg", // Image located in the public folder
  },
  linkedin: {
    url: "https://www.linkedin.com/in/kashan-iqbal-2b051a24a", // Replace with your actual LinkedIn URL
    title: "Kashan Iqbal | MERN Stack Developer",
    description:
      "Check out my LinkedIn profile for more about my skills, experience, and passion for web development using the MERN stack.",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Head>
          <link rel="icon" href="/public/placeholder-user.jpg" />
        </Head>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="fixed top-4 right-4 z-50">
            <ModeToggle />
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

import "./globals.css";
