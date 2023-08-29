import { Trans, useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import Hands from '../../assets/Hands.png'
import InstagramIcon from '../../assets/InstagramIcon.svg'
import LinkedInIcon from '../../assets/LinkedInIcon.svg'
import MessangerIcon from '../../assets/MessangerIcon.svg'
import LanguageSwitcherMobile from '../Header/LanguageSwitcherMobile'

import FooterForm from './FooterForm'
const Footer = () => {
  const { t } = useTranslation()
  return (
    <footer className="bg-gradient-to-b from-[#440B7E] to-[#090120]">
      <div className="flex justify-items-center bg-[#D9D9D90D] max-w-[90vw] mx-auto m-20 gap-6 rounded-md shadow-lg">
        <div className="w-1/3 flex-col p-5">
          <p className="uppercase font-light text-xs text-[#ffffffBF] my-5">{t('Footer.Description')}</p>
          <Trans i18nKey={'Footer.Heading'}>
            <h2 className="font-display text-2xl md:text-5xl font-medium max-w-xl my-5">
              This is a dummy text. If you can see it contact
              <span className="text-transparent bg-gradient-to-br bg-clip-text from-pink to-orange">
                The Administrator
              </span>
            </h2>
          </Trans>
          <Trans i18nKey={'Footer.Paragraph'}>
            <p className="text-sm md:text-base">
              This is a dummy text. If you can see it contact
              <span className="text-transparent bg-gradient-to-br bg-clip-text from-pink to-orange">
                The Administrator
              </span>
            </p>
          </Trans>
          <div className="flex gap-4 my-5">
            <Link to="/">
              <img src={InstagramIcon} alt="Instagram Icon with link" className="w-10 h-10" />
            </Link>
            <Link to="/">
              <img src={MessangerIcon} alt="MessangerIcon Icon with link" className="w-10 h-10" />
            </Link>
            <Link to="/">
              <img src={LinkedInIcon} alt="LinkedInIcon Icon with link" className="w-10 h-10" />
            </Link>
          </div>
          <LanguageSwitcherMobile />
        </div>
        <div className="w-1/3 py-10 px-5">
          <FooterForm
            formMessagePlaceholder={t('Footer.formMessagePlaceholder')}
            formSummonButton={t('Footer.formSummonButton')}
            formFirstNamePlaceholder={t('Footer.formFirstNamePlaceholder')}
            formLastNamePlaceholder={t('Footer.formLastNamePlaceholder')}
            errorRequired={t('Footer.errorRequired')}
            errorMaxLength={t('Footer.errorMaxLength')}
            formEmailPlaceholder={t('Footer.formEmailPlaceholder')}
          />
          <p className="font-light py-5">{t('Footer.formUnderText')}</p>
        </div>
        <div className="w-1/3 py-10 px-5 relative">
          <div className="z-10 ">
            <p className="">{t('Footer.aboveFooterMenuText')}</p>
            <div className="flex my-5">
              <div className="w-1/4 flex flex-col">
                <Link to={'/'} className="text-orange">
                  {t('navigation.home')}
                </Link>
                <Link to={'/'} className="text-white">
                  {t('navigation.magic')}
                </Link>
                <Link to={'/'} className="text-white">
                  {t('navigation.tools')}
                </Link>
              </div>
              <div className="w-1/4 flex flex-col">
                <Link to={'/'} className="text-orange">
                  {t('navigation.myWork')}
                </Link>
                <Link to={'/'} className="text-white">
                  {t('navigation.projects')}
                </Link>
                <Link to={'/'} className="text-white">
                  {t('navigation.services')}
                </Link>
                <Link to={'/'} className="text-white">
                  {t('navigation.blog')}
                </Link>
              </div>
              <div className="w-1/4 flex flex-col">
                <Link to={'/'} className="text-orange">
                  {t('navigation.about')}
                </Link>
                <Link to={'/'} className="text-white">
                  {t('navigation.aboutMe')}
                </Link>
                <Link to={'/'} className="text-white">
                  {t('navigation.skills')}
                </Link>
              </div>{' '}
              <div className="w-1/4 flex flex-col">
                <Link to={'/'} className="text-orange">
                  {t('navigation.contact')}
                </Link>
              </div>
            </div>
            <img src={Hands} alt="Image of hands with crystal ball" className="absolute bottom-0 right-0" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
