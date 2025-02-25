import { Github, Linkedin, Mail, Instagram } from "lucide-react"
import Skills from "./components/Skills"
import Experience from "./components/Experience"
import Education from "./components/Education"
import Achievements from "./components/Achievements"
import RetroHeader from "./components/RetroHeader"
import BlinkingCursor from "./components/BlinkingCursor"
import PixelatedBackground from "./components/PixelatedBackground"
import TypewriterEffect from "./components/TypewriterEffect"
import SocialButton from "./components/SocialButton"
import SoundEffect from "./components/SoundEffect"

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <PixelatedBackground />
      <SoundEffect />
      <RetroHeader />
      <div className="container mx-auto px-4 py-8 pt-20 relative z-10 max-w-5xl">
        <main className="space-y-12">
          <section className="text-center mb-8">
            <h1 className="text-4xl font-pixel mb-2 text-retro-green animate-float">Milena Alegre</h1>
            <p className="text-xl mb-4 font-mono text-retro-green">
              <TypewriterEffect text="Analista de Sistemas e Desenvolvedora Fullstack" />
              <BlinkingCursor />
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto">
              <SocialButton icon={<Github className="h-5 w-5" />} href="https://github.com/milena7410" label="GitHub" />
              <SocialButton
                icon={<Linkedin className="h-5 w-5" />}
                href="https://www.linkedin.com/in/milena-alegre-3b5211199/"
                label="LinkedIn"
              />
              <SocialButton icon={<Mail className="h-5 w-5" />} href="mailto:milenaalegre99@gmail.com" label="Email" />
              <SocialButton
                icon={<Instagram className="h-5 w-5" />}
                href="https://instagram.com/seu-perfil"
                label="Instagram"
              />
            </div>
          </section>

          <Skills />
          <Experience />
          <Education />
          <Achievements />
        </main>
      </div>
    </div>
  )
}

