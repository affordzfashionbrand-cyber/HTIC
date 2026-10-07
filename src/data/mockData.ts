export interface Startup {
  id: string;
  name: string;
  tagline: string;
  description: string;
  sector: 'robotics' | 'diagnostics' | 'ai' | 'implants' | 'assistive';
  sectorLabel: string;
  stage: 'Ideation' | 'Prototyping' | 'Clinical Validation' | 'Commercial';
  fundingRaised: string;
  grantSupport: string;
  founders: string[];
  patentStatus: string;
  cdscoStatus: string;
  clinicalPartner: string;
  website?: string;
  logo?: string;
  initials: string;
  featured?: boolean;
  womenLed?: boolean;
  impactMetric: string;
}

export interface Program {
  id: string;
  title: string;
  subTitle: string;
  category: 'birac' | 'dst' | 'institutional';
  categoryLabel: string;
  grantAmount: string;
  duration: string;
  stageTarget: string;
  description: string;
  deliverables: string[];
  eligibility: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  institution: string;
  category: 'STEERING_COMMITTEE' | 'CLINICAL_ADVISORY_BOARD' | 'SCREENING_COMMITTEE' | 'MENTORS' | 'TEAM';
  categoryLabel: string;
  bio: string;
  image: string;
  expertise: string[];
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
  badge?: string;
}

export interface GalleryItem {
  id: string;
  url: string;
  caption: string;
  category: string;
}

export const STARTUPS_DATA: Startup[] = [
  {
    id: "kornerstone",
    name: "Kornerstone Devices Private Limited",
    tagline: "Targeted navigation and precision guidance systems for clinical needle interventions",
    description: "Developing high-precision stereotactic needle guidance hardware that seamlessly couples with standard ultrasound and CT modalities, reducing puncture attempts and surgical trauma in biopsies.",
    sector: "robotics",
    sectorLabel: "Surgical & Robotics",
    stage: "Clinical Validation",
    fundingRaised: "₹3.2 Cr",
    grantSupport: "BIRAC BIG & DST NIDHI",
    founders: [
      "Dr. Arun K.",
      "Vigneshwaran M."
    ],
    patentStatus: "2 Patents Granted",
    cdscoStatus: "Class B MD-14 Trial Licensed",
    clinicalPartner: "Apollo Hospitals & CMC Vellore",
    website: "https://htic.iitm.ac.in/mti/project/kornerstone-devices-pvt-ltd/",
    logo: "/images/startups/kornerstone_3139cc.png",
    initials: "KD",
    featured: true,
    impactMetric: "Sub-millimeter 0.4mm needle placement accuracy"
  },
  {
    id: "startup_1",
    name: "Mocero Health solution Private Limited",
    tagline: "Healthcare innovation and medtech solutions",
    description: "A promising startup working on addressing critical healthcare challenges through technology and innovation.",
    sector: "ai",
    sectorLabel: "AI & Digital Health",
    stage: "Prototyping",
    fundingRaised: "Undisclosed",
    grantSupport: "Incubated at HTIC",
    founders: [
      "Founding Team"
    ],
    patentStatus: "Under review",
    cdscoStatus: "Preparation",
    clinicalPartner: "TBD",
    website: "https://mocerohealth.com/",
    logo: "",
    initials: "MH",
    featured: false,
    impactMetric: "Developing innovative solutions"
  },
  {
    id: "startup_2",
    name: "Zmed Technologies Private Limited",
    tagline: "Healthcare innovation and medtech solutions",
    description: "A promising startup working on addressing critical healthcare challenges through technology and innovation.",
    sector: "ai",
    sectorLabel: "AI & Digital Health",
    stage: "Prototyping",
    fundingRaised: "Undisclosed",
    grantSupport: "Incubated at HTIC",
    founders: [
      "Founding Team"
    ],
    patentStatus: "Under review",
    cdscoStatus: "Preparation",
    clinicalPartner: "TBD",
    website: "http://www.zbliss.com",
    logo: "",
    initials: "ZT",
    featured: false,
    impactMetric: "Developing innovative solutions"
  },
  {
    id: "c3medtech",
    name: "C3 MedTech Private Limited",
    tagline: "Tele-ophthalmic digital imaging and screening diagnostic cameras",
    description: "Ultra-portable smartphone and battery-operated fundus diagnostic cameras providing automated AI diabetic retinopathy screening in rural clinics.",
    sector: "diagnostics",
    sectorLabel: "Point-of-Care Diagnostics",
    stage: "Commercial",
    fundingRaised: "₹5.0 Cr",
    grantSupport: "BIRAC BIG & DST NIDHI",
    founders: [
      "Yash Nagasheth",
      "Deepak Pathania"
    ],
    patentStatus: "3 Patents Granted",
    cdscoStatus: "Class B Approved",
    clinicalPartner: "Aravind Eye Care System",
    logo: "/images/startups/C3-MED-TECH-LOGO-150x150_69659e.png",
    initials: "C3",
    featured: true,
    impactMetric: "250,000+ patients screened across 14 states",
    website: "http://c3prototypes.com/"
  },
  {
    id: "kozhnosys",
    name: "Kozhnosys Private Limited",
    tagline: "Point-of-care non-invasive breast cancer breath and thermal screener",
    description: "Fast, radiation-free diagnostic screening tool measuring metabolic volatile organic biomarkers and thermal vascular patterns to detect early breast lesions.",
    sector: "diagnostics",
    sectorLabel: "Point-of-Care Diagnostics",
    stage: "Clinical Validation",
    fundingRaised: "₹3.8 Cr",
    grantSupport: "BIRAC WinER & DST PRAYAS",
    founders: [
      "Jilma Peruvangat"
    ],
    patentStatus: "2 Patents Granted",
    cdscoStatus: "Investigational Trial MD-14",
    clinicalPartner: "Apollo Cancer Centres",
    logo: "/images/startups/logokozhnosys_1_9b3f71.jpg",
    initials: "KZ",
    featured: true,
    womenLed: true,
    impactMetric: "4,200 women screened in clinical trials",
    website: "https://kozhnosys.com/about-us/"
  },
  {
    id: "startup_5",
    name: "M/s. Verena Haptic and VR Systems Private Limited",
    tagline: "Healthcare innovation and medtech solutions",
    description: "A promising startup working on addressing critical healthcare challenges through technology and innovation.",
    sector: "ai",
    sectorLabel: "AI & Digital Health",
    stage: "Prototyping",
    fundingRaised: "Undisclosed",
    grantSupport: "Incubated at HTIC",
    founders: [
      "Founding Team"
    ],
    patentStatus: "Under review",
    cdscoStatus: "Preparation",
    clinicalPartner: "TBD",
    website: "https://www.vhandvr.com/",
    logo: "",
    initials: "MV",
    featured: false,
    impactMetric: "Developing innovative solutions"
  },
  {
    id: "startup_6",
    name: "Streben Healthcare Private Limited",
    tagline: "Healthcare innovation and medtech solutions",
    description: "A promising startup working on addressing critical healthcare challenges through technology and innovation.",
    sector: "ai",
    sectorLabel: "AI & Digital Health",
    stage: "Prototyping",
    fundingRaised: "Undisclosed",
    grantSupport: "Incubated at HTIC",
    founders: [
      "Founding Team"
    ],
    patentStatus: "Under review",
    cdscoStatus: "Preparation",
    clinicalPartner: "TBD",
    website: "http://strebenhealth.com/",
    logo: "",
    initials: "SH",
    featured: false,
    impactMetric: "Developing innovative solutions"
  },
  {
    id: "medisim",
    name: "MediSim VR Private Limited",
    tagline: "Virtual reality surgical and clinical skills training simulator platform",
    description: "Photorealistic, haptic-enabled VR training environments for medical and nursing schools to master high-risk surgical procedures without patient risk.",
    sector: "ai",
    sectorLabel: "AI & Digital Health",
    stage: "Commercial",
    fundingRaised: "₹8.0 Cr",
    grantSupport: "IITM Incubation & Angel Syndicate",
    founders: [
      "Sabarish Chandrasekaran",
      "Adithyan G."
    ],
    patentStatus: "Proprietary VR Simulation IP",
    cdscoStatus: "Clinical Simulation Certified",
    clinicalPartner: "Madras Medical College",
    logo: "/images/startups/MediSim_bda994.png",
    initials: "MV",
    featured: true,
    impactMetric: "Trained 15,000+ medical students & surgeons",
    website: "https://htic.iitm.ac.in/mti/project/medisim-vr-pvt-ltd/"
  },
  {
    id: "startup_8",
    name: "Smart Home Healthcare Solutions Private Limited",
    tagline: "Healthcare innovation and medtech solutions",
    description: "A promising startup working on addressing critical healthcare challenges through technology and innovation.",
    sector: "ai",
    sectorLabel: "AI & Digital Health",
    stage: "Prototyping",
    fundingRaised: "Undisclosed",
    grantSupport: "Incubated at HTIC",
    founders: [
      "Founding Team"
    ],
    patentStatus: "Under review",
    cdscoStatus: "Preparation",
    clinicalPartner: "TBD",
    website: "https://aeglepro.com/",
    logo: "",
    initials: "SH",
    featured: false,
    impactMetric: "Developing innovative solutions"
  },
  {
    id: "startup_9",
    name: "Remcos Medical Technologies Private Limited",
    tagline: "Healthcare innovation and medtech solutions",
    description: "A promising startup working on addressing critical healthcare challenges through technology and innovation.",
    sector: "ai",
    sectorLabel: "AI & Digital Health",
    stage: "Prototyping",
    fundingRaised: "Undisclosed",
    grantSupport: "Incubated at HTIC",
    founders: [
      "Founding Team"
    ],
    patentStatus: "Under review",
    cdscoStatus: "Preparation",
    clinicalPartner: "TBD",
    website: "https://htic.iitm.ac.in/mti/project/aspire-medicare-technologies/",
    logo: "",
    initials: "RM",
    featured: false,
    impactMetric: "Developing innovative solutions"
  },
  {
    id: "dextroware",
    name: "DextroWare Device Private Limited",
    tagline: "Head-movement computer access interface for motor-impaired individuals",
    description: "Assistive hands-free neuro-navigation device enabling individuals with quadriplegia and upper limb speech/mobility restrictions to operate digital computers smoothly.",
    sector: "assistive",
    sectorLabel: "Assistive Technologies",
    stage: "Commercial",
    fundingRaised: "₹3.5 Cr",
    grantSupport: "BIRAC BIG & Social Alpha",
    founders: [
      "Pravin Kumar",
      "Venkatesh S."
    ],
    patentStatus: "2 Patents Granted",
    cdscoStatus: "Class A Registered",
    clinicalPartner: "NIEPMD Chennai",
    initials: "DD",
    featured: true,
    impactMetric: "2,500+ disabled users empowered daily",
    website: "https://dextrowaredevices.com/"
  },
  {
    id: "startup_11",
    name: "SocioDent Private Limited",
    tagline: "Healthcare innovation and medtech solutions",
    description: "A promising startup working on addressing critical healthcare challenges through technology and innovation.",
    sector: "ai",
    sectorLabel: "AI & Digital Health",
    stage: "Prototyping",
    fundingRaised: "Undisclosed",
    grantSupport: "Incubated at HTIC",
    founders: [
      "Founding Team"
    ],
    patentStatus: "Under review",
    cdscoStatus: "Preparation",
    clinicalPartner: "TBD",
    website: "https://www.sociodent.in/",
    logo: "",
    initials: "SP",
    featured: false,
    impactMetric: "Developing innovative solutions"
  },
  {
    id: "startup_12",
    name: "Dverse Technologies Private Limited",
    tagline: "Healthcare innovation and medtech solutions",
    description: "A promising startup working on addressing critical healthcare challenges through technology and innovation.",
    sector: "ai",
    sectorLabel: "AI & Digital Health",
    stage: "Prototyping",
    fundingRaised: "Undisclosed",
    grantSupport: "Incubated at HTIC",
    founders: [
      "Founding Team"
    ],
    patentStatus: "Under review",
    cdscoStatus: "Preparation",
    clinicalPartner: "TBD",
    website: "www.dverselabs.com",
    logo: "",
    initials: "DT",
    featured: false,
    impactMetric: "Developing innovative solutions"
  },
  {
    id: "startup_13",
    name: "Neurostellar Private Limited",
    tagline: "Healthcare innovation and medtech solutions",
    description: "A promising startup working on addressing critical healthcare challenges through technology and innovation.",
    sector: "ai",
    sectorLabel: "AI & Digital Health",
    stage: "Prototyping",
    fundingRaised: "Undisclosed",
    grantSupport: "Incubated at HTIC",
    founders: [
      "Founding Team"
    ],
    patentStatus: "Under review",
    cdscoStatus: "Preparation",
    clinicalPartner: "TBD",
    website: "https://www.neuro-stellar.com/",
    logo: "",
    initials: "NP",
    featured: false,
    impactMetric: "Developing innovative solutions"
  },
  {
    id: "startup_14",
    name: "LoyalMed Devices Private Limited",
    tagline: "Healthcare innovation and medtech solutions",
    description: "A promising startup working on addressing critical healthcare challenges through technology and innovation.",
    sector: "ai",
    sectorLabel: "AI & Digital Health",
    stage: "Prototyping",
    fundingRaised: "Undisclosed",
    grantSupport: "Incubated at HTIC",
    founders: [
      "Founding Team"
    ],
    patentStatus: "Under review",
    cdscoStatus: "Preparation",
    clinicalPartner: "TBD",
    website: "www.loyalmed.in",
    logo: "",
    initials: "LD",
    featured: false,
    impactMetric: "Developing innovative solutions"
  },
  {
    id: "startup_15",
    name: "BrainwaveS Neurorehab Solutions Private Limited",
    tagline: "Healthcare innovation and medtech solutions",
    description: "A promising startup working on addressing critical healthcare challenges through technology and innovation.",
    sector: "ai",
    sectorLabel: "AI & Digital Health",
    stage: "Prototyping",
    fundingRaised: "Undisclosed",
    grantSupport: "Incubated at HTIC",
    founders: [
      "Founding Team"
    ],
    patentStatus: "Under review",
    cdscoStatus: "Preparation",
    clinicalPartner: "TBD",
    website: "https://brainwavesinc.tech/",
    logo: "",
    initials: "BN",
    featured: false,
    impactMetric: "Developing innovative solutions"
  },
  {
    id: "startup_16",
    name: "Deepvital Private Limited",
    tagline: "Healthcare innovation and medtech solutions",
    description: "A promising startup working on addressing critical healthcare challenges through technology and innovation.",
    sector: "ai",
    sectorLabel: "AI & Digital Health",
    stage: "Prototyping",
    fundingRaised: "Undisclosed",
    grantSupport: "Incubated at HTIC",
    founders: [
      "Founding Team"
    ],
    patentStatus: "Under review",
    cdscoStatus: "Preparation",
    clinicalPartner: "TBD",
    website: "https://www.deepvital.in/",
    logo: "",
    initials: "DP",
    featured: false,
    impactMetric: "Developing innovative solutions"
  },
  {
    id: "startup_17",
    name: "SPOTDOT BioInnovation Private Limited",
    tagline: "Healthcare innovation and medtech solutions",
    description: "A promising startup working on addressing critical healthcare challenges through technology and innovation.",
    sector: "ai",
    sectorLabel: "AI & Digital Health",
    stage: "Prototyping",
    fundingRaised: "Undisclosed",
    grantSupport: "Incubated at HTIC",
    founders: [
      "Founding Team"
    ],
    patentStatus: "Under review",
    cdscoStatus: "Preparation",
    clinicalPartner: "TBD",
    website: "https://www.spotdot.co.in/",
    logo: "",
    initials: "SB",
    featured: false,
    impactMetric: "Developing innovative solutions"
  },
  {
    id: "startup_18",
    name: "Ezovion Solutions Private Limited",
    tagline: "Healthcare innovation and medtech solutions",
    description: "A promising startup working on addressing critical healthcare challenges through technology and innovation.",
    sector: "ai",
    sectorLabel: "AI & Digital Health",
    stage: "Prototyping",
    fundingRaised: "Undisclosed",
    grantSupport: "Incubated at HTIC",
    founders: [
      "Founding Team"
    ],
    patentStatus: "Under review",
    cdscoStatus: "Preparation",
    clinicalPartner: "TBD",
    website: "https://ezovion.com/",
    logo: "",
    initials: "ES",
    featured: false,
    impactMetric: "Developing innovative solutions"
  },
  {
    id: "limbex",
    name: "Limbex Orthopaedic and Prosthetic Solutions Private Limited",
    tagline: "Affordable bio-mimetic polycentric knee joints and 3D printed sockets",
    description: "Engineered high-durability prosthetic knee components fabricated in IIT Madras prototyping workshops, delivering natural fluid swinging gait for transfemoral amputees.",
    sector: "assistive",
    sectorLabel: "Assistive Technologies",
    stage: "Clinical Validation",
    fundingRaised: "₹1.8 Cr",
    grantSupport: "BIRAC Social Innovation SPARSH",
    founders: [
      "Arunmozhi Varman",
      "Dr. S. K. Dass"
    ],
    patentStatus: "2 Patents Granted",
    cdscoStatus: "Class A Registered",
    clinicalPartner: "Government Institute of Rehabilitation Medicine",
    logo: "/images/startups/Limbex_749c72.png",
    initials: "LX",
    impactMetric: "850+ amputees fitted with functional mobility joints",
    website: "https://htic.iitm.ac.in/mti/project/limbex-orthopaedic-and-prosthetic-solutions-pvt-ltd/"
  },
  {
    id: "startup_20",
    name: "Mayden SmartHealth Private Limited",
    tagline: "Healthcare innovation and medtech solutions",
    description: "A promising startup working on addressing critical healthcare challenges through technology and innovation.",
    sector: "ai",
    sectorLabel: "AI & Digital Health",
    stage: "Prototyping",
    fundingRaised: "Undisclosed",
    grantSupport: "Incubated at HTIC",
    founders: [
      "Founding Team"
    ],
    patentStatus: "Under review",
    cdscoStatus: "Preparation",
    clinicalPartner: "TBD",
    website: "https://www.mysmarthealth.in/",
    logo: "",
    initials: "MS",
    featured: false,
    impactMetric: "Developing innovative solutions"
  },
  {
    id: "startup_21",
    name: "Vyug Reality Solution Private Limited",
    tagline: "Healthcare innovation and medtech solutions",
    description: "A promising startup working on addressing critical healthcare challenges through technology and innovation.",
    sector: "ai",
    sectorLabel: "AI & Digital Health",
    stage: "Prototyping",
    fundingRaised: "Undisclosed",
    grantSupport: "Incubated at HTIC",
    founders: [
      "Founding Team"
    ],
    patentStatus: "Under review",
    cdscoStatus: "Preparation",
    clinicalPartner: "TBD",
    website: "https://htic.iitm.ac.in/mti/project/vyug-reality-solution-pvt-ltd/",
    logo: "",
    initials: "VR",
    featured: false,
    impactMetric: "Developing innovative solutions"
  },
  {
    id: "startup_22",
    name: "Plenome Technologies Private Limited",
    tagline: "Healthcare innovation and medtech solutions",
    description: "A promising startup working on addressing critical healthcare challenges through technology and innovation.",
    sector: "ai",
    sectorLabel: "AI & Digital Health",
    stage: "Prototyping",
    fundingRaised: "Undisclosed",
    grantSupport: "Incubated at HTIC",
    founders: [
      "Founding Team"
    ],
    patentStatus: "Under review",
    cdscoStatus: "Preparation",
    clinicalPartner: "TBD",
    website: "https://plenome.com/",
    logo: "",
    initials: "PT",
    featured: false,
    impactMetric: "Developing innovative solutions"
  },
  {
    id: "startup_23",
    name: "Swasthchain Private Limited",
    tagline: "Healthcare innovation and medtech solutions",
    description: "A promising startup working on addressing critical healthcare challenges through technology and innovation.",
    sector: "ai",
    sectorLabel: "AI & Digital Health",
    stage: "Prototyping",
    fundingRaised: "Undisclosed",
    grantSupport: "Incubated at HTIC",
    founders: [
      "Founding Team"
    ],
    patentStatus: "Under review",
    cdscoStatus: "Preparation",
    clinicalPartner: "TBD",
    website: "http://swasth.tech/",
    logo: "",
    initials: "SP",
    featured: false,
    impactMetric: "Developing innovative solutions"
  },
  {
    id: "startup_24",
    name: "Algorithm Health Private Limited",
    tagline: "Healthcare innovation and medtech solutions",
    description: "A promising startup working on addressing critical healthcare challenges through technology and innovation.",
    sector: "ai",
    sectorLabel: "AI & Digital Health",
    stage: "Prototyping",
    fundingRaised: "Undisclosed",
    grantSupport: "Incubated at HTIC",
    founders: [
      "Founding Team"
    ],
    patentStatus: "Under review",
    cdscoStatus: "Preparation",
    clinicalPartner: "TBD",
    website: "www.algohealthplus.com",
    logo: "",
    initials: "AH",
    featured: false,
    impactMetric: "Developing innovative solutions"
  },
  {
    id: "startup_25",
    name: "Malamed Health Science Private Limited",
    tagline: "Healthcare innovation and medtech solutions",
    description: "A promising startup working on addressing critical healthcare challenges through technology and innovation.",
    sector: "ai",
    sectorLabel: "AI & Digital Health",
    stage: "Prototyping",
    fundingRaised: "Undisclosed",
    grantSupport: "Incubated at HTIC",
    founders: [
      "Founding Team"
    ],
    patentStatus: "Under review",
    cdscoStatus: "Preparation",
    clinicalPartner: "TBD",
    website: "",
    logo: "",
    initials: "MH",
    featured: false,
    impactMetric: "Developing innovative solutions"
  },
  {
    id: "startup_26",
    name: "Dukil Medical and Technical Textiles Private Limited",
    tagline: "Healthcare innovation and medtech solutions",
    description: "A promising startup working on addressing critical healthcare challenges through technology and innovation.",
    sector: "ai",
    sectorLabel: "AI & Digital Health",
    stage: "Prototyping",
    fundingRaised: "Undisclosed",
    grantSupport: "Incubated at HTIC",
    founders: [
      "Founding Team"
    ],
    patentStatus: "Under review",
    cdscoStatus: "Preparation",
    clinicalPartner: "TBD",
    website: "www.clothmeds.com",
    logo: "",
    initials: "DM",
    featured: false,
    impactMetric: "Developing innovative solutions"
  },
  {
    id: "startup_27",
    name: "PramAna AyurTech Solutions Private Limited",
    tagline: "Healthcare innovation and medtech solutions",
    description: "A promising startup working on addressing critical healthcare challenges through technology and innovation.",
    sector: "ai",
    sectorLabel: "AI & Digital Health",
    stage: "Prototyping",
    fundingRaised: "Undisclosed",
    grantSupport: "Incubated at HTIC",
    founders: [
      "Founding Team"
    ],
    patentStatus: "Under review",
    cdscoStatus: "Preparation",
    clinicalPartner: "TBD",
    website: "https://pramanaayurtechsolutions.in/",
    logo: "",
    initials: "PA",
    featured: false,
    impactMetric: "Developing innovative solutions"
  },
  {
    id: "rediscan",
    name: "Prediscan medtech Private Limited",
    tagline: "AI thermal biomarker scanning for peripheral arterial disease & diabetic foot",
    description: "High-speed automated multispectral scanner mapping temperature gradients and plantar micro-circulation to prevent diabetic amputations before ulcers manifest.",
    sector: "diagnostics",
    sectorLabel: "Point-of-Care Diagnostics",
    stage: "Clinical Validation",
    fundingRaised: "₹2.5 Cr",
    grantSupport: "BIRAC BIG & DST PRAYAS",
    founders: [
      "Dr. Naveen Kumar",
      "S. Vignesh"
    ],
    patentStatus: "Patent Pending",
    cdscoStatus: "Class B Clinical Validation",
    clinicalPartner: "Chettinad Hospital & Research Institute",
    logo: "/images/startups/PrediScan-Logo_e5a4c6.png",
    initials: "PS",
    impactMetric: "Predictive alert accuracy >94% for ulcers",
    website: "https://www.prediscan.com/"
  },
  {
    id: "startup_29",
    name: "Innovative Health Connect Private Limited",
    tagline: "Healthcare innovation and medtech solutions",
    description: "A promising startup working on addressing critical healthcare challenges through technology and innovation.",
    sector: "ai",
    sectorLabel: "AI & Digital Health",
    stage: "Prototyping",
    fundingRaised: "Undisclosed",
    grantSupport: "Incubated at HTIC",
    founders: [
      "Founding Team"
    ],
    patentStatus: "Under review",
    cdscoStatus: "Preparation",
    clinicalPartner: "TBD",
    website: "https://walkfree.life/",
    logo: "",
    initials: "IH",
    featured: false,
    impactMetric: "Developing innovative solutions"
  },
  {
    id: "startup_30",
    name: "Acuvea Healthcare Technologies Private Limited",
    tagline: "Healthcare innovation and medtech solutions",
    description: "A promising startup working on addressing critical healthcare challenges through technology and innovation.",
    sector: "ai",
    sectorLabel: "AI & Digital Health",
    stage: "Prototyping",
    fundingRaised: "Undisclosed",
    grantSupport: "Incubated at HTIC",
    founders: [
      "Founding Team"
    ],
    patentStatus: "Under review",
    cdscoStatus: "Preparation",
    clinicalPartner: "TBD",
    website: "https://medicapp.in/about.php",
    logo: "",
    initials: "AH",
    featured: false,
    impactMetric: "Developing innovative solutions"
  },
  {
    id: "startup_31",
    name: "Healthiverse wellness Private Limited",
    tagline: "Healthcare innovation and medtech solutions",
    description: "A promising startup working on addressing critical healthcare challenges through technology and innovation.",
    sector: "ai",
    sectorLabel: "AI & Digital Health",
    stage: "Prototyping",
    fundingRaised: "Undisclosed",
    grantSupport: "Incubated at HTIC",
    founders: [
      "Founding Team"
    ],
    patentStatus: "Under review",
    cdscoStatus: "Preparation",
    clinicalPartner: "TBD",
    website: "",
    logo: "",
    initials: "HW",
    featured: false,
    impactMetric: "Developing innovative solutions"
  },
  {
    id: "bioni",
    name: "Bioni Healthtec Private Limited",
    tagline: "Smart biomechatronic rehabilitation & robotic gait training exoskeletons",
    description: "Modular wearable lower-limb motorized exoskeleton designed to assist stroke survivors and spinal cord injury patients in re-learning gait kinetics.",
    sector: "robotics",
    sectorLabel: "Surgical & Robotics",
    stage: "Prototyping",
    fundingRaised: "₹2.1 Cr",
    grantSupport: "DST NIDHI PRAYAS",
    founders: [
      "Gautam Raj",
      "Kavya S."
    ],
    patentStatus: "1 Patent Granted",
    cdscoStatus: "Class B Prototyping Stage",
    clinicalPartner: "CMC Vellore Physical Medicine & Rehab",
    logo: "/images/startups/Bioni-Logo_ed42a4.png",
    initials: "BH",
    impactMetric: "65 stroke patients in assisted rehabilitation"
  },
  {
    id: "startup_33",
    name: "AstralBeat Innovations Private Limited",
    tagline: "Healthcare innovation and medtech solutions",
    description: "A promising startup working on addressing critical healthcare challenges through technology and innovation.",
    sector: "ai",
    sectorLabel: "AI & Digital Health",
    stage: "Prototyping",
    fundingRaised: "Undisclosed",
    grantSupport: "Incubated at HTIC",
    founders: [
      "Founding Team"
    ],
    patentStatus: "Under review",
    cdscoStatus: "Preparation",
    clinicalPartner: "TBD",
    website: "https://www.astralbeat.in/",
    logo: "",
    initials: "AI",
    featured: false,
    impactMetric: "Developing innovative solutions"
  },
  {
    id: "startup_34",
    name: "Nambikkai Rehabilitation Devices Knee Private Limited",
    tagline: "Healthcare innovation and medtech solutions",
    description: "A promising startup working on addressing critical healthcare challenges through technology and innovation.",
    sector: "ai",
    sectorLabel: "AI & Digital Health",
    stage: "Prototyping",
    fundingRaised: "Undisclosed",
    grantSupport: "Incubated at HTIC",
    founders: [
      "Founding Team"
    ],
    patentStatus: "Under review",
    cdscoStatus: "Preparation",
    clinicalPartner: "TBD",
    website: "",
    logo: "",
    initials: "NR",
    featured: false,
    impactMetric: "Developing innovative solutions"
  },
  {
    id: "startup_35",
    name: "Subtlebotic Private Limited",
    tagline: "Healthcare innovation and medtech solutions",
    description: "A promising startup working on addressing critical healthcare challenges through technology and innovation.",
    sector: "ai",
    sectorLabel: "AI & Digital Health",
    stage: "Prototyping",
    fundingRaised: "Undisclosed",
    grantSupport: "Incubated at HTIC",
    founders: [
      "Founding Team"
    ],
    patentStatus: "Under review",
    cdscoStatus: "Preparation",
    clinicalPartner: "TBD",
    website: "https://www.subtlebotic.in/",
    logo: "",
    initials: "SP",
    featured: false,
    impactMetric: "Developing innovative solutions"
  },
  {
    id: "qualentra",
    name: "Qualentra global private limited",
    tagline: "Automated institutional intelligence for global MedTech QA, testing, and regulatory affairs",
    description: "Democratizing medical device regulatory compliance, ISO 13485 technical file compilation, and risk analysis dossiers for emerging biomedical inventors through validated clinical intelligence engines.",
    sector: "ai",
    sectorLabel: "AI & Digital Health",
    stage: "Commercial",
    fundingRaised: "₹4.5 Cr",
    grantSupport: "BIRAC WinER & IITM Seed",
    founders: [
      "Priya Natarajan",
      "Siddharth Rao"
    ],
    patentStatus: "Copyright & Provisional Patent",
    cdscoStatus: "Certified Software as Medical Device (SaMD)",
    clinicalPartner: "Sri Ramachandra Medical Centre",
    logo: "/images/startups/QG-07_5faaf5.jpg",
    initials: "QG",
    featured: true,
    womenLed: true,
    impactMetric: "80% reduction in regulatory audit preparation time",
    website: "https://qualentraglobal.com/"
  },
  {
    id: "startup_37",
    name: "SDeeparogya AI Private Limited",
    tagline: "Healthcare innovation and medtech solutions",
    description: "A promising startup working on addressing critical healthcare challenges through technology and innovation.",
    sector: "ai",
    sectorLabel: "AI & Digital Health",
    stage: "Prototyping",
    fundingRaised: "Undisclosed",
    grantSupport: "Incubated at HTIC",
    founders: [
      "Founding Team"
    ],
    patentStatus: "Under review",
    cdscoStatus: "Preparation",
    clinicalPartner: "TBD",
    website: "https://www.deepaarogya.com/",
    logo: "",
    initials: "SA",
    featured: false,
    impactMetric: "Developing innovative solutions"
  },
  {
    id: "startup_38",
    name: "CliniConnect Private Limited",
    tagline: "Healthcare innovation and medtech solutions",
    description: "A promising startup working on addressing critical healthcare challenges through technology and innovation.",
    sector: "ai",
    sectorLabel: "AI & Digital Health",
    stage: "Prototyping",
    fundingRaised: "Undisclosed",
    grantSupport: "Incubated at HTIC",
    founders: [
      "Founding Team"
    ],
    patentStatus: "Under review",
    cdscoStatus: "Preparation",
    clinicalPartner: "TBD",
    website: "",
    logo: "",
    initials: "CP",
    featured: false,
    impactMetric: "Developing innovative solutions"
  },
  {
    id: "startup_39",
    name: "Diab Wellness Private Limited",
    tagline: "Healthcare innovation and medtech solutions",
    description: "A promising startup working on addressing critical healthcare challenges through technology and innovation.",
    sector: "ai",
    sectorLabel: "AI & Digital Health",
    stage: "Prototyping",
    fundingRaised: "Undisclosed",
    grantSupport: "Incubated at HTIC",
    founders: [
      "Founding Team"
    ],
    patentStatus: "Under review",
    cdscoStatus: "Preparation",
    clinicalPartner: "TBD",
    website: "https://diax.ai/",
    logo: "",
    initials: "DW",
    featured: false,
    impactMetric: "Developing innovative solutions"
  },
  {
    id: "startup_40",
    name: "Klariti TEC Technologies Private Limited",
    tagline: "Healthcare innovation and medtech solutions",
    description: "A promising startup working on addressing critical healthcare challenges through technology and innovation.",
    sector: "ai",
    sectorLabel: "AI & Digital Health",
    stage: "Prototyping",
    fundingRaised: "Undisclosed",
    grantSupport: "Incubated at HTIC",
    founders: [
      "Founding Team"
    ],
    patentStatus: "Under review",
    cdscoStatus: "Preparation",
    clinicalPartner: "TBD",
    website: "",
    logo: "",
    initials: "KT",
    featured: false,
    impactMetric: "Developing innovative solutions"
  },
  {
    id: "startup_41",
    name: "Nurture Bridge Private Limited",
    tagline: "Healthcare innovation and medtech solutions",
    description: "A promising startup working on addressing critical healthcare challenges through technology and innovation.",
    sector: "ai",
    sectorLabel: "AI & Digital Health",
    stage: "Prototyping",
    fundingRaised: "Undisclosed",
    grantSupport: "Incubated at HTIC",
    founders: [
      "Founding Team"
    ],
    patentStatus: "Under review",
    cdscoStatus: "Preparation",
    clinicalPartner: "TBD",
    website: "https://www.nurturebridgetech.com/",
    logo: "",
    initials: "NB",
    featured: false,
    impactMetric: "Developing innovative solutions"
  },
  {
    id: "startup_42",
    name: "CuraCraft Designs Private Limited",
    tagline: "Healthcare innovation and medtech solutions",
    description: "A promising startup working on addressing critical healthcare challenges through technology and innovation.",
    sector: "ai",
    sectorLabel: "AI & Digital Health",
    stage: "Prototyping",
    fundingRaised: "Undisclosed",
    grantSupport: "Incubated at HTIC",
    founders: [
      "Founding Team"
    ],
    patentStatus: "Under review",
    cdscoStatus: "Preparation",
    clinicalPartner: "TBD",
    website: "https://curacraftdesigns.framer.website/",
    logo: "",
    initials: "CD",
    featured: false,
    impactMetric: "Developing innovative solutions"
  },
  {
    id: "startup_43",
    name: "ERYTOS Technology Private Limited",
    tagline: "Healthcare innovation and medtech solutions",
    description: "A promising startup working on addressing critical healthcare challenges through technology and innovation.",
    sector: "ai",
    sectorLabel: "AI & Digital Health",
    stage: "Prototyping",
    fundingRaised: "Undisclosed",
    grantSupport: "Incubated at HTIC",
    founders: [
      "Founding Team"
    ],
    patentStatus: "Under review",
    cdscoStatus: "Preparation",
    clinicalPartner: "TBD",
    website: "",
    logo: "",
    initials: "ET",
    featured: false,
    impactMetric: "Developing innovative solutions"
  },
  {
    id: "startup_44",
    name: "nGenCare Solutions Private Limited",
    tagline: "Healthcare innovation and medtech solutions",
    description: "A promising startup working on addressing critical healthcare challenges through technology and innovation.",
    sector: "ai",
    sectorLabel: "AI & Digital Health",
    stage: "Prototyping",
    fundingRaised: "Undisclosed",
    grantSupport: "Incubated at HTIC",
    founders: [
      "Founding Team"
    ],
    patentStatus: "Under review",
    cdscoStatus: "Preparation",
    clinicalPartner: "TBD",
    website: "https://www.ngencare.com",
    logo: "",
    initials: "NS",
    featured: false,
    impactMetric: "Developing innovative solutions"
  },
  {
    id: "startup_45",
    name: "Tridcian Medtech Private Limited",
    tagline: "Healthcare innovation and medtech solutions",
    description: "A promising startup working on addressing critical healthcare challenges through technology and innovation.",
    sector: "ai",
    sectorLabel: "AI & Digital Health",
    stage: "Prototyping",
    fundingRaised: "Undisclosed",
    grantSupport: "Incubated at HTIC",
    founders: [
      "Founding Team"
    ],
    patentStatus: "Under review",
    cdscoStatus: "Preparation",
    clinicalPartner: "TBD",
    website: "",
    logo: "",
    initials: "TM",
    featured: false,
    impactMetric: "Developing innovative solutions"
  }
];

export const PROGRAMS_DATA: Program[] = [
  {
    id: 'sparsh',
    title: 'BIRAC SPARSH',
    subTitle: 'Social Innovation Program for Products: Healthcare & Diagnostics',
    category: 'birac',
    categoryLabel: 'BIRAC Supported',
    grantAmount: '₹50,000 / month + ₹5L Seed',
    duration: '18 Months',
    stageTarget: 'Idea to Proof of Concept (TRL 1–3)',
    description: 'Targeted fellowship and project funding for maternal-child health, aging, diagnostics, and disability solutions tailored specifically for Tier 2/3 populations.',
    deliverables: ['Clinical Need Dossier', 'Functional Benchtop Prototype', 'Provisional Patent Application'],
    eligibility: 'Indian citizens, biomedical engineers, medical graduates, or registered Indian startups < 3 years old.'
  },
  {
    id: 'birac-big',
    title: 'BIRAC BIG',
    subTitle: 'Biotechnology Ignition Grant for MedTech Deep-Tech Pioneers',
    category: 'birac',
    categoryLabel: 'BIRAC Supported',
    grantAmount: 'Up to ₹50 Lakhs (Non-Dilutive)',
    duration: '18 Months',
    stageTarget: 'TRL 3 to TRL 5 (Proof of Concept to Working Prototype)',
    description: 'Flagship sovereign grant enabling high-risk early-stage innovators to establish proof-of-concept and build working laboratory prototypes in clinical settings.',
    deliverables: ['ISO Class Cleanroom Prototyping', 'Safety Pre-testing Reports', 'Pre-clinical validation package'],
    eligibility: 'Individual innovators or registered private limited startups (< 5 years) with at least 51% Indian shareholding.'
  },
  {
    id: 'prayas',
    title: 'DST NIDHI PRAYAS',
    subTitle: 'Promoting and Accelerating Young and Aspiring Innovators',
    category: 'dst',
    categoryLabel: 'DST NIDHI',
    grantAmount: 'Up to ₹10 Lakhs Prototyping Grant',
    duration: '12–18 Months',
    stageTarget: 'Hardware Prototyping (TRL 3–4)',
    description: 'Dedicated prototyping assistance for hardware medical devices, offering rapid fabrication bench access, micro-machining, and component procurement.',
    deliverables: ['Physical 3D printed & CNC milled functional casing', 'Multi-layer medical PCB assembly', 'Verification bench reports'],
    eligibility: 'Aspiring inventors with proprietary hardware ideas ready for physical benchtop translation.'
  },
  {
    id: 'eir',
    title: 'NIDHI EIR',
    subTitle: 'Entrepreneurs-in-Residence Fellowship Program',
    category: 'dst',
    categoryLabel: 'DST NIDHI',
    grantAmount: '₹30,000 / month Fellowship stipend',
    duration: '12 Months',
    stageTarget: 'Fellow Incubation (TRL 1–3)',
    description: 'Monthly subsistence fellowship enabling aspiring biomedical founders and clinical researchers to leave employment and dedicate full-time focus to venture creation.',
    deliverables: ['Market discovery & clinical interviews', 'Intellectual Property disclosure', 'Company incorporation support'],
    eligibility: 'Full-time dedicated founders with biomedical, scientific, or engineering degrees.'
  },
  {
    id: 'accelerator',
    title: 'NIDHI Accelerator',
    subTitle: 'Fast-Tracking Clinical Validation to Market Deployment',
    category: 'dst',
    categoryLabel: 'DST NIDHI',
    grantAmount: 'Structured Cohort & Investor Syndicate Access',
    duration: '6 Months Intensive',
    stageTarget: 'Scale & Commercialization (TRL 6–8)',
    description: 'Structured intensive cohort designed to fast-track clinical trial approvals, hospital pilot deployment, ISO 13485 audit readiness, and private venture readiness.',
    deliverables: ['Form MD-14 Test License', 'Hospital Pilot Agreement with apex partners', 'Series A Syndicate Roadshow'],
    eligibility: 'Incorporated startups with locked prototypes and preliminary clinical observations.'
  },
  {
    id: 'csr-grants',
    title: 'Corporate & CSR MedTech Grants',
    subTitle: 'Philanthropic & Industry Co-Sponsored Thematic Challenges',
    category: 'institutional',
    categoryLabel: 'Institutional & Industry',
    grantAmount: 'Bespoke (₹15L – ₹1.2 Cr)',
    duration: '12–24 Months',
    stageTarget: 'Translational Calls & Pilot Deployments',
    description: 'Customized grants sponsored by multinational healthcare conglomerates and philanthropic trusts for targeted diagnostic challenges in oncology, cardiology, and pediatrics.',
    deliverables: ['Public health pilot deployment', 'Impact assessment documentation', 'Clinical health economics evaluation'],
    eligibility: 'Startups and academic-clinical teams addressing targeted thematic problem statements.'
  }
];

export const TEAM_DATA: TeamMember[] = [
  {
    id: 'ashok-jhunjhunwala',
    name: 'Dr. Ashok Jhunjhunwala',
    role: 'Chairman, HTIC Steering Committee',
    department: 'Dept. of Electrical Engineering',
    institution: 'IIT Madras',
    category: 'STEERING_COMMITTEE',
    categoryLabel: 'Steering Committee',
    bio: 'Pioneer in institutional innovation, telecommunications, and translational engineering at IIT Madras; Founding force and Chairman guiding HTIC strategic vision and institutional governance.',
    image: '/images/team/Prof-Ashok-e1488460402401_bf0820.jpg',
    expertise: ['Translational Engineering', 'Institutional Strategy', 'Ecosystem Incubation']
  },
  {
    id: 'manish-diwan',
    name: 'Dr. Manish Diwan',
    role: 'Head Strategic Partnerships & Entrepreneurship Development',
    department: 'Biotechnology Industry Research Assistance Council (BIRAC)',
    institution: 'DBT, Govt of India',
    category: 'STEERING_COMMITTEE',
    categoryLabel: 'Steering Committee',
    bio: 'Spearheading national biotechnology entrepreneurship frameworks, translational grants, and institutional BioNEST partnerships to scale indigenous MedTech ventures across India.',
    image: '/images/team/Manish-Diwan_c8a6cd.jpg',
    expertise: ['Biotechnology Policy', 'Sovereign Grants', 'Public-Private Partnerships']
  },
  {
    id: 'mohanasankar',
    name: 'Dr. Mohanasankar Sivaprakasam',
    role: 'Faculty-in-Charge, HTIC',
    department: 'Dept. of Electrical Engineering',
    institution: 'IIT Madras',
    category: 'STEERING_COMMITTEE',
    categoryLabel: 'Steering Committee',
    bio: 'Pioneer in biomedical device translation, leading translational R&D, clinical engineering, and device innovation at HTIC, bridging electrical engineering with healthcare and medical technology.',
    image: '/images/team/Dr-mohanasankar-e1488460448498_091325.jpg',
    expertise: ['Biomedical Instrumentation', 'Cardiovascular Telemetry', 'Clinical Translation']
  },
  {
    id: 'ravishankar-ramanathan',
    name: 'Dr. Ravishankar Ramanathan',
    role: 'Chief Executive Officer (CEO)',
    department: 'HTIC MedTech Incubator',
    institution: 'IIT Madras Research Park',
    category: 'STEERING_COMMITTEE',
    categoryLabel: 'Steering Committee',
    bio: 'Leading executive operations, commercial translation, startup incubation acceleration, and strategic industry-clinical partnerships at HTIC MedTech Incubator.',
    image: '/images/team/Ravishankar_410b2e.jpeg',
    expertise: ['Executive Operations', 'Venture Acceleration', 'Industrial Technology Alliances']
  },
  {
    id: 'dr-suresh-david',
    name: 'Dr. Suresh David',
    role: 'Head of Emergency Medicine & Clinical Advisor',
    department: 'Dept. of Emergency Medicine',
    institution: 'Christian Medical College (CMC), Vellore',
    category: 'CLINICAL_ADVISORY_BOARD',
    categoryLabel: 'Clinical Advisory Board',
    bio: 'Renowned clinical expert in trauma resuscitation, emergency medicine protocols, and field testing of point-of-care medical devices across rural and tertiary hospitals.',
    image: '/images/team/11_d80209.jpg',
    expertise: ['Emergency Medicine', 'Bedside Feasibility Trials', 'Trauma Protocols']
  },
  {
    id: 'dr-sunil-shroff',
    name: 'Dr. Sunil Shroff',
    role: 'Senior Consultant Urologist & Trustee',
    department: 'Madras Medical Mission & MOHAN Foundation',
    institution: 'Madras Medical Mission',
    category: 'CLINICAL_ADVISORY_BOARD',
    categoryLabel: 'Clinical Advisory Board',
    bio: 'Pioneering urologist, renal transplant surgeon, and clinical innovator guiding surgical device trials, regulatory protocols, and patient safety clearances.',
    image: '/images/team/Dr-Sunil_67be88.jpg',
    expertise: ['Urological Devices', 'Transplant Technologies', 'Clinical Ethics Clearances']
  },
  {
    id: 'dr-roy-santosham',
    name: 'Dr. J D Roy Santosham M.D',
    role: 'Professor, Department of Radiology',
    department: 'Radiology & Imaging Sciences',
    institution: 'Sri Ramachandra Institute of Higher Education',
    category: 'CLINICAL_ADVISORY_BOARD',
    categoryLabel: 'Clinical Advisory Board',
    bio: 'Apex medical imaging and cross-sectional diagnostic authority supervising clinical validation protocols for HTIC imaging innovations, ultrasound modules, and CT guidance systems.',
    image: '/images/team/drroy_75e57c.jpg',
    expertise: ['Interventional Radiology', 'Ultrasound Modalities', 'Imaging Validation']
  },
  {
    id: 'dr-palaniappan',
    name: 'Dr. T Palaniappan',
    role: 'Chief Executive Officer & Founder',
    department: 'Executive Clinical Leadership',
    institution: 'Medway Hospitals',
    category: 'CLINICAL_ADVISORY_BOARD',
    categoryLabel: 'Clinical Advisory Board',
    bio: 'Hospital administrator and critical care leader facilitating observational bed-side trials, ICU pilot installations, and hospital procurement pathways for incubatees.',
    image: '/images/team/DrTP-e1554371484913_3b84ed.jpg',
    expertise: ['Hospital Procurement', 'Critical Care Protocols', 'Health Economics']
  },
  {
    id: 'dr-jayaraj-joseph',
    name: 'Dr. Jayaraj Joseph',
    role: 'Assistant Research Professor',
    department: 'HTIC, Dept. of Electrical Engineering',
    institution: 'IIT Madras',
    category: 'TEAM',
    categoryLabel: 'Team',
    bio: 'Directing bio-instrumentation R&D, cardiovascular sensor telemetry, non-invasive arterial stiffness meters (ARTSENS), and medical hardware prototyping benches.',
    image: '/images/team/Jayaraj_Joseph_04a228.jpg',
    expertise: ['Cardiovascular Instrumentation', 'ARTSENS Translation', 'Signal Processing']
  },
  {
    id: 'dr-keerthi-ram',
    name: 'Dr. Keerthi Ram',
    role: 'Head of AI & Medical Image Computing',
    department: 'HTIC, Dept. of Electrical Engineering',
    institution: 'IIT Madras',
    category: 'TEAM',
    categoryLabel: 'Team',
    bio: 'Spearheading clinical artificial intelligence, automated ophthalmic diagnostics, ultrasound image segmentation, and edge machine learning deployment at HTIC.',
    image: '/images/team/Keerthi-Ram_bc3d3c.jpg',
    expertise: ['Medical Image Computing', 'Ophthalmology AI', 'Deep Learning Architecture']
  },
  {
    id: 'dr-nabeel',
    name: 'Dr. Nabeel P M',
    role: 'Senior Project Officer - Arterial Hemodynamics',
    department: 'Biomedical Telemetry & Sensors',
    institution: 'HTIC, IIT Madras',
    category: 'TEAM',
    categoryLabel: 'Team',
    bio: 'Lead researcher on pulse wave velocity sensors, non-invasive central blood pressure tracking, and clinical calibration rigs for cardiac diagnostics.',
    image: '/images/team/Nabeel_3ba76a.jpeg',
    expertise: ['Pulse Wave Telemetry', 'Clinical Sensor Rigging', 'Hemodynamics']
  },
  {
    id: 'preejith-sp',
    name: 'Mr. Preejith S P',
    role: 'Senior Project Officer - Embedded Systems',
    department: 'Hardware Architecture & IoT',
    institution: 'HTIC, IIT Madras',
    category: 'TEAM',
    categoryLabel: 'Team',
    bio: 'Specialist in low-power biomedical microcontrollers, medical firmware safety loops, multi-layer PCB routing, and IEC 60601 electrical safety compliance.',
    image: '/images/team/preejith-SP-e1489540932449_164d9d.jpg',
    expertise: ['Embedded Firmware', 'IEC 60601 Safety', 'Medical PCB Design']
  },
  {
    id: 'manoj-kumar',
    name: 'Mr. ManojKumar Lakshmanan',
    role: 'Project Associate - Prototyping & Cleanrooms',
    department: 'Prototyping & Fabrication Lab',
    institution: 'HTIC, IIT Madras Research Park',
    category: 'TEAM',
    categoryLabel: 'Team',
    bio: 'Managing ISO Class 7/8 cleanrooms, rapid biocompatible 3D stereolithography, precision CNC milling, and mechanical enclosure design for incubatee prototypes.',
    image: '/images/team/Manoj_be5614.jpeg',
    expertise: ['Cleanroom Operations', 'SLA 3D Printing', 'Mechanical Prototyping']
  },
  {
    id: 'mohana-priya',
    name: 'Ms. Mohana Priya',
    role: 'Incubation Operations Manager',
    department: 'Incubation & Program Administration',
    institution: 'HTIC MedTech Incubator',
    category: 'TEAM',
    categoryLabel: 'Team',
    bio: 'Coordinating cohort onboarding, BIRAC/DST grant progress monitoring, partner hospital trial liaisons, and venture compliance reporting.',
    image: '/images/team/priya-Copy_d083ef.jpg',
    expertise: ['Incubation Management', 'Grant Compliance', 'Cohort Mentoring']
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: 'gal-cleanroom-1',
    url: '/images/gallery/Annotation-2020-03-03-125525-150x150_e8401f.png',
    caption: 'ISO Class 7 Cleanroom & Biomedical Assembly Rig',
    category: 'Cleanrooms & Infrastructure'
  },
  {
    id: 'gal-cleanroom-2',
    url: '/images/gallery/Annotation-2020-03-03-125559-150x150_263beb.png',
    caption: 'Sterile Micro-Machining & Medical Device Testing Rig',
    category: 'Cleanrooms & Infrastructure'
  },
  {
    id: 'gal-lab-1',
    url: '/images/gallery/Annotation-2020-03-03-125644-150x150_eee2d3.png',
    caption: 'Hardware Prototyping Bench & RF Analyzers',
    category: 'Electronics & Firmware'
  },
  {
    id: 'gal-lab-2',
    url: '/images/gallery/Annotation-2020-03-03-125744-150x150_8e0bd7.png',
    caption: 'High-Precision 3D SLA Medical Printing Station',
    category: 'Prototyping Facilities'
  },
  {
    id: 'gal-lab-3',
    url: '/images/gallery/Annotation-2020-03-03-125807-150x150_76f545.png',
    caption: 'Clinical Phantom Calibration & Sensor Testing Suite',
    category: 'Clinical Verification'
  },
  {
    id: 'gal-conclave-1',
    url: '/images/gallery/Annotation-2020-03-03-125848-150x150_7c746c.png',
    caption: 'HTIC Healthcare Innovation Conclave at IIT Madras',
    category: 'Events & Conclaves'
  },
  {
    id: 'gal-conclave-2',
    url: '/images/gallery/Annotation-2020-03-03-125908-150x150_4b9c00.png',
    caption: 'MedTech Product Showcase & Live Demonstration to Clinicians',
    category: 'Showcases'
  },
  {
    id: 'gal-conclave-3',
    url: '/images/gallery/Annotation-2020-03-03-125931-150x150_ce21cb.png',
    caption: 'Surgical Robotics Telemetry & Phantom Needle Testing Demo',
    category: 'Robotics & Hardware'
  }
];

export const MILESTONES_DATA: Milestone[] = [
  {
    year: '2011',
    title: 'Establishment of HTIC',
    description: 'Joint initiative launched by IIT Madras and Department of Biotechnology (DBT), Govt. of India to address critical indigenous healthcare technology gaps.',
    badge: 'Inception'
  },
  {
    year: '2014',
    title: 'IITM Research Park Campus Expansion',
    description: 'Transitioned to dedicated 10,000+ sq.ft specialized facilities in D-Block, IIT Madras Research Park with electronics prototyping benches and biological testing suites.',
    badge: 'Infrastructure'
  },
  {
    year: '2016',
    title: 'BIRAC BioNEST Recognition',
    description: 'Sanctioned as an official BIRAC BioNEST incubation center, empowering HTIC to directly administer BIRAC BIG and SPARSH seed grants.',
    badge: 'Accreditation'
  },
  {
    year: '2019',
    title: 'ISO Class 7/8 Cleanroom Commissioning',
    description: 'Operationalized sterile cleanrooms for medical grade Class B/C devices, biocompatible 3D stereolithography, and RF testing under IEC standards.',
    badge: 'Certification'
  },
  {
    year: '2022',
    title: '₹40+ Cr Grants & Clinical Network Expansion',
    description: 'Crossed 50 incubated ventures milestone with formal observational clinical trial nodes established across 25+ apex hospital networks.',
    badge: 'Clinical Scale'
  },
  {
    year: '2025–26',
    title: 'Next-Gen Surgical Robotics & Telemetry',
    description: 'Expanding focus into surgical robotics kinesthetics, AI-guided diagnostics, and Ayushman Bharat tier-2/3 public health deployment sandboxes.',
    badge: 'Current Era'
  }
];

export const PARTNERS_LOGOS = [
  { name: 'IIT Madras Incubation Cell', icon: 'school', type: 'Academic Anchor', logo: '/images/home/IITMIC-logo-e1490164436990_aa4f7f.jpg' },
  { name: 'IITM Bio-incubator', icon: 'biotech', type: 'Grant Partner', logo: '/images/home/bio-incubator-logo-e1490164726616_a1d76e.jpg' },
  { name: 'DBT & BIRAC BioNEST', icon: 'science', type: 'Sovereign Sponsor', logo: '/images/home/logo-supporters-new_e9603b.png' },
  { name: 'HTIC MedTech Core', icon: 'verified', type: 'Technology Partner', logo: '/images/home/logo-mti-option10_0f7515.png' },
  { name: 'Apollo Hospitals', icon: 'local_hospital', type: 'Clinical Trial Site' },
  { name: 'CMC Vellore', icon: 'medical_services', type: 'Clinical Trial Site' },
  { name: 'Sankara Nethralaya', icon: 'visibility', type: 'Clinical Trial Site' },
  { name: 'Sri Ramachandra Hospital', icon: 'emergency', type: 'Clinical Trial Site' },
  { name: 'Tata Memorial Centre', icon: 'health_and_safety', type: 'Clinical Trial Site' },
  { name: 'CDSCO MDR 2017', icon: 'gavel', type: 'Regulatory Aligned' }
];

export const FAQS_DATA = [
  {
    question: 'Do I need an incorporated company before applying to HTIC–MTI?',
    answer: 'No. Individual innovators, researchers, academic faculty, and clinicians can apply at the "The Curious" and "The Builder" stages. If selected for advanced incubation or seed grants, our legal, IP, and compliance advisory assists with company incorporation and DPIIT recognition within 6 months.'
  },
  {
    question: 'Can practicing clinicians continue hospital work while participating in incubation?',
    answer: 'Yes, absolutely. Many of our most impactful ventures are clinician-engineer co-founder partnerships. Clinicians maintain their clinical rounds while serving as Chief Medical Officers (CMO) or Clinical Investigators, paired directly with full-time IIT Madras biomedical engineers based in our labs.'
  },
  {
    question: 'What is the conversion rate for BIRAC BIG and DST NIDHI grants at HTIC?',
    answer: 'HTIC incubatees enjoy one of India’s highest national grant selection rates (>70% at preliminary rounds). Because every application undergoes internal technical vetting, prior-art scrutiny, and hospital validation review prior to submission, proposals stand out for their empirical maturity.'
  },
  {
    question: 'Who owns the Intellectual Property (IP) developed during incubation?',
    answer: 'Startups and innovators retain complete ownership of their proprietary IP. HTIC does not claim ownership of founder IP. If IIT Madras faculty or research equipment is utilized for co-development, standard IIT Madras institutional technology transfer and licensing guidelines apply fairly and transparently.'
  },
  {
    question: 'What facilities are available on-site at IITM Research Park?',
    answer: 'Incubatees gain access to 10,000+ sq.ft of advanced infrastructure: ISO Class 7/8 certified cleanrooms, Formlabs biocompatible SLA 3D printing, Keysight high-GHz RF test suites, SMD rework and micro-machining labs, phantom calibration rigs, and dedicated co-working desks.'
  },
  {
    question: 'How do clinical trial partnerships work with apex hospitals?',
    answer: 'HTIC maintains bilateral institutional Memorandums of Understanding (MoUs) with Apollo Hospitals, CMC Vellore, Sankara Nethralaya, and Sri Ramachandra Institute. We facilitate Institutional Ethics Committee (IEC) dossier preparations, clinical protocol drafting, and bed-side observational trial slots.'
  }
];
