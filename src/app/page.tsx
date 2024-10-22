import Hero from "@/components/Hero";
import { Suspense } from "react";

export default function Home() {
  return (
    <section>
      <Suspense fallback={<div>Loading...</div>}>
        <Hero />
      </Suspense>
    </section>
  );
}
