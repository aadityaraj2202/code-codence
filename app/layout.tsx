import type { Metadata } from "next";
import AppChrome from "@/components/AppChrome";
import { AuthProvider } from "@/context/AuthContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "Code Codence - Learn Grow Succeed",
  description: "Empower your future with Code Codence. Affordable, practical courses in Data Science, Programming, Web Development, and Design.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col">
        <AuthProvider>
          <AppChrome>{children}</AppChrome>
        </AuthProvider>
      </body>
    </html>
  );
}

