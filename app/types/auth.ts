export type UserRole = "employer" | "job_seeker";

export interface User {
  id: number;
  email: string;
  fullName: string;
  role: UserRole;
  gender: string;
  companyName?: string; 
  companyLogo?: string;
}

export interface LoginFormData {
  email: string;
  password: string;
}

export interface RegisterFormData {
  email: string;
  password: string;
  fullName: string;
  role: UserRole;
  companyName?: string;
  companyLogo?: string;
  gender: string;
} 