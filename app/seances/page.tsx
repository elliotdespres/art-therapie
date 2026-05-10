import Link from "next/link";
import Image from "next/image";

const univers = [
  {
    id: "art-therapie",
    label: "Art-thérapie",
    couleurBg: "bg-terra/10",
    couleurBorder: "border-terra/20",
    couleurTitre: "text-terra",
    couleurBadge: "bg-terra/10 text-terra",
    img: "/arttherapie-seniors.jpg",
    imgAlt: "Séance d'art-thérapie",
    intro: "L'art-thérapie utilise la création artistique comme outil thérapeutique. Aucune compétence artistique requise — c'est le processus qui compte, pas le résultat.",
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
      {
        titre: "Micro-ateliers zen",
        public: "Jeunes (6-12 ans)",
        duree: "1h",
        desc: "De petits ateliers pour favoriser la création libre dans un espace zen et bienveillant — sans jugement, sans contrainte, juste l'envie de créer.",
      },
    ],
  },
  {
    id: "arts-plastiques",
    label: "Arts plastiques",
    couleurBg: "bg-sage/10",
    couleurBorder: "border-sage/20",
    couleurTitre: "text-sage",
    couleurBadge: "bg-sage/10 text-sage",
    img: "/aquarelle.jpeg",
    imgAlt: "Atelier arts plastiques",
    intro: "Des cours et ateliers pour tous les niveaux, dans un cadre bienveillant. Dessin, peinture, collage, sculpture — explorez les techniques à votre rythme.",
    items: [
      {
        titre: "Cours création & techniques",
        public: "Pré-ados (12-16 ans)",
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
    id: "team-building",
    label: "Team building",
    couleurBg: "bg-brown/10",
    couleurBorder: "border-brown/20",
    couleurTitre: "text-brown",
    couleurBadge: "bg-brown/10 text-brown",
    img: "/teambuilding-1.png",
    imgAlt: "Atelier team building en entreprise",
    intro: "Des sessions artistiques collectives pour renforcer la cohésion d'équipe, libérer la créativité et réduire le stress en entreprise ou en institution.",
    items: [
      {
        titre: "Atelier fresque collective",
        public: "Équipes 5-20 personnes",
        duree: "2h - 3h",
        desc: "Créer ensemble une grande fresque artistique. Idéal pour les séminaires, journées d'intégration ou événements d'entreprise.",
      },
      {
        titre: "Atelier bien-être",
        public: "Équipes",
        duree: "1h30",
        desc: "Réduction du stress et reconnexion à soi par la création artistique. Un moment de pause créative pour vos collaborateurs.",
      },
      {
        titre: "Intervention en institution",
        public: "EHPAD, hôpitaux, associations",
        duree: "Sur devis",
        desc: "Sessions adaptées en établissements de santé, associations et collectivités pour proposer la création comme lien social et bien-être.",
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
            Séances & tarifs
          </p>
          <h1 className="font-serif text-5xl text-charcoal mb-6">Mes accompagnements</h1>
          <p className="font-sans text-muted text-lg leading-relaxed">
            Trois univers complémentaires pour répondre à tous vos besoins — à l&apos;atelier Espace Chloro&apos;feel ou en déplacement.
          </p>
        </div>
      </section>

      {/* Univers */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6 space-y-24">
          {univers.map((u, i) => (
            <div key={u.id} id={u.id}>
              {/* Titre univers */}
              <div className={`flex items-center gap-4 mb-10 pb-4 border-b ${u.couleurBorder}`}>
                <h2 className={`font-serif text-4xl ${u.couleurTitre}`}>{u.label}</h2>
              </div>

              {/* Photo + intro */}
              <div className={`grid md:grid-cols-2 gap-10 items-center mb-10 ${i % 2 === 1 ? "md:[direction:rtl]" : ""}`}>
                <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg md:[direction:ltr]">
                  <Image src={u.img} alt={u.imgAlt} fill className="object-cover" />
                </div>
                <div className="md:[direction:ltr]">
                  <p className="font-sans text-muted text-lg leading-relaxed">{u.intro}</p>
                </div>
              </div>

              {/* Séances */}
              <div className="space-y-4">
                {u.items.map((item) => (
                  <div key={item.titre} className={`rounded-2xl border p-6 ${u.couleurBg} ${u.couleurBorder}`}>
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                      <h3 className="font-serif text-xl text-charcoal">{item.titre}</h3>
                      <div className="flex gap-2 shrink-0 flex-wrap">
                        <span className={`font-sans text-xs px-3 py-1 rounded-full ${u.couleurBadge}`}>
                          {item.public}
                        </span>
                        <span className="font-sans text-xs bg-white text-charcoal px-3 py-1 rounded-full">
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

      {/* Galerie team building */}
      <section className="bg-beige py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="font-serif text-2xl text-charcoal mb-6 text-center">Aperçu des ateliers team building</h3>
          <div className="grid grid-cols-3 gap-4">
            {["/teambuilding-1.png", "/teambuilding-2.png", "/teambuilding-3.png"].map((src, i) => (
              <div key={i} className="relative aspect-square rounded-xl overflow-hidden shadow-md">
                <Image src={src} alt={`Team building ${i + 1}`} fill className="object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="font-sans text-muted text-sm leading-relaxed mb-6">
            Pour connaître les tarifs détaillés et les disponibilités, contactez-moi directement. Une première séance découverte peut être organisée sans engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/reservation" className="bg-terra text-white font-sans px-8 py-3.5 rounded-full hover:bg-terra-dark transition-colors">
              Prendre rendez-vous
            </Link>
            <Link href="/contact" className="border border-charcoal text-charcoal font-sans px-8 py-3.5 rounded-full hover:bg-charcoal hover:text-cream transition-colors">
              Poser une question
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
