export interface FounderMember {
  id: string;
  name: string;
  role: { pt: string; en: string };
  titleTag: { pt: string; en: string };
  bio: { pt: string; en: string };
  extendedBio: { pt: string; en: string };
  competencies: { pt: string[]; en: string[] };
  skills: string[];
  image: string;
  imageAlt: string;
}

export const FOUNDERS: FounderMember[] = [
  {
    id: "chelton-anatona",
    name: "Chelton da Costa Anatona",
    role: {
      pt: "Fundador · Especialista em Eletrónica, Automação Industrial e Robótica",
      en: "Founder · Electronics, Industrial Automation & Robotics Specialist",
    },
    titleTag: {
      pt: "Fundador",
      en: "Founder",
    },
    bio: {
      pt: "Chelton da Costa Anatona é um dos fundadores da KUWALA TECH e destaca-se pela sua formação e interesse técnico nas áreas de eletrónica, automação industrial e robótica.",
      en: "Chelton da Costa Anatona is a co-founder of KUWALA TECH, distinguished by his rigorous technical background in electronics, industrial automation, and robotics.",
    },
    extendedBio: {
      pt: "A sua experiência e capacidade de compreender sistemas tecnológicos de forma integrada permitem-lhe atuar na conceção e desenvolvimento de soluções de automação e controlo, combinando conhecimentos de eletrónica, sistemas de controlo e tecnologias de automação.",
      en: "His expertise and capability to understand end-to-end technological systems enable him to lead the engineering and development of automated control solutions, synthesizing deep knowledge of discrete electronics, control systems, and automation technologies.",
    },
    competencies: {
      pt: [
        "Eletrónica",
        "Automação industrial",
        "Robótica",
        "Sistemas de controlo",
        "Desenvolvimento de soluções automatizadas",
        "Integração de tecnologias",
        "Análise e resolução de problemas técnicos",
      ],
      en: [
        "Electronics",
        "Industrial Automation",
        "Robotics",
        "Control Systems",
        "Automated Solutions Development",
        "Technology Systems Integration",
        "Technical Analysis & Troubleshooting",
      ],
    },
    skills: ["Eletrónica", "Automação Industrial", "Robótica", "PLC", "HMI", "Sistemas de Controlo"],
    image: "/images/founders/chelton-anatona.webp",
    imageAlt: "Fotografia de Chelton da Costa Anatona - Fundador da KUWALA TECH",
  },
  {
    id: "eunildo-paulo",
    name: "Eunildo Paulo",
    role: {
      pt: "Fundador · Técnico de Automação e Instrumentação Industrial",
      en: "Founder · Industrial Automation & Instrumentation Technician",
    },
    titleTag: {
      pt: "Fundador",
      en: "Founder",
    },
    bio: {
      pt: "Eunildo é o fundador e integra a equipa técnica da KUWALA TECH, com formação em Automação e Instrumentação Industrial e competências direcionadas para sistemas de controlo, programação e integração de equipamentos industriais.",
      en: "Eunildo is a co-founder and member of KUWALA TECH's technical engineering team, specialized in Industrial Automation and Instrumentation with expertise in control systems, programming, and industrial equipment integration.",
    },
    extendedBio: {
      pt: "A sua preparação técnica abrange PLC, HMI, electropneumática, instrumentação industrial e programação, permitindo-lhe compreender e trabalhar com diferentes elementos que compõem sistemas automatizados. O seu perfil está particularmente ligado ao desenvolvimento de soluções de automação industrial e residencial, desde a lógica de controlo e programação até à integração entre sensores, actuadores, interfaces e sistemas de supervisão.",
      en: "His technical background spans PLC logic, HMI interfaces, electropneumatics, industrial instrumentation, and programming. His profile focuses on engineering industrial and residential automation systems, from control logic and code development to integrating sensors, actuators, and supervisory SCADA systems.",
    },
    competencies: {
      pt: [
        "Automação e Instrumentação Industrial",
        "Programação de PLC",
        "Sistemas HMI",
        "Instrumentação industrial",
        "Electropneumática",
        "Sistemas de controlo",
        "Programação",
        "Automação industrial",
        "Automação residencial",
        "Integração de sensores e actuadores",
        "Diagnóstico e resolução de problemas técnicos",
      ],
      en: [
        "Industrial Automation & Instrumentation",
        "PLC Programming",
        "HMI Systems Development",
        "Industrial Instrumentation",
        "Electropneumatics",
        "Control Systems",
        "Programming & Software Logic",
        "Industrial Automation",
        "Home & Building Automation",
        "Sensor & Actuator Integration",
        "Technical Diagnostics & Troubleshooting",
      ],
    },
    skills: ["Automação e Instrumentação Industrial", "Programação", "Redes", "PLC", "HMI", "Electropneumática", "Instrumentação", "Automação Residencial"],
    image: "/images/founders/eunildo-paulo.webp",
    imageAlt: "Fotografia de Eunildo Paulo - Fundador da KUWALA TECH",
  },
  {
    id: "jone-jemus",
    name: "Jone Zacarias Jemus",
    role: {
      pt: "Fundador · Técnico de Eletricidade, Redes e Suporte Técnico",
      en: "Founder · Electrical, Networks & Technical Support Technician",
    },
    titleTag: {
      pt: "Fundador e Técnico",
      en: "Founder & Technician",
    },
    bio: {
      pt: "Jone Zacarias Jemus é o fundador e integra a equipa técnica da KUWALA TECH, apresentando competências nas áreas de eletricidade, redes informáticas e suporte técnico.",
      en: "Jone Zacarias Jemus is a co-founder and member of the KUWALA TECH technical team, delivering core expertise in electrical installations, computer networking, and technical support.",
    },
    extendedBio: {
      pt: "O seu perfil combina conhecimentos de instalações e sistemas eléctricos com competências relacionadas com conectividade, redes e assistência técnica, permitindo-lhe atuar em diferentes etapas da implementação e manutenção das soluções desenvolvidas pela empresa. Na KUWALA TECH, contribui para a execução técnica dos projectos, participando na instalação, configuração, diagnóstico e manutenção dos sistemas, com especial atenção à fiabilidade e ao correcto funcionamento das infraestruturas.",
      en: "His profile combines power electrical systems with network connectivity and technical field assistance, enabling him to operate across all phases of implementation and maintenance. At KUWALA TECH, he contributes to execution, configuration, diagnostics, and preventative care with unwavering focus on infrastructure stability.",
    },
    competencies: {
      pt: [
        "Eletricidade",
        "Instalações eléctricas",
        "Redes informáticas",
        "Configuração de redes",
        "Suporte técnico",
        "Manutenção técnica",
        "Diagnóstico de problemas",
        "Instalação e configuração de equipamentos",
        "Infraestrutura tecnológica",
      ],
      en: [
        "Electrical Engineering",
        "Electrical Installations",
        "Computer Networks",
        "Network Configuration",
        "Technical Support",
        "Technical Maintenance",
        "Problem Diagnostics",
        "Equipment Installation & Setup",
        "Technological Infrastructure",
      ],
    },
    skills: ["Electricidade", "Redes", "PLC", "HMI", "Suporte Técnico", "Manutenção Elétrica"],
    image: "/images/founders/jone-jemus.png",
    imageAlt: "Fotografia de Jone Zacarias Jemus - Fundador e Técnico da KUWALA TECH",
  },
];
