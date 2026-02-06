'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, CheckCircle2, Users, TrendingUp, Globe, Award, Briefcase, DollarSign, FileCheck, Phone, Mail, MapPin } from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <div className="w-full bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20">
                  <span className="text-xs font-semibold text-accent">TRUSTED BY 10,000+ STUDENTS</span>
                </div>
                <h1 className="text-5xl sm:text-6xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                  Your <span className="text-primary">Global Education</span> Journey Starts Here
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed text-balance">
                  Secure balance confirmation letters and expert visa guidance from India's most trusted overseas education financing partner. Success rate: 98%
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row pt-2">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold h-12 px-8">
                  Get Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-muted bg-transparent font-semibold h-12 px-8">
                  Learn More
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div>
                  <div className="text-2xl font-bold text-primary">10K+</div>
                  <p className="text-xs text-muted-foreground">Students Helped</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">98%</div>
                  <p className="text-xs text-muted-foreground">Approval Rate</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <p className="text-xs text-muted-foreground">Bank Partners</p>
                </div>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
              <div className="relative bg-gradient-to-br from-primary/10 via-accent/5 to-background rounded-2xl border border-primary/20 overflow-hidden h-96 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Globe className="h-8 w-8 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground font-medium">Enabling Dreams of Studying Abroad</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 sm:py-28 lg:py-32 bg-background border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 space-y-4 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">Our Core Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive financial solutions tailored for international students
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            {/* Service 1 - Balance Confirmation */}
            <Card className="border border-border hover:border-primary hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <CardContent className="p-8">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  <FileCheck className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Balance Confirmation Letter</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Never mind your balance – your balance confirmation letter is waiting! With long-term relationships with leading banks, we provide high-approval ranking letters that unlock your education financing.
                </p>
                <div className="space-y-4">
                  <div className="flex gap-3 items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-sm font-medium text-foreground">Fast & reliable letter generation</span>
                  </div>
                  <div className="flex gap-3 items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-sm font-medium text-foreground">High-approval ranking with banks</span>
                  </div>
                  <div className="flex gap-3 items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-sm font-medium text-foreground">50+ established bank partnerships</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Service 2 - Visa Guidance */}
            <Card className="border border-border hover:border-primary hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <CardContent className="p-8">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Financial Aid & Visa Approval</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  When making the biggest decision of your life, who you approach matters. Our expert counsellors deliver industry-leading visa approval success rates that have become the benchmark.
                </p>
                <div className="space-y-4">
                  <div className="flex gap-3 items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-sm font-medium text-foreground">Expert financial counsellors</span>
                  </div>
                  <div className="flex gap-3 items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-sm font-medium text-foreground">98% visa approval success rate</span>
                  </div>
                  <div className="flex gap-3 items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-sm font-medium text-foreground">Personalized guidance & support</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="py-20 sm:py-28 lg:py-32 bg-gradient-to-b from-background to-accent/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 space-y-4 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">Why Danada Funds?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Proven expertise and exceptional results in overseas education financing
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-border bg-background hover:border-primary hover:shadow-lg transition-all p-8 group">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <TrendingUp className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Industry Leading</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Our 98% visa approval success rate has set the industry standard for excellence and reliability.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-background hover:border-primary hover:shadow-lg transition-all p-8 group">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Briefcase className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Expert Counsellors</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Highly trained specialists dedicated to your overseas financial assistance with personalized solutions.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-background hover:border-primary hover:shadow-lg transition-all p-8 group">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <DollarSign className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Quick Processing</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Fast and efficient solutions powered by partnerships with 50+ leading financial institutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics Section */}
      <section id="success" className="py-20 sm:py-28 lg:py-32 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Our Impact</h2>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Transforming dreams into reality for thousands of students
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            <div className="text-center space-y-3 p-8 rounded-xl bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors">
              <div className="text-5xl sm:text-6xl font-bold">10K+</div>
              <p className="text-lg">Students Empowered</p>
              <p className="text-sm text-primary-foreground/70">Successful global education journeys started</p>
            </div>
            <div className="text-center space-y-3 p-8 rounded-xl bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors">
              <div className="text-5xl sm:text-6xl font-bold">98%</div>
              <p className="text-lg">Approval Rate</p>
              <p className="text-sm text-primary-foreground/70">Industry-leading visa success rate</p>
            </div>
            <div className="text-center space-y-3 p-8 rounded-xl bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors">
              <div className="text-5xl sm:text-6xl font-bold">50+</div>
              <p className="text-lg">Bank Partners</p>
              <p className="text-sm text-primary-foreground/70">Leading financial institutions trusted</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-28 lg:py-32 bg-background border-y border-border">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">Ready to Study Abroad?</h2>
            <p className="text-lg text-muted-foreground">
              Let our experts guide you through securing education financing with confidence and clarity
            </p>
          </div>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold h-12 px-8">
            Get Your Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
