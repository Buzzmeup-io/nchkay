"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(false);
    setLoading(true);

    const res = await fetch("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      router.push("/");
      router.refresh();
    } else {
      setError(true);
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-sm">
        <div className="mb-8 flex justify-center">
          <Image
            src="/logo-nchkay.png"
            alt="Nch'ḵay̓ Development Corporation"
            width={200}
            height={60}
            priority
          />
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
          <h1 className="text-center text-xl font-semibold text-gray-900">
            Portfolio preview
          </h1>
          <p className="mt-2 text-center text-sm text-gray-500">
            Enter the password to continue.
          </p>
          <form onSubmit={handleSubmit} className="mt-6">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              autoFocus
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-[var(--nchkay-red)] focus:outline-none focus:ring-1 focus:ring-[var(--nchkay-red)]"
            />
            {error && (
              <p className="mt-2 text-sm text-red-600">
                Incorrect password. Please try again.
              </p>
            )}
            <button
              type="submit"
              disabled={loading}
              className="mt-4 w-full rounded-lg bg-[var(--nchkay-red)] px-4 py-3 text-sm font-medium text-white transition hover:bg-[var(--nchkay-red-dark)] disabled:opacity-50"
            >
              {loading ? "Checking..." : "Enter"}
            </button>
          </form>
        </div>
        <p className="mt-6 text-center text-xs text-gray-400">
          Nch&apos;ḵay̓ Development Corporation · Sḵwx̱wú7mesh Úxwumixw
        </p>
      </div>
    </div>
  );
}
