import { motion } from "framer-motion"
import { HeroSection } from "./HeroSection"
import { AboutSection } from "./AboutSection"
import { RegistrationSteps } from "./RegistrationSteps"
import { FAQSection } from "./FAQSection"

export function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-0"
    >
      <HeroSection />
      <AboutSection />
      <RegistrationSteps />
      <FAQSection />
    </motion.div>
  )
}