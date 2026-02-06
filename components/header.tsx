'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3 flex-shrink-0 hover:opacity-80 transition-opacity">
          <img
            src="/danadalogo.jpeg"
            alt="Danada Funds Logo"
            className="h-9 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden gap-12 md:flex text-sm">
          <Link href="/services" className="font-medium text-foreground hover:text-primary transition-colors">Services</Link>
          <Link href="/about" className="font-medium text-foreground hover:text-primary transition-colors">About Us</Link>
          <Link href="/success-stories" className="font-medium text-foreground hover:text-primary transition-colors">Success Stories</Link>
          <Link href="/faq" className="font-medium text-foreground hover:text-primary transition-colors">FAQ</Link>
          <Link href="/contact" className="font-medium text-foreground hover:text-primary transition-colors">Contact</Link>
        </div>

        {/* CTA Button */}
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium hidden md:inline-flex">
          Apply Now
        </Button>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
        >
          {mobileOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="flex flex-col gap-4 px-4 py-6">
            <Link href="/services" className="font-medium text-foreground hover:text-primary transition-colors" onClick={() => setMobileOpen(false)}>Services</Link>
            <Link href="/about" className="font-medium text-foreground hover:text-primary transition-colors" onClick={() => setMobileOpen(false)}>About Us</Link>
            <Link href="/success-stories" className="font-medium text-foreground hover:text-primary transition-colors" onClick={() => setMobileOpen(false)}>Success Stories</Link>
            <Link href="/faq" className="font-medium text-foreground hover:text-primary transition-colors" onClick={() => setMobileOpen(false)}>FAQ</Link>
            <Link href="/contact" className="font-medium text-foreground hover:text-primary transition-colors" onClick={() => setMobileOpen(false)}>Contact</Link>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium w-full">Apply Now</Button>
          </div>
        </div>
      )}
    </header>
  )
}
