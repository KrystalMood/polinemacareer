import WelcomeCard from "~/components/dashboard/employer/home/WelcomeCard";
import StatsGrid from "~/components/dashboard/employer/home/StatsGrid";

export default function EmployerHome() {
  return (
    <div className="space-y-6">
      <WelcomeCard />
      <StatsGrid />
    </div>
  );
} 