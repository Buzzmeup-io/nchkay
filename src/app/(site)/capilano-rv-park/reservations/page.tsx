import { AnimateIn } from "@/components/ui/AnimateIn";
import { ParkPageHeader } from "../ParkPageHeader";
import Link from "next/link";

export const metadata = {
  title: "Reservations | Capilano River RV Park",
  description:
    "Book your RV site at Capilano River RV Park. Rates, policies, cancellation info, and group booking details.",
};

const PARK_RULES = [
  "Units must be self-contained with propane, shower, hot water tank, and water closet",
  "No recreational vehicles older than 2014 permitted",
  "Maximum 2-week stay without management approval",
  "Children cannot stay longer than 14 days annually",
  "No commercial activities, Airbnb, or subletting",
  "No vehicle repairs on-site",
  "One vehicle per lot only",
  "10 km/h speed limit enforced",
  "No electric heaters or heavy appliances",
  "All rates include 5% GST",
];

export default function ReservationsPage() {
  return (
    <div>
      <ParkPageHeader
        label="Capilano River RV Park"
        title="Reservations"
        description="Book your North Shore adventure. Reserve your site online or call us directly."
      />

      {/* Book now CTA */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-6 text-center sm:px-8">
          <AnimateIn>
            <h2
              className="text-3xl text-[var(--park-forest)]"
              style={{ fontFamily: "var(--font-display), serif" }}
            >
              Ready to book?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-gray-500">
              Reservations are made through our online booking system. You can
              also call us to reserve by phone.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://www.capilanoriverrvpark.com/reserve-rv-campgrounds"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--nchkay-orange)] px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[var(--nchkay-orange-dark)] hover:shadow-lg"
              >
                Book online
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
              <a
                href="tel:+16049874722"
                className="inline-flex items-center gap-2 rounded-full border-2 border-[var(--park-forest)] px-8 py-3 text-sm font-semibold text-[var(--park-forest)] transition-all hover:bg-[var(--park-forest)] hover:text-white"
              >
                Call (604) 987-4722
              </a>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Rates summary */}
      <section className="border-t border-gray-100 bg-[var(--park-warm)] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <AnimateIn>
            <h2
              className="text-3xl text-[var(--park-forest)]"
              style={{ fontFamily: "var(--font-display), serif" }}
            >
              Rate overview
            </h2>
            <p className="mt-3 text-gray-500">
              For full rate tables, visit the{" "}
              <Link href="/capilano-rv-park/sites" className="text-[var(--nchkay-orange)] hover:underline">
                Sites & Rates
              </Link>{" "}
              page.
            </p>
          </AnimateIn>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <AnimateIn delay={100}>
              <div className="rounded-2xl border border-gray-200 bg-white p-8">
                <p className="text-sm font-medium uppercase tracking-wider text-[var(--park-sage)]">
                  Off-season (Oct–Apr)
                </p>
                <p
                  className="mt-3 text-4xl text-[var(--park-forest)]"
                  style={{ fontFamily: "var(--font-display), serif" }}
                >
                  $35–$80
                  <span className="text-base font-sans text-gray-400">/night</span>
                </p>
                <p className="mt-2 text-sm text-gray-500">Weekly rates available with manager approval</p>
              </div>
            </AnimateIn>
            <AnimateIn delay={200}>
              <div className="rounded-2xl border border-[var(--nchkay-orange)]/20 bg-white p-8">
                <p className="text-sm font-medium uppercase tracking-wider text-[var(--nchkay-orange)]">
                  Summer (May–Sep)
                </p>
                <p
                  className="mt-3 text-4xl text-[var(--park-forest)]"
                  style={{ fontFamily: "var(--font-display), serif" }}
                >
                  $68–$114
                  <span className="text-base font-sans text-gray-400">/night</span>
                </p>
                <p className="mt-2 text-sm text-gray-500">Weekday & weekend rates vary by site type</p>
              </div>
            </AnimateIn>
          </div>

          <AnimateIn delay={300}>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {[
                { label: "Extra person", value: "$4.50/night" },
                { label: "Children 12 & under", value: "Stay free" },
                { label: "Club discounts", value: "10% (Good Sam, auto clubs)" },
              ].map((d) => (
                <div key={d.label} className="rounded-xl border border-gray-200 bg-white px-5 py-4">
                  <p className="text-xs font-medium uppercase tracking-wider text-[var(--park-sage)]">{d.label}</p>
                  <p className="mt-1 font-semibold text-[var(--park-forest)]">{d.value}</p>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Cancellation policy */}
      <section className="border-t border-gray-100 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-6 sm:px-8">
          <AnimateIn>
            <h2
              className="text-3xl text-[var(--park-forest)]"
              style={{ fontFamily: "var(--font-display), serif" }}
            >
              Policies
            </h2>
          </AnimateIn>

          <div className="mt-8 space-y-6">
            <AnimateIn delay={100}>
              <div className="rounded-xl border border-gray-200 bg-[var(--park-warm)] p-6">
                <h3 className="font-semibold text-[var(--park-forest)]">Cancellation</h3>
                <p className="mt-2 text-gray-600">
                  Please allow 48 hours notice for all cancellations. Late
                  cancellations or no-shows will be billed one night&apos;s stay
                  plus tax to the credit card on file.
                </p>
              </div>
            </AnimateIn>

            <AnimateIn delay={200}>
              <div className="rounded-xl border border-gray-200 bg-[var(--park-warm)] p-6">
                <h3 className="font-semibold text-[var(--park-forest)]">Group bookings</h3>
                <p className="mt-2 text-gray-600">
                  For groups of 6 or more RVs, contact Wayland directly at{" "}
                  <a
                    href="mailto:wayland@capilanoriverrvpark.com"
                    className="text-[var(--nchkay-orange)] hover:underline"
                  >
                    wayland@capilanoriverrvpark.com
                  </a>{" "}
                  for special group rates and arrangements.
                </p>
              </div>
            </AnimateIn>

            <AnimateIn delay={300}>
              <div className="rounded-xl border border-amber-200 bg-amber-50 p-6">
                <h3 className="font-semibold text-amber-800">
                  Summer 2026 — FIFA World Cup
                </h3>
                <p className="mt-2 text-amber-700">
                  Vancouver is a host city for the 2026 FIFA World Cup. Summer
                  reservations require full pre-payment with limited
                  cancellation options. Minimum stay requirements may apply
                  during tournament dates. Book early to secure your site.
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Park rules */}
      <section className="border-t border-gray-100 bg-[var(--park-warm)] py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-6 sm:px-8">
          <AnimateIn>
            <h2
              className="text-3xl text-[var(--park-forest)]"
              style={{ fontFamily: "var(--font-display), serif" }}
            >
              Park rules & requirements
            </h2>
            <p className="mt-3 text-gray-500">
              The park operates as a nightly tourist facility. Management
              reserves the right to supplement these guidelines as necessary.
            </p>
          </AnimateIn>

          <AnimateIn delay={150}>
            <ul className="mt-8 space-y-3">
              {PARK_RULES.map((rule) => (
                <li key={rule} className="flex items-start gap-3 text-gray-600">
                  <svg className="mt-0.5 h-5 w-5 shrink-0 text-[var(--park-sage)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                  {rule}
                </li>
              ))}
            </ul>
          </AnimateIn>
        </div>
      </section>
    </div>
  );
}
