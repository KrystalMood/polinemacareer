import { Outlet, useLocation } from '@remix-run/react'
import React from 'react'
import JobsContent from '~/components/jobs/jobs'
import MainLayout from '~/components/layouts/MainLayout'

export default function JobsPage() {
  const location = useLocation();
  const isDetailPage = location.pathname.split('/').length > 2;

  return (
    <MainLayout>
      {isDetailPage ? <Outlet /> : <JobsContent />}
    </MainLayout>
  );
}
