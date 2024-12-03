interface Company {
  name: string;
  logo: string;
}

export interface UserData {
  id: number;
  email: string;
  fullName: string;
  role: "job_seeker" | "employer";
  company?: Company;
}

export interface HeaderProps {
  className?: string;
} 