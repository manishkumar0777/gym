"use client";
import { Play } from "lucide-react";
import videoBg from "@/assets/video-bg.jpg";
import { Reveal } from "./reveal";
import { PulseButton } from "./pulse-button";
import { WHATSAPP_LINK } from "@/lib/site";

export function VideoCta() {
  return (
    <section className="relative overflow-hidden">
      <img
        src={videoBg.src}
        alt="Athletes training with kettlebells"
        loading="lazy"
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-background/70" />

      <div className="relative mx-auto flex max-w-[1400px] flex-col items-center px-6 py-28 text-center lg:py-40">
        <Reveal>
          <button
            aria-label="Play the workout film"
            className="group flex size-20 items-center justify-center rounded-full border border-primary/50 bg-primary/10 backdrop-blur transition-all duration-300 hover:bg-primary hover:shadow-[0_0_60px_-10px_var(--primary)]"
          >
            <Play className="size-6 fill-primary text-primary transition-colors group-hover:fill-primary-foreground group-hover:text-primary-foreground" />
          </button>
        </Reveal>
        <Reveal delay={110}>
          <h2 className="display mt-10 max-w-3xl text-[clamp(2.2rem,6vw,4.5rem)]">
            One hour a day. Everything else changes.
          </h2>
        </Reveal>
        <Reveal delay={210}>
          <div className="mt-10">
            <PulseButton href={WHATSAPP_LINK} external>
              Start this week
            </PulseButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
