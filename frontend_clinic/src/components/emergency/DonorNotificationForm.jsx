import React from 'react'
import { motion } from 'framer-motion'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'

function DonorNotificationForm() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white p-6 rounded-lg shadow-md"
    >
      <h3 className="text-xl font-semibold mb-4">Notify Nearby Donors</h3>
      <form className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="bloodType">Required Blood Type</Label>
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
          <Label htmlFor="hospital">Hospital Name</Label>
          <Input
            id="hospital"
            type="text"
            placeholder="Enter hospital name"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="address">Hospital Address</Label>
          <Input
            id="address"
            type="text"
            placeholder="Enter hospital address"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="urgency">Urgency Level</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select urgency level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="high">High Priority</SelectItem>
              <SelectItem value="medium">Medium Priority</SelectItem>
              <SelectItem value="low">Low Priority</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Additional Message</Label>
          <textarea
            id="message"
            className="w-full min-h-[100px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            placeholder="Enter additional details or requirements"
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-red-600 text-white py-3 rounded-md font-semibold hover:bg-red-700 transition-colors"
        >
          Notify Donors
        </motion.button>
      </form>
    </motion.div>
  )
}

export default DonorNotificationForm