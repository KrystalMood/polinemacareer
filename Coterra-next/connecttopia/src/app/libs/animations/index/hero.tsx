import { useEffect, useRef } from "react";
import gsap from "gsap";

export function useHeroAnimation() {
  const titleRef = useRef(null);
  const badgeRef = useRef(null);
  const descriptionRef = useRef(null);
  const searchRef = useRef(null);
  const buttonRef = useRef(null);
  const suggestionsRef = useRef(null);
  const imageRef = useRef(null);
  const backgroundBlobRef1 = useRef(null);
  const backgroundBlobRef2 = useRef(null);

  useEffect(() => {
    gsap.set(
      [
        titleRef.current,
        badgeRef.current,
        descriptionRef.current,
        searchRef.current,
        buttonRef.current,
        suggestionsRef.current,
      ],
      {
        opacity: 0,
        y: 20,
      }
    );

    gsap.set(imageRef.current, {
      opacity: 0,
      x: 50,
    });

    gsap.set([backgroundBlobRef1.current, backgroundBlobRef2.current], {
      scale: 0,
      opacity: 0,
    });

    // timeline buat animasi
    const tl = gsap.timeline({
      defaults: {
        ease: "power3.out",
      },
    });

    // animasi background blobs
    tl.to(
      [backgroundBlobRef1.current, backgroundBlobRef2.current],
      {
        scale: 1,
        opacity: 1,
        duration: 1.5,
        stagger: 0.2,
      },
      0
    );

    // animasi content
    tl.to(
      titleRef.current,
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
      },
      0.5
    )
      .to(
        badgeRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
        },
        "-=0.6"
      )
      .to(
        descriptionRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
        },
        "-=0.6"
      )
      .to(
        searchRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
        },
        "-=0.6"
      )
      .to(
        buttonRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
        },
        "-=0.6"
      )
      .to(
        suggestionsRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
        },
        "-=0.6"
      );

    // animasi image
    tl.to(
      imageRef.current,
      {
        opacity: 1,
        x: 0,
        duration: 1,
      },
      "-=1"
    );

    // animasi continuous background blobs
    gsap.to([backgroundBlobRef1.current, backgroundBlobRef2.current], {
      rotation: 360,
      duration: 20,
      repeat: -1,
      ease: "none",
    });
  }, []);

  return {
    titleRef,
    badgeRef,
    descriptionRef,
    searchRef,
    buttonRef,
    suggestionsRef,
    imageRef,
    backgroundBlobRef1,
    backgroundBlobRef2,
  };
}