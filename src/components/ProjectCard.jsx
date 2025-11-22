import { ExternalLink } from 'lucide-react'

export default function ProjectCard({ title, description, href, tech }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        w-full flex flex-col
        bg-background-secondary hover:bg-background-hover
        text-white rounded-lg p-4 mb-2.5
        transition-smooth
        focus:outline-none focus:ring-2 focus:ring-white/20
      "
    >
      <div className="flex items-start justify-between mb-2">
        <h3 className="font-medium text-base">{title}</h3>
        <ExternalLink className="w-4 h-4 text-gray-500 flex-shrink-0 mt-1" />
      </div>
      
      <p className="text-sm text-gray-400 mb-3">{description}</p>
      
      <div className="flex items-center gap-2">
        <span className="text-xs text-blue-400 bg-blue-500/10 px-2 py-1 rounded">
          {tech}
        </span>
      </div>
    </a>
  )
}