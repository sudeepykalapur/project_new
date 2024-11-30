import { motion } from "framer-motion"
import { CampsList } from "./CampsList"
import { SearchCamps } from "./SearchCamps"
import { CampsFilter } from "./CampsFilter"

export function CampsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Blood Donation Camps</h1>
        <p className="text-gray-600 text-lg">
          Find and register for upcoming blood donation camps in your area.
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-6 mb-8">
          <SearchCamps />
          <CampsFilter />
        </div>
        <CampsList />
      </div>
    </div>
  )
}