import Image from "next/image"
import { Heart } from "lucide-react"

export function AboutSection() {
  return (
    <section id="o-nas" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-lg" style={{ position: 'relative' }}>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1775043190981-1zxJiX5UyQ4w3awxKv21KmmUv5Bakt.png"
                alt="Radosne dzieci podczas wydarzenia Bajkowa Fantazja"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <Heart className="w-6 h-6 text-accent" />
                <h2 className="font-serif text-4xl font-semibold text-foreground">
                  O nas
                </h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Czy pamiętasz swoją ulubioną bajkę z dzieciństwa? Tę historię, której chciało się słuchać wciąż od nowa, która pobudzała wyobraźnię i na długo pozostawała w sercu?
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Wierzymy, że takie opowieści mają niezwykłą moc - łączą pokolenia, rozwijają wrażliwość i tworzą piękne wspomnienia.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Tworzymy wyjątkowe spotkania dla dzieci, podczas których bajkowe historie ożywają dzięki muzyce i sztuce opowiadania. Łącząc doświadczenie artystyczne z wieloletnią pracą z dziećmi, tworzymy atmosferę pełną magii, radości i wyobraźni.
              </p>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
