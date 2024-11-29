import React from 'react';
import { motion } from 'framer-motion';

const PageTitle = ({ children }) => (
  <motion.h1
    initial={{ y: -20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    className="text-3xl font-bold mb-6"
  >
    {children}
  </motion.h1>
);

export default PageTitle;