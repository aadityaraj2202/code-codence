import ProtectedRoute from "@/components/auth/ProtectedRoute";
import TrainerDashboardShell from "@/components/trainer/TrainerDashboardShell";

export default function TrainerPage() {
  return (
    <ProtectedRoute allowedRoles={["trainer"]}>
      <TrainerDashboardShell />
    </ProtectedRoute>
  );
}

