"use client";

import { Toaster } from "react-hot-toast";
import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const dashboardRoutes = new Set(["/student", "/trainer", "/admin", "/courses"]);

export default function AppChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isDashboardRoute = dashboardRoutes.has(pathname);

  return (
    <>
      {!isDashboardRoute && <Navbar />}
      <main className="flex-1 w-full">{children}</main>
      {!isDashboardRoute && <Footer />}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: "#ffffff",
            color: "#0f172a",
            border: "1px solid #e2e8f0",
            borderRadius: "14px",
            boxShadow: "0 10px 30px rgba(15, 23, 42, 0.12)",
          },
        }}
      />
    </>
  );
}

