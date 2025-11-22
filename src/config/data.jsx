import { FileText, Code, Instagram, Linkedin, Github, Mail, FolderGit2 } from 'lucide-react'

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
    label: 'Principais projetos',
    description: 'Meus projetos em destaque',
    icon: <FolderGit2 size={18} />,
    type: 'internal',
  },
  {
    label: 'Minha newsletter',
    description: 'Artigos semanais sobre tecnologia aplicada em negócios',
    href: 'https://www.linkedin.com/newsletters/7319017819176620033/?displayConfirmation=true',
    icon: <FileText size={18} />,
    type: 'external',
  },
  {
    label: 'Perfil HackerRank',
    description: 'Meus desafios e soluções no HackerRank',
    href: 'https://www.hackerrank.com/profile/nadsonascosta',
    icon: <Code size={18} />,
    type: 'external',
  },
]

export const PROJECTS = [
  {
    title: 'Implantação de infraestrutura de DevOps',
    description: 'Documentação da arquitetura e a implementação de uma plataforma de serviços auto-hospedada em uma VPS Ubuntu',
    href: 'https://github.com/nadson-costa/projeto-erp',
    tech: 'Ubuntu, Docker, NGINX Proxy Manager, Gitea',
  },
  {
    title: 'Plataforma interna de e-mail marketing',
    description: 'API RESTful completa, servindo como o backend para uma interface de frontend.',
    href: 'https://github.com/nadson-costa/sistema-email-marketing',
    tech: 'Python, FastAPI, PostgreSQL, Docker, Celery, Redis',
  },
  {
    title: 'Encurtador de URLs com UTM e gerador de QR Code',
    description: 'Um serviço de backend para encurtamento de URLs, construído com Python e FastAPI',
    href: 'https://github.com/nadson-costa/encurtador-links-api',
    tech: 'Python, FastAPI, Docker, PostgreSQL, NGINX',
  },
]

export const FOOTER_DATA = {
  fullName: 'Nadson A S Costa',
}