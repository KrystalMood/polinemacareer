import { ReactNode } from "react";

interface StatsCardProps {
    title: string;
    value: number;
    icon: ReactNode;
}

export default function StatsCard({ title, value, icon }: StatsCardProps) {
    return (
        <div className="rounded-xl bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-sm font-medium text-gray-600">{title}</p>
                    <p className="mt-2 text-3xl font-bold text-gray-900">{value}</p>
                </div>
                <div className="rounded-full bg-[#ff9b71]/10 p-3">
                    {icon}
                </div>
            </div>
        </div>
    );
}
