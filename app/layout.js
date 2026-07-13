import "./globals.css";

const siteUrl = "https://vishwajeetbhardwaj.com";
const siteTitle = "Vishwajeet Bhardwaj | Software Engineer";
const siteDescription =
  "Software engineer building scalable web and AI-driven products for clients in India and abroad. Full-stack work across SaaS, marketplaces, and production systems serving 100K+ users.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Vishwajeet Bhardwaj",
  },
  description: siteDescription,
  applicationName: "Vishwajeet Bhardwaj",
  authors: [{ name: "Vishwajeet Bhardwaj", url: siteUrl }],
  creator: "Vishwajeet Bhardwaj",
  keywords: [
    "Vishwajeet Bhardwaj",
    "Software Engineer",
    "Full Stack Developer",
    "Next.js",
    "React",
    "Portfolio",
    "Freelance",
    "Contract Developer",
  ],
  themeColor: "#0E1116",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon.svg", sizes: "any" },
    ],
    shortcut: "/icon.svg",
    apple: [{ url: "/Protfolio_Img1.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Vishwajeet Bhardwaj",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/Protfolio_Img1.png",
        width: 800,
        height: 800,
        alt: "Vishwajeet Bhardwaj",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/Protfolio_Img1.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
