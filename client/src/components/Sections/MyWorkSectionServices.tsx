import { Trans, useTranslation } from 'react-i18next'

import divider from '../../assets/myWorkServicesDivider.svg'
import FigmaIcon from '../Icons/FigmaIcon'
import MJMLIcon from '../Icons/MJMLIconWhite'
import ReactIcon from '../Icons/ReactIcon'
import WooCommerceIcon from '../Icons/WooCommerceIcon'
import WordpressIcon from '../Icons/WordpressIcon'
import Service from '../UI/Service'
const MyWorkSectionServices = () => {
  const { t } = useTranslation()
  return (
    <section
      id="services"
      className="bg-gradient-to-b from-[#170126] to-[#050A44] relative px-9 pt-12 pb-[10vh] md:pb-[20vh] lg:pb-[30vh]"
    >
      <Trans i18nKey="myWorkPage.ServicesTitle">
        <h2 className="mx-auto font-display text-2xl md:text-5xl font-medium text-center mb-20">
          My <span className="text-transparent bg-gradient-to-br bg-clip-text from-pink to-orange">Skills</span>
        </h2>
      </Trans>
      <div className="flex gap-12 flex-wrap max-w-[1920px] mx-auto justify-center">
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
      </div>
      <img
        src={divider}
        alt="Section bottom divider image not-sr-only"
        className="w-full absolute left-0 bottom-[-1px] 2xl:bottom-[-4px]"
      />
    </section>
  )
}

export default MyWorkSectionServices
