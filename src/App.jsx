import { useState, useEffect } from 'react'
import Avatar from '@/components/Avatar'
import ProfileHeader from '@/components/ProfileHeader'
import SocialIcons from '@/components/SocialIcons'
import LinkButton from '@/components/LinkButton'
import Footer from '@/components/Footer'
import Loading from '@/components/Loading'
import ProjectsView from '@/components/ProjectsView'
import TalksView from '@/components/TalksView'
import LanguageToggle from '@/components/LanguageToggle'
import { useLanguage } from '@/i18n/LanguageContext'
import { localize } from '@/i18n/localize'
import { STRINGS } from '@/i18n/strings'
import { PROFILE_DATA, SOCIAL_LINKS, MAIN_LINKS, FOOTER_DATA } from '@/config/data'

export default function App() {
  const [loading, setLoading] = useState(true)
  const [isExiting, setIsExiting] = useState(false)
  const [currentView, setCurrentView] = useState('home')
  const { language } = useLanguage()
  const s = STRINGS[language]

  useEffect(() => {
    setIsExiting(true)
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const handleNavigation = (view) => {
    setCurrentView(view)
  }

  const handleBackToHome = () => {
    setCurrentView('home')
  }

  if (loading) {
    return (
      <div 
        className={`
          fixed inset-0 z-50
          transition-transform duration-1000 ease-out
          ${isExiting ? '-translate-y-full' : 'translate-y-0'}
        `}
      >
        <Loading />
      </div>
    )
  }

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-start p-6 animate-fade-in">
      <LanguageToggle />
      <main className="w-full max-w-lg">
        <Avatar imageUrl={PROFILE_DATA.avatarUrl} alt={`${s.photoOf} ${PROFILE_DATA.name}`} />
        <ProfileHeader name={PROFILE_DATA.name} title={localize(PROFILE_DATA.title, language)} />

        <div className="py-2 mb-6">
          <SocialIcons links={SOCIAL_LINKS} ariaLabel={s.socialLinksLabel} />
        </div>

        {currentView === 'home' && (
          <section className="w-full space-y-2 animate-fade-in" aria-label={s.mainLinksLabel}>
            {MAIN_LINKS.map((link) => (
              <LinkButton
                key={link.id}
                label={localize(link.label, language)}
                description={localize(link.description, language)}
                href={link.href}
                icon={link.icon}
                type={link.type}
                onClick={link.type === 'internal' ? () => handleNavigation(link.view) : undefined}
              />
            ))}
          </section>
        )}
        
        {currentView === 'projects' && (
          <ProjectsView onBack={handleBackToHome} />
        )}
        
        {currentView === 'talks' && (
          <TalksView onBack={handleBackToHome} />
        )}
        
        <Footer cnpj={FOOTER_DATA.cnpj} fullName={FOOTER_DATA.fullName} />
      </main>
    </div>
  )
}