import JobsHeader from "~/components/dashboard/jobseeker/jobs/JobsHeader";
import JobFilters from "~/components/dashboard/jobseeker/jobs/JobFilters";
import JobsList from "~/components/dashboard/jobseeker/jobs/JobsList";
import { useRef } from "react";

export default function DashboardJobs() {
  const jobsListRef = useRef<{ handleSort: (field: string) => void }>(null);

  const handleSort = (field: string) => {
    if (jobsListRef.current) {
      jobsListRef.current.handleSort(field);
    }
  };

  return (
    <div className="space-y-6">
      <JobsHeader />
      <JobFilters onSort={handleSort} />
      <JobsList ref={jobsListRef} />
    </div>
  );
}
