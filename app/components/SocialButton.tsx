"use client"

import type React from "react"
import { Button } from "@/components/ui/button"

interface SocialButtonProps {
  icon: React.ReactNode
  href: string
  label: string
}

const SocialButton: React.FC<SocialButtonProps> = ({ icon, href, label }) => {
  return (
    <Button
      variant="outline"
      size="lg"
      className="pixelated-border bg-gray-800 hover:bg-gray-700 text-retro-green hover:text-white transition-colors duration-300 flex items-center space-x-2"
      onClick={() => window.open(href, "_blank")}
    >
      {icon}
      <span className="font-mono text-sm">{label}</span>
    </Button>
  )
}

export default SocialButton

