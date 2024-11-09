import { JOB_STEPS } from "@/app/data/index/how-it-works";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function useIntroAnimation() {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const stepsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.set([titleRef.current, descriptionRef.current], {
      opacity: 0,
      y: 20,
    });

    stepsRef.current.forEach((step) => {
      gsap.set(step, {
        opacity: 0,
        y: 30,
      });
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 80%",
      },
    });

    tl.to([titleRef.current, descriptionRef.current], {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.2,
    });

    stepsRef.current.forEach((step, index) => {
      gsap.to(step, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        delay: 0.2 * index,
        scrollTrigger: {
          trigger: step,
          start: "top 85%",
        },
      });
    });
  }, []);

  return {
    titleRef,
    descriptionRef,
    stepsRef,
  };
}
