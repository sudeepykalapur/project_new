import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Calendar, Clock } from 'lucide-react'

const camps = [
  {
    id: 1,
    name: 'City Blood Drive',
    date: '2024-02-15',
    time: '09:00',
    location: 'Central Community Center',
    image: 'https://example.com/placeholder.jpg'
  },
  {
    id: 2,
    name: 'University Donation Camp',
    date: '2024-02-20',
    time: '10:00',
    location: 'University Medical Center',
    image: 'https://example.com/placeholder.jpg'
  }
]

function CampsList() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold mb-4">Upcoming Camps</h2>
      {camps.map((camp, index) => (
        <motion.div
          key={camp.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white p-4 rounded-lg shadow-md"
        >
          <div className="aspect-video bg-gray-100 rounded-md mb-3">
            {/* Camp image placeholder */}
            <div className="h-full flex items-center justify-center text-gray-400">
              Camp Image
            </div>
          </div>
          <h3 className="font-semibold mb-2">{camp.name}</h3>
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              <span>{camp.date}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              <span>{camp.time}</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-2" />
              <span>{camp.location}</span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default CampsList