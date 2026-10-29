import { FileText, Award, Instagram, Linkedin, Github, Mail, FolderGit2, Presentation } from 'lucide-react'

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
    id: 'certifications',
    label: { pt: 'Principais certificações', en: 'Main certifications' },
    description: { pt: 'Certificações e cursos que concluí', en: "Certifications and courses I've completed" },
    icon: <Award size={18} />,
    type: 'internal',
    view: 'certifications',
  },
  {
    id: 'newsletter',
    label: { pt: 'Minha newsletter', en: 'My newsletter' },
    description: {
      pt: 'Artigos sobre engenharia de software e inteligência artificial',
      en: 'Articles about software engineering and artificial intelligence',
    },
    href: 'https://medium.com/@nadson-costa',
    icon: <FileText size={18} />,
    type: 'external',
  },
]

export const PROJECTS = [
  {
    title: { pt: 'Developer Experience', en: 'Developer Experience' },
    description: {
      pt: 'Catálogo de skills para codificação assistida por IA que padroniza boas práticas de engenharia de software e segurança ao longo do SDLC: revisões baseadas em OWASP, geração de testes com verificação de mutação, padrões de arquitetura e integração com sistemas internos. Um CLI em TypeScript gerencia as skills nos assistentes de IA (Claude Code, Cursor etc.).',
      en: 'AI-assisted coding skills catalog that standardizes software engineering and security best practices across the SDLC: OWASP-based reviews, test generation with mutation verification, architecture patterns and internal systems integration. A TypeScript CLI manages the skills across AI assistants (Claude Code, Cursor, etc.).',
    },
    href: 'https://lnkd.in/p/ePyA58Ef',
    tech: 'TypeScript, Markdown, Prompt Engineering',
  },
  {
    title: { pt: 'Sistema de visão computacional para logística', en: 'Computer vision system for logistics' },
    description: {
      pt: 'Inspeção visual em tempo real de caixas numa esteira: um modelo YOLOv8 detecta avarias e dispara alertas automáticos por e-mail e SMS, com rastreamento de modelo via MLflow.',
      en: 'Real-time visual inspection of boxes on a conveyor belt: a YOLOv8 model detects damage and automatically triggers email and SMS alerts, with model tracking via MLflow.',
    },
    href: 'https://github.com/nadson-costa/logistics-ai',
    tech: 'FastAPI, YOLOv8, ONNX Runtime, MLflow, PostgreSQL, Docker',
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
    imagePosition: 'center 65%',
    date: { pt: 'Outubro/2025', en: 'October/2025' },
    location: 'YouTube - CRMThink',
    href: 'https://youtu.be/c1bZDD302M4?si=Qruf2STL7ec6EyEO',
  },
  {
    title: { pt: 'Hackathon UNCISAL 2026', en: 'Hackathon UNCISAL 2026' },
    description: {
      pt: 'Sistema de apoio à decisão clínica em urgência e emergência: monitora sinais vitais na sala de espera com IA e entrega um copiloto de prescrição ancorado em protocolos do Ministério da Saúde. 2º lugar no III Weekathon de Inovação em Saúde e Tecnologia da UNCISAL.',
      en: 'Clinical decision-support system for emergency care: AI-powered vital-sign monitoring in the waiting room and a prescription copilot grounded in Brazilian Ministry of Health protocols. 2nd place at UNCISAL\'s III Weekathon on Health and Technology Innovation.',
    },
    image: '/img/hackathon.webp',
    imagePosition: 'center 20%',
    date: { pt: 'Maio/2026', en: 'May/2026' },
    location: 'UNCISAL, Maceió/AL',
    href: 'https://github.com/nadson-costa/hackathon-uncisal-2026',
  },
]

export const CERTIFICATIONS = [
  {
    title: { pt: 'Claude Certified Developer - Foundations', en: 'Claude Certified Developer - Foundations' },
    issuer: 'Anthropic',
    href: 'https://www.credly.com/badges/f0b8b4b8-d85f-4751-a37a-bd5400bd8d47/public_url',
    image: '/img/claude-certified-developer-foundations.png',
    imageFit: 'contain',
    accentColor: '#CC785C',
  },
  {
    title: {
      pt: 'Capacitação Tecnológica em Visão Computacional e Inteligência Artificial Generativa',
      en: 'Technology Training Program in Computer Vision and Generative Artificial Intelligence',
    },
    issuer: 'Instituto Vertex',
    href: null,
    image: '/img/vertex-logo.jpeg',
    imageFit: 'contain',
    accentColor: '#2DD4BF',
  },
  {
    title: {
      pt: 'AWS Generative AI and AI Agents with Amazon Bedrock',
      en: 'AWS Generative AI and AI Agents with Amazon Bedrock',
    },
    issuer: 'AWS · Coursera',
    href: 'https://www.coursera.org/account/accomplishments/professional-cert/9R031UZZ61KL',
    image: '/img/aws-logo.png',
    imageFit: 'contain',
    accentColor: '#FF9900',
  },
  {
    title: { pt: 'Formação DevOps', en: 'DevOps Training' },
    issuer: 'Rocketseat',
    href: 'https://app.rocketseat.com.br/certificates/82215bd8-7476-4f33-965b-b58aeecb79be',
    image: '/img/rs-logo.jpeg',
    imageFit: 'contain',
    accentColor: '#8257E5',
  },
  {
    title: { pt: 'SQL Advanced Certificate', en: 'SQL Advanced Certificate' },
    issuer: 'HackerRank',
    href: 'https://www.hackerrank.com/certificates/8d85fbfdf74d',
    image: '/img/hr-logo.svg',
    imageFit: 'contain',
    accentColor: '#2EC866',
  },
]

export const FOOTER_DATA = {
  fullName: 'Nadson A S Costa',
}
