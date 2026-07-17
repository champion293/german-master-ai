import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GermanMaster AI | Learn German With AI",
  description:
    "Learn German for free with AI-powered lessons, vocabulary, quizzes and speaking practice.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#050816] text-white`}>
        <Navbar />

        {children}

      </body>
    </html>
  );
}