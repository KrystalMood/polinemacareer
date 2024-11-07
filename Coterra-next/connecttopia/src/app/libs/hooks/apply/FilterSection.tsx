import { FilterSectionProps } from "@/app/types/apply/FilterProps";

export function FilterSection({ title, name, options, type }: FilterSectionProps) {
  return (
    <div className="space-y-3">
      {title && (
        <label className="text-md font-bold text-gray-700">
          {title}
        </label>
      )}
      <div className="flex flex-col gap-y-2 text-gray-600">
        {options.map((option) => (
          <div key={option.id} className="flex items-center gap-x-2">
            <input
              type={type}
              name={name}
              id={option.id}
              defaultChecked={option.defaultChecked}
            />
            <label htmlFor={option.id}>{option.label}</label>
          </div>
        ))}
      </div>
    </div>
  );
} 