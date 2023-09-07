import { Trans, useTranslation } from 'react-i18next'

// import { Link } from 'react-router-dom'
import divider from '../../assets/BeforeFooterBottomDivider.svg'
const MyWorkSectionBlog = () => {
  const { t } = useTranslation()
  return (
    <section id="blog" className="bg-gradient-to-b from-[#15081B] to-[#3C052D] relative px-9 py-12">
      <div className="max-w-[1920px] mx-auto text-center flex flex-col min-h-[500px] justify-center pb-[100px] lg:pb-[200px]">
        <Trans i18nKey="myWorkPage.MyBlogHeading">
          <h2 className="mx-auto font-display text-2xl md:text-5xl font-medium text-center mb-12">
            My <span className="text-transparent bg-gradient-to-br bg-clip-text from-pink to-orange">Skills</span>
          </h2>
        </Trans>
        <p className=" leading-normal text-sm md:text-base">{t('myWorkPage.MyBlogParagraph')}</p>
        {/* <Link
          className="box-border my-6 py-2 px-5 bg-buttonOrange mr-auto text-center leading-[50px] rounded-[5px] text-sm md:text-base md:leading-[50px]"
          to="https://www.figma.com/file/imXuoBkK0z5RC6c6iNKRA6/Portfolio-W.Marczak?node-id=90%3A4875&mode=dev"
        >
          {t('myWorkPage.MyBlogCallButton')}
        </Link> */}
        <p className="text-[#ffffffA1] py- leading-normal text-sm md:text-base">{t('myWorkPage.MyBlogCommingSoon')}</p>
        <img
          src={divider}
          alt="Section bottom divider image not-sr-only"
          className="w-full absolute left-0 bottom-[-1px] 2xl:bottom-[-4px]"
        />
      </div>
    </section>
  )
}

export default MyWorkSectionBlog
