import { motion } from "framer-motion"
import { Accordion, AccordionItem } from "@/components/ui/accordion"
import { HelpCircle } from "lucide-react"

const faqs = [
  {
    question: "Who can donate blood?",
    answer: "Most healthy adults who are at least 16 years old and weigh at least 110 pounds can donate blood. However, eligibility may vary based on specific health conditions and travel history."
  },
  {
    question: "How often can I donate blood?",
    answer: "You can donate whole blood every 8 weeks (56 days). Platelet donors can give every 7 days up to 24 times per year."
  },
  {
    question: "How long does the donation process take?",
    answer: "The entire process takes about one hour, though the actual donation only takes about 8-10 minutes."
  },
  {
    question: "Is blood donation safe?",
    answer: "Yes, blood donation is very safe. New, sterile disposable equipment is used for each donor, and all donors undergo health screening."
  }
]

export function FAQSection() {
  return (
    <section className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Find answers to common questions about blood donation.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-2xl mx-auto"
      >
        <Accordion>
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`faq-${index}`}
              trigger={
                <div className="flex items-center gap-2">
                  <HelpCircle className="h-5 w-5 text-red-500" />
                  <span>{faq.question}</span>
                </div>
              }
            >
              {faq.answer}
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </section>
  )
}