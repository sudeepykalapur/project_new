import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Users, Calendar, Heart } from "lucide-react"

const features = [
  {
    icon: <MapPin className="h-6 w-6 text-red-500" />,
    title: "Locate Donors",
    description: "Find blood donors near you quickly and easily",
    image: "./images/locate.jpg"
  },
  {
    icon: <Users className="h-6 w-6 text-red-500" />,
    title: "Organize Camps",
    description: "Set up and manage blood donation camps",
    image: "./images/camps.jpg"
  },
  {
    icon: <Calendar className="h-6 w-6 text-red-500" />,
    title: "Schedule Donations",
    description: "Book your donation slots at your convenience",
    image: "./images/schedule.jpg"
  },
  {
    icon: <Heart className="h-6 w-6 text-red-500" />,
    title: "Save Lives",
    description: "Make a difference in someone's life",
    image: "./images/save.jpg"
  }
]

export function AboutSection() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Join with us</h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          We make blood donation and finding donors easier than ever with our
          comprehensive platform and support system.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="h-full">
              <CardContent className="p-6">
                <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-50">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-xl mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}