import { AnimateIn } from "@/components/ui/AnimateIn";
import { ParkPageHeader } from "../ParkPageHeader";

export const metadata = {
  title: "Location & Directions | Capilano River RV Park",
  description:
    "Find Capilano River RV Park at 295 Tomahawk Ave, West Vancouver. Driving directions, entrance info, and nearby transit.",
};

const DIRECTIONS_STEPS = [
  "Travel westbound on Trans-Canada Highway 1",
  "Take Exit 14 — Capilano Road (13.2 km from eastern city limits)",
  "Stay left and turn left at traffic lights onto Capilano Road",
  "Continue ~1 km, keeping left at lights to stay on Lower Capilano Road",
  "After 0.6 km, turn right onto Welch Street",
  "Follow for 0.8 km, then turn right onto Bridge Road",
  "Park entrance is 30 metres ahead on the right",
];

const NEARBY_ACCESS = [
  { label: "Horseshoe Bay Ferry Terminal", time: "10 min", desc: "BC Ferries to Vancouver Island & Sunshine Coast" },
  { label: "Downtown Vancouver", time: "10 min", desc: "Via Lions Gate Bridge" },
  { label: "Vancouver International Airport", time: "30 min", desc: "Via Highway 99 / Oak Street Bridge" },
  { label: "Whistler", time: "90 min", desc: "Via Sea-to-Sky Highway (Hwy 99)" },
  { label: "Park Royal Mall", time: "5 min", desc: "Shopping, dining & services" },
  { label: "Trans-Canada Highway", time: "2 min", desc: "Exit 14 — Capilano Road" },
];

export default function LocationPage() {
  return (
    <div>
      <ParkPageHeader
        label="Capilano River RV Park"
        title="Location & Getting Here"
        description="Adjacent to the Lions Gate Bridge, minutes from downtown Vancouver. The best way to reach us is via Exit 14 — Capilano Road."
      />

      {/* Address & map placeholder */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <AnimateIn variant="left">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--park-sage)]">
                Address
              </p>
              <h2
                className="mt-3 text-3xl text-[var(--park-forest)]"
                style={{ fontFamily: "var(--font-display), serif" }}
              >
                295 Tomahawk Avenue
              </h2>
              <p className="mt-2 text-lg text-gray-500">
                West Vancouver, BC V7P 1C5, Canada
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3 text-gray-600">
                  <svg className="h-5 w-5 shrink-0 text-[var(--park-pine)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  <span>(604) 987-4722</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <svg className="h-5 w-5 shrink-0 text-[var(--park-pine)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  <span>Toll-free: 1-866-477-4722</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <svg className="h-5 w-5 shrink-0 text-[var(--park-pine)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  <a href="mailto:info@capilanoriverrvpark.com" className="text-[var(--nchkay-orange)] hover:underline">
                    info@capilanoriverrvpark.com
                  </a>
                </div>
              </div>

              <div className="mt-8 rounded-xl border border-amber-200 bg-amber-50 px-5 py-4">
                <p className="text-sm font-semibold text-amber-800">Entrance clearance: 13&apos;6&quot;</p>
                <p className="mt-1 text-sm text-amber-700">
                  Please ensure your vehicle height is within this limit before
                  arrival.
                </p>
              </div>
            </AnimateIn>

            <AnimateIn variant="right" delay={200}>
              <div className="overflow-hidden rounded-2xl border border-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2601.548!2d-123.1089!3d49.3147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486718e8e2c1f51%3A0x3e7e1d3c7e2b2e8a!2sCapilano%20River%20RV%20Park!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Capilano River RV Park location"
                  className="h-[400px] w-full"
                />
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Driving directions */}
      <section className="border-t border-gray-100 bg-[var(--park-warm)] py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-6 sm:px-8">
          <AnimateIn>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--park-sage)]">
              From the east
            </p>
            <h2
              className="mt-3 text-3xl text-[var(--park-forest)]"
              style={{ fontFamily: "var(--font-display), serif" }}
            >
              Driving directions
            </h2>
            <p className="mt-3 text-gray-500">
              The best way to access us is via Exit 14 — Capilano Road on the
              Trans-Canada Highway.
            </p>
          </AnimateIn>

          <AnimateIn delay={200}>
            <ol className="mt-8 space-y-4">
              {DIRECTIONS_STEPS.map((step, i) => (
                <li key={i} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--park-forest)] text-sm font-semibold text-white">
                    {i + 1}
                  </span>
                  <p className="pt-1 text-gray-600">{step}</p>
                </li>
              ))}
            </ol>
          </AnimateIn>

          <AnimateIn delay={400}>
            <div className="mt-8 rounded-xl border border-blue-200 bg-blue-50 px-5 py-4">
              <p className="text-sm font-semibold text-blue-800">Took the wrong exit?</p>
              <p className="mt-1 text-sm text-blue-700">
                If you accidentally take Exit 13, call us at{" "}
                <a href="tel:+16049874722" className="font-medium underline">(604) 987-4722</a>{" "}
                and we&apos;ll guide you in.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Nearby access points */}
      <section className="border-t border-gray-100 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <AnimateIn>
            <h2
              className="text-3xl text-[var(--park-forest)]"
              style={{ fontFamily: "var(--font-display), serif" }}
            >
              Distances & access
            </h2>
          </AnimateIn>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {NEARBY_ACCESS.map((a, i) => (
              <AnimateIn key={a.label} delay={i * 80}>
                <div className="flex h-full items-start gap-4 rounded-xl border border-gray-200 bg-[var(--park-warm)] p-5 transition-all hover:shadow-md">
                  <div className="flex-1">
                    <h3 className="font-semibold text-[var(--park-forest)]">{a.label}</h3>
                    <p className="mt-1 text-sm text-gray-500">{a.desc}</p>
                  </div>
                  <span className="shrink-0 rounded-full bg-[var(--park-forest)] px-3 py-1 text-xs font-semibold text-white">
                    {a.time}
                  </span>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
