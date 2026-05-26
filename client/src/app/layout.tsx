import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollToTop } from "@/components/scroll-to-top";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "StaffPro | Premier Event Staffing Services",
  description: "Professional temporary staffing and workforce solutions for corporate events, conferences, weddings, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-full flex flex-col antialiased overflow-x-hidden">
        <ScrollToTop />
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
