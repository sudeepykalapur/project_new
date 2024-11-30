import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Camp } from "@/types/camp"

interface CampCardProps {
  camp: Camp
}

export function CampCard({ camp }: CampCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <Card className="h-full">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={camp.image} 
            alt={camp.name}
            className="w-full h-full object-cover"
          />
        </div>
        <CardHeader>
          <CardTitle className="text-xl">{camp.name}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-2 text-gray-600">
            <Calendar className="h-4 w-4" />
            <span>{camp.date} at {camp.time}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <MapPin className="h-4 w-4" />
            <span>{camp.location}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Phone className="h-4 w-4" />
            <span>{camp.phone}</span>
          </div>
          <Button className="w-full">Register for Camp</Button>
        </CardContent>
      </Card>
    </motion.div>
  )
}