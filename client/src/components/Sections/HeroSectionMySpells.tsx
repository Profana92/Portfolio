import { useTranslation } from 'react-i18next'

import floatingItems from '../../assets/Floating_items_tiny.png'
import ContainerWithContent from '../UI/Containers/ContainerWithContent'
import HeadingSecondary from '../UI/Heading/HeadingSecondary'
import Paragraph from '../UI/Paragraph/Paragraph'
import ParagraphUppercase from '../UI/Paragraph/ParagraphUppercase'

const HeroSectionMySpells = () => {
  const { t } = useTranslation()
  return (
    <section id="magic">
      <div className="h-[100px] bg-gradient-to-b from-[#130C6C] to-[#170126]"></div>
      <div className="bg-gradient-to-b from-[#170126] to-[#33091D]">
        <ContainerWithContent>
          <div>
            <ParagraphUppercase textContent={t('HomePage.sectionOneDescription')} />
            <HeadingSecondary transKey="HomePage.sectionOneHeading" decoration="partial" />
            <Paragraph decoration="none" textContent={t('HomePage.sectionOneParagraph')} />
          </div>
          <img
            src={floatingItems}
            alt="Floating magical items, a scroll, a book, a crystal and a potion"
            className="w-[70%] lg:w-[40%]"
          />
        </ContainerWithContent>
      </div>
    </section>
  )
}
export default HeroSectionMySpells
