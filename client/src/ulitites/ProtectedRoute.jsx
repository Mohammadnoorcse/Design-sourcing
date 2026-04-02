import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute({ allowedRoles = [] }) {
  const user = {
    name: "mohammadnoor",
    role: Number(localStorage.getItem("role")) || 4,
  };

  // Redirect based on user role if current route is not allowed
  if (!allowedRoles.includes(user.role)) {
    if (user.role === 5) return <Navigate to="/" replace />;

    if (user.role === 4) return <Navigate to="/reseller" replace />;

    if (user.role === 1) return <Navigate to="/dashboard" replace />;

    return <Navigate to="/unauthorized" replace />;
  }

  return <Outlet />;
}
