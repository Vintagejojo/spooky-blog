import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Profilepic from "./components/Profilepic";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jojo's Blog",
  description: "Things are gonna get spooky here.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Profilepic/>
      <body className="dark:bg-slate-800">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
