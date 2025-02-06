"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const headlines = ["AI-Powered Trading Excellence", "Maximize Your Profits", "Minimize Your Risks"]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % headlines.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const scrollToServices = () => {
    const servicesSection = document.getElementById("services")
    servicesSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative bg-gradient-to-r from-primary to-primary-dark text-white py-32">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.h1
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold mb-4 h-24"
        >
          {headlines[currentIndex]}
        </motion.h1>
        <p className="text-xl mb-8">
          Experience 25-40% monthly profits with minimal losses using SageMaster's advanced AI trading strategies.
        </p>
        <div className="flex justify-center space-x-4">
          <Button size="lg" variant="secondary" onClick={scrollToServices}>
            Discover Our Approach
          </Button>
          <Button size="lg" variant="outline">
            Watch Demo
          </Button>
        </div>
      </div>
    </section>
  )
}

