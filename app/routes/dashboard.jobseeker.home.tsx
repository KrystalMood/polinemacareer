import WelcomeCard from '~/components/dashboard/jobseeker/beranda/WelcomeCard'
import StatsGrid from '~/components/dashboard/jobseeker/beranda/StatsGrid'
import RecentApplications from '~/components/dashboard/jobseeker/beranda/RecentApplications'

export default function DashboardHome() {
  return (
    <div className="space-y-6">
      <WelcomeCard />
      <StatsGrid />
      <RecentApplications />
    </div>
  )
}
