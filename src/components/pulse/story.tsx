"use client";
import storyImg from "@/assets/story.jpg";
import { Reveal } from "./reveal";
import { AnimatedText } from "./animated-text";
import { PulseButton } from "./pulse-button";

export function Story() {
  return (
    <section id="story" className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <div className="overflow-hidden rounded-[2rem]">
            <img
              src={storyImg.src}
              alt="Empty weight racks in a dimly lit gym"
              width={1024}
              height={1024}
              loading="lazy"
              className="h-[24rem] w-full object-cover lg:h-[32rem]"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="eyebrow">Our story</p>
          </Reveal>
          <h2 className="display mt-5 text-[clamp(2.4rem,5vw,4rem)] flex flex-col">
            <AnimatedText text="Built in the" el="span" delay={0.1} />
            <AnimatedText text="early hours." el="span" className="text-primary" delay={0.4} />
          </h2>
          <Reveal delay={180}>
            <p className="mt-7 max-w-lg leading-relaxed text-muted-foreground">
              Pulsefit started as a garage floor, two racks and a handful of people
              who refused to skip. Ten years later the room is bigger, the
              programming is sharper, and the standard hasn't moved: show up, do
              the work, leave better.
            </p>
          </Reveal>
          <Reveal delay={260}>
            <div className="mt-9 grid max-w-md grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border">
              {[
                ["Coached", "Every single session"],
                ["Programmed", "Progression, not chaos"],
                ["Open", "17 hours a day"],
                ["Small", "Max 14 per class"],
              ].map(([t, s]) => (
                <div key={t} className="bg-surface p-5">
                  <p className="text-sm font-semibold text-foreground">{t}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{s}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={340}>
            <div className="mt-9">
              <PulseButton href="#trainers" variant="outline">
                Meet the coaches
              </PulseButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
