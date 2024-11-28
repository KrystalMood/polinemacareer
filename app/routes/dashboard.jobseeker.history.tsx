import React from 'react'
import HistoryHeader from '~/components/dashboard/jobseeker/history/HistoryHeader';
import HistoryList from '~/components/dashboard/jobseeker/history/HistoryList';

export default function DashboardHistory() {
  return (
    <div className="space-y-6">
      <HistoryHeader />
      <HistoryList />   
    </div>
  );
}
