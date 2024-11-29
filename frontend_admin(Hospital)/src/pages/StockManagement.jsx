import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';

const bloodTypes = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

const StockManagement = () => {
  const [stocks, setStocks] = useState(
    bloodTypes.map(type => ({
      type,
      units: Math.floor(Math.random() * 100),
      lastUpdated: new Date().toLocaleDateString(),
    }))
  );

  const [showModal, setShowModal] = useState(false);
  const [selectedStock, setSelectedStock] = useState(null);

  const isLowStock = (units) => units < 20;

  return (
    <div className="space-y-6">
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-3xl font-bold"
      >
        Blood Stock Management
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-white rounded-lg shadow-lg overflow-hidden"
      >
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Blood Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Units Available
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Last Updated
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {stocks.map((stock, index) => (
              <motion.tr
                key={stock.type}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
                onClick={() => {
                  setSelectedStock(stock);
                  setShowModal(true);
                }}
                whileHover={{ scale: 1.01 }}
                style={{ cursor: 'pointer' }}
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {stock.type}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{stock.units} units</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">
                    {stock.lastUpdated}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {isLowStock(stock.units) && (
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                      className="flex items-center text-red-600"
                    >
                      <AlertTriangle className="w-5 h-5 mr-2" />
                      Low Stock
                    </motion.div>
                  )}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              className="bg-white p-6 rounded-lg w-96"
            >
              <h2 className="text-xl font-bold mb-4">
                Update {selectedStock?.type} Stock
              </h2>
              {/* Add form controls here */}
              <button
                onClick={() => setShowModal(false)}
                className="mt-4 bg-[#e63946] text-white px-4 py-2 rounded"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default StockManagement;