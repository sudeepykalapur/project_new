import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, MapPin, X } from 'lucide-react';
import { Card } from '../ui/Card';
import { Toast } from '../ui/Toast';

export const EmergencyAlert = () => {
  const [showNotification, setShowNotification] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmergencyAlert = async () => {
    setLoading(true);
    // Simulate API call to fetch nearby donors
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Mock nearby donors data
    const nearbyDonors = [
      { id: 1, name: 'John Doe', distance: '2.5km' },
      { id: 2, name: 'Jane Smith', distance: '4.2km' },
      { id: 3, name: 'Mike Johnson', distance: '6.8km' },
    ];

    setShowNotification(true);
    setLoading(false);
  };

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative bg-[#e63946] text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-2"
        onClick={sendEmergencyAlert}
        disabled={loading}
      >
        <Bell className="w-5 h-5" />
        <span>{loading ? 'Sending Alert...' : 'Send Emergency Alert'}</span>
        {loading && (
          <motion.div
            className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [1, 0.5, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
        )}
      </motion.button>

      <AnimatePresence>
        {showNotification && (
          <Toast
            title="Emergency Alert Sent!"
            description="Alert has been sent to 10 nearby donors within 10km radius."
            onClose={() => setShowNotification(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};