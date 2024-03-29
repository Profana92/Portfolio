import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Slider from 'react-slick'
import { AnimatePresence, motion } from 'framer-motion'

import CRM from '../../assets/crm.png'
import divider from '../../assets/myWorkProjectsBottomDivider.svg'
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
import ContainerWithContent from '../UI/Containers/ContainerWithContent'
import FourButtonsRow from '../UI/FourButtonsRow'
import HeadingSecondary from '../UI/Heading/HeadingSecondary'
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
    <section id="projects" className="bg-gradient-to-b from-[#33091D] to-[#9B1536] text-center px-12 py-12 relative">
      <ContainerWithContent additionalClasses="mb-[10vh] !block px-0">
        <HeadingSecondary
          transKey="myWorkPage.ProjectsTitle"
          decoration="partial"
          additionalClasses="mx-auto text-center"
        />
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
                  ProjectType={t('myWorkPage.ProjectType')}
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
                    'React',
                    'TypeScript',
                    'Figma',
                    'AdobeIllustrator',
                    'GIMP',
                    'npm',
                    'Nginx',
                    'Ubuntu',
                  ]}
                  technologies={technologies}
                  figma="https://www.figma.com/file/imXuoBkK0z5RC6c6iNKRA6/Portfolio-W.Marczak?node-id=90%3A4875&mode=dev"
                  ProjectType={t('myWorkPage.ProjectType')}
                />
                <SliderElement
                  image={CRM}
                  imageAlt="Customer Relationship Management website project image"
                  heading={t('myWorkPage.ProjectThreeTitle')}
                  description={t('myWorkPage.ProjectThreeParagraph')}
                  website={t('myWorkPage.ProjectThreeWebsite')}
                  link={t('myWorkPage.ProjectThreeLink')}
                  type={t('myWorkPage.ProjectThreeType')}
                  projectsUsedTechnologies={t('myWorkPage.ProjectsUsedTechnologies')}
                  technologiesUsed={['React', 'TypeScript', 'Figma', 'Expressjs', 'npm']}
                  technologies={technologies}
                  figma="https://www.figma.com/file/VUOE6SdlOxugWH2sYAZFr1/CRM?type=design&node-id=0%3A1&mode=design&t=qSkBVt8B3hgxMOvk-1"
                  ProjectType={t('myWorkPage.ProjectType')}
                />
              </Slider>
            </motion.div>
          )}
          {activeCategory === 'backEnd' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <Slider></Slider>
            </motion.div>
          )}
          {activeCategory === 'design' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <Slider>
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
                    'React',
                    'TypeScript',
                    'Figma',
                    'AdobeIllustrator',
                    'GIMP',
                    'npm',
                    'Nginx',
                    'Ubuntu',
                  ]}
                  technologies={technologies}
                  figma="https://www.figma.com/file/imXuoBkK0z5RC6c6iNKRA6/Portfolio-W.Marczak?node-id=90%3A4875&mode=dev"
                  ProjectType={t('myWorkPage.ProjectType')}
                />
                <SliderElement
                  image={CRM}
                  imageAlt="Customer Relationship Management website project image"
                  heading={t('myWorkPage.ProjectThreeTitle')}
                  description={t('myWorkPage.ProjectThreeParagraph')}
                  website={t('myWorkPage.ProjectThreeWebsite')}
                  link={t('myWorkPage.ProjectThreeLink')}
                  type={t('myWorkPage.ProjectThreeType')}
                  projectsUsedTechnologies={t('myWorkPage.ProjectsUsedTechnologies')}
                  technologiesUsed={['React', 'TypeScript', 'Figma', 'Expressjs', 'npm']}
                  technologies={technologies}
                  figma="https://www.figma.com/file/VUOE6SdlOxugWH2sYAZFr1/CRM?type=design&node-id=0%3A1&mode=design&t=qSkBVt8B3hgxMOvk-1"
                  ProjectType={t('myWorkPage.ProjectType')}
                />
              </Slider>
            </motion.div>
          )}
          {activeCategory === 'servers' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}></motion.div>
          )}
        </AnimatePresence>
      </ContainerWithContent>
      <img
        src={divider}
        alt="Section bottom divider image"
        className="w-full absolute left-0 bottom-[-1px] 2xl:bottom-[-4px]"
      />
    </section>
  )
}

export default MyWorkSectionProjects
