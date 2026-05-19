"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Baby, Sparkles, Star } from "lucide-react"

const offers = [
  {
    id: "maluszki",
    icon: Baby,
    title: "Maluszki",
    age: "0–3 lata",
    description:
      "Delikatne, spokojne spotkania pełne dźwięków, rytmu i prostych opowieści. Bezpieczna przestrzeń dla najmłodszych dzieci i ich rodziców.",
  },
  {
    id: "mali-odkrywcy",
    icon: Sparkles,
    title: "Mali Odkrywcy",
    age: "3–12 lat",
    description:
      "Bajkowe spotkania pełne przygód, ruchu i emocji. Dzieci aktywnie uczestniczą w wydarzeniu i odkrywają świat wyobraźni.",
  },
]

export function OfferSection() {
  return (
    <section id="oferta" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Oferta
          </h2>
          <p className="text-lg text-muted-foreground">
            Wybierz program dopasowany do wieku Twojego dziecka
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {offers.map((offer) => (
              <AccordionItem
                key={offer.id}
                value={offer.id}
                className="bg-card rounded-2xl border border-border/50 overflow-hidden shadow-sm"
              >
                <AccordionTrigger className="px-6 py-5 hover:no-underline hover:bg-secondary/50 transition-colors [&[data-state=open]]:bg-secondary/50">
                  <div className="flex items-center gap-4 text-left">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <offer.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-semibold text-foreground">
                        {offer.title}
                      </h3>
                      <p className="text-sm text-primary font-medium">
                        {offer.age}
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 pt-2">
                  <p className="text-muted-foreground leading-relaxed pl-16">
                    {offer.description}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
