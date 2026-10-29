import { ArrowLeft } from 'lucide-react'
import CertificationCard from './CertificationCard'
import { CERTIFICATIONS } from '@/config/data'
import { useLanguage } from '@/i18n/LanguageContext'
import { localize } from '@/i18n/localize'
import { STRINGS } from '@/i18n/strings'

export default function CertificationsView({ onBack }) {
  const { language } = useLanguage()
  const s = STRINGS[language]

  return (
    <div className="w-full animate-fade-in">
      <button
        onClick={onBack}
        className="
          flex items-center gap-2 mb-5
          text-gray-400 hover:text-white
          transition-smooth
          focus:outline-none focus:ring-2 focus:ring-white/20 rounded-lg px-2 py-1
        "
      >
        <ArrowLeft className="w-4 h-4" />
        <span className="text-sm">{s.back}</span>
      </button>

      <h2 className="text-xl font-medium text-white mb-5">
        {s.certificationsHeading}
      </h2>

      <section className="w-full grid grid-cols-2 gap-3" aria-label={s.certificationsLabel}>
        {CERTIFICATIONS.map((cert) => (
          <CertificationCard
            key={cert.href || cert.title.pt}
            title={localize(cert.title, language)}
            issuer={cert.issuer}
            href={cert.href}
            accentColor={cert.accentColor}
            image={cert.image}
            imageFit={cert.imageFit}
            imagePosition={cert.imagePosition}
          />
        ))}
      </section>
    </div>
  )
}
