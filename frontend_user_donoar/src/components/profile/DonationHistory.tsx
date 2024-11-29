import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Calendar, MapPin } from "lucide-react"

export function DonationHistory() {
  const donations = [
    {
      id: 1,
      date: "2023-10-15",
      location: "City Hospital",
      type: "Whole Blood",
    },
    {
      id: 2,
      date: "2023-07-20",
      location: "Red Cross Center",
      type: "Plasma",
    },
    {
      id: 3,
      date: "2023-04-05",
      location: "Community Blood Bank",
      type: "Platelets",
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
    >
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-red-500" />
            Donation History
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {donations.map((donation) => (
              <div
                key={donation.id}
                className="flex items-start justify-between p-4 rounded-lg bg-gray-50"
              >
                <div>
                  <p className="font-semibold">{donation.type}</p>
                  <div className="flex items-center text-sm text-gray-500 mt-1">
                    <MapPin className="h-4 w-4 mr-1" />
                    {donation.location}
                  </div>
                </div>
                <p className="text-sm text-gray-500">{donation.date}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}