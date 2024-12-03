import React from "react";
import EditProfileForm from "~/components/dashboard/jobseeker/profile/EditProfileForm";

export default function Profile() {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-8">
      <div className="space-y-6">
        <div className="rounded-xl bg-white p-6 shadow-sm">
          <h1 className="text-2xl font-bold text-gray-900">Profile Settings</h1>
          <p className="mt-1 text-gray-600">Update your personal information</p>
        </div>

        <EditProfileForm />
      </div>
    </div>
  );
}
