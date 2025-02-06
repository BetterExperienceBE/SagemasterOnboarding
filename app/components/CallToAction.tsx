import { Button } from "@/components/ui/button"

export default function CallToAction() {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Trading?</h2>
        <p className="text-xl mb-8">Get personalized guidance and join a community of successful traders.</p>
        <Button size="lg" variant="secondary">
          Book Your Free Call Today!
        </Button>
      </div>
    </section>
  )
}

