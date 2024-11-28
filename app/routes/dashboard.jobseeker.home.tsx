import WelcomeCard from '~/components/dashboard/jobseeker/home/WelcomeCard'
import StatsGrid from '~/components/dashboard/jobseeker/home/StatsGrid'
import RecentApplications from '~/components/dashboard/jobseeker/home/RecentApplications'

export default function DashboardHome() {
  return (
    <div className="space-y-6">
      <WelcomeCard />
      <StatsGrid />
      <RecentApplications />
    </div>
  )
}
