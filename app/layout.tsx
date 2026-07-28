import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "./components/ThemeProvider";
import { education, experience, site, skills } from "./data/site";

const title = `${site.name} — Full Stack Engineer, Fintech`;
const description =
  "Full Stack Engineer specialising in fintech. I build payment and lending backends on Node.js and PostgreSQL, design REST/GraphQL APIs for banking partners, and ship the Next.js interfaces in front of them. Karachi-based, remote-first.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: title,
    template: `%s — ${site.name}`,
  },
  description,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "y4x_K50P5s-Ztz8ATrrYM6dQjZ5WRKVpjodlg9_2BAU",
  },
  keywords: [
    "fintech developer",
    "payments backend engineer",
    "Node.js fintech engineer",
    "BNPL developer",
    "full stack engineer Karachi",
    "remote fintech engineer Pakistan",
    "REST GraphQL API developer",
    "PostgreSQL Node.js engineer",
  ],
  openGraph: {
    type: "profile",
    url: site.url,
    siteName: `${site.name} — Fintech Engineer`,
    title,
    description,
    locale: "en_US",
    images: [
      {
        url: "/profile.jpg",
        width: 1200,
        height: 630,
        alt: `${site.name}, Full Stack Engineer specialising in fintech`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/profile.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
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

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  image: `${site.url}/profile.jpg`,
  email: `mailto:${site.email}`,
  telephone: site.phone,
  jobTitle: "Full Stack Engineer",
  description: site.summary,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Karachi",
    addressCountry: "PK",
  },
  sameAs: [site.github, site.linkedin],
  knowsAbout: [
    "Fintech",
    "Payment systems",
    "Buy Now Pay Later",
    "API design",
    ...skills.flatMap((group) => group.items.slice(0, 4)),
  ],
  worksFor: {
    "@type": "Organization",
    name: experience[0].company,
  },
  alumniOf: education.map((edu) => ({
    "@type": "EducationalOrganization",
    name: edu.institution,
  })),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Runs before paint. Only when it succeeds do scroll reveals start
            hidden — so a JS failure leaves the page fully readable. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add('js')`,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}
