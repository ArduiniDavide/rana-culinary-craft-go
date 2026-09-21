import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BackButton } from "@/components/back-button"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Informativa sul trattamento dei dati personali di Giovanni Rana: cookie, dati di navigazione e diritti dell'utente.",
}

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <article className="mx-auto max-w-3xl px-5 pb-20 pt-32 sm:px-10 sm:pt-40 lg:pt-48">
        <BackButton />
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-basil-green">
          Documento legale
        </span>
        <h1 className="mt-3 font-display text-3xl font-bold leading-tight text-anthracite sm:text-4xl lg:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-anthracite/55">
          Ultimo aggiornamento: 21 settembre 2026
        </p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-anthracite/75 sm:text-base">
          <section>
            <h2 className="font-display text-xl font-semibold text-anthracite sm:text-2xl">
              1. Titolare del trattamento
            </h2>
            <p className="mt-3">
              Il titolare del trattamento dei dati personali è Giovanni Rana. Per qualsiasi richiesta relativa alla
              tua privacy puoi scrivere all'indirizzo email dedicato: privacy@giovannirana.example.com.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-anthracite sm:text-2xl">
              2. Tipologie di dati raccolti
            </h2>
            <p className="mt-3">
              Questo sito raccoglie esclusivamente dati di navigazione anonimi e aggregati, come pagine visitate,
              durata della sessione e tipo di dispositivo. Non vengono raccolti dati identificativi personali se non
              tramite consenso esplicito (ad esempio compilando un form di contatto).
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-anthracite sm:text-2xl">
              3. Cookie
            </h2>
            <p className="mt-3">
              Utilizziamo due categorie di cookie:
            </p>
            <ul className="mt-3 flex flex-col gap-2">
              <li className="flex items-start gap-2.5">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-tomato-red" />
                <span>
                  <strong className="font-semibold text-anthracite">Cookie essenziali:</strong> necessari per il
                  corretto funzionamento del sito. Non richiedono consenso.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-tomato-red" />
                <span>
                  <strong className="font-semibold text-anthracite">Cookie analitici:</strong> ci aiutano a
                  comprendere come i visitatori usano il sito, in forma anonima e aggregata. Vengono attivati solo
                  dopo il tuo consenso tramite il popup visualizzato in basso a destra.
                </span>
              </li>
            </ul>
            <p className="mt-3">
              Puoi modificare o revocare il tuo consenso in qualsiasi momento eliminando i cookie del browser e
              ricaricando la pagina.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-anthracite sm:text-2xl">
              4. Finalità del trattamento
            </h2>
            <p className="mt-3">
              I dati vengono trattati per: garantire il funzionamento tecnico del sito, analizzare in forma aggregata
              il traffico, migliorare i contenuti e l'esperienza utente. Non cediamo i tuoi dati a terzi per finalità
              di marketing.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-anthracite sm:text-2xl">
              5. Conservazione dei dati
            </h2>
            <p className="mt-3">
              I dati di navigazione anonimi vengono conservati per un periodo massimo di 24 mesi. Il consenso ai
              cookie analitici viene memorizzato nel tuo browser fino alla cancellazione manuale dei cookie.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-anthracite sm:text-2xl">
              6. I tuoi diritti
            </h2>
            <p className="mt-3">
              In conformità al Regolamento UE 2016/679 (GDPR), hai diritto di: accedere ai tuoi dati, chiederne la
              rettifica o la cancellazione, opporti al trattamento e revocare il consenso precedentemente prestato.
              Per esercitare questi diritti scrivi a privacy@giovannirana.example.com.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-anthracite sm:text-2xl">
              7. Modifiche all'informativa
            </h2>
            <p className="mt-3">
              Ci riserviamo il diritto di aggiornare la presente Privacy Policy. Eventuali modifiche saranno
              pubblicate su questa pagina con la data di aggiornamento indicata in alto.
            </p>
          </section>
        </div>

        <BackButton className="mt-12" />
      </article>
      <Footer />
    </>
  )
}
