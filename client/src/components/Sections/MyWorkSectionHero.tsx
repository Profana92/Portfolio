import { useTranslation } from 'react-i18next'

import bottomDivider from '../../assets/myWorkdivider.svg'
import ContainerWithContent from '../UI/Containers/ContainerWithContent'
import HeadingMain from '../UI/Heading/HeadingMain'
import Paragraph from '../UI/Paragraph/Paragraph'

const MyWorkSectionHero = () => {
  const { t } = useTranslation()

  return (
    <section
      id="hero"
      className="relative bg-myWork-hero-pattern lg:bg-myWork-hero-pattern-desktop min-h-dvh bg-cover bg-no-repeat pt-12 flex justify-center lg:justify-end items-center"
    >
      <ContainerWithContent additionalClasses="lg:flex-col lg:items-end">
        <HeadingMain decorationInternal={false} textSource="myWorkPage.heroHeading" additionalExternalClasses="" />
        <Paragraph decoration="none" textContent={t('myWorkPage.heroParagraphOne')} />
        <Paragraph decoration="full" textContent={t('myWorkPage.heroParagraphAccent')} />
      </ContainerWithContent>
      <img
        src={bottomDivider}
        alt="Section bottom divider image"
        className="w-full absolute bottom-[-1px] 2xl:bottom-[-4px]"
      />
    </section>
  )
}

export default MyWorkSectionHero
