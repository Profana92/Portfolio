import { useTranslation } from 'react-i18next'

import divider from '../../assets/myWorkServicesDivider.svg'
import FigmaIcon from '../Icons/FigmaIcon'
import MJMLIcon from '../Icons/MJMLIconWhite'
import ReactIcon from '../Icons/ReactIcon'
import WooCommerceIcon from '../Icons/WooCommerceIcon'
import WordpressIcon from '../Icons/WordpressIcon'
import ContainerWithContent from '../UI/Containers/ContainerWithContent'
import HeadingSecondary from '../UI/Heading/HeadingSecondary'
import Service from '../UI/Service'
const MyWorkSectionServices = () => {
  const { t } = useTranslation()
  return (
    <section
      id="services"
      className="bg-gradient-to-b from-[#170126] to-[#050A44] relative px-9 pt-12 pb-[10vh] md:pb-[20vh] lg:pb-[30vh] just"
    >
      <HeadingSecondary
        transKey="myWorkPage.ServicesTitle"
        decoration="partial"
        additionalClasses="mx-auto text-center !my-12"
      />
      <div className="w-[80%] max-w-[1440px] h-[1px] bg-[#D9D9D940] mx-auto my-24"></div>
      <ContainerWithContent additionalClasses="flex-wrap !justify-center gap-x-12 gap-y-16 !pt-0">
        <Service
          icon={ReactIcon}
          heading={t('myWorkPage.ServiceOneHeading')}
          paragraph={t('myWorkPage.ServiceOneParagraph')}
        />
        <Service
          icon={WooCommerceIcon}
          heading={t('myWorkPage.ServiceTwoHeading')}
          paragraph={t('myWorkPage.ServiceTwoParagraph')}
        />
        <Service
          icon={WordpressIcon}
          heading={t('myWorkPage.ServiceThreeHeading')}
          paragraph={t('myWorkPage.ServiceThreeParagraph')}
        />
        <Service
          icon={MJMLIcon}
          heading={t('myWorkPage.ServiceFourHeading')}
          paragraph={t('myWorkPage.ServiceFourParagraph')}
        />
        <Service
          icon={FigmaIcon}
          heading={t('myWorkPage.ServiceFiveHeading')}
          paragraph={t('myWorkPage.ServiceFiveParagraph')}
        />
      </ContainerWithContent>
      <img
        src={divider}
        alt="Section bottom divider image not-sr-only"
        className="w-full absolute left-0 bottom-[-1px] 2xl:bottom-[-4px]"
      />
    </section>
  )
}

export default MyWorkSectionServices
