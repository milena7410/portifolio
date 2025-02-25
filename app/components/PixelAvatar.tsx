const PixelAvatar = () => {
  return (
    <div className="w-32 h-32 mx-auto mb-4 grid grid-cols-8 grid-rows-8 gap-0.5 animate-float">
      {[...Array(64)].map((_, i) => (
        <div
          key={i}
          className={`w-full h-full ${
            [0, 7, 8, 15, 16, 23, 24, 31, 32, 39, 40, 47, 48, 55, 56, 63].includes(i)
              ? "bg-retro-green"
              : "bg-transparent"
          }`}
        />
      ))}
    </div>
  )
}

export default PixelAvatar

