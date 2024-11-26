import WelcomeCard from '~/components/dashboard/beranda/WelcomeCard'
import StatsGrid from '~/components/dashboard/beranda/StatsGrid'
import RecentApplications from '~/components/dashboard/beranda/RecentApplications'

export default function DashboardHomePage() {
  return (
    <div className="space-y-6">
      <WelcomeCard />
      <StatsGrid />
      <RecentApplications />
    </div>
  )
}
