import { ArrowLeft } from 'lucide-react'
import ProjectCard from './ProjectCard'
import { PROJECTS } from '@/config/data'
import { useLanguage } from '@/i18n/LanguageContext'
import { localize } from '@/i18n/localize'
import { STRINGS } from '@/i18n/strings'

export default function ProjectsView({ onBack }) {
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
        {s.projectsHeading}
      </h2>

      <section className="w-full" aria-label={s.projectsLabel}>
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.href}
            title={localize(project.title, language)}
            description={localize(project.description, language)}
            href={project.href}
            tech={project.tech}
          />
        ))}
      </section>
    </div>
  )
}