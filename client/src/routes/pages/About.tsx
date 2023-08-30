import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'

import HeroSection from '../../components/Sections/AboutSectionHero'
import AboutSectionMySkills from '../../components/Sections/AboutSectionMySkills'
const About = () => {
  const { t } = useTranslation()
  const location = useLocation()
  useEffect(() => {
    const hashElement = () => {
      const hash = location.hash
      const removeHashCharacter = (str: string) => {
        const result = str.slice(1)
        return result
      }
      if (hash) {
        const element = document.getElementById(removeHashCharacter(hash))!
        return element
      } else {
        return null
      }
    }
    const hashElementEl = hashElement()
    if (hashElementEl) {
      hashElementEl.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }, [])

  return (
    <div>
      <Helmet>
        <title> Home | Wojciech Marczak | Let&apos;s Build The Web Together! </title>
        <meta
          name="description"
          content="Welcome to my front-end developer portfolio! Take a tour of my work, skills, and projects. Let's create stunning websites together! Enjoy your visit!"
        />
      </Helmet>
      <HeroSection
        buttonOne={t('aboutPage.buttonOne')}
        buttonTwo={t('aboutPage.buttonTwo')}
        heroParagraphOne={t('aboutPage.heroParagraphOne')}
        heroParagraphTwo={t('aboutPage.heroParagraphTwo')}
        heroParagraphThree={t('aboutPage.heroParagraphThree')}
        heroParagraphFour={t('aboutPage.heroParagraphFour')}
        heroParagraphAccent={t('aboutPage.heroParagraphAccent')}
      />
      <AboutSectionMySkills />
    </div>
  )
}

export default About
