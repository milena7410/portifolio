import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const experiences = [
  {
    title: "Desenvolvedor Fullstack",
    company: "Digitar Informática",
    period: "10/2024 - Atual",
    location: "Campo Grande, MS",
    responsibilities: [
      "Desenvolvimento frontend e backend de aplicações (web e desktop) e aplicativos (IOS e Android).",
      "Construção de APIs.",
      "Gerenciamento de banco de dados.",
      "Gerenciamento de pipelines CI/CD, configuração de container Docker.",
    ],
  },
  {
    title: "Quality Assurance",
    company: "Quality Sistemas",
    period: "06/2021 - 09/2024",
    location: "Campo Grande, MS",
    responsibilities: [
      "Realizar testes nos sistemas desktop baseados em Delphi, testes web, manipulação no banco de dados utilizando a ferramenta IbExpert.",
      "Treinamento para equipe e clientes.",
      "Analise de chamados e criação de casos de testes.",
    ],
  },
  {
    title: "Programador de Internet",
    company: "Prefeitura Municipal de Aquidauana",
    period: "01/2020 - 05/2021",
    location: "Aquidauana, MS",
    responsibilities: [
      "Prover internet gratuita para locais públicos, como hospitais, escolas, praças.",
      "Manter em pleno funcionamento a rede, averiguando diariamente 26km de fibra óptica.",
      "Configuração de racks e analise da rede feita pela ferramenta Zabbix e Grafana.",
    ],
  },
  {
    title: "Técnico de Redes Jr",
    company: "Ziva Tecnologia e Solucoes LTDA",
    period: "02/2019 - 07/2020",
    location: "Aquidauana, MS",
    responsibilities: [
      "Realizar gestão das trocas de equipamentos danificados.",
      "Analisar alertas emitidos devido alguma divergência na rede.",
      "Crimpagem de cabo de rede e desenho da estrutura utilizando a ferramenta Cisco Packet Tracer",
    ],
  },
]

export default function Experience() {
  return (
    <section id="experiencia" className="mb-12 pt-20 pixel-reveal">
      <h2 className="text-2xl font-pixel mb-4 text-retro-green">Experiência Profissional</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {experiences.map((exp, index) => (
          <Card key={index} className="pixelated-border bg-gray-800 hover:bg-gray-700 transition-colors">
            <CardHeader>
              <CardTitle className="font-pixel text-retro-green text-lg">{exp.title}</CardTitle>
              <p className="font-mono text-retro-green text-sm">{exp.company}</p>
              <p className="font-mono text-retro-green text-xs">
                {exp.period} | {exp.location}
              </p>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 font-mono text-retro-green text-sm">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="mb-1">
                    {resp}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

