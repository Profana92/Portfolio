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
import ButtonForTechnologies from '../UI/Buttons/ButtonForTechnologies'
import ContainerWithContent from '../UI/Containers/ContainerWithContent'
import Paragraph from '../UI/Paragraph/Paragraph'

interface TechnologiesIF {
  [key: string]: {
    technology: string
    icon: any
  }[]
}
const AboutSectionMySkills = () => {
  const technologies: TechnologiesIF = {
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
      <ContainerWithContent additionalClasses="bg-[#D9D9D90D] lg:flex-col">
        <div className="flex flex-col md:flex-row items-center md:justify-center gap-3 md:gap-6">
          <ButtonForTechnologies
            textContent={t('mySkills.buttonOne')}
            activeCategory={activeCategory}
            setActiveTechnology={setActiveTechnology}
            setActiveCategory={setActiveCategory}
            technologyToSet="HTML"
            categoryToSet="frontEnd"
          />
          <ButtonForTechnologies
            textContent={t('mySkills.buttonTwo')}
            activeCategory={activeCategory}
            setActiveTechnology={setActiveTechnology}
            setActiveCategory={setActiveCategory}
            technologyToSet="NodeJs"
            categoryToSet="backEnd"
          />
          <ButtonForTechnologies
            textContent={t('mySkills.buttonThree')}
            activeCategory={activeCategory}
            setActiveTechnology={setActiveTechnology}
            setActiveCategory={setActiveCategory}
            technologyToSet="Figma"
            categoryToSet="design"
          />
          <ButtonForTechnologies
            textContent={t('mySkills.buttonFour')}
            activeCategory={activeCategory}
            setActiveTechnology={setActiveTechnology}
            setActiveCategory={setActiveCategory}
            technologyToSet="Nginx"
            categoryToSet="servers"
          />
        </div>
        <div className="w-full bg-[#2D1349] my-6 mx-3 flex flex-col justify-center items-center">
          {technologies[activeCategory].map((item, index) => {
            return item.technology === activeTechnology ? (
              <motion.div
                className="m-6 flex justify-center items-center flex-col gap-6 text-left text-sm lg:text-base"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                key={index}
              >
                <item.icon fill="#fff" />
                <Paragraph decoration="none" textContent={t(`mySkills.${activeTechnology}.Description`)} />
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
        <div className="w-full bg-[#2D1349] my-6 mx-3 flex flex-wrap justify-center items-center p-6 gap-2">
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
      </ContainerWithContent>
    </section>
  )
}

export default AboutSectionMySkills
