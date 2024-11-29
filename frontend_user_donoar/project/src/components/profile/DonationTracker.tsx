import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { motion } from "framer-motion"
import { Activity } from "lucide-react"
import { useState } from "react"

export function DonationTracker() {
  const [progress, setProgress] = useState(65)

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
    >
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="h-5 w-5 text-red-500" />
            Donation Status
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Processing</span>
              <span>{progress}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
          
          <div className="space-y-2">
            <p className="text-sm text-gray-500">Current Stage:</p>
            <p className="font-medium">Quality Testing</p>
          </div>

          <Button className="w-full" variant="outline">
            View Detailed Report
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  )
}