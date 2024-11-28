import { LoaderFunction, redirect } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import DashboardLayout from "~/components/layouts/JobSeekerDashboardLayout";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  );
}
