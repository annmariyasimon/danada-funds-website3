'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, Award, Users, Zap, Globe, Heart, Target } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="w-full bg-background">
      <Header />

      {/* Page Header */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-primary/10 via-background to-accent/5 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 text-center">
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground text-balance">
              About <span className="text-primary">Danada Funds</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Empowering students worldwide to achieve their dreams of studying abroad
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 sm:py-28 lg:py-32 bg-background border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl sm:text-5xl font-bold text-foreground">Our Story</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Danada Financial Services Private Limited was founded with a singular vision: to remove financial barriers that prevent talented students from pursuing education abroad. We recognized that countless deserving students were unable to fulfill their dreams due to complex financing processes and lack of proper guidance.
                </p>
              </div>
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Over the years, we've transformed the overseas education financing landscape. By building strong partnerships with over 50 leading banks and financial institutions, we've created a seamless pathway for students to secure funding and navigate the visa process with confidence.
                </p>
              </div>
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Today, we're proud to have helped 10,000+ students achieve their educational aspirations globally, with a remarkable 98% visa approval success rate that has become the industry benchmark.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
              <div className="relative bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl border border-primary/20 p-12 h-96 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <Globe className="h-20 w-20 text-primary mx-auto opacity-20" />
                  <p className="text-muted-foreground font-medium">Connecting Dreams to Reality</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 sm:py-28 lg:py-32 bg-gradient-to-b from-background to-accent/5 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything we do is guided by our core principles
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-border hover:shadow-xl transition-all">
              <CardContent className="pt-8">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 mb-6">
                  <Heart className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Student-Centric</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Every decision we make is centered on your needs. Your success is our success, and we're committed to making your journey smooth and stress-free.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-xl transition-all">
              <CardContent className="pt-8">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 mb-6">
                  <Award className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Excellence</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We maintain the highest standards in everything we do – from documentation to guidance to support. Quality is never compromised.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-xl transition-all">
              <CardContent className="pt-8">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 mb-6">
                  <Zap className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Transparency</h3>
                <p className="text-muted-foreground leading-relaxed">
                  No hidden fees, no unclear processes. We believe in complete transparency so you know exactly what to expect every step of the way.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 sm:py-28 lg:py-32 bg-background border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experienced professionals dedicated to your success
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-xl border border-border bg-card p-8 text-center hover:shadow-lg transition-all">
              <div className="h-24 w-24 rounded-full bg-primary/10 mx-auto mb-6 flex items-center justify-center">
                <Users className="h-12 w-12 text-primary opacity-40" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Financial Experts</h3>
              <p className="text-muted-foreground text-sm">
                Specialists in education financing with years of banking industry experience
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-8 text-center hover:shadow-lg transition-all">
              <div className="h-24 w-24 rounded-full bg-primary/10 mx-auto mb-6 flex items-center justify-center">
                <Globe className="h-12 w-12 text-primary opacity-40" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Visa Counsellors</h3>
              <p className="text-muted-foreground text-sm">
                Trained experts familiar with visa requirements across 50+ countries
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-8 text-center hover:shadow-lg transition-all">
              <div className="h-24 w-24 rounded-full bg-primary/10 mx-auto mb-6 flex items-center justify-center">
                <Target className="h-12 w-12 text-primary opacity-40" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Support Specialists</h3>
              <p className="text-muted-foreground text-sm">
                Dedicated to providing 24/7 assistance and guidance throughout your journey
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 sm:py-28 lg:py-32 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-4">
            <div className="text-center space-y-3">
              <div className="text-5xl sm:text-6xl font-bold">10K+</div>
              <p className="text-lg">Students Helped</p>
              <p className="text-sm text-primary-foreground/70">And counting...</p>
            </div>
            <div className="text-center space-y-3">
              <div className="text-5xl sm:text-6xl font-bold">98%</div>
              <p className="text-lg">Success Rate</p>
              <p className="text-sm text-primary-foreground/70">Visa approvals</p>
            </div>
            <div className="text-center space-y-3">
              <div className="text-5xl sm:text-6xl font-bold">50+</div>
              <p className="text-lg">Bank Partners</p>
              <p className="text-sm text-primary-foreground/70">Financial institutions</p>
            </div>
            <div className="text-center space-y-3">
              <div className="text-5xl sm:text-6xl font-bold">24/7</div>
              <p className="text-lg">Support</p>
              <p className="text-sm text-primary-foreground/70">Always available</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-28 lg:py-32 bg-background border-y border-border">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">Join Our Success Stories</h2>
            <p className="text-lg text-muted-foreground">
              Your dream of studying abroad is just one consultation away. Let's make it happen together.
            </p>
          </div>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
            Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
