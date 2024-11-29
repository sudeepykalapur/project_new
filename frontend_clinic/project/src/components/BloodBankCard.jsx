import React from 'react'
import { motion } from 'framer-motion'

function BloodBankCard({ bank, index }) {
  return (
    <motion.div
      key={bank.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-lg shadow-lg p-6"
    >
      <h3 className="text-xl font-semibold mb-2">{bank.name}</h3>
      <p className="text-gray-600 mb-4">Distance: {bank.distance}</p>
      <div className="space-y-2">
        {Object.entries(bank.availability).map(([type, units]) => (
          <div key={type} className="flex justify-between">
            <span>{type}</span>
            <span className="font-semibold">{units} units</span>
          </div>
        ))}
      </div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-4 w-full bg-accent-blue text-white py-2 rounded-lg font-semibold"
      >
        Request Blood
      </motion.button>
    </motion.div>
  )
}

export default BloodBankCard