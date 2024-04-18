import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "app/components/Shared/Header";
import { Footer } from "app/components/Shared/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Future World Store",
  description: "Store to be prepare for what comes next",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
       <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
