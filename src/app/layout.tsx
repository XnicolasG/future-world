import type { Metadata } from "next";
import { Poppins } from 'next/font/google'
import { Header } from "app/components/Shared/Header";
import { Footer } from "app/components/Shared/Footer";
import './global.css'

const poppins = Poppins({
  weight: ['100', '500', '700'],
  subsets:['latin']
})

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
      <body className={poppins.className}>
       <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
