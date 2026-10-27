import { useState } from "react";
import { Check, Copy, Leaf, MapPin, Music2, Sparkles } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import photoLounge from "@/imports/IMG_9056.JPG";
import photoGallery from "@/imports/IMG_9106.JPG";
import photoGreenhouse from "@/imports/IMG_0008.JPG";
import photoOutdoor from "@/imports/IMG_0051.JPG";
import photoVignette from "@/imports/IMG_0003.JPG";
import photoExterior from "@/imports/IMG_9007.JPG";
import photoHoliday from "@/imports/IMG_9132.JPG";

const palette = [
  { name: "Dark Walnut", hex: "#1C0F07", use: "Headlines · anchor" },
  { name: "Garden Green", hex: "#3B5229", use: "Nature · depth" },
  { name: "Terracotta", hex: "#C46845", use: "Warmth · action" },
  { name: "Old Leather", hex: "#8B6840", use: "Patina · detail" },
  { name: "Plaster", hex: "#EAE4D6", use: "Canvas · calm" },
  { name: "Linen", hex: "#F3EDE0", use: "Light · surface" },
];

const principles = [
  {
    number: "01",
    title: "Lived-in, not styled",
    copy: "Keep the dog hair, the stack of books, the overgrown corner. The story is in the evidence of a life being lived.",
  },
  {
    number: "02",
    title: "Warmly imperfect",
    copy: "A little grain, a crooked frame, a table set by hand. Polish should never erase personality.",
  },
  {
    number: "03",
    title: "Quietly collected",
    copy: "Objects earn their place over time. Let heirlooms, flea-market finds, plants, and records share the frame.",
  },
];

function PaletteSwatch({
  name,
  hex,
  use,
  onCopy,
  copied,
}: {
  name: string;
  hex: string;
  use: string;
  onCopy: () => void;
  copied: boolean;
}) {
  return (
    <button
      onClick={onCopy}
      className="group grid w-full grid-cols-[88px_1fr_auto] items-center gap-4 border-b border-border py-3 text-left transition-colors hover:bg-card/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:grid-cols-[112px_1fr_auto]"
      aria-label={`Copy ${name} color ${hex}`}
    >
      <span
        className="h-12 w-full border border-black/10 transition-transform duration-300 group-hover:scale-[1.03]"
        style={{ backgroundColor: hex }}
      />
      <span>
        <span className="block font-['Outfit'] text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          {use}
        </span>
        <span className="mt-1 block font-['EB_Garamond'] text-lg leading-none text-foreground">
          {name}
        </span>
      </span>
      <span className="flex items-center gap-2 font-['Outfit'] text-xs tracking-wide text-muted-foreground">
        {hex}
        {copied ? <Check size={13} className="text-secondary" /> : <Copy size={12} />}
      </span>
    </button>
  );
}

export default function App() {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const copyColor = async (hex: string) => {
    try {
      await navigator.clipboard.writeText(hex);
    } catch {
      // Clipboard permissions vary in embedded previews; the visual confirmation remains useful.
    }
    setCopiedColor(hex);
    window.setTimeout(() => setCopiedColor(null), 1400);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="border-b border-border">
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 items-center px-5 py-4 md:grid-cols-[1fr_auto_1fr] md:px-10">
          <p className="font-['Outfit'] text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
            Visual direction / 2025
          </p>
          <p className="hidden font-['EB_Garamond'] text-xl md:block">Feedless Mind</p>
          <p className="justify-self-end font-['Outfit'] text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
            Providence, RI
          </p>
        </div>
      </header>

      <section className="relative mx-auto max-w-[1440px] px-5 pb-16 pt-12 md:px-10 md:pb-24 md:pt-20">
        <div className="grid grid-cols-12 gap-x-4">
          <div className="col-span-12 md:col-span-8">
            <p className="mb-5 flex items-center gap-2 font-['Outfit'] text-[11px] uppercase tracking-[0.28em] text-accent">
              <Sparkles size={13} />
              Mood board No. 01
            </p>
            <h1 className="max-w-5xl font-['EB_Garamond'] text-[clamp(4.4rem,10vw,10rem)] font-normal leading-[0.78] tracking-[-0.055em]">
              A home,
              <br />
              <span className="ml-[10vw] italic text-accent md:ml-32">unhurried.</span>
            </h1>
          </div>
          <div className="col-span-10 col-start-3 mt-12 md:col-span-3 md:col-start-10 md:mt-8">
            <p className="font-['Lora'] text-base leading-relaxed text-foreground/75">
              An analog-feeling corner of the internet shaped by old wood, green things,
              good records, shared meals, and the quiet charm of staying home.
            </p>
            <div className="mt-7 flex items-center gap-3 border-t border-border pt-4 font-['Outfit'] text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              <MapPin size={12} />
              41.8240° N · 71.4128° W
            </div>
          </div>
        </div>

        <div className="relative mt-14 grid h-[64vh] min-h-[480px] grid-cols-12 grid-rows-12 gap-3 md:mt-20 md:h-[78vh] md:min-h-[650px]">
          <div className="col-span-9 row-span-10 overflow-hidden bg-muted md:col-span-8 md:row-span-12">
            <ImageWithFallback
              src={photoLounge}
              alt="Two dogs resting on a sofa in a warm wood-trimmed Providence living room"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="col-span-3 row-span-5 overflow-hidden bg-muted md:col-span-4 md:row-span-7">
            <ImageWithFallback
              src={photoGreenhouse}
              alt="A plant-filled greenhouse layered with cacti and tropical foliage"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="col-span-7 col-start-6 row-span-4 row-start-9 overflow-hidden border-[10px] border-background bg-muted shadow-xl md:col-span-5 md:col-start-8 md:row-span-5 md:row-start-8 md:border-[14px]">
            <ImageWithFallback
              src={photoOutdoor}
              alt="A long outdoor table prepared for a garden dinner"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 left-4 bg-primary px-4 py-3 text-primary-foreground md:-bottom-7 md:left-[59%] md:px-6 md:py-4">
            <p className="font-['Lora'] text-sm italic md:text-base">
              “No algorithm. No feed. Just life.”
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-16 md:grid-cols-12 md:px-10 md:py-24">
          <div className="md:col-span-4">
            <p className="font-['Outfit'] text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              01 / Color language
            </p>
            <h2 className="mt-6 max-w-xs font-['EB_Garamond'] text-5xl font-normal leading-[0.94] tracking-[-0.03em] md:text-6xl">
              Pulled from the house itself.
            </h2>
            <p className="mt-6 max-w-sm font-['Lora'] text-sm leading-relaxed text-foreground/65">
              Craftsman woodwork, garden leaves, worn leather, sun-faded linen, and one
              confident hit of terracotta. Earthy, never muddy.
            </p>
            <p className="mt-8 font-['Outfit'] text-[10px] uppercase tracking-[0.18em] text-accent">
              Tap a swatch to copy
            </p>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <div className="border-t border-border">
              {palette.map((color) => (
                <PaletteSwatch
                  key={color.hex}
                  {...color}
                  copied={copiedColor === color.hex}
                  onCopy={() => copyColor(color.hex)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 py-16 md:px-10 md:py-28">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="font-['Outfit'] text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              02 / Typography
            </p>
            <div className="mt-10 border-t border-border pt-9">
              <p className="font-['EB_Garamond'] text-[clamp(4.5rem,9vw,8rem)] leading-[0.82] tracking-[-0.04em]">
                EB Garamond
              </p>
              <p className="mt-5 max-w-xl font-['EB_Garamond'] text-3xl italic leading-tight text-accent md:text-4xl">
                Literary, generous, and a little romantic.
              </p>
              <div className="mt-10 grid gap-6 border-t border-border pt-6 sm:grid-cols-2">
                <p className="font-['EB_Garamond'] text-2xl">
                  Aa Bb Cc Dd Ee Ff
                  <br />
                  0123456789 &amp;?!
                </p>
                <p className="font-['Outfit'] text-[10px] uppercase leading-loose tracking-[0.2em] text-muted-foreground">
                  Display / EB Garamond
                  <br />
                  Regular 400 · Italic 400
                  <br />
                  Use for expressive hierarchy
                </p>
              </div>
            </div>
          </div>
          <div className="md:col-span-4 md:col-start-9 md:pt-20">
            <div className="border-t border-border pt-8">
              <p className="font-['Lora'] text-4xl">Lora</p>
              <p className="mt-4 font-['Lora'] text-base leading-relaxed text-foreground/70">
                A bookish body face with a human rhythm. Comfortable for recipes, garden
                notes, recommendations, and stories meant to be read slowly.
              </p>
              <p className="mt-8 font-['Outfit'] text-[10px] uppercase leading-loose tracking-[0.2em] text-muted-foreground">
                Body / Lora
                <br />
                16–18px · 1.7 line height
              </p>
            </div>
            <div className="mt-12 border-t border-border pt-8">
              <p className="font-['Outfit'] text-3xl font-light tracking-wide">OUTFIT</p>
              <p className="mt-4 font-['Outfit'] text-xs uppercase leading-loose tracking-[0.19em] text-muted-foreground">
                The modern counterpoint
                <br />
                Navigation · labels · metadata
                <br />
                Never shout
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary py-16 text-primary-foreground md:py-24">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <div className="grid items-end gap-8 border-b border-white/15 pb-8 md:grid-cols-2">
            <div>
              <p className="font-['Outfit'] text-[10px] uppercase tracking-[0.25em] text-white/45">
                03 / The visual world
              </p>
              <h2 className="mt-6 font-['EB_Garamond'] text-5xl font-normal leading-none md:text-7xl">
                Collected, not curated.
              </h2>
            </div>
            <p className="max-w-lg justify-self-end font-['Lora'] text-sm leading-relaxed text-white/60">
              Natural light and honest snapshots over studio perfection. Frame the rooms
              as they are: layered, personal, and full of things with stories.
            </p>
          </div>

          <div className="mt-8 grid auto-rows-[130px] grid-cols-2 gap-3 md:auto-rows-[170px] md:grid-cols-12">
            <figure className="col-span-2 row-span-3 overflow-hidden bg-white/10 md:col-span-5 md:row-span-3">
              <ImageWithFallback
                src={photoGallery}
                alt="A relaxed living room with a wall of collected art and a dog on the sofa"
                className="h-full w-full object-cover"
              />
            </figure>
            <figure className="col-span-1 row-span-2 overflow-hidden bg-white/10 md:col-span-3 md:row-span-2">
              <ImageWithFallback
                src={photoVignette}
                alt="A rust-colored dog among pillows beneath a staghorn fern and vintage lamp"
                className="h-full w-full object-cover"
              />
            </figure>
            <div className="col-span-1 flex flex-col justify-between bg-secondary p-5 text-secondary-foreground md:col-span-4 md:row-span-2 md:p-8">
              <Leaf size={22} strokeWidth={1.3} />
              <p className="font-['EB_Garamond'] text-2xl leading-tight md:text-4xl">
                Plants are architecture.
              </p>
              <p className="font-['Outfit'] text-[9px] uppercase tracking-[0.18em] text-white/55">
                Greenhouse logic
              </p>
            </div>
            <div className="col-span-1 flex flex-col justify-between bg-accent p-5 text-accent-foreground md:col-span-3 md:row-span-1 md:p-7">
              <Music2 size={18} strokeWidth={1.4} />
              <p className="font-['Lora'] text-sm italic">Play the whole record.</p>
            </div>
            <figure className="col-span-1 row-span-2 overflow-hidden bg-white/10 md:col-span-4 md:row-span-2">
              <ImageWithFallback
                src={photoExterior}
                alt="A compact Providence backyard with a shingled house and mature garden"
                className="h-full w-full object-cover"
              />
            </figure>
            <figure className="col-span-1 row-span-2 overflow-hidden bg-white/10 md:col-span-3 md:row-span-2">
              <ImageWithFallback
                src={photoHoliday}
                alt="A full Christmas tree glowing against dark craftsman woodwork"
                className="h-full w-full object-cover"
              />
            </figure>
            <div className="col-span-2 flex items-center justify-center border border-white/15 p-7 text-center md:col-span-5 md:row-span-2">
              <p className="max-w-sm font-['EB_Garamond'] text-3xl italic leading-tight text-white/75 md:text-5xl">
                “Useful things, beautiful things, and things we simply love.”
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 py-16 md:px-10 md:py-28">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-3">
            <p className="font-['Outfit'] text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              04 / Creative code
            </p>
            <h2 className="mt-6 font-['EB_Garamond'] text-5xl leading-[0.95]">The feeling to protect.</h2>
          </div>
          <div className="md:col-span-8 md:col-start-5">
            {principles.map((principle) => (
              <article
                key={principle.number}
                className="grid gap-3 border-t border-border py-7 sm:grid-cols-[48px_1fr_1.15fr] sm:gap-6 md:py-9"
              >
                <p className="font-['Outfit'] text-[10px] tracking-[0.2em] text-accent">
                  {principle.number}
                </p>
                <h3 className="font-['EB_Garamond'] text-2xl font-normal leading-tight md:text-3xl">
                  {principle.title}
                </h3>
                <p className="font-['Lora'] text-sm leading-relaxed text-foreground/65">
                  {principle.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-5 px-5 py-8 sm:flex-row sm:items-end sm:justify-between md:px-10">
          <div>
            <p className="font-['EB_Garamond'] text-3xl">Feedless Mind</p>
            <p className="mt-1 font-['Lora'] text-xs italic text-muted-foreground">
              A visual vocabulary for life off the feed.
            </p>
          </div>
          <p className="font-['Outfit'] text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
            Walnut · soil · linen · terracotta · leaf
          </p>
        </div>
      </footer>
    </main>
  );
}
