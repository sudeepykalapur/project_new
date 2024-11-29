import React from 'react'
import { motion } from 'framer-motion'

function EmergencyStats() {
  const stats = [
    { label: 'Available Donors', value: '24' },
    { label: 'Avg. Response Time', value: '15 mins' },
    { label: 'Success Rate', value: '92%' }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="grid grid-cols-3 gap-4 mb-6"
    >
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white p-4 rounded-lg shadow-sm text-center"
        >
          <p className="text-2xl font-bold text-accent-blue">{stat.value}</p>
          <p className="text-sm text-gray-600">{stat.label}</p>
        </div>
      ))}
    </motion.div>
  )
}

export default EmergencyStats