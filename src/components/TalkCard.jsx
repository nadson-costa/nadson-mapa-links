import { Calendar, MapPin, ExternalLink } from 'lucide-react'

export default function TalkCard({ title, description, image, date, location, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        w-full flex flex-col
        bg-background-secondary hover:bg-background-hover
        text-white rounded-lg overflow-hidden mb-4
        transition-smooth
        focus:outline-none focus:ring-2 focus:ring-white/20
        cursor-pointer
      "
    >
      <div className="w-full h-40 bg-gray-800 overflow-hidden relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-medium text-base">{title}</h3>
          <ExternalLink className="w-4 h-4 text-gray-500 flex-shrink-0 mt-1" />
        </div>
        
        <p className="text-sm text-gray-400 mb-3">{description}</p>
        
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <Calendar className="w-3.5 h-3.5" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <MapPin className="w-3.5 h-3.5" />
            <span>{location}</span>
          </div>
        </div>
      </div>
    </a>
  )
}