import type { Role } from "@/types";

export const ROLE_DASHBOARD_PATHS = {
  student: "/student",
  trainer: "/trainer",
  admin: "/admin",
} as const satisfies Record<Role, string>;

function isRole(role: string | undefined): role is Role {
  return role === "student" || role === "trainer" || role === "admin";
}

export function getDashboardPathForRole(role?: Role | string | null): string {
  const normalizedRole = role?.trim().toLowerCase();

  return normalizedRole && isRole(normalizedRole)
    ? ROLE_DASHBOARD_PATHS[normalizedRole]
    : "/login";
}
