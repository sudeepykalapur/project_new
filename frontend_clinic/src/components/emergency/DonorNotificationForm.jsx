import React from 'react'
import { motion } from 'framer-motion'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { useState } from 'react';
import { emergencyService } from '../../services/emergencyService';
// import { useToast } from '../ui/use-toast';

function DonorNotificationForm() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    bloodType: '',
    units: '',
    hospital: '',
    address: '',
    urgency: '',
    message: ''
  });
  // const { toast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emergencyService.notifyDonors(formData);
      // toast({
      //   title: 'Success',
      //   description: 'Emergency notification sent to nearby donors'
      // });
      setFormData({
        bloodType: '',
        units: '',
        hospital: '',
        address: '',
        urgency: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: error.message,
        variant: 'destructive'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white p-6 rounded-lg shadow-md"
    >
      <h3 className="text-xl font-semibold mb-4">Notify Nearby Donors</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="bloodType">Required Blood Type</Label>
          <Select>
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
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="hospital">Hospital Name</Label>
          <Input
            id="hospital"
            type="text"
            placeholder="Enter hospital name"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="address">Hospital Address</Label>
          <Input
            id="address"
            type="text"
            placeholder="Enter hospital address"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="urgency">Urgency Level</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select urgency level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="high">High Priority</SelectItem>
              <SelectItem value="medium">Medium Priority</SelectItem>
              <SelectItem value="low">Low Priority</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Additional Message</Label>
          <textarea
            id="message"
            className="w-full min-h-[100px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            placeholder="Enter additional details or requirements"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 disabled:opacity-50"
        >
          {loading ? 'Sending...' : 'Send Emergency Request'}
        </button>
      </form>
    </motion.div>
  )
}

export default DonorNotificationForm