"use client";

import Link from "next/link";
import { Suspense, useMemo, useState, type FormEvent } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import authService from "@/services/authService";

function VerifyOtpContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const identifier = searchParams.get("identifier") || "";
  const email = useMemo(() => decodeURIComponent(identifier), [identifier]);

  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);

  const handleVerifyOtp = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email) {
      setError("Missing email identifier. Please sign up again.");
      return;
    }

    if (!otp.trim()) {
      setError("Please enter the OTP sent to your email.");
      return;
    }

    setLoading(true);
    setError("");
    setMessage("");

    try {
      const response = await authService.verifyOtp(email, otp.trim());
      setMessage(response.message || "OTP verified successfully. Redirecting to login...");
      setOtp("");
      window.setTimeout(() => {
        router.push("/login");
      }, 1200);
    } catch (err) {
      const nextError =
        err instanceof Error ? err.message : "Invalid OTP. Please try again.";
      setError(nextError);
    } finally {
      setLoading(false);
    }
  };

  const handleResendOtp = async () => {
    if (!email) {
      setError("Missing email identifier. Please sign up again.");
      setMessage("");
      return;
    }

    setResending(true);
    setError("");
    setMessage("");

    try {
      const response = await authService.sendOtp(email);
      setMessage(response.message || "A fresh OTP has been sent to your email.");
    } catch (err) {
      const nextError =
        err instanceof Error ? err.message : "OTP failed to send. Please try again.";
      setError(nextError);
    } finally {
      setResending(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-10">
      <div className="mx-auto flex min-h-[80vh] max-w-5xl items-center justify-center">
        <div className="grid w-full overflow-hidden rounded-3xl bg-white shadow-2xl lg:grid-cols-[1.1fr_0.9fr]">
          <section className="bg-slate-900 px-8 py-12 text-white sm:px-10">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
              Code Codence
            </p>
            <h1 className="mt-6 text-3xl font-bold sm:text-4xl">
              Verify your email
            </h1>
            <p className="mt-4 max-w-md text-sm leading-6 text-slate-300 sm:text-base">
              Enter the OTP sent to your registered email to activate your account
              and continue to login.
            </p>
            <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                Email
              </p>
              <p className="mt-2 break-all text-lg font-semibold text-white">
                {email || "No identifier provided"}
              </p>
            </div>
          </section>

          <section className="px-8 py-12 sm:px-10">
            <div className="mx-auto max-w-md">
              <h2 className="text-2xl font-semibold text-slate-900">OTP Verification</h2>
              <p className="mt-2 text-sm text-slate-600">
                Use the code from your email inbox to complete verification.
              </p>

              <form onSubmit={handleVerifyOtp} className="mt-8 space-y-5">
                <div>
                  <label htmlFor="otp" className="mb-2 block text-sm font-medium text-slate-700">
                    One-time password
                  </label>
                  <input
                    id="otp"
                    type="text"
                    value={otp}
                    onChange={(event) => setOtp(event.target.value)}
                    placeholder="Enter OTP"
                    className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
                    inputMode="numeric"
                    autoComplete="one-time-code"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Registered email
                  </label>
                  <input
                    type="email"
                    value={email}
                    readOnly
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-500 outline-none"
                  />
                </div>

                {message && (
                  <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
                    {message}
                  </div>
                )}

                {error && (
                  <div className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-400"
                >
                  {loading ? "Verifying OTP..." : "Verify OTP"}
                </button>

                <button
                  type="button"
                  onClick={handleResendOtp}
                  disabled={resending || loading || !email}
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-cyan-500 hover:text-cyan-700 disabled:cursor-not-allowed disabled:border-slate-200 disabled:text-slate-400"
                >
                  {resending ? "Sending OTP..." : "Resend OTP"}
                </button>
              </form>

              <p className="mt-6 text-sm text-slate-600">
                OTP failed to arrive? Use resend or return to{" "}
                <Link href="/signup" className="font-semibold text-cyan-700 hover:text-cyan-800">
                  signup
                </Link>{" "}
                and request a fresh code.
              </p>

              <p className="mt-2 text-sm text-slate-600">
                Already verified?{" "}
                <Link href="/login" className="font-semibold text-cyan-700 hover:text-cyan-800">
                  Go to login
                </Link>
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

export default function VerifyOtpPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-100" />}>
      <VerifyOtpContent />
    </Suspense>
  );
}
