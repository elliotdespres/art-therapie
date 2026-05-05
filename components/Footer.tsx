import Link from "next/link";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "À propos" },
  { href: "/seances", label: "Séances & Tarifs" },
  { href: "/reservation", label: "Réservation" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <p className="font-serif text-lg mb-1">Art-Thérapie</p>
          <p className="font-sans text-sm text-cream/50 mb-4">Marjorie Prieux</p>
          <p className="font-sans text-sm text-cream/70 leading-relaxed">
            Un espace doux et bienveillant pour explorer vos émotions à travers la création.
          </p>
        </div>

        <div>
          <p className="font-sans text-xs uppercase tracking-widest text-cream/50 mb-4">
            Navigation
          </p>
          <ul className="space-y-2">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="font-sans text-sm text-cream/70 hover:text-cream transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-sans text-xs uppercase tracking-widest text-cream/50 mb-4">
            Contact
          </p>
          <ul className="space-y-2 font-sans text-sm text-cream/70">
            <li>✉️ [votre@email.com]</li>
            <li>📞 [06 XX XX XX XX]</li>
            <li>📍 [Votre ville]</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10 py-4 text-center font-sans text-xs text-cream/30">
        © 2025 Marjorie Prieux — Art-Thérapie
      </div>
    </footer>
  );
}
