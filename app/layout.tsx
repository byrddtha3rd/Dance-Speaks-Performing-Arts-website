import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dance Speaks Performing Arts Academy",
  description:
    "Welcoming, professional dance education for children, teens, and adults in Lemon Grove and the San Diego area.",
  openGraph: {
    title: "Dance Speaks Performing Arts Academy",
    description:
      "Family-friendly, inclusive dance education in Lemon Grove and the San Diego area.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
