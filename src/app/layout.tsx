import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";
import Footer from "@/shared/components/footer";
import Head from "@/shared/components/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yoav Levanoni",
  description: "Yoav Levanoni's Portfolio & Blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head />
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={true}
          storageKey="dashboard-theme"
        >
          <Navbar />
          <main className="mx-auto px-4 sm:px-6 w-full">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
