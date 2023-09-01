import { useState } from 'react'
import { Trans, useTranslation } from 'react-i18next'
import Slider from 'react-slick'
import { AnimatePresence, motion } from 'framer-motion'

import Portfolio from '../../assets/Portfolio.jpg'
import Symbios from '../../assets/symbios.jpg'
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
import FourButtonsRow from '../UI/FourButtonsRow'
import SliderElement from '../UI/Slider'
const MyWorkSectionProjects = () => {
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
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  const { t } = useTranslation()
  const [activeCategory, setactiveCategory] = useState('frontEnd')

  return (
    <section id="projects" className="bg-gradient-to-b from-[#33091D] to-[#9B1536] text-center px-12 py-12">
      <div className="max-w-[1920px] mx-auto">
        <Trans i18nKey="myWorkPage.ProjectsTitle">
          <h2 className="font-display text-2xl md:text-5xl font-medium">
            My <span className="text-transparent bg-gradient-to-br bg-clip-text from-pink to-orange">Skills</span>
          </h2>
        </Trans>
        <FourButtonsRow setactiveCategory={setactiveCategory} activeCategory={activeCategory} />
        <AnimatePresence>
          {activeCategory === 'frontEnd' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <Slider {...settings}>
                <SliderElement
                  image={Symbios}
                  imageAlt="Symbios website project image"
                  heading={t('myWorkPage.ProjectOneTitle')}
                  description={t('myWorkPage.ProjectOneParagraph')}
                  website={t('myWorkPage.ProjectOneWebsite')}
                  link={t('myWorkPage.ProjectOneLink')}
                  type={t('myWorkPage.ProjectOneType')}
                  projectsUsedTechnologies={t('myWorkPage.ProjectsUsedTechnologies')}
                  technologiesUsed={['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'npm', 'NodeJs', 'Expressjs']}
                  technologies={technologies}
                />
                <SliderElement
                  image={Portfolio}
                  imageAlt="Portfolio website project image"
                  heading={t('myWorkPage.ProjectTwoTitle')}
                  description={t('myWorkPage.ProjectTwoParagraph')}
                  website={t('myWorkPage.ProjectTwoWebsite')}
                  link={t('myWorkPage.ProjectTwoLink')}
                  type={t('myWorkPage.ProjectTwoType')}
                  projectsUsedTechnologies={t('myWorkPage.ProjectsUsedTechnologies')}
                  technologiesUsed={[
                    'HTML',
                    'CSS',
                    'JavaScript',
                    'TypeScript',
                    'React',
                    'npm',
                    'Figma',
                    'AdobeIllustrator',
                    'Nginx',
                    'Ubuntu',
                  ]}
                  technologies={technologies}
                />
              </Slider>
            </motion.div>
          )}
          {activeCategory === 'backEnd' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <Slider {...settings}>
                <SliderElement
                  image={Symbios}
                  imageAlt="Symbios website project image"
                  heading={t('myWorkPage.ProjectOneTitle')}
                  description={t('myWorkPage.ProjectOneParagraph')}
                  website={t('myWorkPage.ProjectOneWebsite')}
                  link={t('myWorkPage.ProjectOneLink')}
                  type="commercial"
                  projectsUsedTechnologies={t('myWorkPage.ProjectsUsedTechnologies')}
                  technologiesUsed={['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'npm']}
                  technologies={technologies}
                />
              </Slider>
            </motion.div>
          )}
          {activeCategory === 'design' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <Slider {...settings}>
                <SliderElement
                  image={Symbios}
                  imageAlt="Symbios website project image"
                  heading={t('myWorkPage.ProjectOneTitle')}
                  description={t('myWorkPage.ProjectOneParagraph')}
                  website={t('myWorkPage.ProjectOneWebsite')}
                  link={t('myWorkPage.ProjectOneLink')}
                  type="commercial"
                  projectsUsedTechnologies={t('myWorkPage.ProjectsUsedTechnologies')}
                  technologiesUsed={['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'npm']}
                  technologies={technologies}
                />
              </Slider>
            </motion.div>
          )}
          {activeCategory === 'servers' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <Slider {...settings}>
                <SliderElement
                  image={Symbios}
                  imageAlt="Symbios website project image"
                  heading={t('myWorkPage.ProjectOneTitle')}
                  description={t('myWorkPage.ProjectOneParagraph')}
                  website={t('myWorkPage.ProjectOneWebsite')}
                  link={t('myWorkPage.ProjectOneLink')}
                  type="commercial"
                  technologiesUsed={['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'npm']}
                  technologies={technologies}
                />
              </Slider>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default MyWorkSectionProjects
