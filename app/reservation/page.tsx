import Link from "next/link";

export default function Reservation() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-b from-cream to-beige py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="font-sans text-terra text-sm uppercase tracking-widest mb-3">
            Réservation
          </p>
          <h1 className="font-serif text-5xl text-charcoal mb-6">Prendre rendez-vous</h1>
          <p className="font-sans text-muted text-lg leading-relaxed">
            Choisissez un créneau qui vous convient directement en ligne.
          </p>
        </div>
      </section>

      {/* Calendrier */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          {/* Bloc à remplacer par le vrai calendrier Cal.com */}
          <div className="bg-beige rounded-3xl p-12 text-center border border-sage-light">
            <p className="font-serif text-2xl text-charcoal mb-4">Calendrier de réservation</p>
            <p className="font-sans text-muted text-sm leading-relaxed mb-8 max-w-md mx-auto">
              Le calendrier en ligne sera bientôt disponible ici. En attendant, vous pouvez réserver directement par téléphone ou email.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+33666168995"
                className="bg-terra text-white font-sans px-8 py-3.5 rounded-full hover:bg-terra-dark transition-colors"
              >
                📞 06 66 16 89 95
              </a>
              <a
                href="mailto:marjorie.prieux@gmail.com"
                className="border border-charcoal text-charcoal font-sans px-8 py-3.5 rounded-full hover:bg-charcoal hover:text-cream transition-colors"
              >
                ✉️ Envoyer un email
              </a>
            </div>
          </div>

          {/* Info pratique */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "📍",
                titre: "Où ?",
                texte: "Espace Chloro'feel, 3b rue Edmonds Mailloux, 27100 Le Vaudreuil",
              },
              {
                icon: "⏱️",
                titre: "Durée",
                texte: "45 min à 2h selon le type de séance. La première séance est souvent un temps d'échange.",
              },
              {
                icon: "💬",
                titre: "Première séance",
                texte: "Un moment pour se rencontrer, poser vos questions et voir si l'accompagnement vous convient, sans engagement.",
              },
            ].map((info) => (
              <div key={info.titre} className="bg-cream rounded-2xl p-6">
                <p className="text-2xl mb-3">{info.icon}</p>
                <p className="font-serif text-lg text-charcoal mb-2">{info.titre}</p>
                <p className="font-sans text-muted text-sm leading-relaxed">{info.texte}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Questions */}
      <section className="bg-beige py-16 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <p className="font-sans text-muted mb-4">Vous avez des questions avant de réserver ?</p>
          <Link
            href="/contact"
            className="font-sans text-terra underline underline-offset-4 hover:text-terra-dark transition-colors"
          >
            Contactez-moi →
          </Link>
        </div>
      </section>
    </>
  );
}
