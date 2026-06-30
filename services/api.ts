import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import Cookies from "js-cookie";
import type { Role, User } from "@/types";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/api";

export type HttpMethod = "get" | "post" | "put" | "patch" | "delete";

export interface ApiErrorResponse {
  message: string;
  status: number;
  details?: unknown;
}

export interface RequestWithFallbackConfig<TData = unknown> {
  url: string;
  method?: HttpMethod;
  data?: TData;
  params?: Record<string, unknown>;
  headers?: Record<string, string>;
}

const API: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

function isBrowser() {
  return typeof window !== "undefined";
}

const VALID_ROLES: Role[] = ["student", "trainer", "admin"];
const AUTH_COOKIE_OPTIONS = { expires: 7, path: "/" as const, sameSite: "strict" as const };

function normalizeStoredValue(value?: string | null) {
  if (!value) {
    return null;
  }

  const normalizedValue = value.trim();
  return normalizedValue && normalizedValue !== "undefined" && normalizedValue !== "null"
    ? normalizedValue
    : null;
}

export function isValidRole(role?: string | null): role is Role {
  return VALID_ROLES.includes((role ?? "").toLowerCase() as Role);
}

export function normalizeRoleValue(role?: string | null): Role | null {
  if (!role) {
    return null;
  }

  const normalizedRole = role.trim().toLowerCase() as Role;
  return isValidRole(normalizedRole) ? normalizedRole : null;
}

export function getStoredToken(): string | null {
  if (!isBrowser()) {
    return null;
  }

  const localToken = normalizeStoredValue(localStorage.getItem("token"));
  const cookieToken = normalizeStoredValue(Cookies.get("token"));

  return localToken || cookieToken;
}

export function getStoredRole(): Role | null {
  if (!isBrowser()) {
    return null;
  }

  const localRole = normalizeStoredValue(localStorage.getItem("role"));
  const cookieRole = normalizeStoredValue(Cookies.get("role"));
  const role = localRole || cookieRole;

  return normalizeRoleValue(role);
}

export function getStoredUser(): User | null {
  if (!isBrowser()) {
    return null;
  }

  const localUser = normalizeStoredValue(localStorage.getItem("user"));
  const cookieUser = normalizeStoredValue(Cookies.get("user"));
  const user = localUser || cookieUser;

  if (!user) {
    return null;
  }

  try {
    return JSON.parse(user) as User;
  } catch {
    return null;
  }
}

export function hasValidAuthSession() {
  return Boolean(getStoredToken() && getStoredRole());
}

export function setAuthStorage(token: string, role?: string | null, user?: unknown) {
  if (!isBrowser()) {
    return;
  }

  const normalizedRole = normalizeRoleValue(role);

  localStorage.setItem("token", token);
  Cookies.set("token", token, AUTH_COOKIE_OPTIONS);

  if (normalizedRole) {
    localStorage.setItem("role", normalizedRole);
    Cookies.set("role", normalizedRole, AUTH_COOKIE_OPTIONS);
  } else {
    localStorage.removeItem("role");
    Cookies.remove("role", { path: "/" });
  }

  if (user !== undefined) {
    const serializedUser = JSON.stringify(user);
    localStorage.setItem("user", serializedUser);
    Cookies.set("user", serializedUser, AUTH_COOKIE_OPTIONS);
  } else {
    localStorage.removeItem("user");
    Cookies.remove("user", { path: "/" });
  }
}

export function clearAuthStorage() {
  if (!isBrowser()) {
    return;
  }

  localStorage.removeItem("token");
  localStorage.removeItem("role");
  localStorage.removeItem("user");
  sessionStorage.clear();
  Cookies.remove("token", { path: "/" });
  Cookies.remove("role", { path: "/" });
  Cookies.remove("user", { path: "/" });
  document.cookie = "token=; Max-Age=0; path=/";
  document.cookie = "role=; Max-Age=0; path=/";
  document.cookie = "user=; Max-Age=0; path=/";
}

export function normalizeApiError(error: unknown): ApiErrorResponse {
  if (axios.isAxiosError(error)) {
    const axiosError = error as AxiosError<{ message?: string; error?: string; details?: unknown }>;
    const status = axiosError.response?.status ?? 500;
    const responseData = axiosError.response?.data;
    const message =
      responseData?.message ||
      responseData?.error ||
      axiosError.message ||
      "Something went wrong while communicating with the server.";

    return {
      message,
      status,
      details: responseData?.details,
    };
  }

  if (error instanceof Error) {
    return {
      message: error.message,
      status: 500,
    };
  }

  return {
    message: "An unexpected error occurred.",
    status: 500,
  };
}

export function createApiError(error: unknown): Error & ApiErrorResponse {
  const normalizedError = normalizeApiError(error);
  const apiError = new Error(normalizedError.message) as Error & ApiErrorResponse;

  apiError.status = normalizedError.status;
  apiError.details = normalizedError.details;

  return apiError;
}

API.interceptors.request.use((config) => {
  const token = getStoredToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (axios.isAxiosError(error) && error.response?.status === 401) {
      clearAuthStorage();
    }

    return Promise.reject(createApiError(error));
  },
);

async function executeRequest<TResponse>(config: RequestWithFallbackConfig): Promise<TResponse> {
  try {
    const response = await API.request<TResponse>({
      url: config.url,
      method: config.method ?? "get",
      data: config.data,
      params: config.params,
      headers: config.headers,
    });

    return response.data;
  } catch (error) {
    throw createApiError(error);
  }
}

export async function request<TResponse, TData = unknown>(
  config: RequestWithFallbackConfig<TData>,
): Promise<TResponse> {
  return executeRequest<TResponse>(config);
}

export async function requestWithFallback<TResponse, TData = unknown>(
  configs: Array<RequestWithFallbackConfig<TData>>,
): Promise<TResponse> {
  let lastError: (Error & ApiErrorResponse) | null = null;

  for (const config of configs) {
    try {
      return await executeRequest<TResponse>(config);
    } catch (error) {
      const apiError = createApiError(error);
      lastError = apiError;

      if (![404, 405].includes(apiError.status)) {
        throw apiError;
      }
    }
  }

  throw (
    lastError ||
    createApiError(new Error("No matching API endpoint was available for this request."))
  );
}

export async function unwrapResponse<TResponse>(promise: Promise<AxiosResponse<TResponse>>): Promise<TResponse> {
  try {
    const response = await promise;
    return response.data;
  } catch (error) {
    throw createApiError(error);
  }
}

export type ApiInstance = typeof API;
export type ApiRequestConfig = AxiosRequestConfig;

export default API;
