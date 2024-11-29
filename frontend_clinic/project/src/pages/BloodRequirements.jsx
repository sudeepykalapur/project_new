import React from 'react'
import { motion } from 'framer-motion'
import BloodRequirementForm from '../components/requirements/BloodRequirementForm'

function BloodRequirements() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl mx-auto"
      >
        <h1 className="text-2xl font-bold mb-6">Blood Requirements</h1>
        <BloodRequirementForm />
      </motion.div>
    </div>
  )
}

export default BloodRequirements