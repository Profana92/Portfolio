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
          HomePage: {
            heroHeading: '<0>Welcome here, where dreams <1>DO COME</1> alive!</0>',
            heroParagraph:
              "<0>Hello! I'm <1>Wojciech Marczak</1>, a Front-End Wizard based in Leipzig, in the realm of Germany! I'm fervently devoted to crafting top-tier websites, infusing a touch of magic into each creation for unparalleled experiences.</0>",
            buttonOne: 'My Spells',
            buttonTwo: 'My creations',
            callToAction: 'See The Magic!',
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
            contact: 'Kontakt',
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
