import { useState, useEffect } from 'react'
import Avatar from '@/components/Avatar'
import ProfileHeader from '@/components/ProfileHeader'
import SocialIcons from '@/components/SocialIcons'
import LinkButton from '@/components/LinkButton'
import Footer from '@/components/Footer'
import Loading from '@/components/Loading'
import { PROFILE_DATA, SOCIAL_LINKS, MAIN_LINKS, FOOTER_DATA } from '@/config/data'

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <Loading />
  }

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-start p-6">
      <main className="w-full max-w-md">
        <Avatar imageUrl={PROFILE_DATA.avatarUrl} alt={`Foto de ${PROFILE_DATA.name}`} />
        
        <ProfileHeader name={PROFILE_DATA.name} title={PROFILE_DATA.title} />
        
        <div className="py-2">
          <SocialIcons links={SOCIAL_LINKS} />
        </div>
        
        <section className="w-full space-y-0" aria-label="Links principais">
          {MAIN_LINKS.map((link) => (
            <LinkButton
              key={link.href}
              label={link.label}
              description={link.description}
              href={link.href}
              icon={link.icon}
            />
          ))}
        </section>
        
        <Footer cnpj={FOOTER_DATA.cnpj} fullName={FOOTER_DATA.fullName} />
      </main>
    </div>
  )
}