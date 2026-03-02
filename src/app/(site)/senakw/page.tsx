import { Section } from "@/components/ui/Section";
import Link from "next/link";

export const metadata = {
  title: "Sen̓áḵw | Nch'ḵay̓",
  description: "Sen̓áḵw — a landmark Indigenous-led rental community rooted in place. Kitsilano, Vancouver.",
};

export default function SenakwPage() {
  return (
    <div>
      <div className="bg-indigo-900 px-4 py-16 text-white sm:px-6">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold tracking-tight">Sen̓áḵw</h1>
          <p className="mt-4 text-xl opacity-90">
            A landmark Indigenous-led rental community rooted in place
          </p>
          <p className="mt-6 text-lg">
            Sen̓áḵw means "the place inside the head of False Creek." The site
            has been a Sḵwx̱wú7mesh village for thousands of years. This project
            represents a return to ancestral lands and the largest First
            Nations economic development partnership in Canadian history.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <Section>
          <h2 className="text-2xl font-semibold text-gray-900">Scale & vision</h2>
          <p className="mt-2 text-gray-600">
            The development encompasses <strong>10.5 acres</strong> with{" "}
            <strong>4 million square feet</strong> across four phases, expected
            to be completed by 2033. It will create <strong>over 6,000 rental
            homes</strong>, including <strong>1,200+ affordable units</strong>{" "}
            priced 30–40% below market rates.
          </p>
        </Section>

        <Section>
          <h2 className="text-2xl font-semibold text-gray-900">Key features</h2>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li>• Largest net-zero carbon residential project in Canada (target)</li>
            <li>• 7.5+ acres of public space with Coast Salish architecture</li>
            <li>• Developed by Nch'ḵay̓ West (Squamish Nation + OPTrust)</li>
            <li>• $1.4 billion CMHC funding (Sept 2022); 150-year services agreement with the City of Vancouver</li>
          </ul>
        </Section>

        <Section>
          <h2 className="text-2xl font-semibold text-gray-900">Reconciliation & impact</h2>
          <p className="mt-2 text-gray-600">
            The project addresses Vancouver's housing crisis while advancing
            climate leadership and reconciliation, generating economic wealth
            for the Squamish Nation's long-term independence.
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
