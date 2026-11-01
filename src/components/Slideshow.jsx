import { Children, useEffect, useRef, useState } from 'react'
import './Slideshow.css'

// hand-built slideshow (no library): arrows, dots, swipe, and auto-play that pauses on hover
function Slideshow({ children, interval = 6000 }) {
  const slides = Children.toArray(children)
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const touchStart = useRef(null)

  const goTo = (index) => {
    // wrap around past either end
    setCurrent((index + slides.length) % slides.length)
  }

  // move to the next slide on a timer; restarts whenever the slide changes
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (paused || reduceMotion) return

    const timer = setTimeout(() => {
      setCurrent((current + 1) % slides.length)
    }, interval)
    return () => clearTimeout(timer)
  }, [current, paused, interval, slides.length])

  const handleTouchEnd = (e) => {
    if (touchStart.current === null) return
    const distance = e.changedTouches[0].clientX - touchStart.current
    if (distance > 50) goTo(current - 1)
    if (distance < -50) goTo(current + 1)
    touchStart.current = null
  }

  return (
    <div
      className="slideshow"
      aria-roledescription="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onTouchStart={(e) => (touchStart.current = e.touches[0].clientX)}
      onTouchEnd={handleTouchEnd}
    >
      <div className="slideshow-window">
        <div className="slideshow-track" style={{ transform: `translateX(-${current * 100}%)` }}>
          {slides.map((slide, index) => (
            <div
              className="slideshow-slide"
              key={index}
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${slides.length}`}
              aria-hidden={index !== current}
            >
              {slide}
            </div>
          ))}
        </div>
      </div>

      <div className="slideshow-controls">
        <button type="button" className="slideshow-arrow" onClick={() => goTo(current - 1)} aria-label="Previous slide">
          <svg viewBox="0 0 24 24" aria-hidden="true"><polyline points="15 18 9 12 15 6" /></svg>
        </button>

        <div className="slideshow-dots">
          {slides.map((slide, index) => (
            <button
              type="button"
              key={index}
              className={index === current ? 'slideshow-dot active' : 'slideshow-dot'}
              onClick={() => goTo(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === current}
            ></button>
          ))}
        </div>

        <button type="button" className="slideshow-arrow" onClick={() => goTo(current + 1)} aria-label="Next slide">
          <svg viewBox="0 0 24 24" aria-hidden="true"><polyline points="9 18 15 12 9 6" /></svg>
        </button>
      </div>
    </div>
  )
}

export default Slideshow
