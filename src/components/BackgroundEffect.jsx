import { useEffect, useRef } from 'react'

const ROWS = 14
const COLS = 18
const LINE_RGB = '59, 130, 246'
const LIFT_RADIUS = 160
const MAX_LIFT = 28

export default function BackgroundEffect() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5)

    let width = 0
    let height = 0
    let grid = []
    let frameScheduled = false
    const mouse = { x: -9999, y: -9999 }

    function depthEase(t) {
      return t * t
    }

    function buildGrid() {
      const isMobile = width < 768
      const horizonY = height * (isMobile ? 0.48 : 0.62)
      const floorY = height * (isMobile ? 1.08 : 1.15)
      const spreadWidth = width * (isMobile ? 1.3 : 0.9)
      const centerX = width / 2

      grid = []
      for (let i = 0; i <= ROWS; i++) {
        const t = depthEase(i / ROWS)
        const y = floorY + (horizonY - floorY) * t
        const row = []
        for (let c = 0; c <= COLS; c++) {
          const colT = c / COLS - 0.5
          const x = centerX + colT * spreadWidth * 2 * (1 - t)
          row.push({ x, y })
        }
        grid.push(row)
      }
    }

    function resize() {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      buildGrid()
      draw()
    }

    function liftAt(x, y) {
      if (prefersReducedMotion) return 0
      const dist = Math.hypot(x - mouse.x, y - mouse.y)
      if (dist >= LIFT_RADIUS) return 0
      const f = 1 - dist / LIFT_RADIUS
      return MAX_LIFT * f * f
    }

    function draw() {
      ctx.clearRect(0, 0, width, height)

      const rows = grid.length
      const cols = grid[0]?.length || 0

      // horizontal lines (depth rows)
      for (let i = 0; i < rows; i++) {
        const t = i / (rows - 1)
        const alpha = 0.22 * (1 - t) + 0.03
        ctx.beginPath()
        for (let c = 0; c < cols; c++) {
          const p = grid[i][c]
          const y = p.y - liftAt(p.x, p.y)
          if (c === 0) ctx.moveTo(p.x, y)
          else ctx.lineTo(p.x, y)
        }
        ctx.strokeStyle = `rgba(${LINE_RGB}, ${alpha})`
        ctx.lineWidth = 1
        ctx.stroke()
      }

      // vertical lines (converging columns)
      for (let c = 0; c < cols; c++) {
        ctx.beginPath()
        for (let i = 0; i < rows; i++) {
          const p = grid[i][c]
          const y = p.y - liftAt(p.x, p.y)
          if (i === 0) ctx.moveTo(p.x, y)
          else ctx.lineTo(p.x, y)
        }
        ctx.strokeStyle = `rgba(${LINE_RGB}, 0.12)`
        ctx.lineWidth = 1
        ctx.stroke()
      }
    }

    function scheduleDraw() {
      if (frameScheduled) return
      frameScheduled = true
      requestAnimationFrame(() => {
        frameScheduled = false
        draw()
      })
    }

    function onMouseMove(e) {
      mouse.x = e.clientX
      mouse.y = e.clientY
      scheduleDraw()
    }

    function onMouseLeave() {
      mouse.x = -9999
      mouse.y = -9999
      scheduleDraw()
    }

    resize()
    window.addEventListener('resize', resize)

    if (!prefersReducedMotion) {
      window.addEventListener('mousemove', onMouseMove)
      window.addEventListener('mouseleave', onMouseLeave)
    }

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [])

  return <canvas ref={canvasRef} aria-hidden="true" className="fixed inset-0 -z-10 pointer-events-none" />
}
