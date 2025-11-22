import { useState, useEffect } from 'react'

export default function Avatar({ imageUrl, alt }) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const img = new Image()
    img.src = imageUrl
    img.onload = () => setIsLoaded(true)
  }, [imageUrl])

  return (
    <div className="flex justify-center mb-5 mt-5">
      <div className="relative w-[150px] h-[150px]">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500 animate-spin-slow bg-[length:200%_200%]"></div>
        <div
          className={`
            absolute inset-[3px] rounded-full overflow-hidden
            bg-background-avatar
            ${isLoaded ? 'animate-fade-in' : 'opacity-0'}
          `}
        >
          <img
            src={imageUrl}
            alt={alt}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  )
}