export type Role = "student" | "trainer" | "admin";
export type AuthState = {
  user: User | null;
  token: string | null;
  role: Role | null;
};

export interface User {
  id: string | number;
  name: string;
  email: string;
  phoneNumber?: string;
  avatar?: string;
}

export interface LoginResponse {
  token: string;
  role: Role;
  user?: User;
}

export interface ApiError {
  message: string;
  status: number;
}
