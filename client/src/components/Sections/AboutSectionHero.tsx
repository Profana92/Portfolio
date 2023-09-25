import { useTranslation } from 'react-i18next'

import bottomDivider from '../../assets/aboutHeroDivider.svg'
import Button from '../UI/Buttons/Button'
import ContainerWithContent from '../UI/Containers/ContainerWithContent'
import HeadingMain from '../UI/Heading/HeadingMain'
import Paragraph from '../UI/Paragraph/Paragraph'
const AboutSectionHero = () => {
  const { t } = useTranslation()
  return (
    <section
      id="hero"
      className="bg-about-hero-pattern bg-[left_-300px_bottom] sm:bg-[left_-200px_bottom] md:bg-[left_-200px_bottom] lg:bg-[center_-500px_bottom] xl:bg-[center_-500px_bottom] 2xl:bg-[center_bottom] min-h-dvh bg-cover bg-no-repeat  py-12 flex justify-center lg:justify-end items-center relative"
    >
      <ContainerWithContent additionalClasses="lg:flex-col lg:items-end ">
        <div>
          <HeadingMain decorationInternal={false} textSource="aboutPage.heroHeading" additionalExternalClasses="" />
          <Paragraph decoration="none" textContent={t('aboutPage.heroParagraphOne')} />
          <Paragraph decoration="none" textContent={t('aboutPage.heroParagraphTwo')} />
          <Paragraph decoration="none" textContent={t('aboutPage.heroParagraphThree')} />
          <Paragraph decoration="none" textContent={t('aboutPage.heroParagraphFour')} />
          <Paragraph decoration="full" textContent={t('aboutPage.heroParagraphAccent')} />
          <div className="relative z-10">
            <Button type="primary" textSource={t('aboutPage.buttonOne')} link="/my-work/#projects" />
            <Button type="secondary" textSource={t('aboutPage.buttonTwo')} link="/my-work/#projects" />
          </div>
        </div>
      </ContainerWithContent>
      <img src={bottomDivider} alt="Section bottom divider image" className="z-0 w-full absolute bottom-0" />
    </section>
  )
}

export default AboutSectionHero
