"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { AuthState, User, Role, LoginResponse } from "@/types";
import {
  clearAuthStorage,
  getStoredRole,
  getStoredToken,
  getStoredUser,
  normalizeRoleValue,
  setAuthStorage,
} from "@/services/api";
import { getProfile } from "@/services/authService";

interface AuthContextType extends AuthState {
  login: (data: LoginResponse) => void;
  logout: () => void;
  isLoading: boolean;
  isProfileLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [role, setRole] = useState<Role | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isProfileLoading, setIsProfileLoading] = useState(false);

  /**
   * Fetch the user profile from the backend and update state + storage.
   * If the fetch fails (e.g. expired token), log the user out.
   */
  const fetchAndStoreProfile = useCallback(
    async (currentToken: string, currentRole: Role) => {
      setIsProfileLoading(true);
      try {
        const profile = await getProfile();

        const profileUser: User = {
          id: profile.id,
          name: profile.name,
          email: profile.email,
          phoneNumber: profile.phoneNumber,
          avatar: profile.avatar,
        };

        setUser(profileUser);

        // Persist the fresh profile data to localStorage / cookies
        setAuthStorage(currentToken, currentRole, profileUser);
      } catch {
        // Token is invalid or API is unreachable — force logout
        setToken(null);
        setRole(null);
        setUser(null);
        clearAuthStorage();
        router.replace("/login");
      } finally {
        setIsProfileLoading(false);
      }
    },
    [router],
  );

  // ─── Bootstrap: restore session from storage on mount ────────────────────────
  useEffect(() => {
    const storedToken = getStoredToken();
    const storedRole = getStoredRole();
    const storedUser = getStoredUser();

    if (storedToken && storedRole) {
      setToken(storedToken);
      setRole(storedRole);

      // Use cached user immediately so the UI doesn't flash empty
      if (storedUser) {
        setUser(storedUser);
      }

      // Then refresh from the backend in the background
      fetchAndStoreProfile(storedToken, storedRole);
    } else if (storedToken || storedRole || storedUser) {
      clearAuthStorage();
    }

    setIsLoading(false);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // ─── Login handler (existing flow — unchanged) ───────────────────────────────
  const login = (data: LoginResponse) => {
    const normalizedRole = normalizeRoleValue(data.role);

    if (!normalizedRole) {
      clearAuthStorage();
      throw new Error("Invalid role received from login response.");
    }

    setToken(data.token);
    setRole(normalizedRole);
    setUser(data.user ?? null);
    setAuthStorage(data.token, normalizedRole, data.user);

    // Fetch full profile from backend after login
    fetchAndStoreProfile(data.token, normalizedRole);

    router.replace(`/${normalizedRole}`);
    router.refresh();
  };

  // ─── Logout handler ─────────────────────────────────────────────────────────
  const logout = () => {
    setToken(null);
    setRole(null);
    setUser(null);
    clearAuthStorage();
    router.replace("/login");
    router.refresh();
  };

  return (
    <AuthContext.Provider value={{ user, token, role, login, logout, isLoading, isProfileLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
