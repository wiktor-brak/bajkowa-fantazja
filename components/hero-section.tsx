import Image from "next/image"
import { ChevronRight } from "lucide-react";

export function HeroSection() {
  return (
    <section id="start" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1775043203568-VU00n497jRN4J2apHiI4QoAlB4A7sV.png"
          alt="Bajkowa scena z dziećmi słuchającymi opowieści w magicznym lesie"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/80" />
      </div>
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-10 pb-32 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="-mt-10 md:-mt-14">
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-semibold text-foreground mb-6 tracking-wide text-balance">
              Bajkowa Fantazja
            </h1>
            <p className="text-xl md:text-2xl text-foreground/90 font-medium mb-2">
              Muzyka, opowieści i magia dla dzieci
            </p>
            <p className="text-lg text-foreground/70 mb-6 max-w-xl mx-auto">
              Kameralne wydarzenia dla dzieci i rodziców
            </p>
          </div>

          <div className="mt-28 flex justify-center">
            <a
              href="#wydarzenia"
              className="inline-flex items-center gap-3 justify-center rounded-full px-14 py-3.5 text-lg font-semibold text-white bg-[#7ba3c4] shadow-xl shadow-[#7ba3c4]/30 transition-all duration-300 hover:bg-[#6a93b5] hover:scale-105 hover:-translate-y-1 opacity-95"   >
              <span>Kup bilet</span>

            </a>
          </div>
        </div>
      </div>
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-foreground/40 rounded-full" />
        </div>
      </div>
    </section>
  )
}
