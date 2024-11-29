import React from 'react'
import { motion } from 'framer-motion'
import { Label } from '../ui/label'
import { Input } from '../ui/input'

function DonationCampForm() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-semibold mb-6">Register Donation Camp</h2>
      <form className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="campName">Camp Name</Label>
          <Input
            id="campName"
            type="text"
            placeholder="Enter camp name"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="location">Location</Label>
          <Input
            id="location"
            type="text"
            placeholder="Enter location"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="campDate">Date</Label>
          <Input
            id="campDate"
            type="date"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="capacity">Expected Capacity</Label>
          <Input
            id="capacity"
            type="number"
            min="1"
            placeholder="Enter expected capacity"
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-accent-blue text-white py-2 rounded-md font-semibold hover:bg-blue-600 transition-colors"
        >
          Register Camp
        </motion.button>
      </form>
    </motion.div>
  )
}

export default DonationCampForm