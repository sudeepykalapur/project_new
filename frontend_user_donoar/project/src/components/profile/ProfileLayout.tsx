import { motion } from "framer-motion"
import { ProfileInfo } from "./ProfileInfo"
import { DonationHistory } from "./DonationHistory"
import { ImpactReport } from "./ImpactReport"
import { DonationTracker } from "./DonationTracker"

export function ProfileLayout() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-gray-900 mb-8"
      >
        My Health Profile
      </motion.h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-6">
          <ProfileInfo />
          <DonationTracker />
        </div>
        <div className="space-y-6">
          <DonationHistory />
          <ImpactReport />
        </div>
      </div>
    </div>
  )
}