import React, { useCallback, useEffect, useRef, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import type { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel'

export type CarouselProps = {
  slides: React.ReactNode[]
  options?: EmblaOptionsType
  className?: string
  viewportClassName?: string
  containerClassName?: string
  slideClassName?: string

  slidesPerView?: number

  autoplay?: boolean
  autoplayDelayMs?: number
  pauseOnHover?: boolean
  pauseOnFocus?: boolean
  stopOnInteraction?: boolean
}

function canUseDOM() {
  return typeof window !== 'undefined' && typeof document !== 'undefined'
}

export default function Carousel({
  slides,
  options,
  className,
  viewportClassName,
  containerClassName,
  slideClassName,
  slidesPerView = 1,
  autoplay = true,
  autoplayDelayMs = 3500,
  pauseOnHover = true,
  pauseOnFocus = true,
  stopOnInteraction = false,
}: CarouselProps) {
  const [viewportRef, emblaApi] = useEmblaCarousel(options)
  const autoplayTimerRef = useRef<number | null>(null)
  const isPausedRef = useRef(false)
  const stopPermanentlyRef = useRef(false)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const clearAutoplay = useCallback(() => {
    if (!canUseDOM()) return
    if (autoplayTimerRef.current != null) {
      window.clearInterval(autoplayTimerRef.current)
      autoplayTimerRef.current = null
    }
  }, [])

  const startAutoplay = useCallback(
    (api: EmblaCarouselType) => {
      if (!autoplay) return
      if (!canUseDOM()) return
      if (stopPermanentlyRef.current) return
      if (isPausedRef.current) return
      if (autoplayDelayMs <= 0) return

      clearAutoplay()
      autoplayTimerRef.current = window.setInterval(() => {
        if (stopPermanentlyRef.current || isPausedRef.current) return
        api.scrollNext()
      }, autoplayDelayMs)
    },
    [autoplay, autoplayDelayMs, clearAutoplay],
  )

  const onSelect = useCallback((api: EmblaCarouselType) => {
    setSelectedIndex(api.selectedScrollSnap())
  }, [])

  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    setScrollSnaps(emblaApi.scrollSnapList())
    onSelect(emblaApi)

    emblaApi.on('select', () => onSelect(emblaApi))
    emblaApi.on('reInit', () => {
      setScrollSnaps(emblaApi.scrollSnapList())
      onSelect(emblaApi)
    })

    startAutoplay(emblaApi)
    return () => clearAutoplay()
  }, [emblaApi, clearAutoplay, onSelect, startAutoplay])

  useEffect(() => {
    if (!emblaApi) return

    if (!stopOnInteraction) return

    const stopForever = () => {
      stopPermanentlyRef.current = true
      clearAutoplay()
    }

    emblaApi.on('pointerDown', stopForever)
    return () => {
      // Embla does not expose an "off" in older versions; safe to no-op cleanup here.
    }
  }, [clearAutoplay, emblaApi, stopOnInteraction])

  const pause = useCallback(() => {
    if (!autoplay) return
    isPausedRef.current = true
    clearAutoplay()
  }, [autoplay, clearAutoplay])

  const resume = useCallback(() => {
    if (!autoplay) return
    isPausedRef.current = false
    if (emblaApi) startAutoplay(emblaApi)
  }, [autoplay, emblaApi, startAutoplay])

  const pauseHandlers = {
    onMouseEnter: pauseOnHover ? pause : undefined,
    onMouseLeave: pauseOnHover ? resume : undefined,
    onFocusCapture: pauseOnFocus ? pause : undefined,
    onBlurCapture: pauseOnFocus ? resume : undefined,
  } as const

  const perView = Number.isFinite(slidesPerView) && slidesPerView > 0 ? slidesPerView : 1
  const slideFlexBasis = `${100 / perView}%`

  return (
    <section className={className ?? ''}>
      <div className="relative">
        <div
          ref={viewportRef}
          className={viewportClassName ?? 'overflow-hidden'}
          tabIndex={0}
          {...pauseHandlers}
        >
          <div className={containerClassName ?? 'flex'}>
            {slides.map((slide, idx) => (
              <div
                key={idx}
                className={slideClassName ?? 'min-w-2'}
                style={slideClassName ? undefined : { flex: `0 0 ${slideFlexBasis}` }}
                aria-roledescription="slide"
                aria-label={`Slide ${idx + 1} of ${slides.length}`}
              >
                {slide}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
