import { initReactI18next } from 'react-i18next'
import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: ['en', 'pl', 'de'],
    interpolation: {
      escapeValue: false,
    },
    nonExplicitSupportedLngs: true,
    resources: {
      en: {
        translation: {
          helmet: {
            code: 'en-us',
            homeTitle: "Home | Let's Build Together!",
            myWorkTitle: 'My Work | See my creations',
            contactTitle: 'Contact | Summon me!',
            aboutTitle: 'About | My personal story',
            homeDescription:
              'Step into the Enchanted Realm of My Front-End Developer Portfolio! Embark on a magical journey through my creations, skills, and projects. Together, we shall conjure extraordinary websites! May your visit be filled with wonder and delight!',
            myWorkDescription: 'Behold the wondrous manifestations of my enchanted craftsmanship!',
            contactDescription:
              "The magic of communication awaits your conjuration. Contact me, and let's weave wonders together.",
            aboutDescription: 'Venture deeper into my mystical realm, where secrets of my journey unfold.',
          },
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
            heroHeading: '<0>Welcome here, where dreams <1>COME ALIVE</1>!</0>',
            heroParagraph:
              "<0>Hello! I'm <1>Wojciech Marczak</1>, a Front-End Wizard based in a magical city of Leipzig, in the realm of Germany! I'm fervently devoted to crafting top-tier websites, infusing a touch of magic into each of my creations.</0>",
            buttonOne: 'My Spells',
            buttonTwo: 'My creations',
            callToAction: 'See The Magic!',
            sectionOneHeading: '<0>Those are my <1>Spells</1></0>',
            sectionOneParagraph:
              'In this dimension, I wield not wands and staffs, but rather completly other tools to create magical online experiences.',
            sectionOneParagraphToolkit:
              'My toolkit comprises HTML incantations, CSS elixirs, JavaScript parchments, and React enchantments.',
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
            heroHeading: '<0>So, <1>Who Am I</1>?</0>',
            heroParagraphOne:
              'I’m a passionate front-end developer with a creative flair for crafting magical user experiences. I utilize HTML, CSS, JS, and React for website development, and employ Figma, Adobe XD, Adobe Illustrator, and Photoshop for design. Deploying websites is achieved through Ubuntu, Nginx, and Apache. Moreover, I bring online shops to life using Wordpress, Divi, and Woocommerce.',
            heroParagraphAccent: "Let's collaborate and bring ideas to life through elegant code.",
            buttonOne: 'My Work',
            buttonTwo: 'Contact Me',
          },
          mySkills: {
            HTML: {
              Description:
                'HTML stands as the spell of structure, shaping the digital tapestry of elements. With mystic tags and attributes, it weaves text, images, and links into a harmonious structure that brings forth the wondrous landscapes of the online realm.',
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
                'WooCommerce is a enchanting WordPress plugin, transforming websites into online stores. It conjures product listings, payment methods, and shopping carts to create magical digital marketplaces.',
              Website: 'WooCommerce.com',
              Link: 'https://woocommerce.com/',
            },
            Wordpress: {
              Description:
                'WordPress is an open-source platform that empowers individuals and organizations to create, customize, and manage dynamic websites and content without the need for extensive coding skills.',
              Website: 'WordPress.org',
              Link: 'https://pl.wordpress.org/',
            },
            React: {
              Description:
                'React is a JavaScript library, that enchants websites with spells of interactivity. It uses components to craft dynamic and captivating digital experiences, reacting to every user interaction.',
              Website: 'React.dev',
              Link: 'https://react.dev/',
            },
            JavaScript: {
              Description:
                'JavaScript, a magical scripting language, bewitches web pages with interactivity and enchanting behavior. It conjures animations, validates forms, and interacts with users, breathing life into the digital canvas.',
              Website: 'developer.mozilla.org',
              Link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
            },
            TypeScript: {
              Description:
                'TypeScript, a magical extension of JavaScript, enhances the website creation process by introducing types and static analysis, thus helping developers avoid mistakes and produce cleaner, more readable code.',
              Website: 'TypeScriptLang.org',
              Link: 'https://www.typescriptlang.org/',
            },
            MJML: {
              Description:
                'MJML, the mystical framework, enables the creation of captivating marketing emails through its responsive email spells. It weaves alluring layouts with a straightforward HTML-like syntax, ensuring compatibility across all magical devices and mail clients.',
              Website: 'MJML.io',
              Link: 'https://mjml.io/',
            },
            NodeJs: {
              Description:
                'Node.js is a runtime that empowers web sorcerers to craft powerful server spells. The result is lightning-fast, scalable, and magical network applications.',
              Website: 'NodeJS.org',
              Link: 'https://nodejs.org/en',
            },
            Expressjs: {
              Description:
                'Express.js is the mystical tool of web development, a versatile spellbook for Node.js. With its magical incantations, it effortlessly conjures robust and enchanting web applications.',
              Website: 'ExpressJS.com',
              Link: 'https://expressjs.com/',
            },
            MongoDB: {
              Description:
                'MongoDB, a mystical NoSQL database, stores sacred data with flexibility. It conjures collections and documents, offering scalable and schema-less realms for modern digital sorcery.',
              Website: 'MongoDB.com',
              Link: 'https://www.mongodb.com/',
            },
            Figma: {
              Description:
                'Figma, a magical design tool, brings collaborative sorcery to life. It creates captivating interfaces in real time, letting creators work together in a limitless creative space.',
              Website: 'Figma.com',
              Link: 'https://www.figma.com/',
            },
            AdobeXD: {
              Description:
                'Adobe XD is a revolutionary design tool that connects user experiences with artful precision. It empowers designers to sculpt beautiful interfaces, turning web and app dreams into tangible realities.',
              Website: 'Adobe.com',
              Link: 'https://www.adobe.com/',
            },
            AdobeIllustrator: {
              Description:
                'Adobe Illustrator, a creative enchantment, brings visuals to life. It empowers artists and designers to craft stunning illustrations, logos, and graphics, turning imagination into a flawless reality.',
              Website: 'Adobe.com',
              Link: 'https://www.adobe.com/',
            },
            AdobePhotoshop: {
              Description:
                'Photoshop, is the magician of imagery, which with its powers enchants pixels. It transforms photos and graphics with spells of editing, retouching, and manipulation, creating stunning visual effects.',
              Website: 'Adobe.com',
              Link: 'https://www.adobe.com/',
            },
            GIMP: {
              Description:
                'GIMP, like a magical wand, harnesses the mystical forces of open-source artistry. With its spells of editing and manipulation, it crafts enchanting graphics, painting digital canvases with captivating wonders, inviting all into the realm of boundless creativity.',
              Website: 'Gimp.com',
              Link: 'https://www.gimp.org/',
            },
            Nginx: {
              Description:
                "NGINX, a mystical web server, accelerates every visitor's journey. With its sorcery, it caches and safeguards, providing high-performance and secure passage through the ethereal realms of the internet.",
              Website: 'Nginx.com',
              Link: 'https://www.nginx.com/',
            },
            Apache: {
              Description:
                'Apache, the ancient guardian of digital realms, is a server wizard with boundless power. With its arcane incantations, it ushers websites into existence, weaving intricate networks and enchanting visitors with seamless access to the treasures of the online world.',
              Website: 'HTTPD.Apache.org',
              Link: 'https://httpd.apache.org/',
            },
            Ubuntu: {
              Description:
                "Ubuntu, a versatile sorcerer's operating system, conjures a development environment to suit every web sorcerer's taste. It offers stability, open-source magic, and a vibrant community, empowering developers to create digital masterpieces.",
              Website: 'Ubuntu.com',
              Link: 'https://ubuntu.com/',
            },
            buttonOne: 'Front-End',
            buttonTwo: 'Back-End',
            buttonThree: 'Design',
            buttonFour: 'Servers',
            mySkills: '<0>My <1>Skills</1></0>',
          },
          myWorkPage: {
            heroHeading: '<0>Step into the gallery of <1>my creations</1>.</0>',
            heroParagraphOne:
              "Welcome to the world of creations! Here, you'll find a collection of projects that I've poured my heart and soul into. There's no need for formalities – just dive in and enjoy the journey. Your curiosity will be the greatest guide, so feel free to explore and discover the stories behind my creations.",
            heroParagraphAccent: 'Have fun!',
            ProjectsTitle: '<0>My <1>Projects</1></0>',
            ProjectType: 'Type',
            ProjectsUsedTechnologies: 'Used technologies',
            ProjectOneTitle: 'Company website with “offer cart” and offer inquiry functionality.',
            ProjectOneParagraph:
              'A website I conjured for thy esteemed client! Woven with spells of captivating design and potent React enchantments. It weaves their essence into the very fabric of the internet, summoning new clients and offering a grand stage for their magical offerings, all in the pursuit of increased client satisfaction and a bigger online presence.',
            ProjectOneWebsite: 'symbios.pl',
            ProjectOneLink: 'https://symbios.pl/',
            ProjectOneType: 'Commercial',
            ProjectTwoTitle: 'My portfolio website based on React, designed in Figma',
            ProjectTwoParagraph:
              'By the magic of code and artistry, I crafted a digital grimoire – my front-end portfolio website. It reveals the essence of my sorcery, showcasing spells of design and enchantments of interactivity. With every click, visitors journey deeper into the mystic realm of my creations, where I, the web wizard, thru them - introduce myself.',
            ProjectTwoWebsite: 'WIZdev.de',
            ProjectTwoLink: 'https://wizdev.de/',
            ProjectTwoType: 'Hobby',
            ProjectThreeTitle: 'Customer Relationship Management website project designed in Figma',
            ProjectThreeParagraph:
              "Crafted with the enchanting tools of Vite, React, React Icons, React Router, Redux Toolkit, and the mystical Express.js. It boasts the EJ2 UI library's arcane elegance and is adorned with the ethereal beauty of Tailwind CSS.",
            ProjectThreeWebsite: 'crm.WIZdev.de',
            ProjectThreeLink: 'https://crm.wizdev.de/',
            ProjectThreeType: 'Hobby',
            ServicesTitle: '<0>My <1>Services</1></0>',
            ServiceOneHeading: 'Apps',
            ServiceOneParagraph:
              "I infuse the digital canvas with the enchanting power of React, crafting applications that dance to the rhythm of interactivity. Through components and spells of state management, I bestow websites with fluid interactions, ensuring they adapt seamlessly to every user's incantation.",
            ServiceTwoHeading: 'Online Shops',
            ServiceTwoParagraph:
              "With the enchanting combination of Divi's design wizardry and WooCommerce's e-commerce powers, I create online shops that are nothing short of magical.",
            ServiceThreeHeading: 'Websites',
            ServiceThreeParagraph:
              "As a digital sorcerer, my craft is the art of enchanting websites with the powers of WordPress. With spells of customization and a wizard's touch, I build websites tailored for every taste.",
            ServiceFourHeading: 'E-Mails',
            ServiceFourParagraph:
              'I harness the power of MJML Framework to conjure responsive emails, employing its spells to transmute code into visually stunning messages. This sorcery not only grants them a touch of elegance but also unlocks the unique advantage of compatibility with multiple mail clients.',
            ServiceFiveHeading: 'Design',
            ServiceFiveParagraph:
              'I build websites with attention to detail and creativity using Figma. From pixel-perfect designs to seamless user experiences, I bring your digital vision to life with the power of versatile design tools.',
            MyBlogHeading: '<0>My <1>Blog</1></0>',
            MyBlogParagraph:
              'Join me on a journey through my Blog, where technology and wizardry converge to illuminate the wonders and endless possibilities of the digital realm.',
            MyBlogCallButton: "Let's go!",
            MyBlogCommingSoon: 'Comming soon...',
          },
          ContactPage: {
            HeroHeading: '<0>Connect <1>and</1> Conjure!</0>',
            HeroParagraph:
              "Whether you're embarking on a digital journey ,seeking to collaborate or just want to say “Hi!”, feel free to reach out through the contact form below or drop me a line via email.",
            HeroAccent: "Let's create magic together!",
            FormHeading: '<0>Let <1>the Magic</1> Begin!</0>',
            FormSubHeading: 'Feel free to reach out through various mystical communication channels.',
            FormListItemOne: '<0>send me a whisper via email <1>contact@wizdev.de</1></0>',
            FormListItemTwo: '<0>summon me <1>via LinkedIn</1></0>',
            FormListItemThree: '<0>cast a communication spell <1>with WhatsApp</1></0>',
            FormListItemFour: '<0>get in touch through the <1>ethereal gates of Telegram</1></0>',
            FormListItemFive: '<0>reach me on <1>Instagram</1></0>',
            FormListItemSix: '<0>harness the power of magic with a <1>contact form</1></0>',
            FormEndingParagraph: "Alternatively, you'll find a contact form on the right for your convenience.",
            FormEndingAccent: "Let's connect and create wonders!",
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
            messageStatus: {
              ok: 'Message sent successfully',
              error: 'An error has occurred, try again later',
            },
          },
        },
      },
      pl: {
        translation: {
          helmet: {
            code: 'pl-pl',
            homeTitle: 'Start | Zbudujmy coś wspólnie!',
            myWorkTitle: 'Portfolio | Zobacz moje dzieła',
            contactTitle: 'Kontakt | Przywołaj mnie!',
            aboutTitle: 'O mnie | My personal story',
            homeDescription:
              'Step into the Enchanted Realm of My Front-End Developer Portfolio! Embark on a magical journey through my creations, skills, and projects. Together, we shall conjure extraordinary websites! May your visit be filled with wonder and delight!',
            myWorkDescription: 'Behold the wondrous manifestations of my enchanted craftsmanship!',
            contactDescription:
              "The magic of communication awaits your conjuration. Contact me, and let's weave wonders together.",
            aboutDescription: 'Venture deeper into my mystical realm, where secrets of my journey unfold.',
          },
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
          HomePage: {
            heroHeading: '<0>Witam Cię tu, w miejscu gdzie marzenia <1>OŻYWAJĄ</1>!</0>',
            heroParagraph:
              '<0>Cześć! Nazywam się <1>Wojciech Marczak</1> i jestem Front-End Developerem mieszkającym w magicznym mieście Lipsk, w Niemczech. Jestem żarliwie oddany tworzeniu najlepszych stron internetowych, dodając odrobinę magii do każdego swojego dzieła.</0>',
            buttonOne: 'Moje Czary',
            buttonTwo: 'Moje dzieła',
            callToAction: 'Zobacz magię!',
            sectionOneHeading: '<0>To są moje <1>Czary</1></0>',
            sectionOneParagraph:
              'W tym wymiarze nie władam różdżkami czy laskami, ale raczej zupełnie innymi narzędziami do tworzenia magicznych doświadczeń.',
            sectionOneParagraphToolkit:
              'Na zestaw moich magicznych narzędzi składają się inkantacje HTML, eliksiry CSS, zwoje Javascript oraz czary React.',
            SectionTwoElementOneDescription: 'Czary',
            SectionTwoElementTwoDescription: 'Mikstury',
            SectionTwoElementThreeDescription: 'Zwoje',
            SectionTwoElementFourDescription: 'Uroki',
            SectionTwoElementOneHeading: '<0>Magiczne słowa <1>HTML</1></0>',
            SectionTwoElementTwoHeading: '<0>Mikstury stylu <1>CSS</1></0>',
            SectionTwoElementThreeHeading: '<0>Zwoje <1>JavaScript</1></0>',
            SectionTwoElementFourHeading: '<0>Uroki mocy <1>React</1></0>',
            SectionTwoElementOneParagraph:
              'Za pomocą tych zaklęć rozkazuje przeglądarce internetowej, jak ułożyć elementy, tworząc harmonijną symfonię informacji i estetyki.',
            SectionTwoElementTwoParagraph:
              'Te magiczne mikstury dają niezwykłe rezultaty, nasycając nasze zaklęcia HTML hipnotyzującymi kolorami, kuszącymi czcionkami, urzekającymi animacjami i układami.',
            SectionTwoElementThreeParagraph:
              'Za pomocą tych zwojów mogę przywołać moc interaktywności, bez wysiłku manipulując elementami, animując strony i tworząc dynamiczną treść.',
            SectionTwoElementFourParagraph:
              'Ten urzekający framework w magiczny sposób zmienia doświadczenia użytkownika, bez wysiłku renderując urzekające efekty wizualne, które szybko dostosowują się do każdej interakcji.',
          },
          Footer: {
            Description: 'Niech szept cyfrowego wiatru poniesie Twoją wiadomość do mnie.',
            Heading: '<0>Przywołaj <1>Mnie!</1></0>',
            Paragraph:
              '<0>W krainie internetowej magii <1>Twoja podróż ma znaczenie</1>. Jeśli będziesz szukać mojej rady, nie obawiaj się, bo jestem w odległości jednego zaklęcia. Prześlij swoje zapytania, propozycje, a nawet przyjazne pozdrowienia do mojego cyfrowego eteru. Po machnięciu kursorem i wyrecytowaniu zaklęcia tajemne formy przekażą twoją wiadomość do mojego królestwa. Połączmy się, towarzyszu podróży, i wymieńmy mądrość i zaklęcia w cyfrowej przestrzeni.</0>',
            formFirstNamePlaceholder: 'Imię',
            formLastNamePlaceholder: 'Nazwisko',
            formEmailPlaceholder: 'E-mail',
            formMessagePlaceholder: 'Wiadomość...',
            formSummonButton: 'Przywołaj mnie!',
            formUnderText:
              'Dzieląc się swoimi myślami otwierasz drogę do nieskończonych możliwości. Oczekuj mej odpowiedzi, która splecie nasze losy. Niech piksele zawsze będą po Twojej stronie!',
            aboveFooterMenuText:
              'W świecie internetu, każda linijka kodu stanowi nić magii, a każdy piksel płótno do tworzenia.',
            errorRequired: 'To pole jest wymagane',
            errorMaxLength: 'Przekroczono limit 20 znaków',
            messageStatus: {
              ok: 'Wiadomość wysłana pomyślnie',
              error: 'Wystąpił błąd, spróbuj ponownie później',
            },
          },
          aboutPage: {
            heroHeading: '<0>Kim więc <1>jestem</1>?</0>',
            heroParagraphOne:
              'Jestem zapalonym programistą z kreatywnym zacięciem do tworzenia magicznych doświadczeń użytkownika. Do budowy stron internetowych wykorzystuję HTML, CSS, JS i React, a do projektowania Figmę, Adobe XD, Adobe Illustrator i Photoshop. Wdrażanie stron internetowych odbywa się za pośrednictwem Ubuntu, Nginx i Apache. Ponadto tworzę sklepy internetowe za pomocą Wordpress, Divi i Woocommerce.',
            heroParagraphAccent: 'Powspółpracujmy i powcielajmy nowe pomysły w życie poprzez elegancki kod.',
            buttonOne: 'Moje Prace',
            buttonTwo: 'Skontaktuj się',
          },
          mySkills: {
            HTML: {
              Description:
                'HTML stanowi zaklęcie nadające kształt, kształtujące cyfrowy gobelin elementów. Dzięki mistycznym tagom i atrybutom splata tekst, obrazy i linki w harmonijną strukturę, która ukazuje cudowne krajobrazy świata online.',
              Website: 'developer.mozilla.org',
              Link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
            },
            CSS: {
              Description:
                'Istnieje cudowny język znany jako CSS lub inaczej kaskadowe arkusze stylów. Zaklęcia CSS wydobywają samą esencję piękna i designu na płótno cyfrowego świata.',
              Website: 'developer.mozilla.org',
              Link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
            },
            npm: {
              Description:
                'NPM (Node Package Manager) to magiczne narzędzie JavaScript, umożliwiające bezproblemową instalację, zarządzanie i udostępnianie bibliotek kodu w celu tworzenia urzekających projektów internetowych i oprogramowania.',
              Website: 'NPMjs.com',
              Link: 'https://www.npmjs.com/',
            },
            WooCommerce: {
              Description:
                'WooCommerce to wtyczka WordPressa, przekształcająca strony w sklepy internetowe. Wyczarowuje listy produktów, metody płatności i koszyki zakupowe, aby stworzyć cyfrowe hale targowe.',
              Website: 'WooCommerce.com',
              Link: 'https://woocommerce.com/',
            },
            Wordpress: {
              Description:
                'WordPress to platforma typu open source, która umożliwia osobom i organizacjom tworzenie, dostosowywanie i zarządzanie dynamicznymi witrynami internetowymi i ich treścią bez konieczności posiadania rozległej wiedzy programistycznej.',
              Website: 'WordPress.org',
              Link: 'https://pl.wordpress.org/',
            },
            React: {
              Description:
                'React to biblioteka JavaScript, która nadaje stronom internetowyn magicznej interaktywności. Wykorzystuje komponenty do tworzenia dynamicznych i wciągających doświadczeń cyfrowych, reagując na każdą interakcję użytkownika.',
              Website: 'React.dev',
              Link: 'https://react.dev/',
            },
            JavaScript: {
              Description:
                'JavaScript, magiczny język skryptowy, zaczarowuje strony internetowe dodając im interaktywności. Wywołuje animacje, sprawdza formularze i wchodzi w interakcję z użytkownikami, tchając życie w cyfrowe płótno.',
              Website: 'developer.mozilla.org',
              Link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
            },
            TypeScript: {
              Description:
                'TypeScript, magiczne rozszerzenie JavaScript, usprawnia proces tworzenia strony internetowej poprzez wprowadzenie typów i analizy statycznej, pomagając w ten sposób programistom unikać błędów i tworzyć czystszy, bardziej czytelny kod.',
              Website: 'TypeScriptLang.org',
              Link: 'https://www.typescriptlang.org/',
            },
            MJML: {
              Description:
                'MJML, mistyczny framework, umożliwia tworzenie urzekających marketingowych e-maili za pomocą zaklęć responsywności. Łączy atrakcyjne układy z prostą składnią przypominającą HTML, zapewniając kompatybilność ze wszystkimi magicznymi urządzeniami i klientami pocztowymi.',
              Website: 'MJML.io',
              Link: 'https://mjml.io/',
            },
            NodeJs: {
              Description:
                'Node.js to środowisko wykonawcze, które umożliwia czarodziejom sieci tworzenie potężnych zaklęć serwerowych. Rezultatem są błyskawiczne, skalowalne i magiczne aplikacje sieciowe.',
              Website: 'NodeJS.org',
              Link: 'https://nodejs.org/en',
            },
            Expressjs: {
              Description:
                'Express.js to mistyczne narzędzie do tworzenia stron internetowych, wszechstronna księga zaklęć dla Node.js. Dzięki magicznym zaklęciom z łatwością tworzy niezawodne i czarujące aplikacje internetowe.',
              Website: 'ExpressJS.com',
              Link: 'https://expressjs.com/',
            },
            MongoDB: {
              Description:
                'MongoDB, mistyczna baza danych NoSQL, elastycznie przechowuje zachwycające dane. Przywołuje kolekcje i dokumenty, oferując skalowalne i pozbawione schematów obszary dla współczesnej cyfrowej magii.',
              Website: 'MongoDB.com',
              Link: 'https://www.mongodb.com/',
            },
            Figma: {
              Description:
                'Figma, magiczne narzędzie do projektowania, ożywia magię współpracy. Tworzy urzekające interfejsy w czasie rzeczywistym, umożliwiając twórcom współpracę w nieograniczonej twórczej przestrzeni.',
              Website: 'Figma.com',
              Link: 'https://www.figma.com/',
            },
            AdobeXD: {
              Description:
                'Adobe XD to rewolucyjne narzędzie do projektowania, które łączy doświadczenia użytkownika z artystyczną precyzją. Umożliwia projektantom tworzenie pięknych interfejsów, przekształcanie marzeń o sieci i aplikacjach w namacalną rzeczywistość.',
              Website: 'Adobe.com',
              Link: 'https://www.adobe.com/',
            },
            AdobeIllustrator: {
              Description:
                'Adobe Illustrator to twórcze zaklęcie, które tcha życie w efekty wizualne. Umożliwia artystom i projektantom tworzenie oszałamiających ilustracji, logo i grafik, zamieniając wyobraźnię w nieskazitelną rzeczywistość.',
              Website: 'Adobe.com',
              Link: 'https://www.adobe.com/',
            },
            AdobePhotoshop: {
              Description:
                'Photoshop to pomysłowy magik, który swą mocą zaczarowuje piksele. Przekształca zdjęcia i grafikę za pomocą zaklęć edycji, retuszu oraz manipulacji, tworząc oszałamiające efekty wizualne.',
              Website: 'Adobe.com',
              Link: 'https://www.adobe.com/',
            },
            GIMP: {
              Description:
                'GIMP niczym magiczna różdżka wykorzystuje mistyczne siły artyzmu w stylu open source. Dzięki zaklęciom edycji i manipulacji tworzy urzekającą grafikę, malując cyfrowe płótna cudami, zapraszając wszystkich do krainy nieograniczonej kreatywności.',
              Website: 'Gimp.com',
              Link: 'https://www.gimp.org/',
            },
            Nginx: {
              Description:
                'NGINX, mistyczny serwer sieciowy, przyspiesza podróż każdego odwiedzającego. Dzięki swojej magii buforuje i zabezpiecza, zapewniając wysoką wydajność i bezpieczne przejście przez eteryczne królestwa internetu.',
              Website: 'Nginx.com',
              Link: 'https://www.nginx.com/',
            },
            Apache: {
              Description:
                'Apache, starożytny strażnik cyfrowych królestw, to kreator serwerów o nieograniczonej mocy. Swoimi tajemnymi zaklęciami powołuje do istnienia strony internetowe, tworząc skomplikowane sieci i oczarowując odwiedzających płynnym dostępem do skarbów świata online.',
              Website: 'HTTPD.Apache.org',
              Link: 'https://httpd.apache.org/',
            },
            Ubuntu: {
              Description:
                'Ubuntu, wszechstronny system operacyjny dla czarowników, stwarza środowisko programistyczne odpowiadające gustom każdego czarodzieja internetowego. Oferuje stabilność, magię open source i tętniącą życiem społeczność, umożliwiając programistom tworzenie cyfrowych arcydzieł.',
              Website: 'Ubuntu.com',
              Link: 'https://ubuntu.com/',
            },
            buttonOne: 'Front-End',
            buttonTwo: 'Back-End',
            buttonThree: 'Design',
            buttonFour: 'Servers',
            mySkills: '<0>Moje <1>umiejętności</1></0>',
          },
          myWorkPage: {
            heroHeading: '<0>Wstąp do galerii <1>moich dzieł</1>.</0>',
            heroParagraphOne:
              'Pragnę przywitać Cię w świecie moich dzieł! Znajdziesz tu kolekcję projektów, w które włożyłem swoje serce i duszę. Nie ma potrzeby na formalności - po prostu zanurz się w przygodzie i ciesz się nią. Twoja ciekawość będzie najlepszym przewodnikiem, więć nię krępuj się eksplorować i odkrywać historię moich dzieł.',
            heroParagraphAccent: 'Dobrej zabawy!',
            ProjectsTitle: '<0>Moje <1>Projekty</1></0>',
            ProjectType: 'Typ',
            ProjectsUsedTechnologies: 'Użyte technologie',
            ProjectOneTitle:
              'Firmowa strona internetowa z "koszykiem ofertowym" i funkcjonalnością prośby o wystawienie oferty.',
            ProjectOneParagraph:
              'Strona internetowa, którą wyczarowałem dla szanownego klienta! Utkana z zaklęć o nietuzinkowym designie i potężnych czarów React przywołuje nowych klientów i oferuje wspaniałą scenę dla pozyskiwania magicznych ofert, a wszystko to w dążeniu do zwiększenia zadowolenia klientów i większej obecności marki w Internecie.',
            ProjectOneWebsite: 'symbios.pl',
            ProjectOneLink: 'https://symbios.pl/',
            ProjectOneType: 'Komercyjny',
            ProjectTwoTitle: 'Strona mojego portfolio, oparta o React, zaprojektowana w Figmie',
            ProjectTwoParagraph:
              'Dzięki magii kodu i kunsztu stworzyłem cyfrowy grymuar – moją witrynę z portfolio. Strona ta odsłania istotę moich czarów, ukazując zaklęcia projektowania i interaktywności. Z każdym kliknięciem odwiedzający podróżują głębiej do mistycznej krainy moich dzieł, gdzie ja, kreator ich sieci, poprzez nie się przedstawiam.',
            ProjectTwoWebsite: 'WizDev.de',
            ProjectTwoLink: 'https://wizdev.de/',
            ProjectTwoType: 'Hobby',
            ProjectThreeTitle:
              'Projekt strony internetowej do zarządzania relacjami z klientami zaprojektowany w Figmie',
            ProjectThreeParagraph:
              'Stworzony przy użyciu Vite, React, React Icons, React Router, Redux Toolkit i mistycznego Express.js. Może poszczycić się tajemniczą elegancją biblioteki EJ2 UI i eterycznym pięknem i prostotą Tailwind CSS.',
            ProjectThreeWebsite: 'crm.WIZdev.de',
            ProjectThreeLink: 'https://crm.wizdev.de/',
            ProjectThreeType: 'Hobby',
            ServicesTitle: '<0>Moje <1>Usługi</1></0>',
            ServiceOneHeading: 'Aplikacje',
            ServiceOneParagraph:
              'Wypełniam cyfrowe płótno czarującą mocą React, tworząc aplikacje, które tańczą w rytmie interaktywności. Poprzez komponenty i zaklęcia zarządzania stanem, nadaję stronom płynnych interakcji, zapewniając, że dostosowują się do zaklęć każdego użytkownika.',
            ServiceTwoHeading: 'Sklepy internetowe',
            ServiceTwoParagraph:
              'Dzięki połączeniu magii projektowania Divi i mocy WooCommerce, tworzę po prostu magiczne sklepy internetowe.',
            ServiceThreeHeading: 'Strony internetowe',
            ServiceThreeParagraph:
              'Jako cyfrowy czarodziej zajmuję się sztuką zaklinania stron internetowych mocami WordPressa. Dzięki zaklęciom customizacji i czarodziejskiemu dotykowi tworzę strony internetowe na każdego gustu.',
            ServiceFourHeading: 'E-Maile',
            ServiceFourParagraph:
              'Wykorzystuję moc frameworka MJML do tworzenia responsywnych e-maili, używając jego zaklęć do przekształcania zwykłego kodu w oszałamiające wizualnie wiadomości. Ta magia nie tylko nadaje im odrobinę elegancji, ale także odblokowuje unikalną zaletę kompatybilności z wieloma klientami pocztowymi.',
            ServiceFiveHeading: 'Design',
            ServiceFiveParagraph:
              'Tworzę strony internetowe z przywiązaniem do detali i kreatywnością przy pomocy programu Figma. Od projektów "pixel-perfect" po bezproblemowe doświadczenia użytkownika, ożywiam Twoją cyfrową wizję dzięki mocy wszechstronnych narzędzi projektowych.',
            MyBlogHeading: '<0>Mój <1>Blog</1></0>',
            MyBlogParagraph:
              'Dołącz do mnie w mistycznej podróży po moim blogu, gdzie technologia i magia zderzają się, aby rzucić światło na cuda cyfrowej rzeczywistości.',
            MyBlogCallButton: 'Zobacz!',
            MyBlogCommingSoon: 'Nadejdzie wkrótce...',
          },
          ContactPage: {
            HeroHeading: '<0>Skontaktuj się <1>i</1> czaruj ze mną!</0>',
            HeroParagraph:
              'Niezależnie od tego, czy wyruszasz w cyfrową podróż, szukasz współpracy, czy po prostu chcesz się przywitać, skontaktuj się ze mną za pomocą poniższego formularza kontaktowego lub napisz do mnie e-mail.',
            HeroAccent: 'Zaczarujmy coś razem!',
            FormHeading: '<0>Niech <1>magia</1> się rozpocznie!</0>',
            FormSubHeading: 'Skontaktuj się ze mną poprzez dowolną z poniższych mistycznych form.',
            FormListItemOne: '<0>Wyślij mi wiadomość email <1>contact@wizdev.de</1></0>',
            FormListItemTwo: '<0>Przywołaj mnie przez <1>LinkedIn</1></0>',
            FormListItemThree: '<0>Rzuć czar komunikacji <1>WhatsApp</1></0>',
            FormListItemFour: '<0>Skontaktuj się poprzez eteryczne bramy <1>Telegrama</1></0>',
            FormListItemFive: '<0>Skontaktuj się poprzez eteryczne bramy <1>Instagrama</1></0>',
            FormListItemSix: '<0>Wykorzystaj moc magii dzięki <1>formularzowi kontaktowemu</1></0>',
            FormEndingParagraph: 'Alternatywnie, dla swojej wygody formularz kontaktowy znajdziesz po prawej stronie.',
            FormEndingAccent: 'Połączmy siły i czarujmy razem!',
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
