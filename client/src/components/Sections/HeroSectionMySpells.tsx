import { useTranslation } from 'react-i18next'

import floatingItems from '../../assets/Floating_items_tiny.png'
import bottomDivider from '../../assets/HeroMagicBottomDivider.svg'
import ContainerWithContent from '../UI/Containers/ContainerWithContent'
import TextBlockWithDescription from '../UI/TextBlockWithDescription'

const HeroSectionMySpells = () => {
  const { t } = useTranslation()
  return (
    <section id="magic">
      <div className="h-[100px] bg-gradient-to-b from-[#130C6C] to-[#170126]"></div>
      <div className="bg-gradient-to-b from-[#170126] to-[#280C20]">
        <ContainerWithContent>
          <TextBlockWithDescription
            sectionDescription={t('HomePage.sectionOneDescription')}
            sectionParagraph={t('HomePage.sectionOneParagraph')}
            i18nKey="HomePage.sectionOneHeading"
          />
          <img
            src={floatingItems}
            alt="Floating magical items, a scroll, a book, a crystal and a potion"
            className="w-[70%] lg:w-[40%]"
          />
        </ContainerWithContent>

        <img src={bottomDivider} alt="Section bottom divider image" className="w-full" />
      </div>
    </section>
  )
}
export default HeroSectionMySpells
