export type Lang = "en" | "fr" | "ar" | "zh";

type Item = { title: string; text: string };
type Slide = { sector: "land" | "mining" | "marine"; image: string; label: string; title: string; text: string };
type Sector = { key: "land" | "mining" | "marine"; image: string; label: string; title: string; text: string };

export type Dictionary = {
  nav: {
    home: string;
    about: string;
    services: string;
    coverage: string;
    insights: string;
    contact: string;
    requestQuote: string;
  };
  hero: {
    badge: string;
    title1: string;
    title2: string;
    titleAccent: string;
    subtitle: string;
    cta1: string;
    cta2: string;
    slides: ReadonlyArray<Slide>;
    highlights: ReadonlyArray<Item>;
  };
  features: { eyebrow: string; title: string; items: ReadonlyArray<Item> };
  about: {
    eyebrow: string;
    title: string;
    p1: string;
    p2: string;
    button: string;
    centerLabel: string;
    centerTitle: string;
    sectors: ReadonlyArray<Sector>;
  };
  mission: {
    eyebrow: string;
    title: string;
    missionTitle: string;
    missionText: string;
    visionTitle: string;
    visionText: string;
  };
  services: { eyebrow: string; title: string; items: ReadonlyArray<Item> };
  portCoverage: {
    eyebrow: string;
    title: string;
    subtitle: string;
    mapLabel: string;
    points: ReadonlyArray<Item>;
  };
  process: { eyebrow: string; title: string; steps: ReadonlyArray<Item> };
  cta: { title: string; subtitle: string; button1: string; button2: string };
  form: {
    eyebrow: string;
    title: string;
    subtitle: string;
    name: string;
    namePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    phone: string;
    phonePlaceholder: string;
    company: string;
    companyPlaceholder: string;
    sector: string;
    sectorPlaceholder: string;
    sectorLand: string;
    sectorMining: string;
    sectorMarine: string;
    description: string;
    descriptionPlaceholder: string;
    submit: string;
    sending: string;
    success: string;
    error: string;
    required: string;
  };
  footer: {
    tagline: string;
    quickLinks: string;
    servicesTitle: string;
    contactTitle: string;
    rights: string;
    privacy: string;
    terms: string;
    address: string;
  };
};

export const translations: Record<Lang, Dictionary> = {
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      services: "Services",
      coverage: "Coverage",
      insights: "Process",
      contact: "Contact Us",
      requestQuote: "Request a Quote",
    },
    hero: {
      badge: "Petroleum supply across land, mining & marine",
      title1: "Fuel for every",
      title2: "operation, on",
      titleAccent: "every front",
      subtitle:
        "We deliver petroleum products to service stations, mining sites, and vessels — with the same standards of safety, traceability and speed across every sector.",
      cta1: "Start a Project",
      cta2: "Our Services",
      slides: [
        {
          sector: "land",
          image: "/station.jpg",
          label: "Land",
          title: "Service stations & on-road logistics",
          text: "Reliable supply for retail and commercial networks.",
        },
        {
          sector: "mining",
          image: "/minier.jpg",
          label: "Mining",
          title: "Mining sites & heavy operations",
          text: "Bulk fuel and lubricants delivered where you operate.",
        },
        {
          sector: "marine",
          image: "/soute.jpg",
          label: "Marine",
          title: "Marine bunkering at Abidjan Port",
          text: "VLSFO, MGO, HSFO and LSMGO for vessels and operators.",
        },
      ],
      highlights: [
        { title: "3 sectors covered", text: "Land, mining and marine" },
        { title: "Local team, national reach", text: "Côte d'Ivoire & beyond" },
        { title: "24/7 operations", text: "Quotes and dispatch around the clock" },
        { title: "Verified quality", text: "Tested, compliant, traceable" },
      ],
    },
    features: {
      eyebrow: "Our expertise",
      title: "One supplier, three sectors",
      items: [
        { title: "Service Stations", text: "Petroleum products distributed to retail and commercial fuel networks." },
        { title: "Mining Sites", text: "Bulk fuel and lubricants delivered to remote and active mining operations." },
        { title: "Marine Bunkering", text: "VLSFO, MGO, HSFO and LSMGO supplied vessel-side at Abidjan Port." },
        { title: "Logistics & Dispatch", text: "End-to-end coordination for road, port and on-site delivery." },
        { title: "Quality & Compliance", text: "Strict QA processes aligned with national and IMO standards." },
      ],
    },
    about: {
      eyebrow: "About SEV-OIL",
      title: "Three sectors. One trusted partner.",
      p1: "SEV-OIL supplies petroleum products to service stations, mining sites and vessels — connecting on-road, on-site and at-sea operations under one operator you can rely on.",
      p2: "Same team, same standards, same accountability — whether we're filling a station forecourt, a mining truck fleet or a vessel at Abidjan Port.",
      button: "Our mission & vision",
      centerLabel: "One system",
      centerTitle: "3 sectors. 1 partner.",
      sectors: [
        {
          key: "land",
          image: "/station.jpg",
          label: "Land",
          title: "Service stations",
          text: "Retail & commercial networks across Côte d'Ivoire.",
        },
        {
          key: "mining",
          image: "/minier.jpg",
          label: "Mining",
          title: "Mining operations",
          text: "Bulk fuel and lubricants for active sites.",
        },
        {
          key: "marine",
          image: "/soute.jpg",
          label: "Marine",
          title: "Marine bunkering",
          text: "Ship-to-ship and vessel-side supply.",
        },
      ],
    },
    mission: {
      eyebrow: "What drives us",
      title: "Mission & Vision",
      missionTitle: "Our Mission",
      missionText:
        "Power West African operators on land, in mining sites and at sea with petroleum products that are reliable, transparent and delivered on time — every time.",
      visionTitle: "Our Vision",
      visionText:
        "Become the most trusted multi-sector petroleum partner in the region, recognised for operational excellence, safety, and the way we connect land, mining and marine operations under one accountable team.",
    },
    services: {
      eyebrow: "What we do",
      title: "Services across the supply chain",
      items: [
        { title: "Service Station Supply", text: "Reliable distribution to retail and commercial fuel stations." },
        { title: "Mining Site Delivery", text: "Bulk fuel and lubricants to active and remote mining operations." },
        { title: "Marine Bunkering", text: "Ship-to-ship and vessel-side fueling at Abidjan Port." },
        { title: "Trading & Procurement", text: "Smart sourcing and flexible supply planning for all 3 sectors." },
        { title: "Logistics Coordination", text: "Road, port and on-site dispatch, all under one team." },
        { title: "Compliance & Support", text: "Documentation, traceability and 24/7 client support." },
      ],
    },
    portCoverage: {
      eyebrow: "National coverage",
      title: "Côte d'Ivoire, end to end",
      subtitle:
        "Anchored at Abidjan Port, our team covers the country — from coastal bunkering to inland mining sites and on-road station networks.",
      mapLabel: "Abidjan",
      points: [
        { title: "Anchored in Abidjan", text: "Marine operations from the port" },
        { title: "Inland reach", text: "Mining sites & station networks" },
        { title: "One accountable team", text: "Local knowledge, single contact" },
      ],
    },
    process: {
      eyebrow: "How we work",
      title: "Simple process, fast execution",
      steps: [
        { title: "Request Quote", text: "Tell us your sector, volume and delivery point." },
        { title: "Receive Offer", text: "Get a competitive offer within minutes." },
        { title: "Confirm Order", text: "Validate the offer and lock the schedule." },
        { title: "Execute Delivery", text: "On-road, on-site or vessel-side — handled by our team." },
        { title: "Documentation", text: "Receive all docs and finalise payment with full traceability." },
      ],
    },
    cta: {
      title: "Wherever you operate, we deliver.",
      subtitle: "Stations, mines or vessels — get a quote tailored to your sector and volumes within 24 hours.",
      button1: "Start your project",
      button2: "Learn more",
    },
    form: {
      eyebrow: "Start your project",
      title: "Tell us about your needs",
      subtitle: "Land, mining or marine — share a few details and we'll come back to you within 24 hours.",
      name: "Full name",
      namePlaceholder: "John Doe",
      email: "Email address",
      emailPlaceholder: "you@company.com",
      phone: "Phone",
      phonePlaceholder: "+225 ...",
      company: "Company (optional)",
      companyPlaceholder: "Your company",
      sector: "Sector",
      sectorPlaceholder: "Select a sector",
      sectorLand: "Land — Service stations",
      sectorMining: "Mining sites",
      sectorMarine: "Marine bunkering",
      description: "Project description",
      descriptionPlaceholder: "Volumes, delivery point, expected dates...",
      submit: "Send request",
      sending: "Sending...",
      success: "Thanks — we received your request and will reply within 24 hours.",
      error: "Something went wrong. Please try again or email us directly.",
      required: "Required",
    },
    footer: {
      tagline: "Petroleum supply for land, mining and marine. Local team, national reach, single accountable contact.",
      quickLinks: "Quick Links",
      servicesTitle: "Services",
      contactTitle: "Contact Us",
      rights: "© 2026 SEV-OIL Maritime & Logistique. All Rights Reserved.",
      privacy: "Privacy Policy",
      terms: "Terms & Conditions",
      address: "Abidjan Port, Abidjan, Côte d'Ivoire",
    },
  },
  fr: {
    nav: {
      home: "Accueil",
      about: "À propos",
      services: "Services",
      coverage: "Couverture",
      insights: "Démarche",
      contact: "Contact",
      requestQuote: "Demander un devis",
    },
    hero: {
      badge: "Produits pétroliers : terrestre, minier & maritime",
      title1: "Du carburant pour",
      title2: "chaque opération,",
      titleAccent: "sur tous les fronts",
      subtitle:
        "Nous livrons des produits pétroliers aux stations-service, sites miniers et navires — avec les mêmes standards de sécurité, de traçabilité et de rapidité dans chaque secteur.",
      cta1: "Démarrer un projet",
      cta2: "Nos services",
      slides: [
        {
          sector: "land",
          image: "/station.jpg",
          label: "Terrestre",
          title: "Stations-service & logistique routière",
          text: "Approvisionnement fiable pour les réseaux de distribution.",
        },
        {
          sector: "mining",
          image: "/minier.jpg",
          label: "Minier",
          title: "Sites miniers & opérations lourdes",
          text: "Carburant en vrac et lubrifiants livrés là où vous opérez.",
        },
        {
          sector: "marine",
          image: "/soute.jpg",
          label: "Maritime",
          title: "Soutage maritime à Abidjan",
          text: "VLSFO, MGO, HSFO et LSMGO pour navires et opérateurs.",
        },
      ],
      highlights: [
        { title: "3 secteurs couverts", text: "Terrestre, minier et maritime" },
        { title: "Équipe locale, portée nationale", text: "Côte d'Ivoire et au-delà" },
        { title: "Opérations 24/7", text: "Devis et expédition en continu" },
        { title: "Qualité vérifiée", text: "Testée, conforme, traçable" },
      ],
    },
    features: {
      eyebrow: "Notre expertise",
      title: "Un fournisseur, trois secteurs",
      items: [
        { title: "Stations-service", text: "Distribution de produits pétroliers aux réseaux de stations." },
        { title: "Sites miniers", text: "Carburant en vrac et lubrifiants livrés sur sites actifs et isolés." },
        { title: "Soutage maritime", text: "VLSFO, MGO, HSFO et LSMGO livrés à quai au port d'Abidjan." },
        { title: "Logistique & dispatch", text: "Coordination de bout en bout : route, port et site." },
        { title: "Qualité & conformité", text: "Processus QA alignés sur les standards nationaux et IMO." },
      ],
    },
    about: {
      eyebrow: "À propos de SEV-OIL",
      title: "Trois secteurs. Un seul partenaire de confiance.",
      p1: "SEV-OIL livre des produits pétroliers aux stations-service, sites miniers et navires — connectant les opérations routières, sur site et maritimes sous un opérateur unique sur lequel vous pouvez compter.",
      p2: "La même équipe, les mêmes standards, la même responsabilité — qu'il s'agisse de remplir un parvis de station, une flotte minière ou un navire au port d'Abidjan.",
      button: "Notre mission & vision",
      centerLabel: "Un système",
      centerTitle: "3 secteurs. 1 partenaire.",
      sectors: [
        {
          key: "land",
          image: "/station.jpg",
          label: "Terrestre",
          title: "Stations-service",
          text: "Réseaux de distribution à travers la Côte d'Ivoire.",
        },
        {
          key: "mining",
          image: "/minier.jpg",
          label: "Minier",
          title: "Opérations minières",
          text: "Carburant en vrac et lubrifiants pour sites actifs.",
        },
        {
          key: "marine",
          image: "/soute.jpg",
          label: "Maritime",
          title: "Soutage maritime",
          text: "Opérations navire-à-navire et à quai.",
        },
      ],
    },
    mission: {
      eyebrow: "Ce qui nous anime",
      title: "Mission & Vision",
      missionTitle: "Notre mission",
      missionText:
        "Donner aux opérateurs ouest-africains — sur la route, sur les sites miniers et en mer — des produits pétroliers fiables, transparents et livrés à temps, à chaque fois.",
      visionTitle: "Notre vision",
      visionText:
        "Devenir le partenaire pétrolier multi-secteur le plus fiable de la région, reconnu pour son excellence opérationnelle, sa sécurité, et sa capacité à connecter les opérations terrestres, minières et maritimes sous une équipe responsable unique.",
    },
    services: {
      eyebrow: "Ce que nous faisons",
      title: "Des services tout au long de la chaîne",
      items: [
        { title: "Approvisionnement stations", text: "Distribution fiable aux stations de carburant." },
        { title: "Livraison sites miniers", text: "Carburant en vrac et lubrifiants pour sites actifs et isolés." },
        { title: "Soutage maritime", text: "Ravitaillement navire-à-navire et à quai au port d'Abidjan." },
        { title: "Trading & sourcing", text: "Sourcing intelligent et planification flexible pour les 3 secteurs." },
        { title: "Coordination logistique", text: "Route, port et site — sous une seule équipe." },
        { title: "Conformité & support", text: "Documentation, traçabilité et support client 24/7." },
      ],
    },
    portCoverage: {
      eyebrow: "Couverture nationale",
      title: "Côte d'Ivoire, d'un bout à l'autre",
      subtitle:
        "Ancrée au port d'Abidjan, notre équipe couvre tout le pays — du soutage maritime aux sites miniers en passant par les réseaux de stations.",
      mapLabel: "Abidjan",
      points: [
        { title: "Ancrés à Abidjan", text: "Opérations maritimes depuis le port" },
        { title: "Couverture intérieure", text: "Sites miniers & réseaux de stations" },
        { title: "Une équipe responsable", text: "Savoir local, contact unique" },
      ],
    },
    process: {
      eyebrow: "Notre démarche",
      title: "Un process simple, une exécution rapide",
      steps: [
        { title: "Demande de devis", text: "Indiquez secteur, volumes et point de livraison." },
        { title: "Réception de l'offre", text: "Recevez une offre compétitive en quelques minutes." },
        { title: "Confirmation", text: "Validez l'offre et bloquez la planification." },
        { title: "Exécution", text: "Sur route, sur site ou à quai — gérée par notre équipe." },
        { title: "Documentation", text: "Tous les documents reçus, paiement finalisé, traçabilité totale." },
      ],
    },
    cta: {
      title: "Où que vous opériez, nous livrons.",
      subtitle: "Stations, mines ou navires — recevez un devis adapté à votre secteur et à vos volumes sous 24 heures.",
      button1: "Démarrer votre projet",
      button2: "En savoir plus",
    },
    form: {
      eyebrow: "Démarrer votre projet",
      title: "Parlez-nous de vos besoins",
      subtitle: "Terrestre, minier ou maritime — quelques détails et nous revenons vers vous sous 24 heures.",
      name: "Nom complet",
      namePlaceholder: "Jean Dupont",
      email: "Adresse e-mail",
      emailPlaceholder: "vous@entreprise.com",
      phone: "Téléphone",
      phonePlaceholder: "+225 ...",
      company: "Entreprise (optionnel)",
      companyPlaceholder: "Votre entreprise",
      sector: "Secteur",
      sectorPlaceholder: "Choisir un secteur",
      sectorLand: "Terrestre — Stations-service",
      sectorMining: "Sites miniers",
      sectorMarine: "Soutage maritime",
      description: "Description du projet",
      descriptionPlaceholder: "Volumes, point de livraison, dates prévues...",
      submit: "Envoyer la demande",
      sending: "Envoi...",
      success: "Merci — nous avons reçu votre demande et reviendrons vers vous sous 24 heures.",
      error: "Une erreur est survenue. Réessayez ou écrivez-nous directement.",
      required: "Requis",
    },
    footer: {
      tagline: "Produits pétroliers pour le terrestre, le minier et le maritime. Équipe locale, portée nationale, contact unique.",
      quickLinks: "Liens rapides",
      servicesTitle: "Services",
      contactTitle: "Nous contacter",
      rights: "© 2026 SEV-OIL Maritime & Logistique. Tous droits réservés.",
      privacy: "Politique de confidentialité",
      terms: "Conditions générales",
      address: "Port d'Abidjan, Abidjan, Côte d'Ivoire",
    },
  },
  ar: {
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      services: "الخدمات",
      coverage: "التغطية",
      insights: "مسار العمل",
      contact: "اتصل بنا",
      requestQuote: "اطلب عرض سعر",
    },
    hero: {
      badge: "إمداد بالمنتجات البترولية: البر، التعدين والبحر",
      title1: "وقود لكل",
      title2: "عملية، في",
      titleAccent: "كل المجالات",
      subtitle:
        "نقوم بتسليم المنتجات البترولية إلى محطات الخدمة ومواقع التعدين والسفن — بنفس معايير السلامة والتتبع والسرعة في جميع القطاعات.",
      cta1: "ابدأ مشروعًا",
      cta2: "خدماتنا",
      slides: [
        {
          sector: "land",
          image: "/station.jpg",
          label: "البر",
          title: "محطات الخدمة واللوجستيات البرية",
          text: "إمداد موثوق لشبكات التوزيع التجارية.",
        },
        {
          sector: "mining",
          image: "/minier.jpg",
          label: "التعدين",
          title: "مواقع التعدين والعمليات الثقيلة",
          text: "وقود سائب وزيوت تشحيم تُسلَّم إلى موقع عملك.",
        },
        {
          sector: "marine",
          image: "/soute.jpg",
          label: "البحر",
          title: "التزود بالوقود البحري في ميناء أبيدجان",
          text: "VLSFO وMGO وHSFO وLSMGO للسفن والمشغّلين.",
        },
      ],
      highlights: [
        { title: "3 قطاعات مغطاة", text: "البر، التعدين والبحر" },
        { title: "فريق محلي، تغطية وطنية", text: "كوت ديفوار وما حولها" },
        { title: "عمليات على مدار الساعة", text: "عروض أسعار وتسليم بلا توقف" },
        { title: "جودة موثقة", text: "مختبَرة، مطابقة، قابلة للتتبع" },
      ],
    },
    features: {
      eyebrow: "خبرتنا",
      title: "مورّد واحد، ثلاثة قطاعات",
      items: [
        { title: "محطات الخدمة", text: "توزيع منتجات بترولية لشبكات الوقود التجارية." },
        { title: "مواقع التعدين", text: "وقود سائب وزيوت تشحيم لمواقع التعدين النشطة والنائية." },
        { title: "التزود البحري", text: "VLSFO وMGO وHSFO وLSMGO مُسلَّمة بجانب السفن في ميناء أبيدجان." },
        { title: "اللوجستيات والإرسال", text: "تنسيق شامل: الطريق والميناء والموقع." },
        { title: "الجودة والامتثال", text: "إجراءات صارمة وفق المعايير الوطنية ومعايير IMO." },
      ],
    },
    about: {
      eyebrow: "حول SEV-OIL",
      title: "ثلاثة قطاعات. شريك واحد موثوق.",
      p1: "تقوم SEV-OIL بتزويد محطات الخدمة ومواقع التعدين والسفن بالمنتجات البترولية — وتربط بين العمليات البرية والميدانية والبحرية تحت مظلة مشغّل واحد يمكن الاعتماد عليه.",
      p2: "نفس الفريق، ونفس المعايير، ونفس المسؤولية — سواء كنا نملأ محطة وقود أو أسطول شاحنات تعدين أو سفينة في ميناء أبيدجان.",
      button: "مهمتنا ورؤيتنا",
      centerLabel: "منظومة واحدة",
      centerTitle: "3 قطاعات. شريك 1.",
      sectors: [
        {
          key: "land",
          image: "/station.jpg",
          label: "البر",
          title: "محطات الخدمة",
          text: "شبكات تجارية في جميع أنحاء كوت ديفوار.",
        },
        {
          key: "mining",
          image: "/minier.jpg",
          label: "التعدين",
          title: "عمليات التعدين",
          text: "وقود سائب وزيوت تشحيم للمواقع النشطة.",
        },
        {
          key: "marine",
          image: "/soute.jpg",
          label: "البحر",
          title: "التزود البحري",
          text: "عمليات سفينة-إلى-سفينة وبجانب الرصيف.",
        },
      ],
    },
    mission: {
      eyebrow: "ما يحرّكنا",
      title: "المهمة والرؤية",
      missionTitle: "مهمتنا",
      missionText:
        "تمكين المشغّلين في غرب أفريقيا — على البر وفي مواقع التعدين وفي البحر — بمنتجات بترولية موثوقة وشفافة تُسلَّم في الوقت المحدد، في كل مرة.",
      visionTitle: "رؤيتنا",
      visionText:
        "أن نصبح الشريك البترولي متعدد القطاعات الأكثر ثقة في المنطقة، معروفًا بالتميّز التشغيلي والسلامة وبقدرتنا على ربط العمليات البرية والتعدين والبحرية تحت فريق مسؤول واحد.",
    },
    services: {
      eyebrow: "ما نقوم به",
      title: "خدمات على امتداد سلسلة الإمداد",
      items: [
        { title: "تزويد محطات الخدمة", text: "توزيع موثوق لمحطات الوقود التجارية." },
        { title: "تسليم مواقع التعدين", text: "وقود سائب وزيوت تشحيم لمواقع التعدين النشطة والنائية." },
        { title: "التزود البحري", text: "تزويد سفينة-إلى-سفينة وبجانب الرصيف في ميناء أبيدجان." },
        { title: "التداول والشراء", text: "مصادر ذكية وتخطيط مرن للقطاعات الثلاثة." },
        { title: "تنسيق لوجستي", text: "الطريق والميناء والموقع — تحت فريق واحد." },
        { title: "الامتثال والدعم", text: "توثيق وقابلية تتبع ودعم العملاء 24/7." },
      ],
    },
    portCoverage: {
      eyebrow: "تغطية وطنية",
      title: "كوت ديفوار، من البداية إلى النهاية",
      subtitle:
        "مرتكزون في ميناء أبيدجان، يغطي فريقنا البلاد بأكملها — من التزود البحري الساحلي إلى مواقع التعدين الداخلية وشبكات المحطات.",
      mapLabel: "أبيدجان",
      points: [
        { title: "ركيزتنا في أبيدجان", text: "عمليات بحرية من الميناء" },
        { title: "امتداد داخلي", text: "مواقع تعدين وشبكات محطات" },
        { title: "فريق مسؤول واحد", text: "معرفة محلية، نقطة اتصال واحدة" },
      ],
    },
    process: {
      eyebrow: "طريقة عملنا",
      title: "عملية بسيطة، تنفيذ سريع",
      steps: [
        { title: "طلب عرض السعر", text: "أخبرنا بالقطاع والكمية ونقطة التسليم." },
        { title: "استلام العرض", text: "احصل على عرض تنافسي خلال دقائق." },
        { title: "تأكيد الطلب", text: "صادق على العرض وحدّد الجدول." },
        { title: "تنفيذ التسليم", text: "على الطريق أو الموقع أو بجانب السفينة — يتولاه فريقنا." },
        { title: "التوثيق", text: "استلام كامل المستندات وإتمام الدفع مع تتبع شامل." },
      ],
    },
    cta: {
      title: "أينما تعمل، نحن نوصِّل.",
      subtitle: "محطات أو مناجم أو سفن — احصل على عرض سعر مخصص لقطاعك وكمياتك خلال 24 ساعة.",
      button1: "ابدأ مشروعك",
      button2: "اكتشف المزيد",
    },
    form: {
      eyebrow: "ابدأ مشروعك",
      title: "حدّثنا عن احتياجاتك",
      subtitle: "بر أو تعدين أو بحر — شارك بعض التفاصيل وسنعود إليك خلال 24 ساعة.",
      name: "الاسم الكامل",
      namePlaceholder: "محمد العلي",
      email: "البريد الإلكتروني",
      emailPlaceholder: "you@company.com",
      phone: "الهاتف",
      phonePlaceholder: "+225 ...",
      company: "الشركة (اختياري)",
      companyPlaceholder: "شركتك",
      sector: "القطاع",
      sectorPlaceholder: "اختر القطاعًا",
      sectorLand: "البر — محطات الخدمة",
      sectorMining: "مواقع التعدين",
      sectorMarine: "التزود البحري",
      description: "وصف المشروع",
      descriptionPlaceholder: "الكميات، نقطة التسليم، التواريخ المتوقعة...",
      submit: "إرسال الطلب",
      sending: "جارٍ الإرسال...",
      success: "شكرًا — استلمنا طلبك وسنرد خلال 24 ساعة.",
      error: "حدث خطأ. يرجى المحاولة مرة أخرى أو مراسلتنا مباشرة.",
      required: "مطلوب",
    },
    footer: {
      tagline: "إمداد بترولي للبر والتعدين والبحر. فريق محلي، تغطية وطنية، نقطة اتصال واحدة مسؤولة.",
      quickLinks: "روابط سريعة",
      servicesTitle: "الخدمات",
      contactTitle: "اتصل بنا",
      rights: "© 2026 SEV-OIL Maritime & Logistique. جميع الحقوق محفوظة.",
      privacy: "سياسة الخصوصية",
      terms: "الشروط والأحكام",
      address: "ميناء أبيدجان، أبيدجان، كوت ديفوار",
    },
  },
  zh: {
    nav: {
      home: "首页",
      about: "关于我们",
      services: "服务",
      coverage: "覆盖范围",
      insights: "流程",
      contact: "联系我们",
      requestQuote: "请求报价",
    },
    hero: {
      badge: "陆地、矿业与海运的石油供应",
      title1: "为每一次",
      title2: "运营提供燃料,",
      titleAccent: "覆盖所有领域",
      subtitle:
        "我们向加油站、矿区和船舶交付石油产品 — 在所有行业采用同样的安全、可追溯性与速度标准。",
      cta1: "启动项目",
      cta2: "我们的服务",
      slides: [
        {
          sector: "land",
          image: "/station.jpg",
          label: "陆地",
          title: "加油站与公路物流",
          text: "为零售和商业网络提供可靠供应。",
        },
        {
          sector: "mining",
          image: "/minier.jpg",
          label: "矿业",
          title: "矿区与重型作业",
          text: "散装燃料和润滑油送达作业现场。",
        },
        {
          sector: "marine",
          image: "/soute.jpg",
          label: "海运",
          title: "阿比让港船用加油",
          text: "为船舶和运营商提供 VLSFO、MGO、HSFO 和 LSMGO。",
        },
      ],
      highlights: [
        { title: "覆盖3大领域", text: "陆地、矿业与海运" },
        { title: "本地团队,全国覆盖", text: "科特迪瓦及其周边" },
        { title: "全天候运营", text: "全时段报价与调度" },
        { title: "品质保证", text: "经过测试、合规、可追溯" },
      ],
    },
    features: {
      eyebrow: "我们的专长",
      title: "一个供应商,三个领域",
      items: [
        { title: "加油站", text: "向零售和商业燃料网络分销石油产品。" },
        { title: "矿区", text: "向偏远及活跃矿区交付散装燃料和润滑油。" },
        { title: "船用加油", text: "在阿比让港船边供应 VLSFO、MGO、HSFO 和 LSMGO。" },
        { title: "物流与调度", text: "公路、港口和现场交付的全程协调。" },
        { title: "质量与合规", text: "严格的质量流程,符合国家和 IMO 标准。" },
      ],
    },
    about: {
      eyebrow: "关于 SEV-OIL",
      title: "三大领域。一个可信赖的合作伙伴。",
      p1: "SEV-OIL 向加油站、矿区和船舶供应石油产品 — 将公路、现场和海上的运营整合到一个您可以信赖的运营商之下。",
      p2: "同一团队、同一标准、同一责任 — 无论是加油站、矿区车队还是阿比让港的船舶。",
      button: "我们的使命和愿景",
      centerLabel: "一个系统",
      centerTitle: "3领域。1合作伙伴。",
      sectors: [
        {
          key: "land",
          image: "/station.jpg",
          label: "陆地",
          title: "加油站",
          text: "覆盖科特迪瓦的零售与商业网络。",
        },
        {
          key: "mining",
          image: "/minier.jpg",
          label: "矿业",
          title: "矿业运营",
          text: "为活跃矿区提供散装燃料和润滑油。",
        },
        {
          key: "marine",
          image: "/soute.jpg",
          label: "海运",
          title: "船用加油",
          text: "船对船和船边供油。",
        },
      ],
    },
    mission: {
      eyebrow: "驱动我们的力量",
      title: "使命与愿景",
      missionTitle: "我们的使命",
      missionText:
        "通过可靠、透明并准时交付的石油产品,为西非陆地、矿区和海上的运营商提供动力 — 每一次都做到。",
      visionTitle: "我们的愿景",
      visionText:
        "成为本地区最值得信赖的多领域石油合作伙伴,以卓越运营、安全以及将陆地、矿业与海运整合到一个负责团队的能力而闻名。",
    },
    services: {
      eyebrow: "我们的工作",
      title: "覆盖整条供应链的服务",
      items: [
        { title: "加油站供应", text: "为零售和商业加油站提供可靠分销。" },
        { title: "矿区交付", text: "向活跃和偏远矿区提供散装燃料和润滑油。" },
        { title: "船用加油", text: "在阿比让港进行船对船及船边加油。" },
        { title: "贸易与采购", text: "为三大领域提供智能采购与灵活供应计划。" },
        { title: "物流协调", text: "公路、港口与现场调度,统一在一个团队下。" },
        { title: "合规与支持", text: "全程文件、可追溯性和 24/7 客户支持。" },
      ],
    },
    portCoverage: {
      eyebrow: "全国覆盖",
      title: "科特迪瓦,从头到尾",
      subtitle:
        "立足于阿比让港,我们的团队覆盖全国 — 从沿海船用加油到内陆矿区和公路加油网络。",
      mapLabel: "阿比让",
      points: [
        { title: "立足阿比让", text: "源自港口的海运业务" },
        { title: "内陆覆盖", text: "矿区与加油站网络" },
        { title: "一个负责团队", text: "本地专业知识,单一联系点" },
      ],
    },
    process: {
      eyebrow: "我们的工作方式",
      title: "流程简单,执行迅速",
      steps: [
        { title: "请求报价", text: "告诉我们您的领域、体量和交付地点。" },
        { title: "接收报价", text: "数分钟内获得有竞争力的报价。" },
        { title: "确认订单", text: "确认报价并锁定时间表。" },
        { title: "执行交付", text: "公路、现场或船边 — 由我们的团队处理。" },
        { title: "文档", text: "接收所有文件并完成付款,全程可追溯。" },
      ],
    },
    cta: {
      title: "无论您在哪里运营,我们都能交付。",
      subtitle: "加油站、矿区或船舶 — 24 小时内获得针对您行业和体量的定制报价。",
      button1: "启动您的项目",
      button2: "了解更多",
    },
    form: {
      eyebrow: "启动您的项目",
      title: "告诉我们您的需求",
      subtitle: "陆地、矿业或海运 — 分享一些细节,我们将在 24 小时内回复您。",
      name: "全名",
      namePlaceholder: "张三",
      email: "电子邮箱",
      emailPlaceholder: "you@company.com",
      phone: "电话",
      phonePlaceholder: "+225 ...",
      company: "公司(可选)",
      companyPlaceholder: "您的公司",
      sector: "领域",
      sectorPlaceholder: "选择领域",
      sectorLand: "陆地 — 加油站",
      sectorMining: "矿区",
      sectorMarine: "船用加油",
      description: "项目描述",
      descriptionPlaceholder: "体量、交付地点、预期日期……",
      submit: "发送请求",
      sending: "发送中...",
      success: "谢谢 — 我们已收到您的请求,将在 24 小时内回复。",
      error: "出现错误。请重试或直接给我们发邮件。",
      required: "必填",
    },
    footer: {
      tagline: "面向陆地、矿业和海运的石油供应。本地团队、全国覆盖、单一负责的联络点。",
      quickLinks: "快速链接",
      servicesTitle: "服务",
      contactTitle: "联系我们",
      rights: "© 2026 SEV-OIL Maritime & Logistique. 版权所有。",
      privacy: "隐私政策",
      terms: "条款与条件",
      address: "阿比让港,阿比让,科特迪瓦",
    },
  },
};
