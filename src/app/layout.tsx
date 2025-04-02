import "./globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portifólio",
  description: "Portifólio de Pedro Siqueira",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
       <body className={`bg-[#16161a]`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
