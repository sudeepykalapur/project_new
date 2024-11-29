import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { EventModal } from '../components/events/EventModal';
import { EventCard } from '../components/events/EventCard';
import { Toast } from '../components/ui/Toast';
import { PageContainer } from '../components/ui/PageContainer';

const DonationCamps = () => {
  const [showEventForm, setShowEventForm] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [events, setEvents] = useState([
    {
      id: 1,
      date: '2023-10-15',
      title: 'Community Blood Drive',
      location: 'Central Hospital',
      expectedDonors: 50,
      description: 'Join us for our monthly community blood drive.',
    },
    {
      id: 2,
      date: '2023-10-20',
      title: 'University Campus Drive',
      location: 'State University',
      expectedDonors: 75,
      description: 'Special blood donation event for university students and staff.',
    },
  ]);

  const handleCreateEvent = (newEvent) => {
    setEvents([...events, newEvent]);
    setShowEventForm(false);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  return (
    <PageContainer title="Donation Camps">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setShowEventForm(true)}
        className="bg-[#e63946] text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-2 mb-6"
      >
        <Calendar className="w-5 h-5" />
        <span>Create New Event</span>
      </motion.button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>

      <EventModal
        isOpen={showEventForm}
        onClose={() => setShowEventForm(false)}
        onSubmit={handleCreateEvent}
      />

      {showNotification && (
        <Toast
          title="Event Created"
          description="The new donation camp event has been successfully created."
          onClose={() => setShowNotification(false)}
        />
      )}
    </PageContainer>
  );
};

export default DonationCamps;