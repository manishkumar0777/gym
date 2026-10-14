import { Hero } from "@/components/pulse/hero";
import { Story } from "@/components/pulse/story";
import { Classes } from "@/components/pulse/classes";
import { Stats } from "@/components/pulse/stats";
import { VideoCta } from "@/components/pulse/video-cta";
import { Trainers } from "@/components/pulse/trainers";
import { Testimonials } from "@/components/pulse/testimonials";
import { CtaBanner } from "@/components/pulse/cta-banner";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Story />
      <Classes />
      <Stats />
      <VideoCta />
      <Trainers />
      <Testimonials />
      <CtaBanner />
    </main>
  );
}
