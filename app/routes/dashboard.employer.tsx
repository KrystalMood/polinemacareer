import { LoaderFunction, redirect } from "@remix-run/node";
import { json, Outlet } from "@remix-run/react";
import EmployerDashboardLayout from "~/components/layouts/EmployerDashboardLayout";
import { requireAuth } from "~/middleware/auth.server";



export default function DashboardEmployer() {
  return (
    <EmployerDashboardLayout>
      <Outlet />
    </EmployerDashboardLayout>
  );
}

