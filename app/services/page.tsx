'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, CheckCircle2, Clock, Users, FileCheck, DollarSign, TrendingUp, Award, Zap } from 'lucide-react'

export default function ServicesPage() {
  return (
    <div className="w-full bg-background">
      <Header />

      {/* Page Header */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-primary/10 via-background to-accent/5 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 text-center">
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground text-balance">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive financial solutions designed to make your overseas education journey smooth and successful
            </p>
          </div>
        </div>
      </section>

      {/* Service 1: Balance Confirmation */}
      <section id="balance" className="py-20 sm:py-28 lg:py-32 bg-background border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center mb-16">
            <div>
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 mb-6">
                <FileCheck className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Balance Confirmation Letter
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Never mind your balance – your balance confirmation letter is waiting! Studying abroad involves many variables, but with Danada Funds, you can confidently secure a high-approval ranking balance confirmation letter that opens doors to educational opportunities.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex gap-4 items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Fast Processing</h3>
                    <p className="text-muted-foreground">Get your letter within 24-48 hours</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">High Approval Rating</h3>
                    <p className="text-muted-foreground">Bank-verified letters with strong acceptance rates</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">50+ Bank Partnerships</h3>
                    <p className="text-muted-foreground">Established relationships with leading financial institutions</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Expert Guidance</h3>
                    <p className="text-muted-foreground">Professional counsellors to guide you through the process</p>
                  </div>
                </div>
              </div>
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Get Balance Confirmation <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="relative">
              <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
              <div className="relative bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl border border-primary/20 p-12 h-96 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <FileCheck className="h-20 w-20 text-primary mx-auto opacity-20" />
                  <p className="text-muted-foreground font-medium">Secure Your Educational Financing</p>
                </div>
              </div>
            </div>
          </div>

          {/* Process Steps */}
          <div className="bg-accent/5 rounded-2xl border border-border p-12">
            <h3 className="text-2xl font-bold text-foreground mb-8">How It Works</h3>
            <div className="grid gap-8 md:grid-cols-4">
              <div className="text-center space-y-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">1</div>
                <h4 className="font-semibold text-foreground">Consultation</h4>
                <p className="text-sm text-muted-foreground">Discuss your requirements with our team</p>
              </div>
              <div className="text-center space-y-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">2</div>
                <h4 className="font-semibold text-foreground">Documentation</h4>
                <p className="text-sm text-muted-foreground">Submit required documents securely</p>
              </div>
              <div className="text-center space-y-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">3</div>
                <h4 className="font-semibold text-foreground">Bank Approval</h4>
                <p className="text-sm text-muted-foreground">Our partners verify and approve quickly</p>
              </div>
              <div className="text-center space-y-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">4</div>
                <h4 className="font-semibold text-foreground">Delivery</h4>
                <p className="text-sm text-muted-foreground">Receive your official letter immediately</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 2: Visa Assistance */}
      <section id="visa" className="py-20 sm:py-28 lg:py-32 bg-gradient-to-b from-background to-accent/5 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="relative lg:order-2 lg:col-span-1">
              <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
              <div className="relative bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl border border-primary/20 p-12 h-96 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <Users className="h-20 w-20 text-primary mx-auto opacity-20" />
                  <p className="text-muted-foreground font-medium">Expert Visa & Financial Guidance</p>
                </div>
              </div>
            </div>
            <div className="lg:order-1">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 mb-6">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Financial Aid & Visa Approval
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                When making the biggest decision of your life, who you approach matters. Our expert counsellors and support staff are the most well-trained in overseas financial assistance. We've earned our 98% visa approval success rate through dedication to personalized guidance and proven strategies.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex gap-4 items-start">
                  <Award className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">98% Success Rate</h3>
                    <p className="text-muted-foreground">Industry-leading visa approval rate</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <Users className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Expert Counsellors</h3>
                    <p className="text-muted-foreground">Specialists trained in visa and financial regulations</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <DollarSign className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Tailored Solutions</h3>
                    <p className="text-muted-foreground">Customized financial packages for each student</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Round the Clock Support</h3>
                    <p className="text-muted-foreground">Available when you need us most</p>
                  </div>
                </div>
              </div>
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Book Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service 3: Financial Guidance */}
      <section id="guidance" className="py-20 sm:py-28 lg:py-32 bg-background border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 mb-6">
              <TrendingUp className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Comprehensive Financial Guidance
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Beyond paperwork, we guide you through every financial decision to ensure you're making the best choices for your future
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-border hover:shadow-xl transition-all">
              <CardContent className="pt-8">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 mb-6">
                  <DollarSign className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Loan Analysis</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Compare education loans from multiple institutions and find the best interest rates and terms for your situation.
                </p>
                <ul className="space-y-2 text-sm text-foreground">
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    Interest rate comparison
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    Repayment planning
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-xl transition-all">
              <CardContent className="pt-8">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 mb-6">
                  <Zap className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Fast Track Support</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Speed up your visa process with our expedited document verification and submission procedures.
                </p>
                <ul className="space-y-2 text-sm text-foreground">
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    Quick document checks
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    Priority processing
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-xl transition-all">
              <CardContent className="pt-8">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 mb-6">
                  <Award className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Post-Visa Support</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our support doesn't end at visa approval. We help with fund transfer and pre-departure guidance.
                </p>
                <ul className="space-y-2 text-sm text-foreground">
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    Fund transfer help
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    Pre-departure guidance
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-28 lg:py-32 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold">Ready to Get Started?</h2>
            <p className="text-lg text-primary-foreground/80">
              Let our expert team guide you through your overseas education financing journey
            </p>
          </div>
          <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold">
            Book Your Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
