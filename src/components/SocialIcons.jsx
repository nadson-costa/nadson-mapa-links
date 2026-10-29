export default function SocialIcons({ links, ariaLabel }) {
  return (
    <nav className="flex justify-center items-center gap-6 mb-3" aria-label={ariaLabel}>
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          className="text-gray-400 hover:text-white hover:scale-110 hover:drop-shadow-[0_0_6px_#3b82f6] transition-smooth"
        >
          {link.icon}
        </a>
      ))}
    </nav>
  )
}
