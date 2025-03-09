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
    setDisplayText("") // 🔹 Reseta o texto antes de começar

    let i = 0
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayText((prev) => `${text.slice(0, i + 1)}`) // 🔹 Forma segura de atualizar o texto
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

