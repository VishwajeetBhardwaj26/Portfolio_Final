import "./globals.css";

export const metadata = {
  title: "Vishwajeet Bhardwaj",
  description: "Software Engineer Portfolio",
  themeColor: "#0E1116",
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: "/icon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
