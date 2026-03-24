'use client'
import { useState, useRef, createContext, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'

export const TransitionContext = createContext({})

export default function TransitionProvider({ children }) {
  const router = useRouter()
  const pathname = usePathname()
  const [animating, setAnimating] = useState(false)
  const isNavigatingRef = useRef(false)
  const curtainRef = useRef(null)

  const navigate = async (href) => {
    if (animating) return
    
    // Check if the target is exactly the same path
    const targetUrl = new URL(href, window.location.href)
    const isSamePath = pathname === targetUrl.pathname && targetUrl.origin === window.location.origin
    
    setAnimating(true)

    // Curtain CLOSE
    curtainRef.current.style.transform = 'scaleX(1)'
    await sleep(420)

    if (isSamePath) {
      router.push(href)
      await sleep(100)
      curtainRef.current.style.transform = 'scaleX(0)'
      await sleep(420)
      setAnimating(false)
      return
    }

    isNavigatingRef.current = true
    router.push(href)

    // Fallback: If navigation is stuck/failed for a long time, open the curtain
    setTimeout(() => {
      if (isNavigatingRef.current) {
        isNavigatingRef.current = false
        if (curtainRef.current) curtainRef.current.style.transform = 'scaleX(0)'
        setTimeout(() => setAnimating(false), 420)
      }
    }, 8000)
  }

  // Open the curtain after the route has officially changed
  useEffect(() => {
    if (isNavigatingRef.current) {
      isNavigatingRef.current = false
      const openCurtain = async () => {
        await sleep(50) // Short delay to let the browser paint the new page
        if (curtainRef.current) {
          curtainRef.current.style.transform = 'scaleX(0)'
        }
        await sleep(420)
        setAnimating(false)
      }
      openCurtain()
    }
  }, [pathname])

  return (
    <TransitionContext.Provider value={{ navigate }}>
      {children}
      <div ref={curtainRef} style={{
        position: 'fixed', inset: 0, background: 'var(--color-bg-dark)', zIndex: 9999,
        transform: 'scaleX(0)', transformOrigin: 'left',
        transition: 'transform 0.42s cubic-bezier(0.77,0,0.18,1)'
      }} />
    </TransitionContext.Provider>
  )
}

const sleep = (ms) => new Promise(r => setTimeout(r, ms))