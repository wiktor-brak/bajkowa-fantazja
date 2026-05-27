import { Clock, Sparkles } from "lucide-react"

const eventTimes = ["12:00", "14:00", "16:00", "18:00", "20:00"]

export function EventsSection() {
  return (
    <section id="wydarzenia" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Sparkles className="w-8 h-8 text-primary" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-6">
            Nasze wydarzenia
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-12 max-w-2xl mx-auto">
            Każde spotkanie to godzina magii, w której dzieci przenoszą się do świata opowieści, muzyki i ruchu.
          </p>

          {/* Start*/}
<div className="max-w-2xl mx-auto bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow mb-12">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Magiczna Opowieść
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Przywitaj się ze światem pełnym niesamowitych postaci i przygód. Godzina pełna emocji, muzyki i magicznych momentów, które będą żyć w pamięci Twojego dziecka.
            </p>
            <div className="flex justify-center">
              <a
                href="https://bajkowafantazja.tixx.pl"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 text-lg rounded-full bg-[#7ba3c4] hover:bg-[#6a93b5] text-white opacity-90 inline-flex items-center justify-center font-medium transition-colors"
              >
                Kup bilet
              </a>
            </div>
          </div>
          {/* Koniec*/}

                    {/* Start*/}
<div className="max-w-2xl mx-auto bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow mb-12">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Calineczka
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
             bajka dla dzieci wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
            </p>
            <div className="flex justify-center">
              <a
                href="https://bajkowafantazja.tixx.pl"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 text-lg rounded-full bg-[#7ba3c4] hover:bg-[#6a93b5] text-white opacity-90 inline-flex items-center justify-center font-medium transition-colors"
              >
                Kup bilet
              </a>
            </div>
          </div>
          {/* Koniec*/}
          <div className="flex flex-wrap justify-center gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>Czas trwania: 60 minut</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-foreground">Cena: 60 zł</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
