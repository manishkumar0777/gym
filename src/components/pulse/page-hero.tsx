import { Reveal } from "./reveal";
import { AnimatedText } from "./animated-text";

interface PageHeroProps {
  title: string;
  subtitle: string;
  imageSrc: string;
}

export function PageHero({ title, subtitle, imageSrc }: PageHeroProps) {
  return (
    <section className="relative flex h-[50vh] min-h-[400px] w-full items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={imageSrc}
          alt={title}
          className="size-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 text-center lg:px-10">
        <Reveal>
          <p className="eyebrow mb-4">{subtitle}</p>
        </Reveal>
        <h1 className="display text-[clamp(2.5rem,6vw,5rem)] leading-none text-foreground">
          <AnimatedText text={title} el="span" delay={0.1} />
        </h1>
      </div>
    </section>
  );
}
