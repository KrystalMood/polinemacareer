import { JOB_STEPS } from "@/app/data/index/intro";

import { useEffect } from "react";

import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const useIntroAnimation = () => {
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

  return { titleRef, descriptionRef, stepsRef };
};

export default useIntroAnimation;
