import { ArrowRight } from "lucide-react";
import {
  Paintbrush,
  Code,
  Megaphone,
  Video,
  Music,
  Calculator,
  HeartPulse,
  Database,
} from "lucide-react";

interface Category {
  title: string;
  icon: JSX.Element;
  openPositions: number;
}

const categories: Category[] = [
  { title: "Code & Programming", icon: <Code />, openPositions: 312 },
  { title: "Digital Marketing", icon: <Megaphone />, openPositions: 297 },
  { title: "Video & Animation", icon: <Video />, openPositions: 247 },
  { title: "Music & Audio", icon: <Music />, openPositions: 204 },
  { title: "Account & Finance", icon: <Calculator />, openPositions: 167 },
  { title: "Health & Care", icon: <HeartPulse />, openPositions: 125 },
  { title: "Data & Science", icon: <Database />, openPositions: 57 },
  { title: "Graphics & Design", icon: <Paintbrush />, openPositions: 357 },
];

export default function IndexCategory() {
  return (
    <div className="min-h-[50vh] bg-slate-50">
      <div className="mx-auto w-[90vw] max-w-7xl py-16">
        <div className="mb-10 max-w-[80vw] mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-3">
            <h1 className="font-display text-4xl font-bold tracking-tight text-slate-900 mb-4 sm:mb-0">
              Popular Category
            </h1>
            <p className="text-lg text-slate-600">
              Find your dream job in our popular category
            </p>
          </div>

          <button className="group flex items-center text-md font-semibold text-sky-600 hover:text-sky-700 transition-colors">
            View All Categories
            <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.title}
              className="group block space-y-4 rounded-2xl bg-white p-8 shadow-sm transition-all hover:shadow-md"
            >
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50 text-sky-500">
                {category.icon}
              </div>
              <div className="space-y-1">
                <h2 className="text-xl font-semibold text-slate-900">
                  {category.title}
                </h2>
                <p className="text-base text-slate-400">
                  {category.openPositions.toLocaleString()} Positions
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
