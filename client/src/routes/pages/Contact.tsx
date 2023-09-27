import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'

import ReactHelmet from '../../components/Effects/ReactHelmet'
import HeroSection from '../../components/Sections/ContactSectionHero'
import ContactSectionOptions from '../../components/Sections/ContactSectionOptions'

const Contact = () => {
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
    <>
      <ReactHelmet
        title={t('helmet.contactTitle')}
        description={t('helmet.contactDescription')}
        contentLanguage={t('helmet.code')}
      />
      <HeroSection />
      <ContactSectionOptions />
    </>
  )
}

export default Contact
