export interface SolutionItem {
  id: string;
  slug: string;
  number: string;
  title: { pt: string; en: string };
  shortDescription: { pt: string; en: string };
  fullDescription: { pt: string; en: string };
  context: { pt: string; en: string };
  problem: { pt: string; en: string };
  technology: { pt: string[]; en: string[] };
  applications: { pt: string[]; en: string[] };
  components: { pt: string[]; en: string[] };
  benefits: { pt: string[]; en: string[] };
  steps: Array<{
    number: string;
    title: { pt: string; en: string };
    description: { pt: string; en: string };
  }>;
  iconName: string;
}

export const SOLUTIONS: SolutionItem[] = [
  {
    id: "01",
    slug: "industria-inteligente",
    number: "01",
    title: {
      pt: "Indústria Inteligente",
      en: "Smart Industry",
    },
    shortDescription: {
      pt: "Integração holística entre automação de linhas de produção, instrumentação de precisão, proteção elétrica e monitorização SCADA.",
      en: "Holistic integration of production line automation, precision telemetry, electrical switchgear protection, and SCADA monitoring.",
    },
    fullDescription: {
      pt: "A solução Indústria Inteligente da KUWALA TECH unifica automação industrial, engenharia elétrica de potência e instrumentação de sensores num único ecossistema coordenado. Projetada para indústrias de transformação, mineração, agro-processamento e manufatura em Cabo Delgado, elimina paragens não planeadas e eleva a eficiência operacional.",
      en: "KUWALA TECH's Smart Industry solution unifies industrial automation, electrical power engineering, and instrumentation telemetry into a single synchronized system. Engineered for manufacturing, mining, and agro-processing in Cabo Delgado, it eliminates unplanned shutdowns and elevates throughput.",
    },
    context: {
      pt: "Em ambientes industriais, processos manuais ou sistemas elétricos isolados causam perdas de matéria-prima, falhas imprevisíveis em motores e risco a operadores.",
      en: "In industrial production, isolated legacy electrical panels and manual intervention result in material waste, unexpected motor breakdowns, and operator safety risks.",
    },
    problem: {
      pt: "Falta de visibilidade em tempo real do estado das máquinas, quedas de tensão que queimam componentes e tempos elevados de resposta em avarias.",
      en: "Lack of real-time machine telemetry, unstable power grid spikes damaging sensitive VFDs, and prolonged troubleshooting intervals during breakdowns.",
    },
    technology: {
      pt: [
        "Controladores PLC industriais com redundância lógica",
        "Redes de barramento industrial Modbus TCP / Profinet",
        "Sistemas SCADA de telemetria e arquivo histórico de alarmes",
        "Quadros de comando com proteção termomagnética e relés inteligentes",
      ],
      en: [
        "Industrial PLCs with deterministic control and logic redundancy",
        "Industrial fieldbus communications (Modbus TCP / Profinet)",
        "SCADA telemetry dashboards with centralized alarm logging",
        "Motor control centers (MCC) with digital protection relays",
      ],
    },
    applications: {
      pt: [
        "Fábricas de processamento de castanha, madeira e pescado em Pemba",
        "Centrais de bombagem e tratamento de água",
        "Instalações de moagem, ensacamento e transporte contínuo",
      ],
      en: [
        "Cashew, timber, and seafood agro-processing plants in Pemba",
        "Industrial water pumping and treatment stations",
        "Continuous milling, bagging, and conveyor operations",
      ],
    },
    components: {
      pt: ["Painéis PLC/HMI com ecrã táctil", "Inversores de frequência (VFD)", "Transmissores de pressão e nível 4-20mA", "Sensores indutivos e ópticos de linha"],
      en: ["Touchscreen PLC/HMI Enclosures", "Variable Frequency Drives (VFD)", "4-20mA Pressure & Level Transmitters", "Optical & Inductive Conveyor Sensors"],
    },
    benefits: {
      pt: [
        "Aumento comprovado da capacidade de produção contínua",
        "Diagnóstico imediato de avarias com indicação exata do componente falho",
        "Proteção integral de motores e equipamentos elétricos contra sobrecargas",
      ],
      en: [
        "Proven increase in continuous daily throughput capacity",
        "Instantaneous fault alerts pointing directly to failing components",
        "Comprehensive motor and equipment protection against electrical surges",
      ],
    },
    steps: [
      {
        number: "01",
        title: { pt: "Levantamento", en: "Survey" },
        description: { pt: "Auditoria detalhada da planta fabril, máquinas existentes e fluxos operacionais.", en: "On-site assessment of industrial machinery, load profiles, and operational flow." },
      },
      {
        number: "02",
        title: { pt: "Selecção", en: "Selection" },
        description: { pt: "Dimensionamento dos controladores, sensores e proteções elétricas adequadas.", en: "Selecting industrial-grade PLCs, sensors, and protective switchgear." },
      },
      {
        number: "03",
        title: { pt: "Instalação", en: "Installation" },
        description: { pt: "Montagem dos quadros elétricos de comando e passagem de cablagem blindada.", en: "Assembling motor control centers and running shielded signal cabling." },
      },
      {
        number: "04",
        title: { pt: "Configuração", en: "Configuration" },
        description: { pt: "Programação de lógicas de controlo no PLC e parametrização dos inversores.", en: "Programming PLC safety loops, PID control, and inverter parameters." },
      },
      {
        number: "05",
        title: { pt: "Integração", en: "Integration" },
        description: { pt: "Comunicação entre sensores, actuadores e telas de visualização HMI/SCADA.", en: "Linking all sensors, actuators, and HMI supervisory dashboards." },
      },
      {
        number: "06",
        title: { pt: "Testes e Continuidade", en: "Testing & Continuity" },
        description: { pt: "Testes sob carga real, formação de operadores e plano de manutenção preventiva.", en: "Full-load stress testing, staff training, and preventive service routines." },
      },
    ],
    iconName: "Factory",
  },
  {
    id: "02",
    slug: "casa-inteligente",
    number: "02",
    title: {
      pt: "Casa Inteligente",
      en: "Smart Home",
    },
    shortDescription: {
      pt: "Integração residencial de alto padrão unindo automação predial, iluminação cénica, controlo de acessos, vigilância e climatização.",
      en: "High-end residential integration unifying home automation, scenic lighting, access control, surveillance, and climate.",
    },
    fullDescription: {
      pt: "A solução Casa Inteligente concebe habitações seguras, elegantes e altamente tecnológicas. Unificamos o controlo de circuitos de iluminação, estores elétricos, ar condicionado, portões e videoporteiro em interfaces táteis intuitivas de parede e gestão segura local.",
      en: "The Smart Home solution delivers comfortable, safe, and technologically advanced living spaces. We consolidate lighting scenes, motorized blinds, HVAC units, automated gates, and video intercoms into intuitive touch interfaces and secure local automation.",
    },
    context: {
      pt: "Habitações modernas possuem múltiplos interruptores dispersos, comandos de ar condicionado perdidos e falta de coordenação entre segurança e iluminação.",
      en: "Modern luxury residences suffer from scattered light switches, misplaced remote controllers, and disconnects between perimeter security and home systems.",
    },
    problem: {
      pt: "Desperdício energético com luzes e ares condicionados ligados em quartos vazios, além de vulnerabilidade nos pontos de acesso residencial.",
      en: "High electricity waste from forgotten lighting and AC units in empty rooms, combined with vulnerable manual entrance points.",
    },
    technology: {
      pt: [
        "Barramento de automação modular de alta fiabilidade",
        "Teclados inteligentes multifunção em acabamento metálico",
        "Sensores de presença combinados com medição de lux",
        "Fechaduras biométricas com leitor de cartão e código PIN de uso temporário",
      ],
      en: [
        "High-reliability modular home automation bus infrastructure",
        "Multifunctional smart keypads with sleek architectural finishes",
        "Dual-technology presence sensors with ambient lux monitoring",
        "Biometric electronic locks with temporary guest PIN access codes",
      ],
    },
    applications: {
      pt: [
        "Vilas residenciais e moradias de alto padrão em Pemba e Wimbe",
        "Apartamentos executivos e condomínios de luxo",
        "Casas de praia com gestão remota de acessos e climatização",
      ],
      en: [
        "Luxury villas and private residences across Pemba and Wimbe beach",
        "Executive apartments and gated residential compounds",
        "Coastal holiday homes requiring remote access and pre-arrival cooling",
      ],
    },
    components: {
      pt: ["Módulos atuadores e dimmers de calha DIN", "Painel tátil central de parede", "Motores tubulares para cortinas", "Videoporteiro IP com câmara HD"],
      en: ["DIN-rail relay actuators and LED dimmers", "Central in-wall touchscreen hub", "Silent tubular curtain & shutter motors", "HD IP Video Intercom station"],
    },
    benefits: {
      pt: [
        "Conforto supremo ao activar cenários complexos (Ex: 'Cinema', 'Sair de Casa', 'Noite') com um só toque",
        "Redução imediata na fatura energética por desativação automática em divisões vazias",
        "Tranquilidade total com notificações instantâneas de acessos e campainha",
      ],
      en: [
        "Supreme daily comfort activating lifestyle scenes ('Cinema', 'Leaving', 'Goodnight') in one touch",
        "Measurable reduction in electric bills through automated occupancy turn-off",
        "Peace of mind with real-time doorbell and entrance activity logs",
      ],
    },
    steps: [
      {
        number: "01",
        title: { pt: "Levantamento", en: "Survey" },
        description: { pt: "Mapeamento dos hábitos dos moradores e circuitos elétricos da moradia.", en: "Assessing resident lifestyle patterns and architectural electrical floor plans." },
      },
      {
        number: "02",
        title: { pt: "Selecção", en: "Selection" },
        description: { pt: "Escolha dos teclados, acabamentos, atuadores e sensores de cada divisão.", en: "Selecting design keypads, actuators, and room sensor placements." },
      },
      {
        number: "03",
        title: { pt: "Instalação", en: "Installation" },
        description: { pt: "Instalação da cablagem dedicada de automação e módulos no quadro elétrico.", en: "Wiring automation bus cables and installing modular switchgear." },
      },
      {
        number: "04",
        title: { pt: "Configuração", en: "Configuration" },
        description: { pt: "Parametrização dos botões, canais de iluminação e temporizadores.", en: "Programming button functions, dimming curves, and automation schedules." },
      },
      {
        number: "05",
        title: { pt: "Integração", en: "Integration" },
        description: { pt: "Ligação integrada com ar condicionado, videoporteiro e cortinas motorizadas.", en: "Bridging HVAC, video intercom, and curtain motors into unified control." },
      },
      {
        number: "06",
        title: { pt: "Testes e Continuidade", en: "Testing & Continuity" },
        description: { pt: "Ajuste de sensibilidade dos sensores e suporte pós-instalação.", en: "Occupancy sensor tuning, family walkthrough, and responsive technical support." },
      },
    ],
    iconName: "Home",
  },
  {
    id: "03",
    slug: "energia-inteligente",
    number: "03",
    title: {
      pt: "Energia Inteligente",
      en: "Smart Energy",
    },
    shortDescription: {
      pt: "Sistemas híbridos solares integrados com baterias de lítio, comutação ATS automática e monitorização precisa do consumo.",
      en: "Hybrid solar PV systems integrated with lithium storage, automated ATS transfer, and precision power analytics.",
    },
    fullDescription: {
      pt: "A solução Energia Inteligente assegura estabilidade absoluta e autonomia energética contínua para empresas e residências em Pemba. Combinamos geração solar fotovoltaica, armazenamento em baterias de lítio de alta vida útil e comutação automática entre rede pública, solar e gerador sem corte de energia.",
      en: "The Smart Energy solution delivers uncompromised energy security and power quality for facilities in Pemba. We combine solar PV generation, long-cycle lithium storage, and seamless automatic transfer switching across grid, solar, and generator sources.",
    },
    context: {
      pt: "As instabilidades da rede elétrica em Pemba e custos crescentes de combustível para geradores ameaçam operações críticas e provocam danos em eletrónica sensível.",
      en: "Frequent grid power fluctuations and rising diesel generator fueling costs threaten critical operations and damage sensitive electronic equipment in Pemba.",
    },
    problem: {
      pt: "Perda de produtividade durante apagões, despesas astronómicas com gasóleo e queima frequente de placas eletrónicas devido a sobretensões.",
      en: "Lost work hours during blackouts, excessive diesel expenditures, and frequent hardware burnout caused by grid voltage surges.",
    },
    technology: {
      pt: [
        "Inversores solares híbridos com tempo de comutação inferior a 10ms (função UPS)",
        "Bancos de baterias de lítio LiFePO4 com mais de 6000 ciclos de vida",
        "Dispositivos de Proteção contra Sobretensões (DPS de Classe I+II)",
        "Telemetria em tempo real com gráfico diário de geração vs consumo",
      ],
      en: [
        "Industrial hybrid inverters with sub-10ms UPS transfer capability",
        "LiFePO4 Lithium storage banks rated for 6000+ deep cycles",
        "Class I+II Surge Protective Devices (SPD) on both AC and DC rails",
        "Real-time cloud & local telemetry reporting generation vs load curves",
      ],
    },
    applications: {
      pt: [
        "Escritórios corporativos, clínicas médicas e bancos que não podem parar",
        "Residências que necessitam de conforto e refrigeração sem interrupção",
        "Centros de dados, servidores e estações de radiocomunicação",
      ],
      en: [
        "Corporate offices, medical clinics, and financial institutions requiring 100% uptime",
        "Private residences requiring uninterrupted cooling and appliances",
        "Server facilities, telecom base stations, and radio repeaters",
      ],
    },
    components: {
      pt: ["Painéis Solares Monocristalinos de Alta Eficiência", "Inversor Híbrido Trifásico / Monofásico", "Baterias LiFePO4 Modulares com BMS inteligente", "Quadro de Proteção e Comutação ATS"],
      en: ["High-Efficiency Monocrystalline PV Modules", "Hybrid Inverter with Smart Grid Intertie", "Modular LiFePO4 Batteries with Intelligent BMS", "Automatic Transfer Switch (ATS) & Surge Panel"],
    },
    benefits: {
      pt: [
        "Zero tempo de paragem: os computadores e luzes nem piscam quando a rede pública falha",
        "Redução de até 85% nos custos com energia elétrica e combustível de gerador",
        "Proteção definitiva de todos os aparelhos contra picos de tensão da rede",
      ],
      en: [
        "Zero downtime: computers and lights operate continuously during grid cuts",
        "Up to 85% reduction in monthly utility bills and diesel generator fuel expenses",
        "Total protection of sensitive electronic equipment against damaging voltage spikes",
      ],
    },
    steps: [
      {
        number: "01",
        title: { pt: "Levantamento", en: "Survey" },
        description: { pt: "Registo contínuo do consumo elétrico e análise da estrutura física do telhado.", en: "Comprehensive energy audit recording peak load, kWh consumption, and roof structural integrity." },
      },
      {
        number: "02",
        title: { pt: "Selecção", en: "Selection" },
        description: { pt: "Dimensionamento dos painéis solares, capacidade das baterias e cablagem DC.", en: "Simulating optimal array capacity, battery storage sizing, and DC cable specs." },
      },
      {
        number: "03",
        title: { pt: "Instalação", en: "Installation" },
        description: { pt: "Fixação das estruturas solares e instalação do banco de baterias em local ventilado.", en: "Structural mounting of solar panels and installing battery bank in ventilated enclosure." },
      },
      {
        number: "04",
        title: { pt: "Configuração", en: "Configuration" },
        description: { pt: "Parametrização do inversor para prioridade solar -> bateria -> rede pública.", en: "Configuring inverter charging curves and priority algorithm (Solar -> Battery -> Grid)." },
      },
      {
        number: "05",
        title: { pt: "Integração", en: "Integration" },
        description: { pt: "Interligação com o quadro geral de distribuição e comutação automática ATS.", en: "Integrating inverter output into main distribution board with automatic ATS interlock." },
      },
      {
        number: "06",
        title: { pt: "Testes e Continuidade", en: "Testing & Continuity" },
        description: { pt: "Teste de corte forçado de rede sob carga máxima e plano de revisão periódica.", en: "Full-load blackout simulation test and scheduled preventive health checks." },
      },
    ],
    iconName: "SunMedium",
  },
  {
    id: "04",
    slug: "empresa-conectada",
    number: "04",
    title: {
      pt: "Empresa Conectada",
      en: "Connected Enterprise",
    },
    shortDescription: {
      pt: "Infraestrutura integral de rede estruturada, Wi-Fi 6 corporativo, segurança de perímetro de dados e software de gestão.",
      en: "End-to-end structured networking, enterprise Wi-Fi 6, edge network security, and tailored business software.",
    },
    fullDescription: {
      pt: "A solução Empresa Conectada constrói a espinha dorsal de telecomunicações, conectividade e sistemas de informação para empresas que necessitam de estabilidade absoluta. Unificamos cablagem estruturada, equipamentos de rede corporativos, segmentação de segurança e sistemas de gestão digital.",
      en: "The Connected Enterprise solution constructs the telecom backbone, connectivity, and IT software architecture for forward-thinking organizations. We unify structured cabling, enterprise networking, firewall segmentation, and custom business platforms.",
    },
    context: {
      pt: "Empresas com redes instáveis sofrem constantes quedas de internet, cabos desorganizados nos bastidores e lentidão no acesso a sistemas internos.",
      en: "Businesses with fragmented networks experience frequent Internet outages, messy server closets, and slow access to business-critical applications.",
    },
    problem: {
      pt: "Perda de produtividade dos funcionários, vulnerabilidade a invasões de rede e incapacidade de comunicar eficientemente entre departamentos.",
      en: "Severe workforce productivity bottlenecks, network security vulnerabilities, and communication breakdowns between departments.",
    },
    technology: {
      pt: [
        "Cablagem estruturada de Cobre Cat6/Cat6A e Fibra Óptica Gigabit",
        "Switches PoE Gerenciáveis de Camada 2/3 com suporte a VLANs dedicadas",
        "Rede Wi-Fi 6 com gestão centralizada e portal de visitantes autenticado",
        "Firewall com filtragem de tráfego, VPN corporativa e proteção contra intrusão",
      ],
      en: [
        "Solid Copper Cat6/Cat6A & Gigabit Fiber Optic structured cabling",
        "Layer 2/3 Managed PoE+ distribution switches with dedicated VLANs",
        "Enterprise Wi-Fi 6 with centralized cloud controller and guest isolation",
        "Edge Firewall appliance with VPN tunneling and intrusion prevention",
      ],
    },
    applications: {
      pt: [
        "Edifícios de escritórios empresariais e sedes corporativas",
        "Bancos, seguradoras e empresas de logística e navegação em Pemba",
        "Hotéis, complexos turísticos e instituições de ensino",
      ],
      en: [
        "Corporate office buildings and commercial headquarters",
        "Financial institutions, insurance agencies, logistics, and port firms in Pemba",
        "Hotels, coastal resorts, and educational institutions",
      ],
    },
    components: {
      pt: ["Bastidores Racks de 19 polegadas com calhas organizadoras", "Access Points Wi-Fi de longo alcance", "Switches Gigabit PoE+", "Roteador Firewall Corporativo"],
      en: ["19-inch Server Racks with Horizontal Wire Organizers", "Long-Range Enterprise Wi-Fi Access Points", "Managed Gigabit PoE+ Switches", "Corporate UTM Firewall Router"],
    },
    benefits: {
      pt: [
        "Conectividade de altíssima velocidade sem quebras em toda a empresa",
        "Isolamento completo de dados confidenciais face à rede de convidados",
        "Redução de custos operacionais através de infraestrutura organizada e documentada",
      ],
      en: [
        "Blazing-fast, ultra-low latency connectivity across all workstations",
        "Complete isolation of confidential internal corporate data from guest networks",
        "Lower long-term IT maintenance costs with clean, documented infrastructure",
      ],
    },
    steps: [
      {
        number: "01",
        title: { pt: "Levantamento", en: "Survey" },
        description: { pt: "Levantamento do número de postos de trabalho, densidade de utilizadores e planta do edifício.", en: "Auditing workstation count, concurrent wireless user density, and floor plans." },
      },
      {
        number: "02",
        title: { pt: "Selecção", en: "Selection" },
        description: { pt: "Dimensionamento dos switches, pontos de acesso Wi-Fi e especificação da cablagem.", en: "Selecting managed switches, PoE budgets, access point counts, and cable specs." },
      },
      {
        number: "03",
        title: { pt: "Instalação", en: "Installation" },
        description: { pt: "Passagem de calhas técnicas, cravação de patch panels e arrumação do bastidor.", en: "Installing structured conduits, terminating patch panels, and rack dressing." },
      },
      {
        number: "04",
        title: { pt: "Configuração", en: "Configuration" },
        description: { pt: "Criação de VLANs (Administração, Operações, CCTV, Convidados) e regras de firewall.", en: "Configuring VLAN segmentation (Corporate, CCTV, Guest) and firewall rules." },
      },
      {
        number: "05",
        title: { pt: "Integração", en: "Integration" },
        description: { pt: "Ligação de impressoras em rede, computadores, servidores e sistemas de videovigilância.", en: "Connecting workstations, network printers, servers, and security cameras." },
      },
      {
        number: "06",
        title: { pt: "Testes e Continuidade", en: "Testing & Continuity" },
        description: { pt: "Certificação de cada tomada de rede, testes de débito Wi-Fi e monitorização de tráfego.", en: "Certifying each network drop, wireless throughput testing, and traffic monitoring." },
      },
    ],
    iconName: "Building2",
  },
  {
    id: "05",
    slug: "seguranca-inteligente",
    number: "05",
    title: {
      pt: "Segurança Inteligente",
      en: "Smart Security",
    },
    shortDescription: {
      pt: "Ecossistema integrado de CFTV analítico, barreiras perimetrais, controlo de acesso biométrico e detecção precoce de incêndio.",
      en: "Integrated ecosystem of AI analytics CCTV, perimeter sensors, biometric access control, and early fire alarm detection.",
    },
    fullDescription: {
      pt: "A solução Segurança Inteligente protege instalações críticas, património e pessoas com tecnologia de ponta. Integramos câmaras IP de alta definição com análise inteligente de vídeo (detecção de humanos e viaturas), alarme perimetral anti-intrusão, controlo biométrico de entradas e sistema central de detecção de incêndio.",
      en: "The Smart Security solution guards critical assets, premises, and personnel with cutting-edge electronics. We integrate smart IP cameras with AI video analytics (human/vehicle classification), perimeter infrared beams, biometric turnstiles/locks, and addressable fire alarm systems.",
    },
    context: {
      pt: "A segurança tradicional baseada apenas em vigilantes humanos ou câmaras analógicas antigas falha em detectar invasões a tempo e gera falsos alarmes constantes.",
      en: "Traditional security relying purely on physical guards or legacy low-res cameras fails to prevent intrusions proactively and suffers from frequent false alerts.",
    },
    problem: {
      pt: "Furtos noturnos, falta de imagens nítidas para identificação facial e ausência de alerta imediato quando ocorre uma tentativa de invasão ou princípio de fogo.",
      en: "Night-time trespassing, blurry unidentifiable camera footage, and zero automated alerting during perimeter breaches or early fire hazards.",
    },
    technology: {
      pt: [
        "Câmaras IP com visão nocturna a cores (ColorVu/Starlight) e IA de detecção de alvos",
        "Gravadores NVR com discos rígidos de gravação contínua 24/7 e encriptação",
        "Barreiras de infravermelho fotoelétricas com imunidade a animais de pequeno porte",
        "Controlo de acessos com leitor de impressões digitais, reconhecimento facial e antipassback",
      ],
      en: [
        "IP Cameras with 24/7 full-color night vision and AI human/vehicle filtering",
        "Industrial NVRs with surveillance-rated storage and encrypted remote access",
        "Photoelectric active infrared perimeter beams with pet-immunity logic",
        "Biometric, facial recognition, and RFID access control with anti-passback rules",
      ],
    },
    applications: {
      pt: [
        "Estaleiros, armazéns de carga e pátios de contentores em Pemba",
        "Sedes de empresas, bancos e instalações industriais",
        "Condomínios residenciais e habitações privadas de alta segurança",
      ],
      en: [
        "Logistics depots, container yards, and construction sites in Pemba",
        "Corporate facilities, financial institutions, and manufacturing plants",
        "Gated residential communities and high-security private estates",
      ],
    },
    components: {
      pt: ["Câmaras IP Dome e Bullet Antivandalismo", "Central de Alarme de Intrusão Híbrida", "Fechaduras Eletromagnéticas de 280kgf com botão de emergência", "Centrais de Detecção de Fumo com Sirenes Estroboscópicas"],
      en: ["Vandal-Resistant IP Dome & Bullet Cameras", "Hybrid Perimeter Intrusion Alarm Hub", "280kgf Electromagnetic Maglocks with Emergency Egress", "Addressable Smoke Detectors with Optical Strobe Sirens"],
    },
    benefits: {
      pt: [
        "Impedimento eficaz de intrusões através de alertas proativos antes da entrada no edifício",
        "Identificação visual nítida de matrículas e rostos mesmo em escuridão total",
        "Registo eletrónico inviolável de todas as entradas e saídas de funcionários e visitantes",
      ],
      en: [
        "Proactive intrusion deterrence before perpetrators breach physical structures",
        "Crystal-clear facial and license plate identification in pitch-black darkness",
        "Tamper-proof digital timestamp records of every employee and visitor entry",
      ],
    },
    steps: [
      {
        number: "01",
        title: { pt: "Levantamento", en: "Survey" },
        description: { pt: "Identificação dos pontos cegos, muros perimetrais e acessos críticos do local.", en: "Inspecting perimeter walls, vulnerable blind spots, and critical access doors." },
      },
      {
        number: "02",
        title: { pt: "Selecção", en: "Selection" },
        description: { pt: "Especificação das lentes de câmaras, ângulos de visão e tipo de fechaduras magnéticas.", en: "Selecting camera focal lengths, sensor beam ranges, and electromagnetic lock ratings." },
      },
      {
        number: "03",
        title: { pt: "Instalação", en: "Installation" },
        description: { pt: "Fixação das câmaras em suportes metálicos protegidos e passagem de cabos blindados.", en: "Mounting cameras on protected steel brackets and routing underground armored cabling." },
      },
      {
        number: "04",
        title: { pt: "Configuração", en: "Configuration" },
        description: { pt: "Definição de linhas virtuais de alarme perimetral e gravação inteligente por detecção.", en: "Drawing AI perimeter tripwires and programming event-based recording schedules." },
      },
      {
        number: "05",
        title: { pt: "Integração", en: "Integration" },
        description: { pt: "Interligação entre o alarme, as câmaras e as notificações na central e no smartphone.", en: "Synchronizing alarms, camera PTZ presets, and push alerts to mobile devices." },
      },
      {
        number: "06",
        title: { pt: "Testes e Continuidade", en: "Testing & Continuity" },
        description: { pt: "Simulação de intrusão, validação da autonomia das baterias de backup e manutenção preventiva.", en: "Live intrusion drill, testing battery UPS backup duration, and quarterly maintenance." },
      },
    ],
    iconName: "ShieldAlert",
  },
];
