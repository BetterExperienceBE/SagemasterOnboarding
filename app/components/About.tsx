"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">About SageMaster</h2>
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="mb-6 text-lg">
              SageMaster is at the forefront of AI-driven trading technology. Our advanced algorithms and machine
              learning models have consistently delivered exceptional results for our clients.
            </p>
            <p className="mb-6 text-lg">
              With a focus on innovation and risk management, we've achieved remarkable monthly returns of 25-40% while
              minimizing potential losses. Our team of expert traders and data scientists work tirelessly to refine our
              strategies and stay ahead of market trends.
            </p>
            <div className="space-y-2">
              <p className="font-semibold">Learn more about our approach:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <Link href="https://linktr.ee/sagemaster" className="text-primary hover:underline">
                    SageMaster Opportunities
                  </Link>
                </li>
                <li>
                  <Link href="https://linktr.ee/sagemasterresources" className="text-primary hover:underline">
                    SageMaster Resources
                  </Link>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

