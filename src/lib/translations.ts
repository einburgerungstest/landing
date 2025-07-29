export const translations = {
  en: {
    // Meta
    pageTitle: "Einbürgerungstest App",
    metaDescription: "Prepare for the German Citizenship Exam with ease.",
    
    // Main content
    heading: "Einbürgerungstest",
    subheading: "Prepare for the German Citizenship Exam with ease.",
    
    // Features
    features: [
      "✅ Official German citizenship test questions",
      "🌍 Multi-language support (German & Russian)",
      "📚 Detailed explanations for each question",
      "🎯 Smart practice modes and progress tracking",
      "⏱️ Test simulation with timer",
      "📱 Modern iOS native interface"
    ],
    
    // Footer
    madeWith: "Made with ♥ by",
    and: "and",
    footerLinks: {
      privacyPolicy: "Privacy Policy",
      support: "Support"
    }
  },
  
  de: {
    // Meta
    pageTitle: "Einbürgerungstest App",
    metaDescription: "Bereiten Sie sich einfach auf die deutsche Einbürgerungsprüfung vor.",
    
    // Main content
    heading: "Einbürgerungstest",
    subheading: "Bereiten Sie sich einfach auf die deutsche Einbürgerungsprüfung vor.",
    
    // Features
    features: [
      "✅ Offizielle deutsche Einbürgerungstest-Fragen",
      "🌍 Mehrsprachige Unterstützung (Deutsch & Russisch)",
      "📚 Detaillierte Erklärungen zu jeder Frage",
      "🎯 Intelligente Übungsmodi und Fortschrittsverfolgung",
      "⏱️ Test-Simulation mit Timer",
      "📱 Modernes iOS native Interface"
    ],
    
    // Footer
    madeWith: "Mit ♥ erstellt von",
    and: "und",
    footerLinks: {
      privacyPolicy: "Datenschutzerklärung",
      support: "Support"
    }
  },
  
  ru: {
    // Meta
    pageTitle: "Приложение для теста на гражданство",
    metaDescription: "Легко подготовьтесь к экзамену на немецкое гражданство.",
    
    // Main content
    heading: "Тест на гражданство",
    subheading: "Легко подготовьтесь к экзамену на немецкое гражданство.",
    
    // Features
    features: [
      "✅ Официальные вопросы теста на немецкое гражданство",
      "🌍 Многоязычная поддержка (немецкий и русский)",
      "📚 Подробные объяснения к каждому вопросу",
      "🎯 Умные режимы практики и отслеживание прогресса",
      "⏱️ Симуляция теста с таймером",
      "📱 Современный нативный iOS интерфейс"
    ],
    
    // Footer
    madeWith: "Создано с ♥",
    and: "и",
    footerLinks: {
      privacyPolicy: "Политика конфиденциальности",
      support: "Поддержка"
    }
  }
} as const;

export type Locale = keyof typeof translations;

export function getTranslations(locale: Locale) {
  return translations[locale] || translations.en;
} 