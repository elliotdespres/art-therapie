import Link from "next/link";

const seances = [
  {
    categorie: "Art-thérapie",
    couleur: "bg-terra/10 border-terra/20",
    titreColor: "text-terra",
    items: [
      {
        titre: "Séance individuelle adulte / senior",
        public: "Adultes, seniors",
        duree: "1h",
        desc: "Un accompagnement personnalisé par la création pour explorer vos émotions, traverser une période difficile ou simplement vous reconnecter à vous-même.",
      },
      {
        titre: "Séance individuelle enfant / adolescent",
        public: "Enfants, adolescents",
        duree: "45 min",
        desc: "La création comme espace d'expression libre pour les plus jeunes — anxiété, confiance en soi, difficultés scolaires ou familiales.",
      },
    ],
  },
  {
    categorie: "Arts plastiques",
    couleur: "bg-sage/10 border-sage/20",
    titreColor: "text-sage",
    items: [
      {
        titre: "Micro-ateliers zen",
        public: "Jeunes (6-12 ans)",
        duree: "1h",
        desc: "Des ateliers créatifs en petits groupes pour initier les enfants aux arts plastiques dans un cadre zen et bienveillant.",
      },
      {
        titre: "Cours création & techniques",
        public: "Pré-adolescents (12-16 ans)",
        duree: "1h30",
        desc: "Exploration des techniques artistiques — dessin, peinture, collage — pour développer sa sensibilité et son expression.",
      },
      {
        titre: "Cours adultes débutants",
        public: "Adultes",
        duree: "2h",
        desc: "Apprenez les bases des arts plastiques dans une atmosphère détendue. Aucune expérience requise.",
      },
      {
        titre: "Cours perfectionnement",
        public: "Adultes confirmés",
        duree: "2h",
        desc: "Pour ceux qui souhaitent approfondir leur pratique et développer leur style personnel.",
      },
    ],
  },
  {
    categorie: "Interventions extérieures",
    couleur: "bg-brown/10 border-brown/20",
    titreColor: "text-brown",
    items: [
      {
        titre: "Session en institution / association",
        public: "Groupes",
        duree: "Sur devis",
        desc: "Interventions en EHPAD, hôpitaux, associations, écoles… pour proposer la création comme outil de lien social et de bien-être.",
      },
      {
        titre: "Atelier bien-être en entreprise",
        public: "Équipes",
        duree: "Sur devis",
        desc: "Réduction du stress et cohésion d'équipe par la création artistique. Idéal pour des séminaires ou des journées bien-être.",
      },
    ],
  },
];

export default function Seances() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-b from-cream to-beige py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="font-sans text-terra text-sm uppercase tracking-widest mb-3">
            Tarifs & séances
          </p>
          <h1 className="font-serif text-5xl text-charcoal mb-6">Mes séances</h1>
          <p className="font-sans text-muted text-lg leading-relaxed">
            Des accompagnements adaptés à chaque âge et chaque besoin, à l&apos;atelier Espace Chloro&apos;feel à Le Vaudreuil.
          </p>
        </div>
      </section>

      {/* Séances */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 space-y-16">
          {seances.map((s) => (
            <div key={s.categorie}>
              <h2 className={`font-serif text-3xl ${s.titreColor} mb-8`}>{s.categorie}</h2>
              <div className="space-y-4">
                {s.items.map((item) => (
                  <div
                    key={item.titre}
                    className={`rounded-2xl border p-6 ${s.couleur}`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                      <h3 className="font-serif text-xl text-charcoal">{item.titre}</h3>
                      <div className="flex gap-3 shrink-0">
                        <span className="font-sans text-xs bg-white/70 text-charcoal px-3 py-1 rounded-full">
                          {item.public}
                        </span>
                        <span className="font-sans text-xs bg-white/70 text-charcoal px-3 py-1 rounded-full">
                          {item.duree}
                        </span>
                      </div>
                    </div>
                    <p className="font-sans text-muted text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Note tarifs */}
      <section className="bg-beige py-12">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="font-sans text-muted text-sm leading-relaxed">
            Pour connaître les tarifs détaillés et les disponibilités, n&apos;hésitez pas à me contacter directement par email ou téléphone. Une première séance découverte peut être organisée pour répondre à toutes vos questions.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/reservation"
              className="bg-terra text-white font-sans px-8 py-3.5 rounded-full hover:bg-terra-dark transition-colors"
            >
              Prendre rendez-vous
            </Link>
            <Link
              href="/contact"
              className="border border-charcoal text-charcoal font-sans px-8 py-3.5 rounded-full hover:bg-charcoal hover:text-cream transition-colors"
            >
              Poser une question
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
