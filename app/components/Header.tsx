"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Menu } from "lucide-react"

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "#services", label: "Services" },
    { href: "#performance", label: "Performance" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#about", label: "About" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary">
          SageMaster
        </Link>
        <nav className="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-gray-600 hover:text-primary">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center space-x-4">
          <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
            <DialogTrigger asChild>
              <Button variant="outline">Schedule a Call</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Schedule a Call</DialogTitle>
              </DialogHeader>
              <form
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault()
                  console.log("Call scheduled")
                  setIsModalOpen(false)
                }}
              >
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" required />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" required />
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" type="tel" />
                </div>
                <Button type="submit">Submit</Button>
              </form>
            </DialogContent>
          </Dialog>
          <Button variant="ghost" className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <Menu />
          </Button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}

