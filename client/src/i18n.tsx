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
            magic: 'My Magic',
            tools: 'Tools',
            myWork: 'My Work',
            projects: 'Projects',
            services: 'Services',
            blog: 'Blog',
            about: 'About',
            aboutMe: 'About Me',
            skills: 'My Skills',
            contact: 'Contact',
          },
        },
      },
      pl: {
        translation: {
          navigation: {
            home: 'Start',
            magic: 'Magia',
            tools: 'Narzędzia',
            myWork: 'Portfolio',
            projects: 'Projekty',
            services: 'Usługi',
            blog: 'Blog',
            about: 'O mnie',
            aboutMe: 'Ja',
            skills: 'Umiejętności',
            contact: 'Kontact',
          },
        },
      },
      de: {
        translation: {
          navigation: {
            home: 'Home',
            magic: 'Magie',
            tools: 'Werkzeugen',
            myWork: 'Mein Werk',
            projects: 'Projekte',
            services: 'Leistungen',
            blog: 'Blog',
            about: 'Impressum',
            aboutMe: 'Über Mich',
            skills: 'Fähigkeiten',
            contact: 'Kontakt',
          },
        },
      },
    },
  })

export default i18n
