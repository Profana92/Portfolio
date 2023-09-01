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
    debug: false,
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
          aboutPage: {
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
          mySkills: {
            HTML: {
              Description:
                'In the enchanted realm of web creation, HTML stands as the spell of structure, shaping the digital tapestry of elements. With mystic tags and attributes, it weaves text, images, and links into a harmonious structure that brings forth the wondrous landscapes of the online realm.',
              Website: 'developer.mozilla.org',
              Link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
            },
            CSS: {
              Description:
                'There exists a wondrous language known as CSS, or Cascading Style Sheets. CSS weaves its spells to bring forth the very essence of beauty and design upon the canvas of the digital world.',
              Website: 'developer.mozilla.org',
              Link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
            },
            npm: {
              Description:
                'NPM (Node Package Manager) is a magical tool for JavaScript, enabling seamless installation, management, and sharing of code libraries for enchanting web and software creations.',
              Website: 'NPMjs.com',
              Link: 'https://www.npmjs.com/',
            },
            WooCommerce: {
              Description:
                'WooCommerce is a enchanting WordPress plugin, transforming websites into captivating online stores. It conjures product listings, payments, and shopping carts to create captivating digital marketplaces.',
              Website: 'WooCommerce.com',
              Link: 'https://woocommerce.com/',
            },
            Wordpress: {
              Description:
                'WordPress is a spellbinding open-source platform, crafting websites with ease. Its sorcery includes themes, plugins, and a bewitching interface for creating captivating digital realms without complex coding.',
              Website: 'WordPress.org',
              Link: 'https://pl.wordpress.org/',
            },
            React: {
              Description:
                'React, a potent JavaScript library, enchants web development with spellbinding user interfaces. It uses components to craft dynamic and captivating digital experiences, redefining the art of interaction.',
              Website: 'React.dev',
              Link: 'https://react.dev/',
            },
            JavaScript: {
              Description:
                'JavaScript, a magical scripting language, bewitches web pages with interactivity and enchanting behavior. It conjures animations, validates forms, and interacts with users, breathing life into the digital realm.',
              Website: 'developer.mozilla.org',
              Link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
            },
            TypeScript: {
              Description:
                'TypeScript, a wizardly superset of JavaScript, adds enchanting types and static analysis to the conjuring process. It enhances code quality and compiles to spellbinding JavaScript for web sorcery.',
              Website: 'TypeScriptLang.org',
              Link: 'https://www.typescriptlang.org/',
            },
            MJML: {
              Description:
                'MJML, a mystical framework, weaves responsive email spells. It conjures captivating layouts with simple HTML-like syntax, ensuring bewitching messages across magical devices.',
              Website: 'MJML.io',
              Link: 'https://mjml.io/',
            },
            NodeJs: {
              Description:
                'Node.js, a celestial runtime, empowers server sorcery with non-blocking incantations. It enchants JavaScript beyond the browser, conjuring scalable and bewitching network applications with asynchronous might.',
              Website: 'NodeJS.org',
              Link: 'https://nodejs.org/en',
            },
            Expressjs: {
              Description:
                'Express.js, a magical web framework for Node.js, accelerates server sorcery. It crafts bewitching APIs and routes, casting spells for dynamic web enchantments with minimal code incantations.',
              Website: 'ExpressJS.com',
              Link: 'https://expressjs.com/',
            },
            MongoDB: {
              Description:
                'MongoDB, a mystical NoSQL database, stores enchanting data with flexibility. It conjures collections and documents, offering scalable and schema-less realms for modern digital sorcery.',
              Website: 'MongoDB.com',
              Link: 'https://www.mongodb.com/',
            },
            Figma: {
              Description:
                'Figma, a wondrous design tool, conjures collaborative visions. It weaves captivating interfaces with real-time sorcery, allowing wizards to craft, prototype, and enchant together in a boundless creative realm.',
              Website: 'Figma.com',
              Link: 'https://www.figma.com/',
            },
            AdobeXD: {
              Description:
                'Adobe XD, an enchanting design software, weaves user experiences. It crafts captivating interfaces with artful interactions, casting spells for web and app sorcery, bringing visions to life.',
              Website: 'Adobe.com',
              Link: 'https://www.adobe.com/',
            },
            AdobeIllustrator: {
              Description:
                'Adobe Illustrator, a masterful design sorcerer, crafts visual enchantments. With vector magic, it conjures captivating illustrations and graphics, breathing life into digital realms with creative spells.',
              Website: 'Adobe.com',
              Link: 'https://www.adobe.com/',
            },
            AdobePhotoshop: {
              Description:
                'Photoshop, the artful magician of imagery, enchants pixels. It transforms photos and graphics with spells of editing, retouching, and manipulation, creating captivating visuals that defy reality.',
              Website: 'Adobe.com',
              Link: 'https://www.adobe.com/',
            },
            GIMP: {
              Description:
                'GIMP, the open-source enchantress of imagery, wields creative magic. It crafts captivating graphics with powerful spells of editing, retouching, and manipulation, conjuring digital wonders for all.',
              Website: 'Gimp.com',
              Link: 'https://www.gimp.org/',
            },
            Nginx: {
              Description:
                'NGINX, a mystical web server, accelerates enchanting journeys. It balances, caches, and safeguards with sorcery, providing high-performance and secure passage through the ethereal realms of the internet.',
              Website: 'Nginx.com',
              Link: 'https://www.nginx.com/',
            },
            Apache: {
              Description:
                'Apache, an ancient server sorcerer, hosts digital realms. With spells of flexibility and open-source might, it enchants websites, conjuring pages and files for all who seek its magic.',
              Website: 'HTTPD.Apache.org',
              Link: 'https://httpd.apache.org/',
            },
            Ubuntu: {
              Description:
                'Ubuntu, a benevolent Linux enchantment, beckons community spirit. It bestows free and open-source spells, weaving a user-friendly OS that empowers wizards to navigate the digital landscape.',
              Website: 'Ubuntu.com',
              Link: 'https://ubuntu.com/',
            },
            buttonOne: 'Front-End',
            buttonTwo: 'Back-End',
            buttonThree: 'Design',
            buttonFour: 'Servers',
          },
          myWorkPage: {
            heroHeading: '<0>Step into the gallery of <1>my creations</1>.</0>',
            heroParagraphOne:
              'Here, where the arcane art of front-end development intertwines with imagination. Behold, a tapestry of web wonders woven with HTML spells, CSS potions, JavaScript scrolls and React enchantments.',
            heroParagraphAccent:
              'These projects are the manifestation of my digital sorcery, inviting you to witness the magic forged through pixels and code.',
            ProjectsTitle: '<0>My<1>Skills</1></0>',
            ProjectsUsedTechnologies: 'Used technologies',
            ProjectOneTitle: 'Company website with “offer cart” and offer inquiry functionality.',
            ProjectOneParagraph:
              'A website I conjured for thy esteemed client!, woven with spells of captivating design and potent React enchantments. It weaves their essence into the very fabric of the internet, summoning new clients and offering a grand stage for their magical offerings, all in the pursuit of increased client satisfaction and a bigger online presence.',
            ProjectOneWebsite: 'symbios.pl',
            ProjectOneLink: 'https://symbios.pl/',
            ProjectOneType: 'Commercial',
            ProjectTwoTitle: 'My portfolio website based on React, designed in Figma',
            ProjectTwoParagraph:
              'By the magic of code and artistry, I crafted a digital grimoire – my front-end portfolio website. It reveals the essence of my sorcery, showcasing spells of design and enchantments of interactivity. With every click, visitors journey deeper into the mystic realm of my creations, where I, the web wizard, introduce myself with elegance and skill.',
            ProjectTwoWebsite: 'WizDev.de',
            ProjectTwoLink: 'https://wizdev.de/',
            ProjectTwoType: 'Hobby',
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
