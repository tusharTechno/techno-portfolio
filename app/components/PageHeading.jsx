'use client'
import React from "react";
import { motion } from "motion/react";
const PageHeading = ({ text, colorText }) => {
  return (
    <motion.h1
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.5,
        ease: [0.87, 0, 0.13, 1],
        staggerChildren: 0.5,
      }}
      className="text-3xl text-center md:text-6xl font-bold mt-5"
    >
      {text}
      <span className="text-gradient"> {colorText}</span>
    </motion.h1>
  );
};

export default PageHeading;
