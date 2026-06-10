import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { StatsBar } from "@/components/stats-bar";
import { Chapters } from "@/components/chapters";
import { Bonus } from "@/components/bonus";
import { Author } from "@/components/author";
import { Presale } from "@/components/presale";
import { Footer } from "@/components/footer";

export default function LandingPage() {
  return (
    <main className="relative">
      {/* Noise grain overlay */}
      <div className="noise-overlay" />

      <Nav />
      <Hero />
      <StatsBar />
      <Chapters />
      <Bonus />
      <Author />
      <Presale />
      <Footer />
    </main>
  );
}
