import { Users, Building2, Trophy } from "lucide-react";

export const SUGGESTED_JOBS = [
  "Management",
  "Sales", 
  "Digital Marketing",
  "Programming",
  "Data Science",
  "UI/UX Design",
  "Finance",
] as const;

export const STATS = [
  { icon: Users, label: "Active Users", value: "10K+" },
  { icon: Building2, label: "Companies", value: "500+" },
  { icon: Trophy, label: "Success Stories", value: "2K+" },
] as const; 