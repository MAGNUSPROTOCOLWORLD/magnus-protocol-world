import {
  footerLinks,
  homepage,
  legalCopy,
  manifesto,
  navItems,
  pageCopy,
  principles
} from "@/content/site-content";
import type { CmsContent } from "@/content/cms/types";
import { defaultLocale, type AppLocale } from "@/lib/locale";

const enContent: CmsContent = {
  locale: "en",
  navigation: {
    main: navItems,
    language: {
      enLabel: "EN",
      ptLabel: "PT"
    },
    headerCta: "Partner With Us"
  },
  footer: {
    ...footerLinks,
    quickLinks: navItems
  },
  homepage: {
    ...homepage,
    newsletter: {
      ...homepage.newsletter,
      inputPlaceholder: "Enter your professional email",
      buttonLabel: "Join Updates"
    }
  },
  principles,
  principlesPage: {
    eyebrow: "Magnus Protocol Principles",
    title: "Principles for the Intelligence Era",
    subtitle: "A strategic framework for secure, scalable, and human-centered technology systems at global scale.",
    doctrineTitle: "Operational Doctrine",
    doctrineDescription:
      "Magnus Protocol is built on a clear conviction: advanced technology must increase capability without reducing accountability. These principles define how we design systems, govern innovation, and scale responsibly.",
    manifestoTitle: "Manifesto",
    manifestoSupport:
      "We do not separate technological ambition from operational responsibility. Our standard is intelligent systems that remain secure, governable, and beneficial under real-world complexity.",
    ctas: {
      primary: { label: "Explore the Ecosystem", href: "/ecosystem" },
      secondary: { label: "View Long-Term Vision", href: "/vision" }
    }
  },
  pages: {
    ...pageCopy,
    contact: {
      ...pageCopy.contact,
      form: {
        formTitle: "Inquiry Form",
        fullName: "Full Name",
        organization: "Organization",
        role: "Role",
        email: "Email",
        region: "Region",
        inquiryType: "Inquiry Type",
        message: "Message",
        submit: "Submit Inquiry",
        placeholders: {
          fullName: "Your full name",
          organization: "Organization name",
          role: "Your role",
          email: "name@company.com",
          region: "Region or country",
          message: "Share context, objectives, and timeline."
        }
      },
      cards: {
        generalContactTitle: "General Contact",
        investorTitle: "Investor & Partnership Access",
        investorBody: "Share your strategic intent, operating geography, and collaboration timeline for direct routing.",
        responseTitle: "Response Time",
        responseBody: "Qualified inquiries are typically reviewed within 2 business days."
      }
    }
  },
  manifesto,
  legal: legalCopy
};

const ptContent: CmsContent = {
  ...enContent,
  locale: "pt",
  navigation: {
    main: [
      { label: "Inicio", href: "/pt" },
      { label: "Sobre", href: "/pt/about" },
      { label: "Principios", href: "/pt/principles" },
      { label: "Ecossistema", href: "/pt/ecosystem" },
      { label: "Visao", href: "/pt/vision" },
      { label: "Contato", href: "/pt/contact" }
    ],
    language: {
      enLabel: "EN",
      ptLabel: "PT"
    },
    headerCta: "Fale com a Equipe"
  },
  footer: {
    ...enContent.footer,
    quickLinks: [
      { label: "Inicio", href: "/pt" },
      { label: "Sobre", href: "/pt/about" },
      { label: "Principios", href: "/pt/principles" },
      { label: "Ecossistema", href: "/pt/ecosystem" },
      { label: "Visao", href: "/pt/vision" },
      { label: "Contato", href: "/pt/contact" }
    ],
    legal: [
      { label: "Politica de Privacidade", href: "/pt/privacy-policy" },
      { label: "Termos de Uso", href: "/pt/terms-of-use" },
      { label: "Politica de Cookies", href: "/pt/cookie-policy" }
    ],
    description:
      "Magnus Protocol e um ecossistema global de tecnologia que construi infraestrutura de inteligencia segura e escalavel para impacto institucional de longo prazo.",
    copyright: "(C) 2026 MAGNUS PROTOCOL. Todos os direitos reservados."
  },
  homepage: {
    ...enContent.homepage,
    hero: {
      ...enContent.homepage.hero,
      eyebrow: "Ecossistema Global de Tecnologia",
      title: "Engenharia da Camada de Inteligencia Confiavel para um Mundo em Transformacao.",
      subtitle:
        "Magnus Protocol integra inteligencia avancada, infraestrutura digital e arquitetura de seguranca para operacao institucional com confianca em escala global.",
      primaryCta: { label: "Solicitar Briefing Estrategico", href: "/pt/contact" },
      secondaryCta: { label: "Explorar o Ecossistema", href: "/pt/ecosystem" },
      stats: [
        { label: "Camadas Estrategicas", value: "4" },
        { label: "Principios Centrais", value: "12" },
        { label: "Foco de Implantacao", value: "Global" }
      ]
    },
    mission: {
      title: "Missao",
      copy:
        "Nossa missao e projetar sistemas tecnologicos inteligentes, seguros e globalmente interoperaveis, com rigor institucional e responsabilidade de longo prazo."
    },
    principlesPreview: {
      ...enContent.homepage.principlesPreview,
      title: "Principios que Governam Cada Camada",
      intro:
        "Magnus Protocol e orientado por doutrina operacional, nao por linguagem de tendencia. Estes principios guiam arquitetura, governanca e execucao.",
      cta: { label: "Ver Todos os Principios", href: "/pt/principles" }
    },
    ecosystem: {
      ...enContent.homepage.ecosystem,
      title: "Um Ecossistema Modular para Implantacao Global",
      intro:
        "Nossa arquitetura foi estruturada para evoluir da base de infraestrutura para inteligencia aplicada e integracao institucional."
    },
    why: {
      ...enContent.homepage.why,
      title: "Por Que Magnus Protocol"
    },
    vision: {
      ...enContent.homepage.vision,
      title: "Visao Global",
      copy:
        "A proxima decada sera liderada por organizacoes que alinham inteligencia com responsabilidade. Magnus Protocol constroi os sistemas para tornar esse alinhamento operacional."
    },
    cta: {
      ...enContent.homepage.cta,
      title: "Construa Conosco a Proxima Era da Infraestrutura",
      copy:
        "Colaboramos com investidores, instituicoes e operadores estrategicos comprometidos com tecnologia confiavel em escala relevante.",
      primaryCta: { label: "Iniciar Conversa Estrategica", href: "/pt/contact" },
      secondaryCta: { label: "Acesso a Investidores e Parcerias", href: "/pt/contact" }
    },
    faq: {
      ...enContent.homepage.faq,
      title: "Perguntas Frequentes"
    },
    newsletter: {
      title: "Receba Atualizacoes Estrategicas",
      copy: "Receba atualizacoes periodicas sobre marcos do ecossistema, evolucao de produto e oportunidades de parceria.",
      inputPlaceholder: "Digite seu e-mail profissional",
      buttonLabel: "Receber Atualizacoes"
    }
  },
  principlesPage: {
    ...enContent.principlesPage,
    eyebrow: "Principios Magnus Protocol",
    title: "Principios para a Era da Inteligencia",
    subtitle: "Uma estrutura estrategica para sistemas tecnologicos seguros, escalaveis e orientados ao humano.",
    doctrineTitle: "Doutrina Operacional",
    doctrineDescription:
      "Magnus Protocol parte de uma conviccao clara: tecnologia avancada deve ampliar capacidade sem reduzir accountability. Esses principios orientam design, governanca e escala responsavel.",
    manifestoTitle: "Manifesto",
    manifestoSupport:
      "Nao separamos ambicao tecnologica de responsabilidade operacional. Nosso padrao e construir sistemas inteligentes, seguros, governaveis e confiaveis em condicoes reais.",
    ctas: {
      primary: { label: "Explorar o Ecossistema", href: "/pt/ecosystem" },
      secondary: { label: "Ver Visao de Longo Prazo", href: "/pt/vision" }
    }
  },
  pages: {
    about: {
      ...enContent.pages.about,
      title: "Construido para Definir o Proximo Padrao de Tecnologia Confiavel",
      subtitle:
        "Magnus Protocol e uma iniciativa global que construi infraestrutura digital de nivel institucional para a era da inteligencia.",
      cta: "Conectar com a Equipe"
    },
    ecosystem: {
      ...enContent.pages.ecosystem,
      title: "Um Ecossistema. Multiplas Camadas Estrategicas.",
      subtitle:
        "Magnus Protocol e estruturado como um ecossistema tecnologico modular, evoluindo com necessidades institucionais e escala global.",
      cta: "Discutir Acesso a Produto e Integracao"
    },
    vision: {
      ...enContent.pages.vision,
      title: "Uma Visao de Longo Horizonte para Confianca Digital Global",
      subtitle:
        "Magnus Protocol constroi os sistemas fundamentais para um futuro seguro, inteligente e interoperavel.",
      cta: "Participar da Visao de Longo Prazo"
    },
    contact: {
      ...enContent.pages.contact,
      title: "Inicie uma Conversa Estrategica",
      subtitle: "Para parcerias, investidores, colaboracoes institucionais e imprensa.",
      intro:
        "Compartilhe seus objetivos, contexto operacional e cronograma. Nossa equipe direcionara sua mensagem ao lider estrategico adequado.",
      responseSla: "Respondemos consultas qualificadas em ate 2 dias uteis.",
      inquiryTypes: ["Parceria", "Investidor", "Programa Institucional", "Imprensa", "Geral"],
      form: {
        formTitle: "Formulario de Contato",
        fullName: "Nome Completo",
        organization: "Organizacao",
        role: "Cargo",
        email: "Email",
        region: "Regiao",
        inquiryType: "Tipo de Consulta",
        message: "Mensagem",
        submit: "Enviar Consulta",
        placeholders: {
          fullName: "Seu nome completo",
          organization: "Nome da organizacao",
          role: "Seu cargo",
          email: "nome@empresa.com",
          region: "Regiao ou pais",
          message: "Compartilhe contexto, objetivos e cronograma."
        }
      },
      cards: {
        generalContactTitle: "Contato Geral",
        investorTitle: "Acesso para Investidores e Parcerias",
        investorBody: "Compartilhe intencao estrategica, geografia operacional e cronograma de colaboracao para roteamento direto.",
        responseTitle: "Prazo de Resposta",
        responseBody: "Consultas qualificadas sao avaliadas em ate 2 dias uteis."
      }
    }
  },
  legal: {
    privacy: {
      ...enContent.legal.privacy,
      title: "Politica de Privacidade"
    },
    terms: {
      ...enContent.legal.terms,
      title: "Termos de Uso"
    },
    cookie: {
      ...enContent.legal.cookie,
      title: "Politica de Cookies"
    }
  }
};

const cmsByLocale: Record<AppLocale, CmsContent> = {
  en: enContent,
  pt: ptContent
};

export function getCmsContent(locale: AppLocale = defaultLocale): CmsContent {
  return cmsByLocale[locale] ?? cmsByLocale[defaultLocale];
}
