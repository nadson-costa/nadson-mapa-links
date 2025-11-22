import { FileText, Code, Instagram, Linkedin, Github, Mail } from 'lucide-react'

export const PROFILE_DATA = {
  name: 'Nadson Costa',
  title: 'Supervisor de Tecnologia @Yellow Kite & Dev Back-End',
  avatarUrl: '/img/nadson.webp',
}

export const SOCIAL_LINKS = [
  {
    href: 'https://instagram.com/nadsoncostaa',
    icon: <Instagram className="w-5 h-5" />,
    label: 'Instagram',
  },
  {
    href: 'https://www.linkedin.com/in/nadsoncosta/',
    icon: <Linkedin className="w-5 h-5" />,
    label: 'LinkedIn',
  },
  {
    href: 'https://github.com/nadson-costa',
    icon: <Github className="w-5 h-5" />,
    label: 'GitHub',
  },
  {
    href: 'mailto:nadsonascosta@gmail.com',
    icon: <Mail className="w-5 h-5" />,
    label: 'Email',
  },
]

export const MAIN_LINKS = [
  {
    label: 'Minha newsletter',
    description: 'Artigos semanais sobre tecnologia aplicada em negócios',
    href: 'https://www.linkedin.com/newsletters/7319017819176620033/?displayConfirmation=true',
    icon: <FileText size={18} />,
  },
  {
    label: 'Perfil HackerRank',
    description: 'Meus desafios e soluções no HackerRank',
    href: 'https://www.hackerrank.com/profile/nadsonascosta',
    icon: <Code size={18} />,
  },
]

export const FOOTER_DATA = {
  fullName: 'Nadson A S Costa',
}
