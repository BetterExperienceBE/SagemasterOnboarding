"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { motion } from "framer-motion"

export default function FAQ() {
  const faqs = [
    {
      question: "How does SageMaster's AI trading work?",
      answer:
        "SageMaster's AI analyzes vast amounts of market data, identifies patterns, and executes trades based on sophisticated algorithms and machine learning models. Our system continuously learns and adapts to market conditions to optimize performance.",
    },
    {
      question: "What kind of returns can I expect?",
      answer:
        "While past performance doesn't guarantee future results, our AI has consistently achieved 25-40% monthly returns for our clients. However, it's important to note that all trading involves risk, and individual results may vary.",
    },
    {
      question: "How do you manage risk?",
      answer:
        "Our AI incorporates advanced risk management strategies, including stop-loss mechanisms, diversification, and adaptive position sizing. We also employ real-time monitoring and have failsafes in place to protect against unexpected market events.",
    },
    {
      question: "Is my investment safe with SageMaster?",
      answer:
        "We prioritize the security of your investments. Our systems are protected by state-of-the-art cybersecurity measures, and we adhere to strict regulatory compliance standards. However, as with all investments, there is always some level of risk involved.",
    },
    {
      question: "Can I withdraw my funds at any time?",
      answer:
        "Yes, we offer flexible withdrawal options. However, we recommend maintaining your investment for at least 3-6 months to see optimal results and to allow our AI systems to adapt to market conditions.",
    },
  ]

  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}

