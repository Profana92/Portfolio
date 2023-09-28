import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import Hands from '../../assets/Hands.png'
import InstagramIcon from '../../assets/InstagramIcon.svg'
import LinkedInIcon from '../../assets/LinkedInIcon.svg'
import TwitterIcon from '../../assets/TwitterIcon.svg'
import LanguageSwitcherMobile from '../Header/LanguageSwitcherMobile'
import HeadingSecondary from '../UI/Heading/HeadingSecondary'
import LinksColumn from '../UI/LinksColumn'
import Paragraph from '../UI/Paragraph/Paragraph'
import Quote from '../UI/Quote'

import FooterForm from './FooterForm'
const Footer = () => {
  const { t } = useTranslation()
  return (
    <footer className="bg-gradient-to-b from-[#440B7E] to-[#090120] lg:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 bg-[#D9D9D90D] max-w-[90vw] mx-auto rounded-md shadow-lg lg:gap-x-6 xl:gap-x-12 my-12 lg:max-w-[1440px] relative">
        <div className="row-start-1 row-end-2 lg:row-start-1 lg:row-end-4 p-6 ">
          <Quote decoration="none" textContent={t('Footer.Description')} />
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
          <FooterForm />
          <Paragraph decoration="none" textContent={t('Footer.formUnderText')} />
        </div>
        <div className="lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-5">
          <div className="m-6 lg:my-6">
            <Quote decoration="none" textContent={t('Footer.aboveFooterMenuText')} />
            <div className="flex text-sm lg:text-base lg:gap-2 my-6">
              <LinksColumn
                elements={[
                  { link: '/#home', textContent: t('navigation.home') },
                  { link: '/#magic', textContent: t('navigation.magic') },
                  { link: '/#tools', textContent: t('navigation.tools') },
                ]}
              />
              <LinksColumn
                elements={[
                  { link: '/my-work/#hero', textContent: t('navigation.myWork') },
                  { link: '/my-work/#projects', textContent: t('navigation.projects') },
                  { link: '/my-work/#services', textContent: t('navigation.services') },
                  { link: '/my-work/#blog', textContent: t('navigation.blog') },
                ]}
              />
              <LinksColumn
                elements={[
                  { link: '/about/#hero', textContent: t('navigation.about') },
                  { link: '/about/#skills', textContent: t('navigation.skills') },
                ]}
              />
              <LinksColumn elements={[{ link: '/contact#hero', textContent: t('navigation.contact') }]} />
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
