import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import Hands from '../../assets/Hands.png'
import InstagramIcon from '../../assets/InstagramIcon.svg'
import LinkedInIcon from '../../assets/LinkedInIcon.svg'
// import MessangerIcon from '../../assets/MessangerIcon.svg'
import TwitterIcon from '../../assets/TwitterIcon.svg'
import LanguageSwitcherMobile from '../Header/LanguageSwitcherMobile'
import HeadingSecondary from '../UI/Heading/HeadingSecondary'
import Paragraph from '../UI/Paragraph/Paragraph'
import ParagraphUppercase from '../UI/Paragraph/ParagraphUppercase'

import FooterForm from './FooterForm'
const Footer = () => {
  const { t } = useTranslation()
  return (
    <footer className="bg-gradient-to-b from-[#440B7E] to-[#090120] lg:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 bg-[#D9D9D90D] max-w-[90vw] mx-auto rounded-md shadow-lg lg:gap-x-6 xl:gap-x-12 my-12 lg:max-w-[1920px] relative">
        <div className="row-start-1 row-end-2 lg:row-start-1 lg:row-end-4 p-6 ">
          <ParagraphUppercase textContent={t('Footer.Description')} />
          <HeadingSecondary decoration="partial" transKey="Footer.Heading" />
          <Paragraph decoration="partial" decorationInternal={true} textKey="Footer.Paragraph" />
        </div>
        <div className="row-start-4 row-end-5 px-6 flex justify-between">
          <div className="flex gap-3 my-5 flex-wrap max-w-[40%]">
            <Link to="https://www.instagram.com/wizdevlabs/">
              <img src={InstagramIcon} alt="Instagram Icon with link" className="w-8 h-8 lg:w-10 lg:h-10" />
            </Link>
            <Link to="https://twitter.com/WIZdevLabs">
              <img src={TwitterIcon} alt="Twitter Icon with link" className="w-8 h-8 lg:w-10 lg:h-10" />
            </Link>
            {/* <Link to="">
              <img src={MessangerIcon} alt="MessangerIcon Icon with link" className="w-8 h-8 lg:w-10 lg:h-10" />
            </Link> */}
            <Link to="https://www.linkedin.com/in/wojciech-marczak-39bb89104/">
              <img src={LinkedInIcon} alt="LinkedInIcon Icon with link" className="w-8 h-8 lg:w-10 lg:h-10" />
            </Link>
          </div>
          <LanguageSwitcherMobile />
        </div>
        <div className="row-start-2 row-end-3 lg:row-start-1 lg:row-end-5 lg:col-start-2 lg:col-end-3 px-6 lg:p-6">
          <FooterForm
            formMessagePlaceholder={t('Footer.formMessagePlaceholder')}
            formSummonButton={t('Footer.formSummonButton')}
            formFirstNamePlaceholder={t('Footer.formFirstNamePlaceholder')}
            formLastNamePlaceholder={t('Footer.formLastNamePlaceholder')}
            errorRequired={t('Footer.errorRequired')}
            errorMaxLength={t('Footer.errorMaxLength')}
            formEmailPlaceholder={t('Footer.formEmailPlaceholder')}
          />
          <Paragraph decoration="none" textContent={t('Footer.formUnderText')} />
        </div>
        <div className="lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-5">
          <div className="m-6 lg:my-6">
            <q className="my-6 text-center lg:text-left font-light text-sm lg:text-base">
              {t('Footer.aboveFooterMenuText')}
            </q>
            <div className="flex text-sm lg:text-base lg:gap-2 my-6">
              <div className="w-1/4 flex flex-col">
                <Link to={'/#home'} className="text-orange">
                  {t('navigation.home')}
                </Link>
                <Link to={'/#magic'} className="text-white">
                  {t('navigation.magic')}
                </Link>
                <Link to={'/#tools'} className="text-white">
                  {t('navigation.tools')}
                </Link>
              </div>
              <div className="w-1/4 flex flex-col">
                <Link to={'/my-work/#hero'} className="text-orange">
                  {t('navigation.myWork')}
                </Link>
                <Link to={'/my-work/#projects'} className="text-white">
                  {t('navigation.projects')}
                </Link>
                <Link to={'/my-work/#services'} className="text-white">
                  {t('navigation.services')}
                </Link>
                <Link to={'/my-work/#blog'} className="text-white">
                  {t('navigation.blog')}
                </Link>
              </div>
              <div className="w-1/4 flex flex-col">
                <Link to={'/about/#hero'} className="text-orange">
                  {t('navigation.about')}
                </Link>

                <Link to={'/about/#skills'} className="text-white">
                  {t('navigation.skills')}
                </Link>
              </div>
              <div className="w-1/4 flex flex-col">
                <Link to={'/contact#hero'} className="text-orange">
                  {t('navigation.contact')}
                </Link>
              </div>
            </div>
          </div>
          <img
            src={Hands}
            alt="Image of hands with crystal ball"
            className="absolute bottom-0 right-0 hidden lg:block"
          />
        </div>
      </div>
    </footer>
  )
}

export default Footer
