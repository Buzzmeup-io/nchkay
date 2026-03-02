import { Section } from "@/components/ui/Section";
import Link from "next/link";

export const metadata = {
  title: "International Plaza | Nch'ḵay̓",
  description: "International Plaza on Marine Drive, X̱wemelch'stn — 471 rental homes, Squamish Nation ownership.",
};

export default function InternationalPlazaPage() {
  return (
    <div>
      <div className="bg-slate-800 px-4 py-16 text-white sm:px-6">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold tracking-tight">International Plaza</h1>
          <p className="mt-4 text-xl opacity-90">
            Rooted in community, invested in the future
          </p>
          <p className="mt-6 text-lg">
            Marine Drive, X̱wemelch'stn (Capilano IR #5), North Vancouver. In
            September 2025, Nch'ḵay̓ acquired International Plaza, bringing
            this residential and commercial complex on Squamish Nation reserve
            land under the Nation's ownership.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <Section>
          <h2 className="text-2xl font-semibold text-gray-900">The property</h2>
          <p className="mt-2 text-gray-600">
            Built in 1975, International Plaza includes <strong>471 rental
            homes</strong> and more than <strong>65,000 square feet of
            commercial space</strong> in a two-tower complex. These buildings
            are now under Squamish Nation and Nch'ḵay̓ ownership for the first
            time since their development.
          </p>
        </Section>

        <Section>
          <h2 className="text-2xl font-semibold text-gray-900">Management & future</h2>
          <p className="mt-2 text-gray-600">
            Nch'ḵay̓ has hired Peterson—a highly regarded local full-service
            real estate firm—as property manager. We are investing in capital
            improvements to building infrastructure, common spaces, and
            individual units, while maintaining high standards for health,
            safety, and liveability.
          </p>
        </Section>

        <Section>
          <h2 className="text-2xl font-semibold text-gray-900">Rental opportunities</h2>
          <p className="mt-2 text-gray-600">
            To view current rental opportunities at International Plaza, visit{" "}
            <a
              href="https://www.internationalplaza.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[var(--nchkay-red)] hover:underline"
            >
              www.internationalplaza.ca
            </a>
            .
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
