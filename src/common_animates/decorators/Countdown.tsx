import { useEffect, useState } from "react"
import "./countdown.css"

const TARGET_DATE = new Date("2026-08-10T00:00:00-06:00").getTime()
const GALAPAGOS_UTC_OFFSET = 6 * 60 * 60 * 1000
const TIME_API_URL =
  "https://timeapi.io/api/time/current/zone?timeZone=Pacific%2FGalapagos"

type TimeApiResponse = {
  year: number
  month: number
  day: number
  hour: number
  minute: number
  seconds: number
  milliSeconds?: number
}

type RemainingTime = {
  days: number
  hours: number
  minutes: number
  seconds: number
}

const calculateRemainingTime = (now: number): RemainingTime => {
  const distance = Math.max(0, TARGET_DATE - now)

  return {
    days: Math.floor(distance / 86_400_000),
    hours: Math.floor((distance / 3_600_000) % 24),
    minutes: Math.floor((distance / 60_000) % 60),
    seconds: Math.floor((distance / 1_000) % 60),
  }
}

const countdownUnits = [
  { key: "days", icon: "🎂", label: "Días" },
  { key: "hours", icon: "🎀", label: "Horas" },
  { key: "minutes", icon: "💖", label: "Min" },
  { key: "seconds", icon: "✨", label: "Seg" },
] as const

export const Countdown = () => {
  const [clockOffset, setClockOffset] = useState(0)
  const [remaining, setRemaining] = useState(() =>
    calculateRemainingTime(Date.now()),
  )
  const [syncStatus, setSyncStatus] = useState<"loading" | "synced" | "fallback">(
    "loading",
  )

  useEffect(() => {
    const controller = new AbortController()

    const synchronizeClock = async () => {
      try {
        const response = await fetch(TIME_API_URL, { signal: controller.signal })

        if (!response.ok) {
          throw new Error(`Time API responded with ${response.status}`)
        }

        const data = (await response.json()) as TimeApiResponse
        const serverTime =
          Date.UTC(
            data.year,
            data.month - 1,
            data.day,
            data.hour,
            data.minute,
            data.seconds,
            data.milliSeconds ?? 0,
          ) + GALAPAGOS_UTC_OFFSET

        setClockOffset(serverTime - Date.now())
        setSyncStatus("synced")
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") return
        setSyncStatus("fallback")
      }
    }

    void synchronizeClock()
    return () => controller.abort()
  }, [])

  useEffect(() => {
    const updateCountdown = () => {
      setRemaining(calculateRemainingTime(Date.now() + clockOffset))
    }

    updateCountdown()
    const interval = window.setInterval(updateCountdown, 1_000)
    return () => window.clearInterval(interval)
  }, [clockOffset])

  const isFinished = Object.values(remaining).every((value) => value === 0)

  return (
    <section className="birthday-countdown" aria-labelledby="countdown-title">
      <div className="birthday-countdown__heading">
        <p id="countdown-title">
          {isFinished ? "¡Llegó el gran día!" : "Celebremos juntos en:"}
        </p>
      </div>

      <div className="birthday-countdown__grid">
        {countdownUnits.map(({ key, icon, label }) => (
          <div className="birthday-countdown__unit" key={key}>
            <strong>{String(remaining[key]).padStart(2, "0")}</strong>
            <span>
              <i aria-hidden="true">{icon}</i> {label}
            </span>
          </div>
        ))}
      </div>

      <span
        className={`birthday-countdown__status is-${syncStatus}`}
        title={
          syncStatus === "fallback"
            ? "No se pudo consultar la API; se usa la hora del dispositivo"
            : undefined
        }
      >
        {syncStatus === "loading" && "Sincronizando hora…"}
        {syncStatus === "synced" && "Hora de Galápagos sincronizada"}
        {syncStatus === "fallback" && "Hora del dispositivo"}
      </span>
    </section>
  )
}
