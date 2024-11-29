import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { requirementService } from '../../services/requirementService';

function BloodRequirementForm() {
  const [formData, setFormData] = useState({
    bloodType: '',
    units: '',
    requiredBy: '',
    hospital: '',
    contactPerson: '',
    contactNumber: '',
    additionalNotes: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await requirementService.createRequirement(formData);
      // Reset form or show success message
      setFormData({
        bloodType: '',
        units: '',
        requiredBy: '',
        hospital: '',
        contactPerson: '',
        contactNumber: '',
        additionalNotes: '',
      });
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-semibold mb-6">Blood Requirement Form</h2>
      {error && (
        <div className="bg-red-100 text-red-700 p-3 rounded-md mb-4">
          {error}
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="bloodType">Blood Type</Label>
          <Select
            id="bloodType"
            value={formData.bloodType}
            onValueChange={(value) => setFormData(prev => ({ ...prev, bloodType: value }))}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select blood type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="A+">A+</SelectItem>
              <SelectItem value="A-">A-</SelectItem>
              <SelectItem value="B+">B+</SelectItem>
              <SelectItem value="B-">B-</SelectItem>
              <SelectItem value="O+">O+</SelectItem>
              <SelectItem value="O-">O-</SelectItem>
              <SelectItem value="AB+">AB+</SelectItem>
              <SelectItem value="AB-">AB-</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="units">Units Required</Label>
          <Input
            id="units"
            type="number"
            min="1"
            placeholder="Enter number of units"
            value={formData.units}
            onChange={handleChange}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="requiredBy">Required By</Label>
          <Input
            id="requiredBy"
            type="date"
            value={formData.requiredBy}
            onChange={handleChange}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="hospital">Hospital Name</Label>
          <Input
            id="hospital"
            type="text"
            placeholder="Enter hospital name"
            value={formData.hospital}
            onChange={handleChange}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="contactPerson">Contact Person</Label>
          <Input
            id="contactPerson"
            type="text"
            placeholder="Enter contact person name"
            value={formData.contactPerson}
            onChange={handleChange}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="contactNumber">Contact Number</Label>
          <Input
            id="contactNumber"
            type="tel"
            placeholder="Enter contact number"
            value={formData.contactNumber}
            onChange={handleChange}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="additionalNotes">Additional Notes</Label>
          <textarea
            id="additionalNotes"
            className="w-full min-h-[100px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            placeholder="Enter any additional requirements or notes"
            value={formData.additionalNotes}
            onChange={handleChange}
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          disabled={loading}
          className="w-full bg-accent-blue text-white py-3 rounded-md font-semibold hover:bg-blue-600 transition-colors disabled:opacity-50"
        >
          {loading ? 'Submitting...' : 'Submit Requirement'}
        </motion.button>
      </form>
    </motion.div>
  );
}

export default BloodRequirementForm;