import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <Outlet />
    </div>
  );
}