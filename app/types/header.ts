export interface UserData {
  id: number;
  email: string;
  fullName: string;
  role: "job_seeker" | "employer";
}

export interface HeaderProps {
  className?: string;
} 