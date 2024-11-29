import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"
import { Link } from "react-router-dom"

export function HeroSection() {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center">
      <div 
        className="absolute inset-0 bg-[url('/images/hero.jpg')] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl"
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Save Lives Through Blood Donation
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Your donation can save up to three lives. Join our community of heroes today.
          </p>
          <Link to="/donate">
            <Button size="lg" className="bg-red-600 hover:bg-red-700">
              <Heart className="mr-2 h-5 w-5" />
              Register as Donor
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}