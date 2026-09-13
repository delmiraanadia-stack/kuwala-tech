export interface ValueItem {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface BrandConfig {
  name: string;
  legalName: string;
  slogan: string;
  tagline: string;
  location: {
    city: string;
    province: string;
    country: string;
    fullText: string;
    googleMapsUrl: string;
  };
  contact: {
    email: string;
    instagram: string;
    instagramUrl: string;
    whatsappNumber: string;
  };
  presentation: {
    pt: string;
    en: string;
  };
  vision: {
    pt: string;
    en: string;
  };
  mission: {
    pt: string;
    en: string;
  };
  pillars: Array<{
    id: string;
    title: { pt: string; en: string };
    description: { pt: string; en: string };
  }>;
  values: Array<{
    id: string;
    number: string;
    title: { pt: string; en: string };
    description: { pt: string; en: string };
  }>;
  neighborhoods: string[];
}

export const BRAND: BrandConfig = {
  name: "KUWALA TECH",
  legalName: "KUWALA TECH",
  slogan: "Iluminando Soluções Inteligentes",
  tagline: "Tecnologia + Engenharia + Energia + Automação + Confiança + Impacto Local",
  location: {
    city: "Pemba",
    province: "Cabo Delgado",
    country: "Moçambique",
    fullText: "Pemba, Cabo Delgado, Moçambique",
    googleMapsUrl: "https://maps.google.com/?q=Pemba,+Cabo+Delgado,+Mozambique",
  },
  contact: {
    email: "kuwalatech.office@gmail.com",
    instagram: "@kuwalatech.official",
    instagramUrl: "https://instagram.com/kuwalatech.official",
    whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "258864744467",
  },
  presentation: {
    pt: "A Kuwala Tech é uma microempresa de base tecnológica, sediada na Cidade de Pemba, concebida para prestar um conjunto integrado de serviços nas áreas de automação industrial, automação residencial, energia solar, instalações elétricas, redes informáticas, segurança eletrónica, desenvolvimento de websites e sistemas informáticos, e manutenção técnica.",
    en: "Kuwala Tech is a technology-based enterprise located in the City of Pemba, established to deliver an integrated suite of engineering services in industrial automation, home automation, solar energy, electrical installations, computer networks, electronic security, website & IT systems development, and technical maintenance.",
  },
  vision: {
    pt: "Ser uma empresa de referência em automação, energia e tecnologia em Pemba, reconhecida pela excelência técnica, fiabilidade das soluções, rapidez de resposta e capacidade de desenvolver sistemas tecnológicos adaptados às necessidades locais.",
    en: "To be a benchmark enterprise in automation, energy, and technology in Pemba, recognized for technical excellence, solution reliability, prompt responsiveness, and the capability to engineer technological systems tailored to local operating contexts.",
  },
  mission: {
    pt: "Desenvolver e implementar soluções técnicas fiáveis, eficientes e acessíveis nas áreas de automação, eletricidade, energia, redes, segurança e tecnologia, contribuindo para a modernização de residências, empresas e instituições através da aplicação prática de engenharia e inovação.",
    en: "To engineer and deploy dependable, efficient, and accessible technical solutions in automation, electrical engineering, solar power, networks, electronic security, and software development, contributing to the modernization of homes, businesses, and institutions through applied engineering and innovation.",
  },
  pillars: [
    {
      id: "tecnologia",
      title: { pt: "Tecnologia", en: "Technology" },
      description: {
        pt: "Adoção de padrões modernos, componentes industriais robustos e arquitetura estruturada para garantir operação contínua e escalabilidade.",
        en: "Adopting modern standards, robust industrial-grade components, and structured architecture to ensure continuous operation and scalability.",
      },
    },
    {
      id: "inovacao",
      title: { pt: "Inovação", en: "Innovation" },
      description: {
        pt: "Desenvolvimento de soluções inteligentes e automatizadas que resolvem desafios complexos com simplicidade técnica e eficiência operacional.",
        en: "Engineering intelligent automated systems that address complex technical challenges with practical simplicity and operational efficiency.",
      },
    },
    {
      id: "impacto-local",
      title: { pt: "Impacto Local", en: "Local Impact" },
      description: {
        pt: "Compreensão profunda das especificidades de infraestrutura, clima e demandas de Pemba e Cabo Delgado, garantindo assistência rápida e manutenção direta.",
        en: "Deep understanding of the local infrastructure, climate, and operational demands in Pemba and Cabo Delgado, guaranteeing rapid on-site support and maintenance.",
      },
    },
  ],
  values: [
    {
      id: "01",
      number: "01",
      title: { pt: "Rigor Técnico", en: "Technical Rigor" },
      description: {
        pt: "Aplicar boas práticas de engenharia, critérios técnicos e normas de segurança em todas as fases de cada projecto.",
        en: "Apply engineering best practices, rigorous technical criteria, and strict safety standards across every project phase.",
      },
    },
    {
      id: "02",
      number: "02",
      title: { pt: "Fiabilidade", en: "Reliability" },
      description: {
        pt: "Desenvolver soluções estáveis, seguras e concebidas para garantir desempenho e continuidade operacional.",
        en: "Build resilient, stable, and secure systems designed for continuous operational availability and long-term durability.",
      },
    },
    {
      id: "03",
      number: "03",
      title: { pt: "Inovação", en: "Innovation" },
      description: {
        pt: "Adoptar tecnologias e métodos modernos para desenvolver soluções mais eficientes, inteligentes e adaptadas às necessidades de cada aplicação.",
        en: "Adopt advanced methods and modern technologies to create smarter, more efficient solutions customized to each application.",
      },
    },
    {
      id: "04",
      number: "04",
      title: { pt: "Integridade", en: "Integrity" },
      description: {
        pt: "Actuar com transparência, responsabilidade e ética profissional nas relações com clientes, parceiros e colaboradores.",
        en: "Operate with transparent communication, responsibility, and professional ethics across all client and partner relationships.",
      },
    },
    {
      id: "05",
      number: "05",
      title: { pt: "Precisão", en: "Precision" },
      description: {
        pt: "Trabalhar com atenção aos detalhes, desde o diagnóstico e dimensionamento até à instalação, programação, configuração e testes.",
        en: "Work with thorough attention to detail, from initial diagnosis and sizing to installation, programming, configuration, and testing.",
      },
    },
    {
      id: "06",
      number: "06",
      title: { pt: "Evolução Técnica", en: "Technical Evolution" },
      description: {
        pt: "Manter uma cultura de aprendizagem contínua, actualizando conhecimentos e competências de acordo com a evolução das tecnologias.",
        en: "Foster a continuous learning culture, continually upgrading knowledge and technical skills in line with engineering developments.",
      },
    },
    {
      id: "07",
      number: "07",
      title: { pt: "Proximidade", en: "Proximity" },
      description: {
        pt: "Compreender a realidade técnica e operacional de cada cliente para desenvolver soluções adequadas ao contexto de Pemba e da região.",
        en: "Understand each client's specific operational realities to engineer solutions suited to the local context of Pemba and the region.",
      },
    },
    {
      id: "08",
      number: "08",
      title: { pt: "Compromisso", en: "Commitment" },
      description: {
        pt: "Assumir responsabilidade pela qualidade do trabalho, pelo cumprimento dos requisitos técnicos e pela satisfação do cliente.",
        en: "Take full responsibility for work quality, meeting technical requirements, and ensuring client operational satisfaction.",
      },
    },
  ],
  neighborhoods: [
    "Alto Gingone",
    "Cariacó",
    "Cimento",
    "Chuíba",
    "Eduardo Mondlane",
    "Ingonane",
    "Josina Machel",
    "Koba",
    "Mahate",
    "Maringanha",
    "Metula",
    "Muaria",
    "Muxára",
    "Napica",
    "Natite",
    "Paquitequete",
    "Wimbe",
    "Outro bairro de Pemba",
  ],
};
