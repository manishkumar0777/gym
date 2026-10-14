"use client";
import { Instagram, Youtube, MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/site";

const columns = [
  {
    title: "Train",
    links: [
      { label: "Strength Lab", href: "#classes" },
      { label: "Ride", href: "#classes" },
      { label: "Fight Club", href: "#classes" },
      { label: "Mobility", href: "#classes" },
    ],
  },
  {
    title: "Gym",
    links: [
      { label: "Our story", href: "#story" },
      { label: "Trainers", href: "#trainers" },
      { label: "Member stories", href: "#testimonials" },
    ],
  },
  {
    title: "Visit",
    links: [
      { label: "WhatsApp us", href: WHATSAPP_LINK, external: true },
      { label: "Mon–Sun · 6AM–11PM", href: "#contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <p className="display text-3xl">
              Pulse<span className="text-primary">fit</span>
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              A training floor for people who keep their promises to themselves.
            </p>
            <div className="mt-7 flex gap-3">
              {[
                { Icon: MessageCircle, href: WHATSAPP_LINK, label: "WhatsApp" },
                { Icon: Instagram, href: WHATSAPP_LINK, label: "Instagram" },
                { Icon: Youtube, href: WHATSAPP_LINK, label: "YouTube" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex size-10 items-center justify-center rounded-full border border-border transition-colors hover:border-primary hover:text-primary"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            {columns.map((col) => (
              <div key={col.title}>
                <p className="text-[0.65rem] uppercase tracking-[0.24em] text-primary">
                  {col.title}
                </p>
                <ul className="mt-5 space-y-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        {...("external" in l && l.external
                          ? { target: "_blank", rel: "noreferrer" }
                          : {})}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-border pt-7 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Pulsefit. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#top" className="transition-colors hover:text-foreground">
              Privacy
            </a>
            <a href="#top" className="transition-colors hover:text-foreground">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
