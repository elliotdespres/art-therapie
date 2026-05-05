import Link from "next/link";

export default function APropos() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-b from-cream to-beige py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="font-sans text-terra text-sm uppercase tracking-widest mb-3">
            Qui suis-je ?
          </p>
          <h1 className="font-serif text-5xl text-charcoal mb-6">À propos</h1>
          <p className="font-sans text-muted text-lg leading-relaxed">
            Art-thérapeute diplômée, je vous accompagne dans un espace de création bienveillant, à Le Vaudreuil en Normandie.
          </p>
        </div>
      </section>

      {/* Présentation */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center">
            <div className="w-80 h-96 bg-beige rounded-3xl border-2 border-sage-light flex items-center justify-center">
              <p className="font-sans text-muted text-sm text-center px-8">
                Photo de Marjorie
                <br />
                <span className="text-xs opacity-60">(à ajouter)</span>
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-serif text-3xl text-charcoal mb-6">Marjorie Prieux</h2>
            <p className="font-sans text-muted leading-relaxed mb-4">
              Je suis art-thérapeute, passionnée par le pouvoir transformateur de la création artistique. Mon parcours m&apos;a amenée à comprendre que l&apos;art n&apos;est pas réservé aux artistes — c&apos;est un langage universel, accessible à tous.
            </p>
            <p className="font-sans text-muted leading-relaxed mb-4">
              Dans mon atelier à l&apos;Espace Chloro&apos;feel, à Le Vaudreuil, j&apos;accueille enfants, adolescents, adultes et seniors avec la même bienveillance. Chaque personne porte en elle une créativité unique qui n&apos;attend qu&apos;à s&apos;exprimer.
            </p>
            <p className="font-sans text-muted leading-relaxed mb-8">
              Je propose également des interventions en institutions, collectivités, associations et entreprises, pour que la créativité devienne un outil de mieux-être collectif.
            </p>
            <Link
              href="/reservation"
              className="bg-terra text-white font-sans px-8 py-3.5 rounded-full hover:bg-terra-dark transition-colors inline-block"
            >
              Prendre rendez-vous
            </Link>
          </div>
        </div>
      </section>

      {/* Citation */}
      <section className="bg-beige py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="font-serif text-3xl text-charcoal leading-relaxed italic">
            &ldquo;L&apos;art-thérapie utilise le processus créatif qui agit comme un processus de transformation. Il libère, transforme et reconstruit.&rdquo;
          </p>
          <p className="font-sans text-muted text-sm mt-6">— Marjorie Prieux</p>
        </div>
      </section>

      {/* Approche */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="font-sans text-terra text-sm uppercase tracking-widest mb-3">
              Ma pratique
            </p>
            <h2 className="font-serif text-4xl text-charcoal">Mon approche</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Bienveillance",
                desc: "Un espace sans jugement où chacun peut s'exprimer librement, à son rythme, sans compétence artistique requise.",
              },
              {
                title: "Transformation",
                desc: "Le geste créatif permet d'accéder à ce que les mots ne peuvent pas toujours dire et d'initier un changement intérieur.",
              },
              {
                title: "Confidentalité",
                desc: "Chaque séance se déroule dans un cadre éthique et confidentiel, respectueux de votre intimité et de votre histoire.",
              },
            ].map((v) => (
              <div key={v.title} className="text-center p-6">
                <h3 className="font-serif text-xl text-terra mb-3">{v.title}</h3>
                <p className="font-sans text-muted text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-terra py-16 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-serif text-3xl text-white mb-4">
            Vous souhaitez en savoir plus ?
          </h2>
          <p className="font-sans text-white/80 mb-8">
            N&apos;hésitez pas à me contacter pour toute question ou pour réserver une première séance découverte.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/reservation"
              className="bg-white text-terra font-sans font-medium px-8 py-3.5 rounded-full hover:bg-cream transition-colors"
            >
              Prendre rendez-vous
            </Link>
            <Link
              href="/contact"
              className="border border-white text-white font-sans px-8 py-3.5 rounded-full hover:bg-white/10 transition-colors"
            >
              Me contacter
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
