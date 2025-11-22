import { ArrowLeft } from 'lucide-react'
import TalkCard from './TalkCard'
import { TALKS } from '@/config/data'

export default function TalksView({ onBack }) {
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
        <span className="text-sm">Voltar</span>
      </button>

      <section className="w-full" aria-label="Palestras e treinamentos">
        {TALKS.map((talk, index) => (
          <TalkCard
            key={index}
            title={talk.title}
            description={talk.description}
            image={talk.image}
            date={talk.date}
            location={talk.location}
            href={talk.href}
          />
        ))}
      </section>
    </div>
  )
}