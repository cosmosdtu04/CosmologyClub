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
      suppressHydrationWarning
    >
      <body
        className="text-slate-100 min-h-screen flex flex-col font-sans selection:bg-violet-500/30 selection:text-white relative"
        suppressHydrationWarning
      >
        {/* Fixed Background Image with Blur and Darkening Filters */}
        <div
          className="fixed inset-0 z-[-2] bg-cover bg-center bg-no-repeat pointer-events-none scale-105"
          style={{
            backgroundImage: "url('sky_view.png')",
            filter: "blur(0.5px) brightness(0.85)",
          }}
        />
        {/* Fixed Page-wide Gradient and Radial Overlays */}
        <div className="fixed inset-0 z-[-1] bg-gradient-to-b from-black/75 via-black/55 to-black/85 pointer-events-none" />
        <div className="fixed inset-0 z-[-1] bg-[radial-gradient(ellipse_at_center,transparent_30%,#040407_95%)] pointer-events-none" />

        <Navbar />
        <main className="flex-grow flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
