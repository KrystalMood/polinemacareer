import jobs from "@/app/data/index/featured-jobs";
import { Job } from "@/app/types/index/featured-jobs";

import { useState } from "react";

const useFeaturedJob = () => {
  const [job, setJob] = useState<Job[]>(jobs);

  const handleBookmarked = (index: number) => {
    const updatedJobs = job.map((job, i) =>
      i === index ? { ...job, bookmarked: !job.bookmarked } : job
    );
    setJob(updatedJobs);
  };

  return { job, handleBookmarked };
};

export default useFeaturedJob;
