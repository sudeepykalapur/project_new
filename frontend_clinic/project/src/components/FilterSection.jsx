import React from 'react'

function FilterSection({ selectedBloodType, setSelectedBloodType, urgency, setUrgency }) {
  return (
    <div className="mb-8 flex gap-4">
      <select
        value={selectedBloodType}
        onChange={(e) => setSelectedBloodType(e.target.value)}
        className="border border-gray-300 rounded-lg px-4 py-2 bg-white text-gray-700"
      >
        <option value="all">All Blood Types</option>
        <option value="A+">A+</option>
        <option value="A-">A-</option>
        <option value="B+">B+</option>
        <option value="B-">B-</option>
        <option value="O+">O+</option>
        <option value="O-">O-</option>
        <option value="AB+">AB+</option>
        <option value="AB-">AB-</option>
      </select>

      <select
        value={urgency}
        onChange={(e) => setUrgency(e.target.value)}
        className="border border-gray-300 rounded-lg px-4 py-2 bg-white text-gray-700"
      >
        <option value="all">All Urgency Levels</option>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
    </div>
  )
}

export default FilterSection