interface Company {
  id: number;
  name: string;
  location: string;
  isFeatured: boolean;
  openPositions: number;
  employeeCount: number;
  description?: string;
}

export type { Company };
