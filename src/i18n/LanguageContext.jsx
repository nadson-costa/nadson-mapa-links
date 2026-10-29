import { createContext, useContext, useEffect, useState } from 'react'

const STORAGE_KEY = 'nml-language'
const LanguageContext = createContext(null)

function getInitialLanguage() {
  if (typeof window === 'undefined') return 'pt'
  return localStorage.getItem(STORAGE_KEY) === 'en' ? 'en' : 'pt'
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(getInitialLanguage)

  useEffect(() => {
    document.documentElement.lang = language === 'en' ? 'en' : 'pt-BR'
    localStorage.setItem(STORAGE_KEY, language)
  }, [language])

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'pt' ? 'en' : 'pt'))
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
