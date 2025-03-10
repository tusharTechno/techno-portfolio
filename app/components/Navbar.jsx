"use client";
import Link from "next/link";
import React from "react";
import { motion } from "motion/react";

const containerVariants = {
  hidden: { y: -100 },
  visible: {
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.87, 0, 0.13, 1],
      staggerChildren: 0.5,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const Navbar = () => {
  return (
    <nav className="flex overflow-hidden z-20 bg-zinc-900 items-center justify-between w-full px-5 py-2.5">
      <Link href="/">Logo here</Link>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex items-center gap-5"
      >
        {["aboutus", "works"].map((link, index) => (
          <motion.div key={link + index} variants={childVariants}>
            <Link href={`/${link}`} className="text-base capitalize">
              {link}
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </nav>
  );
};

export default Navbar;
