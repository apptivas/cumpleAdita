import "./common_animates/decorators/nubes2.css"
import "./common_animates/decorators/nube_completa.css"
import {
  CorazonContorno,
  CorazonRosaSuperior,
  Countdown,
  EstrellaAmarilla,
  EstrellaNaranja,
  GaleriaFotosAdita,
  Globes,
  NotaRosa,
  NotasMoradas,
  NotasRosasDobles,
  NotaTurquesa,
  Nubes,

} from "./common_animates/decorators"
import arcoiris from "./images/arcoiris.png"
import arcoirisSinFondo from "./images/arcoiris_sin_fondo.svg"
import luli from "./images/luli.png"
import nombreAdamaris from "./images/nombreAdamaris.png"
import "./App.css"

function BirthdayCountdownSection() {
  return (
    <section
      className="birthday-countdown-section"
      aria-labelledby="birthday-countdown-section-title"
    >
      <div className="birthday-countdown-section__content">
        <header className="birthday-countdown-section__header">
          <span aria-hidden="true">✦</span>
          <h2 id="birthday-countdown-section-title">
            Conteo Regresivo para el gran día 🎂
          </h2>
          <span aria-hidden="true">✦</span>
        </header>

        <Countdown />

        <article className="birthday-invitation">
          <p>
            Con mucha alegría, tenemos el honor de invitarte a celebrar el
            cumpleaños de nuestra adorada princesa, <strong>Adamaris Flores Leon</strong>.
          </p>
          <p>
            Acompáñanos a compartir una tarde llena de alegría, sonrisas,
            diversión y momentos inolvidables junto a nuestra pequeña
            cumpleañera.
          </p>
          <p className="birthday-invitation__closing">
            ¡Tu presencia hará que este día sea aún más especial!
          </p>
        </article>
      </div>
    </section>
  )
}

function App() {
  return (
    <>
    <main className="birthday-landing">
      <div className="birthday-background" aria-hidden="true">
        <img className="birthday-rainbow birthday-rainbow--top" src={arcoiris} alt="" />
        <div className="birthday-top-clouds">
          <div className="nubes2" />
        </div>

        <div className="birthday-decoration birthday-decoration--note-pink">
          <NotaRosa />
        </div>
        <div className="birthday-decoration birthday-decoration--heart-top">
          <CorazonRosaSuperior />
        </div>
        <div className="birthday-decoration birthday-decoration--notes-purple">
          <NotasMoradas />
        </div>
        <div className="birthday-decoration birthday-decoration--notes-pink">
          <NotasRosasDobles />
        </div>
        <div className="birthday-decoration birthday-decoration--heart-outline">
          <CorazonContorno />
        </div>
        <div className="birthday-decoration birthday-decoration--note-turquoise">
          <NotaTurquesa />
        </div>
        <div className="birthday-decoration birthday-decoration--star-orange">
          <EstrellaNaranja />
        </div>
        <div className="birthday-decoration birthday-decoration--star-yellow">
          <EstrellaAmarilla />
        </div>
      </div>

      <section className="birthday-hero" aria-labelledby="birthday-title">
        <h1 id="birthday-title" className="sr-only">
          Feliz cumpleaños, Adamaris Flores León
        </h1>

        <div className="birthday-name">
          <img src={nombreAdamaris} alt="Adamaris Flores León" />
        </div>

        <div className="birthday-gallery-wrap">
          <div className="birthday-gallery-cloud" aria-hidden="true">
            <div className="nube-completa" />
          </div>
          <GaleriaFotosAdita />
        </div>

        <div className="birthday-message">
          <p>Mi primer añito</p>
          <span>Un añito lleno de amor, magia y alegría</span>
        </div>
      </section>

      <img className="birthday-character" src={luli} alt="Princesa de cumpleaños" />

      <div className="birthday-bottom-clouds" aria-hidden="true">
        <Nubes />
      </div>

      <Globes />
      <img
        className="birthday-rainbow birthday-rainbow--bottom"
        src={arcoirisSinFondo}
        alt=""
        aria-hidden="true"
      />

      </main>

      <BirthdayCountdownSection />
    </>
  )
}

export default App
