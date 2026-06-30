"use client";

import Link from "next/link";
import { useEffect, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import authService from "@/services/authService";
import { clearAuthStorage, hasValidAuthSession } from "@/services/api";
import { getDashboardPathForRole } from "@/services/roleRoutes";

export default function LoginPage() {
  const router = useRouter();
  const { login, role, token, isLoading } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [redirectTarget, setRedirectTarget] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const nextRedirectTarget = new URLSearchParams(window.location.search).get("redirect") || "";
    setRedirectTarget(nextRedirectTarget);
  }, []);

  useEffect(() => {
    if (isLoading) {
      return;
    }

    if (token && role && hasValidAuthSession()) {
      router.replace(getDashboardPathForRole(role));
      return;
    }

    if (token || role) {
      clearAuthStorage();
    }
  }, [isLoading, role, router, token]);

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email.trim() || !password.trim()) {
      setErrorMsg("Please fill all fields.");
      setSuccessMsg("");
      return;
    }

    setLoading(true);
    setErrorMsg("");
    setSuccessMsg("");

    try {
      const response = await authService.login({
        email: email.trim(),
        password,
      });

      const normalizedRole = response.role.toLowerCase();
      const redirectPath = `/${normalizedRole}`;

      console.log("Logged in role:", normalizedRole);

      setSuccessMsg(`Login successful. Redirecting to ${redirectPath}...`);
      login(response);

      if (redirectTarget && redirectTarget.startsWith("/") && redirectTarget !== "/login") {
        router.replace(redirectTarget);
      }
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Login failed. Please check your credentials.";
      setErrorMsg(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-10">
      <div className="mx-auto flex min-h-[80vh] max-w-5xl items-center justify-center">
        <div className="grid w-full overflow-hidden rounded-3xl bg-white shadow-2xl lg:grid-cols-[0.95fr_1.05fr]">
          <section className="bg-slate-900 px-8 py-12 text-white sm:px-10">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
              Code Codence
            </p>
            <h1 className="mt-6 text-3xl font-bold sm:text-4xl">Welcome back</h1>
            <p className="mt-4 max-w-md text-sm leading-6 text-slate-300 sm:text-base">
              Log in with your registered email and password. Your role comes from
              the backend response, and we redirect you to the right dashboard.
            </p>
            <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                Login flow
              </p>
              <p className="mt-2 text-lg font-semibold text-white">
                Secure login with role-based access, personalized dashboard, and seamless user experience.
              </p>
            </div>
          </section>

          <section className="px-8 py-12 sm:px-10">
            <div className="mx-auto max-w-md">
              <h2 className="text-2xl font-semibold text-slate-900">Login</h2>
              <p className="mt-2 text-sm text-slate-600">
                Use the credentials you created after email verification.
              </p>

              {redirectTarget && (
                <div className="mt-4 rounded-2xl border border-cyan-200 bg-cyan-50 px-4 py-3 text-sm text-cyan-800">
                  Please log in to continue to {redirectTarget}.
                </div>
              )}

              <form onSubmit={handleLogin} className="mt-8 space-y-5">
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
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
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
                    placeholder="Enter your password"
                    autoComplete="current-password"
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
                  className="w-full rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-400"
                >
                  {loading ? "Logging in..." : "Login"}
                </button>
              </form>

              <p className="mt-6 text-sm text-slate-600">
                Don&apos;t have an account?{" "}
                <Link href="/signup" className="font-semibold text-cyan-700 hover:text-cyan-800">
                  Sign up
                </Link>
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
