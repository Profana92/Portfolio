import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'

import ReactHelmet from '../../components/Effects/ReactHelmet'
import MyWorkSectionBlog from '../../components/Sections/MyWorkSectionBlog'
import HeroSection from '../../components/Sections/MyWorkSectionHero'
import MyWorkSectionProjects from '../../components/Sections/MyWorkSectionProjects'
import MyWorkSectionServices from '../../components/Sections/MyWorkSectionServices'

const MyWork = () => {
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
        title={t('helmet.myWorkTitle')}
        description={t('helmet.myWorkDescription')}
        contentLanguage={t('helmet.code')}
      />
      <HeroSection
        heroParagraphOne={t('myWorkPage.heroParagraphOne')}
        heroParagraphAccent={t('myWorkPage.heroParagraphAccent')}
      />
      <MyWorkSectionProjects />
      <MyWorkSectionServices />
      <MyWorkSectionBlog />
    </>
  )
}

export default MyWork
