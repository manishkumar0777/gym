"use client";
import heroImg from "@/assets/hero.jpg";
import { PulseButton } from "./pulse-button";
import { Reveal } from "./reveal";
import { AnimatedText } from "./animated-text";
import { WHATSAPP_LINK } from "@/lib/site";

const tags = ["Outdoor", "Aerobic", "Strength", "Cycling", "Boxing", "Mobility", "HIIT"];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-16 lg:pt-40">
      <div className="pointer-events-none absolute -top-40 left-1/3 size-[38rem] rounded-full bg-primary/8 blur-[140px]" />

      <div className="mx-auto grid max-w-[1400px] items-end gap-12 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
        <div>
          <Reveal>
            <p className="eyebrow">Strength · Sweat · Discipline</p>
          </Reveal>
          <h1 className="display mt-6 text-[clamp(3.5rem,11vw,8.5rem)] flex flex-col">
            <AnimatedText text="Train" el="span" delay={0.1} />
            <AnimatedText text="like you" el="span" delay={0.4} />
            <AnimatedText text="mean it." el="span" className="text-primary" delay={0.7} />
          </h1>
          <Reveal delay={200}>
            <p className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground">
              A no-excuses training floor built for people who show up. Coached
              sessions, real programming, and a room that pushes you harder than
              you'd push yourself.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <PulseButton href={WHATSAPP_LINK} external>
                Book a free trial
              </PulseButton>
              <PulseButton href="#classes" variant="outline">
                See classes
              </PulseButton>
            </div>
          </Reveal>
        </div>

        <Reveal delay={150} className="relative">
          <div className="relative overflow-hidden rounded-[2rem]">
            <img
              src={heroImg.src}
              alt="Athlete training with battle ropes in a dark gym"
              width={1024}
              height={1280}
              className="h-[26rem] w-full object-cover object-center lg:h-[38rem]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
          </div>
          <div className="float-soft absolute -left-4 top-10 hidden rounded-full border border-primary/40 bg-background/70 px-4 py-2 text-[0.65rem] uppercase tracking-[0.2em] text-primary backdrop-blur lg:block">
            6 AM — 11 PM
          </div>
        </Reveal>
      </div>

      <div className="mt-14 overflow-hidden border-y border-border py-4">
        <div className="marquee-track">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex shrink-0">
              {tags.map((t) => (
                <span
                  key={`${dup}-${t}`}
                  className="mx-3 rounded-full border border-border px-6 py-2 text-xs uppercase tracking-[0.22em] text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
