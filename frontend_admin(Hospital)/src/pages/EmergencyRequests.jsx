import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EmergencyAlert } from '../components/notifications/EmergencyAlert';
import { NotificationList } from '../components/notifications/NotificationList';
import { PageContainer } from '../components/ui/PageContainer';
import { AlertCircle, CheckCircle } from 'lucide-react';

const EmergencyRequests = () => {
  const [requests, setRequests] = useState([
    {
      id: 1,
      bloodType: 'O-',
      hospital: 'Central Hospital',
      urgency: 'High',
      status: 'Pending',
      timestamp: new Date().toLocaleString(),
    },
    {
      id: 2,
      bloodType: 'AB+',
      hospital: 'City Medical Center',
      urgency: 'Medium',
      status: 'Resolved',
      timestamp: new Date().toLocaleString(),
    },
  ]);

  const getStatusColor = (status) => {
    return status === 'Pending' ? 'text-red-500' : 'text-green-500';
  };

  return (
    <PageContainer title="Emergency Requests">
      <div className="mb-6">
        <EmergencyAlert />
      </div>

      <div className="grid gap-6">
        <AnimatePresence>
          {requests.map((request) => (
            <motion.div
              key={request.id}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 20, opacity: 0 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold flex items-center space-x-2">
                    <span>Blood Type: {request.bloodType}</span>
                    {request.urgency === 'High' && (
                      <AlertCircle className="w-5 h-5 text-red-500" />
                    )}
                  </h3>
                  <p className="text-gray-600">{request.hospital}</p>
                  <p className="text-sm text-gray-500">{request.timestamp}</p>
                </div>
                
                <div className={`flex items-center space-x-2 ${getStatusColor(request.status)}`}>
                  {request.status === 'Resolved' ? (
                    <CheckCircle className="w-6 h-6" />
                  ) : (
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      <AlertCircle className="w-6 h-6" />
                    </motion.div>
                  )}
                  <span className="font-medium">{request.status}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </PageContainer>
  );
};

export default EmergencyRequests;