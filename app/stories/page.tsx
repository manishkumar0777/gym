import { Testimonials } from "@/components/pulse/testimonials";
import { PageHero } from "@/components/pulse/page-hero";
import { Reveal } from "@/components/pulse/reveal";
import { CtaBanner } from "@/components/pulse/cta-banner";
import heroImg from "@/assets/testimonial-2.jpg";
import t1 from "@/assets/testimonial-1.jpg";
import t2 from "@/assets/testimonial-2.jpg";
import t3 from "@/assets/testimonial-3.jpg";

const spotlights = [
  {
    name: "Sarah Jenkins",
    quote: "Pulsefit completely changed my relationship with fitness.",
    story: "Before joining, I would bounce between generic gym memberships and home workouts, never really seeing progress. The coached environment here forced me to be accountable. In 6 months, I've added 40lbs to my deadlift and I finally feel athletic, not just 'tired'.",
    img: t1,
  },
  {
    name: "Michael Chen",
    quote: "It's not just a gym, it's an anchor in my daily routine.",
    story: "The 6AM Fight Club class is the only way I want to start my day. The trainers know exactly when to push you and when to focus on form. It's the most welcoming yet intense environment I've ever experienced.",
    img: t2,
  },
  {
    name: "Elena Rodriguez",
    quote: "I came for the workouts, I stayed for the community.",
    story: "I was intimidated by the heavy lifting at first. The coaches took the time to break down every movement. Now, the people in my evening class are some of my closest friends, and we push each other every single day.",
    img: t3,
  },
];

export default function StoriesPage() {
  return (
    <main className="min-h-screen bg-background">
      <PageHero 
        title="Member Stories" 
        subtitle="Real results from real people"
        imageSrc={heroImg.src} 
      />
      <Testimonials />

      <section className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10">
        <Reveal>
          <div className="mb-16 text-center">
            <h2 className="display text-4xl lg:text-5xl">Member Spotlight</h2>
            <p className="mt-4 text-muted-foreground">Deep dives into real transformations.</p>
          </div>
        </Reveal>

        <div className="flex flex-col gap-16">
          {spotlights.map((spot, i) => (
            <Reveal key={spot.name} delay={i * 100}>
              <div className="flex flex-col overflow-hidden rounded-[2rem] border border-border bg-surface lg:flex-row">
                <img 
                  src={spot.img.src} 
                  alt={spot.name} 
                  className="h-[20rem] w-full object-cover lg:h-auto lg:w-1/3" 
                />
                <div className="flex flex-col justify-center p-8 lg:p-12">
                  <h3 className="display mb-4 text-3xl">{spot.quote}</h3>
                  <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
                    "{spot.story}"
                  </p>
                  <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                    — {spot.name}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBanner />
    </main>
  );
}
