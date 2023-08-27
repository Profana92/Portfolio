import floatingItems from '../../assets/Floating_items_tiny.png'
import TextBlockWithDescription from '../UI/TextBlockWithDescription'

const HeroSectionMySpells = () => {
  return (
    <section id="magic">
      <TextBlockWithDescription />
      <img src={floatingItems} alt="Floating magical items, a scroll, a book, a crystal and a potion" className="" />
    </section>
  )
}

export default HeroSectionMySpells
