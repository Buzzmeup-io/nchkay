import { Section } from "@/components/ui/Section";
import Link from "next/link";

export const metadata = {
  title: "Working with us | Nch'ḵay̓",
  description: "How we work with Nch'ḵay̓ and the Squamish Nation.",
};

const FAQ = [
  {
    q: "What is this?",
    a: "This is an intro package and connected portfolio demo. These sample sites show what we can build for Nch'ḵay̓ and the Squamish Nation—one cohesive digital presence.",
  },
  {
    q: "What's included in the intro package?",
    a: "The hub, these property sites, the business directory, and the shared design system. We can extend to more properties and member websites when you're ready.",
  },
  {
    q: "How do we get the rest of our properties online?",
    a: "We build them in the same system. Each \"coming soon\" property can become a live site with the same look, feel, and connection back to this portfolio.",
  },
  {
    q: "What about the $1,000 website special for Nation members?",
    a: "Squamish Nation members can get a new website at a special rate. Scope and details are available on request. Visit the Directory and use the contact option to express interest.",
  },
  {
    q: "Do you do ongoing support and updates?",
    a: "Yes. We position this as an ongoing partnership—updates, new content, and new sites as your portfolio grows.",
  },
  {
    q: "Accessibility and mobile?",
    a: "We design for accessibility and mobile. We can match or exceed the standards you have elsewhere (e.g. Mosquito Creek Marina).",
  },
  {
    q: "How do we get started?",
    a: "Get in touch using the link in the footer. We'll set up a conversation to discuss your portfolio and next steps.",
  },
];

export default function WorkingWithUsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-bold text-gray-900">Working with us</h1>
      <p className="mt-2 text-gray-600">
        Partnership, next steps, and answers to common questions.
      </p>

      <Section>
        <h2 className="text-xl font-semibold text-gray-900">
          Frequently asked questions
        </h2>
        <ul className="mt-6 space-y-8">
          {FAQ.map((item) => (
            <li key={item.q}>
              <h3 className="font-medium text-gray-900">{item.q}</h3>
              <p className="mt-2 text-gray-600">{item.a}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <p className="text-gray-600">
          <strong>Get in touch:</strong> Use the{" "}
          <a
            href="mailto:hello@example.com"
            className="font-medium text-[var(--nchkay-red)] hover:underline"
          >
            Get in touch
          </a>{" "}
          link in the footer to start a conversation.
        </p>
        <Link
          href="/"
          className="mt-6 inline-block font-medium text-[var(--nchkay-red)] hover:underline"
        >
          ← Back to portfolio
        </Link>
      </Section>
    </div>
  );
}
