import React from 'react'
import { motion } from 'framer-motion'

function EmergencyRequestCard({ request }) {
  const isHighPriority = request.priority === 'high'
  
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`p-6 rounded-lg shadow-md mb-4 border-2 ${
        isHighPriority ? 'border-red-500' : 'border-accent-blue'
      }`}
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold">{request.bloodType} Blood Required</h3>
          <p className="text-gray-600">Units needed: {request.units}</p>
          <p className="text-gray-600">Hospital: {request.hospital}</p>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm ${
          isHighPriority ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'
        }`}>
          {isHighPriority ? 'High Priority' : 'Normal Priority'}
        </span>
      </div>
      
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-4 w-full bg-accent-blue text-white py-2 rounded-md font-semibold hover:bg-blue-600 transition-colors"
      >
        Notify Donors
      </motion.button>
    </motion.div>
  )
}

export default EmergencyRequestCard