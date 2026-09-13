export interface MethodPhase {
  number: string;
  id: string;
  name: { pt: string; en: string };
  whatHappens: { pt: string; en: string };
  whyItMatters: { pt: string; en: string };
  result: { pt: string; en: string };
  technicalDetails: { pt: string[]; en: string[] };
}

export const METHOD_PHASES: MethodPhase[] = [
  {
    number: "01",
    id: "diagnostico",
    name: {
      pt: "Diagnóstico",
      en: "Diagnosis",
    },
    whatHappens: {
      pt: "Realizamos uma visita técnica e inspeção minuciosa no local da instalação. Avaliamos a infraestrutura física existente, medições de grandezas elétricas, análise de cargas, levantamento de cabeamento, verificação de rotas e mapeamento completo das necessidades operacionais.",
      en: "We conduct an in-depth on-site technical inspection. We measure physical parameters, calculate electrical loads, inspect existing wiring and routing, and document every operational and spatial requirement.",
    },
    whyItMatters: {
      pt: "Evita suposições incorretas que geram retrabalho, subdimensionamento de componentes ou sobrecustos desnecessários. Um diagnóstico rigoroso garante que a solução seja projetada sobre fatos técnicos concretos.",
      en: "Eliminates inaccurate assumptions that lead to rework, undersized hardware, or budget overruns. Rigorous technical diagnostics ensure the solution is built on factual engineering data.",
    },
    result: {
      pt: "Relatório de Diagnóstico Técnico com levantamento de dados, fotos técnicas e matriz de requisitos do cliente.",
      en: "Comprehensive Technical Assessment Report with measured field data, schematics, and client requirements matrix.",
    },
    technicalDetails: {
      pt: ["Medição termográfica e de isolamento", "Cálculo de demanda e fator de carga", "Inspeção de conformidade e segurança"],
      en: ["Thermographic & insulation resistance measurements", "Peak load and power factor calculation", "Safety and compliance standards check"],
    },
  },
  {
    number: "02",
    id: "analise",
    name: {
      pt: "Análise",
      en: "Analysis",
    },
    whatHappens: {
      pt: "Os nossos engenheiros e especialistas processam os dados recolhidos no diagnóstico. Realizamos simulações de engenharia, dimensionamento de potências, cálculos de queda de tensão, seleção de componentes compatíveis e estudo de viabilidade técnica.",
      en: "Our engineers analyze the diagnostic data, running engineering calculations, electrical voltage drop simulations, component compatibility checks, and structural feasibility studies.",
    },
    whyItMatters: {
      pt: "Garante a correta escolha dos equipamentos de acordo com as normas técnicas internacionais, prevenindo sobreaquecimentos, perdas energéticas ou incompatibilidades entre dispositivos.",
      en: "Guarantees that every piece of hardware is accurately matched to technical standards, preventing overheating, energy losses, or communication protocol mismatches.",
    },
    result: {
      pt: "Memória descritiva de cálculo e especificação da lista técnica de materiais (BOM).",
      en: "Technical Calculation Notes and definitive Bill of Materials (BOM) specification.",
    },
    technicalDetails: {
      pt: ["Dimensionamento de barramentos e cabos", "Curvas de proteção e coordenação seletiva", "Análise de protocolos de comunicação"],
      en: ["Busbar and conductor gauge calculations", "Circuit breaker trip curves & selective coordination", "Communication protocol interoperability review"],
    },
  },
  {
    number: "03",
    id: "projecto",
    name: {
      pt: "Projecto",
      en: "Engineering Design",
    },
    whatHappens: {
      pt: "Elaboramos o projeto de engenharia executivo completo: esquemas elétricos funcionais e unifilares, diagramas de ligação de PLC/sensores, arquitetura de rede, topologia de automação e cronograma físico de implementação.",
      en: "We produce the complete executive engineering blueprints: single-line wiring diagrams, PLC/sensor I/O schematics, network topology maps, and the physical implementation timeline.",
    },
    whyItMatters: {
      pt: "Fornece um mapa detalhado e inquestionável para a execução física, facilitando auditorias futuras, manutenções e garantindo que o trabalho siga padrões profissionais padronizados.",
      en: "Provides an unambiguous architectural roadmap for physical installation, facilitating future maintenance and ensuring execution meets strict professional standards.",
    },
    result: {
      pt: "Dossiê do Projeto Executivo com esquemas técnicos, diagramas de ligação e plano de implementação.",
      en: "Executive Engineering Dossier with CAD drawings, connection blueprints, and phase schedule.",
    },
    technicalDetails: {
      pt: ["Esquemas elétricos unifilares e multifilares", "Layout de montagem dos quadros de comando", "Topologia lógica de redes e automação"],
      en: ["Single-line and detailed schematic diagrams", "Control panel assembly layout drawings", "Logical network and automation routing topology"],
    },
  },
  {
    number: "04",
    id: "implementacao",
    name: {
      pt: "Implementação",
      en: "Implementation",
    },
    whatHappens: {
      pt: "Execução física em obra por técnicos qualificados da KUWALA TECH. Realizamos a fixação estrutural, passagem e identificação de cabos com anilhas numeradas, montagem e cablagem de quadros elétricos, fixação de equipamentos e programação dos controladores.",
      en: "Physical execution on-site by qualified KUWALA TECH engineers. We install mounting structures, route and label every conductor with numerical ferrules, assemble switchboards, and program controllers.",
    },
    whyItMatters: {
      pt: "Uma instalação física limpa, organizada e tecnicamente precisa evita mau contacto, curto-circuitos, perdas de sinal e garante durabilidade de décadas às infraestruturas.",
      en: "A neat, organized, and technically disciplined installation prevents loose connections, short circuits, and signal loss, guaranteeing multi-decade operational durability.",
    },
    result: {
      pt: "Infraestrutura física montada, cablada, identificada e com controladores programados.",
      en: "Fully assembled, neatly wired, clearly labeled infrastructure with programmed controllers.",
    },
    technicalDetails: {
      pt: ["Aperto de conexões com torquímetro calibrado", "Identificação indelével de todos os circuitos", "Organização e separação de potência e sinal"],
      en: ["Terminal tightening with calibrated torque tools", "Permanent alphanumeric wire labeling", "Strict physical segregation of power and signal paths"],
    },
  },
  {
    number: "05",
    id: "testes",
    name: {
      pt: "Testes",
      en: "Testing & Validation",
    },
    whatHappens: {
      pt: "Realizamos uma bateria exaustiva de testes: medição de continuidade, testes de isolamento dielétrico, validação de circuitos a seco (sem carga), testes operacionais sob carga real, simulações de falha e disparos de proteção.",
      en: "We execute an exhaustive testing regimen: continuity checks, dielectric insulation resistance, dry-run circuit validation, full-load operational tests, and simulated emergency shutdown drills.",
    },
    whyItMatters: {
      pt: "Comprova documentalmente que todos os sistemas operam exatamente conforme especificado antes de serem colocados em serviço contínuo, assegurando risco zero para pessoas e património.",
      en: "Documentally verifies that all systems operate strictly according to design parameters prior to commissioning, ensuring zero risk to equipment and personnel.",
    },
    result: {
      pt: "Certificado de Comissionamento e Relatório de Testes Funcionais com valores medidos.",
      en: "Formal Commissioning Certificate and Functional Test Report with measured values.",
    },
    technicalDetails: {
      pt: ["Testes de disparo e calibração de disjuntores", "Verificação de tempo de comutação ATS e UPS", "Testes de taxa de erro e débito de rede"],
      en: ["RCD trip time and protective breaker calibration", "ATS and UPS sub-millisecond transfer timing", "Network packet loss and bit error rate testing"],
    },
  },
  {
    number: "06",
    id: "continuidade",
    name: {
      pt: "Continuidade",
      en: "Continuity & Support",
    },
    whatHappens: {
      pt: "Entregamos a documentação 'as-built' (como construído), realizamos o treinamento técnico aos operadores/utilizadores e estabelecemos o plano de manutenção preventiva e suporte de assistência técnica local em Pemba.",
      en: "We deliver full 'as-built' documentation, conduct user/operator technical training, and establish the preventive maintenance schedule backed by rapid local technical support in Pemba.",
    },
    whyItMatters: {
      pt: "Um sistema tecnológico só mantém a sua fiabilidade ao longo dos anos se for operado corretamente e submetido a manutenções preventivas regulares com apoio de equipa técnica local.",
      en: "A technological system only sustains peak reliability over years if operated correctly and maintained preventively by a dedicated, on-call engineering team.",
    },
    result: {
      pt: "Dossiê 'As-Built', manual de utilizador, formação concluída e contrato de assistência ativa.",
      en: "Complete As-Built handover package, operation manual, team training, and support SLA.",
    },
    technicalDetails: {
      pt: ["Plano de manutenção preventiva semestral", "Disponibilidade de assistência técnica em Pemba", "Registo digital de histórico de intervenções"],
      en: ["Semi-annual preventive maintenance checklist", "On-demand local field engineering in Pemba", "Digital lifecycle maintenance history log"],
    },
  },
];
