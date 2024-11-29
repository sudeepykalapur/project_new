import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, CheckCircle } from 'lucide-react';

const RequestCard = ({ request }) => {
  const getStatusColor = (status) => {
    return status === 'Pending' ? 'text-red-500' : 'text-green-500';
  };

  return (
    <motion.div
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
  );
};

export default RequestCard;