"use client"

import { useEffect, useRef } from "react"

const SoundEffect = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    audioRef.current = new Audio("/sounds/click.mp3")

    const playSound = () => {
      if (audioRef.current) {
        audioRef.current.currentTime = 0
        audioRef.current.play()
      }
    }

    document.addEventListener("click", playSound)

    return () => {
      document.removeEventListener("click", playSound)
    }
  }, [])

  return null
}

export default SoundEffect

