import StatCard from './StatCard'

export default function StatsGrid() {
  const stats = [
    { title: 'Total Lamaran', value: 0 },
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