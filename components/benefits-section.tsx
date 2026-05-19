import { Sparkles, Heart, Palette, Users, Music } from "lucide-react"

const benefits = [
  {
    icon: Sparkles,
    title: "Rozbudzamy wyobraźnię",
    description: "Magiczne opowieści przenoszą dzieci do świata fantazji",
  },
  {
    icon: Heart,
    title: "Tworzymy wspomnienia",
    description: "Wyjątkowe chwile, które zostają na zawsze",
  },
  {
    icon: Palette,
    title: "Wspieramy rozwój przez sztukę",
    description: "Muzyka i bajki wspierają rozwój emocjonalny",
  },
  {
    icon: Music,
    title: "Ruch i ekspresja",
    description: "Taniec i zabawa rozwijają kreatywność",
  },
]

export function BenefitsSection() {
  return (
    <section id="korzysci" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Dlaczego warto wziąć udział?
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-card rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 border border-border/50 group"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
