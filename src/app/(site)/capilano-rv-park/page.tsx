import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import Link from "next/link";

export const metadata = {
  title: "Capilano RV Park | Nch'ḵay̓",
  description: "Capilano River RV Park — a park with a purpose. West Vancouver, BC.",
};

export default function CapilanoRvParkPage() {
  return (
    <div>
      <div className="bg-emerald-900 px-4 py-16 text-white sm:px-6">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold tracking-tight">Capilano RV Park</h1>
          <p className="mt-4 text-xl opacity-90">A park with a purpose</p>
          <p className="mt-6 text-lg">
            295 Tomahawk Avenue, West Vancouver, BC V7P 1C5. Next to the Lions
            Gate Bridge, minutes from downtown Vancouver.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <Section>
          <h2 className="text-2xl font-semibold text-gray-900">Site options & rates</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <Card>
              <h3 className="font-semibold">Partial hookup</h3>
              <p className="mt-1 text-sm text-gray-600">15 amp, water</p>
              <p className="mt-2 font-medium text-[var(--nchkay-red)]">$65–$79/night</p>
            </Card>
            <Card>
              <h3 className="font-semibold">Full hookup (30 amp)</h3>
              <p className="mt-1 text-sm text-gray-600">Water, sewer</p>
              <p className="mt-2 font-medium text-[var(--nchkay-red)]">$70–$89/night</p>
            </Card>
            <Card>
              <h3 className="font-semibold">Full hookup (50 amp)</h3>
              <p className="mt-1 text-sm text-gray-600">Water, sewer</p>
              <p className="mt-2 font-medium text-[var(--nchkay-red)]">$75–$99/night</p>
            </Card>
          </div>
          <p className="mt-4 text-sm text-gray-600">
            Off-season (Oct–Apr) and summer (May–Sept). Kids 12 and under stay free.
          </p>
        </Section>

        <Section>
          <h2 className="text-2xl font-semibold text-gray-900">Amenities</h2>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {[
              "Heated outdoor pool",
              "Indoor whirlpool",
              "Laundry facilities",
              "Free WiFi",
              "Recreation room",
              "Propane station",
              "Sani-station",
              "Gated, 24-hour supervision",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[var(--nchkay-orange)]">•</span> {item}
              </li>
            ))}
          </ul>
        </Section>

        <Section>
          <h2 className="text-2xl font-semibold text-gray-900">Nearby</h2>
          <p className="mt-2 text-gray-600">
            Grouse Mountain, Cypress Mountain, Stanley Park, Capilano Suspension
            Bridge, Whistler Blackcomb (90 min), Horseshoe Bay ferry (10 min).
          </p>
        </Section>

        <p className="pt-8">
          <Link href="/" className="font-medium text-[var(--nchkay-red)] hover:underline">
            ← Back to portfolio
          </Link>
        </p>
      </div>
    </div>
  );
}
