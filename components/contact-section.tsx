import { Mail, Phone, MapPin, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "bajkowafantazja@gmail.com",
    href: "mailto:bajkowafantazja@gmail.com",
  },
  {
    icon: Phone,
    label: "Telefon",
    value: "+48 123 456 789",
    href: "tel:+48123456789",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@bajkowafantazja",
    href: "https://instagram.com/bajkowafantazja",
  },
  {
    icon: MapPin,
    label: "Lokalizacja",
    value: "Bydgoszcz",
    href: null,
  },
]

export function ContactSection() {
  return (
    <section id="kontakt" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Kontakt
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            Masz pytania? Chętnie odpowiemy!
          </p>

          <div className="grid gap-6 sm:grid-cols-2 mb-12">
            {contactInfo.map((info) => (
              <div
                key={info.label}
                className="bg-card rounded-2xl p-6 border border-border/50 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <info.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                {info.href ? (
                  <a
                    href={info.href}
                    className="text-foreground font-medium hover:text-primary transition-colors"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-foreground font-medium">{info.value}</p>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
