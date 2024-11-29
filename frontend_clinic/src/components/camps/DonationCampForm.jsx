import React from 'react'
import { motion } from 'framer-motion'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { MapPin, Calendar, Clock, Upload } from 'lucide-react'

function DonationCampForm() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white p-6 rounded-lg shadow-md"
    >
      <h2 className="text-xl font-semibold mb-6">Register New Camp</h2>
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
          <Label htmlFor="description">Description</Label>
          <textarea
            id="description"
            className="w-full min-h-[100px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            placeholder="Describe the donation camp and its objectives"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="date">Date</Label>
          <div className="relative">
            <Input
              id="date"
              type="date"
              className="pl-10"
            />
            <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="time">Time</Label>
          <div className="relative">
            <Input
              id="time"
              type="time"
              className="pl-10"
            />
            <Clock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="location">Google Maps Location</Label>
          <div className="relative">
            <Input
              id="location"
              type="text"
              placeholder="Paste Google Maps link"
              className="pl-10"
            />
            <MapPin className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="image">Camp Image</Label>
          <div className="border-2 border-dashed border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-center">
              <label htmlFor="image-upload" className="cursor-pointer">
                <div className="flex flex-col items-center">
                  <Upload className="h-8 w-8 text-gray-400 mb-2" />
                  <span className="text-sm text-gray-500">Upload camp image</span>
                  <span className="text-xs text-gray-400 mt-1">PNG, JPG up to 5MB</span>
                </div>
                <input
                  id="image-upload"
                  type="file"
                  accept="image/*"
                  className="hidden"
                />
              </label>
            </div>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-accent-blue text-white py-3 rounded-md font-semibold hover:bg-blue-600 transition-colors"
        >
          Register Camp
        </motion.button>
      </form>
    </motion.div>
  )
}

export default DonationCampForm