import { useTranslation } from 'react-i18next'

import bottomDivider from '../../assets/BeforeFooterBottomDivider.svg'
import upperDivider from '../../assets/ContactDivider.svg'
import ContainerWithContent from '../UI/Containers/ContainerWithContent'
import HeadingSecondary from '../UI/Heading/HeadingSecondary'
import ListContactOptions from '../UI/ListContactOptions'
import Paragraph from '../UI/Paragraph/Paragraph'

const ContactSectionOptions = () => {
  const { t } = useTranslation()
  return (
    <section
      id="hero"
      className="bg-contact-form-pattern min-h-dvh bg-repeat py-12 flex flex-col md:flex-row justify-center items-center relative px-6"
    >
      <ContainerWithContent additionalClasses="!justify-center">
        <div>
          <HeadingSecondary decoration="partial" transKey="ContactPage.FormHeading" />
          <Paragraph
            decoration="none"
            textContent={t('ContactPage.FormSubHeading')}
            additionalExternalClasses="text-left"
          />
          <ListContactOptions
            elements={[
              `${t('ContactPage.FormListItemOne')}`,
              `${t('ContactPage.FormListItemTwo')}`,
              `${t('ContactPage.FormListItemThree')}`,
              `${t('ContactPage.FormListItemFour')}`,
            ]}
          />
          <Paragraph decoration="full" textContent={t('ContactPage.FormEndingAccent')} />
        </div>
      </ContainerWithContent>
      <img src={upperDivider} alt="Section bottom divider image" className="w-full absolute top-[-1px] rotate-180" />
      <img src={bottomDivider} alt="Section bottom divider image" className="w-full absolute bottom-[-1px]" />
    </section>
  )
}

export default ContactSectionOptions
