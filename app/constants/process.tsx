import { CheckCircle, Briefcase, FileText, UserPlus } from "lucide-react";

const JOB_STEPS = [
  {
    icon: <UserPlus className="w-12 h-12" />,
    title: "Create Account",
    description:
      "Begin your journey by creating your professional profile. It only takes a few minutes to open doors to countless opportunities.",
  },
  {
    icon: <FileText className="w-12 h-12" />,
    title: "Upload CV",
    description:
      "Showcase your skills and experience with a polished CV. Let your achievements speak for themselves.",
  },
  {
    icon: <Briefcase className="w-12 h-12" />,
    title: "Explore Jobs",
    description:
      "Explore tailored job listings that match your skills and career goals. Find roles that align with your career goals.",
  },
  {
    icon: <CheckCircle className="w-12 h-12" />,
    title: "Get Hired",
    description:
      "Apply with confidence and take the next step in your career. Your dream job is waiting for you.",
  },
];

export { JOB_STEPS };
