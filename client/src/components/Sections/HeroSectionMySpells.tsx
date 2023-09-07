import floatingItems from '../../assets/Floating_items_tiny.png'
import bottomDivider from '../../assets/HeroMagicBottomDivider.svg'
import TextBlockWithDescription from '../UI/TextBlockWithDescription'
interface Props {
  sectionOneDescription: string
  sectionOneParagraph: string
}
const HeroSectionMySpells = (props: Props) => {
  return (
    <section id="magic">
      <div className="h-[100px] bg-gradient-to-b from-[#130C6C] to-[#170126]"></div>
      <div className="bg-gradient-to-b from-[#170126] to-[#280C20]">
        <div className="flex max-w-[1920px] mx-auto gap-12 justify-between items-center p-12 flex-col lg:flex-row text-center  lg:text-left">
          <TextBlockWithDescription
            sectionDescription={props.sectionOneDescription}
            sectionParagraph={props.sectionOneParagraph}
            i18nKey="HomePage.sectionOneHeading"
          />
          <img
            src={floatingItems}
            alt="Floating magical items, a scroll, a book, a crystal and a potion"
            className="w-[70%] lg:w-[40%]"
          />
        </div>

        <img src={bottomDivider} alt="Section bottom divider image" className="w-full" />
      </div>
    </section>
  )
}
export default HeroSectionMySpells
