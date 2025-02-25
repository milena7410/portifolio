const PixelIcon = ({ name }: { name: string }) => {
  const getPixelArt = (iconName: string) => {
    // Simplified pixel art representations
    const icons: { [key: string]: string[] } = {
      PHP: ["0110", "1001", "1001", "0110"],
      Python: ["1111", "1100", "1111", "0011"],
      JavaScript: ["1111", "0110", "0110", "1111"],
      React: ["0110", "1001", "1001", "0110"],
      Swift: ["1100", "0110", "0011", "1111"],
      Docker: ["0011", "0110", "1100", "1111"],
      MySQL: ["1001", "1111", "1001", "1001"],
      Laravel: ["1111", "1000", "1110", "1111"],
      iOS: ["1111", "1001", "1001", "1111"],
      Android: ["0110", "1111", "1001", "1111"],
      Git: ["0110", "1111", "1001", "0110"],
      "Node.js": ["0110", "1111", "1100", "1110"],
    }

    return icons[iconName] || icons["JavaScript"] // Default to JavaScript icon if not found
  }

  const pixelArt = getPixelArt(name)

  return (
    <div className="w-16 h-16 grid grid-cols-4 gap-0">
      {pixelArt.flatMap((row, y) =>
        row
          .split("")
          .map((pixel, x) => (
            <div key={`${x}-${y}`} className={`w-full h-full ${pixel === "1" ? "bg-retro-green" : "bg-transparent"}`} />
          )),
      )}
    </div>
  )
}

export default PixelIcon

