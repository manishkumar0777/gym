"use client";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import t1 from "@/assets/trainer-1.jpg";
import t2 from "@/assets/trainer-2.jpg";
import t3 from "@/assets/trainer-3.jpg";
import t4 from "@/assets/trainer-4.jpg";
import { Reveal } from "./reveal";

const trainers = [
  { name: "Marcus Hale", role: "Head of Strength", img: t1 },
  { name: "Ivy Rendon", role: "Conditioning", img: t2 },
  { name: "Dane Whitlock", role: "Boxing", img: t3 },
  { name: "Sana Oduya", role: "Mobility & Recovery", img: t4 },
];

export function Trainers() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    dragFree: true,
    loop: false,
  });

  return (
    <section id="trainers" className="py-24 lg:py-32">
      <div className="mx-auto flex max-w-[1400px] flex-wrap items-end justify-between gap-6 px-6 lg:px-10">
        <div>
          <Reveal>
            <p className="eyebrow">Trainers</p>
          </Reveal>
          <Reveal delay={90}>
            <h2 className="display mt-5 text-[clamp(2.4rem,5vw,4rem)]">
              Coaches who
              <br />
              actually coach
            </h2>
          </Reveal>
        </div>
        <Reveal delay={160}>
          <div className="flex gap-3">
            <button
              aria-label="Previous trainer"
              onClick={() => emblaApi?.scrollPrev()}
              className="flex size-12 items-center justify-center rounded-full border border-border transition-colors hover:border-primary hover:text-primary"
            >
              <ArrowLeft className="size-4" />
            </button>
            <button
              aria-label="Next trainer"
              onClick={() => emblaApi?.scrollNext()}
              className="flex size-12 items-center justify-center rounded-full border border-border transition-colors hover:border-primary hover:text-primary"
            >
              <ArrowRight className="size-4" />
            </button>
          </div>
        </Reveal>
      </div>

      <div className="mt-12 overflow-hidden px-6 lg:px-10" ref={emblaRef}>
        <div className="flex cursor-grab gap-5 active:cursor-grabbing">
          {trainers.map((t) => (
            <article
              key={t.name}
              className="group relative min-w-0 shrink-0 basis-[78%] overflow-hidden rounded-[1.75rem] border border-border sm:basis-[45%] lg:basis-[28%]"
            >
              <img
                src={t.img.src}
                alt={t.name}
                loading="lazy"
                className="h-[26rem] w-full object-cover transition-transform duration-700 group-hover:scale-[1.08]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="text-[0.65rem] uppercase tracking-[0.24em] text-primary">
                  {t.role}
                </p>
                <h3 className="display mt-2 text-2xl">{t.name}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
