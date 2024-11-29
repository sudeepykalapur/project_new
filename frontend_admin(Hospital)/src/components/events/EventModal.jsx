import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EventForm } from './EventForm';

export const EventModal = ({ isOpen, onClose, onSubmit }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
        >
          <EventForm onClose={onClose} onSubmit={onSubmit} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};