
import { Description } from "app/components/Home/Description";
import { Hero } from "app/components/Home/Hero";
import { MainProducts } from "app/components/Home/MainProducts";
import { Suspense } from "react";

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
