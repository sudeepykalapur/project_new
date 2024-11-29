import { motion } from "framer-motion"
import { Accordion, AccordionItem } from "@/components/ui/accordion"
import { ClipboardCheck, UserPlus, Droplet, Award } from "lucide-react"

const steps = [
  {
    icon: <UserPlus className="h-5 w-5 text-red-500" />,
    title: "Create Account",
    content: "Sign up with your basic information and verify your email address."
  },
  {
    icon: <ClipboardCheck className="h-5 w-5 text-red-500" />,
    title: "Complete Health Screening",
    content: "Fill out the health questionnaire and provide necessary medical information."
  },
  {
    icon: <Droplet className="h-5 w-5 text-red-500" />,
    title: "Schedule Donation",
    content: "Choose your preferred donation center and book an appointment."
  },
  {
    icon: <Award className="h-5 w-5 text-red-500" />,
    title: "Donate & Track",
    content: "Make your donation and track its journey to help save lives."
  }
]

export function RegistrationSteps() {
  return (
    <section className="container mx-auto px-4 py-16 bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-4">How to Register</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Follow these simple steps to become a blood donor and start saving lives.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-2xl mx-auto"
      >
        <Accordion>
          {steps.map((step, index) => (
            <AccordionItem
              key={index}
              value={`step-${index}`}
              trigger={
                <div className="flex items-center gap-2">
                  {step.icon}
                  <span>{step.title}</span>
                </div>
              }
            >
              {step.content}
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </section>
  )
}