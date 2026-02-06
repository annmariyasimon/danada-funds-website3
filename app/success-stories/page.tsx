'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, Star, MapPin } from 'lucide-react'

export default function SuccessStoriesPage() {
  const stories = [
    {
      name: 'Aisha Patel',
      university: 'University of Toronto',
      country: 'Canada',
      field: 'Computer Science',
      quote: 'Danada Funds made the entire process so simple. Within just 2 weeks, I had my balance confirmation letter and was on my way to pursuing my dreams at one of the world\'s best universities.',
      rating: 5
    },
    {
      name: 'Rohan Sharma',
      university: 'University of Melbourne',
      country: 'Australia',
      field: 'Engineering',
      quote: 'The expertise of the counsellors was exceptional. They guided me through every step and helped me understand the financial aspects clearly. My visa was approved on first attempt!',
      rating: 5
    },
    {
      name: 'Priya Verma',
      university: 'University of UK',
      country: 'United Kingdom',
      field: 'Business Administration',
      quote: 'I was stressed about the financial paperwork, but Danada Funds handled everything professionally. Now I\'m studying at my dream university and couldn\'t be happier.',
      rating: 5
    },
    {
      name: 'Arjun Khanna',
      university: 'MIT',
      country: 'USA',
      field: 'Data Science',
      quote: 'The bank partnerships Danada Funds has are incredible. I got approved for financing even though I wasn\'t sure if I would qualify. Highly recommended!',
      rating: 5
    },
    {
      name: 'Neha Singh',
      university: 'ETH Zurich',
      country: 'Switzerland',
      field: 'Physics',
      quote: 'Professional, reliable, and supportive – that\'s Danada Funds. From balance confirmation to visa approval, everything was seamless. Five stars!',
      rating: 5
    },
    {
      name: 'Vikram Das',
      university: 'National University of Singapore',
      country: 'Singapore',
      field: 'Finance',
      quote: 'The 24/7 support was crucial for me since I had many questions at odd hours. Every time I reached out, I got immediate help. Fantastic service!',
      rating: 5
    }
  ]

  return (
    <div className="w-full bg-background">
      <Header />

      {/* Page Header */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-primary/10 via-background to-accent/5 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 text-center">
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground text-balance">
              Success <span className="text-primary">Stories</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real students, real dreams, real success. See how we've helped thousands achieve their overseas education goals.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-12 sm:py-16 bg-primary text-primary-foreground border-b border-primary/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-3 text-center">
            <div>
              <div className="text-4xl sm:text-5xl font-bold mb-2">10,000+</div>
              <p className="text-primary-foreground/80">Students Empowered</p>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold mb-2">98%</div>
              <p className="text-primary-foreground/80">Success Rate</p>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold mb-2">50+</div>
              <p className="text-primary-foreground/80">Countries Reached</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-20 sm:py-28 lg:py-32 bg-background border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {stories.map((story, index) => (
              <Card key={index} className="border-border hover:shadow-xl transition-all overflow-hidden group">
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(story.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  
                  <blockquote className="text-muted-foreground italic mb-6 leading-relaxed">
                    "{story.quote}"
                  </blockquote>

                  <div className="space-y-3 border-t border-border pt-6">
                    <div>
                      <p className="font-bold text-foreground">{story.name}</p>
                      <p className="text-sm text-muted-foreground">{story.field}</p>
                    </div>
                    <div className="flex gap-2 items-start text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5 text-primary" />
                      <div>
                        <p className="font-medium text-foreground">{story.university}</p>
                        <p>{story.country}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 sm:py-28 lg:py-32 bg-gradient-to-b from-background to-accent/5 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Why Students Choose Us</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The numbers speak for themselves
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-4">
            <div className="rounded-xl border border-border bg-background p-8 text-center hover:shadow-lg transition-all">
              <div className="text-4xl font-bold text-primary mb-3">24-48 hrs</div>
              <p className="text-foreground font-semibold mb-2">Fast Processing</p>
              <p className="text-sm text-muted-foreground">Get balance confirmation letters in 1-2 days</p>
            </div>

            <div className="rounded-xl border border-border bg-background p-8 text-center hover:shadow-lg transition-all">
              <div className="text-4xl font-bold text-primary mb-3">Zero Hidden</div>
              <p className="text-foreground font-semibold mb-2">Transparent Fees</p>
              <p className="text-sm text-muted-foreground">No surprises, complete clarity on all charges</p>
            </div>

            <div className="rounded-xl border border-border bg-background p-8 text-center hover:shadow-lg transition-all">
              <div className="text-4xl font-bold text-primary mb-3">1st Attempt</div>
              <p className="text-foreground font-semibold mb-2">High Approval</p>
              <p className="text-sm text-muted-foreground">98% visa approval rate on first submission</p>
            </div>

            <div className="rounded-xl border border-border bg-background p-8 text-center hover:shadow-lg transition-all">
              <div className="text-4xl font-bold text-primary mb-3">50+ Banks</div>
              <p className="text-foreground font-semibold mb-2">Partnerships</p>
              <p className="text-sm text-muted-foreground">Access to leading financial institutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Video CTA */}
      <section className="py-20 sm:py-28 lg:py-32 bg-background border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Hear From Our Students
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Watch video testimonials from students who've successfully navigated their overseas education journey with Danada Funds. Get real insights into what the process is like and how we've helped make their dreams come true.
              </p>
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                View Video Testimonials <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="relative">
              <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
              <div className="relative bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl border border-primary/20 aspect-video flex items-center justify-center overflow-hidden">
                <div className="text-center space-y-4">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
                    <ArrowRight className="h-8 w-8 text-primary" />
                  </div>
                  <p className="text-muted-foreground font-medium">Click to play video testimonials</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-28 lg:py-32 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold">Your Success Story Awaits</h2>
            <p className="text-lg text-primary-foreground/80">
              You could be one of our next success stories. Join thousands of students already achieving their dreams.
            </p>
          </div>
          <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold">
            Start Your Journey Now <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
