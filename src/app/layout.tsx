import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavbarDemo } from "@/Components/navbar";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Geosync Connect",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative w-full flex items-center justify-center">
        <NavbarDemo />
        </div>
       
        {children}</body>
    </html>
  );
}
