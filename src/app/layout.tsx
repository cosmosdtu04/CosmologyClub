import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cosmology Club | Delhi Technological University (DTU)",
  description: "Official portal of the Cosmology Club of Delhi Technological University (DTU). A student-led organization focusing on cosmology, astrophysics, stargazing, and space research.",
  keywords: [
    "Cosmology Club",
    "Delhi Technological University",
    "DTU",
    "Astronomy Club",
    "Astrophysics",
    "Space Science",
    "Stargazing",
    "SRAD",
    "Delhi Colleges"
  ],
  authors: [{ name: "Cosmology Club DTU" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth`}
    >
      <body className="bg-slate-950 text-slate-100 min-h-screen flex flex-col font-sans selection:bg-violet-500/30 selection:text-white">
        <Navbar />
        <main className="flex-grow flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
