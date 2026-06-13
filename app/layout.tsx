import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AGRI-FARM — The Future of Smarter Agriculture",
  description: "Automate your busywork with intelligent agents that learn, adapt, and execute.",
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
