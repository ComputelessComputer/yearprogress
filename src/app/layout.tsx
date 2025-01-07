import "./globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Year Progress App - Track Time in a New Way",
  description:
    "Track the passage of time with elegant progress bars right from your menu bar. A simple, free macOS app that helps you visualize time in relative scales.",
  openGraph: {
    title: "Year Progress App - Track Time in a New Way",
    description:
      "Track the passage of time with elegant progress bars right from your menu bar",
    images: [
      {
        url: "/assets/year.jpg",
        width: 190,
        height: 140,
        alt: "Year Progress App Screenshot",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      {
        url: "/assets/year.jpg",
        width: 190,
        height: 140,
        alt: "Year Progress App Screenshot",
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
      <body className="antialiased">{children}</body>
    </html>
  );
}
