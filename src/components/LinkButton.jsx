import { ExternalLink } from 'lucide-react'

export default function LinkButton({ label, href, icon, description }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        w-full flex items-center justify-between
        bg-background-secondary hover:bg-background-hover
        text-white rounded-lg px-4 py-3.5 mb-2.5
        transition-smooth
        focus:outline-none focus:ring-2 focus:ring-white/20
      "
    >
      <div className="flex items-center gap-3">
        {icon && <span className="flex-shrink-0">{icon}</span>}
        <div className="flex flex-col items-start">
          <span className="font-medium text-sm">{label}</span>
          {description && (
            <span className="text-xs text-gray-400 mt-0.5">{description}</span>
          )}
        </div>
      </div>
      <ExternalLink className="w-4 h-4 text-gray-500 flex-shrink-0" />
    </a>
  )
}
