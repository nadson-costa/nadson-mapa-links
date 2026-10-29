import { Award } from 'lucide-react'

export default function CertificationCard({ title, issuer, href, accentColor, image, imageFit, imagePosition }) {
  const Tag = href ? 'a' : 'div'
  const linkProps = href ? { href, target: '_blank', rel: 'noopener noreferrer' } : {}

  return (
    <Tag
      {...linkProps}
      title={issuer ? `${title} — ${issuer}` : title}
      style={{ '--accent': accentColor }}
      className="
        min-h-[170px]
        bg-background-secondary
        rounded-xl p-4
        flex flex-col items-center justify-center gap-2 text-center
        transition-all duration-300
        hover:-translate-y-1 hover:shadow-[0_0_24px_-6px_var(--accent)]
        focus:outline-none focus:ring-2 focus:ring-white/20
      "
    >
      <div
        className={`
          w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden flex items-center justify-center
          ${imageFit === 'contain' ? 'bg-white p-2' : ''}
        `}
      >
        {image ? (
          <img
            src={image}
            alt=""
            className={`w-full h-full ${imageFit === 'contain' ? 'object-contain' : 'object-cover'}`}
            style={imageFit !== 'contain' ? { objectPosition: imagePosition || 'center' } : undefined}
          />
        ) : (
          <Award className="w-7 h-7" style={{ color: accentColor }} />
        )}
      </div>

      <span className="text-xs font-medium text-white">{title}</span>
    </Tag>
  )
}
