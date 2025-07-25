import { useEffect, useRef, useState } from 'react'

export function useStaggeredAnimation(length: number, threshold = 0.2) {
  const refs = useRef<(HTMLElement | null)[]>([])
  const [isVisibleArray, setIsVisibleArray] = useState<boolean[]>(() =>
    new Array(length).fill(false)
  )

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setIsVisibleArray((prev) => {
          const updated = [...prev]
          entries.forEach((entry) => {
            const index = refs.current.findIndex((ref) => ref === entry.target)
            if (entry.isIntersecting && !updated[index]) {
              updated[index] = true
              observer.unobserve(entry.target)
            }
          })
          return updated
        })
      },
      { threshold }
    )

    refs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [length, threshold])

  // Return stable callback setter list
  const refCallbacks = Array.from(
    { length },
    (_, i) => (el: HTMLElement | null) => {
      refs.current[i] = el
    }
  )

  return { refCallbacks, isVisibleArray }
}
