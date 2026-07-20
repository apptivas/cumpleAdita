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

function BirthdayEventSection() {
  return (
    <section className="birthday-event" aria-labelledby="birthday-event-title">
      <div className="birthday-event__sparkles" aria-hidden="true">
        <span>✦</span>
        <span>♥</span>
        <span>✦</span>
      </div>

      <div className="birthday-event__panel">
        <header className="birthday-event__header">
          <span aria-hidden="true">✿</span>
          <h2 id="birthday-event-title">Detalles del evento</h2>
          <span aria-hidden="true">✿</span>
        </header>

        <div className="birthday-event__details">
          <article className="birthday-event-card birthday-event-card--date">
            <div className="birthday-event-card__icon" aria-hidden="true">
              <span>10</span>
            </div>
            <div className="birthday-event-card__copy">
              <h3>Fecha y hora</h3>
              <p><strong>10 de agosto de 2026</strong></p>
              <p><span aria-hidden="true">🕒</span> Desde las 15h00.</p>
            </div>
          </article>

          <article className="birthday-event-card birthday-event-card--location">
            <div className="birthday-event-card__icon" aria-hidden="true">♥</div>
            <div className="birthday-event-card__copy">
              <h3>Ubicación</h3>
              <p><strong>Lugar del evento</strong></p>
              <p><span aria-hidden="true">🏰</span> Centro de Convenciones Charles Darwin.</p>
            </div>
          </article>
        </div>

        <a className="birthday-event__confirm" href={"https://forms.gle/oEGpJpb9gx8tnBqh7"}>
          <span aria-hidden="true">✓</span>
          Confirmar asistencia
        </a>

        <p className="birthday-event__note">
          ¡Nos encantará compartir este día mágico contigo!
        </p>
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
        <Nubes />*
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
      <BirthdayEventSection />
    </>
  )
}

export default App
