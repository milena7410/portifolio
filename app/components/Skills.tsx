import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

const skills = [
  {
    name: "PHP",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  },
  {
    name: "JavaScript",
    iconUrl: "https://img.icons8.com/color/96/javascript--v1.png",
  },
  {
    name: "React",
    iconUrl: "https://img.icons8.com/color/96/react-native.png",
  },
  {
    name: "Swift",
    iconUrl: "https://img.icons8.com/color/96/swift.png",
  },
  {
    name: "Docker",
    iconUrl: "https://img.icons8.com/color/96/docker.png",
  },
  {
    name: "MySQL",
    iconUrl: "https://img.icons8.com/color/96/mysql-logo.png",
  },
  {
    name: "Laravel",
    iconUrl: "https://img.icons8.com/fluency/96/laravel.png",
  },
  {
    name: "iOS",
    iconUrl: "https://img.icons8.com/color/96/ios-logo.png",
  },
  {
    name: "Android",
    iconUrl: "https://img.icons8.com/color/96/android-os.png",
  },
  {
    name: "Git",
    iconUrl: "https://img.icons8.com/color/96/git.png",
  },
  {
    name: "Node.js",
    iconUrl: "https://img.icons8.com/color/96/nodejs.png",
  },
  {
    name: "Python",
    iconUrl: "https://img.icons8.com/color/96/python--v1.png",
  },
]

export default function Skills() {
  return (
    <section id="tecnologias" className="mb-8">
      <h2 className="text-2xl font-pixel mb-4 text-retro-green">Tecnologias</h2>
      <Card className="pixelated-border bg-gray-800">
        <CardHeader className="pb-2">
          <CardTitle className="font-pixel text-retro-green text-lg">Tecnologias</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
            {skills.map((skill) => (
              <TooltipProvider key={skill.name}>
                <Tooltip>
                  <TooltipTrigger>
                    <div className="flex flex-col items-center group">
                      <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-gray-700 p-1.5 transition-all duration-300 group-hover:bg-gray-600">
                        <img
                          src={skill.iconUrl || "/placeholder.svg"}
                          alt={`${skill.name} icon`}
                          className="w-full h-full object-contain"
                          crossOrigin="anonymous"
                        />
                      </div>
                      <span className="mt-1 font-mono text-xs text-retro-green">{skill.name}</span>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="font-mono">{skill.name}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

