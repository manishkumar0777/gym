import { CtaBanner } from "@/components/pulse/cta-banner";
import { PageHero } from "@/components/pulse/page-hero";
import { Reveal } from "@/components/pulse/reveal";
import bgImg from "@/assets/video-bg.jpg";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <PageHero 
        title="Get in Touch" 
        subtitle="Ready to step on the floor?"
        imageSrc={bgImg.src} 
      />

      <section className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Contact Form */}
          <Reveal>
            <div className="rounded-[2rem] border border-border bg-surface p-8 lg:p-12">
              <h2 className="display mb-8 text-3xl">Send a Message</h2>
              <form className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-muted-foreground">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="Your name" 
                    className="rounded-xl border border-border bg-background px-4 py-3 text-foreground focus:border-primary focus:outline-none"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-muted-foreground">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="you@example.com" 
                    className="rounded-xl border border-border bg-background px-4 py-3 text-foreground focus:border-primary focus:outline-none"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-medium text-muted-foreground">Message</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    placeholder="How can we help you?" 
                    className="resize-none rounded-xl border border-border bg-background px-4 py-3 text-foreground focus:border-primary focus:outline-none"
                  />
                </div>
                <button 
                  type="button" 
                  className="group mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground transition-all duration-300 hover:shadow-[0_0_40px_-6px_var(--primary)] hover:brightness-110"
                >
                  Submit
                </button>
              </form>
            </div>
          </Reveal>

          {/* Contact Details */}
          <div className="flex flex-col gap-12 lg:py-8">
            <Reveal delay={100}>
              <div>
                <h2 className="display mb-8 text-3xl">Studio Details</h2>
                <div className="flex flex-col gap-8">
                  <div className="flex items-start gap-4">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-border text-primary">
                      <MapPin className="size-5" />
                    </div>
                    <div>
                      <p className="text-lg font-medium text-foreground">Location</p>
                      <p className="mt-1 text-muted-foreground">123 Iron Street, Fit District<br />New York, NY 10001</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-border text-primary">
                      <Clock className="size-5" />
                    </div>
                    <div>
                      <p className="text-lg font-medium text-foreground">Hours</p>
                      <p className="mt-1 text-muted-foreground">Mon-Fri: 5:00 AM - 10:00 PM<br />Sat-Sun: 7:00 AM - 8:00 PM</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-border text-primary">
                      <Phone className="size-5" />
                    </div>
                    <div>
                      <p className="text-lg font-medium text-foreground">Phone</p>
                      <p className="mt-1 text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-border text-primary">
                      <Mail className="size-5" />
                    </div>
                    <div>
                      <p className="text-lg font-medium text-foreground">Email</p>
                      <p className="mt-1 text-muted-foreground">hello@pulsefit.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBanner />
    </main>
  );
}
