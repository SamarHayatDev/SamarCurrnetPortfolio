// components/AnimatedIcon.jsx
"use client";
import React from "react";
import { motion } from "framer-motion"; // Importing Framer Motion

export const AnimatedIcon = ({ children, whileHover, whileTap }: any) => {
  return (
    <motion.div whileHover={whileHover} whileTap={whileTap}>
      {children}
    </motion.div>
  );
};
