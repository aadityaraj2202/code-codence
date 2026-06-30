"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import dashboardService, { type DashboardStats } from "../../services/dashboardService";
import styles from "./page.module.css";


export default function DashboardPage() {
  const router = useRouter();
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("Token exists:", token ? "yes" : "no");
    if (!token) {
      router.push("/login");
      return;
    }

    const fetchStats = async () => {
      console.log("Fetching dashboard stats");
      try {
        const data = await dashboardService.getDashboardStats();

        // Backend values can be missing; ensure strict numeric fields.
        const mapped: DashboardStats = {
          totalStudents: data.totalStudents ?? 0,
          totalCourses: data.totalCourses ?? 0,
          totalTrainers: data.totalTrainers ?? 0,
          totalUsers: data.totalUsers ?? 0,
        };

        setStats(mapped);

      } catch (err) {
        console.error("Failed to fetch dashboard stats", err);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, [router]);

  if (loading) return <div>Loading...</div>;

  return (
    <main className={styles.main}>
      <h1>Dashboard</h1>
      {stats ? (
        <div>
          <p>Total Students: {stats.totalStudents}</p>
          <p>Total Courses: {stats.totalCourses}</p>
          <p>Total Trainers: {stats.totalTrainers}</p>
          <p>Total Users: {stats.totalUsers}</p>
        </div>
      ) : (
        <p>Failed to load stats.</p>
      )}
    </main>
  );
}