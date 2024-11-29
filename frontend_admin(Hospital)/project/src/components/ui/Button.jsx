import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, icon: Icon, onClick, className = '' }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className={`bg-[#e63946] text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-2 ${className}`}
  >
    {Icon && <Icon className="w-5 h-5" />}
    <span>{children}</span>
  </motion.button>
);

export default Button;