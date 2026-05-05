import Link from "next/link";

const services = [
  {
    icon: "🎨",
    title: "Séances individuelles",
    desc: "Un accompagnement personnalisé, à votre rythme, pour explorer vos émotions à travers la création artistique.",
  },
  {
    icon: "🌿",
    title: "Ateliers collectifs",
    desc: "Créer ensemble dans un espace bienveillant. La dynamique de groupe enrichit l'expérience de chacun.",
  },
  {
    icon: "🌸",
    title: "Enfants & adolescents",
    desc: "Des séances adaptées pour aider les plus jeunes à exprimer ce que les mots ne peuvent pas toujours dire.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-[90vh] bg-gradient-to-b from-cream to-beige flex items-center">
        <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-sans text-terra text-sm uppercase tracking-widest mb-4">
              Art-Thérapie
            </p>
            <h1 className="font-serif text-5xl md:text-6xl text-charcoal leading-tight mb-6">
              L&apos;art comme<br />chemin vers soi
            </h1>
            <p className="font-sans text-muted text-lg leading-relaxed mb-8 max-w-md">
              Un espace de création et d&apos;exploration émotionnelle pour vous accompagner dans votre épanouissement et votre bien-être.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/reservation"
                className="bg-terra text-white font-sans px-8 py-3.5 rounded-full hover:bg-terra-dark transition-colors text-center"
              >
                Prendre rendez-vous
              </Link>
              <Link
                href="/a-propos"
                className="border border-charcoal text-charcoal font-sans px-8 py-3.5 rounded-full hover:bg-charcoal hover:text-cream transition-colors text-center"
              >
                En savoir plus
              </Link>
            </div>
          </div>

          <div className="hidden md:flex justify-center">
            <div className="w-80 h-96 bg-beige rounded-3xl border-2 border-sage-light flex items-center justify-center">
              <p className="font-sans text-muted text-sm text-center px-8">
                Votre photo ici
                <br />
                <span className="text-xs opacity-60">(portrait, atelier…)</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="font-sans text-terra text-sm uppercase tracking-widest mb-3">
              Ce que je propose
            </p>
            <h2 className="font-serif text-4xl text-charcoal">Mes accompagnements</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-cream rounded-2xl p-8 hover:shadow-md transition-shadow"
              >
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 className="font-serif text-xl text-charcoal mb-3">{s.title}</h3>
                <p className="font-sans text-muted text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/seances"
              className="font-sans text-terra text-sm underline underline-offset-4 hover:text-terra-dark transition-colors"
            >
              Voir les séances et tarifs →
            </Link>
          </div>
        </div>
      </section>

      {/* Approche */}
      <section className="bg-beige py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-sans text-terra text-sm uppercase tracking-widest mb-3">
              Mon approche
            </p>
            <h2 className="font-serif text-4xl text-charcoal mb-6">
              Créer pour se retrouver
            </h2>
            <p className="font-sans text-muted leading-relaxed mb-4">
              L&apos;art-thérapie ne demande aucune compétence artistique. Ce n&apos;est pas le résultat qui compte, mais le chemin parcouru. À travers le dessin, la peinture, le collage ou la sculpture, chaque geste devient une parole intérieure.
            </p>
            <p className="font-sans text-muted leading-relaxed mb-8">
              Dans un cadre confidentiel et bienveillant, je vous accompagne avec douceur pour que vous puissiez explorer, exprimer et transformer ce que vous ressentez.
            </p>
            <Link
              href="/a-propos"
              className="bg-terra text-white font-sans px-8 py-3.5 rounded-full hover:bg-terra-dark transition-colors inline-block"
            >
              Découvrir mon parcours
            </Link>
          </div>

          <div className="flex justify-center">
            <div className="w-72 h-80 bg-sage-light/40 rounded-3xl border border-sage flex items-center justify-center">
              <p className="font-sans text-muted text-sm text-center px-8">
                Photo de l&apos;atelier
                <br />
                <span className="text-xs opacity-60">ou de vos créations</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA finale */}
      <section className="bg-terra py-20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-serif text-4xl text-white mb-4">Prêt(e) à commencer ?</h2>
          <p className="font-sans text-white/80 text-lg leading-relaxed mb-8">
            La première séance est un moment d&apos;échange pour qu&apos;on se rencontre et que vous posiez toutes vos questions, sans engagement.
          </p>
          <Link
            href="/reservation"
            className="bg-white text-terra font-sans font-medium px-10 py-4 rounded-full hover:bg-cream transition-colors inline-block"
          >
            Réserver ma première séance
          </Link>
        </div>
      </section>
    </>
  );
}
