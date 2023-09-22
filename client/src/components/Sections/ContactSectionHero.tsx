import bottomDivider from '../../assets/ContactDivider.svg'
import HeadingMain from '../UI/Heading/HeadingMain'
interface Props {
  HeroParagraph: string
  HeroAccent: string
}

const ContactSectionHero = (props: Props) => {
  return (
    <section
      id="hero"
      className="bg-contact-hero-pattern min-h-dvh bg-cover bg-no-repeat py-12 flex justify-center lg:justify-end items-center relative"
    >
      <div className="p-12 text-center lg:text-left max-w-[1920px] lg:mr-[10vw] 2xl:mr-[20vw]">
        <HeadingMain decorationInternal={false} textSource="ContactPage.HeroHeading" additionalExternalClasses="" />

        <p className="my-5 max-w-xl leading-normal text-sm md:text-base">{props.HeroParagraph}</p>
        <p className="my-5 max-w-xl leading-normal text-sm md:text-base text-transparent bg-clip-text bg-gradient-to-r from-pink to-orange p-[1px]  font-black">
          {props.HeroAccent}
        </p>
      </div>
      <img src={bottomDivider} alt="Section bottom divider image" className="w-full absolute bottom-0" />
    </section>
  )
}

export default ContactSectionHero
