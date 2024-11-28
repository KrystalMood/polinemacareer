import { useEffect, useState } from 'react';
import StatCard from './StatCard'

export default function StatsGrid() {
  const [totalJobs, setTotalJobs] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchTotalJobs = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "http://localhost/polinema_career/api/jobs/total_jobs.php"
        );
        const data = await response.json();
        
        if (data.status === "success") {
          setTotalJobs(data.data.total);
        }
      } catch (error) {
        console.error("Error fetching total jobs:", error);
        setTotalJobs(0);
      } finally {
        setLoading(false);
      }
    };

    fetchTotalJobs();
  }, []);

  const stats = [
    { 
      title: 'Total Lowongan', 
      value: loading ? 0 : totalJobs ?? 0 
    },
    { title: 'Lamaran Diproses', value: 0 },
    { title: 'Lamaran Diterima', value: 0 },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((stat) => (
        <StatCard key={stat.title} {...stat} />
      ))}
    </div>
  )
} 