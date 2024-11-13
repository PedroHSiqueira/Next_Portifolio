import "./globals.css";
import Footer from "@/components/footer";
import Header from "@/components/header";
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
    <html lang="en">
      <body className="bg-[#292b28]">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
