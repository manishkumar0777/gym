import { Classes } from "@/components/pulse/classes";
import { PageHero } from "@/components/pulse/page-hero";
import heroImg from "@/assets/class-strength.jpg";
import { Reveal } from "@/components/pulse/reveal";
import { CtaBanner } from "@/components/pulse/cta-banner";
import strength from "@/assets/class-strength.jpg";
import cycling from "@/assets/class-cycling.jpg";
import boxing from "@/assets/class-boxing.jpg";
import mobility from "@/assets/class-mobility.jpg";
import { cn } from "@/lib/utils";

const deepDive = [
  {
    title: "Strength Lab",
    description: "Our signature barbell class. Focus on compound movements, progressive overload, and building raw strength. Whether you are a beginner or a seasoned lifter, our coaches ensure perfect form and constant progression.",
    img: strength,
    reverse: false,
  },
  {
    title: "Ride",
    description: "High-intensity cardiovascular conditioning on the bike. We combine sprints, heavy climbs, and intervals driven by an immersive sound system to push your anaerobic threshold.",
    img: cycling,
    reverse: true,
  },
  {
    title: "Fight Club",
    description: "Authentic boxing conditioning. Learn real combinations, footwork, and defensive head movement while burning out your shoulders and core. Gloves on, world off.",
    img: boxing,
    reverse: false,
  },
  {
    title: "Mobility",
    description: "A mandatory component of longevity. We focus on active stretching, joint health, and recovering your nervous system so you can hit tomorrow's session even harder.",
    img: mobility,
    reverse: true,
  },
];

export default function ClassesPage() {
  return (
    <main className="min-h-screen bg-background">
      <PageHero 
        title="Our Classes" 
        subtitle="Push your limits"
        imageSrc={heroImg.src} 
      />
      <Classes />
      
      <section className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10">
        <Reveal>
          <div className="mb-16 text-center">
            <h2 className="display text-4xl lg:text-5xl">Class Details</h2>
          </div>
        </Reveal>
        <div className="flex flex-col gap-24">
          {deepDive.map((item, i) => (
            <div 
              key={item.title} 
              className={cn(
                "grid items-center gap-12 lg:grid-cols-2 lg:gap-24",
                item.reverse && "lg:[&>div:first-child]:order-last"
              )}
            >
              <Reveal delay={100}>
                <div className="overflow-hidden rounded-[2rem] border border-border">
                  <img src={item.img.src} alt={item.title} className="h-[25rem] w-full object-cover lg:h-[30rem]" />
                </div>
              </Reveal>
              <div>
                <Reveal delay={200}>
                  <p className="eyebrow">0{i + 1}</p>
                </Reveal>
                <Reveal delay={300}>
                  <h3 className="display mt-4 text-4xl lg:text-5xl">{item.title}</h3>
                </Reveal>
                <Reveal delay={400}>
                  <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </Reveal>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner />
    </main>
  );
}
