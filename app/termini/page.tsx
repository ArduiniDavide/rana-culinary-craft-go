import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BackButton } from "@/components/back-button"

export const metadata: Metadata = {
  title: "Termini e Condizioni",
  description:
    "Termini e condizioni d'uso del sito Giovanni Rana: regole di utilizzo, proprietà intellettuale e responsabilità.",
}

export default function TerminiPage() {
  return (
    <>
      <Navbar />
      <article className="mx-auto max-w-3xl px-5 pb-20 pt-32 sm:px-10 sm:pt-40 lg:pt-48">
        <BackButton />
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-basil-green">
          Documento legale
        </span>
        <h1 className="mt-3 font-display text-3xl font-bold leading-tight text-anthracite sm:text-4xl lg:text-5xl">
          Termini e Condizioni
        </h1>
        <p className="mt-4 text-sm text-anthracite/55">
          Ultimo aggiornamento: 21 settembre 2026
        </p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-anthracite/75 sm:text-base">
          <section>
            <h2 className="font-display text-xl font-semibold text-anthracite sm:text-2xl">
              1. Accettazione dei termini
            </h2>
            <p className="mt-3">
              Accedendo e utilizzando questo sito web accetti integralmente i presenti Termini e Condizioni. Se non
              sei d'accordo con una o più parti, ti chiediamo di non utilizzare il sito.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-anthracite sm:text-2xl">
              2. Uso del sito
            </h2>
            <p className="mt-3">
              I contenuti del sito sono destinati a uso personale e informativo. Ti impegni a non: riprodurre,
              distribuire o commercializzare i contenuti senza autorizzazione; tentare di compromettere la sicurezza
              del sito; utilizzare strumenti automatici per estrarre dati su larga scala.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-anthracite sm:text-2xl">
              3. Proprietà intellettuale
            </h2>
            <p className="mt-3">
              Tutti i contenuti del sito — testi, immagini, loghi, ricette, grafica e layout — sono di proprietà di
              Giovanni Rana o dei rispettivi titolari e sono protetti dalle leggi sul diritto d'autore. È vietato
              l'uso non autorizzato per finalità commerciali.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-anthracite sm:text-2xl">
              4. Ricette
            </h2>
            <p className="mt-3">
              Le ricette pubblicate hanno finalità divulgativa. I tempi di cottura e le dosi sono indicativi e
              possono variare in base agli ingredienti e alle attrezzature. Giovanni Rana non si assume
              responsabilità per eventuali risultati diversi dalle aspettative.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-anthracite sm:text-2xl">
              5. Link esterni
            </h2>
            <p className="mt-3">
              Il sito può contenere link a risorse esterne. Giovanni Rana non è responsabile dei contenuti, delle
              politiche sulla privacy o delle pratiche di siti di terzi.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-anthracite sm:text-2xl">
              6. Limitazione di responsabilità
            </h2>
            <p className="mt-3">
              Nella misura massima consentita dalla legge, Giovanni Rana non risponde di danni diretti o indiretti
              derivanti dall'uso o dall'impossibilità di usare il sito, inclusa l'eventuale inesattezza dei contenuti.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-anthracite sm:text-2xl">
              7. Modifiche ai termini
            </h2>
            <p className="mt-3">
              Ci riserviamo il diritto di modificare i presenti Termini in qualsiasi momento. Le modifiche entrano in
              vigore dalla data di pubblicazione su questa pagina. L'uso continuato del sito dopo le modifiche
              implica l'accettazione dei nuovi termini.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-anthracite sm:text-2xl">
              8. Legge applicabile
            </h2>
            <p className="mt-3">
              I presenti Termini sono regolati dalla legge italiana. Per qualsiasi controversia è competente il
              Foro di Verona.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-anthracite sm:text-2xl">
              9. Contatti
            </h2>
            <p className="mt-3">
              Per domande sui presenti Termini puoi scrivere a: privacy@giovannirana.example.com.
            </p>
          </section>
        </div>

        <BackButton className="mt-12" />
      </article>
      <Footer />
    </>
  )
}
