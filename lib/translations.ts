export type Lang = "en" | "fr";

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
    company: string;
    companyPlaceholder: string;
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
      company: "Company (optional)",
      companyPlaceholder: "Your company",
      description: "Project description",
      descriptionPlaceholder: "Sector (land / mining / marine), volumes, delivery point, expected dates...",
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
      company: "Entreprise (optionnel)",
      companyPlaceholder: "Votre entreprise",
      description: "Description du projet",
      descriptionPlaceholder: "Secteur (terrestre / minier / maritime), volumes, point de livraison, dates prévues...",
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
};
