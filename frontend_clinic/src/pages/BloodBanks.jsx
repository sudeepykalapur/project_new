import React, { useState } from 'react'
import MapSection from '../components/MapSection'
import FilterSection from '../components/FilterSection'
import BloodBankCard from '../components/BloodBankCard'
import { bloodBanks } from '../data/bloodBanks'

function BloodBanks() {
  const [selectedBloodType, setSelectedBloodType] = useState('all')
  const [urgency, setUrgency] = useState('all')

  return (
    <div className="container mx-auto px-4 py-8">
      <MapSection />
      <FilterSection
        selectedBloodType={selectedBloodType}
        setSelectedBloodType={setSelectedBloodType}
        urgency={urgency}
        setUrgency={setUrgency}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bloodBanks.map((bank, index) => (
          <BloodBankCard key={bank.id} bank={bank} index={index} />
        ))}
      </div>
    </div>
  )
}

export default BloodBanks