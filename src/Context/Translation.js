// ─── TRANSLATIONS ────────────────────────────────────────────────────────────
// Add a new language by adding its code as a key and mirroring every EN field.
// Home.jsx and other components import { t } from here via useTranslation().
// ─────────────────────────────────────────────────────────────────────────────

const translations = {

  EN: {
    // Hero
    badge_hero:          "AI-FIRST SOFTWARE DEVELOPMENT",
    hero_title_white:    "Build Smarter with",
    hero_title_gradient: "AI-Powered Technology",
    hero_subtitle:       "ASZ Technologies delivers intelligent software solutions — from custom AI applications and automation to dedicated offshore delivery teams — helping businesses scale faster.",
    btn_explore:         "Explore AI Solutions",
    btn_services:        "View Services",
    scroll:              "SCROLL",

    // AI Platform
    badge_ai:     "AI PLATFORM",
    ai_title:     "Intelligence built into every solution",
    ai_subtitle:  "We embed AI at the core of your software — not as an afterthought, but as a foundational capability driving real outcomes.",

    // Core Services section
    badge_services:        "CORE SERVICES",
    services_title_white:  "Everything you need",
    services_title_accent: "to build and scale",
    services_subtitle:     "End-to-end technology delivery from strategy through to shipped product and ongoing operations.",
    learn_more:            "Learn more",

    // Contact
    contact_title_white:  "Ready to build",
    contact_title_accent: "with AI?",
    contact_subtitle:     "Let's scope your project. We'll have a team proposal ready within 48 hours — no commitment required.",
    btn_start:            "Start a Project",
    btn_email:            "info@asztechnologies.com",

    // Stats labels (order matches statsData array)
    stats: [
      { label: "Years of delivery" },
      { label: "Projects shipped" },
      { label: "Engineers on team" },
      { label: "On-time delivery" },
    ],

    // AI Platform cards (order matches platformData array)
    platform: [
      { title: "Generative AI Integration",       description: "Embed GPT-4, Claude, and Gemini into your products. Chat interfaces, document generation, intelligent search, and content automation at production scale.",                                             tag: "LLM INTEGRATION"  },
      { title: "Predictive Analytics",             description: "Turn raw data into foresight. ML models for demand forecasting, churn prediction, fraud detection, and real-time business intelligence dashboards.",                                                    tag: "MACHINE LEARNING" },
      { title: "Intelligent Process Automation",   description: "RPA plus AI decision-making. Automate document processing, approvals, data entry, and complex workflows — reducing manual effort by up to 80%.",                                                       tag: "RPA + AI"         },
      { title: "Computer Vision",                  description: "Image and video intelligence for quality inspection, identity verification, document scanning, and real-time visual monitoring systems.",                                                               tag: "VISION AI"        },
    ],

    // Core Services cards (order matches servicesData array)
    services: [
      { title: "Custom Software Development",      description: "End-to-end development of web, mobile, and enterprise applications tailored to your exact business logic and requirements."                                                                            },
      { title: "IT Consulting & Architecture",     description: "Strategic technology advisory, cloud migration, system architecture, and digital transformation roadmaps for growing enterprises."                                                                     },
      { title: "Data Engineering & Analytics",     description: "Data pipelines, warehousing, BI dashboards, and real-time analytics platforms that surface insights from your raw data instantly."                                                                    },
      { title: "Cloud & DevOps",                   description: "AWS, Azure, and GCP deployments. CI/CD pipelines, infrastructure-as-code, Kubernetes orchestration, and 24/7 monitoring."                                                                            },
      { title: "System Integration",               description: "Connect your ERP, CRM, and third-party platforms with robust APIs, middleware, and real-time data synchronisation layers."                                                                            },
      { title: "Offshore Development Teams",       description: "Dedicated offshore pods — engineers, QA, BA, and PM — embedded in your workflow. Scale in 2 weeks, not 2 months."                                                                                   },
    ],

    // Header nav
    nav_home:       "Home",
    nav_about:      "About Us",
    nav_services:   "Services",
    nav_products:   "Products",
    nav_contact:    "Contact Us",
  },

  // ── ARABIC ───────────────────────────────────────────────────────────────
  AR: {
    badge_hero:          "تطوير برمجيات بالذكاء الاصطناعي أولاً",
    hero_title_white:    "ابنِ بشكل أذكى مع",
    hero_title_gradient: "تقنية مدعومة بالذكاء الاصطناعي",
    hero_subtitle:       "تقدم ASZ Technologies حلول برمجية ذكية — من تطبيقات الذكاء الاصطناعي المخصصة والأتمتة إلى فرق التسليم الخارجية المتخصصة — مما يساعد الشركات على التوسع بشكل أسرع.",
    btn_explore:         "استكشف حلول الذكاء الاصطناعي",
    btn_services:        "عرض الخدمات",
    scroll:              "تمرير",

    badge_ai:     "منصة الذكاء الاصطناعي",
    ai_title:     "ذكاء مدمج في كل حل",
    ai_subtitle:  "ندمج الذكاء الاصطناعي في جوهر برمجياتك — ليس كفكرة لاحقة، بل كقدرة أساسية تحقق نتائج حقيقية.",

    badge_services:        "الخدمات الأساسية",
    services_title_white:  "كل ما تحتاجه",
    services_title_accent: "للبناء والتوسع",
    services_subtitle:     "تسليم تقني شامل من الاستراتيجية حتى المنتج المُشحون والعمليات الجارية.",
    learn_more:            "اعرف المزيد",

    contact_title_white:  "هل أنت مستعد للبناء",
    contact_title_accent: "بالذكاء الاصطناعي؟",
    contact_subtitle:     "دعنا نحدد نطاق مشروعك. سيكون اقتراح الفريق جاهزاً في غضون 48 ساعة — دون أي التزام.",
    btn_start:            "ابدأ مشروعاً",
    btn_email:            "info@asztechnologies.com",

    stats: [
      { label: "سنوات من التسليم" },
      { label: "مشروع تم شحنه" },
      { label: "مهندس في الفريق" },
      { label: "التسليم في الوقت المحدد" },
    ],

    platform: [
      { title: "تكامل الذكاء الاصطناعي التوليدي",  description: "دمج GPT-4 وClaude وGemini في منتجاتك. واجهات المحادثة وتوليد المستندات والبحث الذكي وأتمتة المحتوى على نطاق الإنتاج.",                                                                              tag: "تكامل LLM"        },
      { title: "التحليلات التنبؤية",                 description: "حوّل البيانات الخام إلى رؤى مستقبلية. نماذج تعلم الآلة للتنبؤ بالطلب والكشف عن الاحتيال ولوحات معلومات ذكاء الأعمال في الوقت الفعلي.",                                                            tag: "تعلم الآلة"       },
      { title: "أتمتة العمليات الذكية",              description: "RPA مع اتخاذ قرارات بالذكاء الاصطناعي. أتمتة معالجة المستندات والموافقات وإدخال البيانات وسير العمل المعقد — بتقليل الجهد اليدوي بنسبة تصل إلى 80%.",                                              tag: "RPA + ذكاء اصطناعي"},
      { title: "رؤية الحاسوب",                       description: "ذكاء الصور والفيديو لفحص الجودة والتحقق من الهوية ومسح المستندات وأنظمة المراقبة البصرية في الوقت الفعلي.",                                                                                        tag: "رؤية ذكاء اصطناعي"},
    ],

    services: [
      { title: "تطوير البرمجيات المخصصة",            description: "تطوير شامل لتطبيقات الويب والموبايل والمؤسسات المصمّمة وفق منطق عملك ومتطلباتك الدقيقة."                                                                                                         },
      { title: "الاستشارات التقنية والهندسة المعمارية", description: "استشارات تقنية استراتيجية وهجرة سحابية وهندسة أنظمة وخرائط طريق التحول الرقمي للمؤسسات المتنامية."                                                                                            },
      { title: "هندسة البيانات والتحليلات",           description: "خطوط بيانات ومستودعات ولوحات BI ومنصات تحليلات في الوقت الفعلي تكشف رؤى من بياناتك الخام فوراً."                                                                                                },
      { title: "السحابة وDevOps",                     description: "نشر على AWS وAzure وGCP. مسارات CI/CD، والبنية التحتية كرمز، وتنسيق Kubernetes، ومراقبة على مدار الساعة."                                                                                       },
      { title: "تكامل الأنظمة",                       description: "ربط ERP وCRM ومنصاتك الخارجية بواجهات برمجية قوية ومكونات وسيطة وطبقات مزامنة بيانات في الوقت الفعلي."                                                                                          },
      { title: "فرق التطوير الخارجية",                description: "وحدات خارجية مخصصة — مهندسون وضمان الجودة ومحللو الأعمال ومديرو مشاريع — مدمجون في سير عملك. التوسع في أسبوعين لا شهرين."                                                                      },
    ],

    nav_home:     "الرئيسية",
    nav_about:    "من نحن",
    nav_services: "الخدمات",
    nav_products: "المنتجات",
    nav_contact:  "اتصل بنا",
  },

  // ── GERMAN ───────────────────────────────────────────────────────────────
  DE: {
    badge_hero:          "KI-FIRST SOFTWAREENTWICKLUNG",
    hero_title_white:    "Intelligenter bauen mit",
    hero_title_gradient: "KI-gestützter Technologie",
    hero_subtitle:       "ASZ Technologies liefert intelligente Softwarelösungen — von maßgeschneiderten KI-Anwendungen und Automatisierung bis hin zu dedizierten Offshore-Entwicklungsteams — und hilft Unternehmen, schneller zu skalieren.",
    btn_explore:         "KI-Lösungen entdecken",
    btn_services:        "Leistungen ansehen",
    scroll:              "SCROLLEN",

    badge_ai:     "KI-PLATTFORM",
    ai_title:     "Intelligenz in jeder Lösung integriert",
    ai_subtitle:  "Wir betten KI in den Kern Ihrer Software ein — nicht als nachträglichen Gedanken, sondern als grundlegende Fähigkeit, die echte Ergebnisse erzielt.",

    badge_services:        "KERNLEISTUNGEN",
    services_title_white:  "Alles, was Sie brauchen,",
    services_title_accent: "um zu bauen und zu skalieren",
    services_subtitle:     "Lückenlose Technologielieferung von der Strategie bis zum fertigen Produkt und laufenden Betrieb.",
    learn_more:            "Mehr erfahren",

    contact_title_white:  "Bereit zu bauen",
    contact_title_accent: "mit KI?",
    contact_subtitle:     "Lassen Sie uns Ihr Projekt besprechen. Wir haben einen Teamvorschlag innerhalb von 48 Stunden bereit — ohne Verpflichtung.",
    btn_start:            "Projekt starten",
    btn_email:            "info@asztechnologies.com",

    stats: [
      { label: "Jahre Erfahrung" },
      { label: "Abgeschlossene Projekte" },
      { label: "Ingenieure im Team" },
      { label: "Pünktliche Lieferung" },
    ],

    platform: [
      { title: "Generative KI-Integration",       description: "Integrieren Sie GPT-4, Claude und Gemini in Ihre Produkte. Chat-Interfaces, Dokumentenerstellung, intelligente Suche und Content-Automatisierung in Produktionsqualität.",                              tag: "LLM-INTEGRATION"  },
      { title: "Prädiktive Analytik",              description: "Verwandeln Sie Rohdaten in Vorhersagen. ML-Modelle für Bedarfsprognosen, Abwanderungsvorhersagen, Betrugserkennung und Echtzeit-Business-Intelligence-Dashboards.",                                    tag: "MASCHINELLES LERNEN"},
      { title: "Intelligente Prozessautomatisierung", description: "RPA plus KI-Entscheidungsfindung. Automatisieren Sie Dokumentenverarbeitung, Genehmigungen, Dateneingabe und komplexe Workflows — reduzieren Sie manuellen Aufwand um bis zu 80%.",              tag: "RPA + KI"         },
      { title: "Computer Vision",                  description: "Bild- und Videointelligenz für Qualitätsprüfung, Identitätsverifizierung, Dokumentenscanning und visuelle Echtzeit-Überwachungssysteme.",                                                             tag: "VISION KI"        },
    ],

    services: [
      { title: "Individuelle Softwareentwicklung", description: "End-to-End-Entwicklung von Web-, Mobil- und Unternehmensanwendungen, maßgeschneidert auf Ihre genaue Geschäftslogik und Anforderungen."                                                               },
      { title: "IT-Beratung & Architektur",        description: "Strategische Technologieberatung, Cloud-Migration, Systemarchitektur und Roadmaps zur digitalen Transformation für wachsende Unternehmen."                                                            },
      { title: "Datentechnik & Analytik",          description: "Datenpipelines, Warehousing, BI-Dashboards und Echtzeit-Analyseplattformen, die sofort Erkenntnisse aus Ihren Rohdaten liefern."                                                                     },
      { title: "Cloud & DevOps",                   description: "AWS-, Azure- und GCP-Deployments. CI/CD-Pipelines, Infrastructure-as-Code, Kubernetes-Orchestrierung und 24/7-Monitoring."                                                                           },
      { title: "Systemintegration",                description: "Verbinden Sie Ihr ERP, CRM und Drittanbieter-Plattformen mit robusten APIs, Middleware und Echtzeit-Datensynchronisierungsschichten."                                                                },
      { title: "Offshore-Entwicklungsteams",       description: "Dedizierte Offshore-Teams — Ingenieure, QA, BA und PM — eingebettet in Ihren Workflow. Skalierung in 2 Wochen, nicht in 2 Monaten."                                                                 },
    ],

    nav_home:     "Startseite",
    nav_about:    "Über uns",
    nav_services: "Leistungen",
    nav_products: "Produkte",
    nav_contact:  "Kontakt",
  },

  // ── FRENCH ───────────────────────────────────────────────────────────────
  FR: {
    badge_hero:          "DÉVELOPPEMENT LOGICIEL IA-FIRST",
    hero_title_white:    "Construisez plus intelligemment avec",
    hero_title_gradient: "la technologie propulsée par l'IA",
    hero_subtitle:       "ASZ Technologies fournit des solutions logicielles intelligentes — des applications IA personnalisées et l'automatisation aux équipes de développement offshore dédiées — aidant les entreprises à évoluer plus rapidement.",
    btn_explore:         "Explorer les solutions IA",
    btn_services:        "Voir les services",
    scroll:              "DÉFILER",

    badge_ai:     "PLATEFORME IA",
    ai_title:     "L'intelligence intégrée dans chaque solution",
    ai_subtitle:  "Nous intégrons l'IA au cœur de votre logiciel — pas comme une réflexion après coup, mais comme une capacité fondamentale générant de vrais résultats.",

    badge_services:        "SERVICES PRINCIPAUX",
    services_title_white:  "Tout ce dont vous avez besoin",
    services_title_accent: "pour construire et évoluer",
    services_subtitle:     "Livraison technologique de bout en bout, de la stratégie au produit livré et aux opérations continues.",
    learn_more:            "En savoir plus",

    contact_title_white:  "Prêt à construire",
    contact_title_accent: "avec l'IA ?",
    contact_subtitle:     "Définissons la portée de votre projet. Nous aurons une proposition d'équipe prête dans les 48 heures — sans engagement.",
    btn_start:            "Démarrer un projet",
    btn_email:            "info@asztechnologies.com",

    stats: [
      { label: "Années d'expérience" },
      { label: "Projets livrés" },
      { label: "Ingénieurs dans l'équipe" },
      { label: "Livraison dans les délais" },
    ],

    platform: [
      { title: "Intégration de l'IA générative",      description: "Intégrez GPT-4, Claude et Gemini dans vos produits. Interfaces de chat, génération de documents, recherche intelligente et automatisation de contenu à l'échelle de la production.",     tag: "INTÉGRATION LLM"    },
      { title: "Analytique prédictive",                description: "Transformez les données brutes en prévisions. Modèles ML pour la prévision de la demande, la prédiction du churn, la détection des fraudes et les tableaux de bord BI en temps réel.",    tag: "APPRENTISSAGE AUTO." },
      { title: "Automatisation intelligente des processus", description: "RPA plus prise de décision par IA. Automatisez le traitement des documents, les approbations, la saisie de données et les flux de travail complexes — réduisant l'effort manuel jusqu'à 80%.", tag: "RPA + IA"         },
      { title: "Vision par ordinateur",                description: "Intelligence image et vidéo pour l'inspection qualité, la vérification d'identité, la numérisation de documents et les systèmes de surveillance visuelle en temps réel.",                  tag: "VISION IA"           },
    ],

    services: [
      { title: "Développement logiciel sur mesure",   description: "Développement de bout en bout d'applications web, mobiles et d'entreprise adaptées à votre logique métier et à vos exigences exactes."                                                    },
      { title: "Conseil IT & Architecture",            description: "Conseil technologique stratégique, migration vers le cloud, architecture système et feuilles de route de transformation numérique pour les entreprises en croissance."                      },
      { title: "Ingénierie des données & Analytique", description: "Pipelines de données, entreposage, tableaux de bord BI et plateformes d'analytique en temps réel qui extraient instantanément des insights de vos données brutes."                         },
      { title: "Cloud & DevOps",                      description: "Déploiements AWS, Azure et GCP. Pipelines CI/CD, infrastructure-as-code, orchestration Kubernetes et surveillance 24h/24 et 7j/7."                                                        },
      { title: "Intégration de systèmes",             description: "Connectez votre ERP, CRM et plateformes tierces avec des APIs robustes, des middlewares et des couches de synchronisation de données en temps réel."                                      },
      { title: "Équipes de développement offshore",   description: "Équipes offshore dédiées — ingénieurs, QA, BA et PM — intégrées dans votre flux de travail. Montée en charge en 2 semaines, pas en 2 mois."                                              },
    ],

    nav_home:     "Accueil",
    nav_about:    "À propos",
    nav_services: "Services",
    nav_products: "Produits",
    nav_contact:  "Contactez-nous",
  },

};

export default translations;