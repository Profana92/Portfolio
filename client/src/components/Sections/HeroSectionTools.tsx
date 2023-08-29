import BeforeFooterBottomDivider from '../../assets/BeforeFooterBottomDivider.svg'
import HeroBook from '../../assets/HeroBook.svg'
import Mask from '../../assets/Mask.svg'
import Potion from '../../assets/Potion.svg'
import Scroll from '../../assets/Scroll.svg'
import MagicItemIcon from '../UI/MagicItemIcon'
import TextBlockWithDescription from '../UI/TextBlockWithDescription'

interface Props {
  SectionTwoElementOneDescription: string
  SectionTwoElementTwoDescription: string
  SectionTwoElementThreeDescription: string
  SectionTwoElementFourDescription: string
  SectionTwoElementOneHeading: string
  SectionTwoElementTwoHeading: string
  SectionTwoElementThreeHeading: string
  SectionTwoElementFourHeading: string
  SectionTwoElementOneParagraph: string
  SectionTwoElementTwoParagraph: string
  SectionTwoElementThreeParagraph: string
  SectionTwoElementFourParagraph: string
}
const HeroSectionTools = (props: Props) => {
  return (
    <section id="tools">
      <div className="bg-gradient-to-b from-[#33091D] to-[#9B1536]">
        <div className="flex max-w-[1920px] mx-auto gap-12 justify-center items-start py-12">
          <div className="flex items-center justify-center gap-12">
            <MagicItemIcon description="A Spellbook, magical item" image={HeroBook} />
            <TextBlockWithDescription
              sectionDescription={props.SectionTwoElementOneDescription}
              sectionParagraph={props.SectionTwoElementOneParagraph}
              i18nKey="HomePage.SectionTwoElementOneHeading"
            />
          </div>
          <div className="flex items-center justify-center gap-12">
            <MagicItemIcon description="A Potion, magical item" image={Potion} />
            <TextBlockWithDescription
              sectionDescription={props.SectionTwoElementTwoDescription}
              sectionParagraph={props.SectionTwoElementTwoParagraph}
              i18nKey="HomePage.SectionTwoElementTwoHeading"
            />
          </div>
        </div>
        <div className="flex max-w-[1920px] mx-auto gap-12 justify-center items-start py-12">
          <div className="flex items-center justify-center gap-12">
            <MagicItemIcon description="A Scroll, magical item" image={Scroll} />
            <TextBlockWithDescription
              sectionDescription={props.SectionTwoElementThreeDescription}
              sectionParagraph={props.SectionTwoElementThreeParagraph}
              i18nKey="HomePage.SectionTwoElementThreeHeading"
            />
          </div>
          <div className="flex items-center justify-center gap-12">
            <MagicItemIcon description="A Mask, magical item" image={Mask} />
            <TextBlockWithDescription
              sectionDescription={props.SectionTwoElementFourDescription}
              sectionParagraph={props.SectionTwoElementFourParagraph}
              i18nKey="HomePage.SectionTwoElementFourHeading"
            />
          </div>
        </div>
        <img src={BeforeFooterBottomDivider} alt="Section bottom divider image" className="w-full" />
      </div>
    </section>
  )
}
export default HeroSectionTools
