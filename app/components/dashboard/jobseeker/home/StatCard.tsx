interface StatCardProps {
  title: string;
  value: number;
}

export default function StatCard({ title, value }: StatCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-3xl font-bold text-[#ff9b71]">{value}</p>
    </div>
  )
} 