import React from 'react';
import { motion } from 'framer-motion';
import { pageTransition } from '../../utils/animations';

export const PageContainer = ({ children, title }) => (
  <motion.div
    {...pageTransition}
    className="space-y-6"
  >
    <motion.h1
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="text-3xl font-bold"
    >
      {title}
    </motion.h1>
    {children}
  </motion.div>
);