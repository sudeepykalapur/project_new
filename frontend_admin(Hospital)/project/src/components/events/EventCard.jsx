import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Users, Calendar } from 'lucide-react';

export const EventCard = ({ event }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -5 }}
      className="bg-white p-6 rounded-lg shadow-lg"
    >
      <div className="border-b border-gray-200 pb-4 mb-4">
        <h3 className="text-xl font-semibold text-[#e63946]">{event.title}</h3>
        <div className="flex items-center space-x-2 text-gray-500 mt-2">
          <Calendar className="w-4 h-4" />
          <span>{event.date}</span>
        </div>
      </div>
      
      <div className="space-y-3">
        <div className="flex items-center space-x-2 text-gray-600">
          <MapPin className="w-4 h-4" />
          <span>{event.location}</span>
        </div>
        
        <div className="flex items-center space-x-2 text-gray-600">
          <Users className="w-4 h-4" />
          <span>Expected Donors: {event.expectedDonors}</span>
        </div>
        
        {event.description && (
          <p className="text-gray-600 text-sm mt-2">{event.description}</p>
        )}
      </div>
    </motion.div>
  );
};