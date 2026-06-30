import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PUBLIC_ROUTES = new Set(["/", "/login", "/signup", "/verify-otp"]);
const AUTH_ROUTES = new Set(["/login", "/signup", "/verify-otp"]);
const PROTECTED_PREFIXES = ["/student", "/trainer", "/admin", "/courses"];
const VALID_ROLES = new Set(["student", "trainer", "admin"]);

function isProtectedRoute(pathname: string) {
  return PROTECTED_PREFIXES.some((route) => pathname === route || pathname.startsWith(`${route}/`));
}

function clearAuthCookies(response: NextResponse) {
  response.cookies.delete("token");
  response.cookies.delete("role");
  response.cookies.delete("user");
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const token = request.cookies.get("token")?.value?.trim();
  const role = request.cookies.get("role")?.value?.trim()?.toLowerCase();
  const hasValidRole = Boolean(role && VALID_ROLES.has(role));
  const hasValidSession = Boolean(token && hasValidRole);

  if (PUBLIC_ROUTES.has(pathname)) {
    if (AUTH_ROUTES.has(pathname) && hasValidSession) {
      return NextResponse.redirect(new URL(`/${role}`, request.url));
    }

    if (AUTH_ROUTES.has(pathname) && (token || role) && !hasValidSession) {
      const response = NextResponse.next();
      clearAuthCookies(response);
      return response;
    }

    return NextResponse.next();
  }

  if (!isProtectedRoute(pathname)) {
    return NextResponse.next();
  }

  if (!hasValidSession) {
      const loginUrl = new URL("/login", request.url);
      loginUrl.searchParams.set("redirect", pathname);
      const response = NextResponse.redirect(loginUrl);
      clearAuthCookies(response);
      return response;
  }

  const isStudentRoute = pathname.startsWith("/student");
  const isTrainerRoute = pathname.startsWith("/trainer");
  const isAdminRoute = pathname.startsWith("/admin");

  if (isStudentRoute && role !== "student") {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("redirect", pathname);
    const response = NextResponse.redirect(loginUrl);
    clearAuthCookies(response);
    return response;
  }

  if (isTrainerRoute && role !== "trainer") {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("redirect", pathname);
    const response = NextResponse.redirect(loginUrl);
    clearAuthCookies(response);
    return response;
  }

  if (isAdminRoute && role !== "admin") {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("redirect", pathname);
    const response = NextResponse.redirect(loginUrl);
    clearAuthCookies(response);
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.png|.*\\.jpg|.*\\.svg).*)",
  ],
};
