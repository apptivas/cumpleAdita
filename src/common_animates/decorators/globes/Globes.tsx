import { useState, type CSSProperties } from "react"
import "./globo.css"
import "./confetti-animado.css"

const balloons = [
  { color: "", left: "12%", delay: "0s" },
  { color: "green", left: "31%", delay: ".25s" },
  { color: "blue", left: "50%", delay: ".5s" },
  { color: "yellow", left: "69%", delay: ".75s" },
  { color: "purple", left: "88%", delay: "1s" },
]
const confettiColors = [
  "#ffd900",
  "#ff3b5c",
  "#11c5d9",
  "#0799d3",
  "#ff7a00",
  "#ff4fa3",
  "#9b5de5",
  "#22c55e",
]

const confettiPieces = Array.from({ length: 60 }, (_, index) => {
  const angle = (index * 137.508 * Math.PI) / 180
  const distance = 170 + (index % 9) * 18
  const burstX = Math.cos(angle) * distance
  const burstY = Math.sin(angle) * distance - 75

  return {
    id: index,
    style: {
      "--burst-x": `${burstX.toFixed(1)}px`,
      "--burst-y": `${burstY.toFixed(1)}px`,
      "--fall-x": `${(burstX * 1.3).toFixed(1)}px`,
      "--rotation-x": `${540 + (index % 8) * 90}deg`,
      "--rotation-y": `${360 + (index % 7) * 100}deg`,
      "--rotation-z": `${620 + (index % 9) * 85}deg`,
      "--duration": `${2.7 + (index % 5) * 0.14}s`,
      "--delay": `${(index % 8) * 0.012}s`,
      "--size-x": `${5 + (index % 7)}px`,
      "--size-y": `${3 + (index % 5)}px`,
      "--color": confettiColors[index % confettiColors.length],
    } as CSSProperties,
  }
})

export const Globes = () => {
  const [hasExploded, setHasExploded] = useState(false)

  if (hasExploded) {
    return (
      <div className="confetti" aria-hidden="true">
        {confettiPieces.map(({ id, style }) => (
          <i key={id} className="confetti__piece" style={style} />
        ))}
      </div>
    )
  }

  return (
    <button
      type="button"
      className="balloons-stage"
      aria-label="Reventar los globos y lanzar confeti"
      onClick={() => setHasExploded(true)}
    >
      {balloons.map(({ color, left, delay }) => (
        <span
          key={color || "pink"}
          className={`balloon ${color}`.trim()}
          style={{
            "--balloon-left": left,
            "--balloon-delay": delay,
          } as CSSProperties}
        />
      ))}
    </button>
  )
}
