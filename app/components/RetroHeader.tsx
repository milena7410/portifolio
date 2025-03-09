"use client"

import { useState, useEffect } from "react"
import ScrollLink from "./ScrollLink"

const RetroHeader = () => {
  const [secaoAtiva, setSecaoAtiva] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      const secoes = ["tecnologias", "experiencia", "educacao", "conquistas"]
      let atual = ""

      for (const secao of secoes) {
        const elemento = document.getElementById(secao)
        if (elemento && elemento.getBoundingClientRect().top <= 100) {
          atual = secao
        }
      }

      setSecaoAtiva(atual)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-900 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* <div className="text-2xl font-pixel text-retro-green">MA</div> */}
          <img
        src="/avatar.png"
          alt="Foto de perfil"
        className="w-16 h-16 rounded-full border-2 border-retro-green"
/>
          <nav>
            <ul className="flex space-x-4">
              {[
                { id: "tecnologias", nome: "Tecnologias" },
                { id: "experiencia", nome: "Experiência" },
                { id: "educacao", nome: "Educação" },
                { id: "conquistas", nome: "Conquistas" },
              ].map((secao) => (
                <li key={secao.id}>
                  <ScrollLink
                    to={`#${secao.id}`}
                    className={`font-mono text-retro-green hover:text-white transition-colors ${
                      secaoAtiva === secao.id ? "border-b-2 border-retro-green" : ""
                    }`}
                  >
                    {secao.nome}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default RetroHeader

