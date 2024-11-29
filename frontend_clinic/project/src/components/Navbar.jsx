import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-white shadow-sm"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-accent-blue">
            BloodCare
          </Link>
          <div className="space-x-6">
            <Link to="/" className="text-gray-600 hover:text-accent-blue transition-colors">
              Home
            </Link>
            <Link to="/blood-banks" className="text-gray-600 hover:text-accent-blue transition-colors">
              Blood Banks
            </Link>
            <Link to="/requirements" className="text-gray-600 hover:text-accent-blue transition-colors">
              Requirements
            </Link>
            <Link to="/donation-camps" className="text-gray-600 hover:text-accent-blue transition-colors">
              Donation Camps
            </Link>
            <Link to="/emergency" className="text-gray-600 hover:text-accent-blue transition-colors">
              Emergency
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar