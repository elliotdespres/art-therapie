export default function Contact() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-b from-cream to-beige py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="font-sans text-terra text-sm uppercase tracking-widest mb-3">
            Me contacter
          </p>
          <h1 className="font-serif text-5xl text-charcoal mb-6">Contact</h1>
          <p className="font-sans text-muted text-lg leading-relaxed">
            Une question, une hésitation ? Je suis là pour vous répondre avec bienveillance.
          </p>
        </div>
      </section>

      {/* Contenu */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16">

          {/* Infos */}
          <div>
            <h2 className="font-serif text-2xl text-charcoal mb-8">Informations</h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="text-2xl mt-0.5">✉️</span>
                <div>
                  <p className="font-sans font-semibold text-charcoal text-sm mb-1">Email</p>
                  <a
                    href="mailto:marjorie.prieux@gmail.com"
                    className="font-sans text-terra hover:text-terra-dark transition-colors"
                  >
                    marjorie.prieux@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-2xl mt-0.5">📞</span>
                <div>
                  <p className="font-sans font-semibold text-charcoal text-sm mb-1">Téléphone</p>
                  <a
                    href="tel:+33666168995"
                    className="font-sans text-terra hover:text-terra-dark transition-colors"
                  >
                    06 66 16 89 95
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-2xl mt-0.5">📍</span>
                <div>
                  <p className="font-sans font-semibold text-charcoal text-sm mb-1">Atelier</p>
                  <p className="font-sans text-muted">
                    Espace Chloro&apos;feel<br />
                    3b rue Edmonds Mailloux<br />
                    27100 Le Vaudreuil, Normandie
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-2xl mt-0.5">🕐</span>
                <div>
                  <p className="font-sans font-semibold text-charcoal text-sm mb-1">Horaires</p>
                  <p className="font-sans text-muted text-sm">
                    Sur rendez-vous<br />
                    Du lundi au samedi
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulaire */}
          <div>
            <h2 className="font-serif text-2xl text-charcoal mb-8">Envoyer un message</h2>
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="space-y-5"
            >
              <input type="hidden" name="access_key" value="d604416b-aac7-4b42-89e2-36e4d66937ce" />
              <input type="hidden" name="subject" value="Nouveau message - Site Art-Thérapie" />
              <input type="hidden" name="redirect" value="false" />
              <div>
                <label className="font-sans text-sm text-charcoal block mb-2">
                  Votre nom
                </label>
                <input
                  type="text"
                  name="nom"
                  required
                  className="w-full border border-beige rounded-xl px-4 py-3 font-sans text-sm text-charcoal bg-cream focus:outline-none focus:border-terra transition-colors"
                  placeholder="Marie Dupont"
                />
              </div>

              <div>
                <label className="font-sans text-sm text-charcoal block mb-2">
                  Votre email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full border border-beige rounded-xl px-4 py-3 font-sans text-sm text-charcoal bg-cream focus:outline-none focus:border-terra transition-colors"
                  placeholder="marie@email.com"
                />
              </div>

              <div>
                <label className="font-sans text-sm text-charcoal block mb-2">
                  Sujet
                </label>
                <select
                  name="sujet"
                  className="w-full border border-beige rounded-xl px-4 py-3 font-sans text-sm text-charcoal bg-cream focus:outline-none focus:border-terra transition-colors"
                >
                  <option>Renseignement sur une séance</option>
                  <option>Art-thérapie individuelle</option>
                  <option>Ateliers arts plastiques</option>
                  <option>Intervention extérieure</option>
                  <option>Autre</option>
                </select>
              </div>

              <div>
                <label className="font-sans text-sm text-charcoal block mb-2">
                  Votre message
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="w-full border border-beige rounded-xl px-4 py-3 font-sans text-sm text-charcoal bg-cream focus:outline-none focus:border-terra transition-colors resize-none"
                  placeholder="Bonjour, je souhaite avoir des informations sur…"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-terra text-white font-sans py-3.5 rounded-full hover:bg-terra-dark transition-colors"
              >
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
