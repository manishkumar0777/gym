import { Story } from "@/components/pulse/story";
import { PageHero } from "@/components/pulse/page-hero";
import storyImg from "@/assets/story.jpg";
import { Reveal } from "@/components/pulse/reveal";
import { Stats } from "@/components/pulse/stats";
import { VideoCta } from "@/components/pulse/video-cta";

const coreValues = [
  {
    title: "Relentless Progression",
    description: "We don't believe in maintenance. Every session is designed to push you further than yesterday. Whether it's one more rep or one more second, we track and demand progress.",
  },
  {
    title: "Iron Community",
    description: "You are the average of the people you train with. Our floor is filled with individuals who show up early, put in the work, and hold each other accountable to the highest standard.",
  },
  {
    title: "No Excuses",
    description: "Life gets busy, but your health doesn't care. We provide the programming, the space, and the coaching. You provide the effort. Leave your ego and your excuses at the door.",
  },
];

export default function StoryPage() {
  return (
    <main className="min-h-screen bg-background">
      <PageHero 
        title="Our Story" 
        subtitle="Where it all began"
        imageSrc={storyImg.src} 
      />
      <Story />

      <section className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10">
        <Reveal>
          <div className="mb-16 text-center">
            <h2 className="display text-4xl lg:text-5xl">Core Values</h2>
            <p className="mt-4 text-muted-foreground">The principles that built our foundation.</p>
          </div>
        </Reveal>
        
        <div className="grid gap-8 md:grid-cols-3">
          {coreValues.map((value, i) => (
            <Reveal key={value.title} delay={i * 100}>
              <div className="flex h-full flex-col rounded-[2rem] border border-border bg-surface p-8">
                <div className="mb-6 flex size-12 items-center justify-center rounded-full border border-primary text-primary">
                  0{i + 1}
                </div>
                <h3 className="display mb-4 text-2xl">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Stats />
      <VideoCta />
    </main>
  );
}
