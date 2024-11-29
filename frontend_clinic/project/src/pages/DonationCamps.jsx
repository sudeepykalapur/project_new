import React from 'react'
import { motion } from 'framer-motion'
import DonationCampForm from '../components/camps/DonationCampForm'
import CampsList from '../components/camps/CampsList'

function DonationCamps() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-2xl font-bold mb-6">Blood Donation Camps</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <DonationCampForm />
          <CampsList />
        </div>
      </motion.div>
    </div>
  )
}

export default DonationCamps