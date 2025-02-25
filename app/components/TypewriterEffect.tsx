"use client"

import type React from "react"

import { useState, useEffect } from "react"

interface TypewriterEffectProps {
  text: string
  delay?: number
}

const TypewriterEffect: React.FC<TypewriterEffectProps> = ({ text, delay = 100 }) => {
  const [displayText, setDisplayText] = useState("")

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayText((prev) => prev + text.charAt(i))
        i++
      } else {
        clearInterval(timer)
      }
    }, delay)

    return () => clearInterval(timer)
  }, [text, delay])

  return <span>{displayText}</span>
}

export default TypewriterEffect

