import type { Metadata } from "next";
import { Outfit, Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "@components/Header";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL!),
  title: "Kianna | Portfolio",
  description: "Kianna Alexandra Gragg | Software Engineer Intern Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${outfit.variable}`}>
      <body className={`bg-black min-h-screen text-white font-montserrat`}>
        <Header />
        <main className="pt-10 px-2 lg:px-6 max-w-434 mx-auto">{children}</main>
      </body>
    </html>
  );
}
