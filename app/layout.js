import "./globals.css";

export const metadata = {
  title: "Vishwajeet Bhardwaj",
  description: "Software Engineer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
