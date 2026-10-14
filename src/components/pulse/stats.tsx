"use client";
import { useInView, useCountUp } from "@/hooks/use-reveal";

const stats = [
  { value: 2400, suffix: "+", label: "Active members" },
  { value: 18000, suffix: "", label: "Sessions coached" },
  { value: 24, suffix: "", label: "Certified coaches" },
  { value: 6, suffix: "", label: "City locations" },
];

function Stat({
  value,
  suffix,
  label,
  start,
}: {
  value: number;
  suffix: string;
  label: string;
  start: boolean;
}) {
  const count = useCountUp(value, start);
  return (
    <div className="px-6 py-10 text-center">
      <p className="display text-[clamp(2.5rem,6vw,4.5rem)] text-foreground">
        {count.toLocaleString()}
        <span className="text-primary">{suffix}</span>
      </p>
      <p className="mt-3 text-[0.65rem] uppercase tracking-[0.24em] text-muted-foreground">
        {label}
      </p>
    </div>
  );
}

export function Stats() {
  const { ref, inView } = useInView<HTMLDivElement>(0.3);

  return (
    <section className="border-y border-border bg-surface">
      <div
        ref={ref}
        className="mx-auto grid max-w-[1400px] divide-y divide-border px-6 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x lg:px-10"
      >
        {stats.map((s) => (
          <Stat key={s.label} {...s} start={inView} />
        ))}
      </div>
    </section>
  );
}
