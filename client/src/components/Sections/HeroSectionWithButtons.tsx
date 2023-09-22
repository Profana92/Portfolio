import { useTranslation } from 'react-i18next'

import Button from '../UI/Buttons/Button'
import CTA from '../UI/Buttons/CTA'
import HeadingMain from '../UI/Heading/HeadingMain'
import Paragraph from '../UI/Paragraph/Paragraph'

const scrollHandler = () => {
  if (document.getElementById('magic') !== null) {
    const element = document.getElementById('magic')!
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

const HeroSection = () => {
  const { t } = useTranslation()
  return (
    <section
      id="home"
      className="bg-home-hero-pattern min-h-dvh bg-cover bg-no-repeat bg-bottom pt-12 flex justify-center items-center"
    >
      <div className="mx-auto p-12 text-center lg:pr-[40vw] lg:text-left">
        <HeadingMain
          decorationInternal={false}
          textSource="HomePage.heroHeading"
          additionalExternalClasses=""
          additionalInternalClasses=""
        />
        <Paragraph
          decoration="partial"
          decorationInternal={true}
          textKey="HomePage.heroParagraph"
          textContent="HomePage.heroParagraph"
          additionalExternalClasses=""
          additionalInternalClasses=""
        />
        <Button type="primary" textSource={t('HomePage.buttonOne')} link="/#magic" />
        <Button type="secondary" textSource={t('HomePage.buttonTwo')} link="/my-work/#projects" />
      </div>
      <CTA textContent={t('HomePage.callToAction')} scrollHandler={scrollHandler} />
    </section>
  )
}

export default HeroSection
