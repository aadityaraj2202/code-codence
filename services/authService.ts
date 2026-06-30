import { LoginResponse, Role, User } from "../types";
import { request, setAuthStorage, getStoredToken } from "./api";

export interface AuthPayload {
  email: string;
  password: string;
}

export interface SignupPayload {
  name: string;
  email: string;
  password: string;
}

export interface OtpResponse {
  message: string;
  success?: boolean;
}

export interface AuthResponse {
  token?: string;
  role?: string;
  user?: User;
  message?: string;
  success?: boolean;
}

function normalizeRole(role?: string | null): Role | undefined {
  if (!role) {
    return undefined;
  }

  const normalizedRole = role
    .trim()
    .toLowerCase()
    .replace(/^role[_\s-]*/i, "") as Role;

  if (normalizedRole === "student" || normalizedRole === "trainer" || normalizedRole === "admin") {
    return normalizedRole;
  }

  return undefined;
}

function persistAuth(auth: AuthResponse) {
  const normalizedRole = normalizeRole(auth.role);

  if (auth.token && normalizedRole) {
    setAuthStorage(auth.token, normalizedRole, auth.user);
  }
}

export async function login(payload: AuthPayload): Promise<LoginResponse> {
  const response = await request<AuthResponse, AuthPayload>({
    url: "/api/auth/login",
    method: "post",
    data: payload,
  });

  persistAuth(response);

  if (!response.token || !normalizeRole(response.role)) {
    throw new Error(response.message || "Login response is missing token or role.");
  }

  return {
    token: response.token,
    role: normalizeRole(response.role)!,
    user: response.user,
  };
}

export async function signup(data: SignupPayload): Promise<AuthResponse> {
  return request<AuthResponse, SignupPayload>({
    url: "/api/auth/signup",
    method: "post",
    data,
  });
}

export async function sendOtp(email: string): Promise<OtpResponse> {
  const normalizedEmail = email.trim();

  if (!normalizedEmail) {
    throw new Error("Email is required to send OTP.");
  }

  return request<OtpResponse, { email: string }>({
    url: "/api/otp/send",
    method: "post",
    data: { email: normalizedEmail },
  });
}

export async function verifyOtp(email: string, otp: string): Promise<AuthResponse> {
  const normalizedEmail = email.trim();
  const normalizedOtp = otp.trim();

  if (!normalizedEmail) {
    throw new Error("Email is required for OTP verification.");
  }

  if (!normalizedOtp) {
    throw new Error("OTP is required for verification.");
  }

  return request<AuthResponse, { email: string; otp: string }>({
   url: "/api/otp/verify",
    method: "post",
    data: { email: normalizedEmail, otp: normalizedOtp },
  });
}

export interface UserProfile {
  id: string | number;
  name: string;
  email: string;
  role?: string;
  phoneNumber?: string;
  avatar?: string;
}

/**
 * Fetch the authenticated user's profile from the backend.
 * Requires a valid JWT token in storage (attached automatically by the API interceptor).
 * @throws Error if no token is stored or the request fails.
 */
export async function getProfile(): Promise<UserProfile> {
  const token = getStoredToken();

  if (!token) {
    throw new Error("No authentication token found. Please log in.");
  }

  // The backend might return userName, userEmail, etc.
  // We map those directly to our expected UserProfile structure.
  const response = await request<any>({
    url: "/users/profile",
    method: "get",
  });

  return {
    id: response.id,
    name: response.userName || response.name || "",
    email: response.userEmail || response.email || "",
    role: response.role,
    phoneNumber: response.userPhoneNumber || response.phoneNumber,
    avatar: response.avatar,
  };
}

const authService = {
  login,
  signup,
  sendOtp,
  verifyOtp,
  getProfile,
};

export default authService;
