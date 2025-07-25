import { Header } from "@/components/Header";
import type { Metadata } from "next";
import { SanityLive } from '@/sanity/lib/live'
import "../globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function FrontendLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="bg-white min-h-screen">
      <Header />
      {children}
      <SanityLive />
    </section>
  );
}