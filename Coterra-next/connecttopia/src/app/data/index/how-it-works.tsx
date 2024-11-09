import { JobStep } from "@/app/types/index/intro";
import { CheckCircle } from "lucide-react";
import { Briefcase } from "lucide-react";
import { FileText, UserPlus } from "lucide-react";

const JOB_STEPS: JobStep[] = [
    {
      icon: <UserPlus    className="w-12 h-12 text-sky-400" />,
      title: "Create Account",
      description:
        "Don't wait any longer to find your ideal job. Sign up now and take the first step.",
    },
    {
      icon: <FileText className="w-12 h-12 text-sky-400" />,
      title: "Upload CV",
      description:
        "Don't wait any longer to find your ideal job. Sign up now and take the first step.",
    },
    {
      icon: <Briefcase className="w-12 h-12 text-sky-400" />,
      title: "Explore Jobs",
      description:
        "Don't wait any longer to find your ideal job. Sign up now and take the first step.",
    },
    {
      icon: <CheckCircle className="w-12 h-12 text-sky-400" />,
      title: "Apply & Get Hired",
      description:
        "Don't wait any longer to find your ideal job. Sign up now and take the first step.",
    },
  ];

export { JOB_STEPS };
