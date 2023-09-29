import { useTranslation } from 'react-i18next'

// import divider from '../../assets/BeforeFooterBottomDivider.svg'
import ContainerWithContent from '../UI/Containers/ContainerWithContent'
import HeadingSecondary from '../UI/Heading/HeadingSecondary'
import Paragraph from '../UI/Paragraph/Paragraph'
const MyWorkSectionBlog = () => {
  const { t } = useTranslation()
  return (
    <>
      <section id="blog" className="bg-gradient-to-b from-[#15081B] to-[#3C052D]">
        <ContainerWithContent additionalClasses="lg:flex-col">
          <HeadingSecondary decoration="partial" transKey="myWorkPage.MyBlogHeading" />
          <Paragraph decoration="none" textContent={t('myWorkPage.MyBlogParagraph')} />
          <Paragraph
            decoration="none"
            textContent={t('myWorkPage.MyBlogCommingSoon')}
            additionalExternalClasses="text-[#ffffffA1]"
          />
          {/* <img
          src={divider}
          alt="Section bottom divider image not-sr-only"
          className="w-full absolute left-0 bottom-[-1px] 2xl:bottom-[-4px]"
        /> */}
        </ContainerWithContent>
      </section>
      <div className="h-[100px] bg-gradient-to-b from-[#3C052D] to-[#440B7E]"></div>
    </>
  )
}

export default MyWorkSectionBlog
