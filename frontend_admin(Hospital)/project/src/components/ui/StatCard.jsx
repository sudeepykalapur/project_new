import React from 'react';
import { motion } from 'framer-motion';

const StatCard = ({ icon: Icon, title, value, color }) => (
  <motion.div
    initial={{ scale: 0.9, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    className="bg-white p-6 rounded-lg shadow-lg"
  >
    <div className="flex items-center justify-between">
      <div>
        <p className="text-gray-500 text-sm">{title}</p>
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold"
        >
          {value}
        </motion.h3>
      </div>
      <Icon className={`w-8 h-8 ${color}`} />
    </div>
  </motion.div>
);