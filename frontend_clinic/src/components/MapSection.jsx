import React from 'react'
import { motion } from 'framer-motion'

function MapSection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-gray-100 h-64 rounded-lg mb-8"
    >
      <div className="h-full flex items-center justify-center">
        <p className="text-gray-500">Map Component Placeholder</p>
      </div>
    </motion.div>
  )
}

export default MapSection