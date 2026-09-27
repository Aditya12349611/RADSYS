import { ServiceCategory, ProcessStep, ResearchArea, ProjectItem, TeamMember, BlogPost } from '../types';

export const COMPANY_INFO = {
  name: 'RADSYS',
  tagline: 'Engineering the Next!',
  heroHeadline: 'ENGINEERING THE NEXT.',
  heroSubheadline: 'Transforming complex ideas and practical challenges into purposeful, functional, and manufacturable systems.',
  aboutBrief: 'RADSYS is an engineering and technology enterprise dedicated to the conception, development, and realization of sophisticated technical solutions.',
  fullAbout: 'RADSYS is an engineering and technology enterprise dedicated to the conception, development, and realization of sophisticated technical solutions. We operate at the intersection of engineering, computation, automation, and emerging technology, transforming complex ideas and practical challenges into purposeful, functional, and manufacturable systems.',
  philosophyQuote: 'Meaningful innovation is achieved when ingenuity is coupled with engineering discipline.',
  visionText: 'We envision RADSYS evolving into a multidisciplinary technology enterprise capable of moving seamlessly from an idea to an engineered system, from a prototype to a product, and from a technological possibility to a deployable solution. We are building not merely an organisation, but a platform where engineering expertise, technological curiosity, and relentless experimentation converge.',
  contactEmail: 'contact@radsys.tech',
  contactPhone: '+1 (800) RAD-SYS-NEXT',
  location: 'Tech Innovation Quarter, USA / India',
};

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'mechanical',
    title: 'MECHANICAL ENGINEERING',
    tagline: 'Precision design, CAD modeling, structural FEA, and advanced hardware prototyping.',
    badge: 'HARDWARE & SYSTEMS',
    description: 'End-to-end mechanical engineering from initial conceptualization and kinematics to manufacturable assemblies and rapid prototyping.',
    icon: 'Cpu',
    visualType: 'cad',
    services: [
      {
        id: 'cad-3d-modelling',
        title: 'CAD & 3D Modelling',
        description: 'Development of precise 3D models, assemblies, and engineering designs using industry-standard CAD platforms, converting 2D drawings into 3D CAD models, and digitalizing physical parts into a CAD model.',
        icon: 'Box',
        details: [
          'Parametric 3D Solid & Surface Modelling',
          '2D Technical Drawing Conversion to Native 3D CAD',
          'Physical Part Digitization & Reverse Scanning',
          'Complex Geometric Assembly & Tolerance Stack-up Analysis'
        ]
      },
      {
        id: 'machine-mechanism-design',
        title: 'Machine & Mechanism Design',
        description: 'Design and development of machines, mechanisms, motion systems, fixtures, and specialized mechanical assemblies.',
        icon: 'Cog',
        details: [
          'Custom Kinematic & Dynamic Motion Systems',
          'Specialized Jigs, Fixtures, and Industrial Tooling',
          'Precision Gearboxes and Actuation Systems',
          'High-Duty Automated Mechanical Assemblies'
        ]
      },
      {
        id: 'product-design-development',
        title: 'Product Design & Development',
        description: 'End-to-end engineering of products, from conceptual architecture and design refinement to detailed engineering and prototype development.',
        icon: 'Layers',
        details: [
          'Conceptual Architecture & Ergonomic Refinement',
          'Enclosure Design & Thermal Management Integration',
          'Material Selection & Environmental Hardening',
          'Design Verification & Functional Prototype Build'
        ]
      },
      {
        id: 'drawings-documentation',
        title: 'Engineering Drawings & Documentation',
        description: 'Creation of manufacturing drawings, detailed part drawings, assembly drawings, BOMs, specifications, and technical documentation.',
        icon: 'FileText',
        details: [
          'GD&T Compliant 2D Production Drawings (ISO/ASME)',
          'Hierarchical Bill of Materials (BOM) Generation',
          'Assembly Standard Operating Procedures (SOPs)',
          'Quality Inspection & Compliance Documentation'
        ]
      },
      {
        id: 'reverse-engineering',
        title: 'Reverse Engineering',
        description: 'Reconstruction and improvement of components and assemblies from physical parts, measurements, scans, or existing designs.',
        icon: 'RefreshCw',
        details: [
          'Optical & 3D Laser Scanning Mesh Processing',
          'Legacy Component Modernization & Optimization',
          'Failure Mode Diagnosis via Reverse Reconstruction',
          'Material Characterization & Structural Replication'
        ]
      },
      {
        id: 'dfm-dfa',
        title: 'Design for Manufacturing (DFM/DFA)',
        description: 'Optimization of designs for manufacturability, assembly, material selection, fabrication processes, tolerances, and cost efficiency.',
        icon: 'CheckCircle2',
        details: [
          'CNC Machining & Sheet Metal Tool Path Optimization',
          'Injection Molding & Casting Draft Angle Analysis',
          'Assembly Time & Fastener Reduction (DFA)',
          'Cost Breakdown & Material Supply Optimization'
        ]
      },
      {
        id: 'fea-analysis',
        title: 'Engineering Analysis & FEA',
        description: 'Structural and mechanical analysis to evaluate performance, identify failure modes, and improve design reliability.',
        icon: 'Activity',
        details: [
          'Static & Dynamic Structural Stress Analysis',
          'Modal, Frequency & Harmonic Vibration FEA',
          'Thermal Heat Dissipation & Transient Analysis',
          'Fatigue Life Expectancy & Non-linear Mechanics'
        ]
      },
      {
        id: 'prototyping-3d-printing',
        title: 'Prototyping & 3D Printing',
        description: 'Rapid development of physical prototypes and functional components using additive manufacturing and other prototyping techniques.',
        icon: 'Printer',
        details: [
          'FDM, SLA, SLS & DMLS Metal 3D Printing',
          'Functional Engineering Polymer Prototypes',
          'Post-Processing, Surface Finishing & Thread Insertion',
          'Short-Run Functional Validation Builds'
        ]
      },
      {
        id: 'custom-components',
        title: 'Custom Components Design & Development',
        description: 'Development of customized engineering components, prototypes, and low-volume products.',
        icon: 'Wrench',
        details: [
          'Bespoke Heavy-Duty Hardware Components',
          'Low-Volume High-Precision Machined Fittings',
          'High-Temperature & Specialty Material Adapters',
          'Custom Seal, Bearing & Shaft Assemblies'
        ]
      },
      {
        id: 'robotics-mechanical-systems',
        title: 'Robotics & Mechanical Systems',
        description: 'Mechanical design of robotic structures, end-effectors, mechanisms, fixtures, and other components for automated systems.',
        icon: 'Bot',
        details: [
          'Custom Robotic Arm Linkages & Joint Housings',
          'Pneumatic & Servo EOAT (End-of-Arm Tooling)',
          'AGV/AMR Chassis & Suspension Systems',
          'High-Precision Positioning Gantry Mechanisms'
        ]
      }
    ]
  },
  {
    id: 'it',
    title: 'INFORMATION TECHNOLOGY',
    tagline: 'Custom software, AI/ML models, automated pipelines, and engineering calculation engines.',
    badge: 'SOFTWARE & COMPUTATION',
    description: 'Building intelligent computational tools, full-stack software applications, enterprise data pipelines, and machine learning models tailored to complex technical workflows.',
    icon: 'Code',
    visualType: 'code',
    services: [
      {
        id: 'custom-software',
        title: 'Custom Software Development',
        description: 'Design and development of tailored software applications for specific business, engineering, and operational requirements.',
        icon: 'Terminal',
        details: [
          'Scalable Microservices & Enterprise Architecture',
          'High-Performance C++/Python Computational Core Engines',
          'Secure Desktop & Cloud-Native Technical Software',
          'Cross-Platform Operational Management Systems'
        ]
      },
      {
        id: 'web-app-development',
        title: 'Web Application Development',
        description: 'Development of modern, responsive web platforms, business applications, dashboards, and technology-enabled services.',
        icon: 'Globe',
        details: [
          'Next-Gen React / TypeScript / Node.js Architectures',
          'Real-time Telemetry & Dynamic Data Visualizations',
          'High-Security SaaS & Cloud Infrastructure Setup',
          'Responsive Multi-Device Engineering Dashboards'
        ]
      },
      {
        id: 'engineering-software-tools',
        title: 'Engineering Software & Tools',
        description: 'Creation of specialized software utilities that automate engineering calculations, workflows, analysis, documentation, and repetitive technical tasks.',
        icon: 'Calculator',
        details: [
          'CAD/CAM Automation & Scripting Engines (SolidWorks/Fusion/CATIA APIs)',
          'Automated Stress/FEA Batch Processing Scripts',
          'Custom Calculation Sheets to Web Tool Converters',
          'Automated Technical Specification Generators'
        ]
      },
      {
        id: 'data-analytics-visualization',
        title: 'Data Analytics & Visualization',
        description: 'Transformation of raw data into actionable insights through data processing, statistical analysis, dashboards, and interactive visualisation.',
        icon: 'BarChart3',
        details: [
          'Industrial Sensor Stream Aggregation & Analysis',
          'Interactive Web-Based 3D Data Heatmaps',
          'Predictive Anomaly Detection Pipelines',
          'Executive Decision Analytics & KPI Systems'
        ]
      },
      {
        id: 'ai-ml',
        title: 'Artificial Intelligence & Machine Learning',
        description: 'Development and integration of AI/ML solutions for prediction, classification, automation, optimization, computer vision, and intelligent decision-making.',
        icon: 'Brain',
        details: [
          'Computer Vision Quality Inspection Models',
          'Deep Learning Predictive Maintenance Systems',
          'Multi-Variable Design Parameter Optimization Neural Nets',
          'Natural Language Technical Document Search'
        ]
      },
      {
        id: 'workflow-automation',
        title: 'Workflow & Process Automation',
        description: 'Automation of repetitive business and technical processes to reduce manual effort, improve efficiency, and enhance operational consistency.',
        icon: 'Zap',
        details: [
          'RPA & Automated Data Transfer Connectors',
          'Engineering ERP / PLM Workflow Interoperability',
          'Automated Inspection & Quality Gateways',
          'Zero-Human-Intervention Pipeline Orchestration'
        ]
      },
      {
        id: 'ai-business-solutions',
        title: 'AI-Powered Business Solutions',
        description: 'Development of intelligent applications that integrate AI capabilities into business processes, customer interactions, knowledge systems, and decision workflows.',
        icon: 'Sparkles',
        details: [
          'Domain-Specific Knowledge Base AI Assistants',
          'Automated Quote & BOM Cost Estimation Engines',
          'Intelligent Operational Resource Allocation',
          'Custom Generative AI Technical Workflows'
        ]
      },
      {
        id: 'api-system-integration',
        title: 'API & System Integration',
        description: 'Integration of software platforms, databases, APIs, and external services to create connected and automated digital ecosystems.',
        icon: 'Network',
        details: [
          'RESTful & GraphQL Custom Middleware',
          'IoT Hardware Edge Gateway Connectivity (MQTT/OPC-UA)',
          'Legacy Enterprise ERP Integration',
          'High-Throughput Asynchronous Messaging Queues'
        ]
      },
      {
        id: 'technical-consulting',
        title: 'Technical Consulting',
        description: 'Technology advisory and implementation support for businesses seeking to adopt software, data, AI, and automation technologies.',
        icon: 'ShieldCheck',
        details: [
          'Digital Transformation Roadmap Planning',
          'Software Architecture Code & Security Audits',
          'AI Feasibility & ROI Technical Assessment',
          'Cloud Infrastructure Cost & Performance Tuning'
        ]
      }
    ]
  },
  {
    id: 'rd',
    title: 'RESEARCH & DEVELOPMENT',
    tagline: 'Pioneering work in robotics, mechatronics, UAVs, and breakthrough intelligent systems.',
    badge: 'ADVANCED INNOVATION',
    description: 'Operating at the bleeding edge of experimental technology to conceptualize, prototype, and validate tomorrow\'s engineering solutions.',
    icon: 'FlaskConical',
    visualType: 'robotics',
    services: [
      {
        id: 'technology-research',
        title: 'Technology Research',
        description: 'Investigation and evaluation of emerging technologies, engineering methodologies, and technological concepts for practical applications.',
        icon: 'Search',
        details: [
          'State-of-the-Art Literature & Patent Reviews',
          'Emerging Material & Process Feasibility Studies',
          'Proof-of-Concept Theoretical Formulations',
          'Benchmark Performance Trade-off Analysis'
        ]
      },
      {
        id: 'experimental-development',
        title: 'Experimental Development',
        description: 'Conversion of theoretical concepts and early-stage ideas into experimentally validated engineering solutions and working prototypes.',
        icon: 'TestTube',
        details: [
          'Custom Laboratory Experimental Test Benches',
          'Hypothesis Validation & Sensor Telemetry Rig Design',
          'Iterative Design-Test-Refine Hardware Loops',
          'Controlled Stress & Environment Testing'
        ]
      },
      {
        id: 'new-product-development',
        title: 'New Product Development (NPD)',
        description: 'Research-led development of novel products, technologies, mechanisms, and systems from initial concept through functional validation.',
        icon: 'Sparkle',
        details: [
          'First-of-a-Kind Hardware-Software Synthesis',
          'Rapid Stage-Gate Prototype Evolution',
          'Intellectual Property (IP) Co-Development',
          'Pre-Production Pilot Unit Fabrication'
        ]
      },
      {
        id: 'robotics-intelligent-systems-rd',
        title: 'Robotics & Intelligent Systems R&D',
        description: 'Research and experimentation involving robotics, intelligent machines, autonomous systems, sensing, control, and machine intelligence.',
        icon: 'Bot',
        details: [
          'Sensor Fusion (LiDAR, Camera, IMU) Algorithms',
          'Custom Inverse Kinematics & Trajectory Planners',
          'Reinforcement Learning for Robotic Control',
          'Human-Robot Collaboration Safety Mechanisms'
        ]
      },
      {
        id: 'automation-mechatronics-rd',
        title: 'Automation & Mechatronics R&D',
        description: 'Development and experimentation with integrated mechanical, electronic, computational, and control systems.',
        icon: 'Sliders',
        details: [
          'High-Speed Electro-Mechanical Actuator R&D',
          'Embedded Microcontroller (STM32/FPGA) Systems',
          'Closed-Loop Precision Control Loops (PID/MPC)',
          'Custom Sensor Signal Conditioning Circuits'
        ]
      },
      {
        id: 'advanced-manufacturing-rd',
        title: 'Advanced Manufacturing R&D',
        description: 'Exploration of additive manufacturing, rapid prototyping, novel fabrication methods, and digitally enabled manufacturing technologies.',
        icon: 'Cpu',
        details: [
          'Topology Optimization for 3D Metal Printing',
          'Composite Material Layup & Curing Research',
          'Generative Structure Fabrication Validation',
          'In-Situ Process Monitoring & Quality Control'
        ]
      },
      {
        id: 'ai-computational-rd',
        title: 'AI & Computational R&D',
        description: 'Investigation of computational methods, artificial intelligence, machine learning, optimization, simulation, and data-driven engineering.',
        icon: 'Binary',
        details: [
          'Physics-Informed Neural Networks (PINNs)',
          'High-Performance Parallel Simulation Engines',
          'Surrogate Modeling for Complex Finite Element Code',
          'Generative Mechanical Design Exploration'
        ]
      },
      {
        id: 'autonomous-systems',
        title: 'Autonomous Systems',
        description: 'Research and development of systems capable of sensing, reasoning, decision-making, and operating with varying degrees of autonomy.',
        icon: 'Navigation',
        details: [
          'SLAM (Simultaneous Localization and Mapping)',
          'Obstacle Avoidance & Path Planning under Uncertainty',
          'Multi-Agent Swarm Coordination Protocol',
          'Edge Computer Vision Inference Rigs'
        ]
      },
      {
        id: 'uav-aerospace',
        title: 'UAV & Aerospace Technology',
        description: 'Long-term research into unmanned aerial systems, autonomous flight technologies, aerospace structures, propulsion-related systems, and associated technologies.',
        icon: 'Plane',
        details: [
          'Custom Airframe Aerodynamic CFD Optimization',
          'Autonomous UAV Flight Controller Fine-Tuning',
          'Ultra-Lightweight Carbon Fiber Structural Assemblies',
          'Electric Propulsion & Battery Management Systems'
        ]
      },
      {
        id: 'technology-prototyping',
        title: 'Technology Prototyping',
        description: 'Rapid translation of research concepts into physical or digital prototypes for experimentation, testing, validation, and further development.',
        icon: 'Workflow',
        details: [
          'Breadboard & Benchtop Proof of Principles',
          'Alpha & Beta Field Testable Prototype Units',
          'Hardware-in-the-Loop (HIL) Simulation Rigs',
          'Comprehensive Performance Benchmark Reports'
        ]
      }
    ]
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    number: '01',
    title: 'Concept',
    description: 'Extracting core engineering objectives, defining functional requirements, physics constraints, and architectural feasibility.',
    technicalDetails: ['Constraint Mapping', 'Requirement Analysis', 'Feasibility Benchmarking']
  },
  {
    step: '02',
    number: '02',
    title: 'System Architecture',
    description: 'Structuring multidisciplinary interactions between mechanical elements, computational hardware, electronics, and software logic.',
    technicalDetails: ['Multidisciplinary System Topology', 'Interface Definition', 'Risk Matrix']
  },
  {
    step: '03',
    number: '03',
    title: 'Design',
    description: 'High-precision parametric CAD drafting, kinematics modeling, electronic circuit design, and software stack foundation.',
    technicalDetails: ['3D Solid & Surface CAD', 'Tolerance Stackup', 'Software Stack Architecture']
  },
  {
    step: '04',
    number: '04',
    title: 'Analysis',
    description: 'Finite Element Analysis (FEA), Computational Fluid Dynamics (CFD), structural load simulations, and AI model verification.',
    technicalDetails: ['Structural & Thermal FEA', 'Kinematic Simulation', 'Code Security & Perf Audit']
  },
  {
    step: '05',
    number: '05',
    title: 'Prototype',
    description: 'Rapid physical fabrication via 3D printing/CNC machining and building functional software MVP testbeds.',
    technicalDetails: ['Additive/Subtractive Fabrication', 'PCB Assembly', 'Software Containerization']
  },
  {
    step: '06',
    number: '06',
    title: 'Testing',
    description: 'Rigorous empirical physical load testing, sensor validation, environmental stress screening, and automated software test suites.',
    technicalDetails: ['Load & Stress Validation', 'Sensor Telemetry Logging', 'End-to-End Automated Testing']
  },
  {
    step: '07',
    number: '07',
    title: 'Development',
    description: 'Refining engineering documentation, optimizing for DFM/DFA, tuning ML models, and polishing user control interfaces.',
    technicalDetails: ['GD&T 2D Documentation', 'Model Fine-tuning', 'Production Tooling Prep']
  },
  {
    step: '08',
    number: '08',
    title: 'Deployment',
    description: 'Commissioning finished mechanical systems, deploying cloud software pipelines, and handing over comprehensive engineering documentation.',
    technicalDetails: ['Site Commissioning', 'CI/CD Cloud Production', 'Handover & SOP Delivery']
  }
];

export const RESEARCH_AREAS: ResearchArea[] = [
  {
    id: 'robotics',
    title: 'Advanced Robotics',
    description: 'Next-generation articulated robotic arms, custom end-effectors, multi-DOF dynamic link mechanisms, and high-torque precision joint actuators.',
    focusAreas: ['Kinematic Optimization', 'Custom EOAT Grippers', 'Servo Control Rigs'],
    icon: 'Bot',
    techBadge: 'R&D LAB 01'
  },
  {
    id: 'automation',
    title: 'Intelligent Automation',
    description: 'Adaptive closed-loop mechatronic systems that dynamically adjust to environmental feedback, sensor arrays, and operational parameters.',
    focusAreas: ['PLC & Embedded Microcontrollers', 'Industrial IoT Telemetry', 'Vision-Guided Pick & Place'],
    icon: 'Cpu',
    techBadge: 'R&D LAB 02'
  },
  {
    id: 'autonomous',
    title: 'Autonomous Systems',
    description: 'Unmanned ground and air platforms operating under GPS-denied environments with onboard real-time spatial computing.',
    focusAreas: ['Visual SLAM', 'Obstacle Avoidance Logic', 'Edge Neural Inference'],
    icon: 'Navigation',
    techBadge: 'R&D LAB 03'
  },
  {
    id: 'ai',
    title: 'Artificial Intelligence',
    description: 'Physics-informed machine learning, generative design exploration engines, and real-time computer vision quality verification.',
    focusAreas: ['PINN Physics Solvers', 'Generative Design Algorithms', 'Predictive Maintenance'],
    icon: 'Brain',
    techBadge: 'R&D LAB 04'
  },
  {
    id: 'manufacturing',
    title: 'Advanced Manufacturing',
    description: 'Direct Metal Laser Sintering (DMLS), continuous fiber additive fabrication, and automated CNC toolpath optimization.',
    focusAreas: ['Metamaterial Structures', 'In-Situ Layer Inspection', 'Low-Mass Lattice Architecture'],
    icon: 'Wrench',
    techBadge: 'R&D LAB 05'
  },
  {
    id: 'unmanned',
    title: 'Unmanned Systems',
    description: 'High-endurance multi-rotor UAV airframes, payload stabilization gimbals, and automated tethered power delivery mechanisms.',
    focusAreas: ['Carbon-Fiber Monocoques', 'Active Gimbal Drives', 'Fail-Safe Recovery Systems'],
    icon: 'Radio',
    techBadge: 'R&D LAB 06'
  },
  {
    id: 'aerospace',
    title: 'Aerospace Technologies',
    description: 'CFD-optimized aerodynamic profiles, lightweight structural sandwich panels, and high-temperature thermal isolation barriers.',
    focusAreas: ['Subsonic CFD Analysis', 'Composite Curing Verification', 'Micro-Turbine Mount Rigs'],
    icon: 'Plane',
    techBadge: 'R&D LAB 07'
  }
];

export const PORTFOLIO_PROJECTS: ProjectItem[] = [
  {
    id: 'proj-01',
    title: 'High-Precision 6-DOF Robotic Manipulator Mechanism',
    category: 'Robotics',
    client: 'Engineering Client (Placeholder)',
    description: 'Design, structural FEA analysis, kinematic modeling, and rapid prototype fabrication of a low-backlash 6-axis robotic arm joint assembly with harmonic drive integration.',
    technologies: ['CAD / SolidWorks', 'FEA Structural Simulation', 'Additive Manufacturing', 'Harmonic Drives', 'Motion Control'],
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    isPlaceholder: true,
    specs: {
      'Payload Capacity': '5.0 kg',
      'Repeatability': '±0.02 mm',
      'Primary Material': '7075-T6 Aerospace Aluminum',
      'Drive Type': 'Strain Wave Harmonic'
    }
  },
  {
    id: 'proj-02',
    title: 'AI-Powered Computer Vision Inspection System',
    category: 'AI/ML',
    client: 'Industrial Automation Partner (Placeholder)',
    description: 'Development of an edge-deployed deep learning computer vision system detecting sub-millimeter surface defects on high-speed manufacturing conveyor lines.',
    technologies: ['Python', 'PyTorch / OpenCV', 'TypeScript Dashboard', 'NVIDIA Jetson Edge', 'MQTT Telemetry'],
    image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    isPlaceholder: true,
    specs: {
      'Inference Speed': '120 FPS',
      'Defect Accuracy': '99.4%',
      'Deployment': 'Edge Micro-Server',
      'Integration': 'PLC Digital I/O'
    }
  },
  {
    id: 'proj-03',
    title: 'Automated CAD Parameterization & FEA Batch Utility',
    category: 'Software',
    client: 'Engineering Design Office (Placeholder)',
    description: 'Custom desktop and cloud software automation tool that converts customer inputs into fully parametric 3D CAD assemblies and executes batch structural FEA stress reports.',
    technologies: ['C# / .NET Core', 'CAD API Automation', 'React Web Portal', 'Python FEA Solver', 'Automated PDF Engine'],
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    isPlaceholder: true,
    specs: {
      'Process Time Reduction': '85%',
      'Supported Formats': 'STEP, IGES, Native CAD',
      'Output': 'BOM + Automated FEA Report'
    }
  },
  {
    id: 'proj-04',
    title: 'Lightweight Carbon-Composite UAV Airframe',
    category: 'Product Development',
    client: 'Aerospace R&D (Placeholder)',
    description: 'End-to-end aerodynamic CFD optimization, structural FEA lay-up modeling, and prototype assembly of an endurance fixed-wing unmanned aerial vehicle.',
    technologies: ['Ansys CFD', 'Composite Layup Design', '3D Printed Molds', 'Carbon Prepreg', 'Telemetry Integration'],
    image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    isPlaceholder: true,
    specs: {
      'Wingspan': '2.4 meters',
      'Empty Weight': '1.8 kg',
      'Cruising Speed': '65 km/h'
    }
  },
  {
    id: 'proj-05',
    title: 'Adaptive Mechatronic Gripper with Tactile Sensing',
    category: 'Mechanical Engineering',
    client: 'Robotics Lab (Placeholder)',
    description: 'Design and prototyping of a multi-link underactuated robotic gripper featuring integrated tactile force sensors for compliant object handling.',
    technologies: ['SolidWorks 3D', 'Embedded STM32', 'Piezoresistive Array', 'CNC Machining', 'ROS2 Drivers'],
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    isPlaceholder: true,
    specs: {
      'Grip Force Range': '0.5N to 45N',
      'Sensor Density': '16 tactile nodes/finger',
      'Weight': '420 grams'
    }
  },
  {
    id: 'proj-06',
    title: 'Closed-Loop Industrial Process Automation Rig',
    category: 'Automation',
    client: 'Manufacturing Plant (Placeholder)',
    description: 'System integration of high-precision linear stages, industrial sensors, custom PLC control logic, and a web-based SCADA diagnostic suite.',
    technologies: ['PLC / Ladder Logic', 'Node.js Middleware', 'React Industrial UI', 'OPC-UA Protocol', 'Precision Ball-Screws'],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    isPlaceholder: true,
    specs: {
      'Positioning Accuracy': '5 microns',
      'Uptime Target': '99.99%',
      'Communication': 'EtherCAT / Industrial Ethernet'
    }
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'team-01',
    name: 'Lead Engineering Architect',
    role: 'Principal Systems & Mechanical Engineer',
    bio: 'Specializing in multidisciplinary system architecture, kinematics, machine design, and high-precision mechanical engineering.',
    specialization: ['Machine Design', 'System Architecture', 'FEA Structural Mechanics', 'DFM/DFA'],
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    isPlaceholder: true
  },
  {
    id: 'team-02',
    name: 'Chief Software & AI Lead',
    role: 'Head of Computing & AI Systems',
    bio: 'Expert in full-stack cloud software architecture, industrial AI model deployment, computer vision, and workflow automation engines.',
    specialization: ['Full-Stack Systems', 'Computer Vision', 'Generative AI', 'Cloud Microservices'],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    isPlaceholder: true
  },
  {
    id: 'team-03',
    name: 'Senior Robotics & Mechatronics Specialist',
    role: 'R&D Hardware Systems Lead',
    bio: 'Focussed on autonomous navigation, sensor fusion, servo actuation control loops, and physical prototype fabrication.',
    specialization: ['Robotic Manipulation', 'Embedded Control', 'Sensor Fusion', 'Rapid Prototyping'],
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
    isPlaceholder: true
  },
  {
    id: 'team-04',
    name: 'Advanced Manufacturing Engineer',
    role: 'Materials & Production Optimization Specialist',
    bio: 'Dedicated to additive manufacturing workflows, CNC toolpathing, composite layups, and precision tolerance engineering.',
    specialization: ['3D Printing / DMLS', 'CNC Precision Machining', 'Composite Structures', 'Quality Inspection'],
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    isPlaceholder: true
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-01',
    title: 'Bridging Mechanical Design and Computational FEA for High-Duty Systems',
    category: 'Engineering',
    excerpt: 'An exploration of how modern CAD platforms and non-linear Finite Element Analysis converge to eliminate structural failure points before physical prototype testing.',
    readTime: '6 min read',
    date: 'SEP 24, 2026',
    author: 'RADSYS Technical Team',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80',
    tags: ['CAD', 'FEA', 'Structural Mechanics', 'DFM'],
    isPlaceholder: true,
    content: `Engineering rarely exists within a single isolated domain. Modern mechanical systems operating under severe dynamic loads require early computational verification long before metal is cut or polymers are printed.

    In this technical deep-dive, RADSYS outlines the parametric CAD workflow, stress tensor verification, and modal frequency analysis methodologies used to guarantee structural integrity while minimizing excess material mass.`
  },
  {
    id: 'blog-02',
    title: 'Deploying Physics-Informed Neural Networks (PINNs) in Engineering Simulation',
    category: 'AI & Machine Learning',
    excerpt: 'How embedding physical laws into neural network loss functions speeds up thermal and fluid dynamics predictions by orders of magnitude over standard solvers.',
    readTime: '8 min read',
    date: 'SEP 18, 2026',
    author: 'RADSYS AI R&D Group',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1000&q=80',
    tags: ['AI/ML', 'PINN', 'Computational Physics', 'Simulation'],
    isPlaceholder: true,
    content: `Traditional CFD and FEA solvers rely on discretized spatial meshes that scale quadratically or cubically with geometric complexity. Physics-Informed Neural Networks (PINNs) integrate Navier-Stokes or elasticity differential equations directly into deep learning loss functions.

    The result is near real-time field predictions for dynamic design exploration, allowing engineers to evaluate thousands of candidate geometries in seconds.`
  },
  {
    id: 'blog-03',
    title: 'Designing Compliant End-Effectors for Next-Generation Industrial Robotics',
    category: 'Robotics',
    excerpt: 'Balancing structural rigidity, low mass, and tactile sensor feedback in custom robotic arm grippers for delicate multi-material assembly.',
    readTime: '5 min read',
    date: 'SEP 10, 2026',
    author: 'RADSYS Robotics Lab',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1000&q=80',
    tags: ['Robotics', 'EOAT', 'Kinematics', 'Mechatronics'],
    isPlaceholder: true,
    content: `Standard industrial grippers often suffer from rigid binary clamping that can damage fragile workpieces or lack positional flexibility.

    By combining topology-optimized 3D printed flexures with piezoresistive pressure arrays and closed-loop STM32 microcontroller feedback, RADSYS builds custom end-effectors capable of handling objects ranging from delicate glass sensors to heavy aluminum castings.`
  }
];
