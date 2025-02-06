"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Video {
  id: string
  title: string
  description: string
}

const videos: Video[] = [
  {
    id: "video1",
    title: "Introduction to AI Trading",
    description: "Learn how SageMaster uses AI to revolutionize trading strategies.",
  },
  {
    id: "video2",
    title: "SageMaster Performance Overview",
    description: "See our impressive track record and consistent returns.",
  },
  {
    id: "video3",
    title: "Client Success Stories",
    description: "Hear from our satisfied clients about their experiences with SageMaster.",
  },
]

export default function VideoShowcase() {
  const [currentVideo, setCurrentVideo] = useState(0)

  const nextVideo = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length)
  }

  const prevVideo = () => {
    setCurrentVideo((prev) => (prev - 1 + videos.length) % videos.length)
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">See SageMaster in Action</h2>
        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video mb-8">
            <iframe
              src={`https://www.youtube.com/embed/${videos[currentVideo].id}`}
              title={videos[currentVideo].title}
              className="absolute top-0 left-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="flex justify-between items-center mb-8">
            <Button variant="outline" onClick={prevVideo}>
              <ChevronLeft className="mr-2 h-4 w-4" /> Previous
            </Button>
            <Button variant="outline" onClick={nextVideo}>
              Next <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <motion.div
            key={currentVideo}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-semibold mb-2">{videos[currentVideo].title}</h3>
            <p className="text-gray-600">{videos[currentVideo].description}</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

