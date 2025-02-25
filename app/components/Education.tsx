import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const education = [
  {
    degree: "Pós-Graduação: Desenvolvimento de Aplicações para Dispositivos Móveis",
    institution: "UNIMIDAS - EAD",
    year: "2024",
    icon: "📱", // Emoji para representar desenvolvimento mobile
  },
  {
    degree: "Pós-Graduação: Desenvolvimento em aplicações Web",
    institution: "UNIMIDAS - EAD",
    year: "2024",
    icon: "🌐", // Emoji para representar desenvolvimento web
  },
  {
    degree: "Bacharel: Sistemas de Informação",
    institution: "Universidade Federal de Mato Grosso do Sul - Campo grande",
    period: "03/2020 - 01/2023",
    icon: "🎓", // Emoji para representar graduação
  },
  {
    degree: "Técnico: Técnico em Informática",
    institution: "Instituto Federal de Mato Grosso do Sul - Aquidauana",
    period: "03/2014 - 01/2017",
    icon: "💻", // Emoji para representar informática
  },
]

export default function Education() {
  return (
    <section id="educacao" className="mb-12 pt-20 pixel-reveal">
      <h2 className="text-2xl font-pixel mb-4 text-retro-green">Formação Acadêmica</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {education.map((edu, index) => (
          <Card key={index} className="pixelated-border bg-gray-800 hover:bg-gray-700 transition-colors">
            <CardHeader>
              <CardTitle className="font-pixel text-retro-green text-lg flex items-center">
                <span className="mr-2 text-2xl">{edu.icon}</span>
                {edu.degree}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-mono text-retro-green">{edu.institution}</p>
              <p className="font-mono text-retro-green text-sm mt-2">{edu.year || edu.period}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

