import { Book, FileText, CheckSquare } from "lucide-react"

export default function ResourcesShowcase() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Exclusive Resources</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <Book className="mx-auto text-primary mb-4" size={48} />
            <h3 className="text-xl font-semibold mb-2">Trading Guides</h3>
            <p>Comprehensive guides to help you master various trading strategies.</p>
          </div>
          <div className="text-center">
            <FileText className="mx-auto text-primary mb-4" size={48} />
            <h3 className="text-xl font-semibold mb-2">Strategy Templates</h3>
            <p>Ready-to-use templates to streamline your trading process.</p>
          </div>
          <div className="text-center">
            <CheckSquare className="mx-auto text-primary mb-4" size={48} />
            <h3 className="text-xl font-semibold mb-2">Compliance Checklists</h3>
            <p>Ensure you're always trading ethically and within regulations.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

