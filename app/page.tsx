"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import AnimateIn from "@/components/AnimateIn";

const services = [
  {
    icon: "🎨",
    title: "Art-thérapie",
    desc: "Séances individuelles pour enfants, adolescents, adultes et seniors. La créativité comme outil de transformation personnelle.",
  },
  {
    icon: "🖌️",
    title: "Arts plastiques",
    desc: "Micro-ateliers zen, cours de création et techniques pour tous les niveaux — débutants et perfectionnement.",
  },
  {
    icon: "🌿",
    title: "Interventions extérieures",
    desc: "Sessions en institutions, collectivités, associations et entreprises autour de l'expression émotionnelle et du bien-être.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-screen bg-gradient-to-b from-cream via-beige to-cream flex flex-col items-center justify-center text-center px-6 -mt-20 pt-20">
        <motion.p
          className="font-sans text-terra text-sm uppercase tracking-[0.3em] mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Art-thérapeute · Le Vaudreuil, Normandie
        </motion.p>

        <motion.h1
          className="font-serif text-6xl md:text-8xl lg:text-9xl text-charcoal leading-[1.05] mb-8 max-w-5xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        >
          L&apos;art comme<br />chemin vers soi
        </motion.h1>

        <motion.p
          className="font-sans text-muted text-xl leading-relaxed mb-12 max-w-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          Le processus créatif libère, transforme et reconstruit. Sans compétence requise — juste vous, et la création.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <Link
            href="/reservation"
            className="bg-terra text-white font-sans px-10 py-4 rounded-full hover:bg-terra-dark transition-all hover:scale-105 active:scale-95"
          >
            Prendre rendez-vous
          </Link>
          <Link
            href="/a-propos"
            className="border border-charcoal text-charcoal font-sans px-10 py-4 rounded-full hover:bg-charcoal hover:text-cream transition-all hover:scale-105 active:scale-95"
          >
            Découvrir mon parcours
          </Link>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-muted/40 rounded-full flex justify-center pt-2"
          >
            <div className="w-1 h-2 bg-muted/40 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Citation */}
      <section className="bg-charcoal py-24 px-6 text-center">
        <AnimateIn>
          <p className="font-serif text-3xl md:text-5xl text-cream leading-relaxed max-w-4xl mx-auto italic">
            &ldquo;Le processus créatif agit comme un processus de transformation.<br />
            Il libère, transforme et reconstruit.&rdquo;
          </p>
          <p className="font-sans text-cream/40 text-sm mt-8 tracking-widest uppercase">
            — Marjorie Prieux
          </p>
        </AnimateIn>
      </section>

      {/* 3 Univers */}
      <section className="bg-white py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimateIn>
            <div className="text-center mb-20">
              <p className="font-sans text-terra text-sm uppercase tracking-[0.3em] mb-4">
                Ce que je propose
              </p>
              <h2 className="font-serif text-5xl md:text-6xl text-charcoal">
                Trois univers, une approche
              </h2>
            </div>
          </AnimateIn>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                img: "/arttherapie-seniors.jpg",
                label: "Art-thérapie",
                title: "Transformation par la création",
                desc: "Séances individuelles pour explorer vos émotions et initier un changement intérieur, quel que soit votre âge.",
                href: "/seances",
                color: "from-terra/80",
              },
              {
                img: "/aquarelle.jpeg",
                label: "Arts plastiques",
                title: "Apprendre & créer",
                desc: "Cours et ateliers pour tous les niveaux — dessiner, peindre, sculpter — dans un cadre bienveillant.",
                href: "/seances",
                color: "from-sage/80",
              },
              {
                img: "/teambuilding-1.png",
                label: "Team building",
                title: "Cohésion par l'art",
                desc: "Ateliers artistiques collectifs en entreprise pour renforcer les liens et libérer la créativité de vos équipes.",
                href: "/seances",
                color: "from-brown/80",
              },
            ].map((u, i) => (
              <AnimateIn key={u.label} delay={i * 0.15}>
                <Link href={u.href} className="group block relative h-[480px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                  <Image src={u.img} alt={u.label} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className={`absolute inset-0 bg-gradient-to-t ${u.color} to-transparent`} />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <p className="font-sans text-white/70 text-xs uppercase tracking-widest mb-2">{u.label}</p>
                    <h3 className="font-serif text-2xl text-white mb-3">{u.title}</h3>
                    <p className="font-sans text-white/80 text-sm leading-relaxed">{u.desc}</p>
                  </div>
                </Link>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn delay={0.3}>
            <div className="text-center mt-14">
              <Link href="/seances" className="font-sans text-terra underline underline-offset-8 hover:text-terra-dark transition-colors">
                Voir toutes les séances et tarifs →
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Approche */}
      <section className="bg-beige py-32 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <AnimateIn>
            <div className="w-full aspect-[4/5] relative rounded-3xl overflow-hidden shadow-xl">
              <Image src="/aquarelle.jpeg" alt="Atelier d'art-thérapie" fill className="object-cover" />
            </div>
          </AnimateIn>

          <AnimateIn delay={0.2}>
            <p className="font-sans text-terra text-sm uppercase tracking-[0.3em] mb-4">
              Mon approche
            </p>
            <h2 className="font-serif text-5xl text-charcoal mb-8 leading-tight">
              Créer pour<br />se retrouver
            </h2>
            <p className="font-sans text-muted leading-relaxed mb-6 text-lg">
              L&apos;art-thérapie ne demande aucune compétence artistique. Ce n&apos;est pas le résultat qui compte, mais le chemin parcouru.
            </p>
            <p className="font-sans text-muted leading-relaxed mb-10">
              Dans un cadre confidentiel et bienveillant, je vous accompagne avec douceur à travers le dessin, la peinture, le collage ou la sculpture.
            </p>
            <Link
              href="/a-propos"
              className="bg-charcoal text-cream font-sans px-8 py-4 rounded-full hover:bg-terra transition-all hover:scale-105 active:scale-95 inline-block"
            >
              En savoir plus sur moi
            </Link>
          </AnimateIn>
        </div>
      </section>

      {/* Galerie */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimateIn>
            <div className="text-center mb-14">
              <p className="font-sans text-terra text-sm uppercase tracking-[0.3em] mb-4">Créations</p>
              <h2 className="font-serif text-5xl text-charcoal">Un aperçu de l&apos;atelier</h2>
            </div>
          </AnimateIn>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <AnimateIn delay={0} className="col-span-2 md:col-span-2">
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <Image src="/magnolia.jpeg" alt="Atelier magnolia en plein air" fill className="object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <div className="relative aspect-[16/10] md:aspect-auto md:h-full min-h-40 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <Image src="/fleurs.jpeg" alt="Fleurs en papier crépon" fill className="object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <Image src="/coquillages.jpeg" alt="Dessin de coquillages" fill className="object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            </AnimateIn>
            <AnimateIn delay={0.3} className="col-span-2">
              <div className="relative aspect-[16/7] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <Image src="/aquarelle.jpeg" alt="Aquarelle et fleurs" fill className="object-cover object-top hover:scale-105 transition-transform duration-500" />
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* CTA finale */}
      <section className="bg-terra py-32 px-6 text-center">
        <AnimateIn>
          <p className="font-sans text-white/60 text-sm uppercase tracking-[0.3em] mb-6">
            Première séance
          </p>
          <h2 className="font-serif text-6xl md:text-7xl text-white mb-8 leading-tight">
            Prêt(e) à<br />commencer ?
          </h2>
          <p className="font-sans text-white/80 text-xl leading-relaxed mb-12 max-w-xl mx-auto">
            La première séance est un moment d&apos;échange sans engagement — pour se rencontrer et répondre à toutes vos questions.
          </p>
          <Link
            href="/reservation"
            className="bg-white text-terra font-sans font-medium px-12 py-5 rounded-full text-lg hover:bg-cream transition-all hover:scale-105 active:scale-95 inline-block"
          >
            Réserver ma première séance
          </Link>
        </AnimateIn>
      </section>
    </>
  );
}
