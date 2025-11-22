export default function SocialIcons({ links }) {
  return (
    <nav className="flex justify-center items-center gap-6 mb-8" aria-label="Redes sociais">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          className="text-gray-400 hover:text-white transition-smooth"
        >
          {link.icon}
        </a>
      ))}
    </nav>
  )
}
