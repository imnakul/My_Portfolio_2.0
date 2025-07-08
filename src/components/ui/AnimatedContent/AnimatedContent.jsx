/*
  Installed from https://reactbits.dev/tailwind/
*/

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";


const AnimatedContent = ({
  children,
  distance = 100,
  direction = "vertical",
  reverse = false,
  initialOpacity = 0,
  animateOpacity = true,
  scale = 1,
  threshold = 0.1,
  delay = 0,
  duration = 0.6, // seconds
}) => {
  const [inView, setInView] = useState(false);
  const ref = useRef();

  useEffect(() => {
    if (!ref.current) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.unobserve(ref.current);
          setTimeout(() => setInView(true), delay);
        }
      },
      { threshold }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, delay]);

  const axis = direction === "vertical" ? "Y" : "X";
  const fromValue = reverse ? -distance : distance;

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: animateOpacity ? initialOpacity : 1,
        scale,
        ["translate" + axis]: fromValue,
      }}
      animate={inView ? {
        opacity: 1,
        scale: 1,
        ["translate" + axis]: 0,
      } : {}}
      transition={{
        type: "spring",
        stiffness: 50,
        damping: 25,
        duration,
        delay: delay / 1000,
      }}
      data-oid="49yh:.3"
    >
      {children}
    </motion.div>
  );
};

export default AnimatedContent;
