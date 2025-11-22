import { FileText, Code, Instagram, Linkedin, Github, Mail, FolderGit2, Presentation } from 'lucide-react'

export const PROFILE_DATA = {
  name: 'Nadson Costa',
  title: 'Supervisor de Tecnologia @Yellow Kite & Desenvolvedor Back-End',
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
    view: 'projects',
  },
  {
    label: 'Palestras e apresentações',
    description: 'Eventos e workshops que ministrei',
    icon: <Presentation size={18} />,
    type: 'internal',
    view: 'talks',
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

export const TALKS = [
  {
    title: 'BI, Inteligência Artificial e Inovações Tecnológicas',
    description: 'Ritmo da inovação, conceitos e aplicações de IAs, exemplos práticos de aplicação no setor público para os alunos de pós-graduação de gestão de projetos da Fundepes.',
    image: '/img/fundepes.webp',
    date: 'Julho/2025',
    location: 'FUNDEPES, Maceió/AL',
    href: 'https://www.linkedin.com/posts/nadsoncosta_ia-tecnologia-inovaaexaeto-activity-7344831966044684288-Zt5A',
  },
  {
    title: 'Agentes de IA no Bitrix24 com o GPT Maker',
    description: 'Primeiros passos para implementar um agente de IA e como ele pode transformar seu atendimento, trazendo mais agilidade, personalização e eficiência para sua empresa.',
    image: '/img/ia-bitrix.webp',
    date: 'Outubro/2025',
    location: 'YouTube - CRMThink',
    href: 'https://youtu.be/c1bZDD302M4?si=Qruf2STL7ec6EyEO',
  },
  {
    title: 'Hackathon Detran Alagoas 2025 ',
    description: 'Sistema integrado que centraliza, organiza e transforma dados e informações de diversas fontes em insights, análises preditivas e alertas automáticos',
    image: '/img/detran.webp',
    date: 'Junho/2025',
    location: 'Espaço Armazém, Maceió/AL',
    href: 'https://www.linkedin.com/posts/nadsoncosta_inovaaexaeto-detran-hackathon-activity-7336364942578569217-Cirt?',
  },
]

export const FOOTER_DATA = {
  fullName: 'Nadson A S Costa',
}