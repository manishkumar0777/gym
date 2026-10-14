"use client";
import { useEffect, useState } from "react";
import bg1 from "@/assets/testimonial-1.jpg";
import bg2 from "@/assets/testimonial-2.jpg";
import bg3 from "@/assets/testimonial-3.jpg";
import { cn } from "@/lib/utils";

const slides = [
  {
    quote:
      "I'd bounced between gyms for years. Six months here and I'm deadlifting double what I thought was my ceiling.",
    name: "Priya N.",
    meta: "Member since 2023",
    img: bg1,
  },
  {
    quote:
      "The 6am crew is the only reason I get out of bed. It stopped being a workout and started being the best hour of my day.",
    name: "Tomás R.",
    meta: "Member since 2021",
    img: bg2,
  },
  {
    quote:
      "Coaches remember your knee, your last PR, your bad week. That's the whole difference.",
    name: "Ellie K.",
    meta: "Member since 2024",
    img: bg3,
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="testimonials" className="relative isolate overflow-hidden">
      {slides.map((s, i) => (
        <img
          key={s.name}
          src={s.img.src}
          alt=""
          aria-hidden
          loading="lazy"
          className={cn(
            "absolute inset-0 size-full object-cover transition-opacity duration-1000",
            i === index ? "opacity-100" : "opacity-0",
          )}
        />
      ))}
      <div className="absolute inset-0 bg-background/75" />

      <div className="relative mx-auto max-w-4xl px-6 py-28 text-center lg:py-40">
        <p className="eyebrow">Member stories</p>
        <div className="relative mt-10 min-h-[13rem]">
          {slides.map((s, i) => (
            <blockquote
              key={s.name}
              className={cn(
                "absolute inset-0 transition-all duration-700",
                i === index
                  ? "opacity-100 translate-y-0"
                  : "pointer-events-none translate-y-3 opacity-0",
              )}
            >
              <p className="text-balance text-2xl font-medium leading-snug lg:text-4xl lg:leading-tight">
                “{s.quote}”
              </p>
              <footer className="mt-8 text-xs uppercase tracking-[0.24em] text-muted-foreground">
                {s.name} — {s.meta}
              </footer>
            </blockquote>
          ))}
        </div>

        <div className="mt-12 flex justify-center gap-3">
          {slides.map((s, i) => (
            <button
              key={s.name}
              aria-label={`Show testimonial ${i + 1}`}
              onClick={() => setIndex(i)}
              className={cn(
                "h-1.5 rounded-full transition-all duration-500",
                i === index ? "w-10 bg-primary" : "w-4 bg-muted-foreground/50",
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
