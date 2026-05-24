const COLS = 50
const ROWS = 12
const RAMP = " .:-=+*#%@"

const state = {
  heightMap: null as Float32Array | null,
  cursor: { x: -1, y: -1, time: 0, active: false },
  raf: 0,
  start: 0,
}

async function buildHeightMap(text: string, cols: number, rows: number): Promise<Float32Array> {
  const scale = 8
  const cv = document.createElement("canvas")
  cv.width = cols * scale
  cv.height = rows * scale
  const ctx = cv.getContext("2d")!

  ctx.fillStyle = "black"
  ctx.fillRect(0, 0, cv.width, cv.height)
  ctx.fillStyle = "white"

  const fontFamily = `"Inter", system-ui, -apple-system, sans-serif`
  const targetWidth = cv.width * 0.94
  const targetHeight = cv.height * 0.85

  // Measure once at an arbitrary size, then scale to fit both axes
  const probeSize = 100
  ctx.font = `900 ${probeSize}px ${fontFamily}`
  const m = ctx.measureText(text)
  const measuredHeight =
    (m.actualBoundingBoxAscent ?? probeSize * 0.7) +
    (m.actualBoundingBoxDescent ?? probeSize * 0.3)
  const fontSize = probeSize * Math.min(targetWidth / m.width, targetHeight / measuredHeight)

  ctx.font = `900 ${fontSize}px ${fontFamily}`
  ctx.textAlign = "center"
  ctx.textBaseline = "middle"
  ctx.fillText(text, cv.width / 2, cv.height / 2)

  const img = ctx.getImageData(0, 0, cv.width, cv.height)
  const out = new Float32Array(cols * rows)

  for (let cy = 0; cy < rows; cy++) {
    for (let cx = 0; cx < cols; cx++) {
      let sum = 0
      for (let py = 0; py < scale; py++) {
        for (let px = 0; px < scale; px++) {
          const i = ((cy * scale + py) * cv.width + (cx * scale + px)) * 4
          sum += img.data[i] / 255
        }
      }
      out[cy * cols + cx] = sum / (scale * scale)
    }
  }
  return out
}

function render(target: HTMLElement, now: number) {
  if (!state.heightMap) return
  const t = (now - state.start) * 0.001
  const lines: string[] = []

  for (let y = 0; y < ROWS; y++) {
    let line = ""
    for (let x = 0; x < COLS; x++) {
      const i = y * COLS + x
      let h = state.heightMap[i] * 0.85

      h += Math.sin(t * 0.7 + x * 0.25 + y * 0.45) * 0.05
      h += Math.sin(t * 0.4 - x * 0.18 + y * 0.3) * 0.04

      if (state.cursor.active) {
        const dx = x - state.cursor.x
        const dy = (y - state.cursor.y) * 2
        const dist = Math.sqrt(dx * dx + dy * dy)
        const dt = t - state.cursor.time
        if (dt < 2.5) {
          const wave = Math.sin(dist * 0.6 - dt * 5) * Math.exp(-dist * 0.08) * Math.exp(-dt * 0.5)
          h += wave * 0.4
        }
      }

      h = Math.max(0, Math.min(1, h))
      line += RAMP[Math.floor(h * (RAMP.length - 1))]
    }
    lines.push(line)
  }

  target.textContent = lines.join("\n")
  state.raf = requestAnimationFrame((nextT) => render(target, nextT))
}

document.addEventListener("nav", async () => {
  cancelAnimationFrame(state.raf)

  const target = document.querySelector(".avelouk-topo") as HTMLElement | null
  if (!target) return

  // Force Inter @900 to load (the rasterizer's reference face). Without
  // this the call to ctx.measureText/fillText may run before the @font-face
  // is actually available, falling back to system-ui and producing a fuzzy
  // letterform that doesn't match Inter's geometry.
  try {
    await (document as any).fonts?.load(`900 100px "Inter"`)
  } catch (_) {}
  await (document as any).fonts?.ready

  state.heightMap = await buildHeightMap("AVELOUK", COLS, ROWS)
  state.start = performance.now()
  state.cursor.active = false

  target.addEventListener("pointermove", (e) => {
    const rect = target.getBoundingClientRect()
    state.cursor.x = ((e.clientX - rect.left) / rect.width) * COLS
    state.cursor.y = ((e.clientY - rect.top) / rect.height) * ROWS
    state.cursor.time = (performance.now() - state.start) * 0.001
    state.cursor.active = true
  })
  target.addEventListener("pointerleave", () => {
    state.cursor.active = false
  })

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    render(target, performance.now())
    return
  }

  state.raf = requestAnimationFrame((t) => render(target, t))
})
