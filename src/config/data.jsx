import { FileText, Code, Instagram, Linkedin, Github, Mail, FolderGit2, Presentation } from 'lucide-react'

export const PROFILE_DATA = {
  name: 'Nadson Costa',
  title: { pt: 'Engenheiro de Software na @CI&T', en: 'Software Engineer at @CI&T' },
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
    id: 'projects',
    label: { pt: 'Principais projetos', en: 'Main projects' },
    description: { pt: 'Meus projetos em destaque', en: 'My featured projects' },
    icon: <FolderGit2 size={18} />,
    type: 'internal',
    view: 'projects',
  },
  {
    id: 'talks',
    label: { pt: 'Palestras e apresentações', en: 'Talks & presentations' },
    description: { pt: 'Eventos e workshops que ministrei', en: "Events and workshops I've given" },
    icon: <Presentation size={18} />,
    type: 'internal',
    view: 'talks',
  },
  {
    id: 'newsletter',
    label: { pt: 'Minha newsletter', en: 'My newsletter' },
    description: {
      pt: 'Artigos semanais sobre engenharia de software e inteligência artificial',
      en: 'Weekly articles about software engineering and artificial intelligence',
    },
    href: 'https://medium.com/@nadson-costa',
    icon: <FileText size={18} />,
    type: 'external',
  },
  {
    id: 'hackerrank',
    label: { pt: 'Perfil HackerRank', en: 'HackerRank profile' },
    description: { pt: 'Meus desafios e soluções no HackerRank', en: 'My challenges and solutions on HackerRank' },
    href: 'https://www.hackerrank.com/profile/nadsonascosta',
    icon: <Code size={18} />,
    type: 'external',
  },
]

export const PROJECTS = [
  {
    title: { pt: 'Sistema de checklist de qualidade', en: 'Quality checklist system' },
    description: {
      pt: 'Sistema de gestão de qualidade para cliente do segmento de APH privado',
      en: 'Quality management system for a private pre-hospital care (APH) client',
    },
    href: 'https://github.com/nadson-costa/cronos-checklists',
    tech: 'FastAPI, Docker, PostgreSQL, Next.js, Tailwind CSS, Prometheus',
  },
  {
    title: { pt: 'Implantação de infraestrutura de DevOps', en: 'DevOps infrastructure deployment' },
    description: {
      pt: 'Documentação da arquitetura e a implementação de uma plataforma de serviços auto-hospedada em uma VPS Ubuntu',
      en: 'Architecture documentation and implementation of a self-hosted services platform on an Ubuntu VPS',
    },
    href: 'https://github.com/nadson-costa/self-hosted-paas-vps',
    tech: 'Ubuntu, Docker, NGINX Proxy Manager, Gitea',
  },
  {
    title: { pt: 'Plataforma interna de e-mail marketing', en: 'Internal email marketing platform' },
    description: {
      pt: 'API RESTful completa, servindo como o backend para uma interface de frontend.',
      en: 'Complete RESTful API, serving as the backend for a frontend interface.',
    },
    href: 'https://github.com/nadson-costa/sistema-email-marketing',
    tech: 'Python, FastAPI, PostgreSQL, Docker, Celery, Redis',
  },
]

export const TALKS = [
  {
    title: {
      pt: 'BI, Inteligência Artificial e Inovações Tecnológicas',
      en: 'BI, Artificial Intelligence and Technological Innovations',
    },
    description: {
      pt: 'Ritmo da inovação, conceitos e aplicações de IAs, exemplos práticos de aplicação no setor público para os alunos de pós-graduação de gestão de projetos da Fundepes.',
      en: 'Pace of innovation, AI concepts and applications, practical examples of public-sector use for Fundepes project management postgraduate students.',
    },
    image: '/img/fundepes.webp',
    date: { pt: 'Julho/2025', en: 'July/2025' },
    location: 'FUNDEPES, Maceió/AL',
    href: 'https://www.linkedin.com/posts/nadsoncosta_ia-tecnologia-inovaaexaeto-activity-7344831966044684288-Zt5A',
  },
  {
    title: { pt: 'Agentes de IA no Bitrix24 com o GPT Maker', en: 'AI Agents in Bitrix24 with GPT Maker' },
    description: {
      pt: 'Primeiros passos para implementar um agente de IA e como ele pode transformar seu atendimento, trazendo mais agilidade, personalização e eficiência para sua empresa.',
      en: 'First steps to implementing an AI agent and how it can transform your customer service, bringing more agility, personalization and efficiency to your business.',
    },
    image: '/img/ia-bitrix.webp',
    date: { pt: 'Outubro/2025', en: 'October/2025' },
    location: 'YouTube - CRMThink',
    href: 'https://youtu.be/c1bZDD302M4?si=Qruf2STL7ec6EyEO',
  },
  {
    title: { pt: 'Hackathon Detran Alagoas 2025 ', en: 'Hackathon Detran Alagoas 2025' },
    description: {
      pt: 'Sistema integrado que centraliza, organiza e transforma dados e informações de diversas fontes em insights, análises preditivas e alertas automáticos',
      en: 'Integrated system that centralizes, organizes and transforms data and information from multiple sources into insights, predictive analytics and automatic alerts',
    },
    image: '/img/detran.webp',
    date: { pt: 'Junho/2025', en: 'June/2025' },
    location: 'Espaço Armazém, Maceió/AL',
    href: 'https://www.linkedin.com/posts/nadsoncosta_inovaaexaeto-detran-hackathon-activity-7336364942578569217-Cirt?',
  },
]

export const FOOTER_DATA = {
  fullName: 'Nadson A S Costa',
}
