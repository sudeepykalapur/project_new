import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Heart, Activity, AlertCircle } from "lucide-react"

export function ProfileInfo() {
  const profile = {
    name: "John Doe",
    bloodGroup: "O+",
    lastDonation: "2023-10-15",
    healthConditions: ["Hypertension", "None"],
    eligibleToDonate: true
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
    >
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Heart className="h-5 w-5 text-red-500" />
            Profile Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="text-sm font-medium text-gray-500">Name</h3>
            <p className="text-lg font-semibold">{profile.name}</p>
          </div>
          
          <div>
            <h3 className="text-sm font-medium text-gray-500">Blood Group</h3>
            <Badge variant="secondary" className="mt-1 text-lg">
              {profile.bloodGroup}
            </Badge>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-500">Last Donation</h3>
            <p className="text-lg font-semibold">{profile.lastDonation}</p>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-500 mb-2">Health Status</h3>
            <div className="flex items-center gap-2">
              {profile.eligibleToDonate ? (
                <Badge variant="success" className="flex items-center gap-1">
                  <Activity className="h-4 w-4" />
                  Eligible to Donate
                </Badge>
              ) : (
                <Badge variant="destructive" className="flex items-center gap-1">
                  <AlertCircle className="h-4 w-4" />
                  Not Eligible
                </Badge>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}