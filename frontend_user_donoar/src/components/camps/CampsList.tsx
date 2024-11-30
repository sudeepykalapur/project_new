import { motion } from "framer-motion"
import { CampCard } from "./CampCard"
import { useCamps } from "@/hooks/useCamps"

export function CampsList() {
  const { camps } = useCamps()

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {camps.map((camp, index) => (
        <motion.div
          key={camp.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <CampCard camp={camp} />
        </motion.div>
      ))}
    </div>
  )
}