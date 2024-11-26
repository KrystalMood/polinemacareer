import { LoaderFunction } from "@remix-run/node";
import { Outlet, redirect } from "@remix-run/react";
import React from "react";
import DashboardLayout from "~/components/layouts/DashboardLayout";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  );
}

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  if (url.pathname === "/dashboard") {
    return redirect("/dashboard/home");
  }
  return null;
};
