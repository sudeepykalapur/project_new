import React from 'react'
import { motion } from 'framer-motion'

function EmergencyMap() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full h-[300px] bg-gray-100 rounded-lg mb-6 overflow-hidden"
    >
      <div className="h-full flex items-center justify-center">
        <div className="text-gray-500">
          <p>Interactive Map Component</p>
          <p className="text-sm">Showing donors within 10km radius</p>
        </div>
      </div>
    </motion.div>
  )
}

export default EmergencyMap