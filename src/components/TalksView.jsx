import { ArrowLeft } from 'lucide-react'
import TalkCard from './TalkCard'
import { TALKS } from '@/config/data'
import { useLanguage } from '@/i18n/LanguageContext'
import { localize } from '@/i18n/localize'
import { STRINGS } from '@/i18n/strings'

export default function TalksView({ onBack }) {
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

      <section className="w-full" aria-label={s.talksLabel}>
        {TALKS.map((talk) => (
          <TalkCard
            key={talk.href}
            title={localize(talk.title, language)}
            description={localize(talk.description, language)}
            image={talk.image}
            date={localize(talk.date, language)}
            location={talk.location}
            href={talk.href}
          />
        ))}
      </section>
    </div>
  )
}