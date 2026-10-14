"use client";
import strength from "@/assets/class-strength.jpg";
import cycling from "@/assets/class-cycling.jpg";
import boxing from "@/assets/class-boxing.jpg";
import mobility from "@/assets/class-mobility.jpg";
import { Reveal } from "./reveal";
import { cn } from "@/lib/utils";

const items = [
  {
    title: "Strength Lab",
    meta: "60 min · Barbell",
    img: strength,
    span: "md:col-start-1 md:col-end-3 md:row-start-1 md:row-end-3",
  },
  {
    title: "Ride",
    meta: "45 min · Cycling",
    img: cycling,
    span: "md:col-start-3 md:row-start-1",
  },
  {
    title: "Fight Club",
    meta: "50 min · Boxing",
    img: boxing,
    span: "md:col-start-3 md:row-start-2",
  },
  {
    title: "Mobility",
    meta: "40 min · Recovery",
    img: mobility,
    span: "md:col-start-1 md:col-end-4 md:row-start-3",
  },
];


export function Classes() {
  return (
    <section id="classes" className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <Reveal>
            <p className="eyebrow">Classes</p>
          </Reveal>
          <Reveal delay={90}>
            <h2 className="display mt-5 text-[clamp(2.4rem,5vw,4rem)]">
              Pick your poison
            </h2>
          </Reveal>
        </div>
        <Reveal delay={160}>
          <a
            href="#contact"
            className="group text-xs font-semibold uppercase tracking-[0.2em] text-primary"
          >
            View all
            <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </Reveal>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-3 md:auto-rows-[15rem]">
        {items.map((item, i) => (
          <Reveal
            key={item.title}
            delay={i * 100}
            className={cn(item.span)}
          >
            <a
              href="#contact"
              className="group relative block h-full min-h-[16rem] overflow-hidden rounded-[1.75rem] border border-border"
            >
              <img
                src={item.img.src}
                alt={item.title}
                loading="lazy"
                className="absolute inset-0 size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
              <div className="relative flex h-full min-h-[16rem] flex-col justify-end p-7">
                <p className="text-[0.65rem] uppercase tracking-[0.24em] text-primary">
                  {item.meta}
                </p>
                <h3 className="display mt-2 text-3xl transition-transform duration-500 group-hover:-translate-y-1 lg:text-4xl">
                  {item.title}
                </h3>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
