import { CheckCircle } from "lucide-react"

export default function ValueProposition() {
  const benefits = [
    "Expert Guidance from experienced traders",
    "Proven Strategies that have been tested and refined",
    "Supportive Community of like-minded individuals",
    "Personalized Mentorship to achieve your goals",
    "Compliance & Ethical Trading practices",
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose StreamLine?</h2>
        <ul className="grid md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle className="text-primary mr-2 flex-shrink-0" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

