export default function Loading() {
  return (
    <div className="fixed inset-0 bg-background-primary flex items-center justify-center z-50">
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 border-4 border-gray-800 border-t-blue-500 rounded-full animate-spin"></div>
        
        <p className="text-gray-400 text-sm animate-pulse">Carregando...</p>
      </div>
    </div>
  )
}