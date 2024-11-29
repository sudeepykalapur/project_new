import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Users } from 'lucide-react';

const EventCard = ({ event }) => (
  <motion.div
    key={event.id}
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    whileHover={{ y: -5 }}
    className="bg-white p-6 rounded-lg shadow-lg"
  >
    <div className="border-b border-gray-200 pb-4 mb-4">
      <h3 className="text-xl font-semibold text-[#e63946]">
        {event.title}
      </h3>
      <p className="text-gray-500">{event.date}</p>
    </div>
    
    <div className="space-y-3">
      <div className="flex items-center space-x-2 text-gray-600">
        <MapPin className="w-5 h-5" />
        <span>{event.location}</span>
      </div>
      
      <div className="flex items-center space-x-2 text-gray-600">
        <Users className="w-5 h-5" />
        <span>Expected Donors: {event.expectedDonors}</span>
      </div>
    </div>
  </motion.div>
);

export default EventCard;