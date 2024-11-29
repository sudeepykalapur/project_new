import React from 'react'
import { motion } from 'framer-motion'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'

function BloodRequirementForm() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-semibold mb-6">Blood Requirement Form</h2>
      <form className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="bloodType">Blood Type</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select blood type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="A+">A+</SelectItem>
              <SelectItem value="A-">A-</SelectItem>
              <SelectItem value="B+">B+</SelectItem>
              <SelectItem value="B-">B-</SelectItem>
              <SelectItem value="O+">O+</SelectItem>
              <SelectItem value="O-">O-</SelectItem>
              <SelectItem value="AB+">AB+</SelectItem>
              <SelectItem value="AB-">AB-</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="units">Units Required</Label>
          <Input
            id="units"
            type="number"
            min="1"
            placeholder="Enter number of units"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="date">Required By Date</Label>
          <Input
            id="date"
            type="date"
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-accent-blue text-white py-2 rounded-md font-semibold hover:bg-blue-600 transition-colors"
        >
          Submit Requirement
        </motion.button>
      </form>
    </motion.div>
  )
}

export default BloodRequirementForm