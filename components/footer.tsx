import Link from "next/link"
import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-8 bg-secondary/50 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <Link
            href="#start"
            className="font-serif text-xl font-semibold text-foreground"
          >
            Bajkowa Fantazja
          </Link>

          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Stworzone z <Heart className="w-4 h-4 text-accent fill-accent" /> w Bydgoszczy
          </p>

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Bajkowa Fantazja. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  )
}
