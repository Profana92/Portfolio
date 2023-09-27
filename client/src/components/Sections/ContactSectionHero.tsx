import { useTranslation } from 'react-i18next'

import bottomDivider from '../../assets/ContactDivider.svg'
import ContainerWithContent from '../UI/Containers/ContainerWithContent'
import HeadingMain from '../UI/Heading/HeadingMain'
import Paragraph from '../UI/Paragraph/Paragraph'

const ContactSectionHero = () => {
  const { t } = useTranslation()
  return (
    <section
      id="hero"
      className="bg-contact-hero-pattern min-h-dvh bg-cover bg-no-repeat py-12 flex justify-center lg:justify-end items-center relative"
    >
      <ContainerWithContent additionalClasses="lg:flex-col lg:items-end">
        <div>
          <HeadingMain decorationInternal={false} textSource="ContactPage.HeroHeading" additionalExternalClasses="" />
          <Paragraph decoration="none" textContent={t('ContactPage.HeroParagraph')} />
          <Paragraph decoration="full" textContent={t('ContactPage.HeroAccent')} />
        </div>
      </ContainerWithContent>
      <img src={bottomDivider} alt="Section bottom divider image" className="w-full absolute bottom-0" />
    </section>
  )
}

export default ContactSectionHero
