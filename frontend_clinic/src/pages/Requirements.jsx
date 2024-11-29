import React from 'react'
import { motion } from 'framer-motion'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/Tabs'
import BloodRequirementForm from '../components/forms/BloodRequirementForm'
import DonationCampForm from '../components/forms/DonationCampForm'

function Requirements() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl mx-auto"
      >
        <Tabs defaultValue="requirements" className="w-full">
          <TabsList className="w-full">
            <TabsTrigger value="requirements" className="flex-1">Blood Requirements</TabsTrigger>
            <TabsTrigger value="camps" className="flex-1">Donation Camps</TabsTrigger>
          </TabsList>
          <TabsContent value="requirements">
            <BloodRequirementForm />
          </TabsContent>
          <TabsContent value="camps">
            <DonationCampForm />
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  )
}

export default Requirements