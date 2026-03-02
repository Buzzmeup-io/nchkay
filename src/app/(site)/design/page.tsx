import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

export const metadata = {
  title: "Design system | Nch'ḵay̓",
  description: "Design system: colours, spacing, components, and typography.",
};

export default function DesignPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-bold text-gray-900">Design system</h1>
      <p className="mt-2 text-gray-600">
        Shared design tokens and components used across the Nch'ḵay̓ portfolio.
      </p>

      <Section>
        <h2 className="text-xl font-semibold text-gray-900">Colours</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <Card>
            <div
              className="h-20 rounded-lg"
              style={{ backgroundColor: "var(--nchkay-red)" }}
            />
            <p className="mt-2 font-medium">Nchkay deep red</p>
            <p className="text-sm text-gray-500">--nchkay-red: #8B1538</p>
          </Card>
          <Card>
            <div
              className="h-20 rounded-lg"
              style={{ backgroundColor: "var(--nchkay-orange)" }}
            />
            <p className="mt-2 font-medium">First Nations orange</p>
            <p className="text-sm text-gray-500">--nchkay-orange: #E85D04</p>
          </Card>
        </div>
      </Section>

      <Section>
        <h2 className="text-xl font-semibold text-gray-900">Spacing</h2>
        <p className="mt-2 text-gray-600">
          Section padding: var(--spacing-section) (4rem). Block spacing:
          var(--spacing-block) (1.5rem). Border radius: var(--radius) (0.5rem),
          var(--radius-lg) (0.75rem).
        </p>
      </Section>

      <Section>
        <h2 className="text-xl font-semibold text-gray-900">Typography</h2>
        <p className="mt-2 text-gray-600">
          <strong>Fonts:</strong> To be provided. Placeholder uses system UI and
          Geist for now.
        </p>
      </Section>

      <Section>
        <h2 className="text-xl font-semibold text-gray-900">Components</h2>
        <div className="mt-4 flex flex-wrap gap-4">
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-lg bg-[var(--nchkay-red)] px-6 py-3 font-medium text-white hover:opacity-90"
          >
            Primary button
          </a>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-lg bg-[var(--nchkay-orange)] px-6 py-3 font-medium text-white hover:opacity-90"
          >
            Secondary button
          </a>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-lg border-2 border-[var(--nchkay-red)] px-6 py-3 font-medium text-[var(--nchkay-red)] hover:bg-[var(--nchkay-red)] hover:text-white"
          >
            Outline button
          </a>
        </div>
        <div className="mt-6">
          <Card className="max-w-md">
            <h3 className="font-semibold">Card example</h3>
            <p className="mt-2 text-sm text-gray-600">
              Cards use rounded corners, border, and shadow. Use for business
              listings, property highlights, and content blocks.
            </p>
          </Card>
        </div>
      </Section>
    </div>
  );
}
