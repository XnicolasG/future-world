
import { Description } from "app/components/Home/Description";
import { Hero } from "app/components/Home/Hero";
import { MainProducts } from "app/components/Home/MainProducts";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata : Metadata = {
  title: '✨ Future world',
  description: 'The future is here. We are building the future world. an ecommerce from other century',
  keywords:['ecommerce', 'technology', 'store' ]
}

export default function Home() {
  return (
    <main>
        <Hero />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Description />
        <MainProducts />
      </Suspense>
    </main>
  );
}
