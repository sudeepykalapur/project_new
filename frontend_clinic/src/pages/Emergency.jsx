import React from 'react'
import { motion } from 'framer-motion'
import EmergencyRequestCard from '../components/emergency/EmergencyRequestCard'
import EmergencyMap from '../components/emergency/EmergencyMap'
import DonorNotificationForm from '../components/emergency/DonorNotificationForm'
import EmergencyStats from '../components/emergency/EmergencyStats'

const emergencyRequests = [
  {
    id: 1,
    bloodType: 'O+',
    units: 3,
    hospital: 'City General Hospital',
    priority: 'high'
  },
  {
    id: 2,
    bloodType: 'A-',
    units: 2,
    hospital: 'St. Mary\'s Medical Center',
    priority: 'normal'
  }
]

function Emergency() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h1 className="text-3xl font-bold mb-6">Emergency Requests</h1>
          <EmergencyStats />
          <div className="space-y-4">
            {emergencyRequests.map((request) => (
              <EmergencyRequestCard key={request.id} request={request} />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold mb-6">Notify Nearby Donors</h2>
          <EmergencyMap />
          <DonorNotificationForm />
        </motion.div>
      </div>
    </div>
  )
}

export default Emergency