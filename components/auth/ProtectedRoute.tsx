"use client";

import { useEffect, useMemo, useRef, type ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import {
  clearAuthStorage,
  getStoredRole,
  hasValidAuthSession,
  normalizeRoleValue,
} from "@/services/api";
import type { Role } from "@/types";

interface ProtectedRouteProps {
  children: ReactNode;
  allowedRoles?: Role[];
}

export default function ProtectedRoute({ children, allowedRoles }: ProtectedRouteProps) {
  const router = useRouter();
  const pathname = usePathname();
  const { isLoading, role } = useAuth();
  const hasRedirectedRef = useRef(false);

  const resolvedRole = useMemo(() => normalizeRoleValue(role ?? getStoredRole()), [role]);
  const isAuthorized = !allowedRoles || (resolvedRole ? allowedRoles.includes(resolvedRole) : false);

  useEffect(() => {
    if (isLoading || hasRedirectedRef.current) {
      return;
    }

    if (!hasValidAuthSession()) {
      hasRedirectedRef.current = true;
      clearAuthStorage();

      const loginUrl = pathname ? `/login?redirect=${encodeURIComponent(pathname)}` : "/login";
      router.replace(loginUrl);
      return;
    }

    if (!isAuthorized) {
      hasRedirectedRef.current = true;
      clearAuthStorage();
      const loginUrl = pathname ? `/login?redirect=${encodeURIComponent(pathname)}` : "/login";
      router.replace(loginUrl);
    }
  }, [isAuthorized, isLoading, pathname, resolvedRole, router]);

  if (hasRedirectedRef.current) {
    return null;
  }

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-100 text-sm font-medium text-slate-500">
        Checking your session...
      </div>
    );
  }

  if (!hasValidAuthSession() || !isAuthorized) {
    return null;
  }

  return <>{children}</>;
}
