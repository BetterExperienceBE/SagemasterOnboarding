"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import { motion } from "framer-motion"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)

    // Here you would typically send this data to your backend
    await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulating API call

    setIsSubmitting(false)
    setEmail("")
    toast({
      title: "Subscribed!",
      description: "You've been added to our newsletter.",
    })
  }

  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-8">Stay Updated with SageMaster</h2>
          <p className="text-center mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest insights on AI trading, market trends, and exclusive offers.
          </p>
          <form className="max-w-md mx-auto flex gap-4" onSubmit={handleSubmit}>
            <Input
              type="email"
              placeholder="Your email address"
              className="flex-grow bg-white text-gray-800"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button type="submit" variant="secondary" disabled={isSubmitting}>
              {isSubmitting ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

