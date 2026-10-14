# Pulse Fitness Forge

Build Prompt: Dark High-Energy Gym/Fitness Landing Page

Use this as a prompt for Claude Code, v0, Lovable, or your own dev build. It captures the visual system and animation language of a "Pulsefit"-style fitness site: dark theme, lime accent, bold type, scroll-driven motion.

1. Color Palette

Role Hex Usage Accent / Primary #DEFF5F CTAs, buttons, hover states, tag pills, small accent strokes, active nav dot Base Background #0B0B0B Page background Surface / Card Dark #111319 Section backgrounds, cards, nav-on-scroll Muted / Grey #49494A Borders, secondary text, dividers Text #FFFFFF / off-white Headings, body copy on dark

Overall feel: near-black canvas with a single punchy chartreuse-lime accent used sparingly for maximum contrast (buttons, small caption labels, hover glows).

2. Typography

Headings: heavy, tight-tracked, near-uppercase display sans (think Archivo Black / Anton / Bebas Neue territory) — very large scale on the hero (100px+ desktop)

Body: clean grotesk sans, medium weight, generous line-height, muted grey/white

Eyebrow/labels: small uppercase caption text, letter-spaced, often in the lime accent color, used above section headings (e.g. "CLASSES", "TRAINERS")

3. Page Structure (Home)

Navbar — logo left/center, horizontal nav links, CTA button right. Transparent over hero; fades to solid #111319 (with blur) on scroll.

Hero — huge bold single-word/short headline, short supporting sentence, primary CTA button, large full-bleed photo (right side or background), floating category tag pills (e.g. Outdoor, Aerobic, Strength, Cycling) scattered or looping around the image.

Brand/story strip — two-column: image on one side, short mission paragraph + small caption label + link on the other.

Classes grid — asymmetric image-card grid (one large + several smaller), each card has a bottom-left title label and darkens/zooms on hover, "View all" link.

Stats bar — 3–4 large numbers (e.g. members, sessions, coaches, locations) with small labels underneath, counts up on scroll into view.

Video/workout showcase — full-width background photo/video, centered play button, CTA button below.

Trainers carousel — horizontal draggable/auto-playing slider of trainer photo cards, name overlay at bottom of each card.

Testimonials slider — full-width background photo per slide, large quote text, name credit, autoplay with fade or slide transition, small pagination dots.

CTA banner — full-width lime (#DEFF5F) block with dark text, bold statement + button, high contrast break before footer.

Footer — logo, link columns, social icons row, legal links, muted copyright line.

4. Motion & Interaction Details

Scroll reveals: content fades + slides up (translateY 20–40px → 0, opacity 0 → 1) as each section enters viewport; stagger children (headline, then subtext, then button) by ~80–120ms.

Navbar: background opacity/blur transitions in on scroll past hero height.

Hero tag pills: slow continuous marquee loop or gentle float/orbit animation around the hero image.

Counters: numbers animate from 0 to target value once in view (ease-out, ~1.5–2s).

Cards (classes/trainers): image scale(1.0 → 1.08) on hover with a subtle dark overlay fade-in and title/label sliding up slightly.

Buttons: background/text color invert or lime glow on hover, small arrow icon that slides right on hover.

Carousels: drag-to-scroll + autoplay, ease transitions between slides, active pagination dot fills with lime accent.

Smooth scroll for in-page anchor links.

5. Suggested Stack

Structure/styling: Next js + Tailwind CSS (or plain HTML/CSS)

Scroll/reveal animation: Framer Motion (whileInView) or GSAP + ScrollTrigger

Carousels: Swiper.js or Embla Carousel

Counters: a simple requestAnimationFrame count-up hook or a library like react-countup

Prompt you can paste into an AI builder:

Build a dark-themed fitness/gym landing page in next + Tailwind. Background #0B0B0B with surface panels in #111319, accent color #DEFF5F used only for CTAs, hover states, and small caption labels. Bold, tight-tracked, near-uppercase display font for headings; clean grotesk for body text. Sections: transparent-to-solid navbar on scroll, a hero with a huge headline + subtext + CTA + large hero photo + floating category tag pills, a two-column brand story section, an asymmetric classes grid with hover-zoom cards, a stats counter bar that counts up on scroll, a full-width video/workout CTA section, a draggable trainers carousel, an autoplay testimonials slider with pagination dots, a bold lime CTA banner, and a dark footer. Add scroll-triggered fade-up reveals with staggered children, hover scale/glow on buttons and cards, and smooth-scroll anchor navigation.

Note: exact fonts, spacing units, and precise animation easing/timing weren't extractable from a text fetch of the live site — the palette above is taken directly from PulseFit's published style guide page, and the rest is a faithful structural/motion description you can tune to taste.

build it very well and you dont have to use any backend for this  , give the contact in the lst which redirects to the whatsapp

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/45a36cd6-9302-4263-9785-d65e46e5c317).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
