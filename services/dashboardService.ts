import { requestWithFallback } from "./api";

export interface DashboardStats {
  totalStudents?: number;
  totalCourses?: number;
  totalTrainers?: number;
  totalUsers?: number;
  [key: string]: unknown;
}

export async function getAdminDashboard(): Promise<DashboardStats> {
  return requestWithFallback<DashboardStats>([
    { url: "/analytics/dashboard" },
    { url: "/dashboard" },
    { url: "/dashboard/admin" },
  ]);
}

export async function getStats(): Promise<DashboardStats> {
  return requestWithFallback<DashboardStats>([
    { url: "/dashboard/stats" },
    { url: "/analytics/dashboard" },
    { url: "/dashboard" },
  ]);
}

export async function getDashboardStats(): Promise<DashboardStats> {
  return getStats();
}

const dashboardService = {
  getAdminDashboard,
  getStats,
  getDashboardStats,
};

export default dashboardService;
