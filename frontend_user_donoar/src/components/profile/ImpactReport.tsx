import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Users, Award, ThumbsUp } from "lucide-react"

export function ImpactReport() {
  const impact = {
    livesSaved: 5,
    totalDonations: 3,
    bloodVolume: "1500ml",
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
    >
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="h-5 w-5 text-red-500" />
            Your Impact
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-red-50 rounded-lg">
              <Users className="h-8 w-8 text-red-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-red-600">{impact.livesSaved}</p>
              <p className="text-sm text-gray-600">Lives Saved</p>
            </div>
            
            <div className="text-center p-4 bg-red-50 rounded-lg">
              <ThumbsUp className="h-8 w-8 text-red-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-red-600">{impact.totalDonations}</p>
              <p className="text-sm text-gray-600">Total Donations</p>
            </div>

            <div className="text-center p-4 bg-red-50 rounded-lg">
              <Award className="h-8 w-8 text-red-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-red-600">{impact.bloodVolume}</p>
              <p className="text-sm text-gray-600">Blood Volume</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}