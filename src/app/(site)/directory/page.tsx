import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import Link from "next/link";

export const metadata = {
  title: "Squamish Nation Business Directory | Nch'ḵay̓",
  description: "Find and support Sḵwx̱wú7mesh businesses. Nation member? Get your website — $1,000 special.",
};

const PLACEHOLDER_BUSINESSES = [
  { name: "Example Coast Salish Arts", category: "Arts & crafts", description: "Traditional and contemporary Indigenous art." },
  { name: "Sample Construction Co.", category: "Construction", description: "Building and contracting services." },
  { name: "Placeholder Catering", category: "Food & beverage", description: "Event catering and food services." },
  { name: "Demo Consulting", category: "Professional services", description: "Business and community consulting." },
  { name: "Sample Retail Shop", category: "Retail", description: "Local retail and merchandise." },
];

export default function DirectoryPage() {
  return (
    <div>
      <div className="bg-[var(--nchkay-red)] px-4 py-16 text-white sm:px-6">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold tracking-tight">
            Squamish Nation Business Directory
          </h1>
          <p className="mt-4 text-xl opacity-90">
            Find and support Sḵwx̱wú7mesh businesses
          </p>
          <p className="mt-6 text-lg">
            Discover member-owned businesses of the Squamish Nation. Support
            local entrepreneurs and the community.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-center text-gray-500">
          Search and filter (placeholder) — real listings coming soon.
        </div>

        <Section>
          <h2 className="text-2xl font-semibold text-gray-900">Member businesses</h2>
          <p className="mt-2 text-gray-600">
            Placeholder listings below. Real data can be connected later.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {PLACEHOLDER_BUSINESSES.map((b) => (
              <Card key={b.name}>
                <h3 className="font-semibold text-gray-900">{b.name}</h3>
                <p className="mt-1 text-sm text-[var(--nchkay-orange)]">{b.category}</p>
                <p className="mt-2 text-sm text-gray-600">{b.description}</p>
                <p className="mt-3 text-sm text-gray-500">Contact / Website — placeholder</p>
              </Card>
            ))}
          </div>
        </Section>

        <Section>
          <div className="rounded-xl bg-[var(--nchkay-orange)] p-8 text-center text-white">
            <h2 className="text-2xl font-bold">Nation member? Get your business online</h2>
            <p className="mt-4 text-lg opacity-90">
              $1,000 website special for Squamish Nation members. Scope and
              details available on request.
            </p>
            <a
              href="mailto:hello@example.com?subject=Nation%20member%20website%20interest"
              className="mt-6 inline-block rounded-lg bg-white px-8 py-3 font-semibold text-gray-900 hover:bg-gray-100"
            >
              Express interest
            </a>
          </div>
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
