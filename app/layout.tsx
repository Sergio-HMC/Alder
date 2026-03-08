import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alder Metrics",
  description: "Turning data into clear decisions"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
