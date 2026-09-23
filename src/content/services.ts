export interface ServiceItem {
  id: string;
  slug: string;
  number: string;
  title: { pt: string; en: string };
  shortDescription: { pt: string; en: string };
  fullDescription: { pt: string; en: string };
  tags: { pt: string[]; en: string[] };
  scope: { pt: string[]; en: string[] };
  applications: { pt: string[]; en: string[] };
  components: { pt: string[]; en: string[] };
  benefits: { pt: string[]; en: string[] };
  process: Array<{
    step: string;
    title: { pt: string; en: string };
    description: { pt: string; en: string };
  }>;
  iconName: string;
  color: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: "01",
    slug: "automacao-industrial",
    number: "01",
    title: {
      pt: "Automação Industrial",
      en: "Industrial Automation",
    },
    shortDescription: {
      pt: "Controlo avançado, programação de PLC/HMI, sistemas SCADA, instrumentação e manutenção para processos produtivos contínuos.",
      en: "Advanced control, PLC/HMI programming, SCADA supervisory systems, instrumentation, and maintenance for continuous production lines.",
    },
    fullDescription: {
      pt: "Desenvolvimento e integração de arquiteturas completas de automação industrial. Implementamos lógicas de controlo rigorosas, monitorização em tempo real e automação eletropneumática para otimizar rendimento operacional, segurança de operadores e estabilidade dos processos industriais em Pemba e região.",
      en: "Development and integration of comprehensive industrial automation architectures. We engineer rigorous control logic, real-time telemetry monitoring, and electropneumatic automation to enhance productivity, operator safety, and process stability across industrial facilities.",
    },
    tags: {
      pt: ["PLC", "HMI", "SCADA", "Sensores", "Controlo", "Diagnóstico", "Manutenção"],
      en: ["PLC", "HMI", "SCADA", "Sensors", "Control", "Diagnostics", "Maintenance"],
    },
    scope: {
      pt: [
        "Programação de Controladores Lógicos Programáveis (PLC)",
        "Desenvolvimento de Interfaces Homem-Máquina (HMI) ergonómicas",
        "Implementação de sistemas de supervisão e aquisição de dados (SCADA)",
        "Integração e calibração de instrumentação e sensores industriais",
        "Automação eletropneumática e controlo de atuadores",
        "Diagnóstico avançado de falhas e manutenção preditiva/corretiva",
      ],
      en: [
        "Programmable Logic Controller (PLC) programming and optimization",
        "Human-Machine Interface (HMI) engineering and visualization",
        "Supervisory Control and Data Acquisition (SCADA) integration",
        "Industrial sensor calibration and telemetry telemetry",
        "Electropneumatic actuation and automated motion control",
        "Advanced fault diagnosis, corrective, and predictive maintenance",
      ],
    },
    applications: {
      pt: [
        "Fábricas de transformação e processamento agro-industrial",
        "Sistemas de bombagem e tratamento de água industrial",
        "Linhas de embalagem, transporte e envase automatizadas",
        "Controlo de geradores, compressores e motores de grande porte",
      ],
      en: [
        "Agro-processing and industrial manufacturing plants",
        "Industrial water pumping and treatment facilities",
        "Automated packaging, conveyor, and bottling lines",
        "Control systems for heavy generators, compressors, and motors",
      ],
    },
    components: {
      pt: ["Controladores PLC Industriais", "Painéis HMI Touchscreen", "Sensores de Pressão, Nível, Temperatura e Fluxo", "Inversores de Frequência (VFD)", "Válvulas Solenoide e Cilindros Pneumáticos", "Módulos de Comunicação Industrial (Modbus/EtherNet/IP)"],
      en: ["Industrial PLC Controllers", "Touchscreen HMI Panels", "Pressure, Level, Temp & Flow Sensors", "Variable Frequency Drives (VFD)", "Solenoid Valves & Pneumatic Cylinders", "Industrial Comms Modules (Modbus/EtherNet/IP)"],
    },
    benefits: {
      pt: [
        "Redução de paragens não planeadas e aumento da produtividade",
        "Precisão dimensional e estabilidade de parâmetros no produto final",
        "Rastreabilidade completa de dados operacionais e alarmes",
        "Minimização de riscos ocupacionais e conformidade com normas técnicas",
      ],
      en: [
        "Reduction in unplanned downtime and elevated throughput",
        "Dimensional precision and parameter stability in output",
        "Complete traceability of operational logs and system alarms",
        "Minimization of occupational hazards and full standards compliance",
      ],
    },
    process: [
      {
        step: "01",
        title: { pt: "Levantamento e Requisitos", en: "Survey & Requirements" },
        description: { pt: "Inspeção in-loco das máquinas, sensores existentes e definição dos requisitos de controlo.", en: "On-site assessment of current machinery, instrumentation, and control requirements." },
      },
      {
        step: "02",
        title: { pt: "Arquitetura e Programação", en: "Architecture & Logic" },
        description: { pt: "Desenvolvimento da lógica de PLC, telas HMI e esquemas elétricos detalhados.", en: "Development of PLC logic, intuitive HMI layouts, and detailed wiring schematics." },
      },
      {
        step: "03",
        title: { pt: "Comissionamento e Testes", en: "Commissioning & Tests" },
        description: { pt: "Testes a seco, validação em carga, ajustes de sintonia e formação técnica.", en: "Dry-run testing, load validation, loop tuning, and operator technical handover." },
      },
    ],
    iconName: "Cpu",
    color: "#00D2FF",
  },
  {
    id: "02",
    slug: "instrumentacao-industrial",
    number: "02",
    title: {
      pt: "Instrumentação Industrial",
      en: "Industrial Instrumentation",
    },
    shortDescription: {
      pt: "Medição, calibração, transmissão de variáveis de processo (pressão, temperatura, nível e vazão), malhas de controlo PID e válvulas industriais.",
      en: "Process variable measurement, calibration, transmission (pressure, temperature, level, flow), PID control loops, and industrial valves.",
    },
    fullDescription: {
      pt: "Engenharia, especificação, calibração e manutenção de instrumentação industrial para plantas de processamento, centrais de gás, mineração e indústria de transformação em Pemba e Cabo Delgado. Garantimos medição rigorosa de variáveis operacionais críticas, integração com sistemas PLC/SCADA e sintonia de malhas de controlo para máxima segurança e precisão do processo produtivo.",
      en: "Engineering, specification, calibration, and commissioning of industrial instrumentation for processing plants, gas facilities, mining, and manufacturing across Pemba and Cabo Delgado. We deliver rigorous measurement of critical process variables, seamless PLC/SCADA integration, and precision PID loop tuning for operational stability and process safety.",
    },
    tags: {
      pt: ["Sensores", "Transmissores", "Calibração", "4-20mA", "HART", "Pressão", "Temperatura", "Vazão", "Nível", "Válvulas"],
      en: ["Sensors", "Transmitters", "Calibration", "4-20mA", "HART", "Pressure", "Temperature", "Flow", "Level", "Valves"],
    },
    scope: {
      pt: [
        "Especificação, montagem e comissionamento de transmissores de pressão, temperatura, nível e vazão",
        "Calibração in-situ e em bancada de instrumentos analógicos e digitais com padrões rastreáveis",
        "Configuração e parametrização de malhas de controlo PID e protocolos industriais (4-20mA HART, Foundation Fieldbus, Modbus)",
        "Instalação, teste de estanqueidade e calibração de válvulas de controlo pneumáticas e posicionadores inteligentes",
        "Montagem de linhas de impulso (tubing em aço inoxidável), manifolds, poços termométricos e tomadas de processo",
        "Diagnóstico de avarias em malhas, levantamento de instrumentos de campo e documentação técnica (P&ID e folhas de dados)",
      ],
      en: [
        "Specification, mounting, and commissioning of pressure, temperature, level, and flow transmitters",
        "In-situ and bench calibration of analog and digital process instruments using traceable standards",
        "Configuration and tuning of PID control loops and smart protocols (4-20mA HART, Foundation Fieldbus, Modbus)",
        "Installation, leak testing, and calibration of pneumatic control valves and smart positioners",
        "Fabrication and routing of impulse lines (stainless steel tubing), manifolds, thermowells, and process taps",
        "Troubleshooting, instrument loop testing, and engineering documentation (P&ID diagrams and instrument data sheets)",
      ],
    },
    applications: {
      pt: [
        "Usinas de processamento mineral, centrais de gás e indústria química/pesada",
        "Sistemas de bombagem, tratamento de água e dosagem industrial",
        "Caldeiras industriais, trocadores de calor, fornos e circuitos de vapor",
        "Silos de cereais, parques de reservatórios de combustível e fluidos industriais",
      ],
      en: [
        "Mineral processing plants, natural gas facilities, and chemical/heavy industry",
        "Water pumping stations, municipal treatment facilities, and industrial dosing systems",
        "Industrial boilers, heat exchangers, furnaces, and steam generation loops",
        "Grain storage silos, fuel storage tank farms, and industrial fluid reservoirs",
      ],
    },
    components: {
      pt: [
        "Transmissores de Pressão e Pressão Diferencial (HART / 4-20mA)",
        "Sensores de Temperatura (PT100 RTD e Termopares com Transmissores de Cabeçote)",
        "Medidores de Vazão/Caudal (Eletromagnéticos, Vórtice, Ultrassónicos e Turbina)",
        "Transmissores de Nível por Radar de Onda Guiada, Ultrassom e Hidrostáticos",
        "Válvulas de Controlo Pneumáticas com Posicionadores Digitais Inteligentes",
        "Calibradores de Processo Multifunções e Linhas de Tubing em Inox 316",
      ],
      en: [
        "Pressure & Differential Pressure Transmitters (HART / 4-20mA)",
        "Temperature Sensors (PT100 RTD & Thermocouples with Head Transmitters)",
        "Flow Meters (Electromagnetic, Vortex, Ultrasonic, and Turbine)",
        "Level Transmitters (Guided Wave Radar, Ultrasonic, and Hydrostatic)",
        "Pneumatic Control Valves with Smart Digital Valve Positioners",
        "Multifunction Process Loop Calibrators & 316 Stainless Steel Tubing Lines",
      ],
    },
    benefits: {
      pt: [
        "Precisão milimétrica no controlo de variáveis críticas, eliminando desperdício e refugo de matérias-primas",
        "Proteção de ativos de alto valor e salvaguarda operacional através de alarmes e intertravamentos de segurança",
        "Conformidade metrológica auditável com certificados de calibração emitidos in-loco",
        "Redução drástica de tempo de paragem de produção com diagnóstico técnico ágil e equipa presencial em Pemba",
      ],
      en: [
        "Millimetric precision in critical process variables, minimizing raw material waste and scrap",
        "High-value asset protection and operational fail-safe through interlocked alarms",
        "Auditable metrological compliance with on-site issued calibration certificates",
        "Drastic reduction in production downtime with rapid technical diagnostics and local Pemba presence",
      ],
    },
    process: [
      {
        step: "01",
        title: { pt: "Inspeção e Mapeamento de Malhas", en: "Inspection & Loop Mapping" },
        description: { pt: "Levantamento in-loco de diagramas P&ID, tomadas de processo, condições ambientais e compatibilidade química.", en: "On-site assessment of P&ID schematics, process tap connections, ambient conditions, and chemical compatibility." },
      },
      {
        step: "02",
        title: { pt: "Montagem, Tubing e Calibração", en: "Mounting, Tubing & Calibration" },
        description: { pt: "Fixação de suportes, linhas de tubing em aço inox 316, ligações elétricas e calibração com calibrador de padrão rastreável.", en: "Support bracket fabrication, 316 stainless tubing routing, signal wiring, and traceable standard calibration." },
      },
      {
        step: "03",
        title: { pt: "Comissionamento e Folhas de Dados", en: "Commissioning & Data Sheets" },
        description: { pt: "Testes operacionais em carga, sintonia fina de malha e entrega das folhas de especificação técnica e certificados.", en: "Live process load testing, fine loop tuning, and delivery of technical instrument sheets and calibration records." },
      },
    ],
    iconName: "Gauge",
    color: "#06B6D4",
  },
  {
    id: "03",
    slug: "automacao-residencial",
    number: "03",
    title: {
      pt: "Automação Residencial",
      en: "Home Automation",
    },
    shortDescription: {
      pt: "Gestão inteligente de iluminação, controlo de acessos, cortinas motorizadas, sensores e interfaces unificadas para conforto e segurança.",
      en: "Intelligent lighting management, access control, motorized curtains, environmental sensors, and centralized control interfaces.",
    },
    fullDescription: {
      pt: "Transformamos residências e condomínios em ambientes inteligentes, confortáveis e energeticamente eficientes. Concebemos sistemas integrados com controlo centralizado via ecrãs dedicados, teclados inteligentes e automatismos programados que respondem à presença, horário e luminosidade natural.",
      en: "Transforming residences and villas into smart, comfortable, and energy-efficient living spaces. We design integrated smart ecosystems with centralized control via dedicated touch interfaces, intelligent keypads, and automated scenes responsive to presence, schedule, and ambient light.",
    },
    tags: {
      pt: ["Iluminação", "Acessos", "Cortinas", "Sensores", "Interfaces de controlo"],
      en: ["Lighting", "Access Control", "Motorized Blinds", "Sensors", "Control Interfaces"],
    },
    scope: {
      pt: [
        "Circuitos de iluminação inteligente com regulação de intensidade (dimming)",
        "Controlo motorizado de cortinas, persianas e portões automáticos",
        "Gestão de climatização e eficiência térmica",
        "Sistemas integrados de controlo de acessos por biometria ou RFID",
        "Sensores de presença, luminosidade, fuga de água e fumo",
        "Painéis de parede táteis e integração em rede local segura",
      ],
      en: [
        "Smart lighting circuits with precision dimming and scene scheduling",
        "Motorized control of curtains, blinds, and automatic gates",
        "HVAC climate management and thermal efficiency optimization",
        "Integrated access control via biometric or RFID interfaces",
        "Presence, daylight, water leak, and environmental safety sensors",
        "Dedicated in-wall touch panels and secure local network integration",
      ],
    },
    applications: {
      pt: [
        "Moradias particulares e apartamentos de alto padrão",
        "Condomínios residenciais fechados",
        "Casas de hóspedes e alojamentos turísticos",
        "Espaços executivos residenciais",
      ],
      en: [
        "Private residences and premium residential estates",
        "Gated residential communities and villas",
        "Guest houses, lodges, and boutique hospitality units",
        "Executive private home workspaces",
      ],
    },
    components: {
      pt: ["Atuadores e Dimmers Modulares", "Teclados de Parede Inteligentes", "Motores de Estores e Cortinas", "Sensores de Presença Multi-zona", "Fechaduras Eletrónicas Biométricas", "Controlador Central de Automação"],
      en: ["Modular Smart Actuators & Dimmers", "Smart Wall Keypads", "Curtain & Blind Motors", "Multi-zone Presence Sensors", "Biometric Electronic Locks", "Central Automation Gateway Controller"],
    },
    benefits: {
      pt: [
        "Conforto e comodidade diária sem necessidade de múltiplos comandos",
        "Poupança real no consumo de energia elétrica",
        "Segurança ativa com cenários de simulação de presença",
        "Valorização patrimonial imediata do imóvel",
      ],
      en: [
        "Effortless comfort and convenience with unified controls",
        "Measurable reduction in household electrical energy consumption",
        "Active security through automated presence-simulation routines",
        "Immediate asset valuation enhancement for the property",
      ],
    },
    process: [
      {
        step: "01",
        title: { pt: "Mapeamento dos Ambientes", en: "Spatial & Lifestyle Assessment" },
        description: { pt: "Levantamento das rotinas, circuitos de iluminação e pontos de motorização desejados.", en: "Evaluation of living routines, lighting circuits, and motorized actuation points." },
      },
      {
        step: "02",
        title: { pt: "Dimensionamento e Infraestrutura", en: "Infrastructure Sizing" },
        description: { pt: "Passagem de cablagem de sinal e instalação dos módulos de automação no quadro.", en: "Routing structured signal cables and mounting DIN-rail control modules." },
      },
      {
        step: "03",
        title: { pt: "Programação de Cenários", en: "Scene Configuration" },
        description: { pt: "Configuração dos cenários de iluminação, horários e treino da família.", en: "Fine-tuning custom lighting scenes, schedules, and resident walkthrough." },
      },
    ],
    iconName: "Home",
    color: "#F59E0B",
  },
  {
    id: "04",
    slug: "energia-solar",
    number: "04",
    title: {
      pt: "Energia Solar",
      en: "Solar Energy",
    },
    shortDescription: {
      pt: "Dimensionamento rigoroso, instalação certificada, manutenção e sistemas fotovoltaicos on-grid, off-grid e híbridos.",
      en: "Rigorous system sizing, certified installation, maintenance, and turnkey on-grid, off-grid, and hybrid solar PV systems.",
    },
    fullDescription: {
      pt: "Projetamos e executamos sistemas fotovoltaicos resilientes adaptados ao clima e à irradiação solar de Pemba e Cabo Delgado. Seja para garantir autonomia total face a falhas da rede pública ou para reduzir custos com faturação elétrica, dimensionamos baterias, inversores e módulos solares com rigor de engenharia.",
      en: "Engineering and installing resilient solar photovoltaic systems tailored to the high solar irradiance and coastal climate of Pemba and Cabo Delgado. Whether for complete off-grid autonomy during grid outages or reducing tariff expenses, we engineer panels, inverters, and battery banks with precision.",
    },
    tags: {
      pt: ["Dimensionamento", "Instalação", "Manutenção", "Sistemas fotovoltaicos"],
      en: ["Sizing", "Installation", "Maintenance", "Photovoltaic Systems"],
    },
    scope: {
      pt: [
        "Estudo de carga, perfil de consumo e dimensionamento solar preciso",
        "Sistemas solares fotovoltaicos Off-Grid (autónomos com baterias de lítio)",
        "Sistemas solares On-Grid (ligados à rede pública)",
        "Sistemas Híbridos inteligentes com transição automática sem corte (UPS solar)",
        "Estruturas de fixação em alumínio/inox resistentes à maresia costeira",
        "Monitorização remota de geração, armazenamento e consumo em tempo real",
      ],
      en: [
        "Detailed load profile audit and precise solar array sizing calculations",
        "Off-Grid solar systems with high-cycle Lithium (LiFePO4) storage banks",
        "Grid-tied (On-Grid) solar systems for direct consumption optimization",
        "Intelligent Hybrid setups with zero-transfer time UPS backup capability",
        "Marine-grade aluminum/stainless steel racking suited for coastal air",
        "Real-time telemetry of PV generation, battery status, and load trends",
      ],
    },
    applications: {
      pt: [
        "Residências particulares com necessidade de energia ininterrupta",
        "Empresas, escritórios e armazéns com custos elétricos elevados",
        "Instalações remotas, postos de saúde e furos de água em áreas rurais",
        "Estações de telecomunicações e infraestruturas críticas",
      ],
      en: [
        "Private residences requiring 24/7 uninterruptible power supply",
        "Commercial buildings, offices, and logistics hubs cutting OPEX",
        "Remote rural sites, health posts, and borehole water pump systems",
        "Telecom towers and critical infrastructure operations",
      ],
    },
    components: {
      pt: ["Painéis Solares Monocristalinos Tier-1", "Inversores Solares Híbridos / MPPT", "Bancos de Baterias de Lítio LiFePO4", "Proteções DC e AC (Fusíveis, DPS, Disjuntores)", "Estruturas de Suporte Anti-corrosão", "Sistemas de Monitorização Wi-Fi/GSM"],
      en: ["Tier-1 Monocrystalline Solar Panels", "Hybrid Inverters with High-Efficiency MPPT", "LiFePO4 Lithium Battery Storage Packs", "Complete DC & AC Surge & Breaker Protection", "Corrosion-Resistant Mounting Racks", "Wi-Fi/GSM Telemetry Modems"],
    },
    benefits: {
      pt: [
        "Autonomia energética fiável mesmo durante cortes prolongados da rede",
        "Redução imediata e drástica da fatura de eletricidade",
        "Energia limpa, sustentável e silenciosa (sem ruído nem fumo de gerador)",
        "Vida útil superior a 25 anos com manutenção simples",
      ],
      en: [
        "Reliable energy continuity during grid instability or blackouts",
        "Dramatic and immediate reduction in utility electricity expenditure",
        "Clean, green, and silent power (eliminating generator fumes and noise)",
        "25+ year lifespan with minimal ongoing maintenance",
      ],
    },
    process: [
      {
        step: "01",
        title: { pt: "Auditoria Energética", en: "Energy Consumption Audit" },
        description: { pt: "Cálculo detalhado da potência de pico e energia diária consumida pelos equipamentos.", en: "Measurement of peak kilowatt demand and daily kilowatt-hour load profile." },
      },
      {
        step: "02",
        title: { pt: "Projecto de Engenharia", en: "Engineering Sizing" },
        description: { pt: "Dimensionamento dos painéis, ângulo de inclinação, cabos DC e capacidade das baterias.", en: "Simulation of solar array sizing, tilt orientation, DC cabling, and battery capacity." },
      },
      {
        step: "03",
        title: { pt: "Instalação e Arranque", en: "Installation & Commissioning" },
        description: { pt: "Montagem física, fixação segura, testes elétricos de isolamento e ativação.", en: "Secure structural mounting, electrical insulation testing, and live startup." },
      },
    ],
    iconName: "Sun",
    color: "#FFB703",
  },
  {
    id: "05",
    slug: "instalacoes-electricas",
    number: "05",
    title: {
      pt: "Instalações Eléctricas",
      en: "Electrical Installations",
    },
    shortDescription: {
      pt: "Instalações de baixa e média tensão para setores residencial, comercial e industrial, montagem de quadros e manutenção.",
      en: "Low and medium voltage electrical installations for residential, commercial, and industrial sectors, switchgear, and maintenance.",
    },
    fullDescription: {
      pt: "Projetamos, executamos e certificamos instalações elétricas seguras e em conformidade com as normas técnicas internacionais. Desde o dimensionamento e montagem de quadros elétricos de distribuição até ao balanceamento de fases, aterramento e proteção contra descargas atmosféricas.",
      en: "We design, execute, and inspect safe electrical infrastructure compliant with rigorous technical standards. From sizing and assembling power distribution switchboards to phase balancing, grounding grids, and surge protection systems.",
    },
    tags: {
      pt: ["Residenciais", "Comerciais", "Industriais", "Quadros eléctricos", "Manutenção"],
      en: ["Residential", "Commercial", "Industrial", "Switchboards", "Maintenance"],
    },
    scope: {
      pt: [
        "Instalações elétricas em edifícios residenciais, escritórios e indústrias",
        "Dimensionamento, montagem e cablagem de Quadros de Distribuição e Comando",
        "Sistemas de Aterramento e Elétrodos de Terra com medição ôhmica",
        "Instalação de Sistemas de Proteção contra Sobretensões (DPS) e Diferenciais",
        "Sistemas de Transferência Automática de Rede/Gerador (ATS)",
        "Inspeção termográfica, correção de fator de potência e balanceamento de fases",
      ],
      en: [
        "Electrical wiring and infrastructure for residential, commercial, and industrial sites",
        "Assembly, sizing, and wiring of Main & Sub-Distribution Switchboards",
        "Earth grounding systems and earthing resistance ohmic certification",
        "Surge Protective Devices (SPD) and Residual Current Breaker implementation",
        "Automatic Transfer Switches (ATS) for seamless grid/generator changeover",
        "Thermal infrared imaging, power factor correction, and phase balancing",
      ],
    },
    applications: {
      pt: [
        "Construções novas e remodelações completas de instalações antigas",
        "Complexos comerciais, supermercados e hotéis em Pemba",
        "Instalações fabris, oficinas e centros de dados",
        "Quadros de transferência e apoio a geradores a gasóleo",
      ],
      en: [
        "New building construction and full electrical retrofits of legacy properties",
        "Commercial complexes, supermarkets, and hospitality venues in Pemba",
        "Industrial plants, technical workshops, and server room facilities",
        "Generator changeover panels and electrical distribution hubs",
      ],
    },
    components: {
      pt: ["Disjuntores Termomagnéticos e Diferenciais", "Quadros Metálicos e Barramentos de Cobre", "Cabos de Potência com Isolamento Antichama", "Contactores e Relés de Sobrecarga", "Sistemas ATS de Transferência Automática", "Pára-raios e Elétrodos de Terra"],
      en: ["Circuit Breakers & RCD Protection Units", "Industrial Metallic Enclosures & Copper Busbars", "Flame-Retardant Low Voltage Power Cables", "Contactors, Overload Relays & Timers", "Automatic Transfer Switches (ATS)", "Lightning Protection Rods & Grounding Rods"],
    },
    benefits: {
      pt: [
        "Segurança absoluta contra incêndios de origem elétrica e curto-circuitos",
        "Conformidade rigorosa com normas técnicas de segurança elétrica",
        "Distribuição uniforme de cargas evitando quedas de tensão",
        "Facilidade de manutenção futura através de quadros devidamente identificados",
      ],
      en: [
        "Absolute safety against electrical fire risks and short circuits",
        "Strict compliance with national and international electrical codes",
        "Balanced load distribution eliminating voltage drops and flickering",
        "Effortless maintenance enabled by systematically labeled panels",
      ],
    },
    process: [
      {
        step: "01",
        title: { pt: "Cálculo de Cargas", en: "Load Calculations" },
        description: { pt: "Dimensionamento dos calibres de cabos, disjuntores e capacidade do quadro geral.", en: "Sizing cable gauges, protective breakers, and main distribution panel capacity." },
      },
      {
        step: "02",
        title: { pt: "Passagem e Montagem", en: "Conduit & Panel Assembly" },
        description: { pt: "Instalação de tubagens, passagem de condutores e montagem do quadro de comando.", en: "Conduit routing, conductor pulling, and structured switchboard wiring." },
      },
      {
        step: "03",
        title: { pt: "Medições e Entrega", en: "Testing & Handover" },
        description: { pt: "Medição de resistência de terra, teste de disparo diferencial e rotulagem técnica.", en: "Earth resistance measurement, breaker trip tests, and complete circuit labeling." },
      },
    ],
    iconName: "Zap",
    color: "#00D2FF",
  },
  {
    id: "06",
    slug: "redes-informaticas",
    number: "06",
    title: {
      pt: "Redes Informáticas",
      en: "Computer Networks",
    },
    shortDescription: {
      pt: "Cablagem estruturada Cat6/Cat6A/Fibra, configuração de routers/switches, Wi-Fi empresarial e redes corporativas robustas.",
      en: "Cat6/Cat6A/Fiber structured cabling, managed switches/routers, enterprise Wi-Fi, and resilient corporate networks.",
    },
    fullDescription: {
      pt: "Implementação de infraestruturas de telecomunicações e dados de alta fiabilidade. Projetamos redes cabeadas e sem fios estruturadas para suportar tráfego corporativo intenso, chamadas VoIP, sistemas de segurança e conectividade estável para múltiplos utilizadores em escritórios e residências.",
      en: "Implementation of high-reliability data and telecommunications infrastructure. We design wired and wireless networks engineered to handle heavy traffic, VoIP telephony, security systems, and high-throughput connectivity for multiple concurrent users.",
    },
    tags: {
      pt: ["Redes residenciais", "Redes empresariais", "Cablagem estruturada", "Configuração", "Manutenção"],
      en: ["Residential Networks", "Enterprise Networks", "Structured Cabling", "Configuration", "Maintenance"],
    },
    scope: {
      pt: [
        "Projecto e instalação de Cablagem Estruturada (Cat6, Cat6A e Fibra Óptica)",
        "Montagem e organização de Racks e Patch Panels com identificação técnica",
        "Implementação de Redes Wi-Fi Corporativas com roaming transparente (Mesh/Access Points)",
        "Configuração de Routers, Firewalls, VLANs e Gestão de Largura de Banda",
        "Interligação segura entre escritórios via VPN",
        "Testes de certificação de cablagem e diagnóstico de perda de pacotes",
      ],
      en: [
        "Design and deployment of Structured Cabling (Cat6, Cat6A, and Fiber Optics)",
        "Server rack assembly, cable management, and certified patch panel termination",
        "Enterprise Wi-Fi systems with seamless zero-handoff roaming access points",
        "Managed router, firewall, VLAN segmentation, and bandwidth QoS management",
        "Secure point-to-point and site-to-site VPN interconnections",
        "Cable certification testing, attenuation analysis, and packet loss diagnostics",
      ],
    },
    applications: {
      pt: [
        "Escritórios de empresas, delegações e espaços corporativos",
        "Hotéis, resorts e pousadas com cobertura Wi-Fi em todo o complexo",
        "Armazéns logísticos e instalações portuárias",
        "Residências amplas com necessidade de Wi-Fi uniforme em todos os pisos",
      ],
      en: [
        "Corporate offices, organizational branches, and shared co-working spaces",
        "Hotels, resorts, and lodges demanding 100% property-wide Wi-Fi coverage",
        "Logistics warehouses, distribution centers, and port operations",
        "Large residential villas requiring seamless multi-floor wireless coverage",
      ],
    },
    components: {
      pt: ["Racks de Telecomunicações e Patch Panels", "Access Points Empresariais Wi-Fi 6", "Switches Gerenciáveis Gigabit / PoE", "Routers e Firewalls de Borda", "Cabos de Rede UTP/STP 100% Cobre", "Guias de Cabos e Caixas de Piso"],
      en: ["19\" Telecom Racks & 24/48-Port Patch Panels", "Enterprise Wi-Fi 6 Access Points", "Managed Gigabit PoE+ Distribution Switches", "Edge Security Routers & UTM Firewalls", "Pure Solid Copper Cat6/Cat6A Cabling", "Horizontal Cable Managers & Keystone Outlets"],
    },
    benefits: {
      pt: [
        "Conexão estável e veloz sem quebras durante videoconferências ou transferências",
        "Isolamento seguro de rede para convidados e dispositivos de segurança",
        "Alimentação de câmaras e telefones pelo próprio cabo de rede (PoE)",
        "Escalabilidade simples para adição de novos postos de trabalho",
      ],
      en: [
        "Rock-solid, low-latency connectivity with zero drops on calls or transfers",
        "Secure network segmentation separating corporate data, guests, and IoT",
        "Powering IP cameras and VoIP phones directly through network cables (PoE)",
        "Effortless scalability as organization headcount and devices expand",
      ],
    },
    process: [
      {
        step: "01",
        title: { pt: "Mapeamento e Site Survey", en: "Physical Site Survey" },
        description: { pt: "Levantamento das rotas de cablagem e pontos ideais de posicionamento dos Access Points.", en: "RF spectrum scan, route mapping, and strategic access point placement." },
      },
      {
        step: "02",
        title: { pt: "Cablagem e Rack", en: "Cabling & Rack Termination" },
        description: { pt: "Lançamento dos cabos, cravação nos patch panels e organização no bastidor.", en: "Cable pulling, patch panel punching, and cable management in server rack." },
      },
      {
        step: "03",
        title: { pt: "Configuração e Testes", en: "Network Configuration" },
        description: { pt: "Configuração de SSIDs, VLANs, segurança WPA3 e testes de velocidade em cada ponto.", en: "VLAN setup, WPA3 enterprise security, and speed/latency validation tests." },
      },
    ],
    iconName: "Network",
    color: "#00D2FF",
  },
  {
    id: "07",
    slug: "seguranca-electronica",
    number: "07",
    title: {
      pt: "Segurança Electrónica",
      en: "Electronic Security",
    },
    shortDescription: {
      pt: "CCTV IP em alta definição, sistemas de alarme contra intrusão, controlo de acesso biométrico, intercomunicação e detecção de incêndio.",
      en: "HD IP CCTV surveillance, intrusion alarm systems, biometric access control, video intercom, and fire detection systems.",
    },
    fullDescription: {
      pt: "Soluções integradas de proteção física e eletrónica para salvaguardar pessoas, património e ativos empresariais. Implementamos sistemas de videovigilância em ultra-alta definição com visão noturna, alarmes perimetrais inteligentes e controlo de ponto e acesso por biometria ou cartão.",
      en: "Comprehensive electronic and physical asset protection solutions. We deploy high-definition IP video surveillance with infrared night vision, perimeter intrusion alarms, access control gates, and fire alarm detection arrays.",
    },
    tags: {
      pt: ["CCTV", "Alarmes", "Controlo de acesso", "Intercomunicação", "Detecção de incêndio"],
      en: ["CCTV", "Alarms", "Access Control", "Intercom", "Fire Detection"],
    },
    scope: {
      pt: [
        "Circuitos Fechados de Televisão (CCTV IP e analógico HD) com gravação contínua",
        "Sistemas de Alarme de Intrusão com sensores de infravermelho e feixes perimetrais",
        "Controlo de Acesso por Biometria, Reconhecimento Facial, RFID e Teclado",
        "Sistemas de Intercomunicação e Vídeo-Porteiro com abertura remota",
        "Centrais e Sensores de Detecção de Fumo, Temperatura e Incêndio",
        "Configuração de alertas em tempo real e visualização remota no telemóvel",
      ],
      en: [
        "IP CCTV Surveillance with 24/7 NVR storage, smart analytics & night vision",
        "Perimeter Intrusion Alarm systems with dual-tech motion sensors and beams",
        "Biometric, Facial Recognition, RFID card & PIN access control terminals",
        "IP Video Intercom systems with integrated remote door latch unlocking",
        "Addressable Fire, Smoke, and Heat Detection warning alarm panels",
        "Instant mobile app alert notification and secure off-site live monitoring",
      ],
    },
    applications: {
      pt: [
        "Empresas, escritórios e edifícios institucionais",
        "Residências privadas e condomínios fechados",
        "Lojas, armazéns, estaleiros e pátios logísticos",
        "Escolas, clínicas e estabelecimentos de saúde",
      ],
      en: [
        "Corporate facilities, banks, and institutional head offices",
        "Private residences, compounds, and gated residential estates",
        "Commercial retail stores, warehouses, and storage yards",
        "Educational institutions, clinics, and medical centers",
      ],
    },
    components: {
      pt: ["Câmaras IP Dome / Bullet com Visão Noturna", "Gravadores Digitais NVR com Discos Rígidos Vigilância", "Centrais de Alarme e Sirenes de Alta Potência", "Terminais Biométricos e Fechaduras Eletromagnéticas", "Centrais e Detectores Ópticos de Fumo", "Baterias de Backup para Operação Contínua sem Energia"],
      en: ["High-Resolution IP Dome/Bullet Cameras with IR", "Network Video Recorders (NVR) with Surveillance HDDs", "Intrusion Alarm Control Panels & Outdoor Sirens", "Biometric/RFID Terminals & Magnetic Strikes/Maglocks", "Optical Smoke, Gas, and Heat Detection Sensors", "Uninterruptible Power Supply (UPS) Battery Backups"],
    },
    benefits: {
      pt: [
        "Vigilância 24/7 e efeito dissuasor imediato contra intrusões e furtos",
        "Registo inalterável de imagens para auditoria e esclarecimento de incidentes",
        "Controlo rigoroso de quem entra e sai das instalações com histórico de horários",
        "Notificação imediata em caso de alarme ou detecção de anomalia",
      ],
      en: [
        "24/7 visual deterrence and perimeter protection against intrusion",
        "Tamper-proof forensic video evidence archive for incident audits",
        "Strict control over entry points with detailed employee timestamp logs",
        "Instant smartphone notification the exact moment an alarm triggers",
      ],
    },
    process: [
      {
        step: "01",
        title: { pt: "Análise de Riscos e Pontos Cegos", en: "Vulnerability & Coverage Survey" },
        description: { pt: "Identificação dos acessos vulneráveis, ângulos ideais de câmara e tipo de iluminação.", en: "Mapping perimeter vulnerable spots, field of view angles, and lighting conditions." },
      },
      {
        step: "02",
        title: { pt: "Instalação da Infraestrutura", en: "Physical Cabling & Mounting" },
        description: { pt: "Passagem de cabos blindados, montagem de câmaras, sensores e fecho magnético.", en: "Running protected conduits, mounting camera brackets, sensors, and electromagnetic locks." },
      },
      {
        step: "03",
        title: { pt: "Configuração e Treinamento", en: "Configuration & App Setup" },
        description: { pt: "Ajuste fino de foco, gravação por movimento, app no smartphone e instrução do cliente.", en: "Motion detection sensitivity tuning, recording retention rules, and mobile app pairing." },
      },
    ],
    iconName: "ShieldCheck",
    color: "#F59E0B",
  },
  {
    id: "08",
    slug: "desenvolvimento-tecnologico",
    number: "08",
    title: {
      pt: "Desenvolvimento Tecnológico",
      en: "Technology Development",
    },
    shortDescription: {
      pt: "Criação de websites profissionais, sistemas de gestão à medida, aplicações web/mobile e consultoria de transformação digital.",
      en: "Custom web applications, enterprise management software, bespoke websites, and digital transformation engineering.",
    },
    fullDescription: {
      pt: "Desenvolvemos software moderno, rápido e orientado às necessidades operacionais de empresas e instituições. Criamos websites institucionais de alto impacto, portais corporativos, sistemas de gestão de stock, faturação e controlo interno que agilizam processos e eliminam papel e planilhas desorganizadas.",
      en: "We engineer modern, secure, and fast software tailored to the operational demands of enterprises and institutions. From high-impact institutional websites to custom management systems, inventory tracking, and operational portals.",
    },
    tags: {
      pt: ["Websites", "Sistemas de gestão", "Aplicações", "Consultoria"],
      en: ["Websites", "Management Systems", "Applications", "Consulting"],
    },
    scope: {
      pt: [
        "Desenvolvimento de Websites Institucionais modernos, acessíveis e responsivos",
        "Sistemas de Gestão à medida (ERP leve, CRM, Gestão de Stock e Facturação)",
        "Portais corporativos e plataformas de atendimento ao cliente",
        "Integração entre sistemas de hardware/sensores e plataformas web",
        "Optimização técnica para motores de busca (SEO) e alta performance",
        "Consultoria e planeamento de infraestrutura digital para empresas",
      ],
      en: [
        "Modern, accessible, responsive institutional and corporate web platforms",
        "Custom Management Software (Lightweight ERP, CRM, Inventory & Invoicing)",
        "Internal workflow systems and customer ticketing portals",
        "IoT integration connecting industrial/sensor hardware to cloud dashboards",
        "Technical SEO optimization, core web vitals speed tuning, and security audits",
        "Digital transformation consulting and technology roadmap advisory",
      ],
    },
    applications: {
      pt: [
        "Empresas de serviços, comércio e indústria em Moçambique",
        "Instituições que necessitam de presença digital com autoridade técnica",
        "Negócios que precisam de informatizar rotinas de stock e vendas",
        "Organizações que exigem painéis de controlo e relatórios automáticos",
      ],
      en: [
        "Service firms, commerce enterprises, and industrial contractors in Mozambique",
        "Institutions demanding an authoritative and professional digital presence",
        "Businesses transitioning manual paperwork into automated digital platforms",
        "Organizations requiring operational dashboards and automated data reporting",
      ],
    },
    components: {
      pt: ["Next.js / React / TypeScript", "Bases de Dados Relacionais e APIs Seguras", "Design System UI/UX Responsivo", "Certificados de Segurança SSL / HTTPS", "Infraestrutura Cloud e Backups Automatizados", "Painéis de Administração Intuitivos"],
      en: ["Next.js / React / TypeScript Core", "Relational Databases & Type-Safe Secure APIs", "Accessible & Responsive UI/UX Design System", "Strict SSL/TLS Cryptographic Security", "Cloud Deployment Architecture & Automated Backups", "Intuitive Multi-User Admin Dashboards"],
    },
    benefits: {
      pt: [
        "Presença digital de alta credibilidade técnica que atrai e retém clientes",
        "Eliminação de erros manuais e ganho de tempo nas rotinas diárias",
        "Acesso seguro aos dados da empresa a partir de qualquer dispositivo",
        "Código limpo, seguro, documentado e sem dependência de plataformas opacas",
      ],
      en: [
        "Authoritative digital presence establishing immediate brand credibility",
        "Elimination of manual errors and dramatic time savings in operations",
        "Secure anytime-anywhere data access across desktop and mobile devices",
        "Clean, documented, and maintainable codebase engineered to grow",
      ],
    },
    process: [
      {
        step: "01",
        title: { pt: "Especificação e UX", en: "Requirements & UX Spec" },
        description: { pt: "Mapeamento das funcionalidades, fluxos de trabalho e definição de interface.", en: "Feature mapping, user story definition, and interface prototyping." },
      },
      {
        step: "02",
        title: { pt: "Engenharia e Código", en: "Development & Testing" },
        description: { pt: "Programação frontend, backend, base de dados e validações de segurança.", en: "Frontend, backend API, database schema implementation, and automated testing." },
      },
      {
        step: "03",
        title: { pt: "Implementação e Suporte", en: "Deployment & Training" },
        description: { pt: "Colocação em produção com domínio próprio, formação e assistência contínua.", en: "Production server deployment, custom domain setup, and team onboarding." },
      },
    ],
    iconName: "Code2",
    color: "#00D2FF",
  },
  {
    id: "09",
    slug: "manutencao-tecnica",
    number: "09",
    title: {
      pt: "Manutenção Técnica",
      en: "Technical Maintenance",
    },
    shortDescription: {
      pt: "Manutenção preventiva e correctiva, diagnóstico avançado, assistência técnica ágil e continuidade operacional dos seus sistemas.",
      en: "Preventive and corrective maintenance, advanced fault diagnostics, responsive support, and operational continuity for your systems.",
    },
    fullDescription: {
      pt: "Garantimos a fiabilidade e a longevidade dos equipamentos e sistemas instalados. O nosso serviço de assistência técnica actua preventivamente para evitar paragens inesperadas e de emergência para recuperar a operação no menor tempo possível, sempre com critérios técnicos rigorosos.",
      en: "Ensuring maximum operational uptime and longevity for all installed technological and electrical systems. Our technical service operates preventively to prevent unplanned halts and reactively to restore operations promptly with engineering precision.",
    },
    tags: {
      pt: ["Preventiva", "Correctiva", "Diagnóstico", "Assistência", "Continuidade"],
      en: ["Preventive", "Corrective", "Diagnostics", "Support", "Continuity"],
    },
    scope: {
      pt: [
        "Planos de Manutenção Preventiva periódica com relatórios de estado",
        "Intervenção de Manutenção Correctiva e resolução rápida de anomalias",
        "Diagnóstico técnico avançado com instrumentação de precisão",
        "Limpeza técnica, reaperto de conexões e calibração de sensores",
        "Actualização de firmware e reconfiguração de parâmetros de software",
        "Contratos de assistência técnica e continuidade operacional para empresas",
      ],
      en: [
        "Structured Preventive Maintenance routines with detailed health reports",
        "Rapid Corrective Maintenance interventions for unexpected system faults",
        "Advanced technical diagnostics using calibrated precision test instruments",
        "Dust removal, terminal torque checks, and sensor recalibration",
        "Firmware updates, software parameter tuning, and backup restoration",
        "SLA-backed technical support contracts ensuring operational continuity",
      ],
    },
    applications: {
      pt: [
        "Quadros elétricos, sistemas solares e instalações de energia",
        "Linhas e painéis de automação industrial",
        "Infraestruturas de redes e servidores",
        "Sistemas de videovigilância CCTV e alarmes corporativos",
      ],
      en: [
        "Electrical distribution boards, solar inverters, and battery banks",
        "Industrial automation panels and machinery control racks",
        "Network racks, server room cabling, and wireless access points",
        "Corporate CCTV camera networks and security alarm arrays",
      ],
    },
    components: {
      pt: ["Câmaras Termográficas e Multímetros Calibrados", "Analisadores de Qualidade de Energia", "Testadores e Certificadores de Rede", "Peças e Componentes de Substituição Rápida", "Relatórios Técnicos Digitais de Inspeção", "Equipas Técnicas com Ferramentas Especializadas"],
      en: ["Thermal Cameras & Calibrated Digital Multimeters", "Power Quality & Harmonic Analyzers", "Fluke Network Cable Certifiers & TDRs", "Critical OEM Spare Parts & Consumables", "Digital Technical Inspection & Compliance Logs", "Specialized Field Engineering Toolkits"],
    },
    benefits: {
      pt: [
        "Maximização da vida útil de equipamentos caros e componentes sensíveis",
        "Redução substancial de perdas financeiras provocadas por paragens imprevistas",
        "Histórico técnico rastreável de todas as intervenções realizadas",
        "Tranquilidade de contar com técnicos qualificados presentes em Pemba",
      ],
      en: [
        "Maximized operational lifespan of capital equipment and sensitive components",
        "Substantial mitigation of financial losses due to unexpected shutdowns",
        "Full transparent historical log of all maintenance actions and findings",
        "Peace of mind knowing skilled local technical engineers are on-call in Pemba",
      ],
    },
    process: [
      {
        step: "01",
        title: { pt: "Inspeção e Medição", en: "Inspection & Diagnostics" },
        description: { pt: "Registo de parâmetros térmicos, elétricos e testes funcionais dos componentes.", en: "Recording electrical, thermal, and functional health metrics across the system." },
      },
      {
        step: "02",
        title: { pt: "Intervenção Técnica", en: "Technical Intervention" },
        description: { pt: "Ajustes, limpeza com produtos dielétricos, substituição de peças gastas e calibração.", en: "Tightening terminals, dielectric cleaning, worn component replacement, and tuning." },
      },
      {
        step: "03",
        title: { pt: "Relatório de Conformidade", en: "Compliance Report" },
        description: { pt: "Emissão de relatório com recomendações técnicas e próximos passos preventivos.", en: "Issuing formal technical service sheet with actionable preventive advice." },
      },
    ],
    iconName: "Wrench",
    color: "#F59E0B",
  },
];
