"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/zuhd-logo.png" alt="ZUHD Media" width={500} height={500} className="h-40 w-40 pb-2" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#services" className="text-gray-700 hover:text-purple-600 transition-colors">
              Services
            </Link>
            <Link href="#about" className="text-gray-700 hover:text-purple-600 transition-colors">
              About
            </Link>
            <Link href="#testimonials" className="text-gray-700 hover:text-purple-600 transition-colors">
              Testimonials
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-purple-600 transition-colors">
              Contact
            </Link>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white">Get Started</Button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              <Link
                href="#services"
                className="block px-3 py-2 text-gray-700 hover:text-purple-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="#about"
                className="block px-3 py-2 text-gray-700 hover:text-purple-600"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="#testimonials"
                className="block px-3 py-2 text-gray-700 hover:text-purple-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </Link>
              <Link
                href="#contact"
                className="block px-3 py-2 text-gray-700 hover:text-purple-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="px-3 py-2">
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">Get Started</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
