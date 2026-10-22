'use client'

import { useEffect, useLayoutEffect, useRef, useState, type CSSProperties } from 'react'

export const delay = (ms: number) => ({ '--d': `${ms}ms` }) as CSSProperties

export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  const [visible, setVisible] = useState(false)

  // Next.js keeps visited pages alive in <Activity>, so reset when hidden to replay on return
  useLayoutEffect(() => () => setVisible(false), [])

  useEffect(() => {
    const element = ref.current
    if (!element) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.intersectionRatio >= 0.18) setVisible(true)
      else if (!entry.isIntersecting) setVisible(false)
    }, { threshold: [0, 0.18] })
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return [ref, visible] as const
}
