import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SidebarWrapper from "@/components/SidebarWrapper";
import Footer from "@/components/Footer";
import MainContentWrapper from "@/components/MainContentWrapper"; // Importujeme tu novou věc
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ekonomie.cz | Interaktivní učebnice",
  description: "Moderní vzdělávání",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs" className="scroll-smooth">
      <body className={`${inter.className} bg-white text-slate-900 flex flex-col min-h-screen`}>
        
        {/* 1. NAVBAR */}
        <Navbar />

        {/* 2. HLAVNÍ BLOK (obaluje Sidebar i Content) */}
        {/* pt-16 zajistí, že obsah nezačíná pod Navbar, ale pod ním */}
        <div className="flex flex-1 pt-16">
          
          {/* Sidebar (zobrazí se jen někde) */}
          <SidebarWrapper /> 
          
          {/* Main Content (posouvá se doprava dle potřeby) */}
          <MainContentWrapper>
            {children}
          </MainContentWrapper>

        </div>

        {/* 3. FOOTER */}
        {/* z-50 zajistí, že bude nad vším ostatním */}
        <div className="relative z-50 bg-white">
             <Footer />
        </div>
        
      </body>
    </html>
  );
}