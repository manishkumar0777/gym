"use client";
import { MessageCircle } from "lucide-react";
import { Reveal } from "./reveal";
import { WHATSAPP_LINK } from "@/lib/site";

export function CtaBanner() {
  return (
    <section id="contact" className="bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-[1400px] flex-col items-start gap-10 px-6 py-20 lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:py-28">
        <Reveal>
          <h2 className="display max-w-2xl text-[clamp(2.4rem,6vw,5rem)]">
            First session is on us.
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <div className="lg:text-right">
            <p className="max-w-sm text-sm font-medium opacity-80">
              Message us on WhatsApp and we'll book you into a class this week —
              no forms, no calls.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="group mt-7 inline-flex items-center gap-3 rounded-full bg-background px-8 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-foreground transition-transform duration-300 hover:scale-[1.03]"
            >
              <MessageCircle className="size-4 text-primary" />
              Chat on WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
