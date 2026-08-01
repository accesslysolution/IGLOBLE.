import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Configuring the premium Poppins font
const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

// Setting up global SEO and Browser Tab info
export const metadata: Metadata = {
  title: "IGLOBLE TECHNOLOGIES",
  description: "Modern & Premium IT Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} h-full scroll-smooth antialiased`}
    >
      {/* 
        min-h-full & flex-col ensure the footer always pushes to the 
        bottom of the screen even if the page content is short.
      */}
      <body className="min-h-full flex flex-col font-sans">
        <Navbar />
        
        {/* flex-grow allows the main content area to expand */}
        <main className="flex-grow">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}