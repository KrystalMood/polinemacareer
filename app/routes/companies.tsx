import { Outlet } from '@remix-run/react'
import { useLocation } from '@remix-run/react'
import React from 'react'
import CompaniesContent from '~/components/companies/content'
import MainLayout from '~/components/layouts/MainLayout'

export default function CompaniesPage() {
    const location = useLocation();
    const isDetailPage = location.pathname.split('/').length > 2;

    return (
        <MainLayout>
            {isDetailPage ? <Outlet /> : <CompaniesContent />}
        </MainLayout>
  )
}
