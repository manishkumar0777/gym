import { Trainers } from "@/components/pulse/trainers";
import { PageHero } from "@/components/pulse/page-hero";
import { Reveal } from "@/components/pulse/reveal";
import { PulseButton } from "@/components/pulse/pulse-button";
import { WHATSAPP_LINK } from "@/lib/site";
import t1 from "@/assets/trainer-1.jpg";
import t2 from "@/assets/trainer-2.jpg";
import t3 from "@/assets/trainer-3.jpg";
import t4 from "@/assets/trainer-4.jpg";

const bios = [
  {
    name: "Marcus Hale",
    role: "Head of Strength",
    img: t1,
    bio: "With over 12 years of coaching experience, Marcus focuses on raw power and functional strength. He believes in mastering the basics before moving to complexity.",
    specialties: ["Powerlifting", "Olympic Weightlifting", "Injury Rehabilitation"],
  },
  {
    name: "Ivy Rendon",
    role: "Conditioning Specialist",
    img: t2,
    bio: "Ivy's classes are known for being relentlessly paced. Coming from a track and field background, she brings high-intensity interval training to the next level.",
    specialties: ["HIIT", "Endurance Training", "Agility"],
  },
  {
    name: "Dane Whitlock",
    role: "Boxing Coach",
    img: t3,
    bio: "A former amateur fighter, Dane teaches real boxing fundamentals. His sessions improve not just your fitness, but your coordination, speed, and mental toughness.",
    specialties: ["Technical Boxing", "Core Conditioning", "Speed Work"],
  },
  {
    name: "Sana Oduya",
    role: "Mobility & Recovery",
    img: t4,
    bio: "Sana ensures that our athletes stay healthy. Her approach to mobility combines active stretching, yoga principles, and nervous system down-regulation.",
    specialties: ["Active Recovery", "Flexibility", "Breathwork"],
  },
];

export default function TrainersPage() {
  return (
    <main className="min-h-screen bg-background pb-20">
      <PageHero 
        title="Meet the Coaches" 
        subtitle="Learn from the best"
        imageSrc={t1.src} 
      />
      <Trainers />
      
      <section className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10">
        <Reveal>
          <div className="mb-16 text-center">
            <h2 className="display text-4xl lg:text-5xl">Trainer Profiles</h2>
            <p className="mt-4 text-muted-foreground">The expertise behind the programming.</p>
          </div>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-2">
          {bios.map((trainer, i) => (
            <Reveal key={trainer.name} delay={i * 100}>
              <div className="flex flex-col gap-6 rounded-[2rem] border border-border bg-surface p-6 sm:flex-row sm:items-start sm:p-8">
                <img 
                  src={trainer.img.src} 
                  alt={trainer.name} 
                  className="h-32 w-32 shrink-0 rounded-full object-cover border-2 border-primary" 
                />
                <div>
                  <h3 className="display text-2xl">{trainer.name}</h3>
                  <p className="text-sm font-semibold uppercase tracking-wider text-primary mt-1 mb-4">{trainer.role}</p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {trainer.bio}
                  </p>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-foreground mb-3">Specialties</p>
                    <div className="flex flex-wrap gap-2">
                      {trainer.specialties.map((s) => (
                        <span key={s} className="rounded-full border border-border bg-background px-3 py-1 text-xs text-muted-foreground">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-8">
                    <PulseButton href={WHATSAPP_LINK} variant="outline" className="w-full sm:w-auto">
                      Book a Session
                    </PulseButton>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
