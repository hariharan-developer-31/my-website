import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trading Boy | Trading Content Brand",
  description:
    "Trading Boy delivers professional trading education, market insights, and disciplined strategy support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-brand-bg text-brand-text">
        {children}
      </body>
    </html>
  );
}
