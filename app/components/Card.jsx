"use client";
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import { useState } from "react";

const AnimatedCard = ({data}) => {
  const [isHovered, setIsHovered] = useState(false);


  const x = useMotionValue(0);
  const y = useMotionValue(0);


  const smoothX = useSpring(x, { stiffness: 100, damping: 20 });
  const smoothY = useSpring(y, { stiffness: 100, damping: 20 });


  const backgroundPosition = useMotionTemplate`radial-gradient(300px at ${smoothX}px ${smoothY}px, rgb(39, 39, 42), transparent)`;

  return (
    <motion.div
      className="relative w-full bg-zinc-900 px-5 py-5 rounded-lg border border-zinc-700 overflow-hidden group"
      onMouseMove={(event) => {
        const { left, top, width, height } = event.currentTarget.getBoundingClientRect();
        x.set(event.clientX - left);
        y.set(event.clientY - top);
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >


      <motion.div
        className="absolute  inset-0 w-full h-full transition-opacity duration-300 pointer-events-none"
        style={{
          background: isHovered ? backgroundPosition : "transparent",
          opacity: isHovered ? 1 : 0,
        }}
      />


      <h3 className="relative text-lg md:text-xl font-semibold text-white z-10">
        {data.title}
      </h3>
      
      <div className="relative flex flex-wrap gap-x-2 gap-y-3 text-sm items-start mt-3 z-10">
        {data.skills.map((tech, index) => (
          <p
            key={index}
            className="py-1 px-3 bg-zinc-800 border border-zinc-600 rounded-full text-white"
          >
            {tech}
          </p>
        ))}
      </div>
    </motion.div>
  );
};

export default AnimatedCard;
