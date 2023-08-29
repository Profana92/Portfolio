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
            sectionOneDescription: 'HTML CSS JAVASCRIPT REACT',
            sectionOneHeading: '<0>Those are my <1>Spells</1></0>',
            sectionOneParagraph:
              'In this dimension, we wield not wands and incantations, but rather completly other tools to create magical online experiences.',
            SectionTwoElementOneDescription: 'SPELLS',
            SectionTwoElementTwoDescription: 'Potions',
            SectionTwoElementThreeDescription: 'Scrolls',
            SectionTwoElementFourDescription: 'Enchantments',
            SectionTwoElementOneHeading: '<0>Magical words of <1>HTML</1></0>',
            SectionTwoElementTwoHeading: '<0>Style potions of <1>CSS</1></0>',
            SectionTwoElementThreeHeading: '<0>Scrolls of <1>JavaScript</1></0>',
            SectionTwoElementFourHeading: '<0>Enchanting with the powers of <1>React</1></0>',
            SectionTwoElementOneParagraph:
              'Through these spells, I tell the web browser how to arrange these elements, creating a harmonious symphony of information and aesthetics.',
            SectionTwoElementTwoParagraph:
              'These magical mixtures produce extraordinary outcomes, infusing our HTML spells with mesmerizing colors, enticing fonts, captivating animations, and enchanting layouts.',
            SectionTwoElementThreeParagraph:
              'Using those scrolls I can summon the power of interactivity, effortlessly manipulating elements, animating pages, and creating dynamic content.',
            SectionTwoElementFourParagraph:
              'This enchanting framework magically revamps the user interface, effortlessly rendering captivating visuals that adapt swiftly to any interaction.',
          },
          myWorkPage: {
            heroHeading: '<0>So, <1>Who Am I?</1></0>',
            heroParagraphOne:
              'I’m a passionate front-end developer with a creative flair for crafting seamless user experiences. I utilize HTML, CSS, JS, and React for website construction, and employ Figma, Adobe XD, Adobe Illustrator, and Photoshop for design. Deploying websites is achieved through Ubuntu, Nginx, and Apache. Moreover, I bring ecommerce websites to life using Wordpress, Divi, and Woocommerce.',
            heroParagraphTwo:
              'I remain committed to staying updated with the latest industry trends and delivering visually captivating and responsive web solutions.',
            heroParagraphThree:
              'During my leisure hours, I engage in flying drones, 3D printing, and repairing electronics, revitalizing the old to breathe new life into them. I also absolutly love the idea of three.js!',
            heroParagraphFour:
              'I take immense pleasure in witnessing my websites generate fresh sales and leads for my clients, leading to the flourishing growth of their businesses.',
            heroParagraphAccent: "Let's collaborate and bring ideas to life through elegant code.",
            buttonOne: 'My Work',
            buttonTwo: 'Contact Me',
          },
          Footer: {
            Description: 'Let the whispers of the digital wind carry your message to me.',
            Heading: '<0>Summon <1>Me!</1></0>',
            Paragraph:
              '<0>In this realm of web enchantment, <1>your journey matters</1>.  Should you seek my counsel, fear not, for I am but a summoning spell away. Cast your inquiries, propositions, or even just a friendly greeting into the digital aether. With a wave of your cursor and a recitation of the incantation, the arcane forms shall deliver your message to my realm. Let us connect, fellow traveler, and exchange wisdom and enchantments across the digital expanse.</0>',
            formFirstNamePlaceholder: 'First Name',
            formLastNamePlaceholder: 'Last Name',
            formEmailPlaceholder: 'E-mail',
            formMessagePlaceholder: 'Message...',
            formSummonButton: 'Summon!',
            formUnderText:
              ' By sharing your thoughts, you open the door to endless possibilities. Await my response as our destinies intertwine. May the pixels be ever in your favor!',
            aboveFooterMenuText:
              'In the world of web, every line of code is a strand of magic, and every pixel a canvas for creation.',
            errorRequired: 'This field is required',
            errorMaxLength: 'Exceeded 20 letters limit',
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
