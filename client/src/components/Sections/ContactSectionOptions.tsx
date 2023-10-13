import { useTranslation } from 'react-i18next'

// import bottomDivider from '../../assets/BeforeFooterBottomDivider.svg'
import upperDivider from '../../assets/ContactDivider.svg'
import Wand from '../Icons/Wand'
import ContainerHalf from '../UI/Containers/ContainerHalf'
import ContainerWithContent from '../UI/Containers/ContainerWithContent'
import HeadingSecondary from '../UI/Heading/HeadingSecondary'
import ListContactOptions from '../UI/ListContactOptions'
import Paragraph from '../UI/Paragraph/Paragraph'
const ContactSectionOptions = () => {
  const { t } = useTranslation()
  return (
    <section
      id="contact-options"
      className="bg-contact-form-pattern min-h-dvh bg-repeat py-12 flex flex-col md:flex-row justify-center items-center relative px-6"
    >
      <ContainerWithContent additionalClasses="">
        <ContainerHalf additionalClasses="w-full lg:w-1/2">
          <HeadingSecondary decoration="partial" transKey="ContactPage.FormHeading" />
          <Paragraph
            decoration="none"
            textContent={t('ContactPage.FormSubHeading')}
            additionalExternalClasses="text-center lg:text-left"
          />
          <ListContactOptions
            elements={[
              { link: '#contact-form', textContent: 'ContactPage.FormListItemSix' },
              { link: 'mailto:abc@example.com', textContent: 'ContactPage.FormListItemOne' },
              {
                link: 'https://www.linkedin.com/in/wojciech-marczak/',
                textContent: 'ContactPage.FormListItemTwo',
                target: '_blank',
              },
              {
                link: 'https://www.instagram.com/wizdevlabs/',
                textContent: 'ContactPage.FormListItemFive',
                target: '_blank',
              },
              { link: 'https://wa.me/4917631256056', textContent: 'ContactPage.FormListItemThree', target: '_blank' },
              {
                link: 'https://WIZdevLabs.t.me',
                textContent: 'ContactPage.FormListItemFour',
                target: '_blank',
              },
            ]}
          />
          <Paragraph
            decoration="full"
            textContent={t('ContactPage.FormEndingAccent')}
            additionalExternalClasses="mx-auto lg:mx-0 text-center lg:text-left"
          />
        </ContainerHalf>
        <ContainerHalf additionalClasses="px-12 w-full lg:w-1/2 max-w-md">
          <Wand />
        </ContainerHalf>
      </ContainerWithContent>
      <img src={upperDivider} alt="Section bottom divider image" className="w-full absolute top-[-1px] rotate-180" />
      <div className="h-[100px] bg-gradient-to-b from-[#0A012090] to-[#440B7E] absolute bottom-0 w-full"></div>
      {/* <img src={bottomDivider} alt="Section bottom divider image" className="w-full absolute bottom-[-1px]" /> */}
    </section>
  )
}

export default ContactSectionOptions
