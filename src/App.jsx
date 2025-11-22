import { useState, useEffect } from 'react'
import Avatar from '@/components/Avatar'
import ProfileHeader from '@/components/ProfileHeader'
import SocialIcons from '@/components/SocialIcons'
import LinkButton from '@/components/LinkButton'
import Footer from '@/components/Footer'
import Loading from '@/components/Loading'
import ProjectsView from '@/components/ProjectsView'
import { PROFILE_DATA, SOCIAL_LINKS, MAIN_LINKS, FOOTER_DATA } from '@/config/data'

export default function App() {
  const [loading, setLoading] = useState(true)
  const [isExiting, setIsExiting] = useState(false)
  const [currentView, setCurrentView] = useState('home')

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true)
      setTimeout(() => {
        setLoading(false)
      }, 700)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  const handleProjectsClick = () => {
    setCurrentView('projects')
  }

  const handleBackToHome = () => {
    setCurrentView('home')
  }

  if (loading) {
    return (
      <div className={`${isExiting ? 'animate-slide-up' : ''}`}>
        <Loading />
      </div>
    )
  }

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-start p-6">
      <main className="w-full max-w-md">
        <Avatar imageUrl={PROFILE_DATA.avatarUrl} alt={`Foto de ${PROFILE_DATA.name}`} />
        <ProfileHeader name={PROFILE_DATA.name} title={PROFILE_DATA.title} />
        
        <div className="py-2">
          <SocialIcons links={SOCIAL_LINKS} />
        </div>
        
        {currentView === 'home' ? (
          <section className="w-full space-y-2 animate-fade-in" aria-label="Links principais">
            {MAIN_LINKS.map((link) => (
              <LinkButton
                key={link.label}
                label={link.label}
                description={link.description}
                href={link.href}
                icon={link.icon}
                type={link.type}
                onClick={link.type === 'internal' ? handleProjectsClick : undefined}
              />
            ))}
          </section>
        ) : (
          <ProjectsView onBack={handleBackToHome} />
        )}
        
        <Footer cnpj={FOOTER_DATA.cnpj} fullName={FOOTER_DATA.fullName} />
      </main>
    </div>
  )
}