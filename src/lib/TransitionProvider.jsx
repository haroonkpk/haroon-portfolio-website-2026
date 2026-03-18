// components/TransitionProvider.jsx
'use client'
import { useState, useRef ,createContext} from 'react'
import { useRouter } from 'next/navigation'

export const TransitionContext = createContext({})

export default function TransitionProvider({ children }) {
  const router = useRouter()
  const [animating, setAnimating] = useState(false)
  const curtainRef = useRef(null)

  const navigate = async (href) => {
    if (animating) return
    setAnimating(true)

    // Curtain CLOSE
    curtainRef.current.style.transform = 'scaleX(1)'
    await sleep(420)

    router.push(href)
    await sleep(100)

    // Curtain OPEN
    curtainRef.current.style.transform = 'scaleX(0)'
    await sleep(420)
    setAnimating(false)
  }

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