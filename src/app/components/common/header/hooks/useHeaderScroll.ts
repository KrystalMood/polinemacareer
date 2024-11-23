import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const useHeaderScroll = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const header = document.querySelector("header");
    const menuItems = document.querySelectorAll("nav a");

    // Header scroll animation
    gsap.to(header, {
      scrollTrigger: {
        start: "top top",
        end: 99999,
        onUpdate: (self) => {
          if (self.progress > 0) {
            gsap.to(header, {
              backgroundColor: "rgba(255, 255, 255, 0.95)",
              boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
              backdropFilter: "blur(8px)",
              duration: 0.3,
              ease: "power2.out",
            });
          } else {
            gsap.to(header, {
              backgroundColor: "transparent",
              boxShadow: "none",
              backdropFilter: "blur(0px)",
              duration: 0.5,
              ease: "power2.out",
            });
          }
        },
      },
    });

    // Menu items hover animation
    menuItems.forEach((item) => {
      item.addEventListener("mouseenter", () => {
        gsap.to(item, {
          scale: 1.1,
          y: -2,
          duration: 0.3,
          ease: "power2.out",
        });
      });

      item.addEventListener("mouseleave", () => {
        gsap.to(item, {
          scale: 1,
          y: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      });
    });

    // Cleanup
    return () => {
      menuItems.forEach((item) => {
        item.removeEventListener("mouseenter", () => {});
        item.removeEventListener("mouseleave", () => {});
      });
    };
  }, []);
}; 