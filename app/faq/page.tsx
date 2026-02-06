'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { useState } from 'react'

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      category: 'Balance Confirmation Letter',
      items: [
        {
          q: 'What is a balance confirmation letter?',
          a: 'A balance confirmation letter is a document from your bank stating that you have sufficient funds to support your overseas education expenses. It\'s required by most universities and visa authorities to ensure you can afford your studies.'
        },
        {
          q: 'How long does it take to get the letter?',
          a: 'Typically, we can provide your balance confirmation letter within 24-48 hours of submitting all required documents. Our streamlined process and strong bank partnerships make this possible.'
        },
        {
          q: 'What documents do I need to provide?',
          a: 'You\'ll generally need: Your PAN, Aadhaar, latest bank statements (6-12 months), proof of income, investment certificates (if any), and any other financial documents. Our team will guide you on the exact requirements.'
        },
        {
          q: 'Can I get a letter for a specific amount?',
          a: 'Yes! We work with our bank partners to ensure your balance confirmation letter matches your required education expenses. Our counsellors will help you determine the optimal amount.'
        }
      ]
    },
    {
      category: 'Visa & Financial Assistance',
      items: [
        {
          q: 'What is your visa approval success rate?',
          a: 'We have an outstanding 98% visa approval success rate, which is the highest in the industry. This is achieved through expert guidance, proper documentation, and our comprehensive visa preparation process.'
        },
        {
          q: 'Do you provide guidance for all countries?',
          a: 'Yes, we assist students for 50+ countries including USA, UK, Canada, Australia, Germany, Singapore, and many more. Our team has expertise across all major study destinations.'
        },
        {
          q: 'How can you help with financial planning?',
          a: 'Our financial counsellors analyze your specific situation and help you: Compare education loans from multiple banks, Understand repayment schedules, Optimize your funding mix between loans, grants, and savings, and Plan for post-education finances.'
        },
        {
          q: 'What if my visa application gets rejected?',
          a: 'While rare with our guidance, if your visa is rejected, we provide comprehensive support to understand why and help you prepare for reapplication. We offer detailed analysis and improved strategies.'
        }
      ]
    },
    {
      category: 'Application Process',
      items: [
        {
          q: 'How do I start the application process?',
          a: 'Simply click "Apply Now" or "Book Consultation" on our website. You\'ll connect with our team, discuss your requirements, and we\'ll guide you through every step of the process.'
        },
        {
          q: 'Is there any charge for initial consultation?',
          a: 'No! Your initial consultation with our experts is completely free. We discuss your profile, requirements, and how we can best assist you before any commitment.'
        },
        {
          q: 'What are your service charges?',
          a: 'Our fees are transparent and competitive. The exact amount depends on the services you require. We provide a detailed breakdown during consultation with no hidden charges.'
        },
        {
          q: 'Can I apply if I haven\'t chosen a university yet?',
          a: 'Absolutely! Many students come to us without having finalized their university choice. We help you explore options, estimate costs, and plan your finances accordingly.'
        }
      ]
    },
    {
      category: 'Loans & Funding',
      items: [
        {
          q: 'What types of education loans are available?',
          a: 'Through our 50+ bank partners, you have access to: Government-backed education loans, Bank-specific schemes, Private loans for higher amounts, and Special programs for specific countries.'
        },
        {
          q: 'What are the typical interest rates?',
          a: 'Interest rates typically range from 7% to 10% depending on the bank and loan type. Our counsellors help you find the best rates available for your profile.'
        },
        {
          q: 'Do I need a co-applicant or guarantor?',
          a: 'Most banks require a parent or guardian as a co-applicant. Some offer options without a guarantor if you meet certain criteria. We guide you on the best options for your situation.'
        },
        {
          q: 'When do I start repaying the loan?',
          a: 'Typically, repayment begins 6-12 months after completing your studies (grace period). Some banks offer flexible repayment schedules. We explain all options during counselling.'
        }
      ]
    },
    {
      category: 'Support & Additional Services',
      items: [
        {
          q: 'Is support available after I receive my visa?',
          a: 'Absolutely! We provide post-visa support including: Fund transfer arrangements, Pre-departure guidance, Accommodation assistance, and Ongoing support during your studies.'
        },
        {
          q: 'What if I have questions at odd hours?',
          a: 'Our 24/7 support team is always available. You can reach us via email, phone, or our website chat at any time. We prioritize quick response times.'
        },
        {
          q: 'Can you help with scholarship applications?',
          a: 'While our primary focus is on loans and financing, we can provide guidance on scholarship opportunities and how to combine them with loans for optimal financial planning.'
        },
        {
          q: 'Do you provide travel and accommodation assistance?',
          a: 'Yes, we provide guidance on accommodation options and can connect you with our partner agencies for travel arrangements to make your transition smooth.'
        }
      ]
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const getAllFAQs = () => {
    let allFAQs: any[] = []
    let faqIndex = 0
    faqs.forEach((category) => {
      category.items.forEach((item) => {
        allFAQs.push({ ...item, faqIndex })
        faqIndex++
      })
    })
    return allFAQs
  }

  const allFAQs = getAllFAQs()

  return (
    <div className="w-full bg-background">
      <Header />

      {/* Page Header */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-primary/10 via-background to-accent/5 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 text-center">
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground text-balance">
              Frequently Asked <span className="text-primary">Questions</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about our services, process, and support
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 sm:py-28 lg:py-32 bg-background border-b border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {allFAQs.map((faq, index) => (
              <Card key={index} className="border-border hover:border-primary transition-all overflow-hidden cursor-pointer" onClick={() => toggleFAQ(index)}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="font-bold text-foreground text-lg leading-relaxed text-balance">
                        {faq.q}
                      </h3>
                    </div>
                    <ChevronDown 
                      className={`h-6 w-6 text-primary flex-shrink-0 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                    />
                  </div>
                  
                  {openIndex === index && (
                    <div className="mt-6 pt-6 border-t border-border">
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 sm:py-28 lg:py-32 bg-gradient-to-b from-background to-accent/5 border-b border-border">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Didn't Find Your Answer?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Our expert counsellors are always ready to answer your specific questions and provide personalized guidance. Reach out to us anytime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Contact Us <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-muted bg-transparent">
              Book Free Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Links CTA */}
      <section className="py-20 sm:py-28 lg:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Helpful Resources</h2>
            <p className="text-lg text-muted-foreground">
              Explore our services and learn more about the process
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border-border hover:shadow-xl transition-all hover:border-primary">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold text-foreground mb-3">Our Services</h3>
                <p className="text-muted-foreground mb-6">
                  Learn about balance confirmation letters, visa assistance, and financial guidance
                </p>
                <Button variant="outline" className="border-border text-foreground bg-transparent">
                  Explore Services
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-xl transition-all hover:border-primary">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold text-foreground mb-3">Success Stories</h3>
                <p className="text-muted-foreground mb-6">
                  See how 10,000+ students achieved their overseas education dreams
                </p>
                <Button variant="outline" className="border-border text-foreground bg-transparent">
                  View Stories
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-xl transition-all hover:border-primary">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold text-foreground mb-3">About Us</h3>
                <p className="text-muted-foreground mb-6">
                  Understand our mission, values, and commitment to your success
                </p>
                <Button variant="outline" className="border-border text-foreground bg-transparent">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
