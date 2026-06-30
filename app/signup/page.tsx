"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import authService from "@/services/authService";

export default function SignupPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (field: "name" | "email" | "password", value: string) => {
    setFormData((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleSignup = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const name = formData.name.trim();
    const email = formData.email.trim();
    const password = formData.password;

    if (!name || !email || !password) {
      setErrorMsg("Please complete name, email, and password.");
      setSuccessMsg("");
      return;
    }

    setLoading(true);
    setErrorMsg("");
    setSuccessMsg("");

    try {
      const signupResponse = await authService.signup({
        name,
        email,
        password,
      });

      const otpResponse = await authService.sendOtp(email);

      setSuccessMsg(
        otpResponse.message ||
          signupResponse.message ||
          "Signup successful. OTP sent to your email. Redirecting...",
      );
      setFormData({
        name: "",
        email: "",
        password: "",
      });

      window.setTimeout(() => {
        router.push(`/verify-otp?identifier=${encodeURIComponent(email)}`);
      }, 1200);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Signup failed. Please try again.";
      setErrorMsg(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-10">
      <div className="mx-auto flex min-h-[80vh] max-w-5xl items-center justify-center">
        <div className="grid w-full overflow-hidden rounded-3xl bg-white shadow-2xl lg:grid-cols-[1.05fr_0.95fr]">
          <section className="bg-cyan-700 px-8 py-12 text-white sm:px-10">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-100">
              Code Codence
            </p>
            <h1 className="mt-6 text-3xl font-bold sm:text-4xl">Create your account</h1>
            <p className="mt-4 max-w-md text-sm leading-6 text-cyan-50 sm:text-base">
              Sign up with your basic details. Once your account is created, we
              send a one-time password to your email for verification.
            </p>
            <div className="mt-10 rounded-2xl border border-white/20 bg-white/10 p-5">
              <p className="text-xs uppercase tracking-[0.25em] text-cyan-100">
                Next step
              </p>
              <p className="mt-2 text-lg font-semibold text-white">
                Verify OTP before logging in
              </p>
            </div>
          </section>

          <section className="px-8 py-12 sm:px-10">
            <div className="mx-auto max-w-md">
              <h2 className="text-2xl font-semibold text-slate-900">Signup</h2>
              <p className="mt-2 text-sm text-slate-600">
                Enter your details to register and receive your email OTP.
              </p>

              <form onSubmit={handleSignup} className="mt-8 space-y-5">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-700">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(event) => handleChange("name", event.target.value)}
                    className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
                    placeholder="Enter your full name"
                    autoComplete="name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(event) => handleChange("email", event.target.value)}
                    className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
                    placeholder="Enter your email"
                    autoComplete="email"
                  />
                </div>

                <div>
                  <label htmlFor="password" className="mb-2 block text-sm font-medium text-slate-700">
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    value={formData.password}
                    onChange={(event) => handleChange("password", event.target.value)}
                    className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
                    placeholder="Create a password"
                    autoComplete="new-password"
                  />
                </div>

                {successMsg && (
                  <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
                    {successMsg}
                  </div>
                )}

                {errorMsg && (
                  <div className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
                    {errorMsg}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-2xl bg-cyan-700 px-4 py-3 text-sm font-semibold text-white transition hover:bg-cyan-800 disabled:cursor-not-allowed disabled:bg-slate-400"
                >
                  {loading ? "Creating account and sending OTP..." : "Sign Up"}
                </button>
              </form>

              <p className="mt-6 text-sm text-slate-600">
                Already have an account?{" "}
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
