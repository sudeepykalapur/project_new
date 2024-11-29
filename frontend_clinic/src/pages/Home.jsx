import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()

  const features = [
    {
      title: "Quick Access",
      description: "Find blood banks near you within seconds",
      icon: "🔍"
    },
    {
      title: "Real-time Updates",
      description: "Live blood stock availability information",
      icon: "🔄"
    },
    {
      title: "Emergency Support",
      description: "24/7 priority request handling",
      icon: "🚑"
    }
  ]

  return (
    <div>
      <div className="bg-gradient-to-b from-hero-blue to-white">
        <div className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Streamline Blood Management for Your Clinic
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Connect with blood banks, manage inventory, and save lives efficiently.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-accent-blue text-white px-8 py-4 rounded-lg text-lg font-semibold"
              onClick={() => navigate('/blood-banks')}
            >
              Get Started
            </motion.button>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home