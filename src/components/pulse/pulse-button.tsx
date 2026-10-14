"use client";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "lime" | "outline" | "dark";
  className?: string;
  external?: boolean;
};

export function PulseButton({
  href,
  children,
  variant = "lime",
  className,
  external,
}: Props) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className={cn(
        "group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] transition-all duration-300",
        variant === "lime" &&
          "bg-primary text-primary-foreground hover:shadow-[0_0_40px_-6px_var(--primary)] hover:brightness-110",
        variant === "outline" &&
          "border border-border text-foreground hover:border-primary hover:text-primary",
        variant === "dark" &&
          "bg-background text-foreground hover:bg-foreground hover:text-background",
        className,
      )}
    >
      {children}
      <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
    </a>
  );
}
