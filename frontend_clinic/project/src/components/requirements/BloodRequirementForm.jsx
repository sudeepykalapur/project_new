import React from 'react'
import { motion } from 'framer-motion'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'

function BloodRequirementForm() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
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
          <Label htmlFor="requiredBy">Required By</Label>
          <Input
            id="requiredBy"
            type="date"
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
          <Label htmlFor="contactPerson">Contact Person</Label>
          <Input
            id="contactPerson"
            type="text"
            placeholder="Enter contact person name"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="contactNumber">Contact Number</Label>
          <Input
            id="contactNumber"
            type="tel"
            placeholder="Enter contact number"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="additionalNotes">Additional Notes</Label>
          <textarea
            id="additionalNotes"
            className="w-full min-h-[100px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            placeholder="Enter any additional requirements or notes"
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-accent-blue text-white py-3 rounded-md font-semibold hover:bg-blue-600 transition-colors"
        >
          Submit Requirement
        </motion.button>
      </form>
    </motion.div>
  )
}

export default BloodRequirementForm