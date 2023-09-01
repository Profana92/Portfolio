import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

import AdobeIllustratorIcon from '../Icons/AdobeIllustratorIcon'
import AdobePhotoshopIcon from '../Icons/AdobePhotoshopIcon'
import AdobeXDIcon from '../Icons/AdobeXDIcon'
import ApacheIcon from '../Icons/ApacheIcon'
import CSSIcon from '../Icons/CSSIcon'
import ExpressJsIcon from '../Icons/ExpressJsIcon'
import FigmaIcon from '../Icons/FigmaIcon'
import GIMPIcon from '../Icons/GIMPIcon'
import HTMLIcon from '../Icons/HTMLIcon'
import JavaScriptIcon from '../Icons/JavaScriptIcon'
import MJMLIcon from '../Icons/MJMLIcon'
import MongoDBIcon from '../Icons/MongoDBIcon'
import NGINXIcon from '../Icons/NGINXIcon'
import NodeJsIcon from '../Icons/NodeJsIcon'
import NPMIcon from '../Icons/NPMIcon'
import ReactIcon from '../Icons/ReactIcon'
import TypeScriptIcon from '../Icons/TypeScriptIcon'
import UbuntuIcon from '../Icons/UbuntuIcon'
import WooCommerceIcon from '../Icons/WooCommerceIcon'
import WordpressIcon from '../Icons/WordpressIcon'
const AboutSectionMySkills = () => {
  const technologies = {
    frontEnd: [
      { technology: 'HTML', icon: HTMLIcon },
      { technology: 'CSS', icon: CSSIcon },
      { technology: 'npm', icon: NPMIcon },
      { technology: 'WooCommerce', icon: WooCommerceIcon },
      { technology: 'Wordpress', icon: WordpressIcon },
      { technology: 'React', icon: ReactIcon },
      { technology: 'JavaScript', icon: JavaScriptIcon },
      { technology: 'TypeScript', icon: TypeScriptIcon },
      { technology: 'MJML', icon: MJMLIcon },
    ],
    backEnd: [
      { technology: 'NodeJs', icon: NodeJsIcon },
      { technology: 'Expressjs', icon: ExpressJsIcon },
      { technology: 'MongoDB', icon: MongoDBIcon },
    ],
    design: [
      { technology: 'Figma', icon: FigmaIcon },
      { technology: 'AdobeXD', icon: AdobeXDIcon },
      { technology: 'AdobeIllustrator', icon: AdobeIllustratorIcon },
      { technology: 'AdobePhotoshop', icon: AdobePhotoshopIcon },
      { technology: 'GIMP', icon: GIMPIcon },
    ],
    servers: [
      { technology: 'Nginx', icon: NGINXIcon },
      { technology: 'Apache', icon: ApacheIcon },
      { technology: 'Ubuntu', icon: UbuntuIcon },
    ],
  }

  const [activeTechnology, setActiveTechnology] = useState('HTML')
  const [activeCategory, setActiveCategory] = useState('frontEnd')

  const { t } = useTranslation()
  return (
    <section id="skills" className="bg-gradient-to-b from-[#1E0E32] to-[#440B7E] text-center lg:px-12 pt-12">
      <div className="flex flex-col bg-[#D9D9D90D] max-w-[90vw] mx-auto rounded-md shadow-lg  pt-12 pb-6 lg:max-w-[1920px]">
        <div className="flex flex-col md:flex-row items-center md:justify-center gap-3 md:gap-6">
          <div className="w-[162px] inline-block rounded-[5px] bg-gradient-to-r from-pink to-orange p-[1px]">
            <button
              className={`inline-block w-40 ${
                activeCategory === 'frontEnd' ? 'bg-buttonOrange' : ' bg-buttonBlue'
              } buttonsFix:mr-2 md:mr-8 text-center leading-[50px] rounded-[5px] text-sm md:text-base md:leading-[50px]`}
              onClick={() => {
                setActiveTechnology('HTML')
                setActiveCategory('frontEnd')
              }}
            >
              {t('mySkills.buttonOne')}
            </button>
          </div>
          <div className="w-[162px] inline-block rounded-[5px] bg-gradient-to-r from-pink to-orange p-[1px]">
            <button
              className={`inline-block w-40 ${
                activeCategory === 'backEnd' ? 'bg-buttonOrange' : ' bg-buttonBlue'
              } buttonsFix:mr-2 md:mr-8 text-center leading-[50px] rounded-[5px] text-sm md:text-base md:leading-[50px]`}
              onClick={() => {
                setActiveTechnology('NodeJs')
                setActiveCategory('backEnd')
              }}
            >
              {t('mySkills.buttonTwo')}
            </button>
          </div>
          <div className="w-[162px] inline-block rounded-[5px] bg-gradient-to-r from-pink to-orange p-[1px]">
            <button
              className={`inline-block w-40 ${
                activeCategory === 'design' ? 'bg-buttonOrange' : ' bg-buttonBlue'
              } buttonsFix:mr-2 md:mr-8 text-center leading-[50px] rounded-[5px] text-sm md:text-base md:leading-[50px]`}
              onClick={() => {
                setActiveTechnology('Figma')
                setActiveCategory('design')
              }}
            >
              {t('mySkills.buttonThree')}
            </button>
          </div>
          <div className="w-[162px] inline-block rounded-[5px] bg-gradient-to-r from-pink to-orange p-[1px]">
            <button
              className={`inline-block w-40 ${
                activeCategory === 'servers' ? 'bg-buttonOrange' : ' bg-buttonBlue'
              } buttonsFix:mr-2 md:mr-8 text-center leading-[50px] rounded-[5px] text-sm md:text-base md:leading-[50px]`}
              onClick={() => {
                setActiveTechnology('Nginx')
                setActiveCategory('servers')
              }}
            >
              {t('mySkills.buttonFour')}
            </button>
          </div>
        </div>
        <div className="bg-[#2D1349] my-6 mx-3 flex flex-col justify-center items-center">
          {technologies[activeCategory].map((item, index) => {
            return item.technology === activeTechnology ? (
              <motion.div
                className="m-6 flex justify-center items-center flex-col gap-6 text-left text-sm lg:text-base"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                key={index}
              >
                <item.icon fill={'#fff'} />
                <p className="max-w-xl">{t(`mySkills.${activeTechnology}.Description`)}</p>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  to={t(`mySkills.${activeTechnology}.Link`)}
                  className="bg-gradient-to-r text-transparent bg-clip-text from-pink to-orange p-[1px] font-black text-sm lg:text-base"
                >
                  {t(`mySkills.${activeTechnology}.Website`)}
                </Link>
              </motion.div>
            ) : (
              ''
            )
          })}
        </div>
        <div className="m-auto w-[90%] h-[1px] bg-[#D9D9D940]"></div>
        <div className="bg-[#2D1349] my-6 mx-3 flex flex-wrap justify-center items-center p-6 gap-2">
          {technologies[activeCategory].map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  setActiveTechnology(item.technology)
                }}
              >
                <item.icon fill={`${item.technology === activeTechnology ? '#B44F22' : '#fff'}`} />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default AboutSectionMySkills
