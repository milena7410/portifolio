import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const achievements = [
  {
    title: "F5 Sistemas",
    description:
      "Fundação de uma empresa de desenvolvimento de software, demonstrando empreendedorismo e liderança no setor de tecnologia.",
    year: "2025",
    icon: "🚀",
  },
  {
    title: "Cidades Digitais",
    description:
      "Participação no projeto estruturante Cidades Digitais, contribuindo para a cultura digital na sociedade brasileira através de ações de inclusão digital sustentáveis.",
    year: "2023",
    icon: "🏙️",
  },
]

export default function Achievements() {
  return (
    <section id="conquistas" className="mb-12 pt-20 pixel-reveal">
      <h2 className="text-2xl font-pixel mb-4 text-retro-green">Conquistas e Prêmios</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {achievements.map((achievement, index) => (
          <Card key={index} className="pixelated-border bg-gray-800 hover:bg-gray-700 transition-colors">
            <CardHeader>
              <CardTitle className="font-pixel text-retro-green text-lg flex items-center">
                <span className="mr-2 text-2xl">{achievement.icon}</span>
                {achievement.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-mono text-retro-green text-sm">{achievement.description}</p>
              <p className="font-mono text-retro-green text-xs mt-2">{achievement.year}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

