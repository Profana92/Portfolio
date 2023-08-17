import { initReactI18next } from 'react-i18next'
import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: ['en', 'pl', 'de'],
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    nonExplicitSupportedLngs: true,
    resources: {
      en: {
        translation: {
          navigation: {
            home: 'Home',
            projects: 'Projects',
            about: 'About',
            skills: 'Skills',
            offer: 'Services',
            contact: 'Contact',
            quote: 'Get a quote!',
            blog: 'Blog',
          },
        },
      },
      pl: {
        translation: {
          navigation: {
            home: 'Start',
            projects: 'Projekty',
            about: 'O mnie',
            skills: 'Umiejętności',
            offer: 'Usługi',
            contact: 'Kontakt',
            quote: 'Uzyskaj wycenę!',
            blog: 'Blog',
          },
        },
      },
      de: {
        translation: {
          navigation: {
            home: 'Home',
            projects: 'Projekte',
            about: 'Impressum',
            skills: 'Fähigkeiten',
            offer: 'Leistungen',
            contact: 'Kontakt',
            quote: 'Angebot bekommen!',
            blog: 'Blog',
          },
        },
      },
    },
  })

export default i18n
