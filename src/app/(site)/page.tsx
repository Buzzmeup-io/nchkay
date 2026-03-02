import Link from "next/link";

const LIVE_SLIDES = [
  {
    id: "capilano",
    title: "Capilano RV Park",
    tagline: "A park with a purpose",
    href: "/capilano-rv-park",
    bg: "bg-emerald-900/90",
  },
  {
    id: "international-plaza",
    title: "International Plaza",
    tagline: "Rooted in community, invested in the future",
    href: "/international-plaza",
    bg: "bg-slate-800/90",
  },
  {
    id: "marine-drive",
    title: "Marine Drive — X̱wemelch'sten",
    tagline: "Squamish Nation reserve on the North Shore",
    href: "/marine-drive",
    bg: "bg-teal-900/90",
  },
  {
    id: "senakw",
    title: "Sen̓áḵw",
    tagline: "A landmark Indigenous-led rental community",
    href: "/senakw",
    bg: "bg-indigo-900/90",
  },
  {
    id: "directory",
    title: "Squamish Nation Business Directory",
    tagline: "Find and support Sḵwx̱wú7mesh businesses",
    href: "/directory",
    bg: "bg-[var(--nchkay-red)]",
  },
];

const COMING_SOON = [
  { title: "Mosquito Creek Marina", tagline: "Coming soon" },
  { title: "Lynnwood Marina", tagline: "Coming soon" },
  { title: "Matthews West", tagline: "Coming soon" },
  { title: "Squamish Valley Gas Bar", tagline: "Coming soon" },
];

export default function Home() {
  return (
    <div className="relative">
      <div className="snap-y snap-mandatory overflow-y-scroll h-screen">
        {LIVE_SLIDES.map((slide) => (
          <section
            key={slide.id}
            className={`snap-start snap-always flex min-h-screen w-full flex-col items-center justify-center px-6 ${slide.bg} text-white`}
          >
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                {slide.title}
              </h1>
              <p className="mt-4 text-lg opacity-90 sm:text-xl">{slide.tagline}</p>
              <Link
                href={slide.href}
                className="mt-8 inline-flex items-center justify-center rounded-lg bg-white px-8 py-3 font-semibold text-gray-900 transition hover:bg-gray-100"
              >
                Explore
              </Link>
            </div>
          </section>
        ))}
        {COMING_SOON.map((slide) => (
          <section
            key={slide.title}
            className="snap-start snap-always flex min-h-screen w-full flex-col items-center justify-center bg-gray-700/90 px-6 text-white"
          >
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                {slide.title}
              </h2>
              <p className="mt-4 text-lg opacity-80">{slide.tagline}</p>
              <span className="mt-8 inline-block rounded-lg border border-white/50 px-8 py-3 font-medium opacity-75">
                Coming soon
              </span>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
