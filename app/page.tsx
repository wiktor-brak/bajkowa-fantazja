import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { EventsSection } from "@/components/events-section"
import { BenefitsSection } from "@/components/benefits-section"
import { OfferSection } from "@/components/offer-section"

import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function BajkowaFantazjaPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <BenefitsSection />
      <OfferSection />
      <EventsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
