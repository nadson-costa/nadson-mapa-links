export default function Footer({ cnpj, fullName }) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mt-auto pt-10 pb-4 text-center">
      <p className="text-gray-500 text-xs">{cnpj}</p>
      <p className="text-gray-500 text-xs mt-1">
        © {currentYear} {fullName}
      </p>
    </footer>
  )
}
