import { useEffect, useState, forwardRef, useImperativeHandle } from "react";
import JobCard from "./JobCard";

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  logo: string;
  created_at: string;
}

interface sortOptions {
    field: keyof Job;
    direction: "asc" | "desc";
}

const JobsList = forwardRef((props, ref) => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [sortOption, setSortOption] = useState<sortOptions>({
    field: "created_at",
    direction: "desc"
  });

  const sortJobs = (jobsToSort: Job[]) => {
    return [...jobsToSort].sort((a, b) => {
        const aValue = a[sortOption.field];
        const bValue = b[sortOption.field];

        if (sortOption.direction === "asc") {
            return aValue > bValue ? 1 : -1;
        } else {
            return aValue < bValue ? 1 : -1;
        }
    })
  }
  
  const handleSort = (field: keyof Job) => {
    setSortOption(prev => ({
        field,
        direction: prev.field === field && prev.direction === "asc" ? "desc" : "asc"
    }))
  }

  const fetchJobs = async () => {
    try {
        const response = await fetch(
            `http://localhost/polinema_career/api/jobs/index.php?sort_field=${sortOption.field}&sort_direction=${sortOption.direction}`
        );
        const data = await response.json();

        if (data.status === "success") {
            setJobs(data.data);
        } else {
            setError(data.message);
        }
    } catch (err) {
        setError("Something went wrong " + err);
    } finally {
        setLoading(false);
    }
  }

  useEffect(() => {
    fetchJobs();
  }, [sortOption]);

  useEffect(() => {
    setJobs(prev => sortJobs(prev));
  }, []);

  useImperativeHandle(ref, () => ({
    handleSort: (field: keyof Job) => {
      setSortOption(prev => ({
        field,
        direction: prev.field === field && prev.direction === "asc" ? "desc" : "asc"
      }));
    }
  }));

  if (loading) return <div className="text-center py-8">Loading...</div>;
  if (error) return <div className="text-center py-8 text-red-500">{error}</div>;

  if (jobs.length === 0 ) {
    return (
        <div className="rounded-xl bg-white p-6 shadow-sm">
            <div className="py-8 text-center text-gray-500">
                No jobs found
            </div>
        </div>
    )
  }
  return (
    <div className="space-y-4">
      {jobs.map((job) => (
        <JobCard 
          key={job.id}
          title={job.title}
          company={job.company}
          location={job.location}
          type={job.type}
          logo={job.logo}
        />
      ))}
    </div>
  );
});

export default JobsList;
