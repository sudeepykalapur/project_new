import React from 'react';
import { motion } from 'framer-motion';
import { cardAnimation } from '../../utils/animations';

export const Card = ({ children, className = '' }) => (
  <motion.div
    {...cardAnimation}
    className={`bg-white p-6 rounded-lg shadow-lg ${className}`}
  >
    {children}
  </motion.div>
);