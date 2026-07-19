import { useEffect, useState } from "react"
import adita1 from "../../images/adita1.jpeg"
import adita2 from "../../images/adita2.jpeg"
import "./galeria_fotos_adita.css"

const photos = [
  {
    src: adita1,
    alt: "Adita celebrando su primer año junto a su pastel",
  },
  {
    src: adita2,
    alt: "Adita mirando su pastel de cumpleaños",
  },
]

export const GaleriaFotosAdita = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  useEffect(() => {
    if (selectedIndex === null) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedIndex(null)
      }

      if (event.key === "ArrowLeft") {
        setSelectedIndex((current) =>
          current === null ? current : (current - 1 + photos.length) % photos.length,
        )
      }

      if (event.key === "ArrowRight") {
        setSelectedIndex((current) =>
          current === null ? current : (current + 1) % photos.length,
        )
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [selectedIndex])

  const showPrevious = () => {
    setSelectedIndex((current) =>
      current === null ? 0 : (current - 1 + photos.length) % photos.length,
    )
  }

  const showNext = () => {
    setSelectedIndex((current) =>
      current === null ? 0 : (current + 1) % photos.length,
    )
  }

  return (
    <>
      <section className="adita-photo-gallery" aria-label="Fotografías de Adita">
        {photos.map((photo, index) => (
          <button
            key={photo.src}
            type="button"
            className={`adita-photo-card adita-photo-card--${index + 1}`}
            aria-label={`Ampliar fotografía ${index + 1}`}
            onClick={() => setSelectedIndex(index)}
          >
            <img src={photo.src} alt={photo.alt} />
          </button>
        ))}
      </section>

      {selectedIndex !== null && (
        <div
          className="adita-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Fotografía ampliada de Adita"
          onClick={() => setSelectedIndex(null)}
        >
          <div
            className="adita-lightbox__panel"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="adita-lightbox__close"
              aria-label="Cerrar fotografía"
              onClick={() => setSelectedIndex(null)}
            >
              ×
            </button>

            <button
              type="button"
              className="adita-lightbox__arrow adita-lightbox__arrow--left"
              aria-label="Ver fotografía anterior"
              onClick={showPrevious}
            >
              ‹
            </button>

            <figure
              className={`adita-lightbox__photo adita-lightbox__photo--${selectedIndex + 1}`}
            >
              <img
                src={photos[selectedIndex].src}
                alt={photos[selectedIndex].alt}
              />
            </figure>

            <button
              type="button"
              className="adita-lightbox__arrow adita-lightbox__arrow--right"
              aria-label="Ver fotografía siguiente"
              onClick={showNext}
            >
              ›
            </button>

            <div className="adita-lightbox__thumbnails" aria-label="Seleccionar fotografía">
              {photos.map((photo, index) => (
                <button
                  key={photo.src}
                  type="button"
                  className={index === selectedIndex ? "is-selected" : ""}
                  aria-label={`Seleccionar fotografía ${index + 1}`}
                  aria-pressed={index === selectedIndex}
                  onClick={() => setSelectedIndex(index)}
                >
                  <img src={photo.src} alt="" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
