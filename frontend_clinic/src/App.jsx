import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import BloodBanks from './pages/BloodBanks'
import BloodRequirements from './pages/BloodRequirements'
import DonationCamps from './pages/DonationCamps'
import Emergency from './pages/Emergency'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blood-banks" element={<BloodBanks />} />
        <Route path="/requirements" element={<BloodRequirements />} />
        <Route path="/donation-camps" element={<DonationCamps />} />
        <Route path="/emergency" element={<Emergency />} />
      </Routes>
    </div>
  )
}

export default App