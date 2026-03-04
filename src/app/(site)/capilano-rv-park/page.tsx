import { AnimateIn } from "@/components/ui/AnimateIn";
import Link from "next/link";

export const metadata = {
  title: "Capilano River RV Park | Nch'ḵay̓",
  description:
    "Capilano River RV Park — the best and only RV park in Vancouver, West Vancouver, or North Vancouver. A park with a purpose.",
};

/* ─── Data ──────────────────────────────────────────────── */

const HIGHLIGHTS = [
  { value: "60+", label: "Full-service sites", icon: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" },
  { value: "24/7", label: "Gated supervision", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
  { value: "5 min", label: "To downtown Vancouver", icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" },
  { value: "#1", label: "RV park in Metro Vancouver", icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" },
];

const RATES = [
  {
    tier: "Partial Hookup",
    desc: "15-amp electrical, water",
    price: "$65–$79",
    features: ["Water hookup", "15-amp power", "Picnic table"],
  },
  {
    tier: "Full Hookup · 30A",
    desc: "Water, sewer & 30-amp",
    price: "$70–$89",
    features: ["Water & sewer", "30-amp power", "Picnic table", "Fire ring"],
    featured: true,
  },
  {
    tier: "Full Hookup · 50A",
    desc: "Water, sewer & 50-amp",
    price: "$75–$99",
    features: ["Water & sewer", "50-amp power", "Picnic table", "Fire ring"],
  },
];

const AMENITIES = [
  { name: "Heated Pool", desc: "Outdoor seasonal pool", icon: "M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" },
  { name: "Indoor Whirlpool", desc: "Year-round hot tub", icon: "M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0 .828.448 1.285 1 2s1 2.172 1 3a4 4 0 01-8 0c0-1.293.882-2.408 1.659-3.276" },
  { name: "Laundry", desc: "On-site coin-op", icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" },
  { name: "Free Wi-Fi", desc: "Park-wide high-speed", icon: "M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.858 15.355-5.858 21.213 0" },
  { name: "Rec Room", desc: "Games & lounge area", icon: "M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
  { name: "Propane", desc: "Fill station on site", icon: "M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0 .828.448 1.285 1 2s1 2.172 1 3a4 4 0 01-8 0c0-1.293.882-2.408 1.659-3.276" },
  { name: "Sani-Station", desc: "Full dump station", icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" },
  { name: "24/7 Security", desc: "Gated entry, staffed", icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" },
];

const ADVENTURES = [
  { name: "Grouse Mountain", distance: "15 min", desc: "Skiing, hiking & wildlife refuge" },
  { name: "Stanley Park", distance: "10 min", desc: "Seawall, aquarium & old-growth forest" },
  { name: "Capilano Suspension Bridge", distance: "8 min", desc: "Treetop walks & cliff edges" },
  { name: "Cypress Mountain", distance: "20 min", desc: "Alpine skiing & snowshoeing" },
  { name: "Whistler Blackcomb", distance: "90 min", desc: "World-class resort village" },
  { name: "Horseshoe Bay", distance: "10 min", desc: "BC Ferries to the islands" },
];

/* ─── Page ──────────────────────────────────────────────── */

export default function CapilanoRvParkPage() {
  return (
    <div className="overflow-hidden">
      {/* ── Hero ──────────────────────────────────────── */}
      <section className="noise-overlay diagonal-pattern relative flex min-h-[85vh] flex-col justify-end overflow-hidden bg-[var(--park-forest)]">
        {/* Gradient layers */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 120% 80% at 30% 80%, rgba(45,90,63,0.7) 0%, transparent 60%), radial-gradient(ellipse 100% 60% at 80% 20%, rgba(26,58,42,0.9) 0%, transparent 50%)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--park-forest)] via-transparent to-[var(--park-forest)]/30" />

        {/* Topographic decorative lines */}
        <div className="absolute inset-0 overflow-hidden opacity-[0.04]">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full border border-white"
              style={{
                width: `${300 + i * 160}px`,
                height: `${200 + i * 100}px`,
                top: `${20 + i * 5}%`,
                left: `${10 + i * 3}%`,
                transform: `rotate(${-15 + i * 4}deg)`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-20 pt-40 sm:px-8 lg:pb-28">
          <AnimateIn variant="fade" delay={100}>
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-[var(--park-cedar-light)]">
              Nch&apos;ḵay̓ Development Corporation
            </p>
          </AnimateIn>

          <AnimateIn delay={250}>
            <h1
              className="mt-6 text-5xl leading-[1.05] font-normal tracking-tight text-white sm:text-6xl lg:text-7xl"
              style={{ fontFamily: "var(--font-display), serif" }}
            >
              Capilano River
              <br />
              <span className="text-[var(--park-cedar-light)]">RV Park</span>
            </h1>
          </AnimateIn>

          <AnimateIn delay={450}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70 sm:text-xl">
              The best and only RV park in Vancouver, West Vancouver, or North
              Vancouver. Nestled beside the Lions Gate Bridge, minutes from
              downtown.
            </p>
          </AnimateIn>

          <AnimateIn delay={600}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="https://www.capilanoriverrvpark.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--nchkay-orange)] px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[var(--nchkay-orange-dark)] hover:shadow-lg hover:shadow-orange-900/20"
                style={{ animation: "pulse-glow 3s ease-in-out infinite" }}
              >
                Reserve your site
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <span className="text-sm text-white/40">
                295 Tomahawk Ave, West Vancouver, BC
              </span>
            </div>
          </AnimateIn>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--park-sage)]/30 to-transparent" />
      </section>

      {/* ── Highlights Strip ─────────────────────────── */}
      <section className="border-b border-[var(--park-mist)] bg-[var(--park-warm)]">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px sm:grid-cols-4">
          {HIGHLIGHTS.map((h, i) => (
            <AnimateIn key={h.label} delay={i * 100 + 100} variant="fade">
              <div className="flex flex-col items-center gap-3 px-6 py-10 text-center transition-colors hover:bg-[var(--park-mist)]/50 sm:py-12">
                <svg className="h-6 w-6 text-[var(--park-pine)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={h.icon} />
                </svg>
                <p
                  className="text-3xl font-normal text-[var(--park-forest)] sm:text-4xl"
                  style={{ fontFamily: "var(--font-display), serif" }}
                >
                  {h.value}
                </p>
                <p className="text-xs font-medium uppercase tracking-[0.15em] text-[var(--park-sage)]">
                  {h.label}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* ── Introduction ─────────────────────────────── */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center sm:px-8">
          <AnimateIn>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--park-sage)]">
              A park with a purpose
            </p>
          </AnimateIn>
          <AnimateIn delay={150}>
            <h2
              className="mt-5 text-3xl leading-snug text-[var(--park-forest)] sm:text-4xl"
              style={{ fontFamily: "var(--font-display), serif" }}
            >
              Where the river meets
              <br className="hidden sm:block" /> the mountains and the sea
            </h2>
          </AnimateIn>
          <AnimateIn delay={300}>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-500 sm:text-lg">
              Located on the shores of Burrard Inlet, Capilano River RV Park
              offers unmatched access to Vancouver&apos;s North Shore mountains,
              Stanley Park, and downtown — all from the comfort of your own
              site. Owned and operated by Nch&apos;ḵay̓ Development Corporation on
              behalf of the Squamish Nation.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ── Site Options & Rates ─────────────────────── */}
      <section className="bg-[var(--park-warm)] py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <AnimateIn>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--park-sage)]">
              Site options
            </p>
            <h2
              className="mt-3 text-3xl text-[var(--park-forest)] sm:text-4xl"
              style={{ fontFamily: "var(--font-display), serif" }}
            >
              Choose your stay
            </h2>
          </AnimateIn>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {RATES.map((rate, i) => (
              <AnimateIn key={rate.tier} delay={i * 120}>
                <div
                  className={`group relative rounded-2xl border bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                    rate.featured
                      ? "border-[var(--nchkay-orange)]/30 shadow-lg ring-1 ring-[var(--nchkay-orange)]/10"
                      : "border-gray-200 shadow-sm hover:border-[var(--park-sage)]/40"
                  }`}
                >
                  {rate.featured && (
                    <span className="absolute -top-3 right-6 rounded-full bg-[var(--nchkay-orange)] px-4 py-1 text-xs font-semibold text-white">
                      Most popular
                    </span>
                  )}
                  <h3 className="text-lg font-semibold text-[var(--park-forest)]">
                    {rate.tier}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{rate.desc}</p>
                  <p
                    className="mt-6 text-4xl text-[var(--park-forest)]"
                    style={{ fontFamily: "var(--font-display), serif" }}
                  >
                    {rate.price}
                    <span className="text-base font-sans text-gray-400">/night</span>
                  </p>
                  <ul className="mt-6 space-y-2.5">
                    {rate.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-sm text-gray-600">
                        <svg className="h-4 w-4 shrink-0 text-[var(--park-pine)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn delay={400}>
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-500">
                Off-season (Oct–Apr) &amp; summer (May–Sept) pricing shown.
                Children 12 and under stay free.
              </p>
              <Link
                href="/capilano-rv-park/sites"
                className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--nchkay-orange)] hover:underline"
              >
                View full rate tables
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── Amenities ────────────────────────────────── */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <div className="text-center">
            <AnimateIn>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--park-sage)]">
                Everything you need
              </p>
              <h2
                className="mt-3 text-3xl text-[var(--park-forest)] sm:text-4xl"
                style={{ fontFamily: "var(--font-display), serif" }}
              >
                Park amenities
              </h2>
            </AnimateIn>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {AMENITIES.map((a, i) => (
              <AnimateIn key={a.name} delay={i * 80} variant="scale">
                <div className="group rounded-xl border border-gray-100 bg-[var(--park-warm)] p-6 transition-all duration-300 hover:border-[var(--park-sage)]/30 hover:bg-white hover:shadow-md">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--park-forest)] text-white transition-colors group-hover:bg-[var(--park-pine)]">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={a.icon} />
                    </svg>
                  </div>
                  <h3 className="mt-4 font-semibold text-[var(--park-forest)]">{a.name}</h3>
                  <p className="mt-1 text-sm text-gray-500">{a.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn delay={700}>
            <div className="mt-10 text-center">
              <Link
                href="/capilano-rv-park/amenities"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--nchkay-orange)] hover:underline"
              >
                View all amenities
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── Pet Friendly ─────────────────────────────── */}
      <section className="relative overflow-hidden bg-[var(--park-forest)]">
        <div className="absolute inset-0 opacity-[0.03]">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full border border-white"
              style={{
                width: `${200 + i * 120}px`,
                height: `${150 + i * 80}px`,
                top: `${30 + i * 8}%`,
                right: `${-5 + i * 5}%`,
                transform: `rotate(${10 + i * 6}deg)`,
              }}
            />
          ))}
        </div>

        <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-10 px-6 py-20 sm:flex-row sm:px-8 sm:py-28">
          <AnimateIn variant="left" className="flex-1">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--park-cedar-light)]">
              Furry friends welcome
            </p>
            <h2
              className="mt-4 text-3xl text-white sm:text-4xl"
              style={{ fontFamily: "var(--font-display), serif" }}
            >
              Pet-friendly
              <br />
              <span className="text-[var(--park-cedar-light)]">through & through</span>
            </h2>
            <p className="mt-4 max-w-md leading-relaxed text-white/60">
              We love your four-legged family members. Enjoy our dedicated
              doggie walk area, nearby off-leash parks along the Capilano River,
              and pet-friendly sites throughout the park.
            </p>
          </AnimateIn>

          <AnimateIn variant="right" delay={200} className="flex-1">
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Dog walk area", detail: "On-site" },
                { label: "Off-leash parks", detail: "Nearby" },
                { label: "Pet-friendly sites", detail: "All sections" },
                { label: "River trails", detail: "Steps away" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-sm"
                >
                  <p className="text-sm font-semibold text-white">{item.label}</p>
                  <p className="mt-0.5 text-xs text-white/50">{item.detail}</p>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── Nature & Adventure ───────────────────────── */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <AnimateIn>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--park-sage)]">
              Nature &amp; adventure
            </p>
            <h2
              className="mt-3 text-3xl text-[var(--park-forest)] sm:text-4xl"
              style={{ fontFamily: "var(--font-display), serif" }}
            >
              Your basecamp for the North Shore
            </h2>
            <p className="mt-4 max-w-xl text-gray-500">
              From world-class skiing to coastal rainforest hikes, everything
              the Pacific Northwest has to offer is at your doorstep.
            </p>
          </AnimateIn>

          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-gray-200 bg-gray-200 sm:grid-cols-2 lg:grid-cols-3">
            {ADVENTURES.map((a, i) => (
              <AnimateIn key={a.name} delay={i * 80} variant="fade">
                <div className="flex h-full flex-col justify-between bg-white p-7 transition-colors hover:bg-[var(--park-warm)]">
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--park-forest)]">
                      {a.name}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-gray-500">
                      {a.desc}
                    </p>
                  </div>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-[var(--nchkay-orange)]">
                    {a.distance} drive
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn delay={500}>
            <div className="mt-10 text-center">
              <Link
                href="/capilano-rv-park/activities"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--nchkay-orange)] hover:underline"
              >
                Explore all activities
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── Summer 2026 Banner ───────────────────────── */}
      <section className="border-y border-[var(--nchkay-orange)]/15 bg-gradient-to-r from-[var(--nchkay-orange)]/5 via-white to-[var(--nchkay-orange)]/5">
        <div className="mx-auto max-w-4xl px-6 py-14 sm:px-8 sm:py-16">
          <AnimateIn>
            <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-8">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[var(--nchkay-orange)]/10">
                <svg className="h-7 w-7 text-[var(--nchkay-orange)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4.5c-.77-.833-2.694-.833-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[var(--park-forest)]">
                  Summer 2026 — FIFA World Cup
                </h3>
                <p className="mt-2 leading-relaxed text-gray-500">
                  Vancouver is a host city for the 2026 World Cup. Summer
                  reservations require full pre-payment with limited
                  cancellation options. Minimum stay requirements may apply
                  during tournament dates. Book early to secure your site.
                </p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── CTA / Contact ────────────────────────────── */}
      <section className="noise-overlay relative overflow-hidden bg-[var(--park-forest)] py-24 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--park-pine)]/40 via-transparent to-[var(--park-forest)]" />

        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center sm:px-8">
          <AnimateIn variant="scale">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-[var(--park-cedar-light)]">
              Ready to visit?
            </p>
            <h2
              className="mt-5 text-3xl text-white sm:text-5xl"
              style={{ fontFamily: "var(--font-display), serif" }}
            >
              Your North Shore
              <br />
              adventure starts here
            </h2>
            <p className="mx-auto mt-5 max-w-md text-white/50">
              295 Tomahawk Avenue, West Vancouver, BC V7P 1C5
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://www.capilanoriverrvpark.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--nchkay-orange)] px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[var(--nchkay-orange-dark)] hover:shadow-lg"
              >
                Make a reservation
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="tel:+16049877529"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-sm font-medium text-white/80 transition-all hover:border-white/40 hover:text-white"
              >
                Call (604) 987-4722
              </a>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── Back link ────────────────────────────────── */}
      <div className="bg-white py-8">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--park-sage)] transition-colors hover:text-[var(--park-forest)]"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Back to portfolio
          </Link>
        </div>
      </div>
    </div>
  );
}
