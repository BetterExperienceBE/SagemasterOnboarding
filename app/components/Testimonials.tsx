"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const testimonials = [
    {
      quote:
        "SageMaster's AI trading strategies have consistently outperformed my expectations. The returns are impressive!",
      author: "John D., Professional Trader",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "I've never seen such consistent profits with such low risk. SageMaster has transformed my trading approach.",
      author: "Sarah M., Investor",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "The expert support team at SageMaster has been invaluable in helping me understand and leverage AI trading.",
      author: "Michael R., Novice Trader",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-lg shadow-lg text-center"
            >
              <img
                src={testimonials[currentIndex].image || "/placeholder.svg"}
                alt={testimonials[currentIndex].author}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <p className="text-lg mb-4">"{testimonials[currentIndex].quote}"</p>
              <p className="font-semibold">{testimonials[currentIndex].author}</p>
            </motion.div>
          </AnimatePresence>
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  )
}

