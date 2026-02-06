'use client'

import React from "react"

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Phone, Mail, MapPin, Clock, MessageSquare, Send } from 'lucide-react'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'balance-confirmation',
    country: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  return (
    <div className="w-full bg-background">
      <Header />

      {/* Page Header */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-primary/10 via-background to-accent/5 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 text-center">
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground text-balance">
              Get In <span className="text-primary">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to start your overseas education journey? Connect with our expert team today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 sm:py-28 lg:py-32 bg-background border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16">
            <Card className="border-border hover:shadow-lg transition-all">
              <CardContent className="p-8 text-center">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 mb-4">
                  <Phone className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">Phone</h3>
                <p className="text-muted-foreground text-sm mb-3">+91 (Your Phone Number)</p>
                <p className="text-xs text-muted-foreground">Monday - Sunday, 9AM - 9PM</p>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-all">
              <CardContent className="p-8 text-center">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 mb-4">
                  <Mail className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">Email</h3>
                <p className="text-muted-foreground text-sm mb-3">info@danadafunds.com</p>
                <p className="text-xs text-muted-foreground">Response within 2 hours</p>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-all">
              <CardContent className="p-8 text-center">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 mb-4">
                  <MapPin className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">Address</h3>
                <p className="text-muted-foreground text-sm mb-3">Danada Financial Services Pvt Ltd</p>
                <p className="text-xs text-muted-foreground">India</p>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-all">
              <CardContent className="p-8 text-center">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 mb-4">
                  <Clock className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">Hours</h3>
                <p className="text-muted-foreground text-sm mb-3">24/7 Support</p>
                <p className="text-xs text-muted-foreground">Always available</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 sm:py-28 lg:py-32 bg-gradient-to-b from-background to-accent/5 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Form */}
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-8">
                Start Your Journey
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your email"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="+91"
                      required
                    />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Service Required</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="balance-confirmation">Balance Confirmation Letter</option>
                      <option value="visa-assistance">Visa Assistance</option>
                      <option value="financial-guidance">Financial Guidance</option>
                      <option value="all-services">All Services</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Destination Country</label>
                    <input
                      type="text"
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="e.g., USA, UK, Canada"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    rows={5}
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                <Button size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
                  Submit Application <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </div>

            {/* Info Box */}
            <div className="space-y-8">
              <div className="rounded-xl border border-border bg-background p-8 hover:shadow-lg transition-all">
                <div className="flex gap-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Quick Response</h3>
                    <p className="text-muted-foreground">Our team will review your application and contact you within 2 hours during business hours.</p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-border bg-background p-8 hover:shadow-lg transition-all">
                <div className="flex gap-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Direct Call</h3>
                    <p className="text-muted-foreground mb-3">Prefer to talk directly? Call us anytime for immediate assistance.</p>
                    <a href="tel:+91" className="font-semibold text-primary hover:opacity-80 transition-opacity">+91 (Your Number)</a>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-border bg-background p-8 hover:shadow-lg transition-all">
                <div className="flex gap-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Email Us</h3>
                    <p className="text-muted-foreground mb-3">Send us a detailed email with your requirements.</p>
                    <a href="mailto:info@danadafunds.com" className="font-semibold text-primary hover:opacity-80 transition-opacity">info@danadafunds.com</a>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-border bg-gradient-to-br from-primary/10 to-accent/5 p-8">
                <p className="text-sm text-muted-foreground mb-4">
                  <span className="font-semibold text-foreground">Free Consultation:</span> Your initial consultation is always free. No hidden charges or commitments required.
                </p>
                <p className="text-xs text-muted-foreground">
                  We're here to help you make the best decision for your overseas education journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 sm:py-28 lg:py-32 bg-background border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Our Presence</h2>
            <p className="text-lg text-muted-foreground">
              Located in major cities across India to serve you better
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-border hover:shadow-lg transition-all">
              <CardContent className="p-8">
                <MapPin className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-bold text-foreground mb-3">Head Office</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Danada Financial Services Private Limited<br/>
                  City Name, India
                </p>
                <a href="#" className="text-primary text-sm font-semibold hover:opacity-80">Get Directions</a>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-all">
              <CardContent className="p-8">
                <MapPin className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-bold text-foreground mb-3">Branch Office</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Coming Soon<br/>
                  Expanding to more cities
                </p>
                <a href="#" className="text-primary text-sm font-semibold hover:opacity-80">Stay Updated</a>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-all">
              <CardContent className="p-8">
                <MapPin className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-bold text-foreground mb-3">Virtual Office</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Available Globally<br/>
                  Online consultations 24/7
                </p>
                <a href="#" className="text-primary text-sm font-semibold hover:opacity-80">Schedule Now</a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
