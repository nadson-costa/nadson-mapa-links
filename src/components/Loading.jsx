import { useLanguage } from '@/i18n/LanguageContext'
import { STRINGS } from '@/i18n/strings'

export default function Loading() {
  const { language } = useLanguage()
  const s = STRINGS[language]

  return (
    <div className="fixed inset-0 bg-background-primary flex items-center justify-center z-50">
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 border-4 border-gray-800 border-t-blue-500 rounded-full animate-spin"></div>

        <p className="text-gray-400 text-sm animate-pulse">{s.loading}</p>
      </div>
    </div>
  )
}