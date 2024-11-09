import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import categories from "@/app/data/index/job-categories";

const useCategoryAnimation = () => {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    cardsRef.current = cardsRef.current.slice(0, categories.length);

    gsap.set([titleRef.current, descriptionRef.current, buttonRef.current], {
      opacity: 0,
      y: 30,
    });

    gsap.set(cardsRef.current, {
      opacity: 0,
      y: 50,
      scale: 0.95,
    });

    const headerTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    headerTimeline
      .to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      })
      .to(
        descriptionRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.6"
      )
      .to(
        buttonRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.6"
      );

    cardsRef.current.forEach((card, index) => {
      gsap.to(card, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        delay: index * 0.1,
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return { titleRef, descriptionRef, buttonRef, cardsRef };
};

export default useCategoryAnimation;
