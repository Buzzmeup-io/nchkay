import { Section } from "@/components/ui/Section";
import Link from "next/link";

export const metadata = {
  title: "Marine Drive — X̱wemelch'sten | Nch'ḵay̓",
  description: "X̱wemelch'sten (Capilano IR 5) — Squamish Nation reserve on the North Shore.",
};

export default function MarineDrivePage() {
  return (
    <div>
      <div className="bg-teal-900 px-4 py-16 text-white sm:px-6">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold tracking-tight">
            Marine Drive — X̱wemelch'sten
          </h1>
          <p className="mt-4 text-xl opacity-90">
            Squamish Nation reserve on the North Shore
          </p>
          <p className="mt-6 text-lg">
            X̱wemelch'sten (Capilano IR 5) is a Squamish Nation reserve in North
            Vancouver with significant development activity on Marine Drive,
            aligned with the Nation's Úxwumixw 2050 generational plan.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <Section>
          <h2 className="text-2xl font-semibold text-gray-900">International Plaza</h2>
          <p className="mt-2 text-gray-600">
            In September 2025, Nch'ḵay̓ acquired International Plaza on Marine
            Drive, returning the property to Sḵwx̱wú7mesh ownership. The
            building contains 471 rental homes and over 65,000 square feet of
            commercial space.
          </p>
        </Section>

        <Section>
          <h2 className="text-2xl font-semibold text-gray-900">Land development strategy</h2>
          <p className="mt-2 text-gray-600">
            The Squamish Nation Council has approved a comprehensive Land
            Development Strategy for the Marine Drive portion of X̱wemelch'sten
            IR 5. The strategy designates the area for mixed-use market
            residential developments, Nation housing, and a new Administrative
            and Community Service Centre.
          </p>
        </Section>

        <Section>
          <h2 className="text-2xl font-semibold text-gray-900">Úxwumixw 2050</h2>
          <p className="mt-2 text-gray-600">
            These developments align with the Squamish Nation's Úxwumixw 2050
            Generational Plan, focused on housing security and Nation-led
            self-determination in land use decisions.
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
