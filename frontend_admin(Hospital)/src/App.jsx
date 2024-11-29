import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import StockManagement from './pages/StockManagement';
import DonationCamps from './pages/DonationCamps';
import EmergencyRequests from './pages/EmergencyRequests';

function App() {
  return (
    <Router>
      <Layout>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/stock" element={<StockManagement />} />
            <Route path="/camps" element={<DonationCamps />} />
            <Route path="/emergency" element={<EmergencyRequests />} />
          </Routes>
        </AnimatePresence>
      </Layout>
    </Router>
  );
}

export default App;