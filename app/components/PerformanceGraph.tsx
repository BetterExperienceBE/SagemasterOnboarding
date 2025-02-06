"use client"

import { useState } from "react"
import { Line } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"
import { Button } from "@/components/ui/button"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

export default function PerformanceGraph() {
  const [timeframe, setTimeframe] = useState("6m")

  const performanceData = {
    "1m": {
      labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
      data: [5, 8, 6, 9],
    },
    "3m": {
      labels: ["Jan", "Feb", "Mar"],
      data: [15, 22, 18],
    },
    "6m": {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      data: [25, 32, 28, 35, 30, 38],
    },
    "1y": {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      data: [25, 32, 28, 35, 30, 38, 42, 39, 45, 48, 52, 55],
    },
  }

  const data = {
    labels: performanceData[timeframe as keyof typeof performanceData].labels,
    datasets: [
      {
        label: "SageMaster AI Performance",
        data: performanceData[timeframe as keyof typeof performanceData].data,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "SageMaster AI Performance (%)",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Return (%)",
        },
      },
    },
  }

  return (
    <section id="performance" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Performance</h2>
        <div className="max-w-4xl mx-auto">
          <div className="mb-6 flex justify-center space-x-2">
            {["1m", "3m", "6m", "1y"].map((tf) => (
              <Button key={tf} variant={timeframe === tf ? "default" : "outline"} onClick={() => setTimeframe(tf)}>
                {tf}
              </Button>
            ))}
          </div>
          <Line data={data} options={options} />
        </div>
      </div>
    </section>
  )
}

