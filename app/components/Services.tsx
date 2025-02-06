"use client"

import { BotIcon as Robot, TrendingUp, ShieldCheck, Zap, BarChart, Users } from "lucide-react"
import { motion } from "framer-motion"

export default function Services() {
  const services = [
    {
      icon: <Robot className="h-12 w-12 text-primary" />,
      title: "AI-Driven Trading",
      description: "Our advanced AI algorithms analyze market trends and execute trades with precision.",
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-primary" />,
      title: "Consistent Returns",
      description: "Achieve 25-40% monthly profits with our proven strategies and risk management.",
    },
    {
      icon: <ShieldCheck className="h-12 w-12 text-primary" />,
      title: "Risk Mitigation",
      description: "Our sophisticated systems minimize losses and protect your investments.",
    },
    {
      icon: <Zap className="h-12 w-12 text-primary" />,
      title: "Real-Time Execution",
      description: "Lightning-fast trade execution to capitalize on market opportunities.",
    },
    {
      icon: <BarChart className="h-12 w-12 text-primary" />,
      title: "Advanced Analytics",
      description: "Comprehensive market analysis and performance tracking at your fingertips.",
    },
    {
      icon: <Users className="h-12 w-12 text-primary" />,
      title: "Expert Support",
      description: "Access to our team of trading professionals for personalized guidance.",
    },
  ]

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-center">{service.title}</h3>
              <p className="text-center text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

