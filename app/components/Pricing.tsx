import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: "$9.99",
      features: ["Task Management", "Basic Automation", "5 Team Members"],
    },
    {
      name: "Pro",
      price: "$19.99",
      features: ["Advanced Task Management", "Advanced Automation", "Unlimited Team Members", "Analytics"],
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: ["Custom Solutions", "Dedicated Support", "On-Premise Options", "Advanced Analytics"],
    },
  ]

  return (
    <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Pricing Plans</h2>
        <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-3 md:gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="flex flex-col p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-center">{plan.name}</h3>
              <p className="mt-4 text-3xl font-bold text-center">{plan.price}</p>
              <p className="mt-1 text-sm text-center text-gray-500 dark:text-gray-400">
                {plan.name === "Enterprise" ? "per month" : "per user/month"}
              </p>
              <ul className="mt-6 space-y-4 flex-1">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button className="mt-8">Choose Plan</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

