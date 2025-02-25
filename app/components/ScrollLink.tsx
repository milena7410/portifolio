"use client"

import type React from "react"

interface ScrollLinkProps {
  to: string
  children: React.ReactNode
  className?: string
}

const ScrollLink: React.FC<ScrollLinkProps> = ({ to, children, className }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()
    const target = document.querySelector(to)
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <a href={to} onClick={handleClick} className={className}>
      {children}
    </a>
  )
}

export default ScrollLink

