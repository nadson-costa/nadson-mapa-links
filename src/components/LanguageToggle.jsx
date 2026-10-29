import { useLanguage } from '@/i18n/LanguageContext'

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage()

  return (
    <button
      onClick={toggleLanguage}
      aria-label={language === 'pt' ? 'Switch to English' : 'Mudar para português'}
      className="
        fixed top-4 right-4 z-40
        flex items-center gap-1.5
        bg-background-secondary hover:bg-background-hover
        rounded-full px-3 py-1.5
        transition-smooth
        focus:outline-none focus:ring-2 focus:ring-white/20
      "
    >
      <span className={`text-xs font-medium ${language === 'pt' ? 'text-white' : 'text-gray-500'}`}>
        PT
      </span>
      <span className="text-gray-600 text-xs">|</span>
      <span className={`text-xs font-medium ${language === 'en' ? 'text-white' : 'text-gray-500'}`}>
        EN
      </span>
    </button>
  )
}
