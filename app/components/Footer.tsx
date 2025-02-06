import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">SageMaster</h3>
            <p>Revolutionizing trading with AI-powered strategies.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#services">Services</Link>
              </li>
              <li>
                <Link href="#performance">Performance</Link>
              </li>
              <li>
                <Link href="#testimonials">Testimonials</Link>
              </li>
              <li>
                <Link href="#about">About</Link>
              </li>
              <li>
                <Link href="#faq">FAQ</Link>
              </li>
              <li>
                <Link href="#contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/terms">Terms of Service</Link>
              </li>
              <li>
                <Link href="/privacy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/disclaimer">Risk Disclaimer</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Facebook">
                <Facebook />
              </Link>
              <Link href="#" aria-label="Twitter">
                <Twitter />
              </Link>
              <Link href="#" aria-label="Instagram">
                <Instagram />
              </Link>
              <Link href="#" aria-label="LinkedIn">
                <Linkedin />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} SageMaster. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

