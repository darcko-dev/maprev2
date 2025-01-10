import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main className="bg-neutral-900">
      <Hero />
      <Services />
      <Features />
    </main>
  )
}

