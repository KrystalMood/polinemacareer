interface Option {
    id: string;
    label: string;
    defaultChecked?: boolean;
  }
  
  interface FilterSectionProps {
    title?: string;
    name: string;
    options: Option[];
    type: 'radio' | 'checkbox';
  }

export type { Option, FilterSectionProps };
