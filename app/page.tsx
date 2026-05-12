import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { HypeTicker } from "@/components/HypeTicker";
import { MenuSection } from "@/components/MenuSection";
import { About } from "@/components/About";
import { Viral } from "@/components/Viral";
import { Reviews } from "@/components/Reviews";
import { Visit } from "@/components/Visit";
import { OrderCTA } from "@/components/OrderCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <HypeTicker />
      <MenuSection />
      <About />
      <Viral />
      <Reviews />
      <Visit />
      <OrderCTA />
      <Footer />
    </main>
  );
}
