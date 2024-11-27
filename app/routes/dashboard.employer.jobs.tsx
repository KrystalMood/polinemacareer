import JobsHeader from "~/components/dashboard/employer/jobs/JobsHeader";
import JobFilters from "~/components/dashboard/employer/jobs/JobFilters";
import JobsList from "~/components/dashboard/employer/jobs/JobsList";
export default function EmployerJobs() {
  return (
    <div className="space-y-6">
      <JobsHeader />
      <JobFilters />
      <JobsList />
    </div>
  );
} 