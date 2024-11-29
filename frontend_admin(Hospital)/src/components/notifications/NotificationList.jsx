import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

export const NotificationList = ({ donors }) => {
  return (
    <div className="space-y-2 mt-4">
      {donors.map((donor, index) => (
        <motion.div
          key={donor.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white rounded-lg p-3 shadow flex items-center justify-between"
        >
          <span className="font-medium">{donor.name}</span>
          <div className="flex items-center text-gray-500 text-sm">
            <MapPin className="w-4 h-4 mr-1" />
            {donor.distance}
          </div>
        </motion.div>
      ))}
    </div>
  );
};