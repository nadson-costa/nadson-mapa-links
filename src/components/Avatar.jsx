import { useState, useEffect } from 'react'

export default function Avatar({ imageUrl, alt }) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const img = new Image()
    img.src = imageUrl
    img.onload = () => setIsLoaded(true)
  }, [imageUrl])

  return (
    <div className="flex justify-center mb-5">
      <div className="relative w-[150px] h-[150px]">
        <div 
          className="absolute inset-0 rounded-full animate-gradient-rotate"
          style={{
            background: 'conic-gradient(from 0deg, #3b82f6, #22d3ee, #06b6d4, #3b82f6, #1d4ed8, #3b82f6)'
          }}
        ></div>
        
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