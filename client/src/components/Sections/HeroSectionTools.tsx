import { useTranslation } from 'react-i18next'

import BeforeFooterBottomDivider from '../../assets/BeforeFooterBottomDivider.svg'
import HeroBook from '../../assets/HeroBook.svg'
import Mask from '../../assets/Mask.svg'
import Potion from '../../assets/Potion.svg'
import Scroll from '../../assets/Scroll.svg'
import HeadingSecondary from '../UI/Heading/HeadingSecondary'
import MagicItemIcon from '../UI/MagicItemIcon'
import Paragraph from '../UI/Paragraph/Paragraph'
import ParagraphUppercase from '../UI/Paragraph/ParagraphUppercase'

const HeroSectionTools = () => {
  const { t } = useTranslation()
  return (
    <section id="tools">
      <div className="bg-gradient-to-b from-[#33091D] to-[#9B1536] text-center gap-12">
        <div className="flex flex-col lg:flex-row max-w-[1920px] mx-auto gap-12 justify-center items-start p-12">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
            <MagicItemIcon description="A Spellbook, magical item" image={HeroBook} />
            <div>
              <ParagraphUppercase textContent={t('HomePage.SectionTwoElementOneDescription')} />
              <HeadingSecondary transKey="HomePage.SectionTwoElementOneHeading" decoration="partial" />
              <Paragraph decoration="none" textContent={t('HomePage.SectionTwoElementOneParagraph')} />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
            <MagicItemIcon description="A Potion, magical item" image={Potion} />
            <div>
              <ParagraphUppercase textContent={t('HomePage.SectionTwoElementTwoDescription')} />
              <HeadingSecondary transKey="HomePage.SectionTwoElementTwoHeading" decoration="partial" />
              <Paragraph decoration="none" textContent={t('HomePage.SectionTwoElementTwoParagraph')} />
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row max-w-[1920px] mx-auto gap-12 justify-center items-start px-12 pb-12">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
            <MagicItemIcon description="A Scroll, magical item" image={Scroll} />
            <div>
              <ParagraphUppercase textContent={t('HomePage.SectionTwoElementThreeDescription')} />
              <HeadingSecondary transKey="HomePage.SectionTwoElementThreeHeading" decoration="partial" />
              <Paragraph decoration="none" textContent={t('HomePage.SectionTwoElementThreeParagraph')} />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
            <MagicItemIcon description="A Mask, magical item" image={Mask} />
            <div>
              <ParagraphUppercase textContent={t('HomePage.SectionTwoElementFourDescription')} />
              <HeadingSecondary transKey="HomePage.SectionTwoElementFourHeading" decoration="partial" />
              <Paragraph decoration="none" textContent={t('HomePage.SectionTwoElementFourParagraph')} />
            </div>
          </div>
        </div>
        <img src={BeforeFooterBottomDivider} alt="Section bottom divider image" className="w-full" />
      </div>
    </section>
  )
}
export default HeroSectionTools
