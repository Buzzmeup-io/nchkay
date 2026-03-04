import { AnimateIn } from "@/components/ui/AnimateIn";
import { ParkPageHeader } from "../ParkPageHeader";

export const metadata = {
  title: "Contact Us | Capilano River RV Park",
  description:
    "Contact Capilano River RV Park — phone, email, fax, and address. Group bookings and general inquiries.",
};

const CONTACT_METHODS = [
  {
    label: "Phone",
    value: "(604) 987-4722",
    href: "tel:+16049874722",
    icon: "M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z",
  },
  {
    label: "Toll-free",
    value: "1-866-477-4722",
    href: "tel:+18664774722",
    icon: "M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z",
  },
  {
    label: "Email",
    value: "info@capilanoriverrvpark.com",
    href: "mailto:info@capilanoriverrvpark.com",
    icon: "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75",
  },
  {
    label: "Fax",
    value: "(604) 987-2015",
    href: null,
    icon: "M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m0 0a48.159 48.159 0 018.5 0m-8.5 0V5.275a1.125 1.125 0 01.998-1.117 48.394 48.394 0 016.504 0 1.125 1.125 0 01.998 1.117V7.034",
  },
];

export default function ContactPage() {
  return (
    <div>
      <ParkPageHeader
        label="Capilano River RV Park"
        title="Contact Us"
        description="We'd love to hear from you. Reach us by phone, email, or visit us in person."
      />

      {/* Contact cards */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-6 sm:px-8">
          <div className="grid gap-4 sm:grid-cols-2">
            {CONTACT_METHODS.map((c, i) => (
              <AnimateIn key={c.label} delay={i * 100}>
                <div className="group rounded-2xl border border-gray-200 bg-[var(--park-warm)] p-6 transition-all hover:border-[var(--park-sage)]/30 hover:shadow-md">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--park-forest)] text-white">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={c.icon} />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-[var(--park-sage)]">
                        {c.label}
                      </p>
                      {c.href ? (
                        <a
                          href={c.href}
                          className="mt-1 block text-lg font-semibold text-[var(--park-forest)] transition-colors group-hover:text-[var(--nchkay-orange)]"
                        >
                          {c.value}
                        </a>
                      ) : (
                        <p className="mt-1 text-lg font-semibold text-[var(--park-forest)]">
                          {c.value}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Address & hours */}
      <section className="border-t border-gray-100 bg-[var(--park-warm)] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <AnimateIn variant="left">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--park-sage)]">
                Visit us
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
              <p className="mt-6 text-gray-500">
                Adjacent to the Lions Gate Bridge, just off Exit 14 on the
                Trans-Canada Highway. Minutes from downtown Vancouver and the
                North Shore mountains.
              </p>
              <div className="mt-6">
                <a
                  href="https://www.google.com/maps/place/Capilano+River+RV+Park"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[var(--nchkay-orange)] hover:underline"
                >
                  Open in Google Maps
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
              </div>
            </AnimateIn>

            <AnimateIn variant="right" delay={200}>
              <div className="overflow-hidden rounded-2xl border border-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2601.548!2d-123.1089!3d49.3147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486718e8e2c1f51%3A0x3e7e1d3c7e2b2e8a!2sCapilano%20River%20RV%20Park!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca"
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Capilano River RV Park location"
                  className="h-[350px] w-full"
                />
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Group bookings */}
      <section className="border-t border-gray-100 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-6 text-center sm:px-8">
          <AnimateIn>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--park-sage)]">
              Travelling with a group?
            </p>
            <h2
              className="mt-3 text-3xl text-[var(--park-forest)]"
              style={{ fontFamily: "var(--font-display), serif" }}
            >
              Group bookings
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-gray-500">
              For groups of 6 or more RVs, contact Wayland directly for special
              rates and arrangements.
            </p>
            <div className="mt-8">
              <a
                href="mailto:wayland@capilanoriverrvpark.com"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--park-forest)] px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[var(--park-pine)] hover:shadow-lg"
              >
                Email wayland@capilanoriverrvpark.com
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Operated by */}
      <section className="border-t border-gray-100 bg-[var(--park-warm)] py-12">
        <div className="mx-auto max-w-4xl px-6 text-center sm:px-8">
          <p className="text-sm text-gray-400">
            Capilano River RV Park is owned by Nch&apos;ḵay̓ Development
            Corporation on behalf of the Squamish Nation and operated by The
            Inntimate Inns Group.
          </p>
        </div>
      </section>
    </div>
  );
}
