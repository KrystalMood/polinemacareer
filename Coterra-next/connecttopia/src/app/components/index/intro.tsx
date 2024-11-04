import React, { useEffect, useRef } from "react";
import { Briefcase, CheckCircle, FileText, UserPlus } from "lucide-react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

interface JobStep {
  icon: JSX.Element;
  title: string;
  description: string;
}

const JOB_STEPS: JobStep[] = [
  {
    icon: <UserPlus className="w-12 h-12 text-sky-400" />,
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

export default function IndexIntro() {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    stepsRef.current = stepsRef.current.slice(0, JOB_STEPS.length);

    gsap.set(titleRef.current, {
      opacity: 0,
      y: 50,
    });

    gsap.set(descriptionRef.current, {
      opacity: 0,
      y: 50,
    });

    gsap.set(stepsRef.current, {
      opacity: 0,
      y: 50,
    });

    // animasi judul
    gsap.to(titleRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    // animasi deskripsi
    gsap.to(descriptionRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: descriptionRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    // Animasi steps
    stepsRef.current.forEach((step, index) => {
      gsap.to(step, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: step,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        delay: index * 0.2,
      });
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="h-[90vh] bg-[#1C2056] py-16 px-4 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="flex flex-col justify-center">
            <h1
              ref={titleRef}
              className="text-white text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 lg:mb-0 max-w-[30rem]"
            >
              Mulai Karirmu dalam{" "}
              <span className="text-yellow-400">4 Tahap</span>
            </h1>
          </div>
          <div className="flex items-center">
            <p
              ref={descriptionRef}
              className="text-white/90 italic text-base md:text-lg font-light leading-relaxed"
            >

            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-16">
          {JOB_STEPS.map((step, index) => (
            <div
              key={step.title}
             ref={(el: HTMLDivElement | null) => (stepsRef.current[index] = el)}
              className="group bg-sky-900/50 rounded-lg p-6 transition-all duration-300 hover:bg-sky-900/70 hover:transform hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="inline-block">{step.icon}</span>
                  <span className="flex items-center justify-center w-8 h-8 text-sm font-medium text-sky-950 bg-sky-400 rounded-full">
                    {index + 1}
                  </span>
                </div>
                <div className="space-y-2">
                  <h2 className="font-bold text-xl text-white">{step.title}</h2>
                  <p className="text-sky-200 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
