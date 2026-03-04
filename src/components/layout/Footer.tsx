import Link from "next/link";
import Image from "next/image";

const TAGLINE = "An Nch'ḵay̓ property for the Squamish people";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/logo-nchkay.png"
              alt="Nch'ḵay̓ Development Corporation"
              width={120}
              height={36}
            />
            <span className="text-sm text-gray-600">{TAGLINE}</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <Link href="/" className="text-gray-600 hover:text-[var(--nchkay-red)]">
              Portfolio
            </Link>
            <Link href="/capilano-rv-park" className="text-gray-600 hover:text-[var(--nchkay-red)]">
              Capilano RV Park
            </Link>
            <Link href="/directory" className="text-gray-600 hover:text-[var(--nchkay-red)]">
              Directory
            </Link>
            <Link href="/design" className="text-gray-600 hover:text-[var(--nchkay-red)]">
              Design
            </Link>
            <Link href="/working-with-us" className="text-gray-600 hover:text-[var(--nchkay-red)]">
              Working with us
            </Link>
            <a
              href="mailto:hello@example.com"
              className="font-medium text-[var(--nchkay-red)] hover:underline"
            >
              Get in touch
            </a>
          </div>
        </div>
        <p className="mt-6 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Nch'ḵay̓ Development Corporation. Sḵwx̱wú7mesh Úxwumixw.
        </p>
      </div>
    </footer>
  );
}
