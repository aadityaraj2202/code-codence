import ProtectedRoute from "@/components/auth/ProtectedRoute";
import AdminDashboardShell from "@/components/admin/AdminDashboardShell";

export default function AdminPage() {
  return (
    <ProtectedRoute allowedRoles={["admin"]}>
      <AdminDashboardShell />
    </ProtectedRoute>
  );
}

