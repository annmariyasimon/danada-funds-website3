'use client'

import React from "react"

import Link from 'next/link'
import { Phone, Mail, MapPin, Facebook, Linkedin, Twitter, ArrowRight, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

export function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 3000)
    }
  }

  return (
    <footer className="border-t border-border bg-foreground text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/10 bg-white/5">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
              <p className="text-sm opacity-80">Get the latest updates on education financing tips and opportunities</p>
            </div>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/40 text-sm"
              />
              <Button
                type="submit"
                className="bg-primary text-foreground hover:bg-primary/90 font-semibold"
              >
                {subscribed ? 'Subscribed!' : 'Subscribe'}
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 mb-12 md:grid-cols-5">
          {/* About Section */}
          <div className="md:col-span-2 space-y-6">
            <div>
              <img 
                src="/images/danada-20logo.jpeg"
                alt="Danada Funds Logo"
                className="h-10 w-auto mb-4"
              />
              <p className="text-sm leading-relaxed text-white/80">
                Danada Financial Services Private Limited enables overseas education dreams through trusted financial solutions, expert guidance, and established bank partnerships serving 10,000+ students globally.
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-sm text-white">Why Choose Us</h4>
              <ul className="space-y-2">
                <li className="flex gap-2 items-start text-sm text-white/80">
                  <CheckCircle2 className="h-4 w-4 flex-shrink-0 mt-0.5 text-primary" />
                  <span>98% Visa Approval Rate</span>
                </li>
                <li className="flex gap-2 items-start text-sm text-white/80">
                  <CheckCircle2 className="h-4 w-4 flex-shrink-0 mt-0.5 text-primary" />
                  <span>50+ Bank Partnerships</span>
                </li>
                <li className="flex gap-2 items-start text-sm text-white/80">
                  <CheckCircle2 className="h-4 w-4 flex-shrink-0 mt-0.5 text-primary" />
                  <span>Expert Counsellors</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-6 text-base text-white">Services</h4>
            <ul className="space-y-3 text-sm text-white/90">
              <li><Link href="/services#balance" className="opacity-90 hover:opacity-100 hover:text-primary transition-all">Balance Confirmation</Link></li>
              <li><Link href="/services#visa" className="opacity-90 hover:opacity-100 hover:text-primary transition-all">Visa Assistance</Link></li>
              <li><Link href="/services#guidance" className="opacity-90 hover:opacity-100 hover:text-primary transition-all">Financial Guidance</Link></li>
              <li><Link href="/faq" className="opacity-90 hover:opacity-100 hover:text-primary transition-all">FAQ & Resources</Link></li>
              <li><Link href="/services" className="opacity-90 hover:opacity-100 hover:text-primary transition-all flex items-center gap-2 mt-4">View All Services <ArrowRight className="h-3 w-3" /></Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-6 text-base text-white">Company</h4>
            <ul className="space-y-3 text-sm text-white/90">
              <li><Link href="/about" className="opacity-90 hover:opacity-100 hover:text-primary transition-all">About Us</Link></li>
              <li><Link href="/success-stories" className="opacity-90 hover:opacity-100 hover:text-primary transition-all">Success Stories</Link></li>
              <li><Link href="/" className="opacity-90 hover:opacity-100 hover:text-primary transition-all">Home</Link></li>
              <li><Link href="/contact" className="opacity-90 hover:opacity-100 hover:text-primary transition-all">Contact Us</Link></li>
              <li><Link href="#" className="opacity-90 hover:opacity-100 hover:text-primary transition-all">Blog</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-6 text-base text-white">Get in Touch</h4>
            <ul className="space-y-4 text-sm text-white/90">
              <li className="flex gap-3 items-start opacity-90 hover:opacity-100 transition-opacity">
                <Phone className="h-5 w-5 flex-shrink-0 mt-0.5 text-primary" />
                <div className="space-y-1">
                  <p className="text-xs opacity-70">Phone</p>
                  <span>+91 XXXX XXX XXX</span>
                </div>
              </li>
              <li className="flex gap-3 items-start opacity-90 hover:opacity-100 transition-opacity">
                <Mail className="h-5 w-5 flex-shrink-0 mt-0.5 text-primary" />
                <div className="space-y-1">
                  <p className="text-xs opacity-70">Email</p>
                  <span>info@danadafunds.com</span>
                </div>
              </li>
              <li className="flex gap-3 items-start opacity-90 hover:opacity-100 transition-opacity">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5 text-primary" />
                <div className="space-y-1">
                  <p className="text-xs opacity-70">Office</p>
                  <span className="text-xs">Danada Financial Services Pvt Ltd, India</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 space-y-6">
          {/* Social & Quick Links */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex gap-6">
              <a href="#" className="text-white opacity-70 hover:opacity-100 transition-opacity" title="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white opacity-70 hover:opacity-100 transition-opacity" title="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-white opacity-70 hover:opacity-100 transition-opacity" title="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
            <div className="flex flex-wrap gap-4 text-xs text-white/70 justify-center md:justify-end">
              <Link href="#" className="hover:text-white transition-opacity">Privacy Policy</Link>
              <span>•</span>
              <Link href="#" className="hover:text-white transition-opacity">Terms of Service</Link>
              <span>•</span>
              <Link href="#" className="hover:text-white transition-opacity">Disclaimer</Link>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-xs text-white/60 border-t border-white/10 pt-6">
            <p>
              &copy; 2024 Danada Financial Services Private Limited. All rights reserved.
            </p>
            <p className="mt-2">
              Registered with DPIIT | Trusted Partner of 50+ Leading Banks | ISO Certified
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
