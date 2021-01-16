import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollIndicator() {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    gsap.from(element, {
      scrollTrigger: {
        trigger: ".fieldset-content",
        start: "top bottom",
        end: "bottom center",
        scrub: 1,
      },
      y: -50,
      opacity: 0,
    });
  }, []);

  return (
    <svg
      width="17"
      height="58"
      fill="none"
      className="scroll-indicator"
      ref={ref}
    >
      <path d="M8.065 39.333l-5.02 5.02 5.02 5.021 5.02-5.02-5.02-5.02z"></path>
      <path d="M8.065 44.379L5.59 46.854l2.475 2.474 2.475-2.474-2.475-2.475z"></path>
      <path d="M4.6 47.8l-1.5 1.5 5 5 5-5-1.5-1.5M8.1 4.2v30"></path>
    </svg>
  );
}
